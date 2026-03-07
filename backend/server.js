const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const scholarships = [
{
name:"Google Disability Scholarship",
type:"disability",
amount:"$10000"
},
{
name:"Microsoft Accessibility Grant",
type:"disability",
amount:"$5000"
},
{
name:"Apple Scholars Program",
type:"merit",
amount:"$8000"
}
];

app.get("/scholarships",(req,res)=>{
res.json(scholarships);
});

const PORT = 5000;

app.listen(PORT,()=>{
console.log("Server running on http://localhost:5000");
});