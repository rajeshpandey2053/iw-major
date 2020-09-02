import React from "react";
import './tag.scss';

const Tag = props => {

    const color_choice = ['#5e72e4', '#0eafcc', '#0da5c0',
        '#2dce89', '#fb6340', '#f5365c', '#c70c41', '#20A4F3', '#679436' ]
    const getRandomColor = () => {
         const color_index = Math.floor(Math.random() * (color_choice.length - 1));
         return color_choice[color_index];
    }
    const color = getRandomColor();
    const textStyle = {
        color: color,
        // border: `1.5px solid ${color}`,
        borderColor: color
    }

    return (
        <div className='tag-wrapper' style={textStyle}>
            <p className='tag-wrapper__content'  >{props.text || 'Tribhuwan University'}</p>
        </div>
    )
}

export default Tag;