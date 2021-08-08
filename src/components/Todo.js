import React from 'react';

const Todo = ({id,text}) => {
    return(
        <li style={{fontSize:'1rem', marginTop:'10px'}}>
            {text}
        </li>
    );
}

export default Todo;