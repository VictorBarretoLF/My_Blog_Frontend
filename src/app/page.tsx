import { Editor } from "@/components/editor";
import Navbar from "@/components/global/Navbar";
import Side from "@/components/global/Side";
import Hero from "@/components/page/Hero";
import Image from "next/image";

export default function Home() {
    const one = <h1>Olá, meu nome é</h1>;
    const two = <h2>Víctor Barreto</h2>;

    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <Side orientation="left">ze1</Side>
            <Side orientation="right">ze2</Side>

            <div id="content">
                {/* TODO: retirar o min-h-[200vh] após finalizar o hero, a navbar e os sides */}
                <section className="mx-auto w-full max-w-screen-xl min-h-[200vh] px-12 md:px-24 lg:px-40">
                    <Hero />
                </section>
                <h1>Footer</h1>
            </div>
        </main>
    );
}
