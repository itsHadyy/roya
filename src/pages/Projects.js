import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectSlider from '../components/ProjectSlider';
const Projects = () => {
    const newCairo = [
        {
            id: 1,
            title: 'Stone Park',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/stonePark/img01.jpg',
            link: '/projects/stone-park'
        },
        {
            id: 2,
            title: 'Selection by Tealal East',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/selectionByTelal/img01.jpg',
            link: '/projects/slection'
        },
        {
            id: 3,
            title: 'Telal East',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/telalEast/img01.png',
            link: '/projects/telal-east'
        },
        {
            id: 4,
            title: 'The Hills - Oaks',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/theHills/Oaks/img01.png',
            link: '/projects/oaks'
        },
        {
            id: 5,
            title: 'The Hills - Willows',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/theHills/Willows/img01.jpg',
            link: '/projects/willows'
        }
    ];

    const commercialProjects = [
        {
            id: 5,
            title: 'New Cairo',
            description: 'Commercial',
            imageUrl: '/media/projects/newCairo/img01.jpg',
            link: '/projects/new-cairo'
        }
    ];

    const featuredProjects = [
        {
            id: 6,
            title: 'Telal East',
            description: 'Featured Project',
            imageUrl: '/path-to-telal-east-image.jpg',
            link: '/projects/telal-east'
        },
        {
            id: 7,
            title: 'Ocean View',
            description: 'Featured Project',
            imageUrl: '/media/projects/featured/ocean-view.jpg',
            link: '/projects/ocean-view'
        }
    ];

    return (
        <div>
            <div className="banner projects01">
                <h1>Projects</h1>
            </div>

            {/* Residential Projects Slider */}
            <ProjectSlider
                title="New Cairo"
                projects={newCairo}
            />

            {/* Commercial Projects Slider */}
            <ProjectSlider
                title="Commercial Projects"
                projects={commercialProjects}
            />

            {/* Featured Projects Slider with badge */}
            <ProjectSlider
                title="Featured Projects"
                projects={featuredProjects}
                showBadgeOn="Telal East"
            />
        </div>
    );
};

export default Projects;