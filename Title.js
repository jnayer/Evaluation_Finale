import React from 'react';
import './Title.scss';
import { Component } from 'react';

class Title extends Component{
    render(){
        return<div id="title">
            <h1>Featured <span className="Properties">Properties</span></h1>
            <div className="trait"></div>
            <p id="rdm-desc">Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
        </div>;
    }
}
export default Title;