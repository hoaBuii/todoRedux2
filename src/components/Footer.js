import React from 'react';
import Link from './Link';
import { VisibilityFilters } from '../actions';

const Footer = () => {
    return(
        <div>
            <span style={{marginRight:'5px'}}>Show:</span>
            <Link name="All" filter={VisibilityFilters.SHOW_ALL}></Link>
            <Link name="Active" filter={VisibilityFilters.SHOW_ACTIVE}></Link>
            <Link name="Complete" filter={VisibilityFilters.SHOW_COMPLETED}></Link>
        </div>
    );
}

export default Footer;