import { fetchfact } from "../utils/factfunction.js";

const factController = async (_req, res) => {
  const fact = await fetchfact("https://catfact.ninja/fact");
  console.log(fact);
  const user = {
    email: "ebisileonard@gmail.com",
    name: "Ebisi chinecherem leonard",
    stack: "node js express newbie in goland",
  };
  res.status(200).json({
    status: "success",
    user,
    timestamp: new Date().toISOString(),
    fact,
  });
};

export { factController };
