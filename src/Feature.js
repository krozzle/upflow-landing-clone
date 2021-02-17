import React from 'react';
import ReactDOM from 'react-dom';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import arrowRightLarge from './arrowRightLarge.svg';
import changesbg2x from './changesbg2x.webp';
import play from './play.svg';
import dudeWithShades from './dudeWithShades.webp';

const featureStyle = css`
  margin-top: -4%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 200px;
  font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export default function Feature() {
  return (
    <div css={featureStyle}>
      <section
        css={css`
          margin: 200px 0;
          font-family: Inter, Inter UI, Inter-UI, SF Pro Display, SF UI Text,
            Helvetica Neue, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          display: block;
        `}
      >
        <div
          css={css`
            max-width: 1224px;
            padding: 0 8%;
            margin: 0 auto;
          `}
        >
          <h2>Quick Access</h2>
          <p>
            Our overlay makes sharing a breeze. Instantly save, copy or drag &
            drop screenshots or screen recordings to other apps. Whatever your
            workflow looks like, it's going to fit.
          </p>
          <div>
            <img src={play} alt='Play Button' />
            Watch the video
          </div>
          <div>
            <img src={dudeWithShades} alt='Guy With Shades' />
            <div>
              The essential swiss army knife for screenshots, markups, and GIFs.
              Every Mac owner needs this.
            </div>
            <div
              css={css`
                font-weight: bold;
              `}
            >
              Tyler Tringas, Founder at Earnest Capital
            </div>
            <video
              src='https://getcleanshot.com/media/qao.3d80f727.mp4'
              type='video/mp4'
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}
