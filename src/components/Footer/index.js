import React from 'react';
import Logo from '../../images/logo.webp';
import Android from '../../images/android.webp';
import BlackBerry from '../../images/blackberry.webp';
import DotNet from '../../images/dotnet.webp';
import Ios from '../../images/ios.webp';
import Java from '../../images/java.webp';
import SilverLight from '../../images/silverlight.webp';

import './styles.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="address">
          <img src={Logo} alt="logo" width="100%" height="100%" />
          <strong style={{ fontSize: '1.3rem' }}>PT Dwidasa Samsara Indonesia</strong>
          <div>
            Ruko Jalur Sutera 29A No. 53
            <br />
            Alam Sutera Serpong, Tangerang 15323
          </div>
        </div>
        <div className="contact">
          <h3 style={{ fontSize: 'clamp(20px, 1.67vw, 24px)' }}>Contact</h3>
          <div>
            Phone : +62.21.5314.1135
            <br />
            Fax : +62.21.5314.1135
            <br />
            Email : community@dwidasa.com
          </div>
        </div>
        <div className="technologies">
          <div className="row">
            <img src={Android} alt="brand-logo" />
            <img src={BlackBerry} alt="brand-logo" />
            <img src={DotNet} alt="brand-logo" />
          </div>
          <div className="row">
            <img src={Ios} alt="brand-logo" />
            <img src={Java} alt="brand-logo" />
            <img src={SilverLight} alt="brand-logo" />
          </div>
        </div>
      </div>
      <div className="copyright">Copyright &#169; 2015 - Dwidasa Samsara Indonesia</div>
    </footer>
  );
}
