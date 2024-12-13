import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
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
                <h2 className=" text-6xl text-center font-medium mt-6">
                    Where power meets{" "}
                    <span className=" text-lime-400">simplicity</span>
                </h2>
                <div className=" mt-12 grid grid-cols-1 gap-8">
                    {/* First Feature Card */}
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team editing"
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
                            <Avatar className=" -ml-6 border-transparent">
                                <div className=" size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
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
                    >
                        {" "}
                    </FeatureCard>
                    {/* third feature card */}
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more quickly"
                    >
                        {" "}
                    </FeatureCard>
                </div>
                <div>
                    {features.map((feature) => (
                        <div key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
