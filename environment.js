import Constant from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "https://swapi.dev/api/",
        // imageUrl : "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/",
        imageUrl: "https://raw.github.com/DanAriasV/SWAPI-IMAGES/main/",
    },
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if(__DEV__) return ENV.dev;
};

export default getEnvVars;
