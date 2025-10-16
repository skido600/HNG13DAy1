import { fetchfact } from "../utils/factfunction.js";

const factController = async (_req, res) => {
  try {
    const fact = await fetchfact("https://catfact.ninja/fact");

    const user = {
      email: "ebisileonard@gmail.com",
      name: "Ebisi chinecherem leonard",
      stack: "node/express.js  newbie in golang",
    };
    res.status(200).json({
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      fact,
    });
  } catch (error) {
    if (error.message === "error fetching fact") {
      res.status(500).json({
        status: "false",
        message: error.messsage || "internal server error",
      });
    } else {
      res.status(500).json({
        status: "false",
        message: error.messsage,
      });
    }
  }
};

export { factController };
