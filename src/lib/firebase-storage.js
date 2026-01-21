/**
 * Firebase Storage utilities for file uploads
 */

import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

/**
 * Upload an image file to Firebase Storage
 * @param {File} file - The image file to upload
 * @param {string} folder - The folder path in storage (e.g., 'team', 'blog', 'projects')
 * @returns {Promise<{success: boolean, url?: string, error?: string}>}
 */
export async function uploadImage(file, folder = 'images') {
  try {
    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return { success: false, error: 'Invalid file type. Please upload an image (JPEG, PNG, GIF, or WebP)' };
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return { success: false, error: 'File size too large. Maximum size is 5MB' };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const fileName = `${timestamp}_${cleanFileName}`;
    const filePath = `${folder}/${fileName}`;

    // Create storage reference
    const storageRef = ref(storage, filePath);

    // Upload file
    await uploadBytes(storageRef, file, {
      contentType: file.type,
    });

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);

    return {
      success: true,
      url: downloadURL,
      path: filePath,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      success: false,
      error: error.message || 'Failed to upload image',
    };
  }
}

/**
 * Delete an image from Firebase Storage
 * @param {string} url - The download URL or storage path
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deleteImage(url) {
  try {
    if (!url) {
      return { success: false, error: 'No URL provided' };
    }

    // Extract path from URL if it's a download URL
    let path = url;
    if (url.includes('firebasestorage.googleapis.com')) {
      const matches = url.match(/\/o\/(.+?)\?/);
      if (matches && matches[1]) {
        path = decodeURIComponent(matches[1]);
      }
    }

    const storageRef = ref(storage, path);
    await deleteObject(storageRef);

    return { success: true };
  } catch (error) {
    console.error('Error deleting image:', error);
    return {
      success: false,
      error: error.message || 'Failed to delete image',
    };
  }
}

/**
 * Upload multiple images
 * @param {FileList|File[]} files - Array of files to upload
 * @param {string} folder - The folder path in storage
 * @returns {Promise<{success: boolean, urls?: string[], errors?: string[]}>}
 */
export async function uploadMultipleImages(files, folder = 'images') {
  const results = await Promise.all(
    Array.from(files).map(file => uploadImage(file, folder))
  );

  const urls = results.filter(r => r.success).map(r => r.url);
  const errors = results.filter(r => !r.success).map(r => r.error);

  return {
    success: errors.length === 0,
    urls,
    errors: errors.length > 0 ? errors : undefined,
  };
}
