export const fetchHygraphQuery = async <T>(query: string, revalidate?: number): Promise<T> => {
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
        // Verifique o erro retornado pela API
        const errorText = await response.text();
        console.error("Erro na resposta da API:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result || !result.data) {
        console.error("Resposta inválida da API:", result);
        throw new Error("Resposta inválida da API");
    }

    return result.data;
}
