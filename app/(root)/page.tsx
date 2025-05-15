import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { getLatestInterviews } from "@/lib/actions/general.action";
import { dummyInterviews } from "@/constants";

async function Home() {
  let interviewsToShow = dummyInterviews;
  try {
    const allInterviews = await getLatestInterviews();
    if (Array.isArray(allInterviews) && allInterviews.length > 0) {
      interviewsToShow = allInterviews;
    }
  } catch (error) {
    // If authentication fails or any error occurs, fallback to dummyInterviews
    interviewsToShow = dummyInterviews;
  }

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Available Interviews</h2>

        <div className="interviews-section">
          {interviewsToShow.map((interview: Interview) => (
            <InterviewCard
              key={interview.id}
              userId={interview.userId}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
