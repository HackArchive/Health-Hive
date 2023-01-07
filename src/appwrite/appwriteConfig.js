import { Client,Account,Databases } from "appwrite";


const client = new Client();

client.setEndpoint("http://170.75.175.72:8765/v1").setProject("63b9c49b4b384facdd36")


export const DB_ID = "63b9c4be711e85c82f8e"
export const PRODUCT_COLLECTION_ID = "63b9c510aeaee56e1ed5"
export const HAZARD_COLLECTION_ID = "63b9c4d507dddd115637"
export const account = new Account(client);
export const databases = new Databases(client,DB_ID)