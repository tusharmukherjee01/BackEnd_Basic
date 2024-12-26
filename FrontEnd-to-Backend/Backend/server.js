
import express from "express";

const app = express();

/*
 npm run build in frontend React file
 you will get "dist" folder transfer "dist" into your backend
 then add
 "app.use(express.static('dist'));" in your backend server.js file and then when you go in localhost:3000 you will get everything..
*/
// app.use(express.static('dist'));  
// app.get("/", (req, res) => {    
//     res.send("Hello World!");
// });

//get a list of 5 jokes

const jokes = [
    {
        id:1,
        title:"A joke about cheese",
        content:"This is a joke"
    },
    {
        id:2,
        title:"Another joke about cheese",          
        content:"Hello-me-Hello-me"
    },
    {
        id:3,
        title:"What did the cheese say when it looked in the mirror?",
        content:"Hello-me-Hello-me"
    },
    {
        id:4,
        title:"What did the cheese say when it looked in the mirror?",
        content:"Hello-me-Hello-me"
    },
    {
        id:5,
        title:"What did the cheese say when it looked in the mirror?",
        content:"Hello-me-Hello-me"
    }
]
// app.get("/jokes", (req, res) => {    // we will get/ acess in front end this api in "http://localhost:3000/jokes" url
//     res.send(jokes);
// })

app.get("/api/jokes", (req, res) => {    //standard way of /api/jokes
    res.send(jokes);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {    
    console.log(`App is listining at http://localhost:${PORT}`);    
})

/*
  import express from 'express';
import axios from 'axios';

const app = express();

// Endpoint to call a public API and send data to the frontend
app.get("/api/tushar", async (req, res) => {
  try {
    // Example of calling a public API (replace with your desired API)
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const apiData = apiResponse.data;

    // Sending the fetched API data to the frontend
    res.status(200).json(apiData);
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from the public API' });
  }
});

// Starting the server
app.listen(8000, () => {
  console.log(`App is listening at port 8000`);
});

  */