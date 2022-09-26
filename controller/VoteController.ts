import { Request, Response } from 'express';
const VoteModel = require('../models/vote');

class VoteController {

    index = async (req : Request, res : Response, next) => {
        res.json(await VoteModel.findAll());
      }
      


       create = async (req,res,next) => {
         try {
          const data = await this.validateData(req.body);
          const user = await VoteModel.create(data);
            res.json(user);
         } catch (error) {
            res.status(400).json({ error: error.message });
          }
        }


        validateData = async (data) => {
          const attributes = [];
          const user = {};
          for (const attribute of attributes) {
            if (! data[attribute]){
              throw new Error(`The attribute "${attribute}" is required.`);
            }
            user[attribute] = data[attribute];
          }  
          return user;
          }
}
module.exports = new VoteController();