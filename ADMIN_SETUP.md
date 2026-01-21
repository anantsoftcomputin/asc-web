# Firebase Admin Integration - Setup Guide

This guide will help you set up and use the Firebase-integrated admin panel for your Anant Soft Computing website.

## 🚀 Features

- **Complete CMS**: Manage blogs, projects, jobs, team members, and testimonials
- **Firebase Backend**: All data stored in Firebase Firestore
- **Secure Authentication**: Firebase Authentication for admin access
- **Real-time Updates**: Changes reflect immediately on the website
- **Contact Form Integration**: All form submissions saved to Firebase
- **Data Migration**: Script to migrate existing data to Firebase

## 📋 Prerequisites

- Firebase project created at https://console.firebase.google.com
- Node.js 18+ installed
- Access to Firebase Authentication and Firestore

## 🔧 Setup Instructions

### 1. Firebase Console Setup

1. **Go to Firebase Console**: https://console.firebase.google.com
2. **Select your project**: `email-47a06`

3. **Enable Authentication**:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider
   - Click "Add new user" to create an admin account
   - Enter email: `admin@anantsoftcomputing.com` (or your preferred email)
   - Enter a secure password
   - Save the user

4. **Enable Firestore Database**:
   - Go to Firestore Database
   - Click "Create database"
   - Choose "Start in production mode"
   - Select your region (preferably `asia-south1` for India)
   - Click "Enable"

5. **Set Firestore Rules** (for testing, replace with secure rules later):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow authenticated users to read/write
       match /{document=**} {
         allow read: if true; // Public read access
         allow write: if request.auth != null; // Only authenticated users can write
       }
     }
   }
   ```

### 2. Install Dependencies

The Firebase SDK is already installed, but if you need to reinstall:

```bash
npm install firebase
```

### 3. Access the Admin Panel

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the login page**:
   ```
   http://localhost:3000/admin/login
   ```

3. **Login with the credentials you created in Firebase Console**

## 📊 Data Migration

To migrate your existing data to Firebase:

1. **Navigate to the migration page**:
   ```
   http://localhost:3000/admin/migrate
   ```

2. **Click "Start Migration"** button

3. **Wait for the process to complete**
   - The script will migrate:
     - Blog posts (first 10 for testing)
     - Projects
     - Testimonials
     - Team members

4. **Check the console** for detailed logs

5. **Verify in Firebase Console**:
   - Go to Firestore Database
   - You should see collections: `blogs`, `projects`, `testimonials`, `team`

## 📱 Admin Panel Features

### Dashboard (`/admin/dashboard`)
- Overview of all content
- Quick stats
- Quick action buttons

### Blog Management (`/admin/blogs`)
- View all blog posts
- Search and filter by category
- Create new posts
- Edit existing posts
- Delete posts
- Live preview links

### Projects (`/admin/projects`)
- Manage portfolio projects
- Coming soon (similar to blogs)

### Jobs (`/admin/jobs`)
- Manage job openings
- Coming soon

### Team (`/admin/team`)
- Manage team members
- Coming soon

### Testimonials (`/admin/testimonials`)
- Manage client testimonials
- Coming soon

### Contact Messages (`/admin/contacts`)
- View all contact form submissions
- Delete old messages
- Contact information displayed

## 🔐 Security Best Practices

### 1. Update Firestore Rules

Replace the test rules with production-ready rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read for blogs, projects, testimonials, team
    match /{collection}/{document} {
      allow read: if collection in ['blogs', 'projects', 'testimonials', 'team'];
      allow write: if request.auth != null;
    }
    
    // Only authenticated users can read contacts
    match /contacts/{contact} {
      allow read, write: if request.auth != null;
    }
    
    // Authenticated users can write, but verify email domain
    match /{document=**} {
      allow write: if request.auth != null && 
                     request.auth.token.email.matches('.*@anantsoftcomputing.com');
    }
  }
}
```

### 2. Secure Environment Variables

Create `.env.local` file (add to `.gitignore`):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCvm57I6B15isvTKxzDdC_yQD6lZQEC250
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=email-47a06.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=email-47a06
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=email-47a06.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=917503015938
NEXT_PUBLIC_FIREBASE_APP_ID=1:917503015938:web:e0a7ea90da32c0f0ab3b1b
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-RW1HZ4DP3V
```

Then update `src/lib/firebase.js` to use env variables.

### 3. Restrict Admin Access

In Firebase Console:
- Go to Authentication > Users
- Only add admin emails you trust
- Enable 2FA if available

## 🌐 Frontend Integration

The following pages now fetch data from Firebase:

- **Blog List**: `/blog` - Shows all blog posts from Firestore
- **Blog Post**: `/blog/[slug]` - Individual blog posts
- **Contact Form**: Submissions saved to Firestore `contacts` collection

To integrate more pages (Projects, Testimonials, Team):

1. Update the component to use Firebase API:
   ```javascript
   import { projectAPI } from '../lib/firebase-admin';
   
   const [projects, setProjects] = useState([]);
   
   useEffect(() => {
     const loadProjects = async () => {
       const result = await projectAPI.getAll();
       if (result.success) {
         setProjects(result.data);
       }
     };
     loadProjects();
   }, []);
   ```

## 🚨 Troubleshooting

### "Permission Denied" Errors

**Problem**: Can't read/write to Firestore

**Solutions**:
1. Check Firestore Rules in Firebase Console
2. Ensure you're logged in to admin panel
3. Verify authentication token is valid

### "User not found" on Login

**Problem**: Can't login to admin panel

**Solutions**:
1. Verify user exists in Firebase Authentication
2. Check email/password are correct
3. Ensure Email/Password provider is enabled

### Data Not Showing

**Problem**: Admin dashboard shows 0 items

**Solutions**:
1. Run the migration script first
2. Check Firestore Console for collections
3. Check browser console for errors

### Build Errors

**Problem**: Next.js build fails

**Solutions**:
1. Ensure all imports are correct
2. Check for async/await issues in server components
3. Run `npm install` to reinstall dependencies

## 📞 Support

For issues or questions:
- Email: support@anantsoftcomputing.com
- Check Firebase Console logs
- Check browser console for errors

## 🎯 Next Steps

1. **Complete remaining admin pages**: Projects, Jobs, Team, Testimonials editors
2. **Add image upload**: Integrate Firebase Storage for image uploads
3. **Add rich text editor**: Replace textarea with WYSIWYG editor for blog content
4. **Add email notifications**: Send email when contact form is submitted
5. **Add analytics dashboard**: Show page views, popular posts, etc.
6. **Add user roles**: Implement editor/admin/viewer roles

## 📝 Admin Credentials Template

Save this securely (use a password manager):

```
Admin Panel URL: https://your-domain.com/admin/login
Email: admin@anantsoftcomputing.com
Password: [Your secure password]
Firebase Console: https://console.firebase.google.com/project/email-47a06
```

---

**Created by**: Anant Soft Computing  
**Last Updated**: January 21, 2026  
**Version**: 1.0.0
