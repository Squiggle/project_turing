/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Fetch the status of the current weather
*
* returns Weather
* */
const getWeather = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getWeather,
};
