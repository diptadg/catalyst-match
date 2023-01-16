import React from 'react';
import './homepage_style.css';
import './starting_page_style.css';
import {dashboard} from './dashboard.js';

export const starting_page = () => {
  return(
    <div>
      {dashboard()}

      <div class="starting_page">
        <span class="title">
          <h1 class="title1">Catalyst Profiling</h1>
          <br />
          <span class="title2">Complete Catalyst Profiling to learn your personality type, <br />collect points and get career advise!</span>
        </span>

        <div class="stages">
          <div class="line">
            {dot(1,500)}
            {dot(2,550)}
            {dot(3,600)}
            {dot(4,650)}
            {dot(5,700)}
          </div>
        </div>

        <section class="take_test">
          <div class="take_test_button">
            <button class="take_test_b1">Start test</button>
          </div>
        </section>

      </div>
    </div>
  );
}

const dot = (number, points) => {
    return (
        <div>
            <span class="dot"><br />Stage<br />
              <span class="number">{number}</span>
                <span class="points"><br /><br />{points} points</span>
            </span>
        </div>
    );
}