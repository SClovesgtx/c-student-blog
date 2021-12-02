import React, {useContext, useState, useEffect} from 'react';
import { getCategories } from '../services';

import Link from 'next/link';

const Header = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories().then(newCategories => setCategories(newCategories))
    }, [])

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="flex justify-center gap-10 flex-col">
                    <div className="flex items-center flex-col justify-center">
                        <img className="rounded-full" height="100px" width="100px" src="eu.jpg"/>
                        <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                            C-STUDENT
                        </span>
                    </div>
                    <div className="flex justify-around items-center">
                        <Link href="/">  
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Postagens
                            </span>
  
                        </Link>
                    
                        <Link href="/">
                                <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                    Sobre o Blog
                                </span>
                        </Link>

                        <Link href="/">
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Sobre Mim
                            </span>
                        </Link>

                        <Link href="/">
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Contatos
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
