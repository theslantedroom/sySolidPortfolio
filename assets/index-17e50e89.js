import{e as me,d as ee,f as be,o as ge,g as h,a as $,i as r,h as O,c as y,j as e,r as Q,k as te,t as x,b as w,s as pe}from"./entry-client-547b19fc.js";import{B as fe}from"./bowser-269eb377.js";const he="_aboutTitle_1qs11_2",xe="_description_1qs11_9",Se="_webDevelopmentInfo_1qs11_14",we="_skills_1qs11_19",ye="_skill_1qs11_19",j={aboutTitle:he,description:xe,webDevelopmentInfo:Se,skills:we,skill:ye},ke="_portfolio_zd55x_3",Te="_portfolio__navigation_zd55x_12",Ce="_portfolio__title_zd55x_18",Ie="_portfolio__main_zd55x_29",Le="_portfolio__image_zd55x_35",Me="_portfolio__info_zd55x_46",Pe="_portfolio__description_zd55x_50",ze="_portfolio__technologies_zd55x_58",je="_portfolio__technology_zd55x_65",De="_portfolio__nav_zd55x_12",Be="_portfolio__nav_button_zd55x_81",Ee="_playstoreImg_zd55x_95",Ue="_linkBtnStack_zd55x_101",S={portfolio:ke,portfolio__navigation:Te,portfolio__title:Ce,portfolio__main:Ie,"portfolio__image-container":"_portfolio__image-container_zd55x_35",portfolio__image:Le,portfolio__info:Me,portfolio__description:Pe,portfolio__technologies:ze,portfolio__technology:je,portfolio__nav:De,portfolio__nav_button:Be,playstoreImg:Ee,linkBtnStack:Ue},Re=x("<div><h1></h1><div><button>&lt;</button><div><!#><!/><!#><!/><!#><!/></div><button>></button></div><p></p><!#><!/><img>"),Ae=x('<img src="img/get-it-on-google-play.png" alt="getOnGooglePlay">'),Ge=x('<img src="img/play_on_itchio.png" alt="playOnItchIo">'),He=x('<img src="img/play_in_browser.png" alt="play_in_browser">'),qe=x("<ul>"),We=x("<li>"),Je=({projects:l=[{title:"Idle Trillionaire",description:"Idle Game built with React - JavaScript.",imageUrl:"img/responsiveTrillionaire.png",technologies:["React","Capacitor","Android Studio"],link:"https://www.idletrillionaire.com/",playStoreLink:"https://play.google.com/store/apps/details?id=com.idletrillionaire.www",itchIoLink:"https://theslantedroom.itch.io/idle-trillionaire",playWebLink:"https://www.idletrillionaire.com/"},{title:"HBC Boxing",description:"Turn Based Hex Grid Boxing",imageUrl:"img/responsivehHbc.png",technologies:["React","TypeScript","MongoDb"],link:"https://hbcboxing.online/",itchIoLink:"https://theslantedroom.itch.io/hbc-boxing",playWebLink:"https://hbcboxing.online/"},{title:"Last Man Standing",description:"Interactive Game - Vanilla JavaScript",imageUrl:"img/responsiveLMS.png",technologies:["HTML","CSS","Javascript"],link:"https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",playWebLink:"https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",itchIoLink:"https://theslantedroom.itch.io/last-man-standing-mini-game"},{title:"Client: Sessionwire",description:"Full Stack Developer: Sessionwire Studio is a powerhouse creative communication suite for your production team featuring live video and studio quality HQ Audio.",imageUrl:"img/swImg.png",technologies:[],link:"https://www.sessionwire.com/"},{title:"Client: V-Clubs",description:"Lead Developer - Full Stack - Socialize in virtual venues. Create your own venues or visit venues from all over the world. Video and private text chat. Create private tables. Enjoy venue entertainment and performances.",imageUrl:"img/vclubs.png",technologies:[],link:"https://www.v-clubs.com/"}]})=>{const[d,_]=ee(0),[t,g]=ee(l[0]);be(()=>{g(l[d()])},d()),ge(async()=>{l.forEach(a=>{console.log("load",a.imageUrl);const i=new Image;i.src=a.imageUrl})});const s=()=>{_(a=>a===l.length-1?0:a+1)},c=()=>{_(a=>a===0?l.length-1:a-1)};function m(a){window.open(t().link,"_blank")}return(()=>{const a=h(Re),i=a.firstChild,v=i.nextSibling,b=v.firstChild,p=b.nextSibling,k=p.firstChild,[T,D]=$(k.nextSibling),C=T.nextSibling,[B,X]=$(C.nextSibling),H=B.nextSibling,[K,q]=$(H.nextSibling),W=p.nextSibling,z=v.nextSibling,Y=z.nextSibling,[E,Z]=$(Y.nextSibling),M=E.nextSibling;return r(i,()=>t().title),b.$$click=c,r(p,(()=>{const o=O(()=>!!t().playStoreLink);return()=>o()?(()=>{const u=h(Ae);return u.$$click=()=>{window.location=t().playStoreLink},y(()=>e(u,S.playstoreImg)),Q(),u})():null})(),T,D),r(p,(()=>{const o=O(()=>!!t().itchIoLink);return()=>o()?(()=>{const u=h(Ge);return u.$$click=()=>{window.location=t().itchIoLink},y(()=>e(u,S.playstoreImg)),Q(),u})():null})(),B,X),r(p,(()=>{const o=O(()=>!!t().playWebLink);return()=>o()?(()=>{const u=h(He);return u.$$click=()=>{window.location=t().playWebLink},y(()=>e(u,S.playstoreImg)),Q(),u})():null})(),K,q),W.$$click=s,r(z,()=>t().description),r(a,(()=>{const o=O(()=>!!t().technologies.length);return()=>o()?(()=>{const u=h(qe);return r(u,()=>t().technologies.map(L=>(()=>{const I=h(We);return r(I,L),y(()=>e(I,S.portfolio__technology)),I})())),y(()=>e(u,S.portfolio__technologies)),u})():null})(),E,Z),M.$$click=m,y(o=>{const u=S.portfolio,L=S.portfolio__title,I=S.portfolio__navigation,J=S.portfolio__nav_button,U=S.linkBtnStack,F=S.portfolio__nav_button,N=S.portfolio__description,V=S.portfolio__image,n=t().imageUrl,R=t().imageUrl;return u!==o._v$&&e(a,o._v$=u),L!==o._v$2&&e(i,o._v$2=L),I!==o._v$3&&e(v,o._v$3=I),J!==o._v$4&&e(b,o._v$4=J),U!==o._v$5&&e(p,o._v$5=U),F!==o._v$6&&e(W,o._v$6=F),N!==o._v$7&&e(z,o._v$7=N),V!==o._v$8&&e(M,o._v$8=V),n!==o._v$9&&te(M,"src",o._v$9=n),R!==o._v$10&&te(M,"alt",o._v$10=R),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Q(),a})()};me(["click"]);const Fe=x('<div id="web-development-nav"><h1>Software Development</h1><p>A short list of personal projects and key clients</p><!#><!/><h1>Technologies</h1><p>'),Ne=x("<span>"),Ve=({skills:l=["JavaScript","TypeScript","Python","C","React.js","Meteor.js","Capacitor.js","Android Studio","Jest","Cypress","material UI","webRTC","HTML","CSS","Flask","GIT","Mongo","XState","Sqlite3","Postgres"]})=>(()=>{const d=h(Fe),_=d.firstChild,t=_.nextSibling,g=t.nextSibling,[s,c]=$(g.nextSibling),m=s.nextSibling,a=m.nextSibling;return r(d,w(Je,{}),s,c),r(a,()=>l.map(i=>(()=>{const v=h(Ne);return r(v,i),y(()=>e(v,j.skill)),v})())),y(i=>{const v=j.webDevelopmentInfo,b=j.aboutTitle,p=j.description,k=j.aboutTitle,T=j.skills;return v!==i._v$&&e(d,i._v$=v),b!==i._v$2&&e(_,i._v$2=b),p!==i._v$3&&e(t,i._v$3=p),k!==i._v$4&&e(m,i._v$4=k),T!==i._v$5&&e(a,i._v$5=T),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),d})(),Oe=Ve,Qe="_banner_u5lq1_1",Xe={banner:Qe},Ke=x('<div><canvas id="canvas1">'),Ye=({mainTitle:l="The Slanted Room"})=>{const[d,_]=ee(!0);return ge(()=>{const g=fe.getParser(window?.navigator?.userAgent).getPlatformType(!0)==="mobile";_(g);const s=document.createElement("script");s.src=g?"./js/particlesDisabled.js":"./js/particles.js",document.body.appendChild(s)}),(()=>{const t=h(Ke);return y(()=>e(t,Xe.banner)),t})()},Ze=Ye,et=x("<a>"),P=({text:l,url:d})=>{const _={color:"#ffbf00",textDecoration:"none"};return(()=>{const t=h(et);return pe(t,_),te(t,"href",d),r(t,`${l}`),t})()},tt="_aboutContainer_1vml8_1",nt="_aboutSection_1vml8_20",it="_aboutTitle_1vml8_25",ot="_aboutText_1vml8_32",lt="_noPadding_1vml8_39",at="_aboutImage_1vml8_44",f={aboutContainer:tt,aboutSection:nt,aboutTitle:it,aboutText:ot,noPadding:lt,aboutImage:at},st=x('<div><div><div><span>I am a </span><!#><!/><span> and </span><!#><!/><span> and </span><!#><!/><span>.</span></div><div><span>I create </span><!#><!/><span> and make </span><!#><!/><span> and </span><!#><!/><span> games.</span></div><div><span>I mix concerts and write and compose </span><!#><!/><span>.</span></div><img src="img/pic1.png" alt="profile img">'),rt=()=>(()=>{const l=h(st),d=l.firstChild,_=d.firstChild,t=_.firstChild,g=t.nextSibling,[s,c]=$(g.nextSibling),m=s.nextSibling,a=m.nextSibling,[i,v]=$(a.nextSibling),b=i.nextSibling,p=b.nextSibling,[k,T]=$(p.nextSibling),D=k.nextSibling,C=_.nextSibling,B=C.firstChild,X=B.nextSibling,[H,K]=$(X.nextSibling),q=H.nextSibling,W=q.nextSibling,[z,Y]=$(W.nextSibling),E=z.nextSibling,Z=E.nextSibling,[M,o]=$(Z.nextSibling),u=M.nextSibling,L=C.nextSibling,I=L.firstChild,J=I.nextSibling,[U,F]=$(J.nextSibling),N=U.nextSibling,V=L.nextSibling;return r(_,w(P,{text:"software developer",url:"#web-development-nav"}),s,c),r(_,w(P,{text:"sound engineer",url:"#soundengineer-nav"}),i,v),r(_,w(P,{text:"music composer",url:"https://www.pond5.com/artist/theslantedroom"}),k,T),r(C,w(P,{text:"apps",url:"https://play.google.com/store/apps/dev?id=8189495994752916341"}),H,K),r(C,w(P,{text:"physical",url:"https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game"}),z,Y),r(C,w(P,{text:"digital",url:"https://theslantedroom.itch.io/"}),M,o),r(L,w(P,{text:"music for games and media",url:"https://www.pond5.com/artist/theslantedroom"}),U,F),y(n=>{const R=f.aboutContainer,ne=f.aboutSection,ie=f.noPadding,oe=f.aboutText,le=f.aboutText,ae=f.aboutText,se=f.aboutText,re=f.aboutText,_e=f.aboutText,ce=f.aboutText,de=f.aboutText,ve=f.aboutText,ue=f.aboutText,$e=f.aboutImage;return R!==n._v$&&e(l,n._v$=R),ne!==n._v$2&&e(d,n._v$2=ne),ie!==n._v$3&&e(_,n._v$3=ie),oe!==n._v$4&&e(t,n._v$4=oe),le!==n._v$5&&e(m,n._v$5=le),ae!==n._v$6&&e(b,n._v$6=ae),se!==n._v$7&&e(D,n._v$7=se),re!==n._v$8&&e(B,n._v$8=re),_e!==n._v$9&&e(q,n._v$9=_e),ce!==n._v$10&&e(E,n._v$10=ce),de!==n._v$11&&e(u,n._v$11=de),ve!==n._v$12&&e(I,n._v$12=ve),ue!==n._v$13&&e(N,n._v$13=ue),$e!==n._v$14&&e(V,n._v$14=$e),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0}),l})(),_t=rt,ct="_aboutTitle_1snxt_2",dt="_container_1snxt_9",vt="_aboutText_1snxt_17",ut="_image_1snxt_25",A={aboutTitle:ct,container:dt,aboutText:vt,image:ut},$t=x('<div id="soundengineer-nav"><h1>Sound Engineering</h1><p>I have over 15 years experience mixing FOH and Monitors for concerts, comedians, musical theater, touring bands and music festivals. </p><p>I have been producing, writing, recording, editing, mixing and mastering in studio as well.</p><img src="img/concertbanner.jpg" alt="concert">'),gt=({})=>(()=>{const l=h($t),d=l.firstChild,_=d.nextSibling,t=_.nextSibling,g=t.nextSibling;return y(s=>{const c=A.container,m=A.aboutTitle,a=A.aboutText,i=A.aboutText,v=A.image;return c!==s._v$&&e(l,s._v$=c),m!==s._v$2&&e(d,s._v$2=m),a!==s._v$3&&e(_,s._v$3=a),i!==s._v$4&&e(t,s._v$4=i),v!==s._v$5&&e(g,s._v$5=v),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),l})(),mt=gt,bt="_aboutTitle_dz18f_2",pt="_container_dz18f_9",ft="_aboutText_dz18f_17",ht="_musiclinks_dz18f_25",xt="_musicPlayer_dz18f_49",G={aboutTitle:bt,container:pt,aboutText:ft,musiclinks:ht,musicPlayer:xt},St=x('<div><h1>Composing</h1><p></p><div><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/92917460&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe><div style="font-size:10px;color:#cccccc;line-break:anywhere;word-break:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight:100;"><a href="https://soundcloud.com/the-slanted-room" title="The Slanted Room" target="_blank" style="color:#cccccc;text-decoration:none;">The Slanted Room</a> · <a href="https://soundcloud.com/the-slanted-room/sets/2015-compositions" title="Misc Music" target="_blank" style="color:#cccccc;text-decoration:none;">More Music</a></div></div><div><ul><li><a href="https://theslantedroom.ca/" target="blank">theSlantedRoom.ca</a></li><li><a href="https://www.pond5.com/artist/theslantedroom" target="blank">Music Licensing'),wt=({about:l="I produce music for media in various genres, with focus on instrumental, orchestral, cinematic, hip-hop and video game music."})=>(()=>{const d=h(St),_=d.firstChild,t=_.nextSibling,g=t.nextSibling,s=g.nextSibling;return r(t,l),y(c=>{const m=G.container,a=G.aboutTitle,i=G.aboutText,v=G.musicPlayer,b=G.musiclinks;return m!==c._v$&&e(d,c._v$=m),a!==c._v$2&&e(_,c._v$2=a),i!==c._v$3&&e(t,c._v$3=i),v!==c._v$4&&e(g,c._v$4=v),b!==c._v$5&&e(s,c._v$5=b),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),d})(),yt=wt;const kt=x('<main><link href="https://fonts.googleapis.com/css2?family=Dhurjati&amp;display=swap" rel="stylesheet"><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/>');function It(){return(()=>{const l=h(kt),d=l.firstChild,_=d.nextSibling,[t,g]=$(_.nextSibling),s=t.nextSibling,[c,m]=$(s.nextSibling),a=c.nextSibling,[i,v]=$(a.nextSibling),b=i.nextSibling,[p,k]=$(b.nextSibling),T=p.nextSibling,[D,C]=$(T.nextSibling);return r(l,w(Ze,{}),t,g),r(l,w(_t,{}),c,m),r(l,w(Oe,{}),i,v),r(l,w(mt,{}),p,k),r(l,w(yt,{}),D,C),l})()}export{It as default};
