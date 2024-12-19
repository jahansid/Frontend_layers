import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes,} from "react";

const buttonStyles = cva(" h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: " border bg-lime-400 text-neutral-950 border-lime-400 hover:bg-transparent hover:text-white transition duration-300",
            secondary: "border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 ",

        },
        size: {
            sm: " h-10"
        }
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;
    return (
        <button
            className={buttonStyles({ variant, className, size })}
            {...otherProps}
        />
    );
}
