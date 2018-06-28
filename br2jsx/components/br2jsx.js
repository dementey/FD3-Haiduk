import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
    text: PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  };

  br2jsxFunc(txt) {
    let arr = txt.split(/<br\s*\/?>/i);
    return arr.reduce((el, a) => el.concat(a, <br />), []);
  };

  render() {
    return (
      <div className="br2jsx">
        {this.br2jsxFunc(this.props.text.content)}
      </div>
    );
  }
  
}

export default Br2jsx;