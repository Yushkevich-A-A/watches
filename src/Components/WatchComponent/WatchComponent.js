import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch/Watch';
import moment from 'moment';
import './WatchComponent.css'

export class WatchComponent extends Component {
    constructor(props) {
        super(props);

        this.item = props.item;
        this.titleTime = this.item.title;
        this.watchId = this.item.id;
        this.timeLocation = +this.item.zona;
        this.handleDelete = props.onDelete;
        this.state = {
            date: moment(moment().utc().utcOffset(this.timeLocation)),
        }
        console.log(this.state.date.format());
    }

    tick() {
        this.setState({
            date: moment(moment().utc().utcOffset(this.timeLocation)),
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    static propTypes = {

    }

    render() {
        const degHours = ((this.state.date.hour() - 12) * 30) + (this.state.date.minute() * 0.5);
        const degMinutes = (this.state.date.minute() * 6) + (this.state.date.second() * 0.1);
        // console.log(this.timeLocation);
        // console.log(moment().utc().zone('8'))

        return (
            <div className="watch-block">
                <div className="watch-title">{this.titleTime}</div>
                <div className="wrapper-watch">
                    <Watch degMinutes={degMinutes} degHours={degHours} />
                    <button className="delete" onClick={() => this.handleDelete(this.watchId)}></button>
                </div>

            </div>
        )
    }
}

export default WatchComponent;
