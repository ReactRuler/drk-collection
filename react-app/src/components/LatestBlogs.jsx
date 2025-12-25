import "./LatestBlogs.css";

const defaultBlogs = [
  {
    id: 1,
    title: "Black Takes Flight",
    date: "April 02, 2025",
    description:
      "From airports to boardrooms, the DRK Travel Collection turns every departure into a statement. Black-on-black design, engineered for presence and performance.",
    image: "/blog-1.jpg",
    url: "#",
  },
  {
    id: 2,
    title: "The Art of Minimalism",
    date: "April 02, 2025",
    description:
      "Discover how simplicity meets sophistication in our latest collection. Every piece designed with intention, crafted for those who value quality over quantity.",
    image: "/blog-2.jpg",
    url: "#",
  },
  {
    id: 3,
    title: "Design Philosophy",
    date: "April 02, 2025",
    description:
      "Exploring the principles behind DRK Collection's black-on-black aesthetic. How we transform everyday objects into icons of style and functionality.",
    image: "/blog-3.jpg",
    url: "#",
  },
];

function LatestBlogs() {
  const blogs = defaultBlogs;

  return (
    <section className="latest-blogs-section">
      <div className="latest-blogs-container">
        <h2 className="latest-blogs-title">LATEST BLOGS</h2>
        <div className="latest-blogs-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-post">
              <div className="blog-post-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-date">{blog.date}</div>
                <h3 className="blog-post-title">{blog.title}</h3>
                <p className="blog-post-description">{blog.description}</p>
                <a href={blog.url} className="blog-post-read-more">
                  <span>READ MORE</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#7D7D7D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
