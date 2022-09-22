import React, {useContext} from 'react';
import {PersonaAdd} from '../components/PersonaAdd';
import {PersonaList} from '../components/PersonaList';

import { SocketContext } from '../context/SocketContext';
import { PersonasChart } from '../components/PersonasChart';

// const connectSocketServer = () =>{
//   const socket = io.connect('http://localhost:8080', {
//     transports: ['websocket']
//   });
//   return socket;
// }
function HomePage() {
  // const [socket] = useState(connectSocketServer())
  // const [online, setOnline] = useState(false);
  // const { socket, online } = useSocket('http://localhost:8080');

  const {online} = useContext(SocketContext)
  // const [personas, setPersona] = useState([]);


  return (
    <div className='container'>
      <div className='alert'> 
        <p>Service status: </p>
        {
          online
        ?<span className='text-success'>Online</span>
        :<span className='text-danger'>Offline</span>
      }
     </div>
      <h1>Personas</h1>
      <hr/>
      <div className='row'>
        <div className='col'>
          <PersonasChart></PersonasChart>
        </div>
      </div>
      <div className='row'>

        <div className='col-8'>
          { <PersonaList /> }
        </div>
        <div className='col-4'>
          {<PersonaAdd/>}
        </div>
      
      </div>
    </div>
  );
}

export default HomePage;
