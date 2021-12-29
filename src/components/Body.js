import React from 'react';


const Body =(props)=>
{
    const filteredArray=props.filteredArray
    return (
        <tbody id="body">
        {filteredArray.map((dataobj) => {
          return (
            <tr >
              <td>{dataobj.rollno}</td>
              <td>{dataobj.name}</td>
              <td>{dataobj.email}</td>
            </tr>
          );
        })
        }
      </tbody>
    )
}

export default Body;
