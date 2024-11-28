/*import React, { useState } from 'react';
import './RecipeSection.css';

const RecipeSection = () => {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentLikes, setCurrentLikes] = useState(0);
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentComments, setCurrentComments] = useState([]);

  // Dummy video data
  const videos = [
    { 
      title: 'Healthy Salad', 
      thumbnail: 'https://via.placeholder.com/200', 
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      likes: 120, 
      description: 'A delicious and healthy salad recipe with fresh veggies.', 
      comments: [
        "Great recipe, I loved it!",
        "Looks delicious! I will try it."
      ]
    },
    { 
      title: 'Vegan Pancakes', 
      thumbnail: 'https://via.placeholder.com/200', 
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      likes: 150, 
      description: 'Fluffy vegan pancakes with maple syrup.', 
      comments: [
        "Yum! Can't wait to make these!",
        "Such an easy recipe to follow."
      ]
    },
    { 
      title: 'Smoothie Recipe', 
      thumbnail: 'https://via.placeholder.com/200', 
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      likes: 95, 
      description: 'A refreshing smoothie recipe with fruits and yogurt.', 
      comments: [
        "Perfect for a hot day!",
        "Tasty and healthy!"
      ]
    },
    { 
        title: 'Smoothie Recipe', 
        thumbnail: 'https://via.placeholder.com/200', 
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
        likes: 95, 
        description: 'A refreshing smoothie recipe with fruits and yogurt.', 
        comments: [
          "Perfect for a hot day!",
          "Tasty and healthy!"
      ]
    },
    { 
        title: 'Smoothie Recipe', 
        thumbnail: 'https://via.placeholder.com/200', 
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
        likes: 95, 
        description: 'A refreshing smoothie recipe with fruits and yogurt.', 
        comments: [
          "Perfect for a hot day!",
          "Tasty and healthy!"
      ]
    },
    { 
        title: 'Smoothie Recipe', 
        thumbnail: 'https://via.placeholder.com/200', 
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
        likes: 95, 
        description: 'A refreshing smoothie recipe with fruits and yogurt.', 
        comments: [
          "Perfect for a hot day!",
          "Tasty and healthy!"
      ]
    },
    { 
        title: 'Smoothie Recipe', 
        thumbnail: 'https://via.placeholder.com/200', 
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
        likes: 95, 
        description: 'A refreshing smoothie recipe with fruits and yogurt.', 
        comments: [
          "Perfect for a hot day!",
          "Tasty and healthy!"
      ]
    },
    { 
      title: 'Fruit Salad', 
      thumbnail: 'https://via.placeholder.com/200', 
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      likes: 110, 
      description: 'A refreshing fruit salad with seasonal fruits.', 
      comments: [
        "Great mix of fruits!",
        "I added a little honey, it was delicious."
      ]
    }
  ];

  // Function to open modal with video link
  const openModal = (videoLink, likes, description, comments) => {
    setCurrentVideo(videoLink);
    setCurrentLikes(likes);
    setCurrentDescription(description);
    setCurrentComments(comments);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo('');
    setCurrentLikes(0);
    setCurrentDescription('');
    setCurrentComments([]);
  };

  return (
    <div className="recipe-section">
      <h2 className="recipe-heading">Recipes</h2>
      <div className="thumbnail-container">
        {videos.map((video, index) => (
          <div key={index} className="thumbnail-item">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="thumbnail" 
              onClick={() => openModal(video.videoLink, video.likes, video.description, video.comments)} 
            />
            <p>{video.title}</p>
            <div className="likes">Likes: {video.likes}</div>
          </div>
        ))}
      </div>

    
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <iframe
              width="100%"
              height="400px"
              src={currentVideo}
              title="Recipe Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="video-description">
              <h3>Description</h3>
              <p>{currentDescription}</p>
            </div>
            <div className="comments-section">
              <h3>Comments</h3>
              {currentComments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSection;*/


