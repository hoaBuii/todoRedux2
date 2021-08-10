import React from 'react';

const Link = ({onClick, name, active})  => {
    return(
        <button>
            {name}
        </button>
    );
}

export default Link;