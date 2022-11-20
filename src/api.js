import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5rNrQtPrrlPDhYawl7uUJEVGqHIi8F3G1tsHq9GXVVk',
        },
        params: {
            query: 'cars',
        },
    });

    console.log(response);
    return response;
};

export default searchImages;