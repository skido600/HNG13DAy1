// helper function
const fetchfact = async (url) => {
  const fact = await fetch(url, {
    method: "GET",
    "Content-type": "application/json",
  });
  const factResponse = await fact.json();
  console.log(factResponse);
  if (!fact.ok) {
    throw new Error("error fetching fact");
  }
  return factResponse.fact;
};

export { fetchfact };
