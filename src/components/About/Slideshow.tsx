import React, { useEffect } from "react";

const Slideshow: React.FC = () => {
  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName(
      "slides"
    ) as HTMLCollectionOf<HTMLElement>;

    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].classList.add("active");
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    };

    showSlides();
  }, []);

  return (
    <div className="slideshow-container">
      <img src="images/pic1.jpg" className="slides active" alt="Picture 1" />
      <img src="images/pic2.jpg" className="slides" alt="Picture 2" />
      <img src="images/pic3.jpg" className="slides" alt="Picture 3" />
      <img src="images/pic4.jpg" className="slides" alt="Picture 4" />
    </div>
  );
};

export default Slideshow;
