# Blog Admin Dashboard with Next.js, Tailwind CSS, Node.js, and SQL

This project is a blog management system designed for an admin to manage blog posts. The system allows admins to create, edit, and delete blog posts. Each post includes images, videos, SEO metadata, and a publish status (published/draft). The blog posts are then displayed on the frontend, with SEO optimization.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: SQL (MySQL, PostgreSQL, or SQLite)

## Features

### Admin Dashboard

- **Create New Blog Post**:
  - Add a title, content, images, videos, SEO fields (Meta title, meta description, tags).
  - Set the post status (published or draft).

- **Edit Blog Post**:
  - Edit all fields (title, content, images, videos, SEO metadata).
  - Update post status.

- **Delete Blog Post**:
  - Remove posts from the system.

- **Post List**:
  - View all posts with titles, status (published/draft), and creation date.
  - Filter posts by status.

### Blog Display Page

- Display individual blog posts with content, images, and videos.
- Apply SEO metadata (meta title, description) in the `<head>` section using Next.js `<Head>`.
- Optional: Display related posts or tags.

### Responsiveness

- Fully responsive design optimized for mobile, tablet, and desktop screens.

## Optional Features

- Rich text editor for blog content.
- User authentication for admin access.
- Image upload functionality with third-party services like Cloudinary.
- Pagination for blog post listing.

## Database Schema

**Blogs Table**

```sql
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
