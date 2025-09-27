# Flipkart Clone

A fully functional e-commerce web application inspired by Flipkart, built with React.js, Context API for state management, and Firebase for authentication. This project demonstrates modern web development practices and provides a complete online shopping experience.

## 🌐 Live Demo

Visit the live application: [https://ameeetgaikwad.github.io/Flipkart-clone/](https://ameeetgaikwad.github.io/Flipkart-clone/)

## ✨ Features

### 🔐 Authentication
- **User Registration**: Create new accounts with email and password
- **User Login/Logout**: Secure authentication using Firebase Auth
- **Persistent Sessions**: User sessions are maintained across browser sessions
- **Protected Routes**: Automatic redirection based on authentication status

### 🛒 Shopping Experience
- **Product Catalog**: Browse a variety of products including electronics, accessories, and books
- **Add to Cart**: Add products to shopping basket with a single click
- **Shopping Cart Management**: View all added items in the checkout page
- **Remove Items**: Remove individual products from the cart
- **Real-time Cart Updates**: Cart count updates dynamically in the header

### 💰 Pricing & Checkout
- **Price Display**: Products show prices in Indian Rupees (₹)
- **Cart Total Calculation**: Automatic calculation of total amount
- **Subtotal Component**: Detailed breakdown of cart contents and pricing
- **Star Ratings**: Product ratings displayed with star icons

### 🎨 User Interface
- **Responsive Design**: Optimized for various screen sizes
- **Modern UI**: Clean and intuitive interface inspired by Flipkart
- **Material-UI Icons**: Professional iconography throughout the app
- **CSS Styling**: Custom styling for all components

## 🛠️ Technologies Used

### Frontend
- **React.js** (v18.2.0) - JavaScript library for building user interfaces
- **React Router DOM** (v6.8.2) - Client-side routing
- **Context API** - State management for global application state
- **Material-UI** (v5.11.12) - React components library
- **Material-UI Icons** (v5.11.11) - Icon components

### Backend & Services
- **Firebase** (v9.17.2) - Authentication and backend services
- **Firebase Auth** - User authentication
- **Firebase Firestore** - NoSQL database (configured)

### Development Tools
- **Create React App** - React application bootstrapping
- **React Scripts** (v5.0.1) - Build and development scripts
- **React Currency Format** (v1.1.0) - Currency formatting
- **Web Vitals** - Performance monitoring

### Deployment
- **GitHub Pages** - Static site hosting
- **gh-pages** (v5.0.0) - Deployment automation

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher)
- **Git** (for cloning the repository)
- **Firebase Account** (for authentication setup)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ameeetgaikwad/Flipkart-clone.git
cd Flipkart-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Configuration

#### Option A: Use Existing Configuration (Quick Start)
The project comes with a pre-configured Firebase setup. You can use it immediately for testing purposes.

