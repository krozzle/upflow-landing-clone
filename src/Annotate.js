import React from 'react';
import ReactDOM from 'react-dom';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import base from './base.webp';
import base2x from './base2x.webp';
import arrowRightSmall from './arrowRightSmall.svg';
import dudeOnPhone from './dudeOnPhone.webp';

const annotateStyle = css`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  flex-direction: row-reverse;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 200px;
`;

export default function Annotate() {
  return (
    <div>
      <div>
        <img src={base} alt='Base' />
      </div>
      <div>
        <h2>Annotate</h2>
        <p>
          In a matter of seconds highlight important parts of your screenshot
          with our annotation tool. Loved by our users, it beats any other
          annotation app.
        </p>
      </div>
    </div>
  );
}
