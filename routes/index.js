const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
  const data = {
    "name": "Yol",
    "from": "Granada"
  }
  res.json(data);
});

module.exports = router;