/*
import React, { useState } from 'react';
import './RecipeSection.css'; // Import the CSS file for styling

const RecipeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentLikes, setCurrentLikes] = useState(0);
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentComments, setCurrentComments] = useState([]);

  const videos = [
    { 
      title: 'Healthy Salad', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
      likes: 120, 
      description: 'A delicious and healthy salad recipe with fresh veggies.', 
      comments: [
        "Great recipe, I loved it!",
        "Looks delicious! I will try it."
      ]
    },
    { 
        title: 'Healthy Salad', 
        thumbnail: 'https://via.placeholder.com/200',
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
        likes: 120, 
        description: 'A delicious and healthy salad recipe with fresh veggies.', 
        comments: [
          "Great recipe, I loved it!",
          "Looks delicious! I will try it."
      ]
    },
    { 
        title: 'Healthy Salad', 
        thumbnail: 'https://via.placeholder.com/200',
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
        likes: 120, 
        description: 'A delicious and healthy salad recipe with fresh veggies.', 
        comments: [
          "Great recipe, I loved it!",
          "Looks delicious! I will try it."
      ]
    },
    { 
        title: 'Healthy Salad', 
        thumbnail: 'https://via.placeholder.com/200',
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
        likes: 120, 
        description: 'A delicious and healthy salad recipe with fresh veggies.', 
        comments: [
          "Great recipe, I loved it!",
          "Looks delicious! I will try it."
      ]
    },
    { 
        title: 'Healthy Salad', 
        thumbnail: 'https://via.placeholder.com/200',
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
        likes: 120, 
        description: 'A delicious and healthy salad recipe with fresh veggies.', 
        comments: [
          "Great recipe, I loved it!",
          "Looks delicious! I will try it."
      ]
    },
    { 
        title: 'Healthy Salad', 
        thumbnail: 'https://via.placeholder.com/200',
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
        likes: 120, 
        description: 'A delicious and healthy salad recipe with fresh veggies.', 
        comments: [
          "Great recipe, I loved it!",
          "Looks delicious! I will try it."
      ]
    },
    { 
        title: 'Healthy Salad', 
        thumbnail: 'https://via.placeholder.com/200',
        videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed URL
        likes: 120, 
        description: 'A delicious and healthy salad recipe with fresh veggies.', 
        comments: [
          "Great recipe, I loved it!",
          "Looks delicious! I will try it."
      ]
    },
    { 
      title: 'Fruit Smoothie', 
      thumbnail: 'https://via.placeholder.com/200', 
      videoLink: 'https://www.youtube.com/embed/VpZSmzJfnFQ', // Embed URL
      likes: 80, 
      description: 'A quick and easy fruit smoothie recipe.', 
      comments: [
        "Yum, I love smoothies!",
        "Definitely trying this one!"
      ]
    },
    // Add more video objects here
  ];

  const openModal = (videoLink, likes, description, comments) => {
    setCurrentVideo(videoLink);
    setCurrentLikes(likes);
    setCurrentDescription(description);
    setCurrentComments(comments);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo('');
  };

  return (
    <div className="recipe-section">
      <h2>Recipes</h2>
      <div className="recipe-thumbnails">
        {videos.map((video, index) => (
          <div key={index} className="recipe-thumbnail" onClick={() => openModal(video.videoLink, video.likes, video.description, video.comments)}>
            <img src={video.thumbnail} alt={video.title} />
            <h4>{video.title}</h4>
            <p>Likes: {video.likes}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="400px"
              src={currentVideo}
              title="Recipe Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <h4>Likes: {currentLikes}</h4>
              <p>{currentDescription}</p>
              <h5>Comments</h5>
              <ul>
                {currentComments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSection; */

import React, { useState } from 'react';
import './RecipeSection.css';

const RecipeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentLikes, setCurrentLikes] = useState(0);
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentComments, setCurrentComments] = useState([]);
  const [isYouTube, setIsYouTube] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Expanded video data with regional categories
  const videos = [
    // North Indian Recipes
    { 
      title: 'Punjabi Chole Bhature', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/2nd video.mp4', 
      likes: 150, 
      description: 'Classic North Indian dish with spicy chickpeas and fried bread.', 
      comments: [
        "Authentic Punjabi flavor!",
        "Love this North Indian specialty!"
      ],
      region: 'north',
      isYouTube: false
    },
    { 
      title: 'Kashmiri Rogan Josh', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/north-rogan-josh.mp4', 
      likes: 130, 
      description: 'Signature Kashmiri lamb curry with rich spices.', 
      comments: [
        "Amazing recipe!",
        "So flavorful!"
      ],
      region: 'north',
      isYouTube: false
    },
    
    // South Indian Recipes
    { 
      title: 'Masala Dosa', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/south-masala-dosa.mp4', 
      likes: 140, 
      description: 'Crispy South Indian crepe filled with spiced potatoes.', 
      comments: [
        "Perfect dosa recipe!",
        "Reminds me of my hometown!"
      ],
      region: 'south',
      isYouTube: false
    },
    { 
      title: 'Kerala Fish Curry', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/south-fish-curry.mp4', 
      likes: 125, 
      description: 'Spicy and tangy fish curry from Kerala.', 
      comments: [
        "Authentic coastal flavor!",
        "Love the coconut base!"
      ],
      region: 'south',
      isYouTube: false
    },
    
    // East Indian Recipes
    { 
      title: 'Bengali Mishti Doi', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/east-mishti-doi.mp4', 
      likes: 110, 
      description: 'Sweet yogurt dessert from Bengal.', 
      comments: [
        "Best dessert ever!",
        "Tastes just like home!"
      ],
      region: 'east',
      isYouTube: false
    },
    { 
      title: 'Odia Chenna Poda', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/east-chenna-poda.mp4', 
      likes: 95, 
      description: 'Traditional cheese dessert from Odisha.', 
      comments: [
        "Delicious!",
        "Never tried this before!"
      ],
      region: 'east',
      isYouTube: false
    },
    
    // West Indian Recipes
    { 
      title: 'Gujarati Dhokla', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/west-dhokla.mp4', 
      likes: 135, 
      description: 'Steamed savory cake from Gujarat.', 
      comments: [
        "Perfect snack!",
        "Love the light texture!"
      ],
      region: 'west',
      isYouTube: false
    },
    { 
      title: 'Maharashtrian Misal Pav', 
      thumbnail: 'https://via.placeholder.com/200',
      videoLink: '/videos/west-misal-pav.mp4', 
      likes: 120, 
      description: 'Spicy sprouts curry with bread.', 
      comments: [
        "Street food classic!",
        "So spicy and tasty!"
      ],
      region: 'west',
      isYouTube: false
    }
  ];

  const openModal = (videoLink, likes, description, comments, isYouTube) => {
    setCurrentVideo(videoLink);
    setIsYouTube(isYouTube);
    setCurrentLikes(likes);
    setCurrentDescription(description);
    setCurrentComments(comments);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo('');
  };

  // Filter videos based on selected region
  const filteredVideos = selectedRegion === 'all' 
    ? videos 
    : videos.filter(video => video.region === selectedRegion);

  return (
    <div className="recipe-section">
      <h2>Regional Recipes</h2>
      
      {/* Region Selection Buttons */}
      <div className="region-selector">
        <button 
          className={selectedRegion === 'all' ? 'active' : ''} 
          onClick={() => setSelectedRegion('all')}
        >
          All Regions
        </button>
        <button 
          className={selectedRegion === 'north' ? 'active' : ''} 
          onClick={() => setSelectedRegion('north')}
        >
          North
        </button>
        <button 
          className={selectedRegion === 'south' ? 'active' : ''} 
          onClick={() => setSelectedRegion('south')}
        >
          South
        </button>
        <button 
          className={selectedRegion === 'east' ? 'active' : ''} 
          onClick={() => setSelectedRegion('east')}
        >
          East
        </button>
        <button 
          className={selectedRegion === 'west' ? 'active' : ''} 
          onClick={() => setSelectedRegion('west')}
        >
          West
        </button>
      </div>

      <div className="recipe-thumbnails">
        {filteredVideos.map((video, index) => (
          <div 
            key={index} 
            className="recipe-thumbnail" 
            onClick={() => openModal(
              video.videoLink, 
              video.likes, 
              video.description, 
              video.comments, 
              video.isYouTube
            )}
          >
            <img src={video.thumbnail} alt={video.title} />
            <h4>{video.title}</h4>
            <p>Likes: {video.likes}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isYouTube ? (
              <iframe
                width="100%"
                height="400px"
                src={currentVideo}
                title="Recipe Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                width="100%"
                height="400px"
                controls
                src={currentVideo}
              >
                Your browser does not support the video tag.
              </video>
            )}

            <div className="video-info">
              <h4>Likes: {currentLikes}</h4>
              <p>{currentDescription}</p>
              <h5>Comments</h5>
              <ul>
                {currentComments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSection;