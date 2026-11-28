# 🛒 Full-Stack E-Commerce Platform

A modern and scalable Full-Stack E-Commerce platform built with **Next.js** and **NestJS**, featuring a responsive storefront, advanced product management, secure authentication, order processing, and comprehensive Admin and Vendor dashboards.

## 🌐 Live Demo & Project Links

- **Frontend Application:** [Visit NEXUS](https://e-commerce-full-stack-uebm.vercel.app/)
- **Backend API:** [Backend Server](https://e-commerce-full-stack-steel.vercel.app/#cart)

## ✨ Key Features

- **🔐 Advanced Authentication & RBAC:** Secure JWT-based authentication using Access and Refresh Tokens, with role-based access control for Admins, Vendors, and Customers.
- **💳 Payment Integration:** Secure checkout and payment processing through supported payment gateways.
- **📦 Inventory & Cart Management:** Dynamic inventory tracking, stock management, and persistent shopping carts.
- **📈 Vendor Dashboard:** Comprehensive dashboard for managing products, orders, sales, and business analytics.
- **🚀 Performance Optimization:** Server-Side Rendering (SSR) and optimized product listing pages for better SEO and performance.
- **🛍️ Product Management:** Product categorization, filtering, searching, and detailed product pages.

## 🛠️ Technical Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS v4
- Redux Toolkit
- Shadcn/ui

### Backend
- NestJS
- Node.js
- TypeScript
- RESTful APIs
- Class-Validator

### Database & ORM
- PostgreSQL
- Prisma ORM

### Caching
- Redis

### Deployment & Tools
- Vercel
- Git & GitHub
- Postman

## 📐 Database Architecture

- Designed relational database schemas using PostgreSQL and Prisma ORM.
- Implemented One-to-Many and Many-to-Many relationships to manage products, reviews, orders, and customers.
- Integrated Redis caching for improved data retrieval and application performance.

## 🏗️ Project Architecture

The project follows a full-stack architecture, separating the frontend application from the backend API.

### Frontend
- Built with Next.js and TypeScript.
- Uses Redux Toolkit for state management.
- Styled with Tailwind CSS v4.
- Uses Shadcn/ui for reusable interface components.
- Communicates with the backend through RESTful APIs.

### Backend
- Built with NestJS and Node.js.
- Provides RESTful APIs for the E-Commerce platform.
- Uses Prisma ORM to interact with PostgreSQL.
- Implements JWT authentication and role-based access control.
- Uses Class-Validator for request validation.
- Integrates Redis for caching.

## ⚙️ Environment Configuration

Configure the environment variables separately for the backend and frontend applications.

### 1. Backend Environment

Create a `.env` file in the backend project directory:

```env
PORT=
NODE_ENV=
FRONT_END_URL=
DATABASE_URL=
COOKIE_MAX_AGE1=
JWT_SECRET_KEY=
JWT_EXPIRES_IN=
CLOUDINARY_SECRET_KEY=
```

**Environment Variables:**

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `NODE_ENV` | Application environment |
| `FRONT_END_URL` | Frontend application URL |
| `DATABASE_URL` | PostgreSQL database connection string |
| `COOKIE_MAX_AGE1` | Cookie expiration duration |
| `JWT_SECRET_KEY` | Secret key used for JWT authentication |
| `JWT_EXPIRES_IN` | JWT token expiration duration |
| `CLOUDINARY_SECRET_KEY` | Private Cloudinary API secret, if used by the backend |

### 2. Frontend Environment

Create a `.env.local` file in the frontend project directory:

```env
NEXT_PUBLIC_ROLE_ADMIN=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
NODE_ENV=
```

**Environment Variables:**

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_ROLE_ADMIN` | Admin role configuration used by the frontend |
| `NEXT_PUBLIC_API_URL` | Backend API base URL |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_API_KEY` | Public Cloudinary API key |
| `NODE_ENV` | Frontend application environment |

**Important Security Notes:**

- Never expose `JWT_SECRET_KEY` or `CLOUDINARY_SECRET_KEY` in frontend environment variables.
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and should never contain private credentials.
- The frontend role configuration must not replace backend authorization checks.
- Configure Redis and payment gateway credentials on the backend if required by your implementation, using the exact variable names expected by your code.
- Never commit real `.env` or `.env.local` files to GitHub.

## 💻 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Alaa-Fawaz-Manea-AFM/e-commerce-Full-Stack.git
```

### 2. Navigate to the Project Directory

```bash
cd e-commerce-Full-Stack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create the required `.env` and `.env.local` files and configure the environment variables for your backend and frontend applications.

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Start the Development Server

```bash
npm run start:dev
```

> **Note:** Run commands from the appropriate application directory if the repository separates the frontend and backend into different folders. The commands and scripts should match each application's `package.json`. Start the frontend using its configured development script, such as `npm run dev`.

## 🔒 Security

- JWT-based authentication using Access and Refresh Tokens.
- Role-Based Access Control (RBAC) for Admin, Vendor, and Customer roles.
- Protected backend endpoints and role-based authorization.
- Environment variables for sensitive configuration.
- Server-side handling of private credentials.
- Secure cookie configuration for authentication.

## 🚀 Deployment

The project is deployed using **Vercel**:

- **Frontend Application:** Vercel.
- **Backend API:** Vercel.

Make sure to configure the required environment variables in the deployment settings for each application.

## 👨‍💻 Author

**Alaa Fawaz Manea**

- **GitHub:** [Alaa-Fawaz-Manea-AFM](https://github.com/Alaa-Fawaz-Manea-AFM)

---

⭐ If you find this project useful, feel free to explore the repository and give it a star!

**NEXUS – A Full-Stack E-Commerce Platform built with Next.js, NestJS, PostgreSQL, Prisma, and Redis.**
