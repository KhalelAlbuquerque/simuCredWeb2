const Bank = require('../models/Bank')


function calcJuros(valorEntrada, anualTax, months) {
    const decimalTax = anualTax / 100;
    const total = valorEntrada * Math.pow(1 + decimalTax, months);
    return total;
}


module.exports = class BankController{

    static async criarBanco(req,res){
        try{
            const {name, anual_int, max_install} = req.body
            const newBank = await Bank.create({
                name,
                anual_int,
                max_install
            })

            return res.status(201).json({'success': `Bank ${name} added`})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }


    static async getAllBanks(req,res){
        try{
            let {valorPedido, numParcelas} = req.body
            valorPedido = parseFloat(valorPedido)
            numParcelas = parseFloat(numParcelas)

            const banks = await Bank.find().exec()

            if(!banks) return res.status(404).json({message: "No bank found"})

            async function processBank(bank) {
                const valorComJuros = await calcJuros(valorPedido, bank.anual_int, numParcelas).toFixed(2)
                const valorMensal = (valorComJuros / numParcelas).toFixed(2)
              
                bank.finalValue = valorComJuros
                bank.mensalValue = valorMensal
              
                await bank.save()
            }
              
            for (const bank of banks) {
                await processBank(bank)
            }
            

            return res.status(200).json({'success': banks})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }

    static async getBank(req,res){

        try{
            const {id} = req.params

            const bank = await Bank.findOne({_id:id}).exec()

            if(!bank) return res.status(404).json({message: "No bank found"})

            return res.status(200).json({'success': bank})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }

}