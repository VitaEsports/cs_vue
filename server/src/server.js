const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs');

const PORT = process.env.PORT || 8090


const app = express()
app.use(express.static('public'));
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'serveraaaaaaaaaaaaaaaa running'
    })
})


app.listen(PORT, function() {
    console.log('server up and running at port: %s', PORT);
});
