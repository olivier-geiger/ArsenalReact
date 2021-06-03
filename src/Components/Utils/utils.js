import React from 'react';
import { Link } from 'react-router-dom';

import arsenal from '../../Resources/images/logos/arsenal.png'

export const ArsenalLogo = (props) => {
  const template = <div
    className="img_cover"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${arsenal}) no-repeat`
    }}
  ></div>

  if(props.link) {
    return (
      <Link className="link_logo" to={props.linkTo}>
        {template}
      </Link>
    )
  } else {
    return template
  }
}