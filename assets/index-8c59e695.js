import{a as q,o as D,g as F,c as A,t as k,b as g,d as I,s as Q,i as _,r as H,e as M,f as S}from"./entry-client-ca58bbe1.js";const K="_banner_u5lq1_1",Z={banner:K},J={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},j={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},u={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},f={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},v={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class s{static getFirstMatch(e,t){const i=t.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,t){const i=t.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,t,i){if(e.test(t))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,i=!1){const n=s.getVersionPrecision(e),o=s.getVersionPrecision(t);let d=Math.max(n,o),l=0;const a=s.map([e,t],b=>{const m=d-s.getVersionPrecision(b),y=b+new Array(m+1).join(".0");return s.map(y.split("."),p=>new Array(20-p.length).join("0")+p).reverse()});for(i&&(l=d-Math.min(n,o)),d-=1;d>=l;){if(a[0][d]>a[1][d])return 1;if(a[0][d]===a[1][d]){if(d===l)return 0;d-=1}else if(a[0][d]<a[1][d])return-1}}static map(e,t){const i=[];let n;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)i.push(t(e[n]));return i}static find(e,t){let i,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(i=0,n=e.length;i<n;i+=1){const o=e[i];if(t(o,i))return o}}static assign(e,...t){const i=e;let n,o;if(Object.assign)return Object.assign(e,...t);for(n=0,o=t.length;n<o;n+=1){const d=t[n];typeof d=="object"&&d!==null&&Object.keys(d).forEach(a=>{i[a]=d[a]})}return e}static getBrowserAlias(e){return J[e]}static getBrowserTypeByAlias(e){return j[e]||""}}const c=/version\/(\d+(\.?_?\d+)+)/i,X=[{test:[/googlebot/i],describe(r){const e={name:"Googlebot"},t=s.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/opera/i],describe(r){const e={name:"Opera"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(r){const e={name:"Opera"},t=s.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(r){const e={name:"Samsung Internet for Android"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/Whale/i],describe(r){const e={name:"NAVER Whale Browser"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(r){const e={name:"MZ Browser"},t=s.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/focus/i],describe(r){const e={name:"Focus"},t=s.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/swing/i],describe(r){const e={name:"Swing"},t=s.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/coast/i],describe(r){const e={name:"Opera Coast"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(r){const e={name:"Opera Touch"},t=s.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(r){const e={name:"Yandex Browser"},t=s.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(r){const e={name:"UC Browser"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(r){const e={name:"Maxthon"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(r){const e={name:"Epiphany"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/puffin/i],describe(r){const e={name:"Puffin"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(r){const e={name:"Sleipnir"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(r){const e={name:"K-Meleon"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(r){const e={name:"WeChat"},t=s.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(r){const e={name:/qqbrowserlite/i.test(r)?"QQ Browser Lite":"QQ Browser"},t=s.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(r){const e={name:"Internet Explorer"},t=s.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(r){const e={name:"Microsoft Edge"},t=s.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(r){const e={name:"Microsoft Edge"},t=s.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(r){const e={name:"Vivaldi"},t=s.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(r){const e={name:"SeaMonkey"},t=s.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(r){const e={name:"Sailfish"},t=s.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,r);return t&&(e.version=t),e}},{test:[/silk/i],describe(r){const e={name:"Amazon Silk"},t=s.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/phantom/i],describe(r){const e={name:"PhantomJS"},t=s.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(r){const e={name:"SlimerJS"},t=s.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const e={name:"BlackBerry"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(r){const e={name:"WebOS Browser"},t=s.getFirstMatch(c,r)||s.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/bada/i],describe(r){const e={name:"Bada"},t=s.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/tizen/i],describe(r){const e={name:"Tizen"},t=s.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(r){const e={name:"QupZilla"},t=s.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(r){const e={name:"Firefox"},t=s.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/electron/i],describe(r){const e={name:"Electron"},t=s.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(r){const e={name:"Miui"},t=s.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/chromium/i],describe(r){const e={name:"Chromium"},t=s.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(r){const e={name:"Chrome"},t=s.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/GSA/i],describe(r){const e={name:"Google Search"},t=s.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){const e=!r.test(/like android/i),t=r.test(/android/i);return e&&t},describe(r){const e={name:"Android Browser"},t=s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(r){const e={name:"PlayStation 4"},t=s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(r){const e={name:"Safari"},t=s.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/.*/i],describe(r){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,n=r.search("\\(")!==-1?t:e;return{name:s.getFirstMatch(n,r),version:s.getSecondMatch(n,r)}}}],Y=[{test:[/Roku\/DVP/],describe(r){const e=s.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,r);return{name:f.Roku,version:e}}},{test:[/windows phone/i],describe(r){const e=s.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,r);return{name:f.WindowsPhone,version:e}}},{test:[/windows /i],describe(r){const e=s.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,r),t=s.getWindowsVersionName(e);return{name:f.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(r){const e={name:f.iOS},t=s.getSecondMatch(/(Version\/)(\d[\d.]+)/,r);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(r){const e=s.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,r).replace(/[_\s]/g,"."),t=s.getMacOSVersionName(e),i={name:f.MacOS,version:e};return t&&(i.versionName=t),i}},{test:[/(ipod|iphone|ipad)/i],describe(r){const e=s.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,r).replace(/[_\s]/g,".");return{name:f.iOS,version:e}}},{test(r){const e=!r.test(/like android/i),t=r.test(/android/i);return e&&t},describe(r){const e=s.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,r),t=s.getAndroidVersionName(e),i={name:f.Android,version:e};return t&&(i.versionName=t),i}},{test:[/(web|hpw)[o0]s/i],describe(r){const e=s.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,r),t={name:f.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const e=s.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,r)||s.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,r)||s.getFirstMatch(/\bbb(\d+)/i,r);return{name:f.BlackBerry,version:e}}},{test:[/bada/i],describe(r){const e=s.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,r);return{name:f.Bada,version:e}}},{test:[/tizen/i],describe(r){const e=s.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,r);return{name:f.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:f.Linux}}},{test:[/CrOS/],describe(){return{name:f.ChromeOS}}},{test:[/PlayStation 4/],describe(r){const e=s.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,r);return{name:f.PlayStation4,version:e}}}],U=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(r){const e=s.getFirstMatch(/(can-l01)/i,r)&&"Nova",t={type:u.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:u.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:u.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:u.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:u.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:u.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:u.tablet}}},{test(r){const e=r.test(/ipod|iphone/i),t=r.test(/like (ipod|iphone)/i);return e&&!t},describe(r){const e=s.getFirstMatch(/(ipod|iphone)/i,r);return{type:u.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:u.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:u.mobile}}},{test(r){return r.getBrowserName(!0)==="blackberry"},describe(){return{type:u.mobile,vendor:"BlackBerry"}}},{test(r){return r.getBrowserName(!0)==="bada"},describe(){return{type:u.mobile}}},{test(r){return r.getBrowserName()==="windows phone"},describe(){return{type:u.mobile,vendor:"Microsoft"}}},{test(r){const e=Number(String(r.getOSVersion()).split(".")[0]);return r.getOSName(!0)==="android"&&e>=3},describe(){return{type:u.tablet}}},{test(r){return r.getOSName(!0)==="android"},describe(){return{type:u.mobile}}},{test(r){return r.getOSName(!0)==="macos"},describe(){return{type:u.desktop,vendor:"Apple"}}},{test(r){return r.getOSName(!0)==="windows"},describe(){return{type:u.desktop}}},{test(r){return r.getOSName(!0)==="linux"},describe(){return{type:u.desktop}}},{test(r){return r.getOSName(!0)==="playstation 4"},describe(){return{type:u.tv}}},{test(r){return r.getOSName(!0)==="roku"},describe(){return{type:u.tv}}}],ee=[{test(r){return r.getBrowserName(!0)==="microsoft edge"},describe(r){if(/\sedg\//i.test(r))return{name:v.Blink};const t=s.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,r);return{name:v.EdgeHTML,version:t}}},{test:[/trident/i],describe(r){const e={name:v.Trident},t=s.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){return r.test(/presto/i)},describe(r){const e={name:v.Presto},t=s.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){const e=r.test(/gecko/i),t=r.test(/like gecko/i);return e&&!t},describe(r){const e={name:v.Gecko},t=s.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:v.Blink}}},{test:[/(apple)?webkit/i],describe(r){const e={name:v.WebKit},t=s.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}}];class W{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=s.find(X,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=s.find(Y,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=s.find(U,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=s.find(ee,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return s.assign({},this.parsedResult)}satisfies(e){const t={};let i=0;const n={};let o=0;if(Object.keys(e).forEach(l=>{const a=e[l];typeof a=="string"?(n[l]=a,o+=1):typeof a=="object"&&(t[l]=a,i+=1)}),i>0){const l=Object.keys(t),a=s.find(l,m=>this.isOS(m));if(a){const m=this.satisfies(t[a]);if(m!==void 0)return m}const b=s.find(l,m=>this.isPlatform(m));if(b){const m=this.satisfies(t[b]);if(m!==void 0)return m}}if(o>0){const l=Object.keys(n),a=s.find(l,b=>this.isBrowser(b,!0));if(a!==void 0)return this.compareVersion(n[a])}}isBrowser(e,t=!1){const i=this.getBrowserName().toLowerCase();let n=e.toLowerCase();const o=s.getBrowserTypeByAlias(n);return t&&o&&(n=o.toLowerCase()),n===i}compareVersion(e){let t=[0],i=e,n=!1;const o=this.getBrowserVersion();if(typeof o=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(n=!0,i=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(n=!0,i=e.substr(1)),t.indexOf(s.compareVersions(o,i,n))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class te{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new W(e,t)}static parse(e){return new W(e).getResult()}static get BROWSER_MAP(){return j}static get ENGINE_MAP(){return v}static get OS_MAP(){return f}static get PLATFORMS_MAP(){return u}}const re=k('<div><canvas id="canvas1">'),se=({mainTitle:r="The Slanted Room"})=>{const[e,t]=q(!0);return D(()=>{const n=te.getParser(window?.navigator?.userAgent).getPlatformType(!0)==="mobile";t(n);const o=document.createElement("script");o.src=n?"./js/particlesDisabled.js":"./js/particles.js",document.body.appendChild(o)}),(()=>{const i=F(re);return A(()=>g(i,Z.banner)),i})()},ie=se,ne=k('<span rel="noopener noreferrer">'),O=({text:r,url:e})=>{const t={color:"#ffbf00",textDecoration:"none !important",cursor:"pointer"};return(()=>{const i=F(ne);return i.$$click=()=>window.open(e,"_blank"),Q(i,t),_(i,r),H(),i})()};I(["click"]);const oe="_aboutContainer_jtyas_1",ae="_aboutSection_jtyas_32",ce="_aboutTitle_jtyas_37",de="_aboutText_jtyas_44",le="_noPadding_jtyas_51",ue="_aboutImage_jtyas_56",w={aboutContainer:oe,aboutSection:ae,aboutTitle:ce,aboutText:de,noPadding:le,aboutImage:ue},me=k("<div><div><div><!#><!/><span>, </span><!#><!/><span>, </span><!#><!/><span>.</span></div></div><div><p>steve@theslantedroom.ca"),he=()=>(()=>{const r=F(me),e=r.firstChild,t=e.firstChild,i=t.firstChild,[n,o]=M(i.nextSibling),d=n.nextSibling,l=d.nextSibling,[a,b]=M(l.nextSibling),m=a.nextSibling,y=m.nextSibling,[p,$]=M(y.nextSibling),P=p.nextSibling,x=e.nextSibling,G=x.firstChild;return _(t,S(O,{text:"video games",url:"#web-development-nav"}),n,o),_(t,S(O,{text:"music",url:"https://www.pond5.com/artist/theslantedroom"}),a,b),_(t,S(O,{text:"board games",url:"https://www.thegamecrafter.com/games/last-man-standing-definitive-edition"}),p,$),A(h=>{const N=w.aboutContainer,T=w.aboutSection,C=w.noPadding,E=w.aboutText,R=w.aboutText,L=w.aboutText,V=w.aboutSection,z=w.description;return N!==h._v$&&g(r,h._v$=N),T!==h._v$2&&g(e,h._v$2=T),C!==h._v$3&&g(t,h._v$3=C),E!==h._v$4&&g(d,h._v$4=E),R!==h._v$5&&g(m,h._v$5=R),L!==h._v$6&&g(P,h._v$6=L),V!==h._v$7&&g(x,h._v$7=V),z!==h._v$8&&g(G,h._v$8=z),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),r})(),fe=he,be="_aboutTitle_dz18f_2",ge="_container_dz18f_9",pe="_aboutText_dz18f_17",we="_musiclinks_dz18f_25",ve="_musicPlayer_dz18f_49",B={aboutTitle:be,container:ge,aboutText:pe,musiclinks:we,musicPlayer:ve},_e=k('<div><h1>Music</h1><p></p><div><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/92917460&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe><div style="font-size:10px;color:#cccccc;line-break:anywhere;word-break:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight:100;"><a href="https://soundcloud.com/the-slanted-room" title="The Slanted Room" target="_blank" style="color:#cccccc;text-decoration:none;">The Slanted Room</a> · <a href="https://soundcloud.com/the-slanted-room/sets/2015-compositions" title="Misc Music" target="_blank" style="color:#cccccc;text-decoration:none;">More Music</a></div></div><div><a href="https://www.pond5.com/artist/theslantedroom" target="blank">Music Licensing'),Me=({about:r=""})=>(()=>{const e=F(_e),t=e.firstChild,i=t.nextSibling,n=i.nextSibling;return _(i,r),A(o=>{const d=B.container,l=B.aboutTitle,a=B.aboutText,b=B.musicPlayer;return d!==o._v$&&g(e,o._v$=d),l!==o._v$2&&g(t,o._v$2=l),a!==o._v$3&&g(i,o._v$3=a),b!==o._v$4&&g(n,o._v$4=b),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})(),Se=Me;const ye=k('<main><link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet" type="text/css"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Dhurjati&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&amp;family=PT+Sans+Narrow:wght@400;700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&amp;family=PT+Sans+Narrow:wght@400;700&amp;display=swap" rel="stylesheet"><!#><!/><!#><!/><iframe src="https://www.theslantedroom.ca/" width="100%" height="500px" title="Embedded Content"></iframe><!#><!/>');function ke(){return(()=>{const r=F(ye),e=r.firstChild,t=e.nextSibling,i=t.nextSibling,n=i.nextSibling,o=n.nextSibling,d=o.nextSibling,[l,a]=M(d.nextSibling),b=l.nextSibling,[m,y]=M(b.nextSibling),p=m.nextSibling,$=p.nextSibling,[P,x]=M($.nextSibling);return _(r,S(ie,{}),l,a),_(r,S(fe,{}),m,y),p.style.setProperty("border","none"),_(r,S(Se,{}),P,x),r})()}export{ke as default};
