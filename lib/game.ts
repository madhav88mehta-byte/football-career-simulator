export type Player = { id:number; name:string; pos:string; age:number; ovr:number; potential:number; pace:number; shoot:number; pass:number; dribble:number; defend:number; physical:number; form:number; fitness:number; value:number; wage:number };
export type Club = { name:string; short:string; rating:number; budget:number; color:string };

export const players: Player[] = [
{id:1,name:'Ethan Cole',pos:'ST',age:24,ovr:84,potential:88,pace:89,shoot:86,pass:70,dribble:84,defend:32,physical:81,form:82,fitness:94,value:52000000,wage:120000},
{id:2,name:'Luca Moretti',pos:'CAM',age:22,ovr:86,potential:93,pace:82,shoot:78,pass:92,dribble:91,defend:42,physical:67,form:89,fitness:91,value:76000000,wage:145000},
{id:3,name:'Daniel Okafor',pos:'RW',age:21,ovr:81,potential:90,pace:94,shoot:76,pass:75,dribble:92,defend:35,physical:70,form:76,fitness:97,value:48000000,wage:95000},
{id:4,name:'Mateo Silva',pos:'CM',age:27,ovr:84,potential:85,pace:72,shoot:71,pass:94,dribble:82,defend:77,physical:79,form:84,fitness:88,value:43000000,wage:110000},
{id:5,name:'Noah Bennett',pos:'CB',age:25,ovr:83,potential:87,pace:78,shoot:34,pass:76,dribble:58,defend:91,physical:88,form:80,fitness:93,value:39000000,wage:90000},
{id:6,name:'Kai Morgan',pos:'LB',age:23,ovr:79,potential:86,pace:91,shoot:42,pass:72,dribble:77,defend:79,physical:74,form:73,fitness:96,value:30000000,wage:70000},
{id:7,name:'Oliver Grant',pos:'GK',age:28,ovr:82,potential:83,pace:45,shoot:12,pass:68,dribble:18,defend:89,physical:78,form:86,fitness:90,value:26000000,wage:80000},
{id:8,name:'Rafael Costa',pos:'LW',age:20,ovr:77,potential:91,pace:93,shoot:72,pass:74,dribble:89,defend:30,physical:64,form:79,fitness:95,value:35000000,wage:65000},
];

export const opponents = ['Riverside FC','Northbridge United','Kingsport City','Westford Athletic','Harbor Town','Redbridge FC','Oakvale United','Capital FC'];

export function simulateMatch(teamRating:number, opponentRating:number, home=true, mentality='Balanced') {
  const mentalityBonus = mentality==='Attacking' ? 4 : mentality==='Defensive' ? -2 : 0;
  const strength = teamRating + mentalityBonus + (home ? 3 : 0);
  const opponent = opponentRating + (home ? 0 : 2);
  const seed = Math.random();
  const expected = Math.max(.25, (strength-opponent)/18 + 1.15);
  const poisson = (lambda:number) => { let l=Math.exp(-lambda),k=0,p=1; do {k++;p*=Math.random();} while(p>l && k<7); return k-1; };
  let gf=poisson(expected), ga=poisson(Math.max(.25,2.05-expected*.48));
  if(seed>.93) gf++; if(seed<.08) ga++;
  const events:string[]=[];
  const scorers=['Ethan Cole','Luca Moretti','Daniel Okafor','Mateo Silva'];
  for(let i=0;i<gf;i++) events.push(`${15+Math.floor(Math.random()*72)}' ⚽ ${scorers[Math.floor(Math.random()*scorers.length)]}`);
  for(let i=0;i<ga;i++) events.push(`${18+Math.floor(Math.random()*70)}' ⚽ ${['Northbridge striker','Northbridge winger','Northbridge midfielder'][Math.floor(Math.random()*3)]}`);
  if(Math.random()<.34) events.push(`${35+Math.floor(Math.random()*45)}' 🟨 ${Math.random()<.5?'Noah Bennett':'Mateo Silva'}`);
  return {gf,ga,events:events.sort((a,b)=>parseInt(a)-parseInt(b))};
}
