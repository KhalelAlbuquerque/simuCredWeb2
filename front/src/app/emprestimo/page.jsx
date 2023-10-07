import CardBanco from '../components/CardBanco'

export default function Emprestimo(){

    const bancos = [
        {
            nome: 'Banco do brasil',
            parcela: '100,00',
            total: '1.000,00'
        },
        {
            nome: 'Nubank',
            parcela: '150,00',
            total: '3.000,00'
        },
        {
            nome: 'Fodase',
            parcela: '200,00',
            total: '4.000,00'
        },
        {
            nome: 'Itaú',
            parcela: '250,00',
            total: '5.000,00'
        },
        {
            nome: 'Original',
            parcela: '300,00',
            total: '6.000,00'
        },
        {
            nome: 'Picpay',
            parcela: '350,00',
            total: '7.000,00'
        },
        {
            nome: 'Inter',
            parcela: '400,00',
            total: '8.000,00'
        },
        {
            nome: 'Sicoob',
            parcela: '450,00',
            total: '9.000,00'
        },
        {
            nome: 'Santander',
            parcela: '500,00',
            total: '10.000,00'
        },
        {
            nome: 'Bradesco',
            parcela: '550,00',
            total: '11.000,00'
        }
    ]
    return(
        <div>
            <div>
                <h1 className='text-2xl text-center font-bold text-gray-700 pt-8'>Escolha um banco</h1>
            </div>
            <div className='flex flex-col pt-8 mb-8 gap-6'>
                {bancos.map((banco, index) => (
                    <CardBanco
                        key={index}
                        nomeBanco={banco.nome}
                        valorParcela={banco.parcela}
                        valorTotal={banco.total}
                    />
                ))}
            </div>
        </div>
    )
}