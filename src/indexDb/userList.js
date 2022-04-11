import React, {useEffect, useState} from "react";
import {sampleApiRequest} from "../ApiRequest/apirequest";
import {DataGrid} from '@mui/x-data-grid';
import { Link} from "react-router-dom";

export default function UserList() {

  const [list,setList] = useState([]);

  useEffect(() => {
    sampleApiRequest().then(res => {
      setList(res.data);
    })
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    }, {
      field: 'name',
      headerName: 'Name',
      width: 130
    }, {
      field: 'phone',
      headerName: 'Phone',
      width: 130
    }, {
      field: 'username',
      headerName: 'Usename',
      width: 90
    }, {
      field: 'website',
      headerName: 'Website',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    }, {
      field: 'details',
      headerName: 'Details',
      renderCell: (params) => {
        return <Link to="/user-details" state={{data : params.row}}  className="link">Views</Link>;
      }
    }
    ];

    return (
      <div style={{ height: 400, width: '60%'}}>
        <DataGrid rows={list} columns={columns} pageSize={5} rowsPerPageOptions={[5]}/>
        <Link to="/history" className="link">Histroy</Link>
      </div>
    );
  }
