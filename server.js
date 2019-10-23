const express = require("express");
const app = express();
const auth = require("./routes/auth");
const PORT = 3001;

// Enable middleware to recognise the incoming request object as a JSON Object.
app.use(express.json());

// Router middleware
app.use("/api/auth", auth);

// Listen to Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
