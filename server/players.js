const bodyParser = require('body-parser');
const express = require('express');
const Players = require('../data/players');
const findById = require('../data/players/playerController');

function PlayerRouter() {
    let router = express();

    router.use(bodyParser.json({ LIMIT: '100mb' }))
    router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

    router.use(function(req, res, next) {
        console.log("Time:", Date.now());
        next();
    });

    router.route('/players')
        .post((req, res, next) => {
            console.log('post')
            let body = req.body

            Players.create(body)
                .then(() => {
                    console.log('Created!')
                    res.status(200)
                    res.send(body)
                    next()
                })
                .catch((err) => {
                    console.log(err.message)
                    console.log(err);
                    err.status = err.status || 500
                    res.status(401)
                    next()
                })
        })

        router.route("/players/:playerId")
        .get(function (req, res, next) {
            console.log("get a player by id");
            let playerId = req.params.playerId;
    
            Players.findById(playerId)
                .then((player) => {
                    res.status(200);
                    res.send(player);
                    next();
                })
                .catch((err) => {
                    res.status(404);
                    next();
                });
        })
        .put(function (req, res, next) {
            console.log("Update a player by id");
            let playerId = req.params.playerId;
            let body = req.body;

            Players.update(playerId, body)
            .then((player) => {
                res.status(200);
                res.send(player);
                next();
            })
            .catch((err) => {
                res.status(404);
                next();
            });
        })
        .delete(function (req, res, next){
            console.log("Delete a player by id");
            let playerId = req.params.playerId;

            Players.removeById(playerId)
            .then(() => {
                res.status(200);
                res.send();
                next();
            })
            .catch((err) => {
                console.log(err);
                res.status(404);
                next();
            })
        });
    return router;
}



module.exports = PlayerRouter