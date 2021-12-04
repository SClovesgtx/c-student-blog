import React from 'react';

function AboutBlog() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 text-2xl lg:px-10">
                <p className="mb-8">Criei este blog com três objetivos principais:</p>
                <ol className="list-item px-10">
                    <li key='1' className="mb-4">1º - Compartilhar com vocês o que venho aprendendo na área de dados 
                    (uso aqui “área de dados” como termo guarda-chuva para abarcar engenharia de dados, visualização de dados, 
                    machine learning, etc).</li>
                    <li key='2' className="mb-4">2º - Usar este blog como playground para evoluir minhas habilidades na 
                    área de desenvolvimento web.</li>
                    <li key='3' className="mb-4">3º - Portfólio pessoal.</li>
                </ol>
                <p>Por que do nome C-Student? Bem, a imagem abaixo ajuda a explicar isso:</p>
                <img height="100px" width="100px" src="eu-guinness.jpeg"/>
                <p className="mb-8">Você pode estar se perguntando:  que tem a ver este cara estranho, 
                com uma latinha de Guinness na mão e uma estante de livros atrás?. Tudo a ver!
                </p>
                <p className="mb-8">O cara estranho sou eu (o Cloves Adriano) e, como me considero um eterno estudante, 
                    decidi chamar o blog de C-Student, nome este inspirado no pseudônimo t-student adotado 
                    pelo estatístico William Sealy Gosset, quando teve que publicar sobre uma distribuição 
                    probabilística que ele derivou em decorrência do trabalho que executava no controle de 
                    qualidade na famosa cervejaria irlandesa Guinness.
                </p>
                <p className="mb-8">Espero que consigam encontrar algo de útil aqui e bora trocar figurinhas.</p>

                <p className="mb-8">Abraço a todos!</p>

            </div>
        </div>
    )
}

export default AboutBlog
