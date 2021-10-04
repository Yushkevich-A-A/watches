import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import './AddWatch.css';

function AddWatch(props) {
    const { onAdd: handleAddWatch } = props;

    const [ watch, setWatch ] = useState({ id: shortid(), title: '', zona: 0 });


    const handleSubmit = (event) => {
        event.preventDefault();
        if (watch.title.trim() === '') {
            return;
        }

        if (watch.zona < -12) {
            setWatch(prev =>({...prev, zona: -12}));
            return;
        }

        if (watch.zona > 14) {
            setWatch(prev =>({...prev, zona: 14}));
            return;
        }

        handleAddWatch(watch);
        setWatch({ id: shortid(), title: '', zona: 0 })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setWatch(prev =>(({...prev, [name]: val})))
    }

    return (
        <form className='form-watch' onSubmit={handleSubmit}>
            <div className="form-title-watch">
                <label className='form-label' htmlFor="watch-title">Название</label>
                <input className='title-watch-input' type="text" onChange={handleChange} 
                value={watch.title} id='watch-title' name='title' />
            </div>
            <div className="form-title-watch">
                <label className='form-label' htmlFor="watch-zona">Временная зона</label>
                <input className='title-watch-input' type='number' onChange={handleChange} 
                value={watch.zona} id='watch-zona' name='zona'/>
            </div>
            <button className='add-button'>добавить</button>
        </form>
    )
}

AddWatch.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddWatch;

