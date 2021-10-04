import React, {useState} from 'react';
// import shortid from 'shortid';
import PropTypes from 'prop-types';
import WatchComponent from '../WatchComponent/WatchComponent';

import './WidgetWatch.css'
import AddWatch from '../AddWatch/AddWatch';

function WidgetWatch(props) {

    const [ watchList, setWatch ] = useState([]);


    const handleAddWatch = (data) => {
        setWatch([...watchList, data]);
    }

    const handleDelete = (id) => {
        setWatch( watchList.filter( item => item.id !== id))
    }

    return (
        <div className='widget-watch'>
            <AddWatch onAdd={handleAddWatch}/>
            <div className="watch-list">
                {
                    watchList.map( item => <WatchComponent key={item.id} item={item} onDelete={handleDelete}/>)
                }
            </div>
        </div>
    )
}

WidgetWatch.propTypes = {

}

export default WidgetWatch;

