import PageHeader from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Activity, AlertCircle } from "lucide-react";

const assessments = [
  {
    id: "well",
    badge: "Recommended",
    icon: Sparkles,
    title: "5-Domain Wellbeing Screening",
    desc: "A parent-completed check-in across Emotional Wellbeing, Behavior, Attention, Mood and Social, and Safety.",
    duration: "≈ 8 minutes",
    age: "Ages 2–17",
    domains: ["Emotional", "Behavior", "Attention", "Social", "Safety"],
    cta: "Start Screening",
  },
  {
    id: "adhd",
    icon: Brain,
    title: "Attention & Behavior Screening",
    desc: "Based on the NICHQ Vanderbilt scale. Screens for attention difficulties, hyperactivity, and related concerns.",
    duration: "≈ 10 minutes",
    age: "Ages 6–12",
    domains: ["Attention", "Hyperactivity", "Behavior"],
    cta: "Start Screening",
  },
  {
    id: "milestones",
    icon: Activity,
    title: "Developmental Milestones Check",
    desc: "Age-adaptive questions across language, motor, social, and cognitive areas.",
    duration: "≈ 6 minutes",
    age: "Ages 0–10",
    domains: ["Language", "Motor", "Social", "Cognitive"],
    cta: "Start Check",
  },
];

const AssessmentsTab = () => {
  return (
    <div className="pb-6">
      <PageHeader
        title="Assessments"
        subtitle="Regular check-ins help catch issues early — before they grow."
        hero
      />

      {/* Recommendation banner */}
      <section className="px-5 mt-4">
        <div className="rounded-2xl bg-accent-soft border border-accent/30 p-4 flex gap-3">
          <AlertCircle className="h-5 w-5 text-accent-foreground shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Aarav: a gentle nudge</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              We noticed an attention pattern worth exploring together. Speaking with a child psychologist may help.
            </p>
            <button className="text-xs font-semibold text-primary mt-2">
              Book a Session with an Expert →
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 mt-5 space-y-4">
        {assessments.map((a, idx) => (
          <article
            key={a.id}
            className="rounded-[24px] bg-card border border-card-border shadow-card p-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-primary-soft flex items-center justify-center text-primary">
                <a.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {a.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-pill bg-primary text-primary-foreground">
                      {a.badge}
                    </span>
                  )}
                  <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-pill bg-muted text-muted-foreground">
                    {a.age}
                  </span>
                </div>
                <h3 className="font-display text-[19px] leading-tight text-foreground mt-1.5">
                  {a.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {a.domains.map((d) => (
                <span key={d} className="text-[11px] font-medium px-2.5 py-1 rounded-pill bg-primary-soft text-primary">
                  {d}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-muted-foreground">{a.duration}</span>
              <Button className="rounded-xl h-10 px-5 text-sm">{a.cta}</Button>
            </div>
          </article>
        ))}
      </section>

      {/* Past results */}
      <section className="px-5 mt-7">
        <h2 className="font-display text-xl text-foreground mb-3">Your assessment results</h2>
        <div className="space-y-2.5">
          {[
            { name: "Aarav", a: "5-Domain Wellbeing", date: "12 Mar 2026", level: "Monitor", color: "bg-accent text-accent-foreground" },
            { name: "Riya", a: "5-Domain Wellbeing", date: "20 Feb 2026", level: "All Good", color: "bg-primary text-primary-foreground" },
            { name: "Aarav", a: "Milestones Check", date: "04 Jan 2026", level: "All Good", color: "bg-primary text-primary-foreground" },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl bg-card border border-card-border p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name} — {r.a}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{r.date}</p>
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-pill ${r.color}`}>
                {r.level}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssessmentsTab;
