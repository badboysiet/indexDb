import {Link, useLocation} from "react-router-dom";
import {useIndexedDB} from 'react-indexed-db';
import {useEffect ,useState} from "react";
import {sampleApiUserDetailsRequest} from "../ApiRequest/apirequest";

function UserDetails() {

  const [details , setDetails] = useState('');
  const location = useLocation();
  const {add} = useIndexedDB('people');

  useEffect(() => {

    const id = location.state.data.id
      sampleApiUserDetailsRequest(id).then(res => {
        setDetails(res.data)
    })
    if (location.state.from === 'list') {
      console.log(location.state)
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
    }
  }, [])

  return ( <> 
    <h1>User Details</h1>
    { JSON.stringify(details)}
   <br />
   <br />
     <Link to="/history" className="link">Histroy</Link>
   </>);
}
export default UserDetails;