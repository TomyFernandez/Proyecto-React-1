import {useEffect, useState} from 'react'

const ComponentUseEffect = () => {

    
    const [state, setState] = useState(false)
    
    useEffect(()=>{
        console.log("Componente Desmontado");
        return () => {
            console.log("Componente Desmontado");
        }
    }, []);
    
    useEffect(()=>{
        console.log(state);
    }, []);



  return (
    <div>
        <p>{state ? "Es true" : "Es false"}</p>
      <button
        onClick = {() => { setState(!state) }}
      >
        Cambiar state</button>
    </div>
  )
}

export default ComponentUseEffect
