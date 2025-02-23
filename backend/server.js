// import app from "./app.js";

// app.listen(process.env.PORT,()=>{
//     console.log(`server running on Port ${process.env.PORT}`);
// }

// );
import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 4000; // Default to 4000 if not set

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
