import * as React from 'react';

type FooterProps = {
}

type FooterState = {
}

class Footer extends React.Component<FooterProps, FooterState> {
	componentDidMount(): void {
		// document.addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount(): void {
		// document.removeEventListener('scroll', this.trackScrolling);
	}

	render(): JSX.Element {
		const date = (new Date()).getFullYear();

		return (
			<footer className="w-full font-thin text-gray-500">
				<ul className="flex items-center justify-center max-w-4xl mx-auto p-4 md:p-8 text-xs">
					<li className="text-center">
						{ `All rights reserved. \u00A9${date} Shyvon, LLC.` }
					</li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
