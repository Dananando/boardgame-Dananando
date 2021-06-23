const { Router } = require('express');

const boardgameSchema = require('./schema/boardgame');
const { validateBody } = require('./services/validator');

const router = Router();

const boardgameController = require('./controller/boardgameController');

router.get('/hello', (_, response) => {
    response.json('Hello world!')
});

router.get('/boardgames', boardgameController.findAll);

router.get('/boardgames/:id(\\d+)', boardgameController.findOne);

router.post('/boardgames/save', validateBody(boardgameSchema), boardgameController.save);

router.patch('/boardgames/update', validateBody(boardgameSchema), boardgameController.save);

router.use((request, response) => response.status(404).json(`Endpoint ${request.url} not found`));

module.exports = router;