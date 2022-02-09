import React, { Component } from 'react'
import PropTypes from "prop-types";

class Grimsby extends Component {
    constructor (props) {
        super(props);
        this.state = { isGrim: false };
        this.toggleGrim = this.toggleGrim.bind(this)
    }

    toggleGrim () {
        this.setState(({ isGrim }) => ({ isGrim: !isGrim }))
    }

    const grimButton = (
        <button onClick={this.toggleGrim.bind(this)}>
            {isGrim ? 'Less Grim' : 'More Grim'}
        </button>
    )    
    
    render() {
        const { isGrim } = this.state
        
        return (
            <div>
                <h3>Grimsby { isGrim ? ":-(" : ":-)" }</h3>
                <div>{grimButton}</div>
            </div>
        )
    }
};

Grimsby.label = "Grimsby C. Grimsby";

Grimsby.propTypes = {
    customFields: PropTypes.shape({
        grim: PropTypes.bool
    })
};

export default Grimsby;


