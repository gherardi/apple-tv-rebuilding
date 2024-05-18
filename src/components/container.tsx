import { twMerge } from 'tailwind-merge';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function Container({ children, className }: ContainerProps) {
	return (
		<div className={twMerge('mx-auto max-w-[980px] px-6', className)}>
			{children}
		</div>
	);
}
