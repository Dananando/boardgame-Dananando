const { Router } = require('express');

const router = Router();

router.get('/hello', (_, response) => {
    response.json('Hello world!')
});

module.exports = router;