import { ReactNode } from "react";
import {
  Heart, Zap, UtensilsCrossed, MessageCircle, HelpCircle, Clock,
  DoorClosed, Pill, CalendarX, Shield, Bot, Stethoscope,
} from "lucide-react";
import founder from "@/assets/founder-divyansh.jpeg";

export type StoryCard =
  | {
      kind: "intro";
      indicator: number;
      total: number;
    }
  | {
      kind: "story";
      indicator: number;
      total: number;
      icon: ReactNode;
      heading: string;
      body: string;
      tinted?: boolean;
    }
  | { kind: "quote"; indicator: number; total: number }
  | { kind: "cta"; indicator: number; total: number };

const TOTAL = 13; // 12 story + 1 final CTA (intro counts as 1)

export const founderCards: StoryCard[] = [
  { kind: "intro", indicator: 1, total: TOTAL },
  {
    kind: "story", indicator: 2, total: TOTAL,
    icon: <div className="relative"><Heart className="w-10 h-10 text-primary" /><Zap className="w-5 h-5 text-accent absolute -bottom-1 -right-1" /></div>,
    heading: "Every night was terrifying.",
    body: "Small sounds triggered a racing heart, chest pain, and uncontrollable shaking. Panic attacks came almost every night.",
  },
  {
    kind: "story", indicator: 3, total: TOTAL,
    icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
    heading: "Food became another battle.",
    body: "Everyday foods made me physically sick. Diet, health, academics, and confidence — all collapsed together.",
  },
  {
    kind: "story", indicator: 4, total: TOTAL,
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
    heading: "The world called me a coward.",
    body: "Friends reduced my suffering to a character flaw. For years, I believed them — never knowing these were real, diagnosable conditions.",
  },
  {
    kind: "story", indicator: 5, total: TOTAL,
    icon: <HelpCircle className="w-10 h-10 text-primary" />,
    heading: "Nobody had a name for it.",
    body: "What I had were panic attacks and an eating disorder — but in our world, those words simply didn't exist.",
  },
  {
    kind: "story", indicator: 6, total: TOTAL,
    icon: <Clock className="w-10 h-10 text-primary" />,
    heading: "Everyone said 'He'll grow out of it.'",
    body: "That false hope quietly stole years — from childhood through college, nothing changed.",
  },
  {
    kind: "story", indicator: 7, total: TOTAL,
    icon: <DoorClosed className="w-10 h-10 text-primary" />,
    heading: "Four words were never spoken.",
    body: "'See a child psychologist.' Not by a teacher, a relative, or a family friend. That's all it would have taken.",
  },
  {
    kind: "story", indicator: 8, total: TOTAL,
    icon: <Pill className="w-10 h-10 text-primary" />,
    heading: "Four medicines a day.",
    body: "By the time I got help, symptoms had compounded for a decade. Heavy daily medication became the only way to function.",
  },
  {
    kind: "story", indicator: 9, total: TOTAL,
    icon: <CalendarX className="w-10 h-10 text-primary" />,
    heading: "Even today, I depend on medication.",
    body: "Skipping it for four days brings everything back. All of it — entirely preventable with early support.",
  },
  {
    kind: "story", indicator: 10, total: TOTAL, tinted: true,
    icon: <Shield className="w-10 h-10 text-primary" />,
    heading: "Early Screening Tools.",
    body: "Catch patterns before they become disorders. Give parents the awareness mine never had.",
  },
  {
    kind: "story", indicator: 11, total: TOTAL, tinted: true,
    icon: <Bot className="w-10 h-10 text-primary" />,
    heading: "Super Parent AI.",
    body: "A 24/7 guide with personalized, stage-by-stage insights — the support my parents needed but never found.",
  },
  {
    kind: "story", indicator: 12, total: TOTAL, tinted: true,
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    heading: "Real Psychologist Access.",
    body: "Expert sessions within the platform. No parent should be left to figure it out alone.",
  },
  { kind: "quote", indicator: 13, total: TOTAL },
];

export { founder };
