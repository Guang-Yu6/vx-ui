import React from 'react';
import Ava from "./index";
import '../../story.css';
import face1 from '../../assets/images/face-male-1.jpg';
import face2 from '../../assets/images/face-male-2.jpg';
import face3 from '../../assets/images/face-male-3.jpg';
import face4 from '../../assets/images/face-male-4.jpg';

export default {
    title: 'UI组件/Ava',
    component: Ava
}

export const No = () => {
    return <Ava src={face1}/>
};

export const Sizes = () => {
    return (
        <div className='row-elements'>
            <Ava src={face1} size='48px'/>
            <Ava src={face2} size='56px'/>
            <Ava src={face3} size='64px'/>
            <Ava src={face4} size='72px'/>
        </div>)
}

export const WithStatus = () => {
    return (
        <div className='row-elements'>
            <Ava src={face1} status='online'/>
            <Ava src={face2} status='offline'/>
            <Ava src={face4} status='online' size='72px' statusIconSize='12px'/>
        </div>)
}
