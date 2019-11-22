import React from 'react';
import styled from 'styled-components';

const Block = styled.ul`
  padding: 0;
  display: ${props => (props.newGame ? 'block' : 'none')};
  list-style-type: none;
  margin: 5px 0;
  li {
    cursor: pointer;
    margin-right: 10px;
    margin-top:5px;
    padding: 3px;
    text-transform: uppercase;
    font-size: 22px;
    display: inline-block;
    border: 1px solid black;
    border-radius:4px;
    width:27px;
    background-color:white

  }
  li:hover {
    background-color: tomato;
  }
  li[disabled] {
    text-decoration: line-through;
    opacity: 0.4;
    pointer-events: none;
  }
`;

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '0123456789'.split('');

const Digits = props => (
  <div>
    <Block {...props}>
      {letters.map(letter => (
        <li
          key={letter}
          className="digit"
          disabled={props.guesses.includes(letter) ? true : false}
          onClick={props.onClick}
        >
          {letter}
        </li>
      ))}
    </Block>
    <Block {...props}>
      {numbers.map(number => (
        <li
          key={number}
          className="digit"
          disabled={props.guesses.includes(number) ? true : false}
          onClick={props.onClick}
        >
          {number}
        </li>
      ))}
    </Block>
  </div>
);

export default Digits;
