import { create, findById } from '../models/Box';

class BoxController{
    async store(req, res){
        const box = await create({title: req.body.title});
        
        return res.send(box);
    }

    async show(req, res){
        const box = await findById(req.params.id).populate({
            path: 'files',
            options: { sort: {createdAt: -1}},
        });

        return res.json(box);


    }
}

export default new BoxController();