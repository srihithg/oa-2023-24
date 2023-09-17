import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "https://oa-dssd.onrender.com",
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "data.csv")); //http everything is ok
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port ${port} 🚀`));
