import React from 'react'

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio__container">
                <h1>Portfolio</h1>
                <div className="portfolio__main">
                    <div className="portfolio__left">
                        <video
                            src="./videos/out.mp4"
                            alt="dashboard"
                            className="portfolio__img"
                            autoPlay
                        />
                    </div>
                    <div className="portfolio__right">
                        <h2>QT Drive</h2>
                        <p>
                            A file storage system with user authentication, folders, file upload, etc.
                        </p>
                        <a href="https://github.com/qt-coder">See more > </a>
                    </div>
                </div>
                <div className="portfolio__projects">
                    <img src="./images/portfolio1.svg" alt="portfolio" />
                    <img src="./images/portfolio2.svg" alt="portfolio" />
                    <img src="./images/portfolio3.svg" alt="portfolio" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
