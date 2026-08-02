const STORAGE_KEY = "blogs";

// Get all blogs
export const getBlogs = () => {
  const blogs = localStorage.getItem(STORAGE_KEY);
  return blogs ? JSON.parse(blogs) : [];
};

// Save all blogs
export const saveBlogs = (blogs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
};

// Add a new blog
export const addBlog = (blog) => {
  const blogs = getBlogs();

  const newBlog = {
    id: Date.now(),
    ...blog,
  };

  blogs.push(newBlog);
  saveBlogs(blogs);
};

// Update an existing blog
export const updateBlog = (id, updatedBlog) => {
  const blogs = getBlogs();

  const updatedBlogs = blogs.map((blog) =>
    blog.id === Number(id)
      ? { ...blog, ...updatedBlog, id: Number(id) }
      : blog
  );

  saveBlogs(updatedBlogs);
};

// Delete a blog
export const deleteBlog = (id) => {
  const blogs = getBlogs();

  const updatedBlogs = blogs.filter(
    (blog) => blog.id !== Number(id)
  );

  saveBlogs(updatedBlogs);
};