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
                <td>???</td>
                <td>???</td>
              </tr>
              <tr>
                <td>Spearfish Brewing Company</td>
                <td>Spearfish, SD</td>
                <td>13 July 2019</td>
                <td>7:30p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Spearfish Brewing Company</td>
                <td>Spearfish, SD</td>
                <td>15 June 2019</td>
                <td>7:00p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Spearfish Brewing Company</td>
                <td>Spearfish, SD</td>
                <td>13 April 2019</td>
                <td>6:00p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Tower West</td>
                <td>Gillette, WY</td>
                <td>7 December 2018</td>
                <td>9:00p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Jake's Tavern</td>
                <td>Gillette, WY</td>
                <td>6 October 2018</td>
                <td>9:00p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Paintings on a Living Canvas</td>
                <td>Gillette, WY</td>
                <td>---</td>
                <td>5:00p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Sickies Garage</td>
                <td>Gillette, WY</td>
                <td>4 July 2018</td>
                <td>5-8:00p</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Donkey Creek 2018</td>
                <td>Gillette, WY</td>
                <td>23 June 2018</td>
                <td>10:00a</td>
                <td>Free</td>
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
