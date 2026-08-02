const STORAGE_KEY = "blogs";

// সব Blog পাওয়া
export const getBlogs = () => {
  const blogs = localStorage.getItem(STORAGE_KEY);
  return blogs ? JSON.parse(blogs) : [];
};

// নতুন Blog Save করা
export const saveBlogs = (blogs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
};

// একটি Blog Add করা
export const addBlog = (blog) => {
  const blogs = getBlogs();

  blogs.push({
    id: Date.now(),
    ...blog,
  });

  saveBlogs(blogs);
};

export const updateBlog = (id, updatedBlog) => {
  const blogs = getBlogs();

  const updatedBlogs = blogs.map((blog) =>
    blog.id === id
      ? { ...updatedBlog, id }
      : blog
  );

  saveBlogs(updatedBlogs);
};