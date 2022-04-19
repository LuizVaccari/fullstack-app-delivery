const mysql2 = require('mysql2/promise');

const conn = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: "3306",
  database: 'delivery_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


const getVehicleByDriver = async (searchedDriverLastName) => {
  const result = await conn.query(`SELECT * FROM vehicle INNER JOIN driver
    ON driver.id = vehicle.driver_id
    WHERE driver.last_name = ?`, [searchedDriverLastName]);
  return result[0];
  };

const create = async ({ plate, model, type, capacity, driver_id }) => {
  const result = await conn.query('INSERT INTO vehicle (plate, model, type, capacity, driver_id) VALUES (?, ?, ?, ?, ?)',
        [plate, model, type, capacity, parseInt(driver_id)]);
      return result;
  };

/* const update = async({ plate, id }) => {
  const result = await conn.query('UPDATE vehicle SET plate = ? WHERE id = ?',
        [plate, id]);
      return result;
}

const remove = async () =>  {
  const result = await conn.query();
  return result[0];
} */

module.exports = {
  create,
  getVehicleByDriver,
/*   update,
  remove */
};