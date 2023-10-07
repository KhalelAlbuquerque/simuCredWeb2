const Bank = require('../models/Bank')

module.exports = class BankController{

    static async criarBanco(req,res){
        try{
            const {name, anual_int, max_install} = req.body
            const newBank = await Bank.create({
                name,
                anual_int,
                max_install
            }).exec()

            return res.status(201).json({'success': `Bank ${name} added`})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }


    static async getAllBanks(req,res){
        try{
            const banks = await Bank.find().exec()
            return res.status(200).json({'success': banks})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }

}