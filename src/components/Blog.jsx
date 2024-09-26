import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ image, date, author, comments, title, excerpt }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.coustom-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      }, {
        threshold: 0.4 // Trigger when 20% of the card is visible
      }
    );

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <motion.div 
      className="col-lg-4 col-md-6 mb-1"
      initial={{ opacity: 1, y: 50 }}
      animate={{ opacity: 1, y: 1 }}
      whileTap={{ scale: 1.2 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="card h-100 shadow-sm hover-shadow transition-all duration-300 coustom-card text-light">
        <img src={image} className="card-img-top text-white" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column justify-content-around">
          <div className="d-flex justify-content-between align-items-center mb-2 text-muted">
            <small className='text-white'>
              <i className="far fa-calendar-alt me-1 text-white"></i> {date}
            </small>
            <small className='text-white'>
              <i className="far fa-user me-1 text-white"></i> {author}
            </small>
          </div>
          <h5 className="card-title mb-1">
            <a href="#" className="text-decoration-none text-light hover:text-primary transition-colors duration-300 text-white">{title}</a>
          </h5>
          <p className="card-text flex-grow-1 text-white">{excerpt}</p>
          <div className="d-flex justify-content-between align-items-center mt-1">
            <a href="#" className="btn btn-outline-light btn-sm">Read More</a>
            <small className="text-white">
              <i className="far fa-comments me-1 text-white"></i> {comments} Comments
            </small>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlogCardList = () => {
  const blogPosts = [
    {
      image: "/images/image_1.jpg",
      date: "June 21, 2023",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      excerpt: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      image: "/images/image_2.jpg",
      date: "June 22, 2023",
      author: "John Doe",
      comments: 5,
      title: "10 Tips for Effective Digital Marketing",
      excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
      image: "/images/image_3.jpg",
      date: "June 23, 2023",
      author: "Jane Smith",
      comments: 2,
      title: "The Future of AI in Business Operations",
      excerpt: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas."
    }
  ];

  return (
    <div className="container">
      <h2 className="text-center mb-4 text-light">Latest Blog Posts</h2>
      <div className="row">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

function Blog() {
  return (
    <>
      {/* Blog Section */}
      <section className="blog-section" id="blog-section">
        <div className="container">
          <div className="row mt-0 my-0 py-0 px-0 justify-content-center">
            <div className="col-md-7 heading-section text-center">
              <h1 className=" blog-watermark mb-5">Blog</h1>
              <h2 className="section-title">Our Blog</h2>
              <p className='text-white'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
              </p>
            </div>
          </div>

          {/* Blog Cards */}
          <BlogCardList />
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="counter-wrap">
          <div className="block-18">
            <strong className="number" data-number="100">100</strong>
            <span>Awards</span>
          </div>
        </div>
        <div className="counter-wrap">
          <div className="block-18">
            <strong className="number" data-number="1200">1200</strong>
            <span>Complete Projects</span>
          </div>
        </div>
        <div className="counter-wrap">
          <div className="block-18">
            <strong className="number" data-number="1200">1200</strong>
            <span>Happy Customers</span>
          </div>
        </div>
        <div className="counter-wrap">
          <div className="block-18">
            <strong className="number" data-number="500">500</strong>
            <span>Cups of Coffee</span>
          </div>
        </div>
      </section>

      {/* Freelancing Section */}
      <section
        className="hireme-section"
        style={{
          backgroundImage: `url('/images/nature1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="text-warning coustom-text">
                I'm <span className="text-warning">Available</span> for freelancing
              </h2>
              <p className="coustom-text fw-bold fs-4">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <p className="mb-0">
                <a href="#" className="btn btn-primary py-3 px-4">
                  Hire me
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
