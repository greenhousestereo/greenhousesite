import React from 'react';

import Layout from '../components/Layout';

import dylan from '../assets/images/dylan01c.png';
import ryan from '../assets/images/ryan01c.png';
import jonny from '../assets/images/jonny01c.png';
import dustin from '../assets/images/dustin01c.png';
import sydney from '../assets/images/sydney01c.png';

import feature1 from '../assets/images/feature01c.png';
import feature2 from '../assets/images/feature02c.png';
import feature3 from '../assets/images/feature03c.png';
import feature4 from '../assets/images/feature04c.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-home"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading1}</p>
        <p>{config.subHeading2}</p>
        <p>{config.subHeading3}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <img className="image" src={dylan} alt="" />
          <div className="content">
            <h2 className="major">Dylan “Sherpa” Malik</h2>
            <p>
            Dylan’s interest in playing guitar resulted from of his fondness of being loud. He is, in fact, widely accepted as the loudest thing in a 25-mile radius. Fortunately, Dylan is a true representation of unflinching talent. His unmatched sense for balance and timing is reflected in each Green House Stereo song.
            </p>
            <p>
            Dylan is the lead guitarist of Green House Stereo.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img className="image" src={ryan} alt="" />
          <div className="content">
            <h2 className="major">Ryan “The Velvet Hammer” Suhr</h2>
            <p>
            No one is entirely sure where Ryan came from or where he is going next. He has been described as a gypsy, vagrant, vagabond, bohemian, and pest. Thankfully, he is just as vibrant, textured, colorful, and exciting in music as he is in life.
            </p>
            <p>
            Ryan is the bassist of Green House Stereo.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <img className="image" src={jonny} alt="" />
          <div className="content">
            <h2 className="major">Jonny “Brushfire” Williams</h2>
            <p>
            Jonny is constantly surprising, quietly explosive, and simply brilliant. A natural talent, he has been a progressive force for the sound of Green House Stereo from the beginning. Althoug fuh Jonny may be meek, he is never mild.
            </p>
            <p>
            Jonny is the drummer of Green House Stereo, though he often performs as keyboardist, percussionist, and banjoist. The man is unstoppable.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img className="image" src={dustin} alt="" />
          <div className="content">
            <h2 className="major">Dustin “Star Fucker” Grey</h2>
            <p>
            Dustin is a clumsy guitar player and probably the weakest member of Green House Stereo. He is a regular thief of the music created by the members of the band and an irregular contributor to everything else in his life. He makes up for this by singing poorly, shouting loudly, kicking and flailing wildly, and always conducting himself with absolute honesty.
            </p>
            <p>
            Dustin is the frontman and rhythm guitarist of Green House Stereo.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <img className="image" src={sydney} alt="" />
          <div className="content">
            <h2 className="major">Sydney “Lady Peckinpaw” Pollack</h2>
            <p>
            Sydney is the reluctant, official photographer and occasional fill-in rehearsal bassist for Green House Stereo. She is also in charge of all Green House Stereo marketing and social media presence.
            </p>
            <p>
            She believes her bio is entirely too boring.
            </p>
          </div>
        </div>
      </section>


      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Latest</h2>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={feature1} alt="" />
              </a>
              <h3 className="major">Show at the Cave Collective</h3>
              <p>
                Come see Green House Stereo at the Cave Collective on October 5, 2019.
              </p>
              <a href="/shows" className="special">
                Shows
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={feature2} alt="" />
              </a>
              <h3 className="major">Followers</h3>
              <p>
                We've got a new song, <i>Followers</i>, that we've added to our lineup.
              </p>
              <a href="/songs/followers" className="special">
                Lyrics
              </a>
            </article>
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
