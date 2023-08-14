import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePos = e => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMousePos)
        return  () => {
        window.removeEventListener('mousemove',logMousePos)
        }
    })
  return (
    <div>
      <h1> X - {x}, Y - {y}</h1>
    </div>
  )
}

export default HookMouse
