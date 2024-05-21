import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import Image from 'next/image'

const Header = (props) => {
    return (
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col pb-48 self-center lg:self-auto'>
            <div className=''>
                <h1 className='text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
                <h2 className='text-primary-500 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
                <h3 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.email}</h3>
            </div>
            <Image
                className="pt-4 self-center justify-between"
                src="/images/pfp.jpg"
                alt="pfp of Edward Chen"
                width={250}
                height={250}
                style={{
                    objectFit: "cover",
                    borderRadius: "100px", //👈 and here you can select border radius
                }}
            />
            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header