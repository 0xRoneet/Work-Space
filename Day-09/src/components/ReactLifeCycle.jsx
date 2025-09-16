import React from "react";
/**
 * 1. Mounting 
 *  -> constructor()
 *  -> getDerivedStateFromProps()
 *  -> render()
 *  -> componentDidMount()
 * 
 * 2. Updating
 *  -> getDerivedStateFromProps()
 *  -> shouldComponentUpdate()
 *  -> render()
 *  -> getSnapShotBeforeUpdate()
 *  -> componentDidUpdate()
 * 
 * 3. Unmounting
 *  ->componentWillUnmount()
 * 
 */


class ReactLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor called");


    }

    componentDidMount() {
        console.log("We are inside component did mount");


    }

    componentDidUpdate(prevState) {
        console.log("We are inside component did update");
        if (prevState.count !== this.state.count) {
            console.log(`The count increment to ${this.state.count}`);

        }
    }

    componentWillUnmount() {
        console.log("Component Unmounted");

    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1

        }));

    }

    render() {
        console.log("inside render method");

        return (

            <>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </>

        );
    }
}

export default ReactLifeCycle;