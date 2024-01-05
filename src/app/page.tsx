"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "./hooks/userUser";
import { fetcher } from "./utils/fetcher";

import useSWR from "swr";
import LoginPage from "./login/page";

export default function Home() {
  const { user } = useUser();
  const {
    data: conversationsData,
    isLoading: usersLoading,
    error: usersError,
  } = useSWR("/api/conversations", fetcher);
  console.log("conversationsData:", conversationsData);

  if (!user)
    return (
      <div>
        <LoginPage />
      </div>
    );

  return (
    <div className="flex w-full h-screen flex-col py-12 px-9">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex flex-row">
          <Image
            src={user.imageUrl || ""}
            alt={user.name}
            width={70}
            height={70}
            className="rounded-full"
          />
          <p className="pt-[20px] pl-[5px]">{user.name}</p>
        </div>
        <div>
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        <div className="flex items-center w-[200px]">
          <input
            type="text"
            placeholder="Search conversation"
            className="border p-2 mr-2"
          />
          <button className="bg-blue-500 text-white p-2">Search</button>
        </div>
        <div>
          <Link href={"/api/auth/logout"}>Log out</Link>
        </div>
      </div>
      <div className="border-t border-b py-4 my-4 border-white/30">
        {conversationsData?.map((conversation: any) => (
          <Link
            href={`/conversations/${conversation.id}`}
            className="flex gap-6 items-center p-10"
            key={conversation.id}
          >
            {
              conversation.users.map((member)=><>
              <Image
              src={`${member.user.imageUrl}`}
              alt={member.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p>{member.user.name}</p>
            </div></>)
            }
           
          </Link>
        ))}
      </div>
    </div>
  );
}
