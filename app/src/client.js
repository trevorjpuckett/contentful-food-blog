import * as contentful from 'contentful';
import env from "react-dotenv";


export const client = contentful.createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
})