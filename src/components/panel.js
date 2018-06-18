import React, {Component} from 'react';
import styled from 'styled-components';

const PanelStyles = styled.div`
  font-size: 1em;
  line-height: normal;
  color: ${props => props.type==='FizzBuzz' ? 'red' : props.type==='Buzz' ? 'goldenrod' :  props.type==='Fizz' ? 'fuchsia' : 'black' };
  background-color: blue;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: inline-block;
`;

class Panel extends Component {
  render() {
    const { value, type } = this.props;
    return (
      <PanelStyles type={type}>
        {typeof type === 'string' ? type : value}
      </PanelStyles>
    );
  }
}

export default Panel;