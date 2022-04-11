 import React from "react";
 import { Link} from "react-router-dom";
 const ModuleOne = () => {

    return <>
        <Link to="/history" className="link">Histroy</Link>
        <br/>
        <Link to="/user-lists" className="link">User List</Link>
    </>
}
export default ModuleOne;