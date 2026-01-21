# 🚀 Quick Start Guide - Firebase Admin Panel

## Step 1: Create Admin User in Firebase

1. Go to: https://console.firebase.google.com/project/email-47a06/authentication/users
2. Click **"Add user"**
3. Enter email: `admin@anantsoftcomputing.com`
4. Enter a strong password (save it securely)
5. Click **"Add user"**

## Step 2: Enable Firestore

1. Go to: https://console.firebase.google.com/project/email-47a06/firestore
2. Click **"Create database"**
3. Select **"Start in production mode"**
4. Choose location: **asia-south1** (Mumbai)
5. Click **"Enable"**

## Step 3: Update Firestore Security Rules

1. In Firestore, click **"Rules"** tab
2. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read for content
    match /{collection}/{document} {
      allow read: if collection in ['blogs', 'projects', 'testimonials', 'team'];
      allow write: if request.auth != null;
    }
    
    // Authenticated read for contacts
    match /contacts/{contact} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

## Step 4: Start Development Server

```bash
npm run dev
```

## Step 5: Login to Admin Panel

1. Open: http://localhost:3000/admin/login
2. Enter your admin email and password
3. Click **"Sign in"**

## Step 6: Migrate Data

1. Navigate to: http://localhost:3000/admin/migrate
2. Click **"Start Migration"**
3. Wait for completion (check console for logs)
4. Verify data in Firebase Console

## Step 7: Start Managing Content!

### Add a New Blog Post
- Go to `/admin/blogs`
- Click **"New Blog Post"**
- Fill in the form
- Click **"Save Blog Post"**

### View Contact Messages
- Go to `/admin/contacts`
- See all form submissions

### Dashboard Overview
- Go to `/admin/dashboard`
- View statistics and quick actions

## 🎉 You're All Set!

Your admin panel is now ready. You can:
- ✅ Manage blog posts
- ✅ View contact messages
- ✅ Track submissions
- ✅ Real-time updates on frontend

## 📝 Admin URLs

- **Login**: http://localhost:3000/admin/login
- **Dashboard**: http://localhost:3000/admin/dashboard
- **Blogs**: http://localhost:3000/admin/blogs
- **Contacts**: http://localhost:3000/admin/contacts
- **Migration**: http://localhost:3000/admin/migrate

## 🔒 Default Admin Credentials

```
Email: admin@anantsoftcomputing.com
Password: [The password you created in Step 1]
```

## ⚠️ Important Notes

1. **Never commit credentials to Git**
2. **Use strong passwords**
3. **Regularly backup Firestore data**
4. **Monitor Firebase usage quotas**
5. **Update security rules before production**

## 🆘 Need Help?

Check [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed documentation.

---

**Ready to manage your content! 🚀**
