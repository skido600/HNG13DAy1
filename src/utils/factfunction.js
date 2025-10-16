// helper function
const fetchfact = async (url) => {
  try {
    const fact = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const factResponse = await fact.json();

    if (!fact.ok) {
      throw new Error("error fetching fact");
    }
    return factResponse.fact;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchfact };
