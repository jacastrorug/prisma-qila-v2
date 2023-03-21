import { data } from './data';


const Database = {};
Database.getAllServices = async () => {
  const dataValues = Object.values(data.services);
  return dataValues;
}

export { Database };