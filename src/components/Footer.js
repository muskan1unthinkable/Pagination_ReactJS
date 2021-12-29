import React from 'react';


const Footer =(props)=>
{   let currPage=props.stateData.currPage;
    return(
    <tfoot>
        <tr>
            <td>
            <button id="first" onClick={props.firstPage}>First{" "}</button>
            
    <button id="prev" onClick={props.prevPage}>Prev{""}</button>
   
    <input
                  type="text"
                  id="pageNo"
                  disabled
                  value={currPage}
                  style={{ width: "20px" }}
                />
                
    <button id="next" onClick={props.nextPage}>Next{""}</button>
    
    <button id="last"  onClick={props.lastPage}> Last{""}</button>
    
    <select id="dropdown" onChange={props.handleChange}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
    </td>
        </tr>
    </tfoot>
    
);
};

export default Footer;
