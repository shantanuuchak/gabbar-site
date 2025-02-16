// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header header--2 header--fixed py-lg-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="menu d-lg-flex justify-content-lg-between align-items-lg-center py-3 py-lg-0">
              <div className="d-flex align-items-center justify-content-between">
                <Link legacyBehavior href="/">
                  <a href="/" className="logo link d-inline-flex align-items-center flex-shrink-0">
                    <img src="/assets/img/logo-light.png" alt="logo" className="img-fluid object-fit-contain" />
                  </a>
                </Link>
                <button className="menu-toggle w-10 h-10 p-0 border-0 lh-1 bg-primary-50 clr-neutral-100 :clr-neutral-100 transition :bg-primary-300 rounded flex-shrink-0 d-lg-none order-sm-3 fs-24">
                  <i className="bi bi-list"></i>
                </button>
              </div>
              <div className="menu-nav d-flex align-items-lg-center flex-column flex-lg-row flex-grow-1 gap-4 pb-4 pb-lg-0 rounded">
                <ul className="list list-lg-row mx-lg-auto rounded-pill">
                  <li className="menu-list">
                    <Link legacyBehavior href="/">
                      <a className="link menu-link">Home</a>
                    </Link>
                  </li>
                  <li className="menu-list">
                    <Link legacyBehavior href="/about">
                      <a className="link menu-link">About</a>
                    </Link>
                  </li>
                  <li className="menu-list">
                    <Link legacyBehavior href="/use-cases">
                      <a className="link menu-link">Use Cases</a>
                    </Link>
                  </li>
                  <li className="menu-list">
                    <Link legacyBehavior href="/pricing">
                      <a className="link menu-link">Pricing</a>
                    </Link>
                  </li>
                  <li className="menu-list">
                    <a href="#" className="link menu-link has-sub">Pages</a>
                    <ul className="list menu-sub">
                      <li className="menu-sub-list">
                        <Link legacyBehavior href="/featured">
                          <a className="link menu-sub-link">Featured</a>
                        </Link>
                      </li>
                      <li className="menu-sub-list">
                        <Link legacyBehavior href="/faq">
                          <a className="link menu-sub-link">FAQ</a>
                        </Link>
                      </li>
                      <li className="menu-sub-list">
                        <Link legacyBehavior href="/privacy-policy">
                          <a className="link menu-sub-link">Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="menu-sub-list">
                        <Link legacyBehavior href="/terms-service">
                          <a className="link menu-sub-link">Terms Service</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="list list-lg-row gap-4 gap-lg-6 rounded-pill py-lg-2 px-lg-3">
                  <li className="menu-list mx-4 mx-lg-0">
                    <Link legacyBehavior href="/login">
                      <a className="link d-inline-flex justify-content-center py-2 px-4 border border-neutral-30 :border-secondary-key inverse-surface :bg-secondary-key rounded-pill fs-14 fw-bold text-center clr-white">Login</a>
                    </Link>
                  </li>
                  <li className="menu-list mx-4 mx-lg-0">
                    <Link legacyBehavior href="/register">
                      <a className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-pill fs-14 fw-bold text-center clr-white">
                        <span className="d-block">Sign Up</span>
                        <span className="d-block fs-10">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}