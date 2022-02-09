import React, { Component } from 'react'
import PropTypes from "prop-types";

class Buckmaster extends Component {
    render() {
        return (
            <h3>Buckmaster</h3>
        )
    }
};

Buckmaster.label = "Buckmaster B. Buckmaster";

Buckmaster.propTypes = {
    customFields: PropTypes.shape({
        aristocratic: PropTypes.bool
    })
};

export default Buckmaster;


