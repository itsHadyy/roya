// components/ProjectSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ProjectSlider = ({
  projects,
  title,
  showBadgeOn,
  titlePosition = 'above',
  showTitleWithSlide = false
}) => {
  const effectiveTitlePosition = showTitleWithSlide ? 'with-slide' : titlePosition;

  return (
    <div className="project-slider-section">
      {title && effectiveTitlePosition === 'above' && (
        <h2 className="slider-section-title">{title}</h2>
      )}

      <div className="project-slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          lazy={true}
          watchSlidesProgress={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
          onSlideChange={(swiper) => {
            swiper.slides.forEach((slide) => {
              slide.classList.remove('swiper-slide-active-centered');
            });
            swiper.slides[swiper.activeIndex].classList.add('swiper-slide-active-centered');
          }}
          onInit={(swiper) => {
            swiper.slides[swiper.activeIndex].classList.add('swiper-slide-active-centered');
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <h2 className="slider-section-title">{project.location}</h2>
              <Link to={project.link}>
                <div
                  className="project-slide"
                >

                  <img
                    src={project.imageUrl}
                    className="swiper-lazy"
                    alt={project.title}
                  />

                  {title && effectiveTitlePosition === 'with-slide' && (
                    <div className="slide-title">{title}</div>
                  )}

                  <div className="project-title">{project.title}</div>
                  {project.description && (
                    <div className="project-description">{project.description}</div>
                  )}
                  {showBadgeOn && project.title === showBadgeOn && (
                    <div className="selection-badge">Selection By - {showBadgeOn}</div>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;