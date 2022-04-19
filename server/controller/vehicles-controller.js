const vehicleService = require('../service/vehicles-service');

const getVehicleByDriver = async (req, res) => {
     const response = await vehicleService.getVehicleByDriver(req.query);
    return res.send(response);
};

const create = async (req, res) => {
    const response = await vehicleService.create(req.body);
    return res.send("Values inserted");
};

/* const update = async (req, res) => {
    const response = await vehicleService.update(req.body);
    return res.send("Values updated");
};

const remove = async (req, res) => {
    return res.send("Values deleted");
}; */

module.exports = {
  create,
  getVehicleByDriver,
/*   update,
  remove */
};