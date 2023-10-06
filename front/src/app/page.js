'use client'
import Image from 'next/image'
import finance from './finance.png'
import { useState } from 'react'

export default function Home() {


  const [bank,setBank] = useState('')
  const [months,setMonths] = useState('')
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!bank || !months || !value) {
      return alert("Preencha todos os campos")
    }
    setMonths('')
    setValue('')
    setBank('')
  }

  return (
    <div>
      <header className='flex flex-col items-center justify-center mt-8'>
        <div>
          <Image
          src={finance}
          alt='Logo finance'
          width={163}
          height={37}
          />
        </div>
        <div className='flex flex-col justify-center items-center mt-12'>
          <h1 className='text-gray-600 text-4xl font-semibold'>
            Simule o seu
          </h1>
          <h1 className='text-4xl font-semibold text-green-300'>
            financiamento<span className='text-gray-600'>.</span>
          </h1>
          <p className='text-center w-54 text-gray-400 mt-4'>
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
          onChange={({ target }) => setValue(Number(target.value))}
          className='border border-gray-300 w-80 h-10 mt-12 px-4 rounded-md'
          />
          <select value={bank} onChange={({ target }) => setBank(target.value)} className='w-80 py-2 px-3 border border-gray-300 rounded-md text-gray-500'>
            <option value="" disabled>
              Escolha um banco
            </option>
            <option className='text-black' value="banco do brasil">Banco do Brasil</option>
            <option className='text-black' value="caixa econômica federal">Caixa econômica Federal</option>
            <option className='text-black' value="bradesco">Bradesco</option>
            <option className='text-black' value="itau">Itáu</option>
            <option className='text-black' value="santander">Santander</option>
            <option className='text-black' value="sicoob">Sicoob</option>
            <option className='text-black' value="inter">Inter</option>
            <option className='text-black' value="original">Original</option>
            <option className='text-black' value="nubank">Nubank</option>
            <option className='text-black' value="picpay">Picpay</option>
          </select>
          <select value={months} onChange={({ target }) => setMonths(Number(target.value))} className='w-80 py-2 px-3 border border-gray-300 rounded-md text-gray-500'>
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
          <button onClick={handleSubmit} type='submit' className='bg-green-400 text-white font-smibold w-80 h-10 rounded-md'>
            Simular financiamento
          </button>
        </form>
      </main>
    </div>
  )
}
