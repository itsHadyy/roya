import React from 'react';
import { Link } from 'react-router-dom';

function Events() {

    const img01 = '/media/banners/events02.png';

    return (
        <div>
            <div className="banner events01">
                <h1>Events</h1>
            </div>

            <div className='events02'>
                <div className='eventsMainContainer'>
                    <div className="event-content">
                        <img src={img01} alt="event-content" />
                        <div className='event-content-item'>
                            <div className='eventsHeader'>
                                <h1>Title of the paragraph</h1>
                                <p>12 - 12 - 2025</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tempor hendrerit faucibus tincidunt quisque.
                                Faucibus consectetur commodo eu amet. Morbi at pretium ultrices arcu mattis. Fames duis
                                duis pretium pellentesque tristique praesent morbi. Nisi pellentesque ut tempus velit
                                amet dictumst eget. Donec malesuada interdum vitae nunc id in ac id. Imperdiet in non
                                sagittis bilendum in tempus eget. Amet consectetur quisque bilendum et habitasse dolor
                                cursus vitae. Sit ullamcorper in urna dui ut risus imperdiet ullamcorper eget hac.
                            </p>
                            <Link to='/'>
                                <a href="/home" className="read-more">Read More →</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='eventsMainContainer'>
                    <div className="event-content">
                        <img src={img01} alt="event-content" />
                        <div className='event-content-item'>
                            <div className='eventsHeader'>
                                <h1>Title of the paragraph</h1>
                                <p>12 - 12 - 2025</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tempor hendrerit faucibus tincidunt quisque.
                                Faucibus consectetur commodo eu amet. Morbi at pretium ultrices arcu mattis. Fames duis
                                duis pretium pellentesque tristique praesent morbi. Nisi pellentesque ut tempus velit
                                amet dictumst eget. Donec malesuada interdum vitae nunc id in ac id. Imperdiet in non
                                sagittis bilendum in tempus eget. Amet consectetur quisque bilendum et habitasse dolor
                                cursus vitae. Sit ullamcorper in urna dui ut risus imperdiet ullamcorper eget hac.
                            </p>
                            <Link to='/'>
                                <a href="/home" className="read-more">Read More →</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='eventsMainContainer'>
                    <div className="event-content">
                        <img src={img01} alt="event-content" />
                        <div className='event-content-item'>
                            <div className='eventsHeader'>
                                <h1>Title of the paragraph</h1>
                                <p>12 - 12 - 2025</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tempor hendrerit faucibus tincidunt quisque.
                                Faucibus consectetur commodo eu amet. Morbi at pretium ultrices arcu mattis. Fames duis
                                duis pretium pellentesque tristique praesent morbi. Nisi pellentesque ut tempus velit
                                amet dictumst eget. Donec malesuada interdum vitae nunc id in ac id. Imperdiet in non
                                sagittis bilendum in tempus eget. Amet consectetur quisque bilendum et habitasse dolor
                                cursus vitae. Sit ullamcorper in urna dui ut risus imperdiet ullamcorper eget hac.
                            </p>
                            <Link to='/'>
                                <a href="/home" className="read-more">Read More →</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Events;