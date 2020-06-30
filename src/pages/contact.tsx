import React from 'react';
import Layout from '../components/global/layout';
/*
	Contact Prop/State Types
*/

type ContactProps = {
}

type ContactState = {
}

class Contact extends React.Component<ContactProps, ContactState> {
	constructor(props: ContactProps) {
		super(props);

		this.state = {
		};
	}

	render(): JSX.Element {
		return (
			<Layout>
				<div className="content-container relative px-10">
					<h1>Contact</h1>
				</div>
			</Layout>
		);
	}
}

export default Contact;
