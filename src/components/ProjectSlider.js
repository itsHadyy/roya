// components/ProjectSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false }
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
              <div
                className="project-slide"
                onClick={() => window.location.href = project.link}
              >
                <img src={project.imageUrl} alt={project.title} />

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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;