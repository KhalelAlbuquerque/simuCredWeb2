'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import finance from './finance.png'
import { useEffect, useState } from 'react'
import carro from './carro.png'
import iconefinance from './iconefinance.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Home() {

  const router = useRouter()

  const [months,setMonths] = useState('')
  const [value, setValue] = useState('')


  async function handleSubmit(e) {
    e.preventDefault()

    const valor = Number(value)
    if (valor <= 0 || isNaN(valor)) {
      setValue('0')
      return alert("Valor inválido")
    }

    if (!months) {
      return alert("Preencha todos os campos ")
    }
    
    router.push(`/emprestimo?valorPedido=${value}&numParcelas=${months}`);


    setMonths('')
    setValue('')
  }

  return (
    <div className='flex justify-around w-full h-screen items-center max-[1220px]:bg-green-100'>
      <div className='max-[1220px]:hidden fixed justify-center items-center border-l-2 rounded-full p-6'>
        <div className='bg-white w-16 py-3 rounded-full shadow-2xl'>
          <MdOutlineKeyboardArrowRight className='mx-auto text-gray-600 text-4xl' />
        </div>
      </div>
      <div className='w-1/2 max-[1220px]:hidden'>
        <header className='flex flex-col justify-center items-center'>
          <div className='text-start w-80'>
            <Image
              src={finance}
              alt='Logo finance'
              width={163}
              height={37}
            />
          </div>
          <div className='flex flex-col justify-center items-center mt-12'>
            <h1 className='text-start w-80 text-gray-600 text-4xl font-semibold'>
              Simule o seu
            </h1>
            <h1 className='text-start w-80 text-4xl font-semibold text-green-300'>
              financiamento<span className='text-gray-600'>.</span>
            </h1>
            <p className='text-start text-gray-400 mt-4 w-80'>
              Escolha as melhores condições para o financiamento do seu veículo.
            </p>
          </div>
          <div className='mt-16'>
            <Image
            src={carro}
            width={594}
            height={285}
            alt='Carro'
            />
          </div>
        </header>
      </div>
      <div className='w-1/2 bg-green-100 h-screen flex flex-col justify-center items-center'>
        <header className='flex flex-col items-center justify-center min-[1220px]:items-start min-[1220px]:w-96'>
          <div>
            <Image
            src={finance}
            alt='Logo finance'
            width={163}
            height={37}
            className='max-[1220px]:flex hidden'
            />
            <Image
            src={iconefinance}
            alt='Logo finance'
            width={79}
            height={51}
            className='max-[1220px]:hidden flex'
            />
          </div>
          <div className='flex flex-col justify-center items-center mt-12'>
            <h1 className='text-gray-600 text-4xl font-semibold max-[1220px]:flex hidden'>
              Simule o seu
            </h1>
            <h1 className='text-4xl font-semibold text-green-300 max-[1220px]:flex hidden'>
              financiamento<span className='text- text-gray-600'>.</span>
            </h1>
            <p className='w-96 max-[1220px]:text-center max-[1220px]:w-54 text-gray-400 mt-4'>
              Preencha os campos e simule o seu financiamento.
            </p>
          </div>
        </header>
        <main>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3'>
            <input
            type='number'
            placeholder='Valor'
            value={value}
            onChange={({ target }) =>{
              setValue((target.value))
            }}
            className='border border-gray-300 w-96 h-10 mt-12 px-4 rounded-md max-[420px]:w-80'
            />
            <select value={months} onChange={({ target }) => setMonths(target.value)} className='w-96 max-[420px]:w-80 py-2 px-3 border border-gray-300 rounded-md text-gray-500'>
              <option value="" disabled>
                Quantos meses?
              </option>
              <option className='text-black' value="12">12</option>
              <option className='text-black' value="24">24</option>
              <option className='text-black' value="36">36</option>
              <option className='text-black' value="48">48</option>
              <option className='text-black' value="60">60</option>
              <option className='text-black' value="72">72</option>
            </select>
            <button onClick={()=>handleSubmit} style={{fontWeight:'bold'}} type='submit' className='bg-green-400 text-white font-smibold w-96 h-10 rounded-md max-[420px]:w-80'>
              Simular financiamento
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}