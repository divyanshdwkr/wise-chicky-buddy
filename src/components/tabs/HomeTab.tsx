import { useState } from "react";
import { Bell, Plus } from "lucide-react";
import logo from "@/assets/wise-chicky-logo.png";
import SuperParentAI from "@/components/app/SuperParentAI";
import ChildCard from "@/components/app/ChildCard";
import BookSessionSheet from "@/components/app/BookSessionSheet";
import { Child, children, psychologists } from "@/data/mockData";

const HomeTab = () => {
  const [bookFor, setBookFor] = useState<Child | null>(null);
  const upcoming = {
    psychologist: psychologists[0],
    when: "Tomorrow • 4:00 PM",
    child: "Aarav",
  };

  return (
    <div className="pb-6">
      {/* Top hero greeting */}
      <section className="bg-hero px-5 pt-7 pb-5 rounded-b-[32px]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-primary font-semibold">Good morning</p>
            <h1 className="font-display text-[26px] leading-tight text-foreground mt-1">
              Hello, Ananya
            </h1>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-[260px]">
              Aarav's last check-in was 5 days ago. Time for a quick update?
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-10 w-10 rounded-full bg-card border border-card-border flex items-center justify-center shadow-card relative">
              <Bell className="h-4.5 w-4.5 text-foreground" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
            </button>
            <img src={logo} alt="Profile" className="h-10 w-10 object-contain rounded-full bg-card border border-card-border p-1" />
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex gap-2 mt-5">
          <span className="text-[11px] font-semibold px-3 py-1.5 rounded-pill bg-card border border-card-border text-foreground">
            2 Children
          </span>
          <span className="text-[11px] font-semibold px-3 py-1.5 rounded-pill bg-card border border-card-border text-foreground">
            1 Session upcoming
          </span>
          <span className="text-[11px] font-semibold px-3 py-1.5 rounded-pill bg-card border border-card-border text-foreground">
            3 Assessments
          </span>
        </div>
      </section>

      {/* AI Banner */}
      <section className="px-5 mt-5">
        <SuperParentAI />
      </section>

      {/* Children */}
      <section className="px-5 mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl text-foreground">Your children</h2>
          <button className="text-xs font-semibold text-primary">View all</button>
        </div>
        {children.map((c) => (
          <ChildCard key={c.id} child={c} onBookSession={setBookFor} />
        ))}

        <button className="w-full rounded-[24px] border-2 border-dashed border-primary/30 bg-primary-soft/40 p-5 flex items-center justify-center gap-2 text-primary font-semibold hover:bg-primary-soft transition">
          <Plus className="h-5 w-5" /> Add another child
        </button>
      </section>

      {/* Upcoming session */}
      <section className="px-5 mt-7">
        <h2 className="font-display text-xl text-foreground mb-3">Your upcoming sessions</h2>
        <div className="rounded-[24px] bg-card border border-card-border shadow-card p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary-soft flex items-center justify-center font-display text-primary">
              {upcoming.psychologist.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground text-sm">{upcoming.psychologist.name}</p>
              <p className="text-xs text-muted-foreground">{upcoming.when} • for {upcoming.child}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="rounded-xl h-10 bg-primary text-primary-foreground text-sm font-semibold">
              Join Session
            </button>
            <button className="rounded-xl h-10 border border-card-border text-foreground text-sm font-medium">
              Reschedule
            </button>
          </div>
        </div>
      </section>

      <BookSessionSheet child={bookFor} onClose={() => setBookFor(null)} />
    </div>
  );
};

export default HomeTab;
