import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaStar, FaRegStar } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'This website has transformed how I manage my security systems!',
    likes: 10,
    liked: false,
    comments: [],
    rating: 4,
    currentComment: '',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'The quality of service is beyond my expectations!',
    likes: 25,
    liked: false,
    comments: [],
    rating: 5,
    currentComment: '',
  },
  {
    id: 3,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    message: 'The quality of service is beyond my expectations!',
    likes: 25,
    liked: false,
    comments: [],
    rating: 5,
    currentComment: '',
  },
];

const FeedbackSection = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);

  const handleLike = (id) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id
          ? { ...testimonial, liked: !testimonial.liked, likes: testimonial.liked ? testimonial.likes - 1 : testimonial.likes + 1 }
          : testimonial
      )
    );
  };

  const handleTyping = (id, value) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, currentComment: value } : testimonial
      )
    );
  };

  const handleAddComment = (id) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id && testimonial.currentComment.trim()
          ? {
              ...testimonial,
              comments: [...testimonial.comments, { text: testimonial.currentComment }],
              currentComment: '',
            }
          : testimonial
      )
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 space-y-16">
      {testimonials.map((testimonial) => (
        <motion.section
          key={testimonial.id}
          className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
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

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleLike(testimonial.id)}
              className={`text-2xl ${testimonial.liked ? 'text-red-500' : 'text-gray-400'} hover:scale-110 transition`}
            >
              {testimonial.liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <span className="text-lg font-medium text-gray-700">
              {testimonial.likes} Likes
            </span>
          </div>

          <div className="mt-4">
            <input
              type="text"
              value={testimonial.currentComment}
              onChange={(e) => handleTyping(testimonial.id, e.target.value)}
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={() => handleAddComment(testimonial.id)}
              className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Comments:
            </h4>
            {testimonial.comments.length > 0 ? (
              testimonial.comments.map((comment, idx) => (
                <p
                  key={idx}
                  className="text-gray-600 text-sm border-b py-1 break-words"
                >
                  {comment.text}
                </p>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No comments yet.</p>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default FeedbackSection;
