const express = require('express')
const BankController = require('../controllers/bankController')

const router = express.Router()


router.get('/', BankController.getAllBanks)
router.get('/:id', BankController.getBank)
router.post('/criarBanco', BankController.criarBanco)


module.exports = router