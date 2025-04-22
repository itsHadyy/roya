import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectSlider from '../components/ProjectSlider';
const Projects = () => {
    const newCairo = [
        {
            id: 'stone-park',
            title: 'Stone Park',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/stonePark/img01.jpg',
            link: '/projects/stone-park'
        },
        {
            id: 'selection-by-telal',
            title: 'Selection by Tealal East',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/selectionByTelal/img01.jpg',
            link: '/projects/selection-by-telal'
        },
        {
            id: 'telal-east',
            title: 'Telal East',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/telalEast/img01.png',
            link: '/projects/telal-east'
        },
        {
            id: 'the-hills-oaks',
            title: 'The Hills - Oaks',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/theHills/Oaks/img01.png',
            link: '/projects/the-hills-oaks'
        },
        {
            id: 'the-hills-willows',
            title: 'The Hills - Willows',
            description: 'Residential',
            imageUrl: '/media/projects/newCairo/theHills/Willows/img01.jpg',
            link: '/projects/the-hills-willows'
        }
    ];

    const commercialProjects = [
        {
            id: 'commercial',
            title: 'Commercial',
            description: 'Commercial',
            imageUrl: '/media/projects/commercial/img01.jpg',
            link: '/projects/commercial'
        },
        {
            id: 'commercial',
            title: 'Commercial',
            description: 'Commercial',
            imageUrl: '/media/projects/commercial/img02.jpg',
            link: '/projects/commercial'
        },
        {
            id: 'commercial',
            title: 'Commercial',
            description: 'Commercial',
            imageUrl: '/media/projects/commercial/img04.jpg',
            link: '/projects/commercial'
        }
    ];
    const northCoast = [
        {
            id: 'north-coast',
            title: 'North Coast',
            description: 'Residential',
            imageUrl: '/media/projects/northCoast/img01.jpg',
            link: '/projects/north-coast'
        },
        {
            id: 'north-coast',
            title: 'North Coast',
            description: 'Residential',
            imageUrl: '/media/projects/northCoast/img02.jpg',
            link: '/projects/north-coast'
        },
        {
            id: 'north-coast',
            title: 'Ocean View',
            description: 'Residential',
            imageUrl: '/media/projects/northCoast/img03.jpg',
            link: '/projects/north-coast'
        }
    ];
    const sokhna = [
        {
            id: 'sokhna-telal',
            title: 'Telal',
            description: 'Residential',
            imageUrl: '/media/projects/sokhna/telal/img01.jpg',
            link: '/projects/sokhna-telal'
        },
        {
            id: 'sokhna-soul',
            title: 'Soul',
            description: 'Residential',
            imageUrl: '/media/projects/sokhna/soul/img01.jpg',
            link: '/projects/sokhna-soul'
        },
    ];

    return (
        <div>
            <div className="banner projects01">
                <h1>Projects</h1>
            </div>

            <ProjectSlider
                title="New Cairo"
                projects={newCairo}
            />
            <ProjectSlider
                title="Commercial Projects"
                projects={commercialProjects}
            />

            <ProjectSlider
                title="North Coast"
                projects={northCoast}
            />
            <ProjectSlider
                title="Ain Sokhna"
                projects={sokhna}
            />
        </div>
    );
};

export default Projects;