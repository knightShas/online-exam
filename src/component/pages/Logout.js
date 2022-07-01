import { Navigate } from 'react-router-dom';
function Logout(){
    sessionStorage.clear();
    localStorage.clear();
    return(
        <Navigate to="/" />
    );
}
export default Logout;
