import React, { Component } from 'react'
import PropTypes from "prop-types";

class DickVanDyke extends Component {
    render() {
        return (
            <h1>Dick Van Dyke</h1>
        )
    }
};

DickVanDyke.label = "DickVanDyke";

DickVanDyke.propTypes = {
    customFields: PropTypes.shape({
        showExtendedInfo: PropTypes.bool,
        actFunny: PropTypes.bool,
        actSerious: PropTypes.bool,
        awfulCockneyAccent: PropTypes.bool
    })
};

export default DickVanDyke;
