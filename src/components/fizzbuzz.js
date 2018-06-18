import React from 'react';
import Panel from './panel';

class FizzBuzz extends Panel {
  render() {
    const { value } = this.props;
    return <Panel value={value} type={'FizzBuzz'} />;
  }
}

export default FizzBuzz;