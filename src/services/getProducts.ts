export async function getProducts() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_ROUTE_API}/staticData`);
  const data = await result.json();

  return data && JSON.parse(data);
}
