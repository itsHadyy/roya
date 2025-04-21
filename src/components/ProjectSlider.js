// components/ProjectSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlider = ({ projects, title, showBadgeOn }) => {
    return (
        <div className="project-slider-section">
            {title && <h2 className="slider-section-title">{title}</h2>}

            <div className="project-slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div
                                className="project-slide"
                                onClick={() => window.location.href = project.link}
                            >
                                <img src={project.imageUrl} alt={project.title} />
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