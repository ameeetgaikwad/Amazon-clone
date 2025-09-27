# 🛒 Flipkart Clone

A fully functional e-commerce web application built with React that replicates the core features of Flipkart. This project demonstrates modern web development practices with React, Firebase authentication, and a responsive user interface.

![Flipkart Clone](https://img.shields.io/badge/React-18.2.0-blue) ![Firebase](https://img.shields.io/badge/Firebase-9.17.2-orange) ![Material-UI](https://img.shields.io/badge/MUI-5.11.12-blue)

## 🌟 Features

- **🔐 User Authentication**: Sign up, sign in, and sign out functionality using Firebase Authentication
- **🛍️ Product Catalog**: Browse a variety of products with detailed information
- **🛒 Shopping Cart**: Add/remove items from cart with real-time updates
- **💰 Price Calculation**: Automatic calculation of total amount in checkout
- **📱 Responsive Design**: Optimized for various screen sizes (work in progress)
- **🎨 Modern UI**: Clean and intuitive interface using Material-UI components
- **🔄 State Management**: Efficient state management using React Context API

## 🚀 Live Demo

Visit the live application: [Flipkart Clone](https://ameeetgaikwad.github.io/Flipkart-clone/)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (usually comes with Node.js)
- **Git** (for cloning the repository)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ameeetgaikwad/Flipkart-clone.git
cd Flipkart-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Configuration (Optional)

If you want to use your own Firebase project:

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Get your Firebase configuration
4. Replace the configuration in `src/Components/Authentication/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 🏃‍♂️ Running the Application

### Development Mode

Start the development server:

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `build/` folder.

### Running Tests

Execute the test suite:

```bash
npm test
```

## 📁 Project Structure

```
flipkart-clone/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── Authentication/
│   │   │   └── firebase.js          # Firebase configuration
│   │   ├── Checkout/
│   │   │   ├── Checkout.css
│   │   │   └── Checkout.js          # Shopping cart page
│   │   ├── CheckoutProduct/
│   │   │   ├── CheckoutProduct.css
│   │   │   └── CheckoutProduct.js   # Individual cart item
│   │   ├── ContextAPI/
│   │   │   └── StateProvider.js     # Global state management
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.js            # Navigation header
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.js              # Homepage with products
│   │   ├── Login/
│   │   │   ├── Login.css
│   │   │   └── Login.js             # Authentication page
│   │   ├── Product/
│   │   │   ├── Product.css
│   │   │   └── Product.js           # Product component
│   │   └── Subtotal/
│   │       ├── Subtotal.css
│   │       └── Subtotal.js          # Price calculation
│   ├── App.css
│   ├── App.js                       # Main application component
│   ├── index.css
│   ├── index.js                     # Application entry point
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## 🎯 Usage

### 1. **Homepage**
   - Browse featured products
   - View product details, ratings, and prices
   - Add products to your shopping cart

### 2. **Authentication**
   - Click "Sign In" in the header
   - Create a new account or log in with existing credentials
   - User authentication is handled by Firebase

### 3. **Shopping Cart**
   - Click the cart icon to view your items
   - Remove items by clicking the "Remove from basket" button
   - View the total amount for all items

### 4. **Navigation**
   - Use the header to navigate between pages
   - Access your account and cart from anywhere in the app

## 🔧 Technologies Used

### Frontend
- **React** (18.2.0) - UI library
- **React Router DOM** (6.8.2) - Client-side routing
- **Material-UI** (@mui/material 5.11.12) - UI components
- **Material-UI Icons** (@mui/icons-material 5.11.11) - Icon library

### Backend/Services
- **Firebase** (9.17.2) - Authentication and backend services

### Utilities
- **React Currency Format** (1.1.0) - Price formatting
- **React Scripts** (5.0.1) - Build and development tools

### Development Tools
- **gh-pages** (5.0.0) - Deployment to GitHub Pages
- **Web Vitals** (2.1.4) - Performance monitoring

## 📱 Responsive Design

> **Note**: The application is currently optimized for desktop viewing. Mobile responsiveness improvements are in progress.

## 🚀 Deployment

### Deploy to GitHub Pages

The project is configured for easy deployment to GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Deploy to Other Platforms

For other deployment platforms (Netlify, Vercel, etc.):

1. Build the project: `npm run build`
2. Upload the `build/` folder to your hosting platform
3. Configure your platform to serve the `index.html` file for all routes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Steps to Contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- Mobile responsiveness needs improvement
- Some UI elements may not display correctly on smaller screens
- Product images are loaded from external sources and may occasionally fail to load

## 🔮 Future Enhancements

- [ ] Mobile-responsive design
- [ ] Product search functionality
- [ ] User profiles and order history
- [ ] Payment integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin panel for product management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ameet Gaikwad**
- GitHub: [@ameeetgaikwad](https://github.com/ameeetgaikwad)
- Project Link: [https://github.com/ameeetgaikwad/Flipkart-clone](https://github.com/ameeetgaikwad/Flipkart-clone)

## 🙏 Acknowledgments

- Inspired by Flipkart's user interface and functionality
- Built with Create React App
- Firebase for providing excellent authentication services
- Material-UI for beautiful React components

---

⭐ **If you found this project helpful, please give it a star!** ⭐