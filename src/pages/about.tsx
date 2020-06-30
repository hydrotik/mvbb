import React from 'react';
import Layout from '../components/global/layout';
/*
	About Prop/State Types
*/

type AboutProps = {
}

type AboutState = {
}

class About extends React.Component<AboutProps, AboutState> {
	constructor(props: AboutProps) {
		super(props);

		this.state = {
		};
	}

	render(): JSX.Element {
		return (
			<Layout>
				<div className="content-container relative px-10">
					<h1>About</h1>
				</div>
			</Layout>
		);
	}
}

export default About;
