import React from "react";

class ReactLifeCycle extends React.Component {
    constructor(props){
        super(props);
        this.state = {count : 0,resData: null}; //creating state variable
        console.log('Inside Constructor')
    }

    componentDidMount(){
        console.log('We are inside the componentDidMount method');
        setTimeout(() => {
            this.setState({resData: "Data fetched successfully"})
        }, 10000);
    }

    componentDidUpdate(prevState){
        console.log('We are inside the componentDidUpdate method');
        if(prevState.count !== this.state.count){
            console.log(`the count got incremented to${this.state.count}`)
        }
    }

    componentWillUnmount(){

    }



    handleclick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        console.log('We are in render method')
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <p>Response from API : {this.state.resData}</p>
                <button onClick ={this.handleclick} >
                    Increment Count
                </button>
            </div>
        );
    }
}

export default ReactLifeCycle;