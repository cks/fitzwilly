function Consumer(component) {
    class element extends component {
        constructor(props) {
            super(props);
            this.props = props;
            console.log("fusion.consumer.constructor():", props);
        }

        async fetchContent(args) {
            console.log("fusion.consumer.fetchContent():", args);
            return {
                isInteresting: true,
                grim: false,
                times: [ "the-before-time", "the-after-time" ]
            }
        }

        flurk(msg) {
            console.log("fusion.consumer.flurk():", msg );
        }
    }

    return element;
}

export default Consumer;

        
