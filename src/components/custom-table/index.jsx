import React from "react";
import Table from '@mui/joy/Table';

let data = {
  coloumn:[{header:"Shifts",accessor:"shift"},{header:"A",accessor:"a"},{header:"B",accessor:"b"},{header:"C",accessor:"c"}],
  rows:[{shift:""}]
}

export default function CustomTable(){
    return(
        <Table color="primary">
        <thead>
          <tr>
            {data.length !== 0 && data.headers.map((header)=>{
                return (
                    <th>{}</th>
                )
            })}
            <th style={{ width: '40%',background:"#26272c",color:"white",fontWeight:"bolder" }}>Dessert (100g serving)</th>
            <th style={{background:"#26272c",color:"white",fontWeight:"bolder"}}>Calories</th>
            <th style={{background:"#26272c",color:"white",fontWeight:"bolder"}}>Fat&nbsp;(g)</th>
            <th style={{background:"#26272c",color:"white",fontWeight:"bolder"}}>Carbs&nbsp;(g)</th>
            <th style={{background:"#26272c",color:"white",fontWeight:"bolder"}}>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} style={{fontWeight:"bolder"}}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}