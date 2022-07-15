function ReportItem(props){
    const loggedInFor = sessionStorage.getItem("loggedInFor");
    if(loggedInFor === "company"){
        return(
            <tr>
                <td><b>{props.tag}</b></td>
                <td>{props.userEmail}</td>
                <td>{props.score}</td>
                <td>{props.total}</td>
                {props.remark === "Pass" ? (
                <td style={{color:"green"}}><b>{props.remark}</b></td>
                ):(
                    <td style={{color:"red"}}><b>{props.remark}</b></td>
                )}
                
            </tr>
        );
    }
    if(loggedInFor === "candidate"){
        return(
            <tr>
                <td><b>{props.tag}</b></td>
                <td>{props.score}</td>
                <td>{props.total}</td>
                {props.remark === "Pass" ? (
                <td style={{color:"green"}}><b>{props.remark}</b></td>
                ):(
                    <td style={{color:"red"}}><b>{props.remark}</b></td>
                )}
                
            </tr>
        );
    }
}
export default ReportItem;