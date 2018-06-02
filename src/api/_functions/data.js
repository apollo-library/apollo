export async function parseJSON(data) {
    return JSON.parse((await data.text()).substring(9));
}
