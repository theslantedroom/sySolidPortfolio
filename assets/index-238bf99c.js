import{e as xe,d as re,f as we,o as Se,g as b,a as g,i as r,h as A,b as k,j as e,r as E,k as O,t as f,c as T,s as ye}from"./entry-client-0fce22e3.js";import{B as ke}from"./bowser-269eb377.js";const Te="_aboutTitle_phts2_1",Ce="_description_phts2_8",Ie="_webDevelopmentInfo_phts2_13",Le="_skills_phts2_18",Me="_playStoreImg_phts2_26",Pe="_skill_phts2_18",U={aboutTitle:Te,description:Ce,webDevelopmentInfo:Ie,skills:Le,playStoreImg:Me,skill:Pe},De="_portfolio_1wmpt_1",je="_portfolio__navigation_1wmpt_10",Be="_portfolio__title_1wmpt_16",Ae="_portfolio__main_1wmpt_27",Ee="_portfolio__image_1wmpt_33",Ue="_portfolio__info_1wmpt_44",We="_portfolio__description_1wmpt_48",He="_portfolio__technologies_1wmpt_56",Re="_portfolio__technology_1wmpt_63",Ge="_portfolio__nav_1wmpt_10",ze="_portfolio__nav_button_1wmpt_79",Fe="_playStoreImg_1wmpt_93",Je="_linkBtnStack_1wmpt_99",w={portfolio:De,portfolio__navigation:je,portfolio__title:Be,portfolio__main:Ae,"portfolio__image-container":"_portfolio__image-container_1wmpt_33",portfolio__image:Ee,portfolio__info:Ue,portfolio__description:We,portfolio__technologies:He,portfolio__technology:Re,portfolio__nav:Ge,portfolio__nav_button:ze,playStoreImg:Fe,linkBtnStack:Je},Ne=f("<div><h1></h1><div><button>&lt;</button><div><!#><!/> <!#><!/><!#><!/><!#><!/><!#><!/></div><button>></button></div><p></p><!#><!/><img>"),Oe=f('<img src="img/get-it-on-google-play.png" alt="getOnGooglePlay">'),Ve=f('<img src="img/get-it-on-ios.png" alt="get-it-on-ios">'),qe=f('<img alt="playOnItchIo">'),Xe=f('<img alt="play_in_browser">'),Qe=f('<img src="img/get-it-on-steam-soon.png" alt="get-it-on-steam-soon">'),Ke=f("<ul>"),Ye=f("<li>"),Ze=({projects:a=[{title:"Idle Trillionaire",hasDemo:!0,description:"A casual game released on iOS and Android",imageUrl:"img/responsiveTrillionaire.png",technologies:["React","Capacitor","Android Studio"],link:"https://www.idletrillionaire.com/",playStoreLink:"https://play.google.com/store/apps/details?id=com.idletrillionaire.www",itchIoLink:"https://theslantedroom.itch.io/idle-trillionaire",playWebLink:"https://www.idletrillionaire.com/",iosStoreLink:"https://apps.apple.com/us/app/idle-trillionaire-money-game/id6473220418",steamStoreLink:"#"},{title:"HBC Boxing",description:"Turn Based Hex Grid Boxing",imageUrl:"img/responsivehHbc.png",technologies:["React","TypeScript","MongoDb"],link:"https://theslantedroom.itch.io/hbc-boxing",itchIoLink:"https://theslantedroom.itch.io/hbc-boxing",playWebLink:"https://hbc-capacitor.vercel.app/"},{title:"Last Man Standing",description:"Interactive Game - Vanilla JavaScript",imageUrl:"img/responsiveLMS.png",technologies:["HTML","CSS","Javascript"],link:"https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",playWebLink:"https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",itchIoLink:"https://theslantedroom.itch.io/last-man-standing-mini-game"},{title:"Client: Sessionwire",description:"Full Stack Developer: Sessionwire Studio is a powerhouse creative communication suite for your production team featuring live video and studio quality HQ Audio.",imageUrl:"img/swImg.png",technologies:[],link:"https://www.sessionwire.com/"},{title:"Client: V-Clubs",description:"Lead Developer - Full Stack - Socialize in virtual venues. Create your own venues or visit venues from all over the world. Video and private text chat. Create private tables. Enjoy venue entertainment and performances.",imageUrl:"img/vclubs.png",technologies:[],link:"https://www.v-clubs.com/"}]})=>{const[d,c]=re(0),[t,h]=re(a[0]);we(()=>{h(a[d()])},d()),Se(async()=>{a.forEach(s=>{console.log("load",s.imageUrl);const o=new Image;o.src=s.imageUrl})});const _=()=>{c(s=>s===a.length-1?0:s+1)},v=()=>{c(s=>s===0?a.length-1:s-1)};function S(s){window.open(t().link,"_blank")}return(()=>{const s=b(Ne),o=s.firstChild,$=o.nextSibling,y=$.firstChild,p=y.nextSibling,I=p.firstChild,[L,j]=g(I.nextSibling),M=L.nextSibling,V=M.nextSibling,[q,X]=g(V.nextSibling),oe=q.nextSibling,[W,le]=g(oe.nextSibling),Q=W.nextSibling,[K,Y]=g(Q.nextSibling),ae=K.nextSibling,[Z,se]=g(ae.nextSibling),ee=p.nextSibling,P=$.nextSibling,te=P.nextSibling,[ne,ie]=g(te.nextSibling),B=ne.nextSibling;return r(o,()=>t().title),y.$$click=v,r(p,(()=>{const i=A(()=>!!t().playStoreLink);return()=>i()?(()=>{const l=b(Oe);return l.$$click=()=>{window.location=t().playStoreLink},k(()=>e(l,w.playStoreImg)),E(),l})():null})(),L,j),r(p,(()=>{const i=A(()=>!!t().iosStoreLink);return()=>i()?(()=>{const l=b(Ve);return l.$$click=()=>{window.location=t().playWebLink},k(()=>e(l,w.playStoreImg)),E(),l})():null})(),q,X),r(p,(()=>{const i=A(()=>!!t().itchIoLink);return()=>i()?(()=>{const l=b(qe);return l.$$click=()=>{window.location=t().itchIoLink},k(u=>{const x=w.playStoreImg,C=t().hasDemo?"img/play_on_itchio_demo.png":"img/play_on_itchio.png";return x!==u._v$11&&e(l,u._v$11=x),C!==u._v$12&&O(l,"src",u._v$12=C),u},{_v$11:void 0,_v$12:void 0}),E(),l})():null})(),W,le),r(p,(()=>{const i=A(()=>!!t().playWebLink);return()=>i()?(()=>{const l=b(Xe);return l.$$click=()=>{window.location=t().playWebLink},k(u=>{const x=w.playStoreImg,C=t().hasDemo?"img/play_in_browser_demo.png":"img/play_in_browser.png";return x!==u._v$13&&e(l,u._v$13=x),C!==u._v$14&&O(l,"src",u._v$14=C),u},{_v$13:void 0,_v$14:void 0}),E(),l})():null})(),K,Y),r(p,(()=>{const i=A(()=>!!t().steamStoreLink);return()=>i()?(()=>{const l=b(Qe);return l.$$click=()=>{window.location=t().playWebLink},k(()=>e(l,w.playStoreImg)),E(),l})():null})(),Z,se),ee.$$click=_,r(P,()=>t().description),r(s,(()=>{const i=A(()=>!!t().technologies.length);return()=>i()?(()=>{const l=b(Ke);return r(l,()=>t().technologies.map(u=>(()=>{const x=b(Ye);return r(x,u),k(()=>e(x,w.portfolio__technology)),x})())),k(()=>e(l,w.portfolio__technologies)),l})():null})(),ne,ie),B.$$click=S,k(i=>{const l=w.portfolio,u=w.portfolio__title,x=w.portfolio__navigation,C=w.portfolio__nav_button,n=w.linkBtnStack,H=w.portfolio__nav_button,R=w.portfolio__description,G=w.portfolio__image,z=t().imageUrl,F=t().imageUrl;return l!==i._v$&&e(s,i._v$=l),u!==i._v$2&&e(o,i._v$2=u),x!==i._v$3&&e($,i._v$3=x),C!==i._v$4&&e(y,i._v$4=C),n!==i._v$5&&e(p,i._v$5=n),H!==i._v$6&&e(ee,i._v$6=H),R!==i._v$7&&e(P,i._v$7=R),G!==i._v$8&&e(B,i._v$8=G),z!==i._v$9&&O(B,"src",i._v$9=z),F!==i._v$10&&O(B,"alt",i._v$10=F),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),E(),s})()};xe(["click"]);const et=f('<div id="web-development-nav"><h1>Projects</h1><p>A short list of personal projects and key clients</p><!#><!/><h1>Technologies</h1><p>'),tt=f("<span>"),nt=({skills:a=["JavaScript","TypeScript","Python","C","React","Meteor.js","Capacitor.js","Android Studio","Jest","Cypress","material UI","webRTC","HTML","CSS","Flask","GIT","Mongo","XState","XCode","Sqlite3","Postgres"]})=>(()=>{const d=b(et),c=d.firstChild,t=c.nextSibling,h=t.nextSibling,[_,v]=g(h.nextSibling),S=_.nextSibling,s=S.nextSibling;return r(d,T(Ze,{}),_,v),r(s,()=>a.map(o=>(()=>{const $=b(tt);return r($,o),k(()=>e($,U.skill)),$})())),k(o=>{const $=U.webDevelopmentInfo,y=U.aboutTitle,p=U.description,I=U.aboutTitle,L=U.skills;return $!==o._v$&&e(d,o._v$=$),y!==o._v$2&&e(c,o._v$2=y),p!==o._v$3&&e(t,o._v$3=p),I!==o._v$4&&e(S,o._v$4=I),L!==o._v$5&&e(s,o._v$5=L),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),d})(),it=nt,ot="_banner_u5lq1_1",lt={banner:ot},at=f('<div><canvas id="canvas1">'),st=({mainTitle:a="The Slanted Room"})=>{const[d,c]=re(!0);return Se(()=>{const h=ke.getParser(window?.navigator?.userAgent).getPlatformType(!0)==="mobile";c(h);const _=document.createElement("script");_.src=h?"./js/particlesDisabled.js":"./js/particles.js",document.body.appendChild(_)}),(()=>{const t=b(at);return k(()=>e(t,lt.banner)),t})()},rt=st,_t=f('<a target="_blank">'),D=({text:a,url:d})=>{const c={color:"#ffbf00",textDecoration:"none"};return(()=>{const t=b(_t);return ye(t,c),O(t,"href",d),r(t,`${a}`),t})()},ct="_aboutContainer_1hxcc_1",dt="_aboutSection_1hxcc_33",vt="_aboutTitle_1hxcc_38",$t="_aboutText_1hxcc_45",ut="_noPadding_1hxcc_51",gt="_aboutImage_1hxcc_56",m={aboutContainer:ct,aboutSection:dt,aboutTitle:vt,aboutText:$t,noPadding:ut,aboutImage:gt},mt=f('<div><div><div><span>I am a </span><!#><!/><span> and </span><!#><!/><span> and </span><!#><!/><span>.</span></div><div><span>I create </span><!#><!/><span> and make </span><!#><!/><span> and </span><!#><!/><span> games.</span></div><div><span>I mix concerts and write and compose </span><!#><!/><span>.</span></div><img src="img/pic1.png" alt="profile img"></div><div><h1>Contact</h1><p>steve@theslantedroom.ca'),pt=()=>(()=>{const a=b(mt),d=a.firstChild,c=d.firstChild,t=c.firstChild,h=t.nextSibling,[_,v]=g(h.nextSibling),S=_.nextSibling,s=S.nextSibling,[o,$]=g(s.nextSibling),y=o.nextSibling,p=y.nextSibling,[I,L]=g(p.nextSibling),j=I.nextSibling,M=c.nextSibling,V=M.firstChild,q=V.nextSibling,[X,oe]=g(q.nextSibling),W=X.nextSibling,le=W.nextSibling,[Q,K]=g(le.nextSibling),Y=Q.nextSibling,ae=Y.nextSibling,[Z,se]=g(ae.nextSibling),ee=Z.nextSibling,P=M.nextSibling,te=P.firstChild,ne=te.nextSibling,[ie,B]=g(ne.nextSibling),i=ie.nextSibling,l=P.nextSibling,u=d.nextSibling,x=u.firstChild,C=x.nextSibling;return r(c,T(D,{text:"software developer",url:"#web-development-nav"}),_,v),r(c,T(D,{text:"sound engineer",url:"#soundengineer-nav"}),o,$),r(c,T(D,{text:"music composer",url:"https://www.pond5.com/artist/theslantedroom"}),I,L),r(M,T(D,{text:"apps",url:"https://play.google.com/store/apps/dev?id=8189495994752916341"}),X,oe),r(M,T(D,{text:"physical",url:"https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game"}),Q,K),r(M,T(D,{text:"digital",url:"https://theslantedroom.itch.io/"}),Z,se),r(P,T(D,{text:"music for games and media",url:"https://www.pond5.com/artist/theslantedroom"}),ie,B),k(n=>{const H=m.aboutContainer,R=m.aboutSection,G=m.noPadding,z=m.aboutText,F=m.aboutText,_e=m.aboutText,ce=m.aboutText,de=m.aboutText,ve=m.aboutText,$e=m.aboutText,ue=m.aboutText,ge=m.aboutText,me=m.aboutText,pe=m.aboutImage,be=m.aboutSection,fe=m.aboutTitle,he=m.description;return H!==n._v$&&e(a,n._v$=H),R!==n._v$2&&e(d,n._v$2=R),G!==n._v$3&&e(c,n._v$3=G),z!==n._v$4&&e(t,n._v$4=z),F!==n._v$5&&e(S,n._v$5=F),_e!==n._v$6&&e(y,n._v$6=_e),ce!==n._v$7&&e(j,n._v$7=ce),de!==n._v$8&&e(V,n._v$8=de),ve!==n._v$9&&e(W,n._v$9=ve),$e!==n._v$10&&e(Y,n._v$10=$e),ue!==n._v$11&&e(ee,n._v$11=ue),ge!==n._v$12&&e(te,n._v$12=ge),me!==n._v$13&&e(i,n._v$13=me),pe!==n._v$14&&e(l,n._v$14=pe),be!==n._v$15&&e(u,n._v$15=be),fe!==n._v$16&&e(x,n._v$16=fe),he!==n._v$17&&e(C,n._v$17=he),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0}),a})(),bt=pt,ft="_aboutTitle_1snxt_2",ht="_container_1snxt_9",St="_aboutText_1snxt_17",xt="_image_1snxt_25",J={aboutTitle:ft,container:ht,aboutText:St,image:xt},wt=f('<div id="soundengineer-nav"><h1>Sound Engineering</h1><p>I have over 15 years experience mixing FOH and Monitors for concerts, comedians, musical theater, touring bands and music festivals. </p><p>I have been producing, writing, recording, editing, mixing and mastering in studio as well.</p><img src="img/concertbanner.jpg" alt="concert">'),yt=({})=>(()=>{const a=b(wt),d=a.firstChild,c=d.nextSibling,t=c.nextSibling,h=t.nextSibling;return k(_=>{const v=J.container,S=J.aboutTitle,s=J.aboutText,o=J.aboutText,$=J.image;return v!==_._v$&&e(a,_._v$=v),S!==_._v$2&&e(d,_._v$2=S),s!==_._v$3&&e(c,_._v$3=s),o!==_._v$4&&e(t,_._v$4=o),$!==_._v$5&&e(h,_._v$5=$),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),a})(),kt=yt,Tt="_aboutTitle_dz18f_2",Ct="_container_dz18f_9",It="_aboutText_dz18f_17",Lt="_musiclinks_dz18f_25",Mt="_musicPlayer_dz18f_49",N={aboutTitle:Tt,container:Ct,aboutText:It,musiclinks:Lt,musicPlayer:Mt},Pt=f('<div><h1>Composing</h1><p></p><div><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/92917460&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe><div style="font-size:10px;color:#cccccc;line-break:anywhere;word-break:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight:100;"><a href="https://soundcloud.com/the-slanted-room" title="The Slanted Room" target="_blank" style="color:#cccccc;text-decoration:none;">The Slanted Room</a> · <a href="https://soundcloud.com/the-slanted-room/sets/2015-compositions" title="Misc Music" target="_blank" style="color:#cccccc;text-decoration:none;">More Music</a></div></div><div><ul><li><a href="https://theslantedroom.ca/" target="blank">theSlantedRoom.ca</a></li><li><a href="https://www.pond5.com/artist/theslantedroom" target="blank">Music Licensing'),Dt=({about:a="I produce music for media in various genres, with focus on instrumental, orchestral, cinematic, hip-hop and video game music."})=>(()=>{const d=b(Pt),c=d.firstChild,t=c.nextSibling,h=t.nextSibling,_=h.nextSibling;return r(t,a),k(v=>{const S=N.container,s=N.aboutTitle,o=N.aboutText,$=N.musicPlayer,y=N.musiclinks;return S!==v._v$&&e(d,v._v$=S),s!==v._v$2&&e(c,v._v$2=s),o!==v._v$3&&e(t,v._v$3=o),$!==v._v$4&&e(h,v._v$4=$),y!==v._v$5&&e(_,v._v$5=y),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),d})(),jt=Dt;const Bt=f('<main><link href="https://fonts.googleapis.com/css2?family=Dhurjati&amp;display=swap" rel="stylesheet"><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><div>contact: steve@theslantedroom.ca');function Ut(){return(()=>{const a=b(Bt),d=a.firstChild,c=d.nextSibling,[t,h]=g(c.nextSibling),_=t.nextSibling,[v,S]=g(_.nextSibling),s=v.nextSibling,[o,$]=g(s.nextSibling),y=o.nextSibling,[p,I]=g(y.nextSibling),L=p.nextSibling,[j,M]=g(L.nextSibling);return j.nextSibling,r(a,T(rt,{}),t,h),r(a,T(bt,{}),v,S),r(a,T(it,{}),o,$),r(a,T(kt,{}),p,I),r(a,T(jt,{}),j,M),a})()}export{Ut as default};