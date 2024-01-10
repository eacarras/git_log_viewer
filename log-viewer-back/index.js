
import express, { Express, Request, Response , Application } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'



//For env File 
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Endpoints


// Upload server
try {
    app.listen(port, () => {
        console.log(`Server is Fire at http://localhost:${port}`);
    })
} catch (err) {
    console.error("App can not be mounted", err)
}
