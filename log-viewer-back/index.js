
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./router')
const middleware = require('./middleware')


//For env File 
dotenv.config();

const app = express();
const port = process.env.PORT || 5500;

// Use cors
app.use(cors())
app.use(middleware.setHeaders)

// Endpoints
app.get('/health', (req,res)=>{
    res.send('API is running without any problem')
})

app.use('/github_api', routes)

// Upload server
try {
    app.listen(port, () => {
        console.log(`Server is Fire at http://localhost:${port}`);
    })
} catch (err) {
    console.error("App can not be mounted", err)
}
