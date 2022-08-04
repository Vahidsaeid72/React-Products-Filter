import React from 'react'

function Categories({filteritem}) {
     return (
          <div className="btn-container">
               <button onClick={()=> filteritem('همه')}>همه</button>
               <button onClick={()=> filteritem('هدفون')}>هدفون</button>
               <button onClick={()=> filteritem('لپ تاپ')}>لپ تاپ</button>
               <button onClick={()=> filteritem('گوشی')}>گوشی</button>
          </div>
     )
}

export default Categories
