const URL = 'https://sleepy-anchorage-69297.herokuapp.com';

export const getSoups = async () => {
    const resp = await fetch(`${URL}/soups`);
    const data = await resp.json();
    return data;
}