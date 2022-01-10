import React, {useState, useEffect} from 'react';
import { getCategories } from '../services';
import Image from 'next/image';
import Link from 'next/link';
import eu from '../public/eu.jpg'

const BASE_URL = process.env.BASE_URL;

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
                        <Image className="rounded-full" height="100px" width="100px" src={eu}/>
                        <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                            C-Student
                        </span>
                    </div>
                    <nav className="flex justify-around items-center menu-container">
                        <Link href="/">  
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Postagens
                            </span>
  
                        </Link>
                    
                        <Link href="/about/blog">
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Sobre o Blog
                            </span>
                        </Link>

                        <Link href="/about/me">
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Sobre Mim
                            </span>
                        </Link>

                        <Link href="/about/contacts">
                            <span className="cursor-pointer mt-4 font-bold text-4xl text-white">
                                Contatos
                            </span>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
