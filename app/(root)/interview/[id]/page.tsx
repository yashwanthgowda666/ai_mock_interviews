import { getInterviewById } from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import Agent from "@/components/Agent";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const user = await getCurrentUser();
  if (!user) redirect("/");

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold capitalize">
            {interview.role} Interview
          </h2>
          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <span className="bg-dark-200 px-4 py-2 rounded-lg">
          {interview.type}
        </span>
      </div>

      {/* Agent (THIS WAS MISSING) */}
      <Agent
        userName={user.name}
        userId={user.id}
        interviewId={id}
        questions={interview.questions}
        type="interview"
      />
    </section>
  );
};

export default Page;
