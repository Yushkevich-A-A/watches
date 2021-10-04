import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch/Watch';
import moment from 'moment';
import './WatchComponent.css'

export class WatchComponent extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
        this.handleDelete = props.onDelete;
        this.titleTime = this.item.title;
        this.watchId = this.item.id;
        this.timeLocation = +this.item.zona;
        this.state = {
            date: moment(moment().utc().utcOffset(this.timeLocation)),
        }
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
        item: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
    }

    render() {
        const degHours = ((this.state.date.hour() - 12) * 30) + (this.state.date.minute() * 0.5);
        const degMinutes = (this.state.date.minute() * 6) + (this.state.date.second() * 0.1);

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
