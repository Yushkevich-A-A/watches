import React from 'react';
import PropTypes from 'prop-types';
import './Watch.css';

function Watch(props) {
    const { degMinutes, degHours } = props;

    return (
        <div className='watch'>
            <div className="wrapper-arrow-hour" style={{transform: `rotate(${degHours}deg)`}}>
                <div className="block-arrow-hour">
                    <div className="arrow-hour"></div>
                </div>
            </div>
            <div className="wrapper-arrow-minute" style={{transform: `rotate(${degMinutes}deg)`}}>
                <div className="block-arrow-minute">
                    <div className="arrow-minute"></div>
                </div>
            </div>
        </div>
    )
}

Watch.propTypes = {

}

export default Watch

