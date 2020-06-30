/*
	Art Thumb Thumb
*/

export type ArtThumbProps = {
	key: string;
	title: string;
	price: number | string;
	shortdescription: string;
	thumb: string;
	image: string;
	buyurl: string;
}

const ArtThumbItem = (props: ArtThumbProps): JSX.Element => {
	const {
		title,
		price,
		shortdescription,
		thumb,
		buyurl,
	} = props;

	const buyButton = (
		<a href={buyurl} className="bg-gray-200 hover:bg-gray-700 text-gray-700 hover:text-white font-bold py-2 px-6 rounded-full border border-gray-400 hover:border-black">
			Buy
		</a>
	);

	const sold = (
		<span className="bg-gray-100 text-gray-400 font-bold py-2 px-6 rounded-full border border-gray-300">
			Sold
		</span>
	);

	const avaibility = (url: string): JSX.Element => {
		if (url === '') return sold;
		return buyButton;
	};

	return (
		<div className="w-full mb-12">
			<div className="mb-2">
				<a href={buyurl}>
					<img src={thumb} alt={title} className="w-full" />
				</a>
			</div>
			<div className="mb-2  text-gray-800">
				{ title }
				<span className="ml-4 font-thin text-gray-600">
					{ price }
				</span>
			</div>
			<div className="text-sm mb-4 font-thin text-gray-600">{ shortdescription }</div>
			{ avaibility(buyurl) }
		</div>
	);
};

export default ArtThumbItem;
