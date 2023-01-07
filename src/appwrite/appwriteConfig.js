import { Client,Account,Databases } from "appwrite";


const client = new Client();

client.setEndpoint("http://192.168.0.5/v1").setProject("63b716868a610c416277")


export const account = new Account(client);
export const databases = new Databases(client,"63b716cf01cb58dce0fb")