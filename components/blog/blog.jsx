import React from "react";
import BlogItem from "./blog-item";

const Blog = (props) => {
    return (
        <div data-section id='blog' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'></h2>
            {props.data.map(function(object, index){
                return <BlogItem  
                    key={`${object.title}`}
                    title={object.title}
                    href={object.href}
                    date={object.date}
                    description={object.description}
                />
            })}
        </div>
    )
}

export default Blog