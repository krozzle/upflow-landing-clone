import React from 'react';
import ReactDOM from 'react-dom';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import arrowRightLarge from './arrowRightLarge.svg';

const changesStyle = css`
  display: flex;
  justify-content: space-around;
  z-index: 10;
  padding: 0 8%;
  margin: 0 auto;
  margin-top: 200px;
  font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export default function Changes() {
  return (
    <div css={changesStyle}>
      <div
        css={css`
          max-width: 500px;
          margin-right: 100px;
          display: block;
        `}
      >
        <div>It feels like 6 apps in one.</div>
        <div>
          CleanShot X provides over <span class='blue'>50&nbsp;changes </span>
          making it the ultimate screen capturing tool.
        </div>
        <div>
          <a href='#a'>
            Upgrade License <img src={arrowRightLarge} alt='' />
          </a>
        </div>
      </div>
      <div
        css={css`
          position: relative;
          flex-shrink: 1;
          margin-right: -250px;
        `}
      >
        What's new? <img src={arrowRightLarge} alt='' />
      </div>
    </div>
  );
}
