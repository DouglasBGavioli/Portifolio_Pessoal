export const fetchHygraphQuery = async (query: string, revalidate?: number) => {
    const response = await fetch(process.env.HYGRAPH_URL!, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
        },
        body: JSON.stringify({ query }),
        next: {
            revalidate
        }
    });

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const json = await response.json();

    if (!json || !json.data) {
        throw new Error('No data returned from API');
    }

    return json.data;
};
