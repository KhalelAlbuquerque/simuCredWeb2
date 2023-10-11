import banco from './banco.webp'
import Image from 'next/image'
import { RiArrowRightDoubleFill } from 'react-icons/ri'

export default function CardBanco({nomeBanco, valorParcela, valorTotal, disabled, onClick}){ 
    return (
        <div>
            {disabled ? (
                <div className={`flex mx-auto w-[360px] bg-gray-400 border-2 border-zinc-300 rounded-md  shadow-2xl`}>
                <div>
                    <Image
                    src={banco}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className='border-r-2 border-green-300 px-2 py-4'
                    />
                </div>
                <div className='px-2'>
                    <div className='text-center mb-3 text-xl text-gray-700  font-bold underline'>
                        {nomeBanco}
                    </div>
                    <div className='flex gap-4 '>
                        <div>
                            <h1 className='font-semibold'>Valor Parcela:</h1>
                            <p className='text-white font-semibold'>{valorParcela}</p>

                        </div>
                        <div>
                            <h1 className='font-semibold'>Valor total:</h1>
                            <p className='text-white font-semibold'>{valorTotal}</p>
                        </div>
                    </div>
                </div>
                <RiArrowRightDoubleFill className='relative right-0 mt-1 text-gray-600 text-xl'/>
            </div>
            ) : (
                <div className='flex mx-auto w-[360px] bg-green-200 border-2 border-zinc-300 rounded-md  shadow-2xl cursor-pointer' onClick={onClick}>
                <div>
                    <Image
                    src={banco}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className='border-r-2 border-green-300 px-2 py-4'
                    />
                </div>
                <div className='px-2'>
                    <div className='text-center mb-3 text-xl text-gray-700 font-bold underline'>
                        {nomeBanco}
                    </div>
                    <div className='flex gap-4 '>
                        <div>
                            <h1 className='font-semibold'>Valor Parcela:</h1>
                            <p className='text-gray-500 font-semibold'>{valorParcela}</p>

                        </div>
                        <div>
                            <h1 className='font-semibold'>Valor total:</h1>
                            <p className='text-gray-500 font-semibold'>{valorTotal}</p>
                        </div>
                    </div>
                </div>
                <RiArrowRightDoubleFill className='relative right-0 mt-1 text-gray-600 text-xl'/>
            </div>
            )}
        </div>
    )
}