import { twMerge } from "tailwind-merge";
import { HtmlHTMLAttributes } from "react";

export default function Avatar(props: HtmlHTMLAttributes<HTMLDivElement>) {
    const { children, className, ...otherProps } = props;
    return (
        <div className={twMerge(" size-20 rounded-full border-4 border-blue-400 overflow-hidden p-1 bg-neutral-900", className)} {...otherProps}>
            {children}
        </div>
    );
}
