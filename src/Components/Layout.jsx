import React from 'react';
import Header from './Header'
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
		<div className="flex h-full flex-col">
			<div className='grow flex flex-col container mx-auto pt-5 px-5 sm:pt-10 sm:px-0'>
				<Header />
				<div className="grow">{ children }</div>
			</div>
			<Footer />
		</div>
    )
}

export default Layout