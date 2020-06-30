const DataService = async (url: string): Promise<object> => {
	const response = await fetch(url);
	const data = await response.json();
	return (data as object);
};

export default DataService;
