# MailMe - Email Client Application

MailMe is a modern email client application built with React, TypeScript, and Firebase. It provides a clean, intuitive interface for sending and managing emails with Google authentication.

Live : https://mailme-6938e.web.app/

## Features

- **Google Authentication**: Secure login with your Google account
- **Email Composition**: Write and send emails with a rich text editor
- **Inbox Management**: View and organize your sent emails
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Emails appear instantly thanks to Firestore's real-time database

## Technologies Used

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase Authentication
- **Database**: Firestore
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atulkumar-20/MailMe.git
   cd MailMe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication with Google provider
   - Create a Firestore database
   - Register a web app and get your Firebase config

4. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Firebase Setup

1. Install Firebase tools:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select Firestore and Hosting
   - Choose your Firebase project
   - Accept the default options or customize as needed

4. Deploy to Firebase:
   ```bash
   npm run build
   firebase deploy
   ```

## Project Structure

```
mailme/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── redux/
│   │   ├── shared/
│   │   ├── Body.tsx
│   │   ├── Inbox.tsx
│   │   ├── Login.tsx
│   │   ├── Mail.tsx
│   │   ├── Message.tsx
│   │   ├── Messages.tsx
│   │   ├── SendMail.tsx
│   │   └── Sidebar.tsx
│   ├── App.tsx
│   ├── firebase.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.js
├── .firebaserc
├── .gitignore
├── firebase.json
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://react.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
