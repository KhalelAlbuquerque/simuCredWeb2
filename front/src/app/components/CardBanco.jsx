'use client'
import banco from './banco.webp'
import Image from 'next/image'
import { RiArrowRightDoubleFill } from 'react-icons/ri'
import { useEffect, useState } from 'react'

export default function CardBanco({nomeBanco, valorParcela, valorTotal, disabled, onClick}){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;
      const isMobile = windowSize <= 640;
      setIsMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  if (isMobile) { //O componente mobile é diferente do desktop
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
    );
  }

  return (
    <div>
    {disabled ? (
        <div className="flex justify-center items-center flex-col w-96 mx-auto bg-gray-400 border-2 rounded-md py-3">
            <div className='text-center mb-3 text-xl text-gray-700  font-bold underline'>
                {nomeBanco}
            </div>
            <div>
                <Image
                src={banco}
                alt="Banco"
                width={150}
                height={150}
                />
            </div>
            <div className='flex justify-between items-center w-full mt-3 px-4'>
                <div className='text-gray-500 font-bold flex flex-col'>
                    <p className='text-black'>Valor Parcela:</p>
                    <p className='text-white'>{valorParcela}</p>
                </div>
                <div className='text-gray-500 font-bold flex flex-col'>
                    <p className='text-black'>Valor Final:</p>
                    <p className='text-white'>{valorTotal}</p>
                </div>
            </div>
        </div>
  ) : (
    <div className="flex justify-center items-center flex-col w-96 mx-auto bg-green-200 border-2 rounded-md py-3 cursor-pointer" onClick={onClick}>
            <div className='text-center mb-3 text-xl text-gray-700  font-bold underline'>
                {nomeBanco}
            </div>
            <div>
                <Image
                src={banco}
                alt="Banco"
                width={150}
                height={150}
                />
            </div>
            <div className='flex justify-between items-center w-full mt-3 px-4'>
                <div className='text-gray-500 font-bold flex flex-col'>
                    <p className='text-black'>Valor Parcela:</p>
                    <p>{valorParcela}</p>
                </div>
                <div className='text-gray-500 font-bold flex flex-col'>
                    <p className='text-black'>Valor Final:</p>
                    <p>{valorTotal}</p>
                </div>
            </div>
        </div>
  )}
</div>
  )
}