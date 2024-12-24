import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className=" py-24">
            <div className="container">
                <div className=" flex justify-center text-center ">
                    <Tag>Features</Tag>
                </div>
                <h2 className=" text-6xl text-center font-medium mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className=" text-lime-400">simplicity</span>
                </h2>
                <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    {/* First Feature Card */}
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team editing"
                        className=" md:col-span-2 lg:col-span-1 group"
                    >
                        <div className=" aspect-video flex items-center justify-center ">
                            <Avatar className=" z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar1"
                                    className=" rounded-full"
                                />
                            </Avatar>
                            <Avatar className=" -ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar2"
                                    className=" rounded-full"
                                />
                            </Avatar>
                            <Avatar className=" -ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar3"
                                    className=" rounded-full"
                                />
                            </Avatar>
                            <Avatar className=" -ml-6 border-transparent  group-hover:border-green-500 transition">
                                <div className=" size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="avatar4"
                                        className=" size-full rounded-full absolute opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className=" size-1.5 rounded-full bg-white inline-flex"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    {/* second feature card */}
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with protypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className=" aspect-video flex items-center justify-center">
                            <p className=" text-4xl font-extrabold text-center text-white/20 group-hover:text-white/10 ">
                                We&apos;ve achieved{" "}
                                <span className=" bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video
                                        src="/assets/gifs/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className=" absolute rounded-2xl shadow-lg bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-500"
                                    ></video>
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    {/* third feature card */}
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more quickly"
                        className=" md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
                    >
                        <div className=" aspect-video flex items-center justify-center gap-4">
                            <Key className=" w-28">Shift</Key>
                            <Key>Alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className=" mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className=" bg-neutral-900 border border-white/10 inline-flex items-center justify-center px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3"
                        >
                            <span className=" size-5 bg-lime-400 rounded-full inline-flex items-center justify-center text-neutral-950 text-xl">
                                &#10038;
                            </span>
                            <span className=" font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
