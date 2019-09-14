import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <ul className="contact">

          {config.socialLinks.map(social => {
            const { icon, url, name } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{name}</a>
              </li>
            );
          })}
          
        </ul>
        <ul className="copyright">
          <li>&copy; Green House Stereo. All rights reserved.</li>
        </ul>
      </div>
    </section>
  );
}
