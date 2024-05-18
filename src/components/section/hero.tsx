import { useRef } from 'react';
import Button from '../button';
import Container from '../container';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
	const videoContainerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: videoContainerRef,
		offset: ['start start', 'end end'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

	return (
		<div className='h-[300vh] text-white bg-background relative'>
			<motion.div
				style={{ opacity }}
				ref={videoContainerRef}
				className='absolute -top-[--header-height] left-0 w-full h-[200vh]'
			>
				<img
					className='sticky top-0 h-screen object-cover'
					src='/posters/napoleon.webp'
					alt='Napoleon image'
				/>
			</motion.div>
			<Container className='relative z-10 pb-7 h-[--hero-height]'>
				<motion.div
					className='flex flex-col h-full items-start justify-end'
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, y: 0 },
					}}
					whileInView='visible'
					exit='hidden'
					animate='hidden'
					viewport={{ amount: 0.9 }}
				>
					<h1 className='text-5xl font-bold mb-10'>
						All Apple Originals. <br />
						Only on Apple TV+.
					</h1>
					<Button className='mb-16' size='large'>
						Stream now
					</Button>
					<p className='font-semibold'>Watch on the TV app.</p>
				</motion.div>
			</Container>
		</div>
	);
}
