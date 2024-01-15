import { mapMainMenuItems } from "./mapMainMenuItems";

export const getMenu = async () => {
    const params = {
        query: `
            query MenuQuery {
                acfOptionsMainMenu {
                    mainMenu {
                        callToActionButton {
                            label
                            destination {
                                ... on Page {
                                    uri
                                }
                            }
                        }
                        menuItems {
                            items {
                                destination {
                                    ...on Page {
                                        uri
                                    }
                                }
                                label
                            }
                            menuItem {
                                destination {
                                    ...on Page {
                                        uri
                                    }
                                }
                                label
                            }
                        }
                    }
                }
            }
        `,
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(params),
    });

    const {data} = await response.json();

    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);

    return {
        mainMenuItems,
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
    };
};