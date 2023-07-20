import React from 'react';
import './ServicesPage.css';
import webDevelopmentImage from '../../assets/images/web-development.png';
import mobileAppDevelopmentImage from '../../assets/images/mobile-app-development.png';
import uiuxDesignImage from '../../assets/images/ui-ux-design.png';
import digitalMarketingImage from '../../assets/images/digital-marketing.jpg';
import cloudComputingImage from '../../assets/images/cloud-computing.png';
import cybersecurityImage from '../../assets/images/cybersecurity.jpg';
import featuredImage from '../../assets/images/featured-service.jpg';




const servicesData = [
  {
    title: 'Web Development',
    image: webDevelopmentImage,
    description:
      'We offer custom web development solutions to help your business succeed online.',
  },
  {
    title: 'Mobile App Development',
    image: mobileAppDevelopmentImage,
    description:
      'Get a mobile app developed to reach your audience on their smartphones.',
  },
  {
    title: 'UI/UX Design',
    image: uiuxDesignImage,
    description:
      'Create visually appealing and user-friendly interfaces for your applications.',
  },
  {
    title: 'Digital Marketing',
    image: digitalMarketingImage,
    description:
      'Boost your online presence and reach your target audience with effective digital marketing strategies.',
  },
  {
    title: 'Cloud Computing',
    image: cloudComputingImage,
    description:
      'Leverage the power of cloud computing to enhance your business operations and scalability.',
  },
  {
    title: 'Cybersecurity',
    image: cybersecurityImage,
    description:
      'Protect your digital assets and ensure the security of your business data and systems.',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className="learn-more-button">
              Learn More <i className="fas fa-arrow-right"></i>
            </button>
          </div>



        ))}
      </div>

<br />
      <div className="featured-section">
        <h2>Featured Service</h2>
        <img src={featuredImage} alt="Featured Service" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nisi sit amet metus
          placerat mattis. Etiam rhoncus tincidunt mauris ac tempor. Sed ultricies, neque eu
          commodo malesuada, velit odio consectetur ex, vitae feugiat metus turpis nec neque.
        </p>
        <button className="learn-more-button">
          Learn More <i className="fas fa-arrow-right"></i>
        </button>
      </div>

    </div>
  );
};

export default ServicesPage;
