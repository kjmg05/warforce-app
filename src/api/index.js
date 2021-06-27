import getEnvVars from "../../environment";

// La ruta principal para consultar a la API
const { apiUrl } = getEnvVars();

const fetchStarWars = async () => {
    //Obtener planetas de prueba
    const endpoint = `${apiUrl}planets/`;

    //Realizar petición a la API
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

export default fetchStarWars;