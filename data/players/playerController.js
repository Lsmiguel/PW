function PlayerController(PlayerModel) {

    let controller = {
        create,
        findAll,
        findById,
        update,
        removeById
    }
    
    function findAll(){
        return new Promise(function (resolve, reject) {
            PlayerModel.find({})
            .then((player) => resolve(players))
            .catch((err) => reject(err));
        });
    }

    function findById(id){
        return new Promise(function (resolve, reject) {
            PlayerModel.findById(id)
            .then((player) => resolve(player))
            .catch((err) => reject(err));
        });
    }

    function create (values){
        let newPlayer = PlayerModel(values);
        return save(newPlayer);
    }

    function save (newPlayer) {
        return new Promise (function (resolve, reject) {
            newPlayer.save()
            .then(() => resolve('Player Created'))
            .catch((err) => reject(err));
        });
    }

    return controller;
}

function update (id, player) {
    return new Promise(function (resolve, reject) {
        PlayerModel.findByIdAndUpdate(id, player)
        .then(() => resolve(player))
        .catch((err) => reject(err));
    });
}

function removeById (id){
    return new Promise(function (resolve, reject) {
        PlayerModel.findByAndRemove(id)
        .then(() => resolve())
        .catch((err) => reject(err));
    });
}

module.exports = PlayerController;
