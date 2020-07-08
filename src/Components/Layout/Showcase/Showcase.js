import React from 'react';
import './showcase.css';

const Showcase = () => {
  return (
    <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-slide-to="0"
            data-target="#myCarousel"
            className="active"
          ></li>
          <li data-slide-to="1" data-target="#myCarousel"></li>
          <li data-slide-to="2" data-target="#myCarousel"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
                <h1 className="display-3">Heading One</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dolorum quae ratione architecto eligendi nobis aut
                  quos maxime accusantium illum.
                </p>
                <h3 className="btn btn-info btn-lg">Sign Up Now</h3>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="display-3">Heading Two</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dolorum quae ratione architecto eligendi nobis aut
                  quos maxime accusantium illum.
                </p>
                <h3 className="btn btn-info btn-lg">Learn More</h3>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
                <h1 className="display-3">Heading Three</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dolorum quae ratione architecto eligendi nobis aut
                  quos maxime accusantium illum.
                </p>
                <h3 className="btn btn-info btn-lg">Learn More</h3>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          data-slide="prev"
          className="carousel-control-prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          href="#myCarousel"
          data-slide="next"
          className="carousel-control-next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Showcase;
