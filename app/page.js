import React from "react";
import Header from "@/components/header";
import About from "@/components/about";
import Publications from "@/components/publications/publications";
import Blog from "@/components/blog/blog";
import Credits from "@/components/credits";
import { promises as fs } from "fs";

export default async function Home() {
    const file = await fs.readFile(
        process.cwd() + "/public/translations/en.json",
        "utf-8"
    );
    const data = JSON.parse(file);

    return (
        <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
            <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
                <Header data={data.general}></Header>
                <div className="lg:pl-[50%]">
                    <About data={data.general}></About>
                    <Publications data={data.publications}></Publications>
                    <Blog data={data.blog}></Blog>
                    <Credits data={data.general}></Credits>
                </div>
            </div>
        </main>
    );
}
