import cn from "classnames";
import React, { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: "flat" | "slim";
	active?: boolean;
	type?: "submit" | "reset" | "button";
	loading?: boolean;
	disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		className,
		variant = "flat",
		children,
		active,
		loading = false,
		disabled = false,
		...rest
	} = props;

	const rootClassName = cn(
		"text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none",
		{
			"bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart":
				variant === "flat",
			"h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart":
				variant === "slim",
			"cursor-not-allowed": loading,
			"cursor-not-allowed hover:cursor-not-allowed": disabled,
		},
		className
	);

	return (
		<button
			aria-pressed={active}
			data-variant={variant}
			ref={ref}
			className={rootClassName}
			disabled={disabled}
			{...rest}
		>
			{children}
			{loading && (
				<svg
					className="animate-spin -me-1 ms-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			)}
		</button>
	);
});

export default Button;
