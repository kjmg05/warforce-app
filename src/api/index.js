import getEnvVars from "../../environment";
import React, {useEffect, useState} from "react";

const { apiUrl } = getEnvVars();

export const fetchStarWars = async (url) => {
    try {
        const endpoint = `${apiUrl}${url}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        return{count : 0};
    }
};

export const LinkedInfo = async (linkedUrl) => {
    try {
        let linkedResponse = await fetch(linkedUrl);
        let linkedData = await linkedResponse.json();
        return linkedData;
    } catch (error) {
        console.log(error);
    }
};




