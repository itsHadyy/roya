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
        {
            id: 'telal-east',
            title: 'Telal East',
            description: 'Residential',
            fullDescription:
                "Life is a breeze when you picture living in a place with a constant scenic sight of a turquoise crystal lagoon and shimmering water features, adorned with vast green spaces and Mediterranean architecture of intricate detail, symmetry, harmony, and balance. Creating an inviting new neighborhood, the fully integrated and mixed use project is spread across 772,800 SQM of open space and 1,218 units, boasting of diverse alluring residences, situated at a prime location along the Middle Ring Road and in between New Cairo and the Administrative Capital. It contains a sensational of array designated amenities catering to a plethora of lifestyles, redefining the meaning of living in a truly idyllic atmosphere with standards that reflect privacy and comfort. Its ideal location makes 772,800 SQM a distinct choice for living because living at the right location is key to a serene and harmonious life. Located at the epicenter, in between New Cairo and the Administrative capital with accessibility through the Middle Ring Road, 184 is set to be an appealing new district at the heart of New Cairo.",
            location: 'New Cairo',
            media: [
                { type: 'image', url: '/media/projects/newCairo/telalEast/img01.png' },
                { type: 'image', url: '/media/projects/newCairo/telalEast/img02.png' },
                { type: 'image', url: '/media/projects/newCairo/telalEast/img03.png' },
                { type: 'image', url: '/media/projects/newCairo/telalEast/img04.png' },
            ],
        },
        {
            id: 'the-hills-oaks',
            title: 'The Hills - Oaks',
            description: 'Residential',
            fullDescription:
                "The Hills is featured by its premium location in the heart of the Fifth Settlement, New Cairo and within a short distance from the ring road that connects it to a group of vital areas in Cairo. This fully-served compound is only 10 minutes from Cairo International Airport, 15 minutes from Heliopolis & Nasr City, 20 minutes from the New Administrative Capital and 30 minutes from Down Town's Tahrir Square. The Hills provides a premium selection of 413 homes on a land area of 135,000 SQM with breathtaking panoramic views of stone park, and complemented with state-of-the-art facilities and modern amenities, offering a lifestyle of luxury, comfort and privacy. The residential units are divided into Signature, Exclusive, Executive and Stone villas along with Twin Homes and Town Homes in Willows in addition to Duplexes and Apartments in Oak Residences that are surrounded by greenery, lakes, and tranquil waters. Each unit comes with its distinctive features in terms of size, overall natural views and aesthetic designs to cater to the different needs and tastes of the residents. As a fully integrated compound, The Hills provides residents with top-notch services, from world-class fitness facilities to international dining choices, outstanding medical facilities and top commercial amenities for a modern and contemporary lifestyle.",
            location: 'New Cairo',
            media: [
                { type: 'image', url: '/media/projects/newCairo/theHills/Oaks/img01.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Oaks/img02.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Oaks/img03.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Oaks/img04.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Oaks/img05.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Oaks/img06.png' },
            ],
        },
        {
            id: 'the-hills-willows',
            title: 'The Hills - Willows',
            description: 'Residential',
            fullDescription:
                "The Hills is featured by its premium location in the heart of the Fifth Settlement, New Cairo and within a short distance from the ring road that connects it to a group of vital areas in Cairo. This fully-served compound is only 10 minutes from Cairo International Airport, 15 minutes from Heliopolis & Nasr City, 20 minutes from the New Administrative Capital and 30 minutes from Down Town's Tahrir Square. The Hills provides a premium selection of 413 homes on a land area of 135,000 SQM with breathtaking panoramic views of stone park, and complemented with state-of-the-art facilities and modern amenities, offering a lifestyle of luxury, comfort and privacy. The residential units are divided into Signature, Exclusive, Executive and Stone villas along with Twin Homes and Town Homes in Willows in addition to Duplexes and Apartments in Oak Residences that are surrounded by greenery, lakes, and tranquil waters. Each unit comes with its distinctive features in terms of size, overall natural views and aesthetic designs to cater to the different needs and tastes of the residents. As a fully integrated compound, The Hills provides residents with top-notch services, from world-class fitness facilities to international dining choices, outstanding medical facilities and top commercial amenities for a modern and contemporary lifestyle.",
            location: 'New Cairo',
            media: [
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img01.jpg' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img02.jpg' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img03.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img04.jpg' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img05.jpg' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img06.jpg' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img07.png' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img08.jpg' },
                { type: 'image', url: '/media/projects/newCairo/theHills/Willows/img09.png' },
            ],
        },
        {
            id: 'commercial',
            title: 'The Big Business District',
            description: 'Commercial',
            fullDescription:
                "The Big Business District is a hallmark of integrated innovation, intelligently designed on 43 acres as a dynamic accelerator, East of Cairo. Mindfully planned to empower rising start-ups, entrepreneurs and visionary corporate alike, the destination is a tapestry of grand possibilities, thanks to cutting-edge administrative spaces and next-generation clinics, in addition to world-class hospitality, retail luxuries and ravishing entertainment, year-round. With an impressive frontage, stretching along the Ring Road, The Big Business District proudly stands as a visible landmark of life-work balance while adopting a unique indoor-outdoor philosophy that invites natural daylight, as well as inspirational views, inside. Bold, big and more than meets the eye, the thriving hub is thoughtfully elevated to rise with professionals' ambitions high above ordinary limits, breaking down the optimum in vibrant public spaces and engaging streets capes at their door. Boasting skyline variations for endless inspiration, The Big Business District bridges the gap between networking opportunities and non-stop recreation, coming alive in public realms with enriching experiences. Private and highly practical, this is the address to succeed, hassle-free, powered by ample parking provision, as well as the highest in security standards, day and night.",
            location: 'Cairo',
            brochureUrl: '/media/brochures/commercial.pdf',
            media: [
                { type: 'image', url: '/media/projects/commercial/img01.jpg' },
                { type: 'image', url: '/media/projects/commercial/img02.jpg' },
                { type: 'image', url: '/media/projects/commercial/img03.jpg' },
                { type: 'image', url: '/media/projects/commercial/img04.jpg' },
                { type: 'image', url: '/media/projects/commercial/img05.jpg' },
            ],
        },
        {
            id: 'north-coast',
            title: 'Telal',
            description: 'Residential',
            fullDescription:
                "With its beautiful landscapes and stunning views, Telal North Coast promises to deliver an aspirational lifestyle within a thriving community. Telal is a pioneering 851,000 SQM luxury resort features a beach that extends over 1500 m and instills a sense of privacy, peace and belonging. This resort boasts an unparalleled master plan featuring units overlooking the sea and lush green spaces from everywhere with 15 pools all around the project and a total number of 1,104 units.",
            location: 'North Coast',
            media: [
                { type: 'image', url: '/media/projects/northCoast/img01.jpg' },
                { type: 'image', url: '/media/projects/northCoast/img02.jpg' },
                { type: 'image', url: '/media/projects/northCoast/img03.jpg' },
            ],
        },
        {
            id: 'sokhna-telal',
            title: 'Telal Shores',
            description: 'Residential',
            fullDescription:
                "Telal Shores is where a harmonious living experience awaits with a total of 80 acres. Nestled in the picturesque Telal El Sokhna project that emodies the pinnacle of coastal living. The project is located 10 mins away from Galala city and 65 mins away from New Cairo. It has 500M beach front and 16,800M2 swimmable lagoon all in an exclusive gated community.",
            location: 'Ain Sokhna',
            brochureUrl: '/media/brochures/sokhna.pdf',
            media: [
                { type: 'image', url: '/media/projects/sokhna/telal/img01.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img02.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img03.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img04.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img05.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img06.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img07.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img08.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img09.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img10.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img11.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img12.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img13.jpg' },
                { type: 'image', url: '/media/projects/sokhna/telal/img14.png' },
                { type: 'image', url: '/media/projects/sokhna/telal/img15.png' },
                { type: 'image', url: '/media/projects/sokhna/telal/img16.png' },
                { type: 'image', url: '/media/projects/sokhna/telal/img17.png' },
            ],
            construction: '',
            constructionMedia: {
                type: 'video',
                url: '/media/projects/sokhna/vid01.mp4',
            },
        },
        {
            id: 'sokhna-soul',
            title: 'Soul',
            description: 'Residential',
            fullDescription:
                "Telal Soul is the newest extension of Telal North Coast, situated 129 km on the Alexandrian Matrouh Coastal Road near Alamein, offering panoramic sea views of the Mediterranean, lush greenery and exquisite water features total land area of 562,000 SQM and 1,196 units. In its master plan, Telal Soul offers a wide selection of stand-alone villas, chalets and twin houses to cater to the individual needs, surrounded by fascinating landscapes, swimming pools and a private lagoon. This iconic beachfront location presents luxury living with its timeless design, unique facilities and diversified entertainment & dining options, providing a high-end experience to its residents, away from the bustling city.",
            location: 'North Coast',
            brochureUrl: '/media/brochures/sokhna.pdf',
            media: [
                { type: 'image', url: '/media/projects/sokhna/soul/img01.jpg' },
                { type: 'image', url: '/media/projects/sokhna/soul/img02.jpg' },
                { type: 'image', url: '/media/projects/sokhna/soul/img03.jpg' },
                { type: 'image', url: '/media/projects/sokhna/soul/img04.jpg' },
                { type: 'image', url: '/media/projects/sokhna/soul/img05.jpg' },
                { type: 'image', url: '/media/projects/sokhna/soul/img06.jpg' },
            ],
            construction: '',
            constructionMedia: {
                type: 'video',
                url: '/media/projects/sokhna/vid01.mp4',
            },
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
                        <a
                            href={`${project.brochureUrl}?v=${Date.now()}`}
                            download={project.brochureUrl.split('/').pop()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn"
                        >
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