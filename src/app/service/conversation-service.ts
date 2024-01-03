import { nanoid } from "nanoid";
import { Conversation } from "@prisma/client";
import { SimpleResponse } from "../types/simple-response";
import { prisma } from "../utils/prisma";

export const getAllConversations = async (): Promise<
  SimpleResponse<Conversation[]>
> => {
  try {
    const response = await prisma.conversation.findMany({
      include: {
        users: { include: { user: true } },
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export const createConversation = async (
  users: string[]
): Promise<SimpleResponse<Conversation>> => {
  try {
    const response = await prisma.conversation.create({
      data: {
        users: {
          create: [
            {
              userId: users[0],
            },
            {
              userId: users[1],
            },
          ],
        },
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
