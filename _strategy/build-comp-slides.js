const pptxgen = require('pptxgenjs');
const pres = new pptxgen(); pres.layout='LAYOUT_16x9';
pres.theme={headFontFace:'Georgia',bodyFontFace:'Calibri'};
const NAVY='14213D', GOLD='C9A227', INK='1F2937', MUTE='6B7280', BG='FAF8F3', LINE='D6D3CC', TEAL='2F6F73';

// Slide 1: positioning map
let s=pres.addSlide(); s.background={color:BG};
s.addText('D',{x:7.2,y:-0.6,w:3.2,h:4.2,fontFace:'Georgia',fontSize:300,color:'F1EDE4',bold:true,isTextBox:true,margin:0});
s.addText('COMPETITIVE LANDSCAPE',{x:0.5,y:0.35,w:6,h:0.3,fontSize:10,color:GOLD,bold:true,charSpacing:3,isTextBox:true,margin:0});
s.addText('The middle of the market is wide open',{x:0.5,y:0.65,w:8.5,h:0.55,fontFace:'Georgia',fontSize:24,color:NAVY,isTextBox:true,margin:0});
// axes
const X0=0.9,Y0=1.45,W=5.0,H=3.5;
s.addShape(pres.shapes.LINE,{x:X0,y:Y0+H,w:W,h:0,line:{color:INK,width:1}});
s.addShape(pres.shapes.LINE,{x:X0,y:Y0,w:0,h:H,line:{color:INK,width:1}});
s.addText('Power-5 head coaches & stars  →  assistants, mid-major, D-II/III',{x:X0,y:Y0+H+0.05,w:W,h:0.3,fontSize:9,color:MUTE,isTextBox:true,margin:0,align:'center'});
s.addText('Football & men\'s-led  →  women\'s & all sports',{x:X0-0.25-H/2,y:Y0+H/2-0.15,w:H,h:0.3,fontSize:9,color:MUTE,rotate:270,isTextBox:true,margin:0,align:'center',});
// white-space zone
s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x:X0+W*0.6,y:Y0+0.1,w:W*0.38,h:H*0.42,fill:{color:GOLD,transparency:85},line:{color:GOLD,width:1,dashType:'dash'},rectRadius:0.08});
const pts=[ // [name,x,y,type]  x,y in 0..1, y=1 top
 ['CAA',0.08,0.12,'a'],['Athletes First',0.16,0.24,'a'],['Octagon',0.26,0.36,'a'],['The Team',0.12,0.48,'a'],
 ['Kauffman',0.36,0.2,'b'],['Coaches Inc.',0.42,0.52,'b'],['BDS Agency',0.5,0.66,'b'],
 ['Parker',0.3,0.62,'s'],['TurnkeyZRG',0.22,0.74,'s'],['Dexter Sports Co.',0.82,0.86,'d']];
pts.forEach(([n,px,py,t])=>{
  const cx=X0+px*W, cy=Y0+(1-py)*H, r=t==='d'?0.2:0.12;
  const col={a:NAVY,b:TEAL,s:'FFFFFF',d:GOLD}[t];
  s.addShape(pres.shapes.OVAL,{x:cx-r/2,y:cy-r/2,w:r,h:r,fill:{color:col},line:{color:t==='s'?NAVY:col,width:1.25}});
  s.addText(n,{x:cx+r/2+0.05,y:cy-0.12,w:1.6,h:0.24,fontSize:t==='d'?11:9,bold:t==='d',color:t==='d'?NAVY:INK,isTextBox:true,margin:0});
});
// legend
const lg=[['Elite agents',NAVY,NAVY],['Boutique coach agents',TEAL,TEAL],['School-paid search firms','FFFFFF',NAVY]];
lg.forEach(([n,f,l],i)=>{s.addShape(pres.shapes.OVAL,{x:X0+0.1+i*1.75,y:1.25,w:0.11,h:0.11,fill:{color:f},line:{color:l,width:1}});
 s.addText(n,{x:X0+0.26+i*1.75,y:1.19,w:1.5,h:0.22,fontSize:8,color:MUTE,isTextBox:true,margin:0});});
// right panel
const RX=6.45;
const stats=[['~2/3','of full-time assistant coaches are women: the pipeline we serve*'],
 ['46%','of coaches for women\'s college teams are women (2024); just 6 in 100 for men\'s teams*'],
 ['$7B','CAA valuation in 2023, up from $1.1B in 2014. Capital is paying for rosters']];
