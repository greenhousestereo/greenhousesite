import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Booking</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>Green House Stereo is available for booking throughout the western South Dakota area. Additionally, feel free to contact us regarding recording or business propositions.</p>
          <p>Please contact us by email at <a href="mailto:greenhousestereo@gmail.com">greenhousestereo@gmail.com</a>. Include your contact information, and let us know how you would like us to reach out to you. We will quickly respond to all inquiries. Alternatively, you can fill out the <a href="#contactform">form below</a>.</p>
          <p>Although we are available to play anywhere in the region, we may need additional time to prepare for shows outside of the western South Dakota area. We will make every effort possible to accomodate your schedule, but please keep this in mind when booking.</p>

          <form method="post" action="#" id="contactform">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <label htmlFor="demo-name">Name</label>
                <input type="text" name="demo-name" id="demo-name" defaultValue="" />
              </div>
              <div className="col-6 col-12-xsmall">
                <label htmlFor="demo-email">Email</label>
                <input type="email" name="demo-email" id="demo-email" defaultValue="" />
              </div>
              <div className="col-12">
                <label htmlFor="demo-category">Interested in...</label>
                <select name="demo-category" id="demo-category">
                  <option value="">-</option>
                  <option value="1">Booking</option>
                  <option value="1">Recording</option>
                  <option value="1">Interviewing</option>
                  <option value="1">Other</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="demo-message">Message</label>
                <textarea name="demo-message" id="demo-message" rows="6"></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="primary" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </div>
            </div>
          </form>


        </div>

      </div>
    </section>
  </Layout>
);

export default IndexPage;
