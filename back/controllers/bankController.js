const Bank = require('../models/Bank')


function calcJuros(valorEntrada, anualTax, months) {
    const jurosDec = anualTax / 100
    const txJurMensal = jurosDec / 12
    const valor = valorEntrada * Math.pow(1 + txJurMensal, months )
    
    const valorFinal = valor.toFixed(2)
    
    return parseFloat(valorFinal)
        
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
            let {valorPedido, numParcelas} = req.query
            valorPedido = parseFloat(valorPedido)
            numParcelas = parseFloat(numParcelas)

            const banks = await Bank.find().exec()

            if(!banks) return res.status(404).json({message: "No bank found"})

            async function processBank(bank) {

                const valorComJuros = calcJuros(valorPedido, bank.anual_int, numParcelas).toFixed(2);
                const valorMensal = (valorComJuros / numParcelas).toFixed(2);

                bank.finalValue = parseFloat(valorComJuros);
                bank.mensalValue = parseFloat(valorMensal);
                await bank.save()
            }
              
            for (let bank of banks) {
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

    static async clearBanks(req,res, next){
        try {
            const allBanks = await Bank.find();
          
            for (const bank of allBanks) {
                bank.mensalValue = 0;
                bank.finalValue = 0;
                await bank.save();
              }

            next()
          } catch (err) {
            return res.status(500).json({ message: err.message });
          }
          
    }

}