import React from 'react';
import './AboutUsPage.css';
import image from '../../assets/images/about-image.jpg';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <section className="section">
        <div className="section-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={image} alt="About Us" className="about-image" />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-text">
                <h2>About Our Company</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo eu nisi viverra feugiat.
                  Aliquam erat volutpat. Fusce in turpis a felis molestie sollicitudin. Donec eu felis in urna congue
                  consectetur a at nibh. Sed aliquet lorem ut pulvinar consectetur. Vivamus scelerisque risus ac massa
                  fringilla, non commodo nulla dapibus. Proin rhoncus, nisl eget ultrices posuere, nunc dui aliquam
                  lacus, id tempor nunc dui non metus. Aliquam et pellentesque eros. Vivamus sed tellus a erat gravida
                  molestie sit amet at tortor. Integer efficitur purus non justo vulputate fringilla. Ut id ligula ac
                  enim viverra posuere. Vestibulum lobortis turpis at libero auctor vestibulum. Integer lobortis ligula
                  at tortor pellentesque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default AboutUsPage;
