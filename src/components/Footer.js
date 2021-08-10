import React from 'react';
import Link from './Link';

const Footer = () => {
    return(
        <div>
            <span style={{marginRight:'5px'}}>Show:</span>
            <Link name="All"></Link>
            <Link name="Active"></Link>
            <Link name="Complete"></Link>
        </div>
    );
}

export default Footer;