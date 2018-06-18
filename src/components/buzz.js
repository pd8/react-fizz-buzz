import React from 'react';
import Panel from './panel';

class Buzz extends Panel {
  render() {
    const { value } = this.props;
    return <Panel value={value} type={'Buzz'} />;
  }
}

export default Buzz;