import React from 'react';

import { displayElem } from '../../functions/cardQuestion/conditions';

const Wrapper = ({ children, displayWrapper }) => {
  
  return (
    <div className={displayElem(displayWrapper, "container-wrapper", "container-wrapper hide")}>
      {children}
    </div>
  );
};

export default Wrapper;