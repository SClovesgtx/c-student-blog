import React from 'react';
import Image from 'next/image';
import linkedin from "../public/linkedin.png";
import twitter from "../public/twitter.png";
import insta from "../public/insta.png";
import stack from "../public/stackoverflow.png";
import git from "../public/github.png";


function Contacts() {
    return (
        <div className="container mx-auto px-10 mb-8">
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 text-2xl lg:px-10">
            <p className="mb-8">Você pode entrar em contato/conexão comigo através das seguintes mídias sociais:</p>
            <div className="flex gap-8">
                <a target="_blank" href="https://www.linkedin.com/in/cloves-paiva-02b449124/">
                    <Image className="rounded-full" width="50" height="50" src={linkedin}/>
                </a>
                <a target="_blank" href="https://twitter.com/ClovesPaiva2?t=sc50TEvyp7U-uBL1jeBgcQ&s=08">
                    <Image className="rounded-full" width="50" height="50" src={twitter}/>
                </a>
                <a target="_blank" href="https://www.instagram.com/clovesgtx/">
                    <Image className="rounded-full" width="50" height="50" src={insta}/>
                </a>
                <a target="_blank" href="https://github.com/SClovesgtx">
                    <Image className="rounded-full" width="50" height="50" src={git}/>
                </a>
                <a target="_blank" href="https://stackoverflow.com/users/6693125/cloves-paiva">
                    <Image className="rounded-full" width="50" height="50" src={stack}/>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contacts