stats.forEach(([n,t],i)=>{const y=1.6+i*1.05;
 s.addShape(pres.shapes.LINE,{x:RX,y:y,w:0,h:0.8,line:{color:GOLD,width:2.5}});
 s.addText(n,{x:RX+0.15,y:y-0.03,w:3,h:0.42,fontFace:'Georgia',fontSize:22,color:NAVY,bold:true,isTextBox:true,margin:0});
 s.addText(t,{x:RX+0.15,y:y+0.38,w:3.0,h:0.45,fontSize:9.5,color:INK,isTextBox:true,margin:0,valign:'top'});});
s.addText('Positioning is illustrative. *The Collective Think Tank, Women in NCAA Intercollegiate Athletics: The Legacy Revisited (2026), via WIA Report. CAA: Sportico, Pollstar.',{x:0.5,y:5.3,w:9,h:0.2,fontSize:7,color:MUTE,isTextBox:true,margin:0});
s.addNotes('Women are nearly two-thirds of full-time assistant coaches but only 46% of coaches for women\'s teams and 6 in 100 for men\'s teams (Collective Think Tank, 2026). Big agencies fight over Power-5 head coaches. Boutiques like BDS stop at women\'s basketball. Nobody serves women coaches and assistants across all sports at mid-major and below. That is Dexter\'s lane.');

// Slide 2: comp table
s=pres.addSlide(); s.background={color:BG};
s.addText('WHO WE COMPETE WITH',{x:0.5,y:0.35,w:6,h:0.3,fontSize:10,color:GOLD,bold:true,charSpacing:3,isTextBox:true,margin:0});
s.addText('Capital is flowing into representation',{x:0.5,y:0.65,w:9,h:0.55,fontFace:'Georgia',fontSize:24,color:NAVY,isTextBox:true,margin:0});
const hdr=o=>({text:o,options:{bold:true,color:'FFFFFF',fill:{color:NAVY},fontSize:9}});
const c=(t,o={})=>({text:t,options:Object.assign({fontSize:8.5,color:INK},o)});
const rows=[[hdr('Company'),hdr('Model'),hdr('Scale'),hdr('Reported financials / transactions')],
 [c('CAA Sports',{bold:true}),c('Elite agent, ~3–4%'),c('50+ FBS coaches'),c('~$578M sports revenue (2024); ~$7B valuation in 2023 Artémis deal')],
 [c('The Team (ex-Wasserman)',{bold:true}),c('Elite agent'),c('~4,000 staff'),c('#2 sports agency; Providence Equity founder buyout (Jul 2026)')],
 [c('Athletes First',{bold:true}),c('Athlete & coach agent'),c('450+ clients'),c('$50M valuation (2015); VC-led majority buyout since')],
 [c('The BDS Agency',{bold:true}),c('Boutique coach agent'),c('200+ D-I renegotiations'),c('Private; none reported. Closest comp')],
 [c('Parker Executive Search',{bold:true}),c('School-paid search'),c('1,750+ searches'),c('$60K–$120K per head-coach search')],
 [c('TurnkeyZRG',{bold:true}),c('School-paid search'),c('200+ athletics searches'),c('Acquired by PE-backed ZRG (2021)')],
 [c('Opendorse',{bold:true}),c('NIL platform'),c('100K+ athletes'),c('~$26M–$40M raised; $20M round (2022)')],
 [c('Dexter Sports Co.',{bold:true,color:NAVY}),c('Coach agent + placement desk',{color:NAVY}),c('Women coaches, all sports',{color:NAVY}),c('3% fee, $6K floor; seed stage',{color:NAVY,bold:true})]];
s.addTable(rows,{x:0.5,y:1.35,w:9,colW:[1.9,1.8,1.7,3.6],rowH:0.36,border:{type:'solid',pt:0.5,color:LINE},fill:{color:'FFFFFF'},valign:'middle',margin:0.05});
// highlight last row
s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.35+0.36*8,w:0.06,h:0.36,fill:{color:GOLD},line:{color:GOLD}});
s.addText('Our edge: founder with a Juris Masters in contracting & compliance, a decade of corporate partnerships and major gifts, SEC university advancement experience, and a D-I playing career.',{x:0.5,y:4.75,w:9,h:0.4,fontSize:9.5,italic:true,color:TEAL,isTextBox:true,margin:0});
s.addText('Sources: Sportico, Pollstar, SportsBusiness Journal, Front Office Sports, CBS Sports, Hunt Scanlon, SportBusiness, company sites. Private firms do not report financials.',{x:0.5,y:5.3,w:9,h:0.2,fontSize:7,color:MUTE,isTextBox:true,margin:0});
pres.writeFile({fileName:'dexter-comp-slides.pptx'}).then(()=>console.log('done'));
