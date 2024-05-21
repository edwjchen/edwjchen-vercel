import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


function BlogItem(props) {
    return (
        <div className="group flex flex-row mb-12 transition-all">
            <div>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all hover:text-primary-500'>{props.title}</a>
                <div className='mb-2 text-primary-400'>{props.date}</div>
                <div className='text-surface-600 mb-4'>{props.description}</div>
                <div className='flex flex-row items-center'>
                    <a href={props.href} className="flex flex-row hover:text-primary-500" rel="noopener noreferrer">
                        <div>
                            Read More
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} width={17} height={17} className='pl-1 pt-1 items-center justify-center'/>
                        </div>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default BlogItem