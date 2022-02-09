import React, { Component } from 'react'
import PropTypes from "prop-types";

class Albert extends Component {
    render() {
        return (
            <h3>Albert</h3>
        )
    }
};

Albert.label = "Albert B. Futzwaddle";

Albert.propTypes = {
    customFields: PropTypes.shape({
        bald: PropTypes.bool,
        happy: PropTypes.bool,
        sad: PropTypes.bool,
        exasperated: PropTypes.bool
    })
};

export default Albert;

