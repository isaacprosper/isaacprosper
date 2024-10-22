import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Icons for ratings
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message:
      'This website has transformed how I manage my security systems! The installation was seamless and support has been excellent.',
    likes: 10,
    liked: false,
    comments: [],
    rating: 4,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    message:
      'The quality of service is beyond my expectations. Easy to use and the customer service is unmatched!',
    likes: 25,
    liked: false,
    comments: [],
    rating: 5,
  },
  {
    id: 3,
    name: 'Sam Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    message:
      'Great platform! It helped me monitor my property remotely with ease.',
    likes: 15,
    liked: false,
    comments: [],
    rating: 3,
  },
];

const FeedbackSection = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);

  const handleLike = (id) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id
          ? {
              ...testimonial,
              liked: !testimonial.liked,
              likes: testimonial.liked
                ? testimonial.likes - 1
                : testimonial.likes + 1,
            }
          : testimonial
      )
    );
  };

  const handleRating = (id, rating) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, rating } : testimonial
      )
    );
  };

  const handleAddComment = (id, comment) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id
          ? { ...testimonial, comments: [...testimonial.comments, comment] }
          : testimonial
      )
    );
  };

  const sectionVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 space-y-16">
      {testimonials.map((testimonial, index) => (
        <motion.section
          key={testimonial.id}
          className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <div className="flex items-center mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {testimonial.name}
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            {testimonial.message}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Star Ratings */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(testimonial.id, star)}
                  className={`text-xl ${
                    star <= testimonial.rating
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                  } hover:scale-110 transition-transform`}
                >
                  {star <= testimonial.rating ? <FaStar /> : <FaRegStar />}
                </button>
              ))}
            </div>

            {/* Likes and Comments */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleLike(testimonial.id)}
                className={`text-2xl ${
                  testimonial.liked ? 'text-red-500' : 'text-gray-400'
                } hover:scale-110 transition-transform`}
              >
                {testimonial.liked ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
              <span className="text-lg font-medium text-gray-700">
                {testimonial.likes} Likes
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = e.target.elements.comment.value;
                if (comment.trim()) {
                  handleAddComment(testimonial.id, comment);
                  e.target.reset();
                }
              }}
              className="flex-grow"
            >
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full border border-gray-300 rounded-lg p-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </form>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default FeedbackSection;
