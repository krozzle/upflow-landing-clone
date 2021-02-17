import React from 'react';
import ReactDOM from 'react-dom';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import arrowRightLarge from './arrowRightLarge.svg';
import changesbg2x from './changesbg2x.webp';

const footerStyle = css`
  padding: 80px 0;
  text-align: center;
  font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  display: block;
  max-width: 1224px;
  padding: 0 8%;
  margin: 0 auto;
  bottom: 0;

  > * {
    display: flex;
    justify-content: space-around;
  }
`;
export default function Footer() {
  return (
    <div css={footerStyle}>
      <div
        css={css`
          text-align: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5;
          color: #000;
        `}
      >
        © Copyright 2020
        <a href='https://maketheweb.io/'>MakeTheWeb</a>
      </div>
      <ul
        css={css`
          /* display: flex;
          justify-content: space-around; */
        `}
      >
        <li>
          <a href='#a'>Changelog</a>
        </li>
        <li>
          <a href='#a'>EULA</a>
        </li>
        <li>
          <a href='#a'>FAQ</a>
        </li>
        <li>
          <a href='#a'>Twitter</a>
        </li>
        <li>
          <a href='#a'>Press kit</a>
        </li>
        <li>
          <a href='#a'>Contact us</a>
        </li>
      </ul>
    </div>
  );
}
