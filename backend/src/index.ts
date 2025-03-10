import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import router from "./routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
