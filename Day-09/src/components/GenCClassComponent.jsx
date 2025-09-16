import React from "react";

class GenCClassComponent extends React.Component { //only after extending it becomes a react component
    constructor() {
        super(); //this will call super class (React) constructor
    }

    render() {
        const resData = this.props;
        //here we are overridding the render method present in React interface
        return (
            <>
                <h1>Cohort Name is {resData.cohortName} fetched from js Object</h1>
                <h2>Cohort head count is {resData.count} using constant</h2>
            </>
        );
    }
}

export default GenCClassComponent;