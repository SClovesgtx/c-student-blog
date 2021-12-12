import React from 'react';

const handleLink = (obj, index) => {
  return ((<a target="_blanck" className="text-#0B0080" href={obj.href} key={index}><u>{obj.children[0]["text"]}</u></a>))
}

const handleListItems = (obj) => {
  console.log("LIST ITEM:", obj.children[0].children[0].children)
  return (
    obj.children.map((listItem, index) => {
      <li key={index}>{listItem.children[0].text}</li>
    }
    )
  )
}

export const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    
    console.log(obj)
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.type === 'link') {
        modifiedText = handleLink(obj, index);
      }

      if (obj.type === 'bulleted-list') {
        modifiedText = handleListItems(obj, index);
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