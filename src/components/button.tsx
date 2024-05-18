import { twMerge } from 'tailwind-merge';

interface ButtonProps {
	children: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

export default function Button({
	children,
	size = 'medium',
	className,
}: ButtonProps) {
	const sizeClassNames = {
		// 12px
		small: 'text-xs px-2 py-1',
		// 14px
		medium: 'text-sm px-5 py-3',
		// 17px
		large: 'text-lg px-8 py-4',
	};

	return (
		<button
			className={twMerge(
				'bg-white text-textBlack rounded-full px-3 py-1',
				sizeClassNames[size],
				className
			)}
		>
			{children}
		</button>
	);
}
