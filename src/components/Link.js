import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';

const Link = ({onClick, name, active})  => {
    return(
        <button onClick={onClick}
                disabled={active}
        >{name}
        </button>
    );
}

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(Link);