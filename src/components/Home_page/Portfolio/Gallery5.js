import React, { useState } from 'react';
import './Gallery5.css'; // Assure-toi d'importer ton fichier CSS
// import './Portfolio.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";




const images = [
    {
        id: 1,
        titre: "Service de Photography",
        link: "https://photograph-service.onrender.com",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/photography_portfolio.jpg'
    },


    {
        id: 2,
        titre: "Service de Nettoyage",
        link: "https://cleaning-uauq.onrender.com",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/nettoyage_protfolio.jpg'
    },


    {
        id: 3,
        titre: "Service de Markething",
        link: "https://markething.onrender.com",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/markething_portfolio.jpg'
    },


    {
        id: 4,
        titre: "Service de Coaching",
        link: "https://coaching-pro.onrender.com",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/coaching_protfolio.jpg'
    },


    {
        id: 5,
        titre: "Service d'Hôtel",
        link: "https://louispierre-andre.github.io/Hotel",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/hotel_service_portfolio.jpg'
    },


    {
        id: 6,
        titre: "Service de Transport",
        link: "https://louispierre-andre.github.io/Transport",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/transport.png'
    },


    {
        id: 7,
        titre: "Site Web Portfolio",
        link: "https://louispierre-andre.github.io/portfolio1",
        category: 'Portfolio',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/website1.PNG'
    },


    {
        id: 8,
        titre: "Site Web Portfolio",
        link: "https://louispierre-andre.github.io/portfolio3",
        category: 'Portfolio',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/website3.PNG'
    },


    {
        id: 9,
        titre: "Site Web Portfolio",
        link: "https://louispierre-andre.github.io/portfolio4",
        category: 'Portfolio',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/website4.PNG'
    },

    {
        id: 10,
        titre: "Site Web Portfolio",
        link: "https://louispierre-andre.github.io/portfolio2",
        category: 'Portfolio',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/website2.PNG'
    },








    {
        id: 11,
        titre: "Application de Quiz",
        link: "https://LouisPierre-Andre.github.io/quiz-app",
        category: 'Web App',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/quizeApp.png'
    },

    {
        id: 12,
        titre: "Bande annonce film",
        link: "https://LouisPierre-Andre.github.io/movie-trailer",
        category: 'Web App',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/movieApp.png'
    },

    {
        id: 13,
        titre: "Service de Restaurant",
        link: "https://louispierre-andre.github.io/Restaurant",
        category: 'Landing Page',
        src: 'https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/restaurant.png'
    },





];

const Gallery5 = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [transitioning, setTransitioning] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ titre: '', src: '', link: '', index: 0 });

    const categories = ['all', ...new Set(images.map(image => image.category))];

    const handleFilter = (category) => {
        setTransitioning(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setTransitioning(false);
        }, 300);
    };

    const handleClick = (index) => {
        setModalContent({
            titre: images[index].titre,
            src: images[index].src,
            link: images[index].link,
            index: index
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNext = () => {
        setModalContent(prev => {
            const nextIndex = (prev.index + 1) % images.length;
            return {
                titre: images[nextIndex].titre,
                src: images[nextIndex].src,
                link: images[nextIndex].link,
                index: nextIndex
            };
        });
    };

    const handlePrev = () => {
        setModalContent(prev => {
            const prevIndex = (prev.index - 1 + images.length) % images.length;
            return {
                titre: images[prevIndex].titre,
                src: images[prevIndex].src,
                link: images[prevIndex].link,
                index: prevIndex
            };
        });
    };

    const filteredImages = selectedCategory === 'all' ? images : images.filter(image => image.category === selectedCategory);

    return (
        <div className='gallery-container'>
            <div className='header'>
                <h2 className="title">Découvrez Mes Projets</h2>
                <p className="subtitle">Explorez les projets réussis qui témoignent de mon expertise et créativité.</p>
            </div>
            <div className="content">












                <div className="button-group">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleFilter(category)}
                            className={`button ${selectedCategory === category ? 'active' : ''}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>















                <div className="image-grid">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`image-card ${transitioning ? 'transitioning' : ''}`}
                        >
                            <img
                                onClick={() => handleClick(index)}
                                src={image.src} alt={image.titre} className="image" />
                            <h1 className='image-title'>{image.titre}</h1>
                            <a href={image.link} className='visite_btn'>Visite</a>
                        </div>
                    ))}
                </div>


                {/* <div className="image-grid">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`image-card ${transitioning ? 'transitioning' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <img src={image.src} alt={image.titre} className="image" />
                            <div className='image-overlay'>
                                <h1 className='image-title'>{image.titre}</h1>
                            </div>
                        </div>
                    ))}
                </div> */}


















            </div>
















            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='modal-image-box'>
                            <img src={modalContent.src} alt={modalContent.titre} className="modal-image" />
                        </div>
                        <h2 className="modal-title">{modalContent.titre}</h2>
                        <a href={modalContent.link} className="modal-link">Visite </a>
                        <button onClick={handlePrev} className="modal-button prev">
                            <FaArrowAltCircleLeft />
                        </button>
                        <button onClick={handleNext} className="modal-button next">
                            <FaArrowAltCircleRight />
                        </button>
                        <button onClick={handleCloseModal} className="modal-close">&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery5;
