import express from 'express';

const app = express();

app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Logging middleware
app.use((req,res,next) => {
    console.log(`[REQ] ${req.method} ${req.originalUrl}`);
    next();
})


app.post("/api/notes", (req,res) => {
    console.log("Req body from Backend: ", req.body)
    res.json({success: true})
})


const port = 4000
app.listen(port, ()=> {
    console.log("Server is running on port ", port)
})