import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BlogItem(props) {
    return (
        <div className="group flex flex-row mb-12 transition-all">
            <div>
                <Link
                    href={props.href}
                    className="font-medium transition-all hover:text-primary-500"
                >
                    {props.title}
                </Link>
                <div className="mb-2 text-primary-400">{props.date}</div>
                <div className="text-surface-600 mb-4">
                    {props.description}
                </div>
                <div className="flex flex-row items-center">
                    <Link
                        href={props.href}
                        className="flex flex-row hover:text-primary-500"
                    >
                        <div>Read More</div>
                        <div>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                width={17}
                                height={17}
                                className="pl-1 pt-1 items-center justify-center"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;