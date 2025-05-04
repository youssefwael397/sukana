import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ISmoothSliderProps {
  bgImages: string[];
  delay: number;
  content: React.ReactElement;
  showButtons?: boolean;
  className?: string;
}

const SmoothSlider: React.FC<ISmoothSliderProps> = ({
  bgImages,
  delay,
  content,
  showButtons,
  className,
}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  // State to handle the current background image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Effect to change background image every 'delay' seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length); // Loop through images
    }, delay); // Change every 'delay' milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [bgImages.length, delay]);

  // Function to handle button click to change background
  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      id="home"
      className={
        'relative w-full bg-cover bg-center transition-all duration-500 ' +
        className
      }
      style={{
        position: 'relative',
      }}
    >
      {/* Background images with fade effect */}
      {bgImages.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out', // Fade transition
          }}
        ></div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white`}
      >
        {content}
      </div>
      {/* Carousel Buttons: Hidden on mobile screens */}
      {showButtons ? (
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2  md:flex hidden gap-2 ${
            isArabic ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          {bgImages.map((_, index) => (
            <button
              key={index}
              className={`h-5 rounded-full bg-white ${
                index === currentIndex
                  ? 'w-16 bg-opacity-100'
                  : 'w-5 bg-opacity-40'
              } transition-all duration-300 ease-in-out`}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SmoothSlider;
