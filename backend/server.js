const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const scholarships = [

{
name:"Google Disability Scholarship",
type:"disability",
amount:"$10000",
description:"Scholarship for students with disabilities studying technology."
},

{
name:"Microsoft Accessibility Grant",
type:"disability",
amount:"$5000",
description:"Financial support for students with accessibility needs."
},

{
name:"Apple Scholars Program",
type:"merit",
amount:"$8000",
description:"Merit-based scholarship for outstanding students."
},

{
name:"Future Innovators Scholarship",
type:"financial",
amount:"$6000",
description:"Scholarship for students requiring financial assistance."
}

]

app.get("/scholarships",(req,res)=>{
res.json(scholarships);
});

const PORT = 5000;

app.listen(PORT,()=>{
console.log("Server running on http://localhost:5000");
});