import React, {useState, useEffect} from 'react';
import { getContentFragment } from '../utils/getContentFragment.js';
import { getAbout } from '../services';

const About = ({ slug }) => {
    const [about, setAbout] = useState(false)

    useEffect(() => getAbout(slug).then(result => setAbout(result)), []);
    return (
        <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="px-4 lg:px-0">
                { about && about.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map( (item, itemIndex) => getContentFragment(itemIndex, item.text, item))
                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div>
    )
}

export default About;
