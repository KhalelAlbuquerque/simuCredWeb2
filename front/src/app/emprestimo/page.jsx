"use client"
import CardBanco from '../components/CardBanco';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Emprestimo(props) {
    const router = useRouter();

    let valorPedido = props.searchParams.valorPedido;
    let numParcelas = props.searchParams.numParcelas;

    // 100% CERTO!!!! NAO MUDE KHALEL!!!!! (ROTA DO BACK END)
    const url = `http://localhost:3001/?valorPedido=${valorPedido}&numParcelas=${numParcelas}`;

    const [banks, setBanks] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBanks(data.success);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    function redirect(id) {
        router.push(`/banco/${id}`);
    }

    return (
        <div>
            <div>
                <h1 className='text-2xl text-center font-bold text-gray-700 pt-8'>Escolha um banco</h1>
            </div>
            <div className='flex flex-col pt-8 mb-8 gap-6'>
                {banks.length > 0 ? (
                    banks.map((banco, index) => (
                        <div key={index} onClick={() => redirect(banco._id)}>
                            <CardBanco
                                nomeBanco={banco.name}
                                valorParcela={banco.mensalValue}
                                valorTotal={banco.finalValue}
                            />
                        </div>
                    ))
                ) : (
                    <span style={{ textAlign: "center", fontWeight: 'bold' }}>CARREGANDO...</span>
                )}
            </div>
        </div>
    );
}