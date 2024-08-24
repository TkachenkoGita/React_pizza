

import React from 'react'
import ContentLoader from "react-content-loader";
function PizzaBlockLoader() {
  return (
    
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="138" cy="125" r="108" />
      <rect x="0" y="255" rx="6" ry="6" width="277" height="26" />
      <rect x="0" y="305" rx="6" ry="6" width="277" height="84" />
      <rect x="0" y="419" rx="6" ry="6" width="103" height="35" />
      <rect x="144" y="410" rx="25" ry="25" width="131" height="53" />
    </ContentLoader>
  );
  
}

export default PizzaBlockLoader