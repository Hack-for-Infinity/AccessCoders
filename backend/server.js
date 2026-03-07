const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const scholarships = [

{
name:"Google Lime Scholarship",
type:"disability",
country:"USA",
amount:"$10000",
description:"Scholarship for students with disabilities pursuing computer science.",
link:"https://www.limeconnect.com/programs/page/google-lime-scholarship"
},

{
name:"Microsoft Disability Scholarship",
type:"disability",
country:"USA",
amount:"$5000",
description:"Supports high school seniors with disabilities pursuing technology careers.",
link:"https://www.microsoft.com/en-us/diversity/programs/microsoftscholarship.aspx"
},

{
name:"Snowdon Trust Scholarship",
type:"disability",
country:"UK",
amount:"£3000",
description:"Scholarship for students with disabilities studying in the UK.",
link:"https://www.snowdontrust.org"
},

{
name:"Australian Disability Scholarship",
type:"disability",
country:"Australia",
amount:"$5000",
description:"Support for Australian students with disabilities entering university.",
link:"https://www.education.gov.au"
},

{
name:"Indira Gandhi Scholarship for Disabled Students",
type:"disability",
country:"India",
amount:"₹2000/month",
description:"Scholarship for disabled students pursuing higher education in India.",
link:"https://scholarships.gov.in"
},

{
name:"Canada Disability Student Grant",
type:"disability",
country:"Canada",
amount:"$4000",
description:"Grant for Canadian students with permanent disabilities.",
link:"https://www.canada.ca"
}

]

app.get("/scholarships",(req,res)=>{
res.json(scholarships);
});

const PORT = 5000;

app.listen(PORT,()=>{
console.log("Server running on http://localhost:5000");
});