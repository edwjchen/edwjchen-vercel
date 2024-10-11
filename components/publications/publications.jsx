import React from "react";
import PublicationItem from "./publication-item";

const Publications = (props) => {
    return (
        <div data-section id='publications' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'></h2>
            {props.data.map(function(object, index){
                return <PublicationItem  
                    key={`${object.title}+${object.year}`}
                    title={object.title}
                    before_authors={object.before_authors}
                    author={object.author}
                    after_authors={object.after_authors}
                    href={object.href}
                    venue={object.venue}
                    year={object.year}
                    description={object.description}
                />
            })}
        </div>
    )
}

export default Publications