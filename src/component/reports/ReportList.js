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
                <th scope="col" style={{color:'rgb(34 99 118)'}}>Tag</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Canidate Email</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Marks Score</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Total</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Remark</th>
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
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Tag</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Marks Score</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Total</th>
                <th scope="col"  style={{color:'rgb(34 99 118)'}}>Remark</th>
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