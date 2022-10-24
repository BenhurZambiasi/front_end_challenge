import axios from 'axios';

export async function getProducts() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ROUTE_API}/staticData`);

  return data && JSON.parse(data);
}
