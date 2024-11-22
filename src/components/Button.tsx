import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const buttonStyles = cva(" h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: " border bg-lime-400 text-neutral-950 border-lime-400",
            secondary: "border border-white text-white bg-transparent",
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, ...otherProps } = props;
    return (
        <button
            className={buttonStyles({ variant, className })}
            {...otherProps}
        />
    );
}
