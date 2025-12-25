# Blogserzone 📝

Blogserzone is a full-stack blogging platform built using **React** for the frontend and **Django REST Framework (DRF)** for the backend.  
It supports user authentication using **JWT**, blog visibility control, comments, and likes, with a clean and scalable architecture.

---

## 🚀 Features

### Authentication
- User registration and login
- JWT-based authentication (stateless)
- Secure protected routes

### Blogs
- Create, read, update, and delete blogs
- Blog visibility levels:
  - **Public** – visible to everyone
  - **Protected** – visible to logged-in users
  - **Private** – visible only to the author
- Author-only edit and delete access

### Comments
- Add comments to blogs
- Edit/delete own comments
- Blog-wise comment listing

### Likes
- Like and unlike blogs
- One like per user per blog (enforced at database level)

### Performance & Safety
- Paginated blog listing (limited data per request)
- Backend-enforced permissions
- Secure environment variable handling

---

## 🧱 Tech Stack

### Frontend
- **React**
- **React Router**
- **Axios**
- **JWT handling**
- (Optional) Tailwind CSS

### Backend
- **Django**
- **Django REST Framework**
- **JWT Authentication (SimpleJWT)**
- **django-cors-headers**
- **python-dotenv**

### Database
- **SQLite** (development)
- Easily extendable to **PostgreSQL** (production)

### Tools
- Git & GitHub
- Virtual Environment (`venv`)
- REST APIs

---

## 🏗 Project Architecture

### Backend Apps

```text
accounts/   → Custom user model & authentication
blogs/      → Blog posts & visibility logic
comments/   → Blog comments
likes/      → Blog likes
