// import { useNavigate } from "react-router-dom";
import classes from "./UserRedirect.module.css";

function UserRedirect(){
    // const redir = useNavigate();
    // const goTo = () => redir("/candidate_report");
    return(
        <>
            <div className="container m-5 p-5">
                <div className="col-12 mx-auto">
                    <div className={classes.loader}></div>
                    {/* {goTo} */}
                </div>
            </div>
        </>
    )
}
export default UserRedirect;