#### Option B: Set Up Your Own Firebase Project (Recommended for Production)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider
4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Copy the Firebase configuration object
5. Replace the configuration in `src/Components/Authentication/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

### 4. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## 📱 Usage Guide

### Getting Started
1. **Home Page**: Browse the product catalog on the main page
2. **User Registration**: 
   - Click on "Sign In" in the header
   - Click "Create your Flipkart Account" to register
   - Fill in your email and password
3. **User Login**:
   - Enter your registered email and password
   - Click "Sign in"

### Shopping
1. **Browse Products**: Scroll through the home page to see available products
2. **Add to Cart**: Click "Add to cart" button on any product
3. **View Cart**: Click the cart icon in the header to see cart count
4. **Checkout Page**: Navigate to `/checkout` to see all cart items
5. **Remove Items**: Use the remove button on individual items in checkout
6. **View Total**: See the calculated total in the subtotal component

### Navigation
- **Home**: `/` - Main product catalog
- **Login**: `/login` - Authentication page
- **Checkout**: `/checkout` - Shopping cart and total

## 🏗️ Project Structure

```
flipkart-clone/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── Authentication/
│   │   │   └── firebase.js          # Firebase configuration
│   │   ├── Checkout/
│   │   │   ├── Checkout.js          # Checkout page component
│   │   │   └── Checkout.css
│   │   ├── CheckoutProduct/
│   │   │   ├── CheckoutProduct.js   # Individual cart item component
│   │   │   └── CheckoutProduct.css
│   │   ├── ContextAPI/
│   │   │   └── StateProvider.js     # Global state management
│   │   ├── Header/
│   │   │   ├── Header.js            # Navigation header
│   │   │   └── Header.css
│   │   ├── Home/
│   │   │   ├── Home.js              # Main product catalog
│   │   │   └── Home.css
│   │   ├── Login/
│   │   │   ├── Login.js             # Authentication component
│   │   │   └── Login.css
│   │   ├── Product/
│   │   │   ├── Product.js           # Individual product component
│   │   │   └── Product.css
│   │   └── Subtotal/
│   │       ├── Subtotal.js          # Cart total calculation
│   │       └── Subtotal.css
│   ├── App.js                       # Main application component
│   ├── App.css                      # Global styles
│   ├── index.js                     # Application entry point
│   ├── index.css                    # Base styles
│   └── reportWebVitals.js          # Performance monitoring
├── package.json                     # Dependencies and scripts
└── README.md                        # Project documentation
```

## 🔧 Available Scripts

### Development
```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

### Deployment
```bash
# Build and deploy to GitHub Pages
npm run deploy

# Build for production (manual deployment)
npm run build
```

### Advanced
```bash
# Eject from Create React App (irreversible)
npm run eject
```

## 🌐 Deployment

### GitHub Pages (Automated)
This project is configured for automatic deployment to GitHub Pages:

1. **Fork the repository** to your GitHub account
2. **Update the homepage** in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/Flipkart-clone"
   ```
3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Manual Deployment
1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Deploy the `build` folder** to your preferred hosting service:
   - Netlify
   - Vercel
   - AWS S3
   - Firebase Hosting

## 🎯 Key Features Breakdown

### State Management
- **Context API**: Global state management for user authentication and shopping cart
- **useStateValue Hook**: Custom hook for accessing global state
- **Actions**: ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER

### Authentication Flow
- **Firebase Auth Integration**: Secure user management
- **Persistent Login**: Users remain logged in across sessions
- **Protected Routes**: Conditional rendering based on auth state
- **Error Handling**: User-friendly error messages

### Shopping Cart Logic
- **Add Products**: Products are added with all details (id, title, price, rating, image)
- **Remove Products**: Individual item removal from cart
- **Total Calculation**: Dynamic price calculation with currency formatting
- **Empty State**: Special UI when cart is empty

## 🐛 Known Issues & Limitations

- **Responsive Design**: The website is not fully responsive yet (work in progress)
- **Payment Integration**: No actual payment processing (UI only)
- **Product Database**: Products are hardcoded (no dynamic product management)
- **Search Functionality**: No product search feature implemented
- **User Profiles**: No user profile management beyond authentication

## 🚧 Future Enhancements

- [ ] Make the website fully responsive
- [ ] Add product search and filtering
- [ ] Implement payment integration (Stripe/Razorpay)
- [ ] Add user profile management
- [ ] Implement product reviews and ratings
- [ ] Add order history and tracking
- [ ] Implement wishlist functionality
- [ ] Add admin panel for product management
- [ ] Optimize performance with lazy loading
- [ ] Add PWA capabilities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ameet Gaikwad**
- GitHub: [@ameeetgaikwad](https://github.com/ameeetgaikwad)
- Project Link: [https://github.com/ameeetgaikwad/Flipkart-clone](https://github.com/ameeetgaikwad/Flipkart-clone)

## 🙏 Acknowledgments

- **Flipkart** for design inspiration
- **Firebase** for backend services
- **Material-UI** for React components
- **Create React App** for project bootstrapping
- **React Community** for excellent documentation and support

---

⭐ If you found this project helpful, please give it a star on GitHub!