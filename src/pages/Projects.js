import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import ProjectSlider from '../components/ProjectSlider';
const Projects = ({ showBanner = true }) => {
    // const newCairo = [
    //     {
    //         id: '0',
    //         // location: 'test',
    //         title: 'Stone Park',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/newCairo/stonePark/img01.jpg',
    //         link: '/projects/stone-park'
    //     },
    //     {
    //         id: '1',
    //         title: 'Selection by Tealal East',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/newCairo/selectionByTelal/img01.jpg',
    //         link: '/projects/selection-by-telal'
    //     },
    //     {
    //         id: '2',
    //         title: 'Telal East',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/newCairo/telalEast/img01.png',
    //         link: '/projects/telal-east'
    //     },
    //     {
    //         id: '3',
    //         title: 'The Hills - Oaks',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/newCairo/theHills/Oaks/img01.png',
    //         link: '/projects/the-hills-oaks'
    //     },
    //     {
    //         id: '4',
    //         title: 'The Hills - Willows',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/newCairo/theHills/Willows/img01.jpg',
    //         link: '/projects/the-hills-willows'
    //     }
    // ];

    // const commercialProjects = [
    //     {
    //         id: 'sokhna-telal',
    //         title: 'Telal Shores',
    //         location: 'Ain Sokhna',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/sokhna/telal/img01.jpg',
    //         link: '/projects/sokhna-telal'
    //     },
    //     {
    //         id: 'sokhna-soul',
    //         title: 'Soul',
    //         location: 'Ain Sokhna',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/sokhna/soul/img01.jpg',
    //         link: '/projects/sokhna-soul'
    //     },
    //     {
    //         id: 'north-coast',
    //         title: 'Telal',
    //         location: 'North Coast',
    //         description: 'Residential',
    //         imageUrl: '/media/projects/northCoast/img01.jpg',
    //         link: '/projects/north-coast'
    //     },
    //     {
    //         id: 'commercial',
    //         title: 'The Big Business District',
    //         location: 'Commercial',
    //         description: 'Commercial',
    //         imageUrl: '/media/projects/commercial/img04.jpg',
    //         link: '/projects/commercial'
    //     }
    // ];

    const navigate = useNavigate();

    // Define the first project for each category
    const categoryFirstProjects = {
        newCairo: 'stone-park',
        northCoast: 'north-coast',
        sokhna: 'sokhna-telal',
        commercial: 'commercial'
    };

    const handleCategoryClick = (categoryId) => {
        // Navigate to the first project of the clicked category
        navigate(`/projects/${categoryFirstProjects[categoryId]}`);
    };

    return (
        <div>
            {showBanner && (
                <div className="banner projects01">
                    <h1>Projects</h1>
                </div>
            )}

            {/* <ProjectSlider
                title="New Cairo"
                projects={newCairo}
            />
            <ProjectSlider
                projects={commercialProjects}
            /> */}

            <div className='projects02Container'>
                <div
                    className='proj newCairo'
                    id='newCairo'
                    onClick={() => handleCategoryClick('newCairo')}
                >
                    <h1>New Cairo</h1>
                </div>
                <div
                    className='proj northCoast'
                    id='northCoast'
                    onClick={() => handleCategoryClick('northCoast')}
                >
                    <h1>North Coast</h1>
                </div>
                <div
                    className='proj sokhna'
                    id='sokhna'
                    onClick={() => handleCategoryClick('sokhna')}
                >
                    <h1>Sokhna</h1>
                </div>
                <div
                    className='proj commercial'
                    id='commercial'
                    onClick={() => handleCategoryClick('commercial')}
                >
                    <h1>Commercial</h1>
                </div>
            </div>

            <div className='inquiry'>
                <div className='eventsMainContainer '>
                    <div className='contactContainer'>
                        <h2>Inquire Now</h2>
                        <form>
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email Address' />
                            <input type="text" placeholder='Phone Number' /> <br></br>
                            <button type='submit' className='btn'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;