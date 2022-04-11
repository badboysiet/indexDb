import {Link, useLocation} from "react-router-dom";
import {useIndexedDB} from 'react-indexed-db';
import {useEffect} from "react";

function UserDetails() {
  const location = useLocation();
  const {add} = useIndexedDB('people');
  useEffect(() => {
    const data = {
      name: location.state.data.name,
      phone: location.state.data.phone,
      username: location.state.data.username,
      website: location.state.data.website
    }
    add(data).then(
      (key) => {
        console.log("ID Generated: ", key);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [location,add])

  return ( <> 
    <h1>User Details</h1>
    { JSON.stringify(location.state.data)}
   <br />
   <br />
     <Link to="/history" className="link">Histroy</Link>
   </>);
}
export default UserDetails;