import ReportItem from "./ReportItem";

function ReportList(props){
    const loggedInFor = sessionStorage.getItem("loggedInFor");
    if(loggedInFor === "company"){
        return(
            <>
            <div className="container my-5">
    
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Tag</th>
                <th scope="col">Canidate Email</th>
                <th scope="col">Marks Score</th>
                <th scope="col">Total</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <ReportItem
                    key = {item.id}
                    compEmail = {item.compEmail}
                    userEmail = {item.userEmail}
                    tag = {item.tag}
                    score = {item.score}
                    total = {item.total}
                    remark = {item.remark}
                    />
                ))}
            
            </tbody>
          </table>
            </div>
            </>
        );
    }
    if(loggedInFor === "candidate"){
        return(
            <>
            <div className="container my-5">
    
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Tag</th>
                <th scope="col">Marks Score</th>
                <th scope="col">Total</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <ReportItem
                    key = {item.id}
                    compEmail = {item.compEmail}
                    userEmail = {item.userEmail}
                    tag = {item.tag}
                    score = {item.score}
                    total = {item.total}
                    remark = {item.remark}
                    />
                ))}
            
            </tbody>
          </table>
            </div>
            </>
        );
    }
}
export default ReportList;