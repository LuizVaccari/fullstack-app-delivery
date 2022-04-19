import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {

  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');
  const [driver_id, setDriver_id] = useState('');

  const [vehicleList, setVehicleList] = useState([]);

  const [searchedDriverLastName, setSearchedDriveLastName] = useState('');

  const addVehicle = async ()=>{
    await Axios.post('http://localhost:3001/vehicles', {
      plate, model, type, capacity, driver_id
    })
    setVehicleList([...vehicleList, { plate, model, type, capacity, driver_id }]);
  }

  const getVehiclesById = async () => {
    const response = await Axios.get(`http://localhost:3001/vehicles`, { params: { searchedDriverLastName: searchedDriverLastName } });
    setVehicleList(response.data);
    console.log(response.data)
  }

  return (
    <div className="App">
        <h1>Add New Vehicle</h1>
        <div className = 'information'>
          <label>Plate:</label>
          <input type='text' onChange={(event)=>setPlate(event.target.value)} />
          <label>Model:</label>
          <input type='text' onChange={(event)=>setModel(event.target.value)} />
          <label>Type:</label>
          <input type='text' onChange={(event)=>setType(event.target.value)} />
          <label>Capacity:</label>
          <input type='text' onChange={(event)=>setCapacity(event.target.value)} />
          <label>Driver:</label>
          <input type='text' onChange={(event)=>setDriver_id(event.target.value)} />
         
          <button onClick={addVehicle}>Add Vehicle</button>
          <div className='vehicles'>
            <h1>Search Vehicles</h1>
            <label>Driver Last Name:</label>
            <input type='text' onChange={(event)=>setSearchedDriveLastName(event.target.value)} />
            <button onClick={getVehiclesById}>Show vehicles </button>
              {vehicleList.map((val, index) => {
                return (
                  <div className='vehicleCard' key={val.plate}>
                        <h3> Plate: {val.plate} </h3>
                        <h3> Model: {val.model} </h3>
                        <h3> Type: {val.type} </h3>
                        <h3> Capacity: {val.capacity} </h3>
                        <h3> Driver: {val.driver_id} </h3>
                  </div> 
                );
              })}
            </div>
        </div>
      </div>
  );
}


export default App;
