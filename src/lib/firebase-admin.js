// Firebase admin utilities for CRUD operations
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  limit,
  Timestamp 
} from "firebase/firestore";
import { db } from "./firebase";

// Generic CRUD operations
export const firebaseAdmin = {
  // Create
  async create(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error creating document:", error);
      return { success: false, error: error.message };
    }
  },

  // Read single document
  async getById(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: "Document not found" };
      }
    } catch (error) {
      console.error("Error reading document:", error);
      return { success: false, error: error.message };
    }
  },

  // Read all documents
  async getAll(collectionName, options = {}) {
    try {
      let q = collection(db, collectionName);
      
      // Apply query constraints
      const constraints = [];
      if (options.where) {
        constraints.push(where(options.where.field, options.where.operator, options.where.value));
      }
      if (options.orderBy) {
        constraints.push(orderBy(options.orderBy.field, options.orderBy.direction || 'asc'));
      }
      if (options.limit) {
        constraints.push(limit(options.limit));
      }
      
      if (constraints.length > 0) {
        q = query(q, ...constraints);
      }
      
      const querySnapshot = await getDocs(q);
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      
      return { success: true, data: documents };
    } catch (error) {
      console.error("Error reading documents:", error);
      return { success: false, error: error.message };
    }
  },

  // Update
  async update(collectionName, id, data) {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now()
      });
      return { success: true };
    } catch (error) {
      console.error("Error updating document:", error);
      return { success: false, error: error.message };
    }
  },

  // Delete
  async delete(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error("Error deleting document:", error);
      return { success: false, error: error.message };
    }
  },

  // Get by ID (added for consistency)
  async getById(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: "Document not found" };
      }
    } catch (error) {
      console.error("Error reading document:", error);
      return { success: false, error: error.message };
    }
  }
};

// Collection-specific helpers
export const blogAPI = {
  getAll: () => firebaseAdmin.getAll('blogs', { orderBy: { field: 'createdAt', direction: 'desc' } }),
  getBySlug: async (slug) => {
    const result = await firebaseAdmin.getAll('blogs', { where: { field: 'slug', operator: '==', value: slug } });
    return result.success && result.data.length > 0 ? { success: true, data: result.data[0] } : { success: false };
  },
  create: (data) => firebaseAdmin.create('blogs', data),
  update: (id, data) => firebaseAdmin.update('blogs', id, data),
  delete: (id) => firebaseAdmin.delete('blogs', id),
};

export const portfolioAPI = {
  getAll: () => firebaseAdmin.getAll('portfolio'),
  getById: (id) => firebaseAdmin.getById('portfolio', id),
  create: (data) => firebaseAdmin.create('portfolio', data),
  update: (id, data) => firebaseAdmin.update('portfolio', id, data),
  delete: (id) => firebaseAdmin.delete('portfolio', id),
};

export const projectAPI = {
  getAll: () => firebaseAdmin.getAll('projects'),
  getById: (id) => firebaseAdmin.getById('projects', id),
  create: (data) => firebaseAdmin.create('projects', data),
  update: (id, data) => firebaseAdmin.update('projects', id, data),
  delete: (id) => firebaseAdmin.delete('projects', id),
};

export const testimonialAPI = {
  getAll: () => firebaseAdmin.getAll('testimonials'),
  create: (data) => firebaseAdmin.create('testimonials', data),
  update: (id, data) => firebaseAdmin.update('testimonials', id, data),
  delete: (id) => firebaseAdmin.delete('testimonials', id),
};

export const jobAPI = {
  getAll: () => firebaseAdmin.getAll('jobs'),
  create: (data) => firebaseAdmin.create('jobs', data),
  update: (id, data) => firebaseAdmin.update('jobs', id, data),
  delete: (id) => firebaseAdmin.delete('jobs', id),
};

export const teamAPI = {
  getAll: () => firebaseAdmin.getAll('team'),
  create: (data) => firebaseAdmin.create('team', data),
  update: (id, data) => firebaseAdmin.update('team', id, data),
  delete: (id) => firebaseAdmin.delete('team', id),
};

export const contactAPI = {
  create: (data) => firebaseAdmin.create('contacts', data),
  getAll: () => firebaseAdmin.getAll('contacts', { orderBy: { field: 'createdAt', direction: 'desc' } }),
};
