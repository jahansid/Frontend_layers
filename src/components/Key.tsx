import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HtmlHTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                " size-14 inline-flex items-center justify-center bg-white text-neutral-900 rounded-2xl text-xl font-medium",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
