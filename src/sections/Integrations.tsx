import IntegrationColumn from "@/components/IntegrationColumn";
import Tag from "@/components/Tag";
import Image from "next/image";

// const integrations = [
//     {
//         name: "Figma",
//         icon: figmaIcon,
//         description: "Figma is a collaborative interface design tool.",
//     },
//     {
//         name: "Notion",
//         icon: notionIcon,
//         description: "Notion is an all-in-one workspace for notes and docs.",
//     },
//     {
//         name: "Slack",
//         icon: slackIcon,
//         description: "Slack is a powerful team communication platform.",
//     },
//     {
//         name: "Relume",
//         icon: relumeIcon,
//         description: "Relume is a no-code website builder and design system.",
//     },
//     {
//         name: "Framer",
//         icon: framerIcon,
//         description: "Framer is a professional website prototyping tool.",
//     },
//     {
//         name: "GitHub",
//         icon: githubIcon,
//         description: "GitHub is the leading platform for code collaboration.",
//     },
// ];

const integrations = [
    {
        name: "Figma",
        icon: "/assets/icons/figma-logo.svg", // path relative to the public directory
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: "/assets/icons/notion-logo.svg",
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: "/assets/icons/slack-logo.svg",
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: "/assets/icons/relume-logo.svg",
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: "/assets/icons/framer-logo.svg",
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: "/assets/icons/github-logo.svg",
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className=" py-24">
            <div className=" container">
                <div className=" flex justify-center items-center">
                    <Tag>Integrations</Tag>
                </div>
                <h2 className=" text-6xl font-medium mt-6 text-center">
                    Plays well with{" "}
                    <span className="text-lime-400">others</span>
                </h2>
                <p className=" text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Layers seamlessly connects with your favorite tools, making
                    it easy to plug into any workflow and collaborate across
                    platforms.
                </p>
                <div className=" h-[400px] mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <IntegrationColumn integrations={integrations}/>
                </div>
            </div>
        </section>
    );
}
