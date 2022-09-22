import React, {useContext,useState} from 'react'
import { SocketContext } from '../context/SocketContext';
export const PersonaAdd = () => {
  const {socket} = useContext(SocketContext);
  const crearPersona = (name)=>{
     socket.emit( 'crear-persona' ,name)
  }
  const [ valor, setValor ] = useState('')
  const onSubmit = (ev) =>{
    ev.preventDefault();
    if (valor.trim().length >0){
      crearPersona( valor );
      setValor('');
    }
    console.log( valor )
  }
    return (
      
      <>
          <h3>Agregar Persona</h3>
          <form onSubmit={ onSubmit }>
              <input
              className='form-control'
              placeholder='Nuevo nombre'
              value = {valor}
              onChange={(ev)=>setValor(ev.target.value)}>
              
              </input>
          </form>
      </>
    )
}
