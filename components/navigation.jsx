'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from './nav-item';


const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    const handleClick = (id) => {
        setActiveSection(id);
    };

    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <div onClick={() => handleClick("about")}><NavItem active={activeSection === 'about' ? true : false} href='#' name='ABOUT'></NavItem></div>
            <div onClick={() => handleClick("publications")}><NavItem active={activeSection === 'publications' ? true : false} href='#publications' name='PUBLICATIONS'></NavItem></div>
            {/* <div onClick={() => handleClick("blog")}><NavItem active={activeSection === 'blog' ? true : false} href='#blog' name='BLOG'></NavItem></div> */}
            <div onClick={() => handleClick("credits")}><NavItem active={activeSection === 'credits' ? true : false} href='#credits' name='CREDITS'></NavItem></div>
        </div>
    )
}

export default Navigation