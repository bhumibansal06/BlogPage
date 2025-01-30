# Blog Page

A dynamic blog website that allows users to add, edit, view, and delete blogs. Users can only edit or delete a blog after entering a password. This project is built using JavaScript, Node.js, Express.js, EJS, and CSS, utilizing RESTful APIs to perform CRUD operations.

## Features

- Add new blog posts
- Edit existing blog posts (requires password authentication)
- Delete blog posts (requires password authentication)
- View all blog posts
- Unique IDs generated using UUID
- RESTful API implementation
- Custom error handling for incorrect passwords

## Technologies Used

- JavaScript
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- CSS
- UUID (for generating unique IDs)
- Method-Override (to support PATCH and DELETE requests via forms)

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/BlogPage.git

2. Navigate to the project directory:
   cd blogpage

3. Install dependencies:
   npm install

4. Start the server:
   npm start

5. Open your browser and visit:
   http://localhost:8080/blogs

## Usage

1. Open the homepage (`/blogs`) to view all blog posts.
2. Click on 'New Blog' to add a new blog.
3. Click on a blog post to view its details.
4. Use the 'Edit' button on a blog post to update its content (requires correct password).
5. Use the 'Delete' button to remove a blog post (requires correct password).
6. If an incorrect password is entered, an error page will be displayed.

### Author
Bhumi Bansal - https://github.com/bhumibansal06
