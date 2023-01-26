import React from 'react';
import './catalyst_profiling.css';
import {dashboard} from './dashboard';
import {NavLink} from 'react-router-dom';

export const catalyst_profiling = () => {
    return(
        <div>
            {dashboard()}

        <div class="stage_number">Stage 1
                <h2 class="disagree">Disagree</h2> 
                <h2 class="neutral">Neutral</h2> 
                <h2 class="agree">Agree</h2>
        </div>

        <div class="q">
            {questions("ans1", "I am the life of the party.")}
            {questions("ans2", "I feel little concern for others.")}
            {questions("ans3", "I am always prepared.")}
            {questions("ans4", "I Get stressed out easily.")}
            {questions("ans5", "I have a rich vocabulary.")}
            {questions("ans6", "I don't talk alot.")}
            {questions("ans7", "I am interested in people.")}
            {questions("ans8", "I leave my belongings around.")}
            {questions("ans9", "I am relaxed most of the time.")}
            {questions("ans10", "I have difficulty understanding abstract ideas..")}
        </div>

        <section class="submit">
          <div class="submit_button">
            <NavLink to="/" class="submit_b1">Submit</NavLink>
          </div>
        </section>
            
        </div>
        
    );
} 

const questions = (ansName, question) => {
    return (
        <div class="card">
            <label class="questions">{question}</label>
                <div class = "ans">
                    <input type="radio"name={ansName} value="1"/>
                    <input type="radio"name={ansName} value="2"/>
                    <input type="radio"name={ansName} value="3"/>
                    <input type="radio"name={ansName} value="4"/>
                    <input type="radio"name={ansName} value="5"/>
                </div><br /><br />
        </div>

    );
}

// {questions("ans11", "I feel comfortable around people.")}
// {questions("ans12", "I insult people.")}
// {questions("ans13", "I pay attention to details.")}
// {questions("ans14", "I worry about things.")}
// {questions("ans15", "I have a vivid imagination.")}
// {questions("ans16", "I keep in the background.")}
// {questions("ans17", "I sympathize with others' feelings.")}
// {questions("ans18", "I make a mess of things.")}
// {questions("ans19", "I seldom feel blue.")}
// {questions("ans20", "I am not interested in abstract ideas.")}
// {questions("ans21", "I start conversations.")}
// {questions("ans22", "I am not interested in other people's problems.")}
// {questions("ans23", "I get chores done right away.")}
// {questions("ans24", "I am easily disturbed.")}
// {questions("ans25", "I have excellent ideas.")}
// {questions("ans26", "I have little to say.")}
// {questions("ans27", "I have a soft heart.")}
// {questions("ans28", "I often forget to put things back in their proper place.")}
// {questions("ans29", "I get upset easily.")}
// {questions("ans30", "I do not have a good imagination.")}
// {questions("ans31", "I talk to a lot of different people at parties.")}
// {questions("ans32", "I am not really interested in others.")}
// {questions("ans33", "I like order.")}
// {questions("ans34", "I change my mood a lot.")}
// {questions("ans35", "I am quick to understand things.")}
// {questions("ans36", "I don't like to draw attention to myself.")}
// {questions("ans37", "I take time out for others.")}
// {questions("ans38", "I shirk my duties.")}
// {questions("ans39", "I have frequent mood swings.")}
// {questions("ans40", "I use difficult words.")}
// {questions("ans41", "I dont' mind being the center of attention.")}
// {questions("ans42", "I feel others' emotions.")}
// {questions("ans43", "I follow a schedule.")}
// {questions("ans44", "I get irritated esily.")}
// {questions("ans45", "I spend time reflecting on things.")}
// {questions("ans46", "I am quiet around strangers.")}
// {questions("ans47", "I make people feel at ease.")}
// {questions("ans48", "I am exacting in my work.")}
// {questions("ans49", "I often feel blue.")}
// {questions("ans50", "I am full of ideas.")}

