import LoadingSpinner from "@/app/components/LoadingSpinner";
import UserPosts from "@/app/components/UserPosts";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const userData = getUser(id);
  const user = await userData;

  return {
    title: user.name,
    description: `${user.username}'s profile page`,
  };
}

export default async function UserPage({ params: { id } }: Params) {
  const userData = getUser(id);
  const userPostsData = getUserPosts(id);

  // parallel fetching
  //const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;
  return (
    <div className="h-full text-gray-800">
      <h2 className="text-center mt-5">{user.name}</h2>
      <br />
      <div className="flex flex-wrap gap-4 justify-center py-10">
        <Suspense fallback={<LoadingSpinner />}>
          <UserPosts promise={userPostsData} />
        </Suspense>
      </div>
    </div>
  );
}
