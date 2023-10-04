import{e as N,a as B,f as W,o as J,g as m,b as C,i as d,h as q,c as S,j as e,k as G,r as F,t as b,d as I}from"./entry-client-f490bf1c.js";import{B as V}from"./bowser-269eb377.js";const O="_aboutTitle_1l6eg_2",X="_webDevelopmentInfo_1l6eg_9",K="_skills_1l6eg_14",Q="_skill_1l6eg_14",D={aboutTitle:O,webDevelopmentInfo:X,skills:K,skill:Q},Y="_portfolio_1ozun_3",Z="_portfolio__title_1ozun_13",ee="_portfolio__main_1ozun_21",te="_portfolio__image_1ozun_27",ne="_portfolio__info_1ozun_37",oe="_portfolio__description_1ozun_41",ie="_portfolio__technologies_1ozun_48",le="_portfolio__technology_1ozun_55",ae="_portfolio__nav_1ozun_65",se="_portfolio__nav_button_1ozun_71",p={portfolio:Y,portfolio__title:Z,portfolio__main:ee,"portfolio__image-container":"_portfolio__image-container_1ozun_27",portfolio__image:te,portfolio__info:ne,portfolio__description:oe,portfolio__technologies:ie,portfolio__technology:le,portfolio__nav:ae,portfolio__nav_button:se},re=b("<div><div><h1></h1><button>&lt;</button><button>></button></div><p></p><!#><!/><img>"),_e=b("<ul>"),ce=b("<li>"),ue=({projects:i=[{title:"HBC Boxing",description:"Turn Based Hex Grid Boxing",imageUrl:"img/responsivehHbc.png",technologies:["React","TypeScript","MongoDb"],link:"https://hbcboxing.online/"},{title:"Idle Trillionaire",description:"Idle Game built with React - JavaScript.",imageUrl:"img/responsiveTrillionaire.png",technologies:["React"],link:"https://www.idletrillionaire.com/"},{title:"Last Man Standing",description:"Interactive Game - Vanilla JavaScript",imageUrl:"img/responsiveLMS.png",technologies:["HTML","CSS","Javascript"],link:"https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/"},{title:"Stalk Tok",description:"React Satire App",imageUrl:"img/responsivestalk.png",technologies:["Solid Js"],link:"https://theslantedroom.github.io/StalkTok/"}]})=>{const[r,u]=B(0),[n,v]=B(i[0]);W(()=>{v(i[r()])},r()),J(async()=>{i.forEach(t=>{console.log("load",t.imageUrl);const c=new Image;c.src=t.imageUrl})});const a=()=>{u(t=>t===i.length-1?0:t+1)},_=()=>{u(t=>t===0?i.length-1:t-1)};function s(t){window.open(n().link,"_blank")}return(()=>{const t=m(re),c=t.firstChild,$=c.firstChild,x=$.nextSibling,k=x.nextSibling,w=c.nextSibling,L=w.nextSibling,[o,M]=C(L.nextSibling),T=o.nextSibling;return d($,()=>n().title),x.$$click=_,k.$$click=a,d(w,()=>n().description),d(t,(()=>{const l=q(()=>!!n().technologies.length);return()=>l()?(()=>{const f=m(_e);return d(f,()=>n().technologies.map(y=>(()=>{const h=m(ce);return d(h,y),S(()=>e(h,p.portfolio__technology)),h})())),S(()=>e(f,p.portfolio__technologies)),f})():null})(),o,M),T.$$click=s,S(l=>{const f=p.portfolio,y=p.portfolio__navigation,h=p.portfolio__title,P=p.portfolio__nav_button,z=p.portfolio__nav_button,j=p.portfolio__description,R=p.portfolio__image,H=n().imageUrl,A=n().imageUrl;return f!==l._v$&&e(t,l._v$=f),y!==l._v$2&&e(c,l._v$2=y),h!==l._v$3&&e($,l._v$3=h),P!==l._v$4&&e(x,l._v$4=P),z!==l._v$5&&e(k,l._v$5=z),j!==l._v$6&&e(w,l._v$6=j),R!==l._v$7&&e(T,l._v$7=R),H!==l._v$8&&G(T,"src",l._v$8=H),A!==l._v$9&&G(T,"alt",l._v$9=A),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),F(),t})()};N(["click"]);const de=b("<div><h1>Web Development</h1><p></p><!#><!/>"),ve=b("<span>"),$e=({skills:i=["JavaScript","TypeScript","React.js","Meteor.js","Jest","Cypress","material UI","webRTC","HTML","CSS","C","Python","Flask","GIT","Mongo","XState","Sqlite3","Postgres"]})=>(()=>{const r=m(de),u=r.firstChild,n=u.nextSibling,v=n.nextSibling,[a,_]=C(v.nextSibling);return d(n,()=>i.map(s=>(()=>{const t=m(ve);return d(t,s),S(()=>e(t,D.skill)),t})())),d(r,I(ue,{}),a,_),S(s=>{const t=D.webDevelopmentInfo,c=D.aboutTitle,$=D.skills;return t!==s._v$&&e(r,s._v$=t),c!==s._v$2&&e(u,s._v$2=c),$!==s._v$3&&e(n,s._v$3=$),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r})(),ge=$e,me="_banner_u5lq1_1",be={banner:me},fe=b('<div><canvas id="canvas1">'),he=({mainTitle:i="The Slanted Room"})=>{const[r,u]=B(!0);return J(()=>{const v=V.getParser(window?.navigator?.userAgent).getPlatformType(!0)==="mobile";u(v);const a=document.createElement("script");a.src=v?"./js/particlesDisabled.js":"./js/particles.js",document.body.appendChild(a)}),(()=>{const n=m(fe);return S(()=>e(n,be.banner)),n})()},pe=he,Se="_aboutContainer_1i77k_1",xe="_aboutSection_1i77k_20",ke="_aboutTitle_1i77k_25",we="_aboutText_1i77k_32",Te="_aboutLink_1i77k_38",ye="_aboutImage_1i77k_48",g={aboutContainer:Se,aboutSection:xe,aboutTitle:ke,aboutText:we,aboutLink:Te,aboutImage:ye},Ce=b('<div><div><h1>About</h1><p>I am a <a href="#web-development-nav">software engineer</a> and <a href="#soundengineer-nav">sound technician</a>. I mix concerts, write and compose <a href="#music-nav" target="blank">music for games and media.</a> I create <a target="_blank" href="https://www.idletrillionaire.com/">apps</a> and make <a target="_blank" href="https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game">physical</a> and digital games.</p><img src="img/pic1.png" alt="profile img">'),Me=()=>(()=>{const i=m(Ce),r=i.firstChild,u=r.firstChild,n=u.nextSibling,v=n.firstChild,a=v.nextSibling,_=a.nextSibling,s=_.nextSibling,t=s.nextSibling,c=t.nextSibling,$=c.nextSibling,x=$.nextSibling,k=x.nextSibling,w=k.nextSibling,L=n.nextSibling;return S(o=>{const M=g.aboutContainer,T=g.aboutSection,l=g.aboutTitle,f=g.aboutText,y=g.aboutLink,h=g.aboutLink,P=g.aboutLink,z=g.aboutLink,j=g.aboutLink,R=g.aboutImage;return M!==o._v$&&e(i,o._v$=M),T!==o._v$2&&e(r,o._v$2=T),l!==o._v$3&&e(u,o._v$3=l),f!==o._v$4&&e(n,o._v$4=f),y!==o._v$5&&e(a,o._v$5=y),h!==o._v$6&&e(s,o._v$6=h),P!==o._v$7&&e(c,o._v$7=P),z!==o._v$8&&e(x,o._v$8=z),j!==o._v$9&&e(w,o._v$9=j),R!==o._v$10&&e(L,o._v$10=R),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),i})(),Ie=Me,Le="_aboutTitle_1eu10_2",Pe="_container_1eu10_9",ze="_aboutText_1eu10_17",je="_skills_1eu10_24",Re="_skill_1eu10_24",De="_image_1eu10_46",E={aboutTitle:Le,container:Pe,aboutText:ze,skills:je,skill:Re,image:De},Ee=b('<div><h1>Sound Engineering</h1><p></p><img src="img/concertbanner.jpg" alt="concert">'),Ue=({about:i="I have over 15 years experience mixing FOH and Monitors for concerts, comedians, musical theater, touring bands and music festivals with crowds up to 15,000 people. I have been producing, writing, recording, editing, mixing and mastering in studio as well."})=>(()=>{const r=m(Ee),u=r.firstChild,n=u.nextSibling,v=n.nextSibling;return d(n,i),S(a=>{const _=E.container,s=E.aboutTitle,t=E.aboutText,c=E.image;return _!==a._v$&&e(r,a._v$=_),s!==a._v$2&&e(u,a._v$2=s),t!==a._v$3&&e(n,a._v$3=t),c!==a._v$4&&e(v,a._v$4=c),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),r})(),Be=Ue,He="_aboutTitle_gt2e5_2",Ae="_container_gt2e5_9",Ge="_aboutText_gt2e5_17",Je="_musiclinks_gt2e5_25",U={aboutTitle:He,container:Ae,aboutText:Ge,musiclinks:Je},Ne=b('<div><h1>Composing</h1><p></p><div class="player"><div><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/92917460&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe><div style="font-size:10px;color:#cccccc;line-break:anywhere;word-break:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight:100;"><a href="https://soundcloud.com/the-slanted-room" title="The Slanted Room" target="_blank" style="color:#cccccc;text-decoration:none;">The Slanted Room</a> · <a href="https://soundcloud.com/the-slanted-room/sets/2015-compositions" title="Misc Music" target="_blank" style="color:#cccccc;text-decoration:none;">Misc Music</a></div></div></div><div><ul><li><a href="https://theslantedroom.ca/" target="blank">theSlantedRoom.ca</a></li><li><a href="https://www.pond5.com/artist/theslantedroom" target="blank">Music Licensing'),We=({about:i="I have been producing music for media in various genres, with focus on instrumental, orchestral, cinematic, hip-hop, and fanstasy video game music."})=>(()=>{const r=m(Ne),u=r.firstChild,n=u.nextSibling,v=n.nextSibling,a=v.nextSibling;return d(n,i),S(_=>{const s=U.container,t=U.aboutTitle,c=U.aboutText,$=U.musiclinks;return s!==_._v$&&e(r,_._v$=s),t!==_._v$2&&e(u,_._v$2=t),c!==_._v$3&&e(n,_._v$3=c),$!==_._v$4&&e(a,_._v$4=$),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),r})(),qe=We;const Fe=b('<main><link href="https://fonts.googleapis.com/css2?family=Dhurjati&amp;display=swap" rel="stylesheet"><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/>');function Xe(){return(()=>{const i=m(Fe),r=i.firstChild,u=r.nextSibling,[n,v]=C(u.nextSibling),a=n.nextSibling,[_,s]=C(a.nextSibling),t=_.nextSibling,[c,$]=C(t.nextSibling),x=c.nextSibling,[k,w]=C(x.nextSibling),L=k.nextSibling,[o,M]=C(L.nextSibling);return d(i,I(pe,{}),n,v),d(i,I(Ie,{}),_,s),d(i,I(ge,{}),c,$),d(i,I(Be,{}),k,w),d(i,I(qe,{}),o,M),i})()}export{Xe as default};
