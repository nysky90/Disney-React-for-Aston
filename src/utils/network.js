export const getApiResourse = async (url) => {
	try {
		const responce = await fetch(url);

		if (!responce.ok) {
			console.error('Could not fetch/', responce.status);
			return false;
		}

		return responce.json();
	} catch (error) {
		console.error('Could not fetch/', error.message);
		return false;
	}
};
