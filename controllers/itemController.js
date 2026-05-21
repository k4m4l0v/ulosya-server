const {Item} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class itemController {
    async create(req, res, next) {
        try {
            const {name, price, typeId} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
            const item = await Item.create({name, price, typeId, img: fileName});
    
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        // const {typeId} = req.query;
        // let items;
        // if (!typeId) {
        //     items = await Item.findAll();
        // }
        // if (typeId) {
        //     items = await Item.findAll({where: {typeId}});
        // }
        try {
            const items = await Item.findAll();
    
            return res.json(items);
        } catch (error) {
            console.error('ПОЛНАЯ ОШИБКА:', error);
            console.error('Тип ошибки:', error.name);
            console.error('Сообщение:', error.message);
            console.error('Стек:', error.stack);
            res.status(500).json({
            error: 'Непредвиденная ошибка',
            details: error.message,
            sql: error.sql // если есть
            });
        }
    }

    async getOne(req, res, next) {
        const {id} = req.params;
        const item = await Item.findOne({where: {id}})
        return res.json(item);
    }
};

module.exports = new itemController();
