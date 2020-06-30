import React from 'react';
import Layout from '../components/global/layout';
import ArtThumbItem, { ArtThumbProps } from '../components/ui/ArtThumbItem';
import { currency } from '../utils/Numbers';

/*
	Index/Home Prop/State Types
*/

type HomeProps = {
}

type HomeState = {
	art: ArtThumbProps[];
}

class Home extends React.Component<HomeProps, HomeState> {
	constructor(props: HomeProps) {
		super(props);

		this.state = {
			art: [],
		};
	}

	async componentDidMount(): Promise<void> {
		const apiContentURL = '/data/content.json';
		this.getContentData(apiContentURL);
	}

	getContentData = async (url: string): Promise<void> => {
		const response = await fetch(url);
		const data = await response.json();
		const { content } = data;
		this.resolveContentData(content.art);
	}

	resolveContentData = (art: ArtThumbProps[]): void => {
		this.setState({
			art,
		});
	}

	render(): JSX.Element {
		const {
			art,
		} = this.state;

		return (
			<Layout>
				<div className="content-container relative px-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{
							art && art.map((item: ArtThumbProps) => (
								<ArtThumbItem
									key={item.key}
									title={item.title}
									price={currency(item.price, true)}
									thumb={item.thumb}
									image={item.image}
									buyurl={item.buyurl}
									shortdescription={item.shortdescription}
								/>
							))
						}
					</div>
				</div>
			</Layout>
		);
	}
}

export default Home;
