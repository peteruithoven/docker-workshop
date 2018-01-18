const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Hello from Express");
});

const listener = app.listen(process.env.PORT|3000, () => {
  console.log('Server listening on ', listener.address().port);
});
