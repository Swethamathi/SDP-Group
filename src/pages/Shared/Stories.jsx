import React, { useState } from 'react';


const Stories = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (title) => {
    setFavorites([...favorites, title]);
    alert(`${title} added to favorites!`);
  };

  const cards = [
    {
      title: 'Rendann',
      image: 'https://unsplash.it/504/504/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Reflupper',
      image: 'https://unsplash.it/505/505/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Acirassi',
      image: 'https://unsplash.it/506/506/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    ,
    {
      title: 'Acirassi',
      image: 'https://unsplash.it/506/506/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
    ,
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
    ,
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
  ,
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
  ,
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
  ,
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
  ,
    {
      title: 'Sohanidd',
      image: 'https://unsplash.it/508/508/',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    },
    {
      title: 'Diligord',
      image: 'https://ik.imagekit.io/y0qqjzghp/istockphoto-1993088977-612x612.jpg?updatedAt=1722237248468',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
    }
  ];

  return (
    <div className="wrapper">
      <h1>Parallax Flipping Cards</h1>
      <div className="cols">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${card.image})` }}>
                <div className="inner">
                  <p>{card.title}</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{card.description}</p>
                  <button className="wishlist-btn" onClick={() => handleAddToFavorites(card.title)}>
                    <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
