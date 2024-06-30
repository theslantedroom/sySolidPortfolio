import{e as ce,b as ie,f as de,o as _e,g as p,d as $,i as s,h as D,c as f,j as o,r as L,k as z,t as v,a as C,s as ue}from"./entry-client-48f648c5.js";import{B as me}from"./bowser-269eb377.js";const ge="_aboutTitle_1x1rp_1",pe="_description_1x1rp_8",$e="_webDevelopmentInfo_1x1rp_13",ve="_skills_1x1rp_20",be="_playStoreImg_1x1rp_28",fe="_skill_1x1rp_20",he={aboutTitle:ge,description:pe,webDevelopmentInfo:$e,skills:ve,playStoreImg:be,skill:fe},ke="_portfolio_ob10k_1",ye="_portfolio__navigation_ob10k_10",Se="_portfolio__title_ob10k_16",we="_portfolio__main_ob10k_27",xe="_portfolio__image_ob10k_33",Ce="_portfolio__info_ob10k_45",Te="_portfolio__description_ob10k_49",Ie="_portfolio__technologies_ob10k_57",Le="_portfolio__technology_ob10k_64",Pe="_portfolio__nav_ob10k_10",Me="_portfolio__nav_button_ob10k_88",je="_playStoreImg_ob10k_102",De="_linkBtnStack_ob10k_108",g={portfolio:ke,portfolio__navigation:ye,portfolio__title:Se,portfolio__main:we,"portfolio__image-container":"_portfolio__image-container_ob10k_33",portfolio__image:xe,portfolio__info:Ce,portfolio__description:Te,portfolio__technologies:Ie,portfolio__technology:Le,portfolio__nav:Pe,portfolio__nav_button:Me,playStoreImg:je,linkBtnStack:De},Ue=[{title:"Idle Trillionaire",chipColor:"#000961",hasDemo:!0,description:"Idle Trillionaire is a game about becoming a trillionaire. You are a seemingly normal person, but how will that break your fragile human mind when you are earning billions each second and realize madness is closer than your dreams of a trillion?",imageUrl:"img/responsiveTrillionaire.png",technologies:["Single Player","Casual","Offline Progress","Load/Save","Milestones","Prestige","Unlock Cards"],link:"https://www.idletrillionaire.com/",playStoreLink:"https://play.google.com/store/apps/details?id=com.idletrillionaire.www",itchIoLink:"https://theslantedroom.itch.io/idle-trillionaire",playWebLink:"https://www.idletrillionaire.com/",epicGamesLink:"https://store.epicgames.com/en-US/p/idle-trillionaire-17afee",iosStoreLink:"https://apps.apple.com/us/app/idle-trillionaire-money-game/id6473220418",steamStoreLink:"https://store.steampowered.com/app/2753100/Idle_Trillionaire/"},{title:"Turn Based Boxing",chipColor:"#870000",hasDemo:!0,description:"In this turn-based (optional auto-battler) simulation game, you'll recruit, train, and manage a roster of boxing champions as you strive to build the ultimate fighting dynasty.",imageUrl:"img/responsivehHbc.png",technologies:["Create Your Gym","Recruit Boxing Legends","Complete Quests","Perma-Death","Unlock strategies","Unlock Perks","Turn Based","Auto-Fight"],link:"https://theslantedroom.itch.io/hbc-boxing",itchIoLink:"https://theslantedroom.itch.io/hbc-boxing",playWebLink:"https://www.hbcboxing.online/",steamStoreLink:"https://store.steampowered.com/app/2990450/Turn_Based_Boxing_Legends/"},{title:"Kitty Krush",chipColor:"#8f3996",hasDemo:!0,description:"Like Poker but with cats.... (coming 2025)",imageUrl:"img/responsiveKittyKrush.png",technologies:["Rogue like deck builder","Cat cards","Unlock deck modifier cards","Perma-Death"],link:"https://theslantedroom.itch.io/hbc-boxing",playWebLink:"https://kitty-krush.vercel.app/"},{title:"Idle Influencer",chipColor:"#300c66",hasDemo:!0,description:"Idle Influencer takes place inside the Idle Trillionaire universe. Welcome to the trillionaire's social media journey.",imageUrl:"img/responsiveInfluencer.png",technologies:["Casual","Offline Progress","Load/Save","Milestones","Prestige","Unlock Cards","Unlock Meme Videos"],link:"https://idle-influencer.vercel.app/",playStoreLink:"https://play.google.com/store/apps/details?id=com.idle_influencer.www&hl=en_CA",itchIoLink:"https://theslantedroom.itch.io/idle-influencer",playWebLink:"https://idle-influencer.vercel.app/",epicGamesLink:"",iosStoreLink:"https://apps.apple.com/us/app/idle-influencer-followers-lol/id6474143547"}],Be=v("<div><h1></h1><div><button>&lt;</button><button>></button></div><img><p></p><!#><!/><div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/>"),Ge=v("<ul>"),We=v("<li>"),Re=v('<img src="img/get-it-on-google-play.png" alt="getOnGooglePlay">'),Ae=v('<img src="img/get-it-on-ios.png" alt="get-it-on-ios">'),Ne=v('<img alt="get-it-on-steam-soon">'),ze=v('<img src="img/get-it-on-epic.png" alt="get-it-on-epic">'),Ee=v('<img alt="playOnItchIo">'),He=v('<img alt="play_in_browser">'),Ke=({projects:l=Ue})=>{const[c,d]=ie(0),[e,k]=ie(l[0]);de(()=>{k(l[c()])},c()),_e(async()=>{l.forEach(a=>{console.log("load",a.imageUrl);const b=new Image;b.src=a.imageUrl})});const _=()=>{d(a=>a===l.length-1?0:a+1)},w=()=>{d(a=>a===0?l.length-1:a-1)};function x(){window.open(e().link,"_blank")}return(()=>{const a=p(Be),b=a.firstChild,P=b.nextSibling,T=P.firstChild,M=T.nextSibling,y=P.nextSibling,j=y.nextSibling,B=j.nextSibling,[I,E]=$(B.nextSibling),S=I.nextSibling,H=S.firstChild,[K,te]=$(H.nextSibling),oe=K.nextSibling,[G,ne]=$(oe.nextSibling),i=G.nextSibling,[W,O]=$(i.nextSibling),q=W.nextSibling,[R,F]=$(q.nextSibling),J=R.nextSibling,[A,V]=$(J.nextSibling),X=A.nextSibling,[Y,Q]=$(X.nextSibling);return s(b,()=>e().title),T.$$click=w,M.$$click=_,y.$$click=x,s(j,()=>e().description),s(a,(()=>{const t=D(()=>!!e().technologies.length);return()=>t()?(()=>{const n=p(Ge);return s(n,()=>e().technologies.map(r=>(()=>{const u=p(We);return s(u,r),f(m=>{const N=g.portfolio__technology,U=e().chipColor;return N!==m._v$11&&o(u,m._v$11=N),U!==m._v$12&&((m._v$12=U)!=null?u.style.setProperty("background-color",U):u.style.removeProperty("background-color")),m},{_v$11:void 0,_v$12:void 0}),u})())),f(()=>o(n,g.portfolio__technologies)),n})():null})(),I,E),s(S,(()=>{const t=D(()=>!!e().playStoreLink);return()=>t()?(()=>{const n=p(Re);return n.$$click=()=>{window.open(e().playStoreLink,"_blank")},f(()=>o(n,g.playStoreImg)),L(),n})():null})(),K,te),s(S,(()=>{const t=D(()=>!!e().iosStoreLink);return()=>t()?(()=>{const n=p(Ae);return n.$$click=()=>{window.open(e().iosStoreLink,"_blank")},f(()=>o(n,g.playStoreImg)),L(),n})():null})(),G,ne),s(S,(()=>{const t=D(()=>!!e().steamStoreLink);return()=>t()?(()=>{const n=p(Ne);return n.$$click=()=>{window.open(e().steamStoreLink,"_blank")},f(r=>{const u=g.playStoreImg,m=e().steamStoreLink==="#"?"img/get-it-on-steam-soon.png":"img/get-it-on-steam.png";return u!==r._v$13&&o(n,r._v$13=u),m!==r._v$14&&z(n,"src",r._v$14=m),r},{_v$13:void 0,_v$14:void 0}),L(),n})():null})(),W,O),s(S,(()=>{const t=D(()=>!!e().epicGamesLink);return()=>t()?(()=>{const n=p(ze);return n.$$click=()=>{window.open(e().epicGamesLink,"_blank")},f(()=>o(n,g.playStoreImg)),L(),n})():null})(),R,F),s(S,(()=>{const t=D(()=>!!e().itchIoLink);return()=>t()?(()=>{const n=p(Ee);return n.$$click=()=>{window.open(e().itchIoLink,"_blank")},f(r=>{const u=g.playStoreImg,m=e().hasDemo?"img/play_on_itchio_demo.png":"img/play_on_itchio.png";return u!==r._v$15&&o(n,r._v$15=u),m!==r._v$16&&z(n,"src",r._v$16=m),r},{_v$15:void 0,_v$16:void 0}),L(),n})():null})(),A,V),s(S,(()=>{const t=D(()=>!!e().playWebLink);return()=>t()?(()=>{const n=p(He);return n.$$click=()=>{window.open(e().playWebLink,"_blank")},f(r=>{const u=g.playStoreImg,m=e().hasDemo?"img/play_in_browser_demo.png":"img/play_in_browser.png";return u!==r._v$17&&o(n,r._v$17=u),m!==r._v$18&&z(n,"src",r._v$18=m),r},{_v$17:void 0,_v$18:void 0}),L(),n})():null})(),Y,Q),f(t=>{const n=g.portfolio,r=g.portfolio__title,u=g.portfolio__navigation,m=g.portfolio__nav_button,N=g.portfolio__nav_button,U=g.portfolio__image,le=e().imageUrl,re=e().imageUrl,se=g.portfolio__description,ae=g.linkBtnStack;return n!==t._v$&&o(a,t._v$=n),r!==t._v$2&&o(b,t._v$2=r),u!==t._v$3&&o(P,t._v$3=u),m!==t._v$4&&o(T,t._v$4=m),N!==t._v$5&&o(M,t._v$5=N),U!==t._v$6&&o(y,t._v$6=U),le!==t._v$7&&z(y,"src",t._v$7=le),re!==t._v$8&&z(y,"alt",t._v$8=re),se!==t._v$9&&o(j,t._v$9=se),ae!==t._v$10&&o(S,t._v$10=ae),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),L(),a})()};ce(["click"]);const Oe=v('<div id="web-development-nav">'),qe=({skills:l=["JavaScript","TypeScript","Python","C","React","Meteor.js","Capacitor.js","Android Studio","Jest","Cypress","material UI","webRTC","HTML","CSS","Flask","GIT","Mongo","XState","XCode","Sqlite3","Postgres"]})=>(()=>{const c=p(Oe);return s(c,C(Ke,{})),f(()=>o(c,he.webDevelopmentInfo)),c})(),Fe=qe,Je="_banner_u5lq1_1",Ve={banner:Je},Xe=v('<div><canvas id="canvas1">'),Ye=({mainTitle:l="The Slanted Room"})=>{const[c,d]=ie(!0);return _e(()=>{const k=me.getParser(window?.navigator?.userAgent).getPlatformType(!0)==="mobile";d(k);const _=document.createElement("script");_.src=k?"./js/particlesDisabled.js":"./js/particles.js",document.body.appendChild(_)}),(()=>{const e=p(Xe);return f(()=>o(e,Ve.banner)),e})()},Qe=Ye,Ze=v('<span rel="noopener noreferrer">'),Z=({text:l,url:c})=>{const d={color:"#ffbf00",textDecoration:"none !important",cursor:"pointer"};return(()=>{const e=p(Ze);return e.$$click=()=>window.open(c,"_blank"),ue(e,d),s(e,l),L(),e})()};ce(["click"]);const et="_aboutContainer_jtyas_1",tt="_aboutSection_jtyas_32",ot="_aboutTitle_jtyas_37",nt="_aboutText_jtyas_44",it="_noPadding_jtyas_51",lt="_aboutImage_jtyas_56",h={aboutContainer:et,aboutSection:tt,aboutTitle:ot,aboutText:nt,noPadding:it,aboutImage:lt},rt=v('<div><div><div><span>The Slanted Room creates </span><!#><!/><span>, </span><!#><!/><span> and </span><!#><!/><span> games.</span></div><div><span>We also license </span><!#><!/><span>.</span></div><img src="img/pic1.png" alt="profile img"></div><div><p>steve@theslantedroom.ca'),st=()=>(()=>{const l=p(rt),c=l.firstChild,d=c.firstChild,e=d.firstChild,k=e.nextSibling,[_,w]=$(k.nextSibling),x=_.nextSibling,a=x.nextSibling,[b,P]=$(a.nextSibling),T=b.nextSibling,M=T.nextSibling,[y,j]=$(M.nextSibling),B=y.nextSibling,I=d.nextSibling,E=I.firstChild,S=E.nextSibling,[H,K]=$(S.nextSibling),te=H.nextSibling,oe=I.nextSibling,G=c.nextSibling,ne=G.firstChild;return s(d,C(Z,{text:"software",url:"#web-development-nav"}),_,w),s(d,C(Z,{text:"music",url:"https://www.pond5.com/artist/theslantedroom"}),b,P),s(d,C(Z,{text:"physical",url:"https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game"}),y,j),s(I,C(Z,{text:"music for games and media",url:"https://www.pond5.com/artist/theslantedroom"}),H,K),f(i=>{const W=h.aboutContainer,O=h.aboutSection,q=h.noPadding,R=h.aboutText,F=h.aboutText,J=h.aboutText,A=h.aboutText,V=h.aboutText,X=h.aboutText,Y=h.aboutImage,Q=h.aboutSection,t=h.description;return W!==i._v$&&o(l,i._v$=W),O!==i._v$2&&o(c,i._v$2=O),q!==i._v$3&&o(d,i._v$3=q),R!==i._v$4&&o(e,i._v$4=R),F!==i._v$5&&o(x,i._v$5=F),J!==i._v$6&&o(T,i._v$6=J),A!==i._v$7&&o(B,i._v$7=A),V!==i._v$8&&o(E,i._v$8=V),X!==i._v$9&&o(te,i._v$9=X),Y!==i._v$10&&o(oe,i._v$10=Y),Q!==i._v$11&&o(G,i._v$11=Q),t!==i._v$12&&o(ne,i._v$12=t),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),l})(),at=st,ct="_aboutTitle_dz18f_2",_t="_container_dz18f_9",dt="_aboutText_dz18f_17",ut="_musiclinks_dz18f_25",mt="_musicPlayer_dz18f_49",ee={aboutTitle:ct,container:_t,aboutText:dt,musiclinks:ut,musicPlayer:mt},gt=v('<div><h1>Music</h1><p></p><div><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/92917460&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe><div style="font-size:10px;color:#cccccc;line-break:anywhere;word-break:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight:100;"><a href="https://soundcloud.com/the-slanted-room" title="The Slanted Room" target="_blank" style="color:#cccccc;text-decoration:none;">The Slanted Room</a> · <a href="https://soundcloud.com/the-slanted-room/sets/2015-compositions" title="Misc Music" target="_blank" style="color:#cccccc;text-decoration:none;">More Music</a></div></div><div><a href="https://www.pond5.com/artist/theslantedroom" target="blank">Music Licensing'),pt=({about:l="Music for media in various genres. Instrumental, orchestral, cinematic, hip-hop and video game music."})=>(()=>{const c=p(gt),d=c.firstChild,e=d.nextSibling,k=e.nextSibling;return s(e,l),f(_=>{const w=ee.container,x=ee.aboutTitle,a=ee.aboutText,b=ee.musicPlayer;return w!==_._v$&&o(c,_._v$=w),x!==_._v$2&&o(d,_._v$2=x),a!==_._v$3&&o(e,_._v$3=a),b!==_._v$4&&o(k,_._v$4=b),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),c})(),$t=pt;const vt=v('<main><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Dhurjati&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&amp;family=PT+Sans+Narrow:wght@400;700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&amp;family=PT+Sans+Narrow:wght@400;700&amp;display=swap" rel="stylesheet"><!#><!/><!#><!/><!#><!/><!#><!/>');function ht(){return(()=>{const l=p(vt),c=l.firstChild,d=c.nextSibling,e=d.nextSibling,k=e.nextSibling,_=k.nextSibling,[w,x]=$(_.nextSibling),a=w.nextSibling,[b,P]=$(a.nextSibling),T=b.nextSibling,[M,y]=$(T.nextSibling),j=M.nextSibling,[B,I]=$(j.nextSibling);return s(l,C(Qe,{}),w,x),s(l,C(at,{}),b,P),s(l,C(Fe,{}),M,y),s(l,C($t,{}),B,I),l})()}export{ht as default};
