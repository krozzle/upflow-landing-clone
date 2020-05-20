import React from 'react';
import ReactDOM from 'react-dom';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import macbook from './macbook.webp';
import macbook2x from './macbook2x.webp';
import arrowRightSmall from './arrowRightSmall.svg';
import dudeOnPhone from './dudeOnPhone.webp';

const headerStyle = css`
  display: flex;

  align-items: center;
  margin-top: 207px;

  padding: 0 8%;
  margin: 0 auto;
  -webkit-box-align: center;
  font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
    Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export default function Header() {
  return (
    <div style={headerStyle}>
      <div>
        <div>
          <h1>Capture your Mac’s screen like a pro.</h1>
        </div>
        <button
          css={css`
            background: #004ec5;
            margin-right: 24px;
            height: 56px;
            display: inline-flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            text-align: center;
            padding: 0 40px;
            position: relative;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.5;
            color: #fff;
            border: none;
            border-radius: 8px;
          `}
        >
          Buy now
        </button>
        <button
          css={css`
            background: #f6f6f6;
            color: #000;
            user-select: none;
            transition: background 0.15s ease;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            outline: none;
            align-items: center;
            text-align: center;
            padding: 0 40px;
            position: relative;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.5;
            justify-content: center;
            -webkit-box-align: center;
            display: inline-flex;
            -webkit-box-pack: center;
            height: 56px;
          `}
        >
          How it works
        </button>
        <div>
          <a href='#a'>
            30-Day Money-Back Guarantee
            <img
              src={arrowRightSmall}
              alt='Arrow Right Small'
              css={css`
                margin-bottom: -1px;
                margin-left: 1px;
                fill: currentColor;
                -webkit-transition: all 0.1s ease;
                transition: all 0.1s ease;
              `}
            />
          </a>
        </div>
        <div
          css={css`
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin-top: 85px;
            text-align: left;
          `}
        >
          <img src={dudeOnPhone} alt='' />
          <div>
            CleanShot is a super powerful replacement for the macOS tool. It
            works exactly how I need it to.
          </div>
          <div>
            <a href='https://twitter.com/DanielZarick'>Daniel Zarick</a>,{' '}
            <a href='arrow.to'>arrow.to</a>
          </div>
        </div>
      </div>
      <div
        css={css`
          position: relative;
          flex-shrink: 1;
          margin-right: -250px;
        `}
      >
        <a href='#a'>
          <picture>
            <source
              type='image/webp'
              srcSet={`${macbook} 1056w, ${macbook2x} 1586w`}
            />
            <img
              src={macbook}
              alt='Macbook'
              css={css`
                float: right;
              `}
            />{' '}
          </picture>
        </a>
      </div>
    </div>
  );
}
