Blog Admin Dashboard with Next.js, Tailwind CSS, Node.js, and SQL
Overview
This project is a blog management system designed for an admin to manage blog posts. The system allows admins to create, edit, and delete blog posts. Each post includes images, videos, SEO metadata, and a publish status (published/draft). The blog posts are then displayed on the frontend with SEO optimization.

Tech Stack
Frontend: Next.js, Tailwind CSS
Backend: Node.js, Express.js
Database: SQL (MySQL, PostgreSQL, or SQLite)
Features
Admin Dashboard
Create New Blog Post:

Add a title, content, images, videos, SEO fields (Meta title, meta description, tags).
Set the post status (published or draft).
Edit Blog Post:

Edit all fields (title, content, images, videos, SEO metadata).
Update post status.
Delete Blog Post:

Remove posts from the system.
Post List:

View all posts with titles, status (published/draft), and creation date.
Filter posts by status.
Blog Display Page
Display Individual Blog Posts:

Display content, images, and videos.
Apply SEO metadata (meta title, description) in the <head> section using Next.js <Head>.
Optional: Display related posts or tags.

Responsiveness
Fully responsive design optimized for mobile, tablet, and desktop screens.
Optional Features
Rich Text Editor for blog content.
User authentication for admin access.
Image upload functionality with third-party services like Cloudinary.
Pagination for blog post listing.
Database Schema
Blogs Table
sql
Copy code
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(255),
  video_url VARCHAR(255),
  meta_title VARCHAR(255),
  meta_description TEXT,
  tags VARCHAR(255),
  status ENUM('published', 'draft') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
Backend Setup (Node.js & SQL)
1. Install Dependencies
In the backend directory, install the necessary dependencies:

bash
Copy code
cd backend
npm install
2. Set Up the SQL Database
Use MySQL, PostgreSQL, or SQLite for the database.
Create a .env file in the backend directory and configure the database connection:
env
Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
Initialize the database using the SQL script provided above.
3. Backend API Routes
Create the following API routes:

Create a Post: POST /api/posts
Get All Posts: GET /api/posts
Get Single Post: GET /api/posts/:id
Update Post: PUT /api/posts/:id
Delete Post: DELETE /api/posts/:id
4. Start the Backend Server
Run the following command to start the backend server:

bash
Copy code
npm start
The backend will now be running and connected to the database.

Frontend Setup (Next.js & Tailwind CSS)
1. Install Dependencies
In the frontend directory, install the necessary dependencies:

bash
Copy code
cd client
npm install
2. Create a .env File
In the client directory, create a .env.local file with the following environment variables:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:4000/api
3. Build the Admin Dashboard
The admin dashboard page is built with Next.js and styled using Tailwind CSS. Here's how to build the admin dashboard:

Create Blog Post Form: A form to input blog data (title, content, images, SEO metadata, etc.) and manage post status.
Post List: Display all blog posts with actions for editing, deleting, and filtering by status.
Tailwind CSS: Use responsive classes to ensure the dashboard is optimized for various screen sizes.
Example of an Admin Dashboard page in Next.js:

jsx
Copy code
// pages/admin/dashboard.js

import { useState, useEffect } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5">Admin Dashboard</h1>
      <button className="mb-5 bg-blue-500 text-white py-2 px-4 rounded">Create New Post</button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.status}</td>
              <td className="border px-4 py-2">
                <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
4. Blog Display Page
Create a dynamic page (e.g., pages/blog/[id].js) to display individual blog posts:

jsx
Copy code
// pages/blog/[id].js

import { useRouter } from "next/router";
import Head from "next/head";

const BlogPost = ({ post }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Head>
        <title>{post.meta_title}</title>
        <meta name="description" content={post.meta_description} />
      </Head>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:4000/api/posts/${params.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default BlogPost;
5. Start the Frontend Server
Run the following command to start the frontend:

bash
Copy code
npm run dev
The frontend will now be running on http://localhost:3000.
