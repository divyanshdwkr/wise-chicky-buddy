import { useState } from "react";
import Splash from "@/components/Splash";
import FounderStory from "@/components/onboarding/FounderStory";
import BottomNav, { TabKey } from "@/components/app/BottomNav";
import HomeTab from "@/components/tabs/HomeTab";
import AssessmentsTab from "@/components/tabs/AssessmentsTab";
import SessionsTab from "@/components/tabs/SessionsTab";
import ResourcesTab from "@/components/tabs/ResourcesTab";
import ProfileTab from "@/components/tabs/ProfileTab";

type Phase = "splash" | "onboarding" | "app";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("splash");
  const [tab, setTab] = useState<TabKey>("home");
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background mx-auto max-w-[480px] relative">
      {phase === "splash" && <Splash onDone={() => setPhase("app")} />}

      {phase === "app" && (
        <>
          <div className="pb-24 animate-float-up">
            {tab === "home" && <HomeTab />}
            {tab === "assessments" && <AssessmentsTab />}
            {tab === "sessions" && <SessionsTab />}
            {tab === "resources" && <ResourcesTab onOpenFounderStory={() => setStoryOpen(true)} />}
            {tab === "profile" && <ProfileTab onOpenFounderStory={() => setStoryOpen(true)} />}
          </div>
          <BottomNav active={tab} onChange={setTab} />

          {storyOpen && (
            <FounderStory
              onComplete={() => setStoryOpen(false)}
              onSkip={() => setStoryOpen(false)}
              showCTA={false}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Index;
