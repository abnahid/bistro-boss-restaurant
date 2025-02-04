

# 🍳 Bistro Boss  

**Bistro Boss** is a comprehensive restaurant management web application built using the **MERN stack** (MongoDB, Express.js, React with Vite, and Node.js). It streamlines restaurant operations by providing an intuitive interface for managing **reservations, orders, menus, and staff** efficiently.  

## 🚀 Features  

- **User Authentication**: Secure login and registration using **JWT**.  
- **Reservation Management**: View, create, and manage customer reservations.  
- **Order Management**: Track and manage orders in **real-time**.  
- **Menu Management**: Add, update, and remove menu items.  
- **Staff Management**: Assign roles, schedule shifts, and oversee employee activities.  
- **Dashboard**: Get an overview of key metrics and restaurant performance.  

## 📂 Table of Contents  

- [Installation](#installation)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [Development Dependencies](#development-dependencies)  
- [Configuration](#configuration)  
- [License](#license)  

## 🛠 Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/abnahid/bistro-boss.git
cd bistro-boss
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and set up the following variables:  
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FIREBASE_API_KEY=your_firebase_api_key
```

### 4️⃣ Start the Development Server  
```bash
npm run dev
```

The app will be available at **http://localhost:5173** (or the configured port).  

## 📌 Usage  

1. **Sign up or log in** to access the dashboard.  
2. **Manage restaurant operations** from a user-friendly interface.  
3. **Track orders, reservations, and staff schedules** seamlessly.  
4. **Customize your menu** with new items, categories, and pricing.  
5. **View real-time analytics** on restaurant performance.  

## 📦 Dependencies  

| Package                     | Version  |
|-----------------------------|----------|
| `@smastrom/react-rating`    | ^1.5.0   |
| `@stripe/react-stripe-js`   | ^3.1.1   |
| `@stripe/stripe-js`         | ^5.5.0   |
| `@tanstack/react-query`     | ^5.62.16 |
| `axios`                     | ^1.7.9   |
| `firebase`                  | ^11.1.0  |
| `localforage`               | ^1.10.0  |
| `lottie-react`              | ^2.4.0   |
| `lucide-react`              | ^0.469.0 |
| `match-sorter`              | ^8.0.0   |
| `react`                     | ^18.3.1  |
| `react-calendar`            | ^5.1.0   |
| `react-dom`                 | ^18.3.1  |
| `react-hook-form`           | ^7.54.2  |
| `react-hot-toast`           | ^2.5.1   |
| `react-icons`               | ^5.4.0   |
| `react-parallax`            | ^3.5.1   |
| `react-responsive-carousel` | ^3.2.23  |
| `react-router-dom`          | ^7.1.1   |
| `react-simple-captcha`      | ^9.3.1   |
| `react-tabs`                | ^6.1.0   |
| `recharts`                  | ^2.15.0  |
| `sort-by`                   | ^1.2.0   |
| `sweetalert2`               | ^11.15.10|
| `swiper`                    | ^11.1.15 |

## 🛠 Development Dependencies  

| Package                        | Version  |
|--------------------------------|----------|
| `autoprefixer`                 | ^10.4.20 |
| `daisyui`                      | ^4.12.23 |
| `eslint`                       | ^9.17.0  |
| `globals`                      | ^15.14.0 |
| `postcss`                      | ^8.4.49  |
| `tailwindcss`                  | ^3.4.17  |
| `vite`                         | ^6.0.5   |

## ⚙️ Configuration  

- **Firebase**: Used for authentication and real-time data storage.  
- **Stripe**: Integrated for secure online payments.  
- **Tailwind CSS & DaisyUI**: Ensures modern and responsive UI design.  

## 📜 License  

This project is **open-source** under the **MIT License**.  
