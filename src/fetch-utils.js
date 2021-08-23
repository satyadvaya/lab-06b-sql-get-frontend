const URL = 'https://sleepy-anchorage-69297.herokuapp.com';

export const getSoups = async () => {
    const resp = await fetch(`${URL}/soups`);
    const data = await resp.json();
    return data;
};

export const getSoup = async (id) => {
    const resp = await fetch(`${URL}/soups/${id}`);
    const data = await resp.json();
    return data;
};

export const getCategories = async () => {
    const resp = await fetch(`${URL}/categories`);
    const data = await resp.json();
    return data;
};

export const updateSoup = async (soupObject) => {
    const resp = await fetch(`${URL}/soups/${soupObject.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(soupObject),
    });
    console.log(resp.status);
    const data = await resp.json();
    return data;
};

export const createSoup = async (soupObject) => {
    const resp = await fetch(`${URL}/soups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(soupObject),
    });
    console.log(resp.status);
    const data = await resp.json();
    return data;
};