import cifrao from './img/cifrao.png'
import Image from 'next/image'
import carromulher from './img/mulhercarro.png'
import finance from './img/finance.png'

export default function Banco({valorParcela, valorTotal}){
    return (
        <div className='flex justify-between'>
            <div className='mx-auto'>
                <div className='flex w-52 mx-auto mt-16 max-[1220px]:hidden'>
                    <Image
                    src={finance}
                    width={176}
                    height={40}
                    />
                </div>
                <div className="flex flex-col items-center w-[320px] mt-32 mx-auto rounded-2xl h-96 shadow-2xl min-[1220px]:shadow-none justify-center min-[1220px]:mt-8">
                    <div className='fixed mt-12 -top-1 border-t-2 rounded-full p-8 min-[1220px]:hidden'>
                        <div className='bg-white w-20 py-5 rounded-full shadow-2xl'>
                            <Image
                            src={cifrao}
                            width={42}
                            height={42}
                            className='mx-auto text-gray-600 text-4xl' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-80 mx-auto pt-12 gap-2 min-[1220px]:gap-4 min-[1220px]:w-60 min-[1220px]:items-start">
                        <h1 className="text-sm text-gray-500 min-[1220px]:text-xl">Valor das suas parcelas:</h1>
                        <h1 className="text-gray-700 text-3xl font-bold min-[1220px]:text-4xl">R$ {valorParcela}</h1>
                    </div>
                    <div className="flex flex-col items-center w-80 mx-auto pt-8 gap-2 min-[1220px]:gap-4 min-[1220px]:w-60 min-[1220px]:items-start">
                        <h1 className="text-sm text-gray-500 min-[1220px]:text-xl">Valor total a pagar:</h1>
                        <h1 className="text-gray-700 text-3xl font-bold min-[1220px]:text-4xl">R$ {valorTotal}</h1>
                    </div>
                    <p className="text-gray-500 mt-6 min-[1220px]:w-60 min-[1220px]:flex-start italic">
                        * Financiamento em 48 meses
                    </p>
                    <div>
                        <button className="border-2 hover:bg-green-600 hover:text-white text-gray-500 py-2 px-4 rounded-md mt-8 w-72 min-[1220px]:w-64">
                            Voltar ao simulador
                        </button>
                    </div>
                </div>
                <div>
                    <p className='max-[1220px]:hidden mt-28 text-gray-500 w-64 mx-auto'>
                        Todos os direitos reservados ©️
                    </p>
                </div>
            </div>
            <div className='max-[1220px]:hidden w-1/2'>
                <Image
                src={carromulher}
                alt='carro e mulher'
                className='h-screen'
                />
            </div>
        </div>
    )
}