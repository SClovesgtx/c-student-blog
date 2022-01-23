import Link from 'next/link';
import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import moment from 'moment';

const PostDetail = ({ post }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-top h-ful w-full rounded-t-lg"
                />
            </div>
            <div className="px-4 lg:px-0">
                <div className="flex items-center mb-8 w-full">
                    <div className="font-medium text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                            />
                        </svg>
                        <span className="align-middle">{moment(post.createdAt).format('DD MMM YYYY')}</span>
                    </div>
                </div>
                <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                {/* https://graphcms.com/blog/graphcms-react-rich-text-renderer */}
                {/* https://github.com/GraphCMS/rich-text/tree/main/packages/react-renderer#custom-elements */}
                <RichText 
                    content={post.content.raw}
                    renderers={{
                        p: ({ children }) => <p className="mb-8">{children}</p>,
                        h1: ({ children }) => <h1 className="text-xl font-semibold mb-4">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-xl font-semibold mb-4">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
                        a: ({ children, openInNewTab, href, rel, ...rest }) => {
                            if (href.match(/^https?:\/\/|^\/\//i)) {
                              return (
                                <a
                                  {...rest}
                                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                  href={href}
                                  target={openInNewTab ? '_blank' : '_self'}
                                  rel={rel || 'noopener noreferrer'}
                                >
                                  {children}
                                </a>
                              );
                            }
                  
                            return (
                              <Link href={href}>
                                <a {...rest}>{children}</a>
                              </Link>
                            );
                        },
                        code_block: ({ children }) => {
                            return (
                                <code className="block rounded-lg whitespace-pre overflow-x-scroll py-4 px-2 mb-8 bg-gray-800 text-white dark:text-gray-300">
                                    {children}
                                </code>
                            )
                        },
                        img: ({ src }) => <img src={src} className='mb-8'/>,
                        ol: ({ children }) => <ul className="list-decimal ml-8 mb-8">{children}</ul>,
                        ul: ({ children }) => <ul className="list-disc ml-8 mb-8">{children}</ul>,
                        li: ({ children }) => <li className='mb-4'>{children}</li>,
                        blockquote: ({ children}) => {
                           return( 
                                <p 
                                    className="p-4 italic border-l-4 bg-neutral-100 mb-8 text-neutral-600 border-neutral-500 quote"
                                >
                                    {children}
                                </p>
                           )
                        },
                      }}
                />
            </div>
        </div>
    )
}

export default PostDetail;
