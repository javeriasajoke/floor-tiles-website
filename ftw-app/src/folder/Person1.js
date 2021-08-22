import React, {Component} from 'react';
import props from 'bluebird';

function MyName (prop){
    return(
        <div className="firstdiv">
            <h1>Click On My Name</h1>

            <button onClick={prop.delete} className="buttons"> its {prop.name}</button>
            
        </div>
    )
}

export default MyName;