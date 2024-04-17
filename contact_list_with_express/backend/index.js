import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contactlist",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    const query = "SELECT * FROM contacts";
    db.query(query, (error, data) => {
        if (error) {
            return res.json(error);
        } else {
            return res.json(data);
        }
    });
});

app.post("/", (req, res) => {
    const query = "INSERT INTO contacts (`name`, `number`) VALUES (?)";
    const values = [req.body.name, req.body.number];
    db.query(query, [values], (error, data) => {
        if (error) {
            return res.json(error);
        } else {
            return res.json(data);
        }
    });
});

app.listen(8000, () => {
    console.log("Connected to backend!");
});
