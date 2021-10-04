import React, {useState} from 'react';
import WatchComponent from '../WatchComponent/WatchComponent';
import AddWatch from '../AddWatch/AddWatch';

import './WidgetWatch.css'

function WidgetWatch() {

    const [ watchList, setWatch ] = useState([]);

    const handleAddWatch = (data) => { setWatch([...watchList, data]) }
    const handleDelete = (id) => { setWatch( watchList.filter( item => item.id !== id)) }

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

export default WidgetWatch;

