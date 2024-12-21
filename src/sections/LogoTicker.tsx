"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logosData = [
    { name: "Quantum", logoImage: "/assets/icons/quantum.svg" },
    { name: "Acme Corp", logoImage: "/assets/icons/acme-corp.svg" },
    { name: "Echo Valley", logoImage: "/assets/icons/echo-valley.svg" },
    { name: "Pulse", logoImage: "/assets/icons/pulse.svg" },
    { name: "Outside", logoImage: "/assets/icons/outside.svg" },
    { name: "Apex", logoImage: "/assets/icons/apex.svg" },
    { name: "Celestial", logoImage: "/assets/icons/celestial.svg" },
    { name: "Twice", logoImage: "/assets/icons/twice.svg" },
];

const LogoTicker = () => {
    return (
        <section className=" py-24 overflow-x-clip">
            <div className="container">
                <h3 className=" text-xl text-center text-white/50">
                    Already chosen by these market leaders.
                </h3>
                <div className=" flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className=" flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logosData.map((logo) => (
                                    <Image
                                        src={logo.logoImage}
                                        width={150}
                                        height={50}
                                        alt={logo.name}
                                        key={logo.name}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
