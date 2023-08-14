import React,{useState,useEffect} from 'react'

function HooksConditionUseEfect() {
    const [name, setName] = useState('Default')
    const [count , setCount] = useState(0)

    useEffect(()=>{
        document.title = 'You clicked '+count+' times'
    }, [count])

  return (
    <div>
      <input type='text' value={name} onChange={e=>setName(e.target.value)}/><br/>
        <button onClick={()=>setCount(count+1)}>Save</button>
      <h1> {name} --- {count}</h1>
    </div>
  )
}

export default HooksConditionUseEfect
