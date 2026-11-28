# 🛒 – Full-Stack E-Commerce Platform

A modern full-stack E-Commerce platform built with Next.js and NestJS, featuring a responsive storefront, advanced product management, secure authentication, order processing, and comprehensive admin and vendor dashboards.

## 🌐 Live Demo

- **Frontend:** [Visit NEXUS](https://e-commerce-full-stack-uebm.vercel.app/)
- **Backend API:** [API Base URL](https://e-commerce-full-stack-steel.vercel.app/#cart)
- **API Documentation:** [Swagger Docs](https://e-commerce-full-stack-steel.vercel.app/#cart)

## ✨ Key Features

- **🔐 Advanced Authentication & RBAC:** Secure JWT-based authentication with Access and Refresh Tokens and role-based access control for Admins, Vendors, and Customers.
- **💳 Payment Integration:** Secure checkout and payment processing through supported payment gateways.
- **📦 Inventory & Cart Management:** Dynamic inventory tracking, stock management, and persistent shopping carts.
- **📈 Vendor Dashboard:** Comprehensive dashboard for managing products, orders, sales, and business analytics.
- **🚀 Performance Optimization:** Server-side rendering (SSR) and optimized product listing pages for better SEO and performance.
- **🛍️ Product Management:** Product categorization, filtering, searching, and detailed product pages.

## 🛠️ Technical Stack

- **Frontend:** `Next.js` • `TypeScript` • `Tailwind CSS v4` • `Redux Toolkit` • `Shadcn/ui`
- **Backend:** `NestJS` • `Node.js` • `TypeScript` • `RESTful APIs` • `Class-Validator`
- **Database & ORM:** `PostgreSQL` • `Prisma ORM`
- **Caching:** `Redis`
- **Deployment:** `Vercel`

## 📐 Database Architecture

- Designed relational database schemas using PostgreSQL and Prisma ORM.
- Implemented One-to-Many and Many-to-Many relationships to manage products, reviews, orders, and customers.
- Integrated Redis caching for improved data retrieval and application performance.

---

## 💻 Getting Started

1. **Clone the repo:** `git clone https://github.com/Alaa-Fawaz-Manea-AFM/e-commerce-Full-Stack`
2. **Install deps:** `npm install`
3. **Setup environment:** Create a `.env` file with `DATABASE_URL`, `CLOUDINARY_URL`, and `JWT_SECRET`.
4. **Run migrations:** `npx prisma migrate dev`
5. **Start dev server:** `npm run start:dev`
