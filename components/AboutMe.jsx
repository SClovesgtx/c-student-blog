import React from 'react';

function AboutMe() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="bg-white shadow-lg rounded-lg pb-12 mb-8 py-8 text-2xl px-10">
                <p className="mb-8">Olá! Me chamo Cloves Paiva, casado, sou natural de Goiás e atualmente resido em Florianópolis-SC.</p>
                <p className="mb-8">Tenho 5 anos de experiência na lida com dados, focado principalmente em modelagem e curadoria de chatbots, criação 
                de relatórios analíticos e dashboards.</p>
                
                <p className="mb-8">Meus principais hobbies são:</p>
                <ol className="list-item px-10">
                    <li key='1' className="mb-4">
                        <strong>Literatura</strong>: Acredito muito que a 
                        leitura dos grandes clássicos nos ajudam a aprimorar nosso entendimento sobre o mundo, 
                        a sermos mais empáticos e a lidar melhor com nossos problemas tanto no nível individual como coletivo.
                    </li>
                    <li key='2' className="mb-8">
                        <strong>Música</strong>: curto muito música brasileira no geral mas tenho 
                        especial carinho pelo choro. Toco Bandolim, cavaquinho, pandeiro e, sempre que possível, gosto de me reunir com amigos para fazer 
                        um som.
                    </li>
                </ol>
                <p className="mb-8">E é mais ou menos isso que sou hoje.</p>
                <p className="mb-8">Clique na seção de contatos e se conecte a mim. 😉</p>
                <p className="mb-8">Abraços!</p>
            </div>
        </div>
    )
}

export default AboutMe
