import CompanyTestItem from "./CompanyTestItem";

function CompanyTestList(props) {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tag</th>
            <th scope="col">Subject</th>
            <th scope="col">Type</th>
            <th scope="col">No of question</th>
            <th scope="col">Passmark</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {props.tests.map((test) => (
            <CompanyTestItem 
            key={test.id}
            id={test.id}
            tag={test.tag}
            type={test.type}
            question={test.noQuestion}
            passmark={test.passmark}
            subject={test.subject}
            time={test.allotTime}
            valid={test.valid}
            />
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default CompanyTestList;
