// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-2 section-space-xsm-bottom fadeIn_bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-2__content position-relative z-1 section-space-sm-y bg-black border border-neutral-variant-30 rounded-5 px-4 px-xsm-6 px-xl-12">
              <div className="row g-4 gy-5 gy-lg-0">
                <div className="col-lg-4">
                  <Link legacyBehavior href="/">
                    <a className="logo link d-inline-flex align-items-center flex-shrink-0 mb-15">
                      <img src="/assets/img/logo-light.png" alt="logo" className="img-fluid object-fit-contain" />
                    </a>
                  </Link>
                  <div className="w-100"></div>
                  <div className="d-inline-flex gap-4 align-items-center py-3 px-6 bg-neutral-10 rounded-2">
                    <div className="w-7 h-7 rounded-circle overflow-hidden flex-shrink-0">
                      <img src="/assets/img/blog-img-2.jpg" alt="image" className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="flex-grow-1">
                      <span className="d-block mb-1 fs-12 clr-neutral-90">Power By</span>
                      <span className="d-block fs-14 fw-bold clr-neutral-90">Amnext</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row g-4 gy-5 gy-lg-0">
                    <div className="col-md-3">
                      <h6 className="mb-5 fs-18 clr-neutral-80">Resources</h6>
                      <ul className="list gap-4">
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/about">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">About</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/copywrite">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Request API Access</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/faq">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">FAQ</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mb-5 fs-18 clr-neutral-80">Quick Menu</h6>
                      <ul className="list gap-4">
                        <li>
                          <Link legacyBehavior href="/featured">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Features</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/login">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Login</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/pricing">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Pricing</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/register">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Register</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mb-5 fs-18 clr-neutral-80">Tools</h6>
                      <ul className="list gap-4">
                        <li>
                          <Link legacyBehavior href="/use-cases">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Use Cases</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/privacy-policy">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Privacy & Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/terms-service">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Terms & Condition</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/featured">
                            <a className="link d-inline-block clr-neutral-70 :clr-primary-key">Features</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mb-5 fs-18 clr-neutral-80">Socials Links</h6>
                      <ul className="list gap-4">
                        <li>
                          <a href="https://www.facebook.com" className="link d-inline-block clr-neutral-70 :clr-primary-key">Facebook</a>
                        </li>
                        <li>
                          <a href="https://twitter.com" className="link d-inline-block clr-neutral-70 :clr-primary-key">Twitter</a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" className="link d-inline-block clr-neutral-70 :clr-primary-key">Instagram</a>
                        </li>
                        <li>
                          <a href="https://discord.com" className="link d-inline-block clr-neutral-70 :clr-primary-key">Discord</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-space-sm-top">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-3">
                    <p className="mb-0 clr-neutral-90 fw-medium fs-14">
                      Copyright &copy; 2025 <a href="#" className="link d-inline-block clr-white">Gabbar</a>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-md-center clr-neutral-90">Subscribe Our Newsletter 👍</h6>
                    <div className="newsletter-1 d-inline-block w-100 max-text-60 mx-auto position-relative z-1 overflow-hidden rounded-pill">
                      <div className="d-flex p-3 bg-neutral-10 rounded">
                        <input type="text" className="form-control newsletter-1__input bg-transparent clr-neutral-60" placeholder="Enter Email Address" />
                        <a href="#" className="gradient-btn-2 position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-5 py-2 rounded-pill fs-14 fw-bold text-center">Subscribe</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 text-lg-end text-center">
                    <a href="#" className="link w-12 h-12 bg-neutral-4 clr-white d-inline-flex justify-content-center align-items-center rounded-2">
                      <i className="bi bi-arrow-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <img src="/assets/img/footer-2-shape-1.png" alt="image" className="img-fluid d-none d-md-block pointer-none position-absolute start-0 bottom-0 z-n1" />
              <img src="/assets/img/footer-2-shape-2.png" alt="image" className="img-fluid d-none d-md-block pointer-none position-absolute end-0 bottom-0 z-n1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}