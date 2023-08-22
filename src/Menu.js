import React from 'react'

const Menu = ({filterItem,menu}) => {
  return (
    <>
      <div className='menu-tab d-flex justify-content-around'>

      {
        menu.map((curr,index)=>{
            return <button className='btn btn-warning' key={index} onClick={()=>{filterItem(curr)}}>{curr}</button>
        })

      }
                    {/* <button className='btn btn-warning' onClick={()=>{filterItem("breakfast")}}>breakfast</button>
                    <button className='btn btn-warning' onClick={()=>{filterItem("lunch")}}>Lunch</button>
                    <button className='btn btn-warning' onClick={()=>{filterItem("evening")}}>evening</button>
                    <button className='btn btn-warning' onClick={()=>{filterItem("dinner")}}>Dinner</button> */}
                    {/* <button className='btn btn-warning' onClick={()=>{setItem(data)}}>All</button> */}
                </div>
    </>
  )
}

export default Menu
