import React, { useState } from 'react';
import styles from './Hero.module.css';

const sliderData = [
  {
    image: '/src/assets/assets/new_frontend_assets/hero1.jpg',
    subtitle: "design",
    title: "Slider 01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
  },
  {
    image: '/src/assets/assets/new_frontend_assets/hero2.jpg',
    subtitle: "design",
    title: "Slider 02",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
  },
  {
    image: '/src/assets/assets/new_frontend_assets/hero3.jpg',
    subtitle: "design",
    title: "Slider 03",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
  },
  {
    image: '/src/assets/assets/new_frontend_assets/hero4.jpg',
    subtitle: "design",
    title: "Slider 04",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
  },
  {
    image: '/src/assets/assets/new_frontend_assets/hero5.jpg',
    subtitle: "design",
    title: "Slider 05",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.list}>
        {sliderData.map((slide, index) => (
          <div key={index} className={`${styles.item} ${index === activeIndex ? styles.active : ''}`}>
            <img src={slide.image} alt={slide.title} />
            <div className={styles.content}>
              <p>{slide.subtitle}</p>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>

      <div className={styles.thumbnail}>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`${styles.thumbnailItem} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={slide.image} alt={slide.title} />
            <div className={styles.thumbnailContent}>Name Slider</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;