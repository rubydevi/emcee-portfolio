import React from 'react';
import about from '../assets/img/about.jpg';

const About = () => (
  <section id="about" className="about">
    <div className="container aos-init aos-animate" data-aos="fade-up">

      <div className="section-title">
        <h2>About</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
          fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et ne
          mo qui impedit suscipit alias ea.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <img src={about} className="img-fluid" alt="about.jpg" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Anchor &amp; Emcee</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Birthday:</strong>
                  {' '}
                  10
                  <sup>th</sup>
                  Feb 1989
                </li>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Website:</strong>
                  {' '}
                  www.example.com
                </li>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Phone:</strong>
                  {' '}
                  +91 95687 78950
                </li>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>City:</strong>
                  {' '}
                  Imphal, Manipur - 795004
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Age:</strong>
                  {' '}
                  30
                </li>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Degree:</strong>
                  {' '}
                  Master
                </li>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Email:</strong>
                  {' '}
                  amrita.devich10@gmail.com
                </li>
                <li>
                  <i className="bi bi-rounded-right" />
                  {' '}
                  <strong>Freelance:</strong>
                  {' '}
                  Available
                </li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Q
            uisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt offici
            a tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. S
            ed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem u
            t quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantiu
            m dolores.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default About;
