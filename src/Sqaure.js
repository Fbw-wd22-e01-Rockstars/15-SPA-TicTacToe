import React from 'react'

export default function Sqaure(props) {
  return (
    <div onClick={()=>props.handleClick(props.id)} style={{width:"100px",height:"100px",backgroundColor:"gray",color:"white",border:"2px solid black",textAlign:"center" ,fontSize:"50px",lineHeight:"100px"}}>
        {props.value}
    </div>
  )
}
