import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired),
  };

  render() {
    let colors = this.props.colors;
    let jsxCode = this.props.children;
    console.log(colors);
    console.log(jsxCode);
    colors.map(v => {
      jsxCode = <div style={{ border: "dashed 5px " + v, padding: "1px" }}>{jsxCode}</div>
    });

    return jsxCode;
  }

}

export default RainbowFrame;
