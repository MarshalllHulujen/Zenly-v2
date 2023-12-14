import { nanoid } from "nanoid";
import axios from "axios";
import { mongoApiRequest } from "../utils/mongoApiRequest";
// api-url https://ap-south-1.aws.data.mongodb-api.com/app/data-diolp/endpoint/data/v1
// api-key = YkPHUTHBmy5tIRvdnOsb4FruNu7I8MfKaOpIoRACElDIGW1HUarjnC1cDsCzXuiu

let conversations = [{ _id: nanoid(), members: [nanoid(), nanoid()] }];

export const getAllConversations = async () => {
  const { response, error} = await mongoApiRequest("find", "conversations", {});
  if (error) {
    console.error(error);
    return []
  } else {
    return response.document;
  }
};

export const getConversation = (_id:string) => { 
    const result =  conversations.find((conversations) => conversations._id === _id)
    return result
};

export const createConversation = (members: string[]) => {
    const newConversation = { _id: nanoid(), members: [nanoid(), nanoid()] };
    conversations.push(newConversation);
    return newConversation;
};
export const updateConversation = (members: string[]) => {
   
}