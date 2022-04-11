import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useIndexedDB} from 'react-indexed-db';
import {DataGrid} from '@mui/x-data-grid';
import {Button, CircularProgress} from '@mui/material';

export default function History() {
  const [list,setList] = useState([]);
  const {getAll, deleteRecord ,clear} = useIndexedDB('people');
  const columns = [
    {
      field: 'details',
      headerName: 'Details',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      renderCell: (params) => {
        return <Link to="/user-details" state={{data : params.row, from: 'history'}}  >View</Link>
      }
    },
    {
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
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      renderCell: (params) => {
        return <Button onClick={() => removeRecord(params.row.id)}>Remove</Button>;
      }
    }
  ];
  useEffect(() => {
    getAll().then((res) => {
      console.log(res)
      setList(res)
    })
  }, [])

  const clearHistory = () => {
    clear().then((res) => {
      setList([])
    })
  }
  const removeRecord = (id) => {
    deleteRecord(id).then(event => {
      getAll().then((res) => {
        setList(res)
      })
    });
  }
  return (
    <div style={{
      height: 400,
      width: '70%'
    }}>

      <DataGrid rows={list} columns={columns} pageSize={5} rowsPerPageOptions={[5]}/>
      <Button variant="contained" onClick={clearHistory}>Clear History</Button> <Link to="/user-lists" className="link">User List</Link>
    </div>

  );
}