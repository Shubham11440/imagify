# Imagify AI 🎨✨

**A full-stack AI-powered SaaS platform that generates stunning images from text prompts, featuring a secure credit-based system with Stripe and Razorpay integration.**

![Imagify AI Demo](https://placehold.co/800x400/1a1a1a/ffffff?text=Imagify+AI+App+)

---

## 🚀 Key Features

-   **🤖 AI Image Generation**: Utilizes the ClipDrop API to transform text descriptions into high-quality images.
-   **💳 Credit-Based System**: Users receive an initial credit balance upon registration and can purchase more credits to generate images.
-   **💵 Dual Payment Gateways**: Seamlessly integrated with **Stripe** for international payments and **Razorpay** for domestic (India) transactions.
-   **🔐 Secure User Authentication**: Full authentication flow with JWT (JSON Web Tokens) for user registration, login, and protected routes.
-   **📊 Transaction Tracking**: All payment attempts and successful transactions are logged in the database for reliability.
-   **📱 Responsive Design**: A modern and fully responsive user interface built with React and styled with Tailwind CSS.

---

## 🛠️ Tech Stack

This project is built on the MERN stack with a clear separation between the client and server.

### Frontend (Client)

-   **Framework**: [React 18](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router v6](https://reactrouter.com/)
-   **State Management**: React Context API
-   **API Calls**: [Axios](https://axios-http.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

### Backend (Server)

-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Authentication**: [JWT](https://jwt.io/) & [bcrypt](https://www.npmjs.com/package/bcrypt)
-   **Payment APIs**: [Stripe](https://stripe.com/) & [Razorpay](https://razorpay.com/)
-   **AI API**: [ClipDrop API](https://clipdrop.co/platform)

---

## 🏗️ Architecture

The project follows a standard MERN stack architecture with a monorepo structure.

-   **`/client`**: Contains the entire React frontend application. It handles all user interface elements, state management, and API calls to the backend.
-   **`/server`**: Contains the Node.js/Express backend API. It manages business logic, database interactions, user authentication, and serves as a secure proxy for third-party services like ClipDrop and payment gateways.

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   A MongoDB Atlas account (or a local MongoDB instance)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/imagify-ai.git](https://github.com/your-username/imagify-ai.git)
    cd imagify-ai
    ```

2.  **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd ../client
    npm install
    ```

4.  **Set up Environment Variables:**
    Create a `.env` file in the `server` directory and add the following variables. A template is provided in `.env.example`.

    ```env
    # Server Configuration
    PORT=4000
    MONGODB_URI="your_mongodb_connection_string"
    JWT_SECRET="your_super_secret_jwt_key"
    CURRENCY="INR" # or "USD"

    # API Keys
    CLIPDROP_API="your_clipdrop_api_key"
    RAZORPAY_KEY_ID="your_razorpay_key_id"
    RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
    STRIPE_SECRET_KEY="your_stripe_secret_key"
    ```

5.  **Run the development servers:**
    -   **Start the backend server:**
        ```sh
        cd server
        npm run server
        ```
    -   **Start the frontend development server:**
        ```sh
        cd client
        npm run dev
        ```

The application should now be running on `http://localhost:5173` (or another port specified by Vite).

---

## 🚀 Deployment

This application is configured for easy deployment on modern hosting platforms.

-   **Frontend**: Deployed on **Vercel**. The `client/vercel.json` file contains the necessary configuration.
-   **Backend**: Deployed as **Vercel Serverless Functions**. The `server/vercel.json` file and the API structure are optimized for this environment.

---

## 👤 Contact

**Shubham Mali**
-   **LinkedIn**: [https://www.linkedin.com/in/shubham1144/](https://www.linkedin.com/in/shubham1144/)

