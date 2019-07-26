import React from 'react';

import Search from './Search';

const Input = ({ tipo, ...props }) => {
  switch(tipo) {
    case "search":
      return <Search {...props} />
      break;
  }
}

export default Input;