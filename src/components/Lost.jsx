import React from 'react';

const Lost = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-3">Lost Items</h3>
          </div>
          <div className="col-6 text-right">
            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <img className="img-fluid" alt="Card 1" src="https://example.com/image1.jpg" />
                        <div className="card-body">
                          <h4 className="card-title">Card Title 1</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <img className="img-fluid" alt="Card 2" src="https://example.com/image2.jpg" />
                        <div className="card-body">
                          <h4 className="card-title">Card Title 2</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <img className="img-fluid" alt="Card 3" src="https://example.com/image3.jpg" />
                        <div className="card-body">
                          <h4 className="card-title">Card Title 3</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <img className="img-fluid" alt="Card 1" src="https://example.com/image1.jpg" />
                        <div className="card-body">
                          <h4 className="card-title">Card Title 1</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <img className="img-fluid" alt="Card 2" src="https://example.com/image2.jpg" />
                        <div className="card-body">
                          <h4 className="card-title">Card Title 2</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <img className="img-fluid" alt="Card 3" src="https://example.com/image3.jpg" />
                        <div className="card-body">
                          <h4 className="card-title">Card Title 6</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lost;
