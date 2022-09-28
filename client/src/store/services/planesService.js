import axios from "axios";

const getPlanes = async () => {
  const planes = await axios.get('/api/planes');
  return planes.data;
};

const getPlane = async (id) => {
  const plane = await axios.get(`/api/planes/${id}`);
  return plane.data;
};

const createPlane = async (planeData) => {
  const plane = await axios.post(`/api/planes`, planeData);
  return plane.data;
};

const planesService = {
  getPlanes,
  getPlane,
  createPlane
};

export default planesService;


