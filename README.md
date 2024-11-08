# Blog Dashboard with Next.js, Tailwind CSS, Node.js, and MongoDB

This project is a blog management system designed for an admin to manage blog posts. The system allows admins to create, edit, and delete blog posts. Each post includes images, SEO metadata, and a publish status (published/draft). The blog posts are then displayed on the frontend, with SEO optimization.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: SQL (MongoDB)

## Features

### Admin Dashboard

- **Create New Blog Post**:
  - Add a title, content, images, SEO fields (Meta title, meta description, tags).
  - Set the post status (published or draft).

- **Edit Blog Post**:
  - Edit all fields (title, content, images, SEO metadata).
  - Update post status.

- **Delete Blog Post**:
  - Remove/Delete posts from the system.

- **Post List**:
  - View all posts with titles, status (published/draft), and creation date.
  - Filter posts by status.

### Blog Display Page

- Display individual blog posts with content, images.
- Apply SEO metadata (meta title, description) in the `<head>` section using Next.js `<Head>`.
- Optional: You can display related posts or tags.

### Responsiveness

- Fully responsive design optimized for mobile, tablet, and desktop screens.

## Optional Features

- Rich text editor for blog content.
- User authentication for admin access.
- Image upload functionality with third-party services like Cloudinary.
- Pagination for blog post listing.

### Clone the Repository

To get started with the project, follow these steps to clone and set it up locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Mubashir24241/Blog-Website.git
   cd Blog-Website
   
**Install dependencies for both frontend and backend:**

 For Frontend (Next.js):

 Navigate to the client directory and run:

```bash
cd client
npm install

For Backend (Node.js + Express):

Navigate to the backend directory and run:

```bash
cd backend
npm install

Set up environment variables:

In the backend directory, create a .env file and add the following variables:

env
Copy code
DB_URI=mongodb://localhost:27017/blog-dashboard
JWT_SECRET=your_jwt_secret_key
Replace your_jwt_secret_key with your own JWT secret key for authentication.

In the client directory, create a .env.local file and add:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:4000/api
Running the Project Locally
Start the Backend:


Open your browser and go to http://localhost:3000 to access the admin dashboard.

