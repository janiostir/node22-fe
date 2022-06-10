import React from 'react';

const Nav = () => {
  return (
    <>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Resnica</h4>
                <p className="text-muted">VSŠ je najboljša višja šola!</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Povezave</h4>
                <ul className="list-unstyled">
                  <li><a href="/login" className="text-white">Login</a></li>
                  <li><a href="/register" className="text-white">Register</a></li>
                  <li><a href="/me" className="text-white">Profile</a></li>
                  <li><a href="/create" className="text-white">Ustvari post</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20">
                <path d="M208 237.4h-22.2c-2.1 0-3.7 1.6-3.7 3.7v51.7c0 2.1 1.6 3.7 3.7 3.7H208c2.1 0 3.7-1.6 3.7-3.7v-51.7c0-2.1-1.6-3.7-3.7-3.7zm118.2 0H304c-2.1 0-3.7 1.6-3.7 3.7v51.7c0 2.1 1.6 3.7 3.7 3.7h22.2c2.1 0 3.7-1.6 3.7-3.7v-51.7c-.1-2.1-1.7-3.7-3.7-3.7zm132-125.1c-2.3-3.2-4.6-6.4-7.1-9.5-9.8-12.5-20.8-24-32.8-34.4-4.5-3.9-9.1-7.6-13.9-11.2-1.6-1.2-3.2-2.3-4.8-3.5C372 34.1 340.3 20 306 13c-16.2-3.3-32.9-5-50-5s-33.9 1.7-50 5c-34.3 7.1-66 21.2-93.3 40.8-1.6 1.1-3.2 2.3-4.8 3.5-4.8 3.6-9.4 7.3-13.9 11.2-3 2.6-5.9 5.3-8.8 8s-5.7 5.5-8.4 8.4c-5.5 5.7-10.7 11.8-15.6 18-2.4 3.1-4.8 6.3-7.1 9.5C25.2 153 8.3 202.5 8.3 256c0 2 .1 4 .1 6 .1.7.1 1.3.1 2 .1 1.3.1 2.7.2 4 0 .8.1 1.5.1 2.3 0 1.3.1 2.5.2 3.7.1.8.1 1.6.2 2.4.1 1.1.2 2.3.3 3.5 0 .8.1 1.6.2 2.4.1 1.2.3 2.4.4 3.6.1.8.2 1.5.3 2.3.1 1.3.3 2.6.5 3.9.1.6.2 1.3.3 1.9l.9 5.7c.1.6.2 1.1.3 1.7.3 1.3.5 2.7.8 4 .2.8.3 1.6.5 2.4.2 1 .5 2.1.7 3.2.2.9.4 1.7.6 2.6.2 1 .4 2 .7 3 .2.9.5 1.8.7 2.7.3 1 .5 1.9.8 2.9.3.9.5 1.8.8 2.7.2.9.5 1.9.8 2.8s.5 1.8.8 2.7c.3 1 .6 1.9.9 2.8.6 1.6 1.1 3.3 1.7 4.9.4 1 .7 1.9 1 2.8.3 1 .7 2 1.1 3 .3.8.6 1.5.9 2.3l1.2 3c.3.7.6 1.5.9 2.2.4 1 .9 2 1.3 3l.9 2.1c.5 1 .9 2 1.4 3 .3.7.6 1.3.9 2 .5 1 1 2.1 1.5 3.1.2.6.5 1.1.8 1.7.6 1.1 1.1 2.2 1.7 3.3.1.2.2.3.3.5 2.2 4.1 4.4 8.2 6.8 12.2.2.4.5.8.7 1.2.7 1.1 1.3 2.2 2 3.3.3.5.6.9.9 1.4.6 1.1 1.3 2.1 2 3.2.3.5.6.9.9 1.4.7 1.1 1.4 2.1 2.1 3.2.2.4.5.8.8 1.2.7 1.1 1.5 2.2 2.3 3.3.2.2.3.5.5.7 37.5 51.7 94.4 88.5 160 99.4.9.1 1.7.3 2.6.4 1 .2 2.1.4 3.1.5s1.9.3 2.8.4c1 .2 2 .3 3 .4.9.1 1.9.2 2.9.3s1.9.2 2.9.3 2.1.2 3.1.3c.9.1 1.8.1 2.7.2 1.1.1 2.3.1 3.4.2.8 0 1.7.1 2.5.1 1.3 0 2.6.1 3.9.1.7.1 1.4.1 2.1.1 2 .1 4 .1 6 .1s4-.1 6-.1c.7 0 1.4-.1 2.1-.1 1.3 0 2.6 0 3.9-.1.8 0 1.7-.1 2.5-.1 1.1-.1 2.3-.1 3.4-.2.9 0 1.8-.1 2.7-.2 1-.1 2.1-.2 3.1-.3s1.9-.2 2.9-.3c.9-.1 1.9-.2 2.9-.3s2-.3 3-.4 1.9-.3 2.8-.4c1-.2 2.1-.3 3.1-.5.9-.1 1.7-.3 2.6-.4 65.6-11 122.5-47.7 160.1-102.4.2-.2.3-.5.5-.7.8-1.1 1.5-2.2 2.3-3.3.2-.4.5-.8.8-1.2.7-1.1 1.4-2.1 2.1-3.2.3-.5.6-.9.9-1.4.6-1.1 1.3-2.1 2-3.2.3-.5.6-.9.9-1.4.7-1.1 1.3-2.2 2-3.3.2-.4.5-.8.7-1.2 2.4-4 4.6-8.1 6.8-12.2.1-.2.2-.3.3-.5.6-1.1 1.1-2.2 1.7-3.3.2-.6.5-1.1.8-1.7.5-1 1-2.1 1.5-3.1.3-.7.6-1.3.9-2 .5-1 1-2 1.4-3l.9-2.1c.5-1 .9-2 1.3-3 .3-.7.6-1.5.9-2.2l1.2-3c.3-.8.6-1.5.9-2.3.4-1 .7-2 1.1-3s.7-1.9 1-2.8c.6-1.6 1.2-3.3 1.7-4.9.3-1 .6-1.9.9-2.8s.5-1.8.8-2.7c.2-.9.5-1.9.8-2.8s.6-1.8.8-2.7c.3-1 .5-1.9.8-2.9.2-.9.5-1.8.7-2.7.2-1 .5-2 .7-3 .2-.9.4-1.7.6-2.6.2-1 .5-2.1.7-3.2.2-.8.3-1.6.5-2.4.3-1.3.6-2.7.8-4 .1-.6.2-1.1.3-1.7l.9-5.7c.1-.6.2-1.3.3-1.9.1-1.3.3-2.6.5-3.9.1-.8.2-1.5.3-2.3.1-1.2.3-2.4.4-3.6 0-.8.1-1.6.2-2.4.1-1.1.2-2.3.3-3.5.1-.8.1-1.6.2-2.4.1 1.7.1.5.2-.7 0-.8.1-1.5.1-2.3.1-1.3.2-2.7.2-4 .1-.7.1-1.3.1-2 .1-2 .1-4 .1-6 0-53.5-16.9-103-45.8-143.7zM448 371.5c-9.4 15.5-20.6 29.9-33.6 42.9-20.6 20.6-44.5 36.7-71.2 48-13.9 5.8-28.2 10.3-42.9 13.2v-75.8c0-58.6-88.6-58.6-88.6 0v75.8c-14.7-2.9-29-7.3-42.9-13.2-26.7-11.3-50.6-27.4-71.2-48-13-13-24.2-27.4-33.6-42.9v-71.3c0-2.1 1.6-3.7 3.7-3.7h22.1c2.1 0 3.7 1.6 3.7 3.7V326h29.6V182c0-2.1 1.6-3.7 3.7-3.7h22.1c2.1 0 3.7 1.6 3.7 3.7v25.9h29.5V182c0-2.1 1.6-3.7 3.7-3.7H208c2.1 0 3.7 1.6 3.7 3.7v25.9h29.5V182c0-4.8 6.5-3.7 9.5-3.7V88.1c-4.4-2-7.4-6.7-7.4-11.5 0-16.8 25.4-16.8 25.4 0 0 4.8-3 9.4-7.4 11.5V92c6.3-1.4 12.7-2.3 19.2-2.3 9.4 0 18.4 3.5 26.3 3.5 7.2 0 15.2-3.5 19.4-3.5 2.1 0 3.7 1.6 3.7 3.7v48.4c0 5.6-18.7 6.5-22.4 6.5-8.6 0-16.6-3.5-25.4-3.5-7 0-14.1 1.2-20.8 2.8v30.7c3 0 9.5-1.1 9.5 3.7v25.9h29.5V182c0-2.1 1.6-3.7 3.7-3.7h22.2c2.1 0 3.7 1.6 3.7 3.7v25.9h29.5V182c0-2.1 1.6-3.7 3.7-3.7h22.1c2.1 0 3.7 1.6 3.7 3.7v144h29.5v-25.8c0-2.1 1.6-3.7 3.7-3.7h22.2c2.1 0 3.7 1.6 3.7 3.7z"/>
              </svg>
              <strong>Domov</strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav;