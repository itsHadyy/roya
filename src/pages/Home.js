import React, { useEffect, useRef, useState } from 'react';

function Home() {
    const [counters, setCounters] = useState({
        landUnder: 0,
        rawLand: 0,
        units: 0,
        unitsUnder: 0,
        families: 0
    });

    const statsRef = useRef(null);
    const hasAnimated = useRef(false);

    const startCounting = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                animateValue('landUnder', 0, 6.5, 2000, true);
                animateValue('rawLand', 0, 3.1, 2000, true);
                animateValue('units', 0, 4900, 2000, false);
                animateValue('unitsUnder', 0, 9200, 2000, false);
                animateValue('families', 0, 3500, 2000, false);
            }
        });
    };

    const animateValue = (key, start, end, duration, isDecimal) => {
        const steps = 60;
        const stepValue = (end - start) / steps;
        let current = start;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = start + (stepValue * step);

            if (step >= steps) {
                current = end;
                clearInterval(timer);
            }

            setCounters(prev => ({
                ...prev,
                [key]: isDecimal ? Number(current.toFixed(1)) : Math.floor(current)
            }));
        }, duration / steps);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(startCounting, {
            threshold: 0.5
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const img1 = '/media/banners/home01.png';

    return (
        <div>
            <div className="home01">
                <h1>Collection  <span>of</span>  Beautiful <br /> Destinations</h1>
            </div>

            <div className="home02">
                <h1>WHO WE ARE</h1>
                <p>Roya Developments has always been crafting a space with intention and care, where each tailored element speaks to the story and needs of the dwellers within it. Since the company was founded in 2007, a name was made for itself for its genuine approach to creating inclusive, contemporary spaces that fuse timeless-ness and innovation within their many projects across Egypt.</p>
                <p>Our wide portfolio of projects consists of Telal North Coast which is dotted with exquisite penthouses, chalets and villas, with unique themes and décor to match the signature lifestyle of each of its inhabitants, replete with private lagoons, health clubs and upscale restaurants. Its newest extension on the same stretch is Telal Soul, perched on the Alexandrian Matrouh Coastal road.</p>

                <div className="stats-section">
                    <div className="stats-container" ref={statsRef}>
                        <div className="stat-item">
                            <h2>{counters.landUnder}M <span>SQM</span></h2>
                            <p>LAND UNDER DEVELOPMENT</p>
                        </div>
                        <div className="stat-item">
                            <h2>{counters.rawLand}M <span>SQM</span></h2>
                            <p>RAW LAND</p>
                        </div>
                        <div className="stat-item">
                            <h2>{counters.units.toLocaleString()}</h2>
                            <p>UNITS & EXISTING FAMILIES</p>
                        </div>
                        <div className="stat-item">
                            <h2>{counters.unitsUnder.toLocaleString()}</h2>
                            <p>UNITS UNDER DEVELOPMENT</p>
                        </div>
                        <div className="stat-item">
                            <h2>{counters.families.toLocaleString()}</h2>
                            <p>NUMBER OF FAMILIES LIVING</p>
                        </div>
                        <div className="stat-item">
                            <a href="/projects" className="learn-more-container">
                                <img src="/media/arrow.png" alt="Arrow" className="arrow-icon" />
                                <div className="learn-more-text">
                                    <span>Learn</span>
                                    <span>more</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="eye-image">
                        <img src="/media/eye.png" alt="Eye" />
                    </div>
                </div>
            </div>

            <div className="home03">
                <div className="home03-content">
                    <h1>Projects</h1>
                    <p>Welcome to Roya Development, where visionary design meets unparalleled quality. As a trusted leader in real estate development, we specialize in creating vibrant, sustainable communities that redefine modern living. Our commitment to excellence drives us to craft spaces that seamlessly blend functionality, aesthetics, and innovation, catering to the evolving needs of homeowners and investors alike. With a focus on delivering value and fostering lasting relationships, we take pride in transforming aspirations into reality, one remarkable project at a time.</p>
                </div>
            </div>

            <div className="home04">
                
            </div>

        </div>
    )
}
export default Home;