import React, { Component } from 'react';
import './Watch.css'
import PropTypes from 'prop-types';


export class Watch extends Component {
    constructor(...props) {
        super(...props);
        this.locationTime = this.props.title
        this.state = {
            date: new Date(),
        }
    }

    tick() {
        console.log(this.state.date);
        this.setState((state) => {
            date: 'new Date(state.date.getMilliseconds() + 1000)'
        });
    }

    componentDidMount() {
        console.log('компонент смонтирован')
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    static propTypes = {

    }

    render() {
        return (
            <div className='watch'>
                <div className="wrapper-arrow-hour" style={{transform: `rotate(80deg)`}}>
                    <div className="block-arrow-hour">
                        <div className="arrow-hour"></div>
                    </div>
                </div>
                <div className="wrapper-arrow-minute" style={{transform: `rotate(110deg)`}}>
                    <div className="block-arrow-minute">
                        <div className="arrow-minute"></div>
                    </div>
                </div>
                <button className='delete'></button>
            </div>
        )
    }
}

Watch.defaultProps = {
    date: Date.now(),
}

export default Watch;
