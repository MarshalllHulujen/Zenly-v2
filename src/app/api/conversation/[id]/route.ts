import { NextRequest, NextResponse } from "next/server";
import { getConversation } from "ZenlyV2/app/service/conversation-service";

// GET -> /api/conversations/12
export const GET = (request: NextResponse) => {
  const pathVariable = "12";
  const result = getConversation(pathVariable);
  if (result === null) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(result);
};

// PATCH/PUT -> /api/conversations/12
export const PATCH = (request: NextRequest) => {};

// DELETE -> /api/conversations/12
export const DELETE = (request: NextRequest) => {};