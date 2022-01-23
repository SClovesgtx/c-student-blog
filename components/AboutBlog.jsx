import React from 'react';
import Image from 'next/image';
import euGuinness from '../public/eu-guinness.jpeg';

function AboutBlog() {
    return (
        <div className="container mx-auto px-10 mb-8 px-10">
            <div className="bg-white shadow-lg rounded-lg pb-12 mb-8 py-8 text-2xl px-10">
                <p className="mb-8">Criei este blog com três objetivos principais:</p>
                <ol className="list-item px-10">
                    <li key='1' className="mb-4">1º - Compartilhar com vocês o que venho aprendendo na área de dados.</li>
                    <li key='2' className="mb-4">2º - Usar este blog como playground para evoluir minhas habilidades na 
                    área de desenvolvimento web.</li>
                    <li key='3' className="mb-4">3º - Portfólio pessoal.</li>
                </ol>
                <p className="mb-8">Por que do nome C-Student? Bem, a imagem abaixo ajuda a explicar isso:</p>
                <Image height="400px" width="320px" src={euGuinness}/>
                <p className="mt-8 mb-8">Você pode estar se perguntando:  o que este cara estranho, 
                com uma latinha de Guinness na mão e uma estante de livros atrás tem a ver com o nome C-Student?
                </p>
                <p className="mb-8">O cara estranho sou eu (o Cloves Paiva) e, como me considero um eterno estudante, 
                    decidi chamar o blog de C-Student, nome este inspirado no pseudônimo <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" href="https://en.wikipedia.org/wiki/Student%27s_t-distribution#History_and_etymology">t-student</a> adotado 
                    pelo estatístico William Sealy Gosset, quando teve que publicar sobre uma distribuição 
                    probabilística que ele derivou em decorrência do trabalho que executava no controle de 
                    qualidade na famosa cervejaria irlandesa <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" href="https://en.wikipedia.org/wiki/Guinness_Brewery">Guinness</a>.
                </p>
                <p className="mb-8">Espero que consigam encontrar algo de útil aqui e bora trocar figurinhas.</p>

                <p className="mb-8">Abraço a todos!</p>

            </div>
        </div>
    )
}

export default AboutBlog
