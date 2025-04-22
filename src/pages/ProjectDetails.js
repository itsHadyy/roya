import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { projectId } = useParams();

    const allProjects = [
        {
            id: 'stone-park',
            title: 'Stone Park',
            description: 'Residential',
            fullDescription:
                'Life is a breeze when you picture living in a place with a constant scenic sight of a turquoise crystal lagoon...',
            location: 'New Cairo',
            brochureUrl: '/media/brochures/stonePark.pdf',
            media: [
                { type: 'image', url: '/media/projects/newCairo/stonePark/img01.jpg' },
                { type: 'image', url: '/media/projects/newCairo/stonePark/img02.jpg' },
                { type: 'image', url: '/media/projects/newCairo/stonePark/img03.jpg' },
                { type: 'video', url: '/media/projects/newCairo/stonePark/video.mp4' },
            ],
            constructionMedia: {
                type: 'video',
                url: '/media/projects/newCairo/stonePark/construction.mp4',
            },
            features: ['Gated community', 'Lagoon views', 'Modern design'],
        },
        // other projects...
    ];

    const project = allProjects.find(p => p.id === projectId);

    const [selectedMedia, setSelectedMedia] = useState(project?.media[0]);

    if (!project) return <div>Project not found</div>;

    return (
        <div className="project-detail">
            <div className="banner">
                <h1>{project.title}</h1>
            </div>

            <div className="description">
                <p>{project.fullDescription}</p>
            </div>

            <div className="media-gallery">
                <div className="main-media">
                    {selectedMedia.type === 'image' ? (
                        <img src={selectedMedia.url} alt="Project" />
                    ) : (
                        <video src={selectedMedia.url} controls />
                    )}
                </div>
                <div className="thumbnails">
                    {project.media.map((item, index) => (
                        <div key={index} onClick={() => setSelectedMedia(item)}>
                            {item.type === 'image' ? (
                                <img src={item.url} alt={`Thumb ${index + 1}`} />
                            ) : (
                                <video src={item.url} muted />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <a href={project.brochureUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
                Download Brochure
            </a>

            <div className="construction-updates">
                <h2>Construction Updates</h2>
                {project.constructionMedia ? (
                    project.constructionMedia.type === 'image' ? (
                        <img src={project.constructionMedia.url} alt="Construction update" />
                    ) : (
                        <video src={project.constructionMedia.url} controls />
                    )
                ) : (
                    <p>No updates available.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;