import express from "express";
import registerRoutes from "./routers"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}));


registerRoutes(app);

app.listen(3000, () => {
    console.log(`Expense manager app listening on port 3000`)
})