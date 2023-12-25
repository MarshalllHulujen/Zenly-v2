import { nanoid } from "nanoid";
import axios from "axios";
import { mongoApiRequest } from "../utils/mongoApiRequest";
import { Conversation } from "../types/Conversation";
import { SimpleResponse } from "../types";
import { Prisma } from "@prisma/client";
import { prisma } from "../utils/prisma";
// api-url https://ap-south-1.aws.data.mongodb-api.com/app/data-diolp/endpoint/data/v1
// api-key = YkPHUTHBmy5tIRvdnOsb4FruNu7I8MfKaOpIoRACElDIGW1HUarjnC1cDsCzXuiu

let conversations = [{ _id: nanoid(), members: [nanoid(), nanoid()] }];

export const getAllConversations = async () => {
  const { response, error } = await mongoApiRequest(
    "find",
    "conversations",
    {}
  );
  if (error) {
    console.error(error);
    return [];
  } else {
    return response.documents;
  }
};

export const getConversation = async (
  _id: string
): Promise<SimpleResponse<Conversation>> => {
  const { response, error } = await mongoApiRequest(
    "findOne",
    "conversations",
    { filter: { _id } }
  );
  if (error) return error;

  return { response };
};

export const createConversation = async (
  input: Prisma.ConversationCreateInput
) => {
  try {
    const result = await prisma.conversation.create({ data: input });
    return { response : result }
  } catch (error) {
    return error
  }
};
