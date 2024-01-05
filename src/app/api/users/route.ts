import { NextRequest, NextResponse } from "next/server";
import { getAllUsers } from "ZenlyV2/app/service/user-service";
import { createUser } from "ZenlyV2/app/service/user-service";

export const GET = async () => {
  const { response, error } = await getAllUsers();
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ response });
};

export const POST = async (request: NextRequest) => {
  const users = await request.json();
  const { members } = users;
  const createdUser = createUser(members);
  return NextResponse.json(createdUser)
}