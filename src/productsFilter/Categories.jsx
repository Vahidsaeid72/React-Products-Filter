import React from 'react'

function Categories({filteritem,AllCategory}) {
     return (
          <div className="btn-container">

               {AllCategory.map((category,index) =>(
                    <button key={index} onClick={()=> filteritem(category)}>{category}</button>
               ))}
          
          </div>
     )
}

export default Categories
