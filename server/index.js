const express = require('express');
const app = express();
const cors = require('cors');

const vehicleController = require('./controller/vehicles-controller');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post('/vehicles', vehicleController.create);

app.get('/vehicles', vehicleController.getVehicleByDriver);

//app.put('/vehicles/:id', vehicleController.update);

//app.delete('/vehicles/:id',remove);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
