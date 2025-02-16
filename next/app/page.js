export default function Home() {
  return (
      <div className="hero-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p-md-6 rounded-4 bg-black">
                <div className="section-space-sm-y px-4 px-md-9 rounded-4 bg-neutral-4 position-relative z-1 overflow-hidden">
                  <div className="row g-4 justify-content-center align-items-center">
                    <div className="col-lg-6">
                      <h2 className="mb-9 clr-white fw-extrabold hero-2__title">
                        <span className="d-block animate-line-3d">Gabbar Generative AI Platform</span>
                      </h2>
                      <p className="mb-9 max-text-40 clr-white fw-semibold animate-text-from-right">
                        Finances built for the future. Meet the fastest, most secure, and compliant platform
                      </p>
                      <div className="fadein_bottom_17s fadeIn_bottom">
                        <a href="register.html" className="gradient-btn-2 position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-4 rounded-pill fw-bold text-center">
                          <span className="d-inline-block">Join Community</span>
                          <span className="d-inline-block">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="swiper hero-2-slider fadeIn_bottom">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="/assets/img/hero-2-img-1.png" alt="image" className="img-fluid" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/hero-2-img-2.png" alt="image" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
                      <div className="swiper hero-2-slider-thumb">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="hero-2-slider-thumb__img">
                              <img src="/assets/img/hero-2-thumb-1.png" alt="image" className="img-fluid flex-shrink-0" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="hero-2-slider-thumb__img">
                              <img src="/assets/img/hero-2-thumb-2.png" alt="image" className="img-fluid flex-shrink-0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src="/assets/img/hero-2-shape.png" alt="image" className="img-fluid position-absolute top-0 start-0 bottom-0 h-100 object-fit-cover z-n1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}