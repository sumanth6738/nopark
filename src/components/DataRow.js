import React from 'react'

function DataRow(props){
    const { vehicle_no, Name, count, Date} =props
    return(
        <tr>
            <td> { vehicle_no } </td>
            <td> { Name } </td>
            <td> { Date }</td>
            <td> { count } </td> 
           
        </tr>
    )
}
export default DataRow;