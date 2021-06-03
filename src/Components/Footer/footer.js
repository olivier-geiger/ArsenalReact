import React from 'react';


import { ArsenalLogo } from '../Utils/utils';

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <ArsenalLogo
          link={true}
          linkTo={'/'}
          width="60px"
          height="60px"
        />
      </div>
      <div className="footer_descl">
        <p>Oliver - 2021 - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;