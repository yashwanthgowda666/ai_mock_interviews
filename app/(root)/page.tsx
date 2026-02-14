import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="#">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* YOUR INTERVIEWS */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          <InterviewCard
            role="Frontend Developer"
            type="Technical"
            techstack={["React", "JavaScript", "CSS"]}
          />

          <InterviewCard
            role="Full Stack Developer"
            type="Mixed"
            techstack={["Nodejs", "MongoDB", "React"]}
          />
        </div>
      </section>

      {/* TAKE INTERVIEWS */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          <InterviewCard
            role="Backend Developer"
            type="Technical"
            techstack={["Nodejs", "MongoDB"]}
          />

          <InterviewCard
            role="JavaScript Developer"
            type="Behavioral"
            techstack={["JavaScript", "React"]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
