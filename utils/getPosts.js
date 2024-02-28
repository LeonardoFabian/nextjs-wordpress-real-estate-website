import client from "client";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { GET_POST_BY_URI } from "queries";

export const getPost = async ({params}) => {

    const response = await client.query({
        query: GET_POST_BY_URI,
        variables: {
            id: params.uri,
        },
    });

    const post = response?.data?.post;
    const mainMenuItems = mapMainMenuItems(response?.data?.acfOptionsMainMenu?.mainMenu?.menuItems);


    return {
        props: {
            post,
            mainMenuItems,
            callToActionLabel: response?.data?.acfOptionsMainMenu?.mainMenu?.callToActionButton.label,
            callToActionDestination: response?.data?.acfOptionsMainMenu?.mainMenu?.callToActionButton.destination.uri,
        }
    }
}