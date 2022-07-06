function ReportItem(props){
    const loggedInFor = sessionStorage.getItem("loggedInFor");
    if(loggedInFor === "company"){
        return(
            <tr>
                <td>{props.tag}</td>
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
                <td>{props.tag}</td>
                <td>{props.score}</td>
                <td>{props.total}</td>
                <td>{props.remark}</td>
                
            </tr>
        );
    }
}
export default ReportItem;