"use client";

import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const workflowId =
    searchParams.get("workflow") || process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID_2;
  // You may want to get user from context or props in client components
  // For now, just pass dummy user or adjust as needed
  const user = { name: "User", id: "user-id", profileURL: undefined };

  return (
    <>
      <h3>Frontend Agent</h3>
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
