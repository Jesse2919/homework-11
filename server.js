const express = require ("express")

const route = require ("./routes")

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())





app.listen(PORT, ()=> {
    console.log(`express server listening for request at localhost:${PORT}`);
})