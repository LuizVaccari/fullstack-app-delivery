const vehicleModel = require('../model/vehicles-model');
  
//const jwt = require('jsonwebtoken');
//const userModel = require('../models/userModel');

//const SECRET = 'palavrasecreta';

/* const validateEntries = (name, email, password) => {
  const invalidEntriesError = { err: { code: 400, message: 'Invalid entries. Try again.' } };
  const regex = /\S+@\S+\.\S+/;
  if (!name || !email || !password || regex.test(email) === false) {
  return invalidEntriesError;
}
  return null;
}; */

/* const checkEmail = async (email) => {
  const unavailableEmailError = { err: { code: 409, message: 'Email already registered' } };
  const sameEmail = await userModel.findEmail(email);
  if (sameEmail) return unavailableEmailError;
  return null;
}; */

/* const create = async (name, email, password) => {
  const invalidEntries = validateEntries(name, email, password);
  if (invalidEntries) return invalidEntries;
  const unavailableEmail = await checkEmail(email);
  if (unavailableEmail) return unavailableEmail;
  const insertedUser = await userModel.create(name, email, password);
  const HTTP_CREATED_STATUS = 201;
  return { newUser: insertedUser, status: HTTP_CREATED_STATUS };
}; */

const getVehicleByDriver = async (query) => {
    const { searchedDriverLastName } = query;
    const response = await vehicleModel.getVehicleByDriver(searchedDriverLastName);
    return response;
};

const create = async (body) => {
      const { plate, model, type, capacity, driver_id } = body;
      const response = await vehicleModel.create({ plate, model, type, capacity, driver_id });
      return response;
};

/* const update = async (body) => {
  const { plate, id } = body;
  const response = await vehicleModel.update({ plate, id });
  return response;
}; */

/* const remove = async (body) => {
  return response;
};
 */
module.exports = {
  create,
  getVehicleByDriver,
/*   update,
  remove */
};