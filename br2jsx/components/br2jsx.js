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
    return arr.reduce((r, v, i) => {
      if (i < arr.length - 1) return r.concat(v, <br key={i} />);
      else return r.concat(v);
    }, []);
  };

  render() {
    console.log(this.br2jsxFunc(this.props.text.content));
    return (
      <div className="br2jsx">
        {this.br2jsxFunc(this.props.text.content)}
      </div>
    );
  }

}

export default Br2jsx;