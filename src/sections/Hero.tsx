"use client";

import Button from "@/components/Button";
import design1Image from "@/assets/images/design-example-1.png";
import design2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);

    return (
        <section className=" py-24 overflow-x-clip">
            <div className=" container relative ">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className=" hidden absolute -left-32 top-16 lg:block"
                >
                    <Image src={design1Image} alt="design 1 image" />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className=" absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Anjali" />
                </motion.div>
                <div className=" absolute -right-64 -top-16 hidden lg:block">
                    <Image src={design2Image} alt="design 2 image" />
                </div>
                <div className=" absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Jahan" />
                </div>
                <div className=" flex items-center justify-center">
                    <div className=" inline-flex text-base px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className=" text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
                    Impactful design, created effortlessly
                </h1>
                <p className=" text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an inutitive interface that keeps you
                    in your creative flow.
                </p>
                <form className=" flex border border-white/15 p-2 rounded-full mt-8 max-w-lg mx-auto ">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className=" bg-transparent px-3 text-sm rounded-full md:flex-1"
                    />
                    <Button
                        variant="primary"
                        size="sm"
                        type="submit"
                        className=" whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
