import Button from './button';
import Container from './container';

export default function Header() {
	return (
		<>
			<header className='text-white bg-backgroundContrast relative z-20'>
				<Container className='flex items-center min-h-[--header-row-height]'>
					<a
						href='/'
						className='-ml-6 flex h-[--header-row-height] items-center px-6 text-xl'
					>
						 <span className='sr-only'>Back to homepage</span>
					</a>
				</Container>
			</header>
			<div className='sticky top-0 text-white bg-backgroundContrast z-20'>
				<Container className='flex justify-between items-center min-h-[--header-row-height]'>
					<p className='text-xl font-semibold'>Apple TV+</p>
					<Button size='small'>Stream now</Button>
				</Container>
			</div>
		</>
	);
}
