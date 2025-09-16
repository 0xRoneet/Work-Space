export function PropComponent({ resData }) {
    //const {name, count} = props;
    return (
        <>
            <h1>Cohort Name is {resData.cohortName} fetched from js Object</h1>
            <h2>Cohort head count is {resData.count} using constant</h2>
        </>
    );
}


function PropApp() {
    const cohortObj = {
        cohortName: "DE25JFSR004",
        count: 29,
        location: "Coimbatore"
    };
    return (
        <PropComponent resData={cohortObj} />
    );
}

export default PropApp;