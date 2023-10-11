"use client"
import CardBanco from '../components/CardBanco';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Emprestimo(props) {
    const router = useRouter();

    function calcJuros(valorEntrada, anualTax, months) {
        const txJur = anualTax / 100 / 12; 
        const total = valorEntrada * Math.pow(1 + txJur, months);
        return total.toFixed(2); 
    }
    

    let valorPedido = parseFloat(props.searchParams.valorPedido);
    let numParcelas = parseFloat(props.searchParams.numParcelas);

    // 100% CERTO!!!! NAO MUDE KHALEL!!!!! (ROTA DO BACK END)
    const url = `http://localhost:3001/?valorPedido=${valorPedido}&numParcelas=${numParcelas}`;

    const [banks, setBanks] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                data.success.forEach(bank=>{
                    if(bank.max_install<numParcelas) {
                        bank.mensalValue='Recusado'
                        bank.finalValue = 'Recusado'
                    }else{
                        const juros = calcJuros(valorPedido, bank.anual_int, numParcelas)
                        const parcelas = (juros/    numParcelas).toFixed(2)
                        bank.mensalValue = `R$ ${parcelas}`
                        bank.finalValue =  `R$ ${juros}`
                    }
                })
                setBanks(data.success);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    function redirect(id, final, vezes) {
        final = final.split(' ')[1]
        router.push(`/banco/${id}/${valorPedido}?valorFinal=${final}&numParcelas=${vezes}`);
    }

    return (
        <div>
            <div>
                <h1 className='text-2xl text-center font-bold text-gray-700 pt-8'>Escolha um banco</h1>
            </div>
            <div className='flex flex-col pt-8 mb-8 gap-6'>
                {banks.length > 0 ? (
                    banks.map((banco, index) => (
                        <div key={index}>
                            {banco.mensalValue === 'Recusado' ? (
                                <CardBanco
                                    nomeBanco={banco.name}
                                    valorParcela={banco.mensalValue}
                                    valorTotal={banco.finalValue}
                                    disabled={true}
                                />
                            ) : (
                                <CardBanco
                                    nomeBanco={banco.name}
                                    valorParcela={banco.mensalValue}
                                    valorTotal={banco.finalValue}
                                    disabled={false}
                                    onClick={() => redirect(banco._id, banco.finalValue, numParcelas)}
                                />
                            )
                }
                        </div>
                    ))
                ) : (
                    <span style={{ textAlign: "center", fontWeight: 'bold' }}>CARREGANDO...</span>
                )}
            </div>
        </div>
    );
}