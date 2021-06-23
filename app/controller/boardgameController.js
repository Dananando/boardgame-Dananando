const { Boardgame } = require('../models/boardgame');

const boardgameController = {
    async findAll(request, response, next) {
        try {
            const boardgames = await Boardgame.findAll();
            if (boardgames) {
                response.status(200).json(boardgames);
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    findOne: async (request, response) => {
        try {
            const boardgame = await Boardgame.findOne(parseInt(request.params.id, 10));
            response.json(boardgame);
        } catch (error) {
            if (error instanceof Boardgame.NoBoardgameError) {
                response.status(404).send(error.message);
            } else {
                response.status(500).send(error.message);
            }
        }
    },

    save: async (request, response) => {
        try {
            const boardgame = new Boardgame(request.body);
            const newGame = await boardgame.save();
            if (newGame) { //équivalent if (newGame !== undefined)
                //le modèle a répondu avec une instance, il s'agit d'un insert
                response.status(201).json(newGame);
            } else {
                //pas de retour du modèle, il s'agit d'un update
                response.status(204).json(boardgame);
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

};

module.exports = boardgameController;