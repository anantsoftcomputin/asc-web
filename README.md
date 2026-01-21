# Anant Soft Computing - Website & Admin Panel

Modern Next.js website with Firebase-powered admin panel for managing content.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 16 and React 19
- 🔥 Firebase backend (Firestore, Authentication, Storage)
- 🔐 Secure admin panel with authentication
- 📝 Blog management system
- 💼 Portfolio/Projects management
- 👥 Team members management
- 💬 Testimonials management
- 📧 Contact form with Firestore storage
- 🖼️ Base64 image storage (no external storage needed)

## Tech Stack

- **Framework:** Next.js 16.0.7
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.17
- **Animation:** Framer Motion 12.23.24
- **Backend:** Firebase (Firestore, Auth)
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd asc-new
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` and add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. Set up Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Set Firestore security rules (see below)

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Firebase Setup

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read for blogs, portfolio, team, testimonials
    match /{collection}/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Create Admin User

Use Firebase Console to create your first admin user:
1. Go to Authentication
2. Add user with email/password
3. Use these credentials to log in at `/admin/login`

## Project Structure

```
src/
├── app/
│   ├── admin/              # Admin panel pages
│   │   ├── blogs/          # Blog management
│   │   ├── contacts/       # Contact messages
│   │   ├── dashboard/      # Admin dashboard
│   │   ├── portfolio/      # Portfolio management
│   │   ├── team/           # Team management
│   │   └── login/          # Admin login
│   ├── about/              # About page
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   └── services/           # Service pages
├── components/
│   ├── admin/              # Admin-specific components
│   ├── common/             # Reusable UI components
│   ├── layout/             # Layout components
│   └── sections/           # Homepage sections
├── contexts/               # React contexts
├── lib/                    # Utilities and configs
│   ├── firebase.js         # Firebase initialization
│   └── firebase-admin.js   # Firestore CRUD helpers
└── utils/                  # Helper functions

```

## Admin Panel

Access the admin panel at `/admin/login`

**Default collections:**
- `blogs` - Blog posts
- `portfolio` - Portfolio projects
- `team` - Team members
- `testimonials` - Client testimonials
- `contacts` - Contact form submissions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Firebase Hosting

## Environment Variables

All environment variables are prefixed with `NEXT_PUBLIC_` to be accessible in the browser:

- `NEXT_PUBLIC_FIREBASE_API_KEY` - Firebase API key
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` - Firebase project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `NEXT_PUBLIC_FIREBASE_APP_ID` - Firebase app ID
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` - Firebase measurement ID

## Features Overview

### Blog System
- Create, edit, delete blog posts
- Slug-based URLs
- Category filtering
- Search functionality
- Featured image support (base64)

### Portfolio Management
- Showcase projects with images
- Category filtering (CRM, Healthcare, Education, Mobile, Web)
- Technology tags
- Color gradient themes

### Team Management
- Add/edit team members
- Profile images (base64, max 1MB)
- Role and bio information
- Social media links (LinkedIn, Twitter, GitHub)

### Testimonials
- Client testimonials with auto-rotation
- Organization details
- Profile images

### Contact Form
- Direct submission to Firestore
- Email notifications (optional)
- Admin view of all messages

## Image Storage

Images are stored as base64 strings directly in Firestore (max 1MB per image). This eliminates the need for Firebase Storage and CORS configuration.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Anant Soft Computing.

## Support

For support, email support@anantsoftcomputing.com

---

Built with ❤️ by Anant Soft Computing
