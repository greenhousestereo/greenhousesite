import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Shows</h2>
          <p>Green House Stereo is currently <a href="/booking">booking shows</a> throughout the Black Hills and surrounding areas.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Venue</th>
                <th>City</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Cave Collective</td>
                <td>Rapid City, SD</td>
                <td>5 October 2019</td>
                <td>9:30p</td>
                <td>???</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>


        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
