import React from 'react';

const Todo = ({id,text}) => {
    return(
        <li key={id} style={{fontSize:'1.5rem', marginTop:'10px'}}>
            {text}
        </li>
    );
}

export default Todo;