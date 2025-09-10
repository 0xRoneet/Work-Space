import React from 'react';

class GencClassComponent extends React.Component {
    constructor(){
        super();
    }
  
    render() {
        const {cohortDetails} = this.props;
    return(
        <>
        <h2>My Cohort Name is {cohortDetails.cohortName}</h2>
        <h3>My Cohort Head Count is {cohortDetails.cohortCount}</h3>
        <h3>My Cohort Location is {cohortDetails.cohortLocation}</h3>
        {/* {props.children} */}
        {/* <h1>My Cohort Name is {name}</h1>
        <h2>My Cohort Head Count is {count}</h2> */}

        </>
    );
  }
}

export default GencClassComponent