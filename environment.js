import Constant from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "https://swapi.dev/api/",
    },
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if(__DEV__) return ENV.dev;
};

export default getEnvVars;
