import Button from "@/components/Button";
import design1Image from "@/assets/images/design-example-1.png";
import design2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";

export default function Hero() {
    return (
        <section className=" py-24 overflow-x-clip">
            <div className=" container relative ">
                <div className=" hidden absolute -left-32 top-16 lg:block">
                    <Image src={design1Image} alt="design1image" />
                </div>
                <div className=" absolute -right-64 -top-16 hidden lg:block">
                    <Image src={design2Image} alt="design2image" />
                </div>
                <div className=" absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Anjali" />
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
