const express = require('express');
// const cors = require('cors');

const app = express();

// app.use(cors());

app.use(express.static('.'));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})
