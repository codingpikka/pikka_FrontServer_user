const express = require('express');
const path = require('path');
const app = express();
const port = 8003;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/db', (req, res) => {
  res.sendFile(path.join(__dirname, 'D:/Gangnam_Full_stack/team_project/vue_project/pikka_FrontServer_user/pikka_json/db.json'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});