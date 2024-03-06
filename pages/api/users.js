import client from "client";
import { gql } from "@apollo/client";

const handlerUsers = async (req, res) => {
    try {      
        const {data} = await client.query({
            query: gql`
                query UsersQuery {
                    users {
                        nodes {
                            databaseId
                            firstName
                            lastName
                            slug
                            uri
                            userMetadata {
                                jobTitle
                                contactInformation {
                                    userAddress
                                    userEmail
                                    userPhone
                                    userWhatsapp
                                    userWebsite
                                    userLinkedin
                                }
                                profilePicture {
                                    sourceUrl
                                }
                            }
                        }
                    }
                }
            `,
        });

        return res.status(200).json({
            users: data.users.nodes,
        });
        
    } catch (e) {
        console.log("HANDLER USERS ERROR: ", e);
    }
};

export default handlerUsers;