
const raw=`**To my dearest bestie,**
**Happy Birthday! ❤️🎂**
I honestly don't know where to begin, because whenever I think about you and our friendship, I realize that you mean so much more to me than the word **“friend”** can ever explain.
We started as two people who met online just because we were going to study at the same university. At that time, I never imagined that someone I met like that would eventually become such an important part of my life.
But somehow, you did.
Before university even started, we became close. We would spend so much time talking, especially on those WhatsApp calls while playing UNO together. We talked about random things, laughed at stupid things, shared stories, and slowly became comfortable enough to be completely ourselves around each other.
And then university started, and our friendship became something real.
We got to spend time together, roam around beautiful places in Sylhet, make random plans, laugh together, and create memories that I know I'll remember for a very long time.
But honestly, **those aren't even the main reasons you are so special to me.**
The real reason is the way you became something I had always wanted in my life.
**A friend who feels like a sister.**
I've always wanted to have that kind of sibling-like friendship—someone who would care about me, scold me, tell me what I'm doing wrong, give me advice even when I didn't ask for it, and sometimes act like they have every right to boss me around. 😂
And somehow, **you became exactly that person.**
You have this strange **sisterly authority over me** that I can't even explain. 😭 You can scold me, lecture me, question my decisions, tell me what I should or shouldn't do, and somehow I still listen to you more than I probably should. 😂
Sometimes you're my best friend.
Sometimes you're the annoying sister I never asked for.
Sometimes you're the person I can laugh with over absolutely nothing.
And sometimes, when I genuinely need someone, you're simply **there**.
And I think that's what makes you so precious to me.
Of course, we fight.
**God, we fight a lot.** 😭😂
We can get annoyed at each other over the smallest things, argue, misunderstand each other, and sometimes probably think, *“Why the hell am I even friends with this person?”* 😂
But even after all those fights, there is always that feeling underneath everything that **we care about each other too much to actually stay apart.**
That's what makes our bond feel like siblings to me.
Siblings fight.
Siblings annoy each other.
Siblings sometimes get angry and don't talk.
But deep down, the love doesn't disappear.
And that's exactly how I feel about you.
I don't think I ever properly told you how grateful I am that you came into my life.
You made my university life feel less unfamiliar.
You gave me someone to laugh with, someone to roam around with, someone to talk to, someone to argue with, someone to share stupid little moments with—and most importantly, **someone who feels like family.**
I genuinely hope our friendship stays like this even when university is over and life becomes completely different.
Because I don't want you to be just a **“university friend”** that I remember years later.
I want you to remain the person I can randomly call years from now, talk nonsense with, argue with, ask for advice from, and laugh about our old memories with.
I want us to look back one day and say,
*"Remember when we first met online because we were going to the same university?"*
*"Remember all those WhatsApp calls?"*
*"Remember playing UNO together before university even started?"*
*"Remember all the places we roamed around in Sylhet?"*
*"Remember how much we used to fight?"* 😂
And then laugh about all of it.
You are genuinely one of those people I'm grateful life introduced me to.
I may not always express it properly, and sometimes our fights probably make it seem otherwise, but **you mean a lot to me.**
More than a friend.
More like the sister I always wished I could have as a friend.
So on your birthday, I just want you to know that I'm really, really grateful for you.
Thank you for being my bestie.
Thank you for being my sister.
Thank you for caring about me enough to scold me.
Thank you for tolerating me even when I'm being impossible.
And thank you for giving me the kind of friendship I always wanted but never knew I would actually find.
**Happy Birthday, my dear bestie. ❤️**
May Allah bless you with endless happiness, peace, success, and everything your heart wishes for. I hope you always stay happy, keep smiling, and never forget how loved and valued you are by the people who truly care about you.
And no matter how much we fight, **you'll always be my sister by choice.** 🫂❤️
Here's to all the memories we've already made—and all the ones we haven't made yet.
**Happy Birthday, sister. ❤️🎂**
**Love you always. 🫶🏻**`;

const $=id=>document.getElementById(id), sc=$('sc'), btn=$('btn');
const chars=[], times=[]; let t=0, idx=0, start=0, raf=0, playing=false;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const pause=c=>'.!?'.includes(c)?420:c===','?170:c==='—'||c===':'?220:c.charCodeAt(0)>0x2000?140:0;

raw.split('\n').forEach(line=>{
  const p=document.createElement('p');
  line.split(/(\*\*.+?\*\*|\*.+?\*)/).forEach(seg=>{
    if(!seg)return;
    let el=p,s=seg;
    if(s.startsWith('**')){el=document.createElement('b');s=s.slice(2,-2);p.append(el)}
    else if(s.startsWith('*')){el=document.createElement('i');s=s.slice(1,-1);p.append(el)}
    s.split(/(\s+)/).forEach(w=>{
      if(!w)return;
      if(/^\s+$/.test(w)){el.append(' ');t+=30;return}
      const ws=document.createElement('span');ws.className='w';
      Array.from(w).forEach(ch=>{
        const cs=document.createElement('span');cs.className='c';cs.textContent=ch;ws.append(cs);
        chars.push(cs);times.push(t);t+=(ch.charCodeAt(0)>0x2000?0:38)+pause(ch);
      });
      el.append(ws);
    });
  });
  t+=550;
  $('text').append(p);
});

function tick(now){
  const e=now-start;
  while(idx<chars.length&&times[idx]<=e){chars[idx++].classList.add('on')}
  if(idx>0){
    const r=chars[idx-1].getBoundingClientRect(),b=sc.getBoundingClientRect();
    const target=sc.scrollTop+(r.bottom-(b.top+b.height*.6));
    if(target>sc.scrollTop)sc.scrollTop+=(target-sc.scrollTop)*.08;
  }
  if(idx<chars.length)raf=requestAnimationFrame(tick);else finish();
}
function finish(){
  playing=false;btn.textContent='Read again';btn.classList.remove('hide');
  btn.onclick=replay;
}
function begin(){
  playing=true;idx=0;btn.textContent='Show all';btn.onclick=showAll;
  if(reduce){showAll();return}
  start=performance.now();raf=requestAnimationFrame(tick);
}
function showAll(){cancelAnimationFrame(raf);chars.forEach(c=>c.classList.add('on'));idx=chars.length;finish()}
function replay(){cancelAnimationFrame(raf);chars.forEach(c=>c.classList.remove('on'));sc.scrollTo({top:0,behavior:'smooth'});setTimeout(begin,900)}

let opened=false;
$('seal').onclick=()=>{
  if(opened)return;opened=true;
  const env=$('env');
  env.classList.add('open');
  setTimeout(()=>env.classList.add('rise'),900);
  setTimeout(()=>document.body.classList.add('read'),2700);
  setTimeout(begin,4300);
};

const music = $('music');
const musicBtn = $('musicBtn');

musicBtn.onclick = async () => {
  if (music.paused) {
    try {
      await music.play();

      musicBtn.textContent = '❚❚';
      musicBtn.classList.add('playing');
      musicBtn.setAttribute('aria-label', 'Pause music');

    } catch (error) {
      console.log('Music could not start:', error);
    }

  } else {
    music.pause();

    musicBtn.textContent = '♫';
    musicBtn.classList.remove('playing');
    musicBtn.setAttribute('aria-label', 'Play music');
  }
};
