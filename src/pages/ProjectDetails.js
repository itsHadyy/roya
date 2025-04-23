import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();

    const allProjects = [
        {
            id: 'stone-park',
            title: 'Stone Park',
            description: 'Residential',
            fullDescription:
                "Stone Park is one of the outstanding residential projects with a total land area 892,000 SQM and 852 number of units that offers an outstanding quiet and vibrant life in the heart of New Cairo. This upscale compound is featured by its unique location right at the entrance of the city, occupying a prime position in one of Cairo's most exclusive neighborhoods as it is only 20 minutes from Cairo International Airport, 15 minutes from Heliopolis & Nasr City, 10 minutes from AUC campus and Maadi.Stone Park compound honors nature by offering an exquisite European - style architectural designs alongside greenery for a remarkable sense of place. Each level boasts panoramic views and an intimate relaxing atmosphere, delivering privacy and peace of mind. The residential units in the compound vary between standalone villas, twin houses, penthouses and apartments, designed to meet the different needs of the residents.",
            location: 'New Cairo',
            brochureUrl: '/media/brochures/stonePark.pdf',
            media: [
                { type: 'image', url: '/media/projects/newCairo/stonePark/img01.jpg' },
                { type: 'image', url: '/media/projects/newCairo/stonePark/img02.jpg' },
                { type: 'image', url: '/media/projects/newCairo/stonePark/img03.jpg' },
            ],
            construction: 'bla bla',
            constructionMedia: {
                type: 'video',
                url: '/media/projects/newCairo/stonePark/construction.mp4',
            },
        },
        {
            id: 'selection-by-telal',
            title: 'Selection by Telal East',
            description: 'Residential',
            fullDescription:
                "Life's a breeze when you picture living in a place with a constant scenic sight of a turquoise clear lagoon and shimmering water features,adorned with vast green spaces and Mediterranean architecture of intricate detail, symmetry, harmony, and balance. Creating an inviting new neighborhood, the fully integrated and mixed use project is spread across 184 feddans of open space, boasting of diverse alluring residences, situated at a prime location along the Middle Ring Road and in between New Cairo and the Administrative Capital. It contains a sensational array of designated amenities catering to aplethora of lifestyles, along with an iconic 8-feddan lagoon where the azure of the water merges with the blue shades of the sky, redefining the meaning of living in a truly idyllic atmosphere with standards that reflect privacy, comfort and true relaxation.",
            location: 'New Cairo',
            brochureUrl: 'public/media/project/brochures/selection.pdf',
            media: [
                { type: 'image', url: '/media/projects/newCairo/selectionByTelal/img01.jpg' },
                { type: 'image', url: '/media/projects/newCairo/selectionByTelal/img02.jpg' },
                { type: 'image', url: '/media/projects/newCairo/selectionByTelal/img03.jpg' },
                { type: 'image', url: '/media/projects/newCairo/selectionByTelal/img04.jpg' },
                { type: 'image', url: '/media/projects/newCairo/selectionByTelal/img05.jpg' },
                { type: 'image', url: '/media/projects/newCairo/selectionByTelal/img06.jpg' },
            ],
        },
    ];

    const project = allProjects.find(p => p.id === projectId);

    const [selectedMedia, setSelectedMedia] = useState(project?.media[0]);

    if (!project) return <div style={{ color: 'white', fontSize: '44px', fontWeight: 'bold', textAlign: 'center', margin: '500px' }}>Project not found</div>;

    return (
        <div>
            <div className="project-detail">
                <div className="banner events01" style={{ backgroundImage: `url(${project.media[0].url})` }}>
                    <div>
                        <h1>{project.title}</h1>
                        <h3>{project.location}</h3>
                    </div>
                </div>

                <div className="description">
                    <p>{project.fullDescription}</p>
                </div>

                <div className="media-gallery">
                    <div className="main-media">
                        {selectedMedia.type === 'image' ? (
                            <img
                                src={selectedMedia.url}
                                alt="Project"
                                className="main-media-item"
                            />
                        ) : (
                            <video
                                src={selectedMedia.url}
                                controls
                                className="main-media-item"
                            />
                        )}
                    </div>
                    <div className="thumbnails">
                        {project.media.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedMedia(item)}
                                className={`thumbnail-item ${selectedMedia.url === item.url ? 'active' : ''}`}
                            >
                                {item.type === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt={`Thumb ${index + 1}`}
                                        className="thumbnail-media"
                                    />
                                ) : (
                                    <video
                                        src={item.url}
                                        muted
                                        className="thumbnail-media"
                                    />
                                )}
                                {item.type === 'video' && (
                                    <div className="video-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='downloadContainer'>
                    {project.brochureUrl && (
                        <a href={project.brochureUrl} rel="noopener noreferrer" className="download-btn">
                            Download Brochure
                        </a>
                    )}
                </div>


                {project.constructionMedia && (
                    <div className="construction-updates">
                        <div>
                            <h2>Construction Updates</h2>
                            <p>{project.construction}</p>
                        </div>
                        <div>
                            {project.constructionMedia.type === 'image' ? (
                                <img src={project.constructionMedia.url} alt="Construction update" />
                            ) : (
                                <video src={project.constructionMedia.url} controls />
                            )}

                        </div>
                    </div>
                )}

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

export default ProjectDetails;