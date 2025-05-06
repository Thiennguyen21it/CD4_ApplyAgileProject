import React from 'react';
import background_blog from '../assets/background-blog.jpg';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';
import blog5 from '../assets/blog5.png';

// Types for our blog post data
interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

// Sample data based on the UI image
const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: 'SEPTEMBER 27, 2023',
    category: 'SMILE EVE',
    title: 'Why Giving Is Important | 10 Reasons to Donate',
    excerpt: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    image: background_blog,
  },
  {
    id: 2,
    date: 'AUGUST 18, 2022',
    category: 'MINICIYA',
    title: 'We\'ve reached 1 million in donations and counting',
    excerpt: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alters in some form, by injected randomised words.',
    image: blog1,
  },
  {
    id: 3,
    date: 'AUGUST 16, 2022',
    category: 'MINICIYA',
    title: 'Why we\'re going to alaska and why you should too',
    excerpt: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alters in some form, by injected randomised words.',
    image: blog2,
  },
  {
    id: 4,
    date: 'AUGUST 19, 2022',
    category: 'MINICIYA',
    title: 'San Francisco is officially the first city to ban plastic bottles',
    excerpt: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alters in some form, by injected randomised words.',
    image: blog3,
  },
  {
    id: 5,
    date: 'AUGUST 18, 2022',
    category: 'MINICIYA',
    title: 'We\'ve reached 1 million in donations and counting',
    excerpt: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alters in some form, by injected randomised words.',
    image: blog4,
  },
  {
    id: 6,
    date: 'AUGUST 18, 2022',
    category: 'MINICIYA',
    title: 'Costa Rica is the surprising foodie haven you need to know about',
    excerpt: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alters in some form, by injected randomised words.',
    image: blog5,
  },
];

// Featured post component (first large card)
const FeaturedPost: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden mb-10 rounded-lg shadow-lg">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="bg-white p-6 md:p-8 max-w-md ml-auto mr-0 shadow-md">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
            <span>{post.date}</span>
            <span className="text-red-500">|</span>
            <span className="text-red-500 font-medium">{post.category}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-medium mb-2">{post.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
          <button className="border border-gray-300 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition-colors">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

// Regular post card component
const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white overflow-hidden mb-8 w-full rounded-lg shadow-md">
      <div className="w-full md:w-1/3 h-48">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span>{post.date}</span>
          <span>|</span>
          <span className="uppercase">{post.category}</span>
        </div>
        <h3 className="text-lg font-medium mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
        <button className="border border-gray-300 rounded-full px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
          READ MORE
        </button>
      </div>
    </div>
  );
};

// Main Blog component
const Blog: React.FC = () => {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);
  
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 flex flex-col items-center w-full">
      <div className="w-full max-w-6xl mx-auto">
        <FeaturedPost post={featuredPost} />
        
        <div className="flex justify-center mb-12">
          <button className="bg-white border-5 border-green-600 text-green-600 font-semibold rounded-full px-12 py-4 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md uppercase tracking-wide transform hover:scale-105">
            CREATE YOUR BLOG
          </button>
        </div>
        
        <div className="grid gap-8 w-full">
          {regularPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;