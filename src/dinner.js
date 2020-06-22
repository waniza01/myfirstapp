import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <h1>Today we are serving {props.dishname} and also sweet dishes</h1>
        </div>
    );
}
export default Dinner;