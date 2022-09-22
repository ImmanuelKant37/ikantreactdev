import React, {useContext,useState,useEffect} from 'react'
import { SocketContext } from '../context/SocketContext';

export const PersonaList= ()=> {
    const {socket} = useContext(SocketContext);
    const [personas, setPersonas] = useState([]); 
    useEffect(() => {
            socket.on('current-persons',(p) =>{
            setPersonas(p);
        })
        return () => socket.off('current-persons');
    }, [socket])
    const cambioNombre = (event, id)=>{
        const nuevoNombre = (event.target.value);
        
        setPersonas(personas => personas.map(p=>{
            if(p.id ===id){
                p.name =nuevoNombre;
            }
            return p;
        }))
    }
    const onPerdioFoco = (id,nombre) =>{
        socket.emit('cambiar-nombre', {id, nombre});
    }
    const votar= (id) =>{
        socket.emit('votar-persona', id);
      }
    const remover= (id) =>{
        socket.emit('remover-persona', id);
      }
    const crearRows = () => {
        return (
            personas.map(p =>(
            <tr key={p.id}>
                <td>
                    <button className='btn btn-success'
                    onClick={()=>votar(p.id)}>
                        Votar
                    </button>
                </td>
                <td>
                    <input className='form-control' 
                           value={p.name}
                           onChange={(event)=>cambioNombre(event, p.id)}
                           onBlur={()=>onPerdioFoco(p.id, p.name)}></input>
                </td>
                <td>{p.votes}</td>
                <td> <button className='btn btn-danger' onClick={()=>remover(p.id)}>
                        -1
                    </button></td>
            </tr>
        )

            ))
            
    }
    return (
    <>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>Accion</th>
                    <th>Nombre</th>
                    <th>Votos</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {crearRows()}
            </tbody>
        </table>
    </>
  )
}