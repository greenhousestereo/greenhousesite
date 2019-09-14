import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Music</h2>
          <p>We happily and proudly provide our music for free. If you like what you hear, please consider purchasing some of our material (when available). If you’re interested in using our music in some of your own work, please seek permission first.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3>Watch</h3>
          <h4>Winter Blackbirds</h4>
          <iframe title="Winter Blackbirds" src="https://www.youtube.com/embed/YK4tadRwmWQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4>Features</h4>
          <iframe title="Features" src="https://www.youtube.com/embed/zx64tzOSiSM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>Watch more of our videos on our <a href="https://www.youtube.com/channel/UCI8p8azpwSY9nMuFYXIc1xg">YouTube channel.</a></p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
