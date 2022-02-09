import React, { Component } from 'react'
import PropTypes from "prop-types";
import Consumer from "fusion:consumer";

class Grimsby extends Component {
    constructor (props) {
        super(props);
        console.log("Grimsby.constructor()");
        this.toggleGrim = this.toggleGrim.bind(this)
        const { grimByDefault = false } = this.props.customFields;
        this.state = { isGrim: grimByDefault };
    }

    toggleGrim () {
        console.log("Grimsby.toggleGrim()");
        this.setState(({ isGrim }) => ({ isGrim: !isGrim }))
    }

    async render() {
        console.log("Grimsby.render()");
        const { isGrim } = this.state;

        const content = await fetchContent({grim:isGrim});
        console.log("Grimsby.render():content:", content);
        
        const grimButton = (
            <button onClick={this.toggleGrim.bind(this)}>
                {isGrim ? 'Less Grim' : 'More Grim'}
            </button>
        );
    
        return (
            <div>
                <h3>Grimsby { isGrim ? ":-(" : ":-)" }</h3>
                <div>{grimButton}</div>
                <div>content: {JSON.stringify(content) }</div>
            </div>
        )
    }
};

Grimsby.label = "Grimsby C. Grimsby";

Grimsby.propTypes = {
    customFields: PropTypes.shape({
        grimByDefault: PropTypes.bool
    })
};

export default Consumer(Grimsby);
