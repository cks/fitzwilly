import React, { Component } from 'react'
import PropTypes from "prop-types";

class Grimsby extends Component {
    render() {
        return (
            <h3>Grimsby</h3>
        )
    }
};

Grimsby.label = "Grimsby B. Grimsby";

Grimsby.propTypes = {
    customFields: PropTypes.shape({
        grim: PropTypes.bool
    })
};

export default Grimsby;


