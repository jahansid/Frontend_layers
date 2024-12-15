import Tag from "@/components/Tag";

const integrations = [
    { name: "Figma", icon: "figma-logo.svg", description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: "notion-logo.svg", description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: "slack-logo.svg", description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: "relume-logo.svg", description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: "framer-logo.svg", description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: "github-logo.svg", description: "GitHub is the leading platform for code collaboration." },
];

export default function Integrations() {
    return <section className=" py-24">
        <div className=" container">
            <div className=" flex justify-center items-center">
            <Tag>Integrations</Tag>
            </div>
            <h2 className=" text-6xl font-medium mt-6 text-center">Plays well with <span className="text-lime-400">others</span></h2>
            <p className=" text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.
            </p>


            <div>

            </div>

        </div>
    </section>;
}
