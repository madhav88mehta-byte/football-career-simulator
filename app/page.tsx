"use client";

import { useState } from "react";

const fixtures = [
  ["SAT 15 AUG", "Riverside FC", "HOME", "19:45"],
  ["WED 19 AUG", "Northbridge United", "AWAY", "20:00"],
  ["SUN 23 AUG", "Kingsport City", "HOME", "16:30"],
];

const squad = [
  { name: "Ethan Cole", pos: "ST", ovr: 82, age: 24, form: "+3" },
  { name: "Luca Moretti", pos: "CAM", ovr: 85, age: 22, form: "+5" },
  { name: "Daniel Okafor", pos: "RW", ovr: 79, age: 21, form: "+2" },
  { name: "Mateo Silva", pos: "CM", ovr: 83, age: 27, form: "0" },
  { name: "Noah Bennett", pos: "CB", ovr: 81, age: 25, form: "+1" },
];

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [notice, setNotice] = useState("");

  const nav = ["Overview", "Squad", "Transfers", "Fixtures", "League", "Training", "Youth", "Finances"];
  const action = (text: string) => { setNotice(text); setTimeout(() => setNotice(""), 2600); };

  return (
    <main className="min-h-screen bg-[#080b10]">
      <header className="sticky top-0 z-20 border-b border-[#27303c] bg-[#080b10]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#b7ff39] text-xl font-black text-black">FC</div>
            <div><p className="text-xs font-bold tracking-[.28em] text-[#b7ff39]">CAREER MODE</p><h1 className="text-lg font-black tracking-tight">FOOTBALL SIMULATOR</h1></div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <div><p className="text-[10px] uppercase tracking-widest text-[#8e99a8]">Season</p><p className="font-bold">2026 / 27</p></div>
            <div><p className="text-[10px] uppercase tracking-widest text-[#8e99a8]">Budget</p><p className="font-bold text-[#b7ff39]">€86.4M</p></div>
            <div><p className="text-[10px] uppercase tracking-widest text-[#8e99a8]">Board confidence</p><p className="font-bold">78%</p></div>
            <button onClick={() => action("Career autosaved successfully.")} className="rounded-lg border border-[#27303c] px-4 py-2 text-sm font-bold hover:border-[#b7ff39]">SAVE CAREER</button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1500px]">
        <aside className="hidden w-56 shrink-0 border-r border-[#27303c] px-4 py-6 lg:block">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#667281]">Management</p>
          <nav className="space-y-1">
            {nav.map(item => <button key={item} onClick={() => setActive(item)} className={`w-full rounded-lg px-3 py-3 text-left text-sm font-bold transition ${active===item ? "bg-[#b7ff39] text-black" : "text-[#aab3bf] hover:bg-[#151b24] hover:text-white"}`}>{item}</button>)}
          </nav>
          <div className="mt-10 rounded-xl border border-[#27303c] bg-[#10151d] p-4">
            <p className="text-xs font-bold text-[#8e99a8]">NEXT BOARD REVIEW</p><p className="mt-1 font-black">In 14 days</p><div className="mt-3 h-1.5 overflow-hidden rounded bg-[#27303c]"><div className="h-full w-[78%] bg-[#b7ff39]" /></div><p className="mt-2 text-xs text-[#8e99a8]">Keep winning to improve confidence.</p>
          </div>
        </aside>

        <section className="min-w-0 flex-1 px-5 py-7 md:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="text-sm font-bold text-[#b7ff39]">MONDAY, 10 AUGUST 2026</p><h2 className="mt-1 text-4xl font-black tracking-tight md:text-5xl">RIVERSIDE FC</h2><p className="mt-2 text-[#8e99a8]">Manager: <span className="text-white">Madhav</span> · Premier Division · Position <span className="text-white">4th</span></p></div>
            <button onClick={() => action("Advancing to the next matchday…")} className="rounded-xl bg-[#b7ff39] px-6 py-3 font-black text-black shadow-[0_0_30px_rgba(183,255,57,.12)] hover:bg-white">NEXT MATCHDAY →</button>
          </div>

          {notice && <div className="mb-5 rounded-xl border border-[#b7ff39]/40 bg-[#b7ff39]/10 px-4 py-3 text-sm font-bold text-[#b7ff39]">✓ {notice}</div>}

          <div className="grid gap-5 xl:grid-cols-[1.4fr_.8fr_.8fr]">
            <div className="rounded-2xl border border-[#27303c] bg-[#10151d] p-6">
              <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-[#8e99a8]">Next fixture</p><h3 className="mt-1 text-2xl font-black">Riverside FC <span className="text-[#667281]">vs</span> Northbridge United</h3></div><span className="rounded-full bg-[#151b24] px-3 py-1 text-xs font-bold text-[#b7ff39]">HOME</span></div>
              <div className="my-7 grid grid-cols-3 items-center text-center"><div><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#18210f] text-2xl font-black text-[#b7ff39]">RF</div><p className="mt-2 font-bold">Riverside FC</p></div><div><p className="text-xs uppercase tracking-widest text-[#8e99a8]">Saturday</p><p className="text-3xl font-black">19:45</p><p className="text-xs text-[#8e99a8]">15 Aug</p></div><div><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#222733] text-2xl font-black">NU</div><p className="mt-2 font-bold">Northbridge</p></div></div>
              <div className="grid grid-cols-3 gap-2 border-t border-[#27303c] pt-5 text-center"><div><p className="text-xs text-[#8e99a8]">FORM</p><p className="font-black">W W D W W</p></div><div><p className="text-xs text-[#8e99a8]">TACTIC</p><p className="font-black">4-3-3</p></div><div><p className="text-xs text-[#8e99a8]">CHEMISTRY</p><p className="font-black text-[#b7ff39]">91%</p></div></div>
            </div>

            <Stat title="LEAGUE POSITION" value="4th" sub="+2 places" accent />
            <Stat title="TEAM RATING" value="83" sub="↑ 1 this month" />
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-2xl border border-[#27303c] bg-[#10151d] p-6">
              <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-[#8e99a8]">Squad snapshot</p><h3 className="text-xl font-black">First team</h3></div><button onClick={() => setActive("Squad")} className="text-xs font-bold text-[#b7ff39]">VIEW SQUAD →</button></div>
              <div className="space-y-2">{squad.map((p,i)=><div key={p.name} className="flex items-center justify-between rounded-xl bg-[#151b24] px-4 py-3"><div className="flex items-center gap-3"><span className="w-5 text-xs text-[#667281]">{i+1}</span><div className="grid h-9 w-9 place-items-center rounded-full bg-[#222a34] text-xs font-black">{p.pos}</div><div><p className="text-sm font-bold">{p.name}</p><p className="text-xs text-[#8e99a8]">{p.age} yrs · {p.pos}</p></div></div><div className="flex items-center gap-6"><span className="text-xs font-bold text-[#b7ff39]">{p.form}</span><span className="text-lg font-black">{p.ovr}</span></div></div>)}</div>
            </div>
            <div className="rounded-2xl border border-[#27303c] bg-[#10151d] p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-[#8e99a8]">Schedule</p><h3 className="text-xl font-black">Upcoming fixtures</h3></div><button onClick={() => setActive("Fixtures")} className="text-xs font-bold text-[#b7ff39]">FULL CALENDAR →</button></div><div className="space-y-3">{fixtures.map((f,i)=><div key={f[0]} className="flex items-center justify-between border-b border-[#27303c] pb-3 last:border-0"><div><p className="text-[10px] font-bold tracking-widest text-[#8e99a8]">{f[0]}</p><p className="mt-1 font-bold">{f[1]}</p></div><div className="text-right"><p className="text-xs font-bold text-[#b7ff39]">{f[2]}</p><p className="text-sm font-black">{f[3]}</p></div></div>)}</div></div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <ActionCard icon="↗" title="TRANSFER MARKET" text="3 shortlisted players" onClick={() => setActive("Transfers")} />
            <ActionCard icon="◎" title="TRAINING" text="Session ready · 4 drills" onClick={() => setActive("Training")} />
            <ActionCard icon="★" title="YOUTH ACADEMY" text="2 prospects promoted" onClick={() => setActive("Youth")} />
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({title,value,sub,accent=false}:{title:string,value:string,sub:string,accent?:boolean}) { return <div className="rounded-2xl border border-[#27303c] bg-[#10151d] p-6"><p className="text-xs font-bold tracking-widest text-[#8e99a8]">{title}</p><p className={`mt-5 text-5xl font-black ${accent?"text-[#b7ff39]":""}`}>{value}</p><p className="mt-2 text-xs font-bold text-[#8e99a8]">{sub}</p></div> }
function ActionCard({icon,title,text,onClick}:{icon:string,title:string,text:string,onClick:()=>void}) { return <button onClick={onClick} className="group rounded-2xl border border-[#27303c] bg-[#10151d] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#b7ff39]/60"><div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#151b24] text-lg text-[#b7ff39]">{icon}</span><span className="text-[#667281] group-hover:text-[#b7ff39]">→</span></div><p className="mt-5 text-xs font-bold tracking-widest text-[#8e99a8]">{title}</p><p className="mt-1 font-bold">{text}</p></button> }
