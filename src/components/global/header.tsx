import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';

function Header(): JSX.Element {
	const [isExpanded, toggleExpansion] = useState(false);

	return (
		<header className="">

			<Head>
				<title>Hydrotik | Donovan Adams</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="description" content="Hydrotik is an experiential digital consultancy with a focus on retail and entertainment brands led by Donovan Adams." />
				<meta name="keywords" content="Hydrotik, React, Front End Development, HTML, CSS, JavaScript, Donovan Adams" />
				<meta name="author" content="Donovan Adams" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,400" rel="stylesheet" type="text/css" />
			</Head>

			<nav className="mb-4 md:mb-24 flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto p-10 text-xl">
				<div className="flex items-center">
					<Link href={`${process.env.BACKEND_URL}/`}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<img src="images/logo.png" width="125" className="-ml-1 pd-0 min-w-1/2 m-2" alt="Website Logo" />
					</Link>
				</div>

				<button aria-label="Home Link" className="block md:hidden border border-black flex items-center px-3 py-2 rounded" onClick={(): void => toggleExpansion(!isExpanded)}>
					<svg role="img" className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>

				<ul className={`${isExpanded ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto`}>
					{[
						{ title: 'Home', route: `${process.env.BACKEND_URL}/` },
						{ title: 'About', route: `${process.env.BACKEND_URL}/about` },
						{ title: 'Contact', route: `${process.env.BACKEND_URL}/contact` },
					].map((navigationItem) => (
						<li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
							<Link href={navigationItem.route}>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a className="block font-thin text-gray-800 hover:text-black" href="">{navigationItem.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
