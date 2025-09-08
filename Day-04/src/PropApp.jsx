function PropComponent(props) {
    // const{name,count} = props;
    return(
        <>
        <h1>My Cohort Name is {props.name}</h1>
        <h2>My Cohort Head Count is {props.count}</h2>
        <h2>My Cohort Location is {props.location}</h2>
        {/* <h1>My Cohort Name is {name}</h1>
        <h2>My Cohort Head Count is {count}</h2> */}

        </>
    );
}

function PropApp(){
   const cohortObj = {
       cohortName: "DE25FSFR004",
       cohortCount: 29,
       cohortLocation: "Coimbatore"
   };
   return (
       <PropComponent name={cohortObj.cohortName} count={cohortObj.cohortCount} location={cohortObj.cohortLocation}/>
   );
}

export default PropApp;