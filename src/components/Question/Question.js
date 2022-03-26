import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='qu-container'>
            <h1 className='heading'>
                Tow Question and Answer
            </h1>
            <h2>1. How react works?</h2>
            <p>React is a very popular JavaScript library.React is enjoying great popularity. You can use as little or as much React as you need.You can follow along with your own website, or create an empty HTML file to practice.They let you use state and other React features without writing a class.</p>
            <h3>2. What is the difference between the props and state?</h3>
            <p>Props are read only. State changes can be asynchornous.Props can not be modified. State can be modified using this.setState.You can difine states in the components itself. You can pass properties from patent components.</p>
        </div>
    );
};

export default Question;