"use client";
import Agent from "@/components/Agent";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const workflowId =
    searchParams.get("workflow") || process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID_4;
  const user = { name: "User", id: "user-id", profileURL: undefined };

  return (
    <>
      <h3>Backend Agent</h3>
      <Agent
        userName={user.name}
        userId={user.id}
        profileImage={user.profileURL}
        type="interview"
        workflowId={workflowId}
      />
    </>
  );
};

export default Page;
