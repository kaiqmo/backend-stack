const Box = require('../models/Box');

class BoxController{
    async store(req,res){
        
        // const box = await Box.create({title: req.body.title}); se nao quizer pegar o titulo vc pega o body inteiro embaixo
        const box = await Box.create(req.body);

        return res.json(box);
    }
    async show(req,res){
        const box = await Box.findById(req.params.id).populate({ //listagem de box
            path: 'files',
            options: { sort: { createdAt: -1 } }
        });
        return res.json(box); //retorna td q tem na box id
    }
}

module.exports = new BoxController(); // tem que colocar new para colocar a instancia dessa classe