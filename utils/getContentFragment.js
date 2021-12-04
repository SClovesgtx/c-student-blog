import React from 'react';


export const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'block-quote':
        return <p 
            className="p-4 italic border-l-4 bg-neutral-100 mb-8 text-neutral-600 border-neutral-500 quote"
            key={index}
            > 
                {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)} 
            </p>;
      case 'code-block':
          return <code 
            className="block rounded-lg whitespace-pre overflow-x-scroll py-4 px-2 mb-8 bg-gray-800 text-white dark:text-gray-300"
            key={index}
            > 
                {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)} 
            </code>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className='mb-8'
          />
        );
      default:
        return modifiedText;
    }
};