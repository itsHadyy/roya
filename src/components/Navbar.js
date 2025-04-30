import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

    const menu = '/media/icons/menu.png';
    const facebook = '/media/icons/facebook.svg';
    const instagram = '/media/icons/instagram.svg';
    const whatsapp = '/media/icons/whatsapp.svg';
    const linkedin = '/media/icons/linkedin.svg';
    const youtube = '/media/icons/youtube.svg';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Events", path: "/events" },
        { name: "Contact Us", path: "/contact" },
        { name: "About", path: "/about" },
    ];

    return (
        <div>
            <header className="navbar">
                <Link to="/">
                    <img src={logo} className="logo" alt="Roya Logo" />
                </Link>

                <div className='navContent'>

                    <div className='socialMediaIcons'>
                        <Link to="https://www.facebook.com/RoyaDevelopments">
                            <img src={facebook} className="logo" alt="Roya Logo" />
                        </Link>
                        <Link to="https://instagram.com/royadevelopments?igshid=MzRlODBiNWFlZA==">
                            <img src={instagram} className="logo" alt="Roya Logo" />
                        </Link>
                        <Link to="https://wa.me/201144332211">
                            <img src={whatsapp} className="logo" alt="Roya Logo" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/roya-developments/">
                            <img src={linkedin} className="logo" alt="Roya Logo" />
                        </Link>
                        <Link to="https://youtube.com/@royadevelopments2864?si=mwRil5d0G_dnYsmp">
                            <img src={youtube} className="logo" alt="Roya Logo" />
                        </Link>
                    </div>

                    <h4>Hotline: 01144332211</h4>
                    <img src={menu} className="logo" alt="Roya Logo" onClick={toggleMenu} />
                </div>

            </header>
            <nav ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <FaTimes className="close-icon" onClick={toggleMenu} />
                <ul>
                    {navLinks.map(({ name, path }) => (
                        <li key={path}>
                            {location.pathname === path ? (
                                <span className="active-link">{name}</span>
                            ) : (
                                <Link to={path} onClick={toggleMenu}>{name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;