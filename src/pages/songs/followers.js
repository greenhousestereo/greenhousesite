import React from 'react';

import Layout from '../../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Followers</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>You know you can't speak, down in the movies<br />
          Cinema screen, dust in the blue gleam<br />
          Pours out the window, hole in the black wall<br />
          Still he sat still, followers will follow<br /></p>

          <p>Editorial page will destroy the calm voice<br />
          We're picking up speed, yet we fall from the cosmos<br />
          A satellite screams, echos of sonar<br />
          Still he sat still, followers will follow<br /></p>

          <p>When the sun dips down, billboards get taller<br />
          The radio sounds, it's about to get loud now<br />
          The world starts to fold, mountains swallowed<br />
          Still he sat still, followers will follow<br /></p>

          <p>There's a bubble in your blood<br />
          You swear you're breathing mud<br />
          If it's all the same to you<br />
          We'd better run</p>
        </div>
      </div>
    </section>


  </Layout>
);

export default IndexPage;
