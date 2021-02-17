import ReactDOM from 'react-dom';
import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import logo from './logo.webp';
import logo2x from './logo2x.webp';

const navbarStyle = css`
  height: 100%;
  height: 70px;
  /* display: -webkit-box;
  display: -ms-flexbox; */
  display: flex;
  -webkit-box-pack: justify;
  /* -ms-flex-pack: justify; */
  justify-content: space-between;
  /* -webkit-box-align: center; */
  /* -ms-flex-align: center; */
  align-items: center;
  position: relative;
  z-index: 100;
  padding-top: 17px;
  background: #fff;
  max-width: 1224px;
  padding: 0 8%;
  margin: 0 auto;
  font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-inline-start: 40px;
  }

  li {
    display: list-item;
    margin: 0 10px;
    padding: 20px 15px;
    position: relative;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    transition: color 0.1s ease;
    text-decoration: none;
  }
  a {
    margin: 0px 10px;
    padding: auto;
    position: relative;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    color: #666;
    -webkit-transition: color 0.1s ease;
    transition: color 0.1s ease;
    text-decoration: none;
    font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
      Helvetica Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a:hover {
    color: #000;
  }

  button {
    height: 40px;
    padding: 0 25px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    /* height: 56px; */
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    /* padding: 0 40px; */
    position: relative;
    /* font-weight: 700; */
    /* font-size: 16px; */
    /* line-height: 1.5; */
    color: #fff;
    background: #0669ff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    -webkit-transition: background 0.15s ease;
    transition: background 0.15s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  img {
    font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
      Helvetica Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function Navbar() {
  return (
    <div css={navbarStyle}>
      <div>
        <a href='#a'>
          <img src={logo} alt='Cleanshot X' />{' '}
        </a>
      </div>
      <div>
        <ul>
          <li>
            {' '}
            <a href='#a'>Changelog</a>
          </li>
          <li>
            <a href='#a'>Lost your License?</a>
          </li>
          <li>
            <a href='#a'>
              FAQ
              <li></li>
            </a>
          </li>
          <li>
            <a href='#a'>Contact us</a>
          </li>
          <li>
            <a
              href='#a'
              css={css`
                color: #004ec5;
              `}
            >
              Log in to Cloud
            </a>
          </li>
          <li>
            <a href='#a'>
              <button>
                <span
                // css={css`
                //   height: 40px;
                //   padding: 0 25px;
                //   font-weight: 700;
                //   font-size: 14px;
                //   line-height: 1.35;
                // `}
                >
                  Buy now
                </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
