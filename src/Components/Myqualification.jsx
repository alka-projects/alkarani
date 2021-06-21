import React from 'react'
import Table from 'react-bootstrap/Table'
import qlist from './Myqualificationset'

function nlist(val){
    return(
        <tr>
            <td>{val.examination}</td>
            <td>{val.stream}</td>
            <td>{val.clg}</td>
            <td>{val.pass}</td>
            <td>{val.percent}</td>
          </tr>
    )
}

function Myqualification() {
    return (
       <>
        <h1 className="ks" id="education">My Educational Qualification</h1>
        <Table striped bordered hover variant="dark" className="table-responsive-sm">
        <thead>
          <tr>
            <th>Examination</th>
            <th>Stream</th>
            <th>college/university</th>
            <th>Passing year</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
        {qlist.map(nlist)}
        </tbody>
      </Table>
       
       </>
    )
}

export default Myqualification
