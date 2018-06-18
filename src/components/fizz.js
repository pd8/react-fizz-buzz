import React from 'react';
import Panel from './panel';

class Fizz extends Panel {
  render() {
    const { value } = this.props;
    return <Panel value={value} type={'Fizz'} />;
  }
}

export default Fizz;