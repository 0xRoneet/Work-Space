function PropComponent(props) {
    // const{name,count} = props;
    return(
        <>
        <h2>My Cohort Name is {props.cohortDetails.cohortName}</h2>
        <h3>My Cohort Head Count is {props.cohortDetails.cohortCount}</h3>
        <h3>My Cohort Location is {props.cohortDetails.cohortLocation}</h3>
        {props.children}
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
    <>
      {/* <PropComponent name={cohortObj.cohortName} count={cohortObj.cohortCount} location={cohortObj.cohortLocation}/> */}
      <PropComponent cohortDetails = {cohortObj} >
      <h3>This is a Java full stack React Cohort</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>React</li>
        <li>Spring Boot</li>
        <li>SQL</li>
        <li>Git</li>
      </ul>
      </PropComponent>
    </>
   );
}

export default PropApp;