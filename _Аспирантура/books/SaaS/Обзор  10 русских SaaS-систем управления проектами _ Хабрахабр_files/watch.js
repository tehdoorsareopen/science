(function(d,a,fa){function K(a){for(var d=1,s=a.length;d<arguments.length;d++)a[s++]=arguments[d];return a.length}function p(){for(var a={},S="hash host hostname href pathname port protocol search".split(" "),s=S.length,t=s;t--;)a[S[t]]="";try{for(var v=d.location,t=s;t--;){var p=S[t];a[p]=""+v[p]}}catch(C){V&&(a=V)}return a}function xb(a){return a?(""+a).replace(/^\s+/,"").replace(/\s+$/,""):""}function Ma(){return-1!=p().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/)}function ka(){return"MetrikaPlayer"==
d.name}function eb(a){var d=[],s;for(s in a)a.hasOwnProperty(s)&&(d[d.length]=s+"="+encodeURIComponent(a[s]));return d.join("&")}function Ga(a){for(var d="string"==typeof a?function(d){return a.charCodeAt(d)}:function(d){return a[d]},s=a.length,t=0,v=255,p=255;s;){var C=21<s?21:s,s=s-C;do{var L=d(t++);if(255<L)var K=L>>8,L=L&255,L=L^K;v+=L;p+=v}while(--C);v=(v&255)+(v>>8);p=(p&255)+(p>>8)}d=(v&255)+(v>>8)<<8|(p&255)+(p>>8);return 65535==d?0:d}function Ha(d,p,s,t){var v="";s&&(v=new Date,v.setTime(v.getTime()+
6E4*s),v=";expires="+v.toGMTString());a.cookie=d+"="+p+v+";path="+(t||"/")}function Na(d){return a.cookie.match(RegExp("(?:^|;\\s*)"+d+"=([^;]*)"))?RegExp.$1:null}function la(a){try{delete d[a]}catch(p){d[a]=fa}}function ma(d){var p=a.createElement("script");p.type="text/javascript";p.async=!0;p.src=d;try{var s=a.getElementsByTagName("html")[0];a.getElementsByTagName("head")[0]||s.appendChild(a.createElement("head"));var t=a.getElementsByTagName("head")[0];t.insertBefore(p,t.firstChild)}catch(v){}}
function fb(z,S,s,t,v,F){function C(b){return function(){try{return b.apply(this,arguments)}catch(g){var m=b&&b.name||"";(new Image).src="//an.yandex.ru/jserr/"+z+"?"+eb({"cnt-class":100+S,errmsg:g.name+": "+g.message+", line: "+(g.number||g.lineNumber)+", func: "+m})}}}function L(){var b=a.documentElement;return"CSS1Compat"==a.compatMode?b:a.body||b}function V(){var b=L();return[b.clientWidth,b.clientHeight]}function O(){var b=L(),g=V();return[Math.max(b.scrollWidth,g[0]),Math.max(b.scrollHeight,
g[1])]}function da(){return[d.pageXOffset||a.documentElement&&a.documentElement.scrollLeft||a.body&&a.body.scrollLeft||0,d.pageYOffset||a.documentElement&&a.documentElement.scrollTop||a.body&&a.body.scrollTop||0]}function fa(b){if(!b.ownerDocument||"PARAM"==b.tagName||b==a.body||b==a.documentElement)return[0,0];if(b.getBoundingClientRect)return b=b.getBoundingClientRect(),[Math.round(b.left+W[0]),Math.round(b.top+W[1])];for(var g=0,m=0;b;)g+=b.offsetLeft,m+=b.offsetTop,b=b.offsetParent;return[g,m]}
function H(b,g){return b==a.documentElement?null:!g?b==a.body?a.documentElement:b.parentNode:b.tagName.toLowerCase()===g?b:H(b.parentNode,g)}function ta(b,g){var m=[];if(b)for(var e=b.childNodes,a=0,c=e.length;a<c;a++){var d=e[a];!("INPUT"==d.nodeName&&d.type&&"hidden"==d.type.toLocaleLowerCase())&&(!g||d.nodeName==g)&&K(m,d)}return m}function ga(b){var g=fa(b);b=b==a.body||b==a.documentElement?O():[b.offsetWidth,b.offsetHeight];return[g[0],g[1],b[0],b[1]]}function ua(b){var g="";b=b.childNodes;for(var m=
0,e=b.length;m<e;m++)3==b[m].nodeType&&(g+=b[m].nodeValue);return Ga(g.replace(/[\u0000-\u0020]+/g,""))}function ia(b){var g="",m="className width height align title alt name".split(" ");"IMG"==b.tagName&&(g+=b.src.toLowerCase());"A"==b.tagName&&(g+=b.href.toLowerCase());for(var e=0;e<m.length;e++)b.getAttribute&&(g+=String(b.getAttribute(m[e])||"").toLowerCase());return Ga(g.replace(/[\u0000-\u0020]+/g,""))}function na(b){for(var g=a.getElementsByTagName("form"),m=0,e=g.length;m<e;m++)if(g[m]==b)return m;
return-1}function ja(b){return"INPUT"==b.nodeName&&"submit"!=b.type&&"image"!=b.type&&"hidden"!=b.type?"radio"==b.type||"checkbox"==b.type?!b.checked:!b.value:"TEXTAREA"==b.nodeName?!b.value:"SELECT"==b.nodeName?0>b.selectedIndex:!0}function r(b,g,m){var e=C(function(b){return m(b||d.event)});Z[Z.length]=[b,g,m,e];b.addEventListener?b.addEventListener(g,e,!0):b.attachEvent&&b.attachEvent("on"+g,e)}function E(b,g,m){for(var e=0;e<Z.length;e++)if(Z[e]&&Z[e][0]==b&&Z[e][1]==g&&Z[e][2]==m){var a=Z[e][3];
delete Z[e];break}a&&(b.removeEventListener?b.removeEventListener(g,a,!0):b.detachEvent&&b.detachEvent("on"+g,a))}function x(b){var g=L();return[b.pageX||b.clientX+W[0]-(g.clientLeft||0)||0,b.pageY||b.clientY+W[1]-(g.clientTop||0)||0]}function P(b){return b.target||b.srcElement}function va(b){return(b.shiftKey?zb:0)|(b.ctrlKey?gb:0)|(b.altKey?Ab:0)|(b.metaKey?Qb:0)|(b.ctrlKey||b.altKey?Oa:0)}function wa(b){var g=(new Date).getTime();b&&g<b&&(hb+=b-g+ka);d.setTimeout(C(function(){wa(g)}),ka)}function X(){var b=
(new Date).getTime()+hb;b<ib&&(b=ib+ka/2);return ib=b}function J(){return Math.round((X()-Rb)/Ha)}function ha(b,g){g=Math.max(0,Math.min(g,65535));K(b,g>>8,g&255)}function n(b,g){K(b,g&255)}function j(b,g){for(g=Math.max(0,g|0);127<g;)K(b,g&127|128),g>>=7;K(b,g)}function ea(b,g){255<g.length&&(g=g.substr(0,255));K(b,g.length);for(var m=0;m<g.length;m++)ha(b,g.charCodeAt(m))}function T(b,g){j(b,g.length);for(var m=0;m<g.length;m++)j(b,g.charCodeAt(m))}function U(b){if(!b.nodeName)return b[I]=-1,null;
var g=+b[I];if(!isFinite(g)||0>=g)return null;var m=Tb,e=0,a=H(b),c=a&&a[I]?a[I]:0;0>c&&(c=0);var d=b.nodeName.toUpperCase(),f=Ub[d];f||(m|=Vb);var y;a:{y=ta(H(b),b.nodeName);for(var h=0;h<y.length;h++)if(y[h]==b){y=h;break a}y=0}y||(m|=Wb);h=ga(b);(a=a?ga(a):null)&&(h[0]==a[0]&&h[1]==a[1]&&h[2]==a[2]&&h[3]==a[3])&&(m|=Bb);Pa[g].pos=h[0]+"x"+h[1];Pa[g].size=h[2]+"x"+h[3];b.id&&"string"==typeof b.id&&(m|=Cb);(a=ua(b))&&(m|=Xb);var k=ia(b);k&&(e|=Yb);var l;a:{l=ta(H(b),b.tagName);for(var q=0;q<l.length;q++)if(!(l[q].id&&
"string"==typeof l[q].id)&&ia(l[q])==k&&ua(l[q])==a){l=!0;break a}l=!1}if(l)var m=m|Db,R=Ga((b.innerHTML||"").replace(/(<[^>]*>|[\u0000-\u0020])/g,""));l=[];n(l,Ma);j(l,g);n(l,m);j(l,c);f?n(l,f):ea(l,d);y&&j(l,y);m&Bb||(j(l,h[0]),j(l,h[1]),j(l,h[2]),j(l,h[3]));m&Cb&&ea(l,b.id);a&&ha(l,a);m&Db&&ha(l,R);n(l,e);k&&ha(l,k);return l}function xa(b,g,m,e,a,c){for(;m&&(!m.offsetWidth||!m.offsetHeight);)m=H(m);if(!m)return null;var d=m[I];if(!d||0>d)return null;var l={mousemove:Na,click:Zb,mousedown:ab,mouseup:$b,
touch:vb}[g];if(!l)return null;var f=fa(m);m=[];n(m,l);j(m,b);j(m,d);j(m,Math.max(0,e[0]-f[0]));j(m,Math.max(0,e[1]-f[1]));/^mouse(up|down)|click$/.test(g)&&(b=a||c,n(m,2>b?ac:b==(a?2:4)?bc:cc));return m}function ya(b,g){var m=[];n(m,la);j(m,b);j(m,g[0]);j(m,g[1]);return m}function Ba(b,g,m){var e=[];m=m[I];if(!m||0>m)return null;n(e,ma);j(e,b);j(e,g[0]);j(e,g[1]);j(e,m);return e}function za(b,g,e){var a=[];n(a,dc);j(a,b);j(a,g[0]);j(a,g[1]);j(a,e[0]);j(a,e[1]);return a}function Ia(b,g,e,a){var c=
[];n(c,bb);j(c,b);ha(c,g);n(c,e);b=a[I];if(!b||0>b)b=0;j(c,b);return c}function oa(b,g){var e,a;0==g.length?a=e="":100>=g.length?(e=g,a=""):200>=g.length?(e=g.substr(0,100),a=g.substr(100)):(e=g.substr(0,97),a=g.substr(g.length-97));var c=[];n(c,ec);j(c,b);T(c,e);T(c,a);return c}function Ca(b){var g=[];n(g,fc);j(g,b);return g}function Da(b){var g=[];n(g,gc);j(g,b);return g}function $(b){var g=[];n(g,hc);j(g,b);return g}function aa(b,g){var e=[];n(e,ic);j(e,b);j(e,g[I]);return e}function M(b,g){var e=
[];n(e,jc);j(e,b);j(e,g[I]);return e}function Q(b,g,e){var a=[];n(a,kc);j(a,b);j(a,g[I]);ea(a,String(e));return a}function ba(b,g){var e=g[I];if(0<e){var a=[],c=ga(g),d=Pa[e],l=c[0]+"x"+c[1],f=c[2]+"x"+c[3];l!=d.pos&&(d.pos=l,n(a,db),j(a,b),j(a,e),j(a,c[0]),j(a,c[1]));f!=d.size&&(d.size=f,n(a,sa),j(a,b),j(a,e),j(a,c[2]),j(a,c[3]));if(a.length)return a}return null}function Fa(b){var e=b[I];if(!e||(0>e||!/^INPUT|SELECT|TEXTAREA$/.test(b.nodeName))||!b.form||/(?:^|\s)-metrika-noform(?:\s|$)/.test(b.form.className))return null;
var a=na(b.form);if(0>a)return null;var c;c="INPUT"==b.nodeName?{text:0,password:2,radio:3,checkbox:4,file:6,image:7}[b.type]:{SELECT:1,TEXTAREA:5}[b.nodeName];if("number"!=typeof c)return null;for(var d=-1,l=b.form.elements,f=l.length,h=0,y=0;h<f;h++)if(l[h].name==b.name){if(l[h]==b){d=y;break}y++}if(0>d)return null;l=[];n(l,cb);j(l,e);j(l,a);j(l,c);T(l,b.name||"");j(l,d);return l}function Y(b,e){var a=na(e);if(0>a)return null;for(var c=e.elements,d=c.length,l=[],f=0;f<d;f++)if(!ja(c[f])){var h=
c[f][I];h&&0<h&&K(l,h)}c=[];n(c,fb);j(c,b);j(c,a);j(c,l.length);for(a=0;a<l.length;a++)j(c,l[a]);return c}function pa(){var b=[];n(b,wb);return b}function qa(b){clearTimeout(Ib);for(var e=(new Date).getTime()+lc;Qa.length&&(b||+(new Date).getTime()<e);){var a=Qa.shift();if(a=a[0].apply(d,a[1])){var c=a;6500<Aa.length+c.length&&Ra();for(var a=Aa,l=0,f=a.length;l<c.length;l++)a[f++]=c[l];Sa||(Sa=d.setTimeout(C(Ra),D))}}!0===b&&Ra(!0);Qa.length&&(Ib=d.setTimeout(C(qa),mc))}function A(b,e,a){K(Qa,[b,
e]);qa(a)}function e(b){if(b[I])A(ba,[J(),b]);else{var a=H(b);a&&e(a);b[I]=kb;Pa[kb]={};kb++;A(U,[b]);A(Fa,[b])}}function y(b){var a=P(b),c,l,d=0;if(a&&"SCROLLBAR"!=a.nodeName){if(a&&/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName))if(a[I])e(a);else if(c=H(a,"form")){c=c.elements;for(l=c.length;d<l;d++)/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[d].tagName)&&!c[d][I]&&e(c[d])}else e(a);else e(a);A(xa,[J(),b.type,a,x(b),b.which,b.button])}}function c(b){y(b);var e,c;d.getSelection?(b=d.getSelection(),
e=b.toString(),c=b.anchorNode):a.selection&&a.selection.createRange&&(b=a.selection.createRange(),e=b.text,c=b.parentElement());for(;c&&1!=c.nodeType;)c=c.parentNode;if(!c||!("INPUT"==c.tagName&&"password"==c.type))if((!c||!/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(c.className))&&e!=lb)lb=e,A(oa,[J(),e])}function f(b){var e=X(),a=e-Jb;if(!(a<Ea)){var c=x(b),l=mb[0]-c[0],d=mb[1]-c[1],l=l*l+d*d;!(0>=l)&&(!(16>l&&100>a)&&!(20>a&&256>l))&&(Jb=e,mb=c,y(b))}}function h(){W=da();var b=X();b-Kb<Ea||10>Math.abs(W[0]-
nb[0])&&10>Math.abs(W[1]-nb[1])||(Kb=b,nb=W,A(ya,[J(),W]))}function q(b){b=P(b);var g=Math.random(),c=[b.scrollLeft,b.scrollTop];if(b.localId){if(g=ob[b.localId],!g||10>Math.abs(c[0]-g[0])&&10>Math.abs(c[1]-g[1]))return}else{for(;ob[g];)g=Math.random();b.localId=g}ob[b.localId]=c;b!==a&&(e(b),A(Ba,[J(),c,b]))}function N(){A(za,[J(),V(),O()])}function Ta(b){A(pa,[],!0);Ra(!0);if("beforeunload"==b.type)for(b=+new Date+50;+new Date<b;);}function Lb(b,a,c){b=P(b);!("INPUT"==b.tagName&&"password"==b.type)&&
!/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(b.className)&&(e(b),A(Ia,[J(),a,c,b]))}function Mb(b){var e=b.keyCode,a=va(b);if({3:1,8:1,9:1,13:1,16:1,17:1,18:1,19:1,20:1,27:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,45:1,46:1,91:1,92:1,93:1,106:1,110:1,111:1,144:1,145:1}[e]||(112<=e&&123>=e||96<=e&&105>=e)||a&Oa)19==e&&(a&~Oa)==gb&&(e=144),Lb(b,e,a|Oa),pb=!1,d.setTimeout(C(function(){pb=!0}),1),67==e&&(a&gb&&!(a&Ab)&&!(a&zb))&&k()}function Nb(b){pb&&(!qb&&0!==b.which)&&(Lb(b,b.charCode||b.keyCode,va(b)),
qb=!0,d.setTimeout(C(function(){qb=!1}),1))}function k(){rb||(rb=!0,lb&&A(Ca,[J()]),d.setTimeout(C(function(){rb=!1}),1))}function ra(){Ja||(Ja=!0,A(Da,[J()]))}function B(){Ja&&(Ja=!1,A($,[J()]))}function l(b){(!Ja||b&&!b.fromElement)&&ra()}function R(b){b&&!b.toElement&&B()}function G(b){b=P(b);var a,c,l=0;if(b&&/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName)){if(b[I])e(b);else if(a=H(b,"form")){a=a.elements;for(c=a.length;l<c;l++)/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a[l].tagName)&&!a[l][I]&&e(a[l])}else e(b);
A(aa,[J(),b])}}function Ua(b){if((b=P(b))&&/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))e(b),A(M,[J(),b])}function Va(b){b=P(b);if(!("INPUT"==b.tagName&&"password"==b.type)&&(!b||!/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(b.className))&&b&&/^INPUT|SELECT|TEXTAREA$/.test(b.tagName)){var a=/^(checkbox|radio)$/.test(b.type)?b.checked:b.value;e(b);A(Q,[J(),b,a])}}function u(b){b=P(b);if(!/(?:^|\s)-metrika-noform(?:\s|$)/.test(b.className)&&"FORM"==b.nodeName){for(var a=b.elements,c=0;c<a.length;c++)ja(a[c])||
e(a[c]);A(Y,[J(),b],!0)}}function w(b){h();if(b.touches&&b.touches.length){var a=P(b);if(a){e(a);for(var c=0;c<b.touches.length;c++)A(xa,[J(),"touch",a,[b.touches[c].pageX,b.touches[c].pageY],0,0])}}}function Ra(){clearTimeout(Sa);Sa=0;if(Aa.length){for(var b={rn:Math.round(1E5*Math.random()),"wv-type":0,"cnt-class":S,"page-url":p().href,wmode:0,"wv-hit":t,"wv-part":nc++,"wv-check":Ga(Aa),"browser-info":["z",sb,"i",Wa].join(":")},a=Aa,e=a.length,c=[],l=e-e%3,d,f=0;f<l;f+=3)d=(a[f]<<16)+(a[f+1]<<8)+
a[f+2],K(c,ca[d>>18&63],ca[d>>12&63],ca[d>>6&63],ca[d&63]);switch(e-l){case 1:d=a[l]<<4;K(c,ca[d>>6&63],ca[d&63],"__");break;case 2:d=(a[l]<<10)+(a[l+1]<<2),K(c,ca[d>>12&63],ca[d>>6&63],ca[d&63],"_")}a={"wv-data":c.join("")};v.send("visor","webvisor",b,a);Aa.length=0}}var lc=100,mc=200,D=15E3,ka=20,Ha=50,Ea=10,Ma=1,Na=2,la=3,ma=16,ab=4,bb=5,cb=7,db=9,sa=10,fb=11,vb=12,wb=13,gc=14,hc=15,ic=17,jc=18,kc=19,fc=27,dc=28,ec=29,$b=30,Zb=32,ac=1,cc=2,bc=4,Db=1,Vb=2,Wb=4,Bb=8,Xb=16,Cb=32,Tb=64,Yb=2,Ab=1,zb=
2,gb=4,Qb=8,Oa=16,Ub={A:1,ABBR:2,ACRONYM:3,ADDRESS:4,APPLET:5,AREA:6,B:7,BASE:8,BASEFONT:9,BDO:10,BIG:11,BLOCKQUOTE:12,BODY:13,BR:14,BUTTON:15,CAPTION:16,CENTER:17,CITE:18,CODE:19,COL:20,COLGROUP:21,DD:22,DEL:23,DFN:24,DIR:25,DIV:26,DL:27,DT:28,EM:29,FIELDSET:30,FONT:31,FORM:32,FRAME:33,FRAMESET:34,H1:35,H2:36,H3:37,H4:38,H5:39,H6:40,HEAD:41,HR:42,HTML:43,I:44,IFRAME:45,IMG:46,INPUT:47,INS:48,ISINDEX:49,KBD:50,LABEL:51,LEGEND:52,LI:53,LINK:54,MAP:55,MENU:56,META:57,NOFRAMES:58,NOSCRIPT:59,OBJECT:60,
OL:61,OPTGROUP:62,OPTION:63,P:64,PARAM:65,PRE:66,Q:67,S:68,SAMP:69,SCRIPT:70,SELECT:71,SMALL:72,SPAN:73,STRIKE:74,STRONG:75,STYLE:76,SUB:77,SUP:78,TABLE:79,TBODY:80,TD:81,TEXTAREA:82,TFOOT:83,TH:84,THEAD:85,TITLE:86,TR:87,TT:88,U:89,UL:90,VAR:91,NOINDEX:100},W=da(),Z=[],hb=0;wa(0);var ib=0,Qa=[],Ib,kb=1,Jb=0,mb=[0,0],Kb=0,nb=[0,0],ob={},pb=!0,qb=!1,lb="",rb=!1,Ja=!0,ca="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-".split(""),Aa=[],Sa,nc=1,Rb=X(),I="metrikaId_"+Math.random(),Pa=
{},Xa=":submit"+Math.random();if("MetrikaPlayer"!=d.name){r(a,"mousemove",f);r(a,"click",y);r(a,"mousedown",y);r(a,"mouseup",c);r(d,"scroll",h);r(d,"beforeunload",Ta);Ob||r(d,"unload",Ta);r(d,"resize",N);N();r(a,"keydown",Mb);r(a,"keypress",Nb);r(a,"copy",k);r(a,"touchmove",w);r(a,"touchstart",w);a.attachEvent&&!d.opera?(r(a,"focusin",l),r(a,"focusout",R)):(r(d,"focus",ra),r(d,"blur",B),r(a,"blur",B));if(a.addEventListener)a.addEventListener("scroll",q,!0),a.addEventListener("focus",G,!0),a.addEventListener("blur",
Ua,!0),a.addEventListener("change",Va,!0),a.addEventListener("submit",u,!0);else if(a.attachEvent){r(a,"focusin",G);r(a,"focusout",Ua);for(var tb=a.getElementsByTagName("form"),Za=0;Za<tb.length;Za++){for(var ub=tb[Za].getElementsByTagName("*"),$a=0;$a<ub.length;$a++)/^INPUT|SELECT|TEXTAREA$/.test(ub[$a].tagName)&&r(ub[$a],"change",Va);r(tb[Za],"submit",u)}}var Ka=a.getElementsByTagName("form");if(Ka.length)for(var La=0;La<Ka.length;La++)Ka[La][Xa]=Ka[La].submit,Ka[La].submit=function(){u({target:this});
return this[Xa]()};"0:0"!=W.join(":")&&h();var Pb=function(b,e){if(b){var c={"wv-type":1,"cnt-class":S,"page-url":p().href,"wv-hit":t,"browser-info":["z",sb,"i",Wa,"pct",e||""].join(":")},l=2;if(a.all)b=b.replace(/\r\n/g,"\n");else{for(var l=b,l=l.replace(/\r\n/g,"\n"),d=[],f=String.fromCharCode,h=0,y=l.length;h<y;h++){var k=l.charCodeAt(h);128>k?d.push(f(k)):(127<k&&2048>k?d.push(f(k>>6|192)):(d.push(f(k>>12|224)),d.push(f(k>>6&63|128))),d.push(f(k&63|128)))}for(var l=d.join(""),d=[],q,R,N,k=0,j=
l.length;k<j;)q=l.charCodeAt(k++),f=l.charCodeAt(k++),h=l.charCodeAt(k++),y=q>>2,q=(q&3)<<4|f>>4,R=(f&15)<<2|h>>6,N=h&63,isNaN(f)?R=N=64:isNaN(h)&&(N=64),d.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(y)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(R)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(N));b=d.join("");l=3}v.sendMultipart("webvisor",
c,{"wv-data":b},l)}};F.uploadPage=function(b){if("function"==typeof d.toStaticHTML)return!1;var e=a.documentElement;if(e&&19E4<(""+e.innerHTML).length)return!1;var c=d.XMLHttpRequest?new d.XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP"),l=(""+(a.characterSet||a.charset||"")).toLowerCase(),e="text/html"+(l?";charset="+l:"");if("html"==b){b=RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>","gi");var l=a.documentElement,f=a.doctype,h=l.attributes,y="",k="",q="",k=l.outerHTML;if(!k){for(k=
0;k<h.length;k++){var R=h[k];R&&(y+=" "+R.name+'="'+(R.value||"")+'"')}k="<html"+y+">"+l.innerHTML+"</html>"}f&&(q="<!DOCTYPE "+f.name+(f.publicId?' PUBLIC "'+f.publicId+'"':"")+(f.systemId?' "'+f.systemId+'"':"")+">\n");Pb((q+k).replace(b,""),e);return!0}c&&(c.open("get",p().href,!0),c.onreadystatechange=function(){4==c.readyState&&Pb(c.responseText,c.getResponseHeader("content-type"))},c.overrideMimeType&&l&&c.overrideMimeType(e),c.send(null));return!0}}return{stop:function(){E(a,"mousemove",f);
E(a,"click",y);E(a,"mousedown",y);E(a,"mouseup",c);E(d,"scroll",h);E(d,"beforeunload",Ta);E(d,"unload",Ta);E(d,"resize",N);E(a,"keydown",Mb);E(a,"keypress",Nb);E(a,"copy",k);E(a,"touchmove",w);E(a,"touchstart",w);E(a,"focusin",l);E(a,"focusout",R);E(d,"focus",ra);E(d,"blur",B);E(a,"blur",B);if(a.removeEventListener)a.removeEventListener("scroll",q,!0),a.removeEventListener("focus",G,!0),a.removeEventListener("blur",Ua,!0),a.removeEventListener("change",Va,!0),a.removeEventListener("submit",u,!0);
else if(a.detachEvent){E(a,"focusin",G);E(a,"focusout",Ua);for(var b=a.getElementsByTagName("form"),e=0;e<b.length;e++){for(var m=b[e].getElementsByTagName("*"),j=0;j<m.length;j++)/^INPUT|SELECT|TEXTAREA$/.test(m[j].tagName)&&E(m[j],"change",Va);E(b[e],"submit",u)}}b=a.getElementsByTagName("form");for(e=0;e<b.length;e++)b[e][Xa]&&(b[e].submit=b[e][Xa])},uploadPages:function(b,e){for(var a=b.split(/\n/),c=p().href,l=/regexp:/,d=0;d<a.length;d++){var f=a[d];if(f)if(l.test(f)){if(f=xb(f.replace(l,"")),
RegExp(f).test(c)){F.uploadPage(e);break}}else if(-1!==c.indexOf(f)){F.uploadPage(e);break}}}}}var Ob=-1===(""+d.navigator.userAgent).toLowerCase().search(/webkit/)&&-1!==(""+d.navigator.userAgent).toLowerCase().search(/gecko/);d.Ya=d.Ya||{};Ya._metrika=Ya._metrika||{};Ya._metrika.hitParam=Ya._metrika.hitParam||{};var V=p(),sb,Wa,da=d.navigator,ia=d.screen,Ba="https:"==V.protocol?"https:":"http:",vb="$Rev: 1825 $".match(/(\d+)/)[1],ja="object"==typeof a.all,ab=64,ea=ja?512:2048,bb=ja?512:2048,cb=
ja?100:400,Ca="noindex",Da=50,db=RegExp("\\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$","i"),wb=+new Date,Ea,Fa;d.Ya.Metrika=function(z,S,s,t){function v(e,a,c){T[T.length]=[c,c];e.addEventListener?e.addEventListener(a,
c,!1):e.attachEvent&&e.attachEvent("on"+a,c)}function F(a,d,c){for(var f=0;f<T.length;f++)if(T[f]&&T[f][0]==c){var h=T[f][1];delete T[f];break}h&&(a.removeEventListener?a.removeEventListener(d,h,!1):a.detachEvent&&a.detachEvent("on"+d,h))}function C(a,y){y=y||256;if(!a)return"";a.length>y&&(a=a.substr(0,y));return(d.encodeURIComponent||d.escape)(a).replace(/\+/g,"%2B")}function L(a){function d(a){return a?a.replace(/\\/g,"\\\\").replace(/"/g,'\\"'):""}if(a===fa)return"";if(null===a)return"null";switch(a.constructor){case Boolean:return a.toString();
case Number:return isFinite(a)?a.toString():"null";case String:return'"'+d(a)+'"';case Array:for(var c=[],f=0,h=a.length;f<h;f++)c[c.length]=L(a[f]);return"["+c.join(",")+"]";case Object:c="{";f=0;for(h in a)if(a.hasOwnProperty(h)){var q=a[h];q!==fa&&(c+=(f?",":"")+'"'+d(h)+'":'+L(q),f++)}return c+"}";default:return"null"}}function O(a){return Math.floor(Math.random()*("number"==typeof a?a:1E6))}function U(a){for(var d=+new Date,c=1;0<c;c++)if(0==c%1E3){var f=+new Date;if(d>f)break;if(f-d>a)break}}
function la(a,d){if(!a||!d)return!1;for(var c=[],f=0;f<d.length;f++)c.push(d[f].replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\./g,"\\.").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\|/g,"\\|").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\?/g,"\\?").replace(/\*/g,"\\*").replace(/\+/g,"\\+").replace(/\{/g,"\\{").replace(/\}/g,"\\}"));return RegExp("\\.("+c.join("|")+")$","i").test(a)}function ma(a,y){var c=y.target,f=!1;if(!y.hostname)return!1;if(!c||"_self"==c||"_top"==c||"_parent"==
c)f=!0;(c=a.shiftKey||a.ctrlKey||a.altKey)||a.modifiers&&d.Event&&(c=a.modifiers&d.Event.CONTROL_MASK||a.modifiers&d.Event.SHIFT_MASK||a.modifiers&d.Event.ALT_MASK);return f&&!c}function H(a,d,c,f,h){function q(a,e){N[N.length]=a;N[N.length]=e}h=h||{};c="undefined"!=typeof c?c:X;var N=[];h.ar&&!h.onlyData&&(c=ga(c),a=ga(a));q("page-ref",C(c,ea));q("page-url",C(a,ea));q("browser-info",sa(d,h));Ma()?q("ut",Ca):"undefined"!=typeof h.ut&&q("ut",C(""+h.ut,ab));f&&q("site-info",C(L(f),bb));h.saveRef&&(X=
c);a=ta(j,N);ka()||((new Image).src=a,ua(a),h.isDelay&&U(h.delay));return a}function ta(a,d){for(var c=["rn",O(),"cnt-class",s].concat(d),f=[],h=0;h<c.length;h+=2){var q=c[h+1];q&&(f[f.length]=c[h]+"="+q)}return wa+a+z+"?"+f.join("&")}function ga(a){var d=p(),c=d.host,d=d.href;if(!a)return d;if(-1!=a.search(/^\w+:\/\//))return a;var f=a.charAt(0);if("?"==f)return f=d.search(/\?/),-1==f?d+a:d.substr(0,f)+a;if("#"==f)return f=d.search(/#/),-1==f?d+a:d.substr(0,f)+a;if("/"==f){if(f=d.search(c),-1!=f)return d.substr(0,
f+c.length)+a}else return c=d.split("/"),c[c.length-1]=a,c.join("/");return a}function ua(a){"function"==typeof d.ymLog&&d.ymLog(a)}function sa(e,y){function c(a,c){a&&c&&(f[f.length]=[a,c].join(":"))}y=y||{};var f=[],h=-1*(new Date).getTimezoneOffset(),q;q=new Date;q=[q.getFullYear(),q.getMonth()+1,q.getDate(),q.getHours(),q.getMinutes(),q.getSeconds()];for(var j="",n=0;n<q.length;n++)j+=10>q[n]?"0"+q[n]:q[n];q=j;Wa||(Wa=q,sb=h);c("j",da.javaEnabled()?"1":"");ia&&c("s",ia.width+"x"+ia.height+"x"+
(ia.colorDepth||ia.pixelDepth));if(null===jb){var n=j=null,p,s=d.navigator;if("undefined"!=typeof s.plugins&&"object"==typeof s.plugins["Shockwave Flash"])(j=s.plugins["Shockwave Flash"].description)&&!("undefined"!=typeof s.mimeTypes&&s.mimeTypes["application/x-shockwave-flash"]&&!s.mimeTypes["application/x-shockwave-flash"].enabledPlugin)&&(n=j.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,"."));else if("undefined"!=typeof d.ActiveXObject)try{if(p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(j=
p.GetVariable("$version"))&&(n=j.split(" ")[1].replace(/,/g,".").replace(/[^.\d]/g,""))}catch(t){}jb=n}c("f",jb);p=-1;a.documentElement&&"CSS1Compat"==a.compatMode?p=a.documentElement.clientWidth:a.body&&(p=a.body.clientWidth);j=-1;a.documentElement&&"CSS1Compat"==a.compatMode?j=a.documentElement.clientHeight:a.body&&(j=a.body.clientHeight);c("w",p+"x"+j);c("z",h);c("i",q);if(null===xa){h=null;if(d.ActiveXObject)try{var k=new ActiveXObject("AgControl.AgControl");p=function(a,c,e,d){for(;a.isVersionSupported(c[0]+
"."+c[1]+"."+c[2]+"."+c[3]);)c[e]+=d;c[e]-=d};q=[1,0,0,0];p(k,q,0,1);p(k,q,1,1);p(k,q,2,1E4);p(k,q,2,1E3);p(k,q,2,100);p(k,q,2,10);p(k,q,2,1);p(k,q,3,1);h=q.join(".")}catch(ra){}else if(k=da.plugins["Silverlight Plug-In"])h=k.description;xa=h}c("l",xa||"");c("en",(""+(a.characterSet||a.charset||"")).toLowerCase());c("v",vb);c("c",da.cookieEnabled?"1":"");ja&&a.documentMode&&(null===ya&&(ya=Function("return /*@cc_on @_jscript_version @*/;")()),ya&&c("jv",ya));c("la",(da&&(da.language||da.browserLanguage)||
"").toLowerCase());c("ex","prerender"==a.webkitVisibilityState?"pre1":"");$&&c("wh","1");h="ar ln dl ad nb pa".split(" ");for(k=0;k<h.length;k++)p=h[k],c(p,y[p]?"1":"");h=["va","vt","sn","sa","he"];y.nb&&h.push("cl");for(k=0;k<h.length;k++)p=h[k],c(p,y[p]);c("hid",P);if(!y.ar){a:{if(k=(k=d.performance||d.webkitPerformance)&&k.timing)if(h=k.navigationStart){p=[k.domainLookupEnd-k.domainLookupStart,k.connectEnd-k.connectStart,k.responseStart-k.requestStart,k.responseEnd-k.responseStart,k.fetchStart-
h];k.loadEventStart&&p.push(k.loadEventStart-h);k=p.join(",");break a}k=""}c("ds",k)}if(x._webvisor){d.name||(d.name=Math.round(65535*Math.random()));if(k=+d.name)0>k&&(k*=-1),k%=65535;c("wn",k||Ga(d.name));try{d.history&&c("hl",String(d.history.length))}catch(B){}}k="undefined"==typeof e?(k=na())?C(k,cb):"":C(e,cb);c("t",k);return f.join(":")}function na(){var e=a.title;"string"!=typeof e&&(e=(e=a.getElementsByTagName("title"))&&e.length?e[0].innerHTML:"");return e}function yb(a){var d={delay:Da};
switch(typeof a){case "string":d.on=!0;break;case "object":d.on=!0;d.delay="number"!=typeof a.delay?Da:a.delay;break;case "boolean":d.on=a;break;default:return}Ia=d}function r(){ha=X=J;H(p().href,na(),ha,null,{ut:va,ad:1==s&&d.Ya&&d.Ya.Direct?!0:!1,wh:!0,saveRef:!0});J=p().href}function E(e){function j(){var c=a.documentElement;return Math.max(c.scrollWidth,a.body.scrollWidth,c.clientWidth)}function c(a){return a.toString().toUpperCase()}function f(a){return a&&(a=""+a.className)&&-1!=a.search(/ym-clickmap-ignore/)?
!0:!1}function h(c){if(null==c.pageX&&null!=c.clientX){var e=a.documentElement,d=a.body;c.pageX=c.clientX+(e&&e.scrollLeft||d&&d.scrollLeft||0)-(e.clientLeft||0);c.pageY=c.clientY+(e&&e.scrollTop||d&&d.scrollTop||0)-(e.clientTop||0)}return{x:c.pageX,y:c.pageY}}function q(a){for(var e=c(a.nodeName);a.parentNode&&"BODY"!=e&&"HTML"!=e;){if("A"==e||"INPUT"==e||"TEXTAREA"==e)return!0;a=a.parentNode;e=a.nodeName}return!1}for(var n=this,s=0,x=null,t="A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR".split(" "),
r=59,k=String.fromCharCode,ra={},B=0;B<t.length;B++)ra[t[B]]=k(r),k(r),r++;this.handler=function(e){var k,G,t=a.getElementsByTagName("body")[0];if(!d.ymDisabledClickmap&&!f(t)){if(n._prefs.hasQuota){if(!n._prefs.quota)return;n._prefs.quota--}var B=e.target||e.srcElement;3==B.nodeType&&(B=B.parentNode);var t=c(B.nodeName),u=h(e),w;!e.which&&e.button!==fa&&(e.which=e.button&1?1:e.button&2?3:e.button&4?2:0);w=e.which;if(w=!((2==w||3==w)&&"A"!=t))if(w=B.offsetHeight,w=!(0===B.offsetWidth&&0===w||B.style&&
"none"===B.style.display)){b:{for(w=B;w.parentNode;){if(f(w)){w=!0;break b}w=w.parentNode}w=!1}if(w=!w){b:{w=n._prefs.ignoreTags;for(var r=0;r<w.length;r++)if(c(w[r])==c(t)){w=!0;break b}w=!1}w=!w&&n._prefs.filter(B,t)}}if(w){t=+new Date;B={dom:B,x:u.x,y:u.y,time:t};if(u=50<t-s)if(!(u=!n._prefs.ignoreSameClicks)){if(u=x){w=Math.abs(u.x-B.x);var r=Math.abs(u.y-B.y),v=B.time-u.time,u=u.dom==B.dom&&2>w&&2>r&&1E3>v?!0:!1}else u=!1;u=!u}if(u&&!ka()){w=h(e);u=w.x;w=w.y;var r=e.target||e.srcElement,z=n._prefs;
if(r.getBoundingClientRect){k=r.getBoundingClientRect();G=a.body;var D=a.documentElement,v=k.left+(d.pageXOffset||D.scrollLeft||G.scrollLeft)-(D.clientLeft||G.clientLeft||0);k=Math.round(k.top+(d.pageYOffset||D.scrollTop||G.scrollTop)-(D.clientTop||G.clientTop||0));G=Math.round(v)}else{k=r;for(v=G=0;k;)G+=parseInt(k.offsetTop),v+=parseInt(k.offsetLeft),k=k.offsetParent;k=G;G=v}D="";v=p().href;switch(z.mode){case "fixed":D="0";q(r)&&(D+="u");break;case "centered":D="1";k=Math.floor(j()/2);u=u>k?u-
k+32768:u;q(r)&&(D+="u");break;default:z=c(r.nodeName);z="BODY"==z||"HTML"==z?j():r.offsetWidth;D=c(r.nodeName);"BODY"==D||"HTML"==D?(D=a.documentElement,D=Math.max(D.scrollHeight,a.body.scrollHeight,D.clientHeight)):D=r.offsetHeight;z||(z=1);D||(D=1);u=Math.floor(65535*(u-G)/z);w=Math.floor(65535*(w-k)/D);for(k="";r.parentNode&&"BODY"!=c(r.nodeName)&&"HTML"!=c(r.nodeName);){k+=ra[r.nodeName]||"*";b:{z=r.parentNode;for(D=G=0;D<z.childNodes.length;D++)if(r.nodeName==z.childNodes[D].nodeName){if(r==
z.childNodes[D]){z=G;break b}G++}z=0}k+=z||"";r=r.parentNode}D=C(k,128)}$||(v=v?v.replace(/\#.*$/,""):v);"function"==typeof n._prefs.urlFilter&&(v=n._prefs.urlFilter(v));u=ta(Sb,["page-url",C(v,ea),"pointer-click","x:"+u+":y:"+w+":t:"+Math.floor(Math.floor(+new Date-wb)/100)+":p:"+D]);(new Image).src=u;ua(u);if(u=e.target||e.srcElement){3==u.nodeType&&(u=u.parentNode);for(w=c(u.nodeName);u.parentNode&&u.parentNode.nodeName&&("A"!=w&&"AREA"!=w||!u.href);)u=u.parentNode,w=c(u.nodeName);u=!u.href?!1:
u}else u=!1;u&&ma(e,u)&&U(n._prefs.delay)}s=t;x=B}}};this.setPrefs=function(a){function c(){return!0}this._prefs="undefined"==typeof a||!1===a||!0===a?{filter:c,ignoreTags:[],mode:"",delay:Da,quota:0,hasQuota:!1,ignoreSameClicks:!0}:{filter:a.filter||c,ignoreTags:a.ignoreTags||[],mode:a.mode||"",delay:"undefined"==typeof a.delay?Da:a.delay,quota:a.quota||0,hasQuota:!!a.quota,ignoreSameClicks:"undefined"==typeof a.ignoreSameClicks?!0:!1,urlFilter:a.urlFilter}};this.updateStatus=function(a){switch(typeof a){case "undefined":this.start(!0);
break;case "boolean":a?this.start(a):this.stop();break;case "object":this.start(a)}};this._start=!1;this.start=function(c){this.setPrefs(c);this._start||v(a,"click",this.handler);this._start=!0};this.stop=function(){this._start&&F(a,"click",this.handler);this._start=!1};this.start(e)}var x=this,P=Math.round(1073741824*Math.random()),va="",wa=Ba,X=V.href,J=V.href,ha="";Ya._metrika.counter||(Ya._metrika.counter=x);var n;"object"==typeof z&&(n=z,t=z.defer,va=z.ut,s=z.type,S=z.params,wa=z.onlyHttps?"https:":
Ba,z=z.id);z=z||0;s=s||0;var j="//mc.yandex.ru/watch/",Sb="//mc.yandex.ru/clmap/",T=[],jb=null,xa=null,ya=null,Eb=new function(e,j,c){function f(a,c,e){if(p)h(p,q(a,c,0),e,"application/x-www-form-urlencoded");else{if("XMLHttpRequest"in d){var f=new XMLHttpRequest;if("withCredentials"in f){var j=e?"POST":"GET";a=q(a,c,"POST"==j?1:0);f.open(j,a,!0);f.withCredentials=!0;"POST"==j&&!Ob&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.send("POST"==j?eb(e):null);return}}for(j in e)e.hasOwnProperty(j)&&
(c[j]=e[j]);(new Image).src=q(a,c,0)}}function h(a,c,e,d){var f="ifr"+Math.round(1E10*Math.random()),h=a.createElement("div");h.style.position="absolute";h.style.left="-99999px";h.style.top="-99999px";c=['<iframe name="',f,'"></iframe>','<form action="',c,'" method="post" target="',f,'" enctype="',d,'">'];for(var j in e)e.hasOwnProperty(j)&&K(c,'<textarea name="',j,'"></textarea>');K(c,"</form>");h.innerHTML=c.join("");a.body.appendChild(h);j=h.getElementsByTagName("form")[0];for(var q in e)e.hasOwnProperty(q)&&
(j[q].value=e[q]);j.submit();setTimeout(function(){a.body.removeChild(h)},1E4)}function q(a,d,f){d["browser-info"]=["ct",f,d["browser-info"]].join(":");return e+"//"+j+"/"+a+"/"+c+"?"+eb(d)}try{var p;if(d.ActiveXObject){var n=new ActiveXObject("htmlfile");n.open();n.write("<html><body></body></html>");n.close();p=n}else p=null}catch(r){}var t="",s=[];return{send:function(a,c,e,d){a?t?-1<t.indexOf("|"+a+"|")&&f(c,e,d):K(s,arguments):f(c,e,d)},sendMultipart:function(c,e,d,f){h(p||a,q(c,e,f),d,"multipart/form-data")},
init:function(a){t="|"+a.join("|")+"|";for(a=0;a<s.length;a++)-1<t.indexOf("|"+s[a][0]+"|")&&f(s[a][1],s[a][2],s[a][3]);s.length=0}}}(wa,"mc.yandex.ru",z),za;x.reachGoal=function(e,d){var c=e?"goal://"+p().hostname+"/"+e:p().href,f=na(),h=e?p().href:a.referrer;H(c,f,h,d,{ar:!0,isDelay:e?!0:!1,delay:100});return!0};var Ia;x.trackLinks=yb;x.hit=function(a,d,c,f,h){a&&H(a,d,c,f,{ut:h,ar:!0,saveRef:!0})};x.params=function(a){if(a){var d=arguments.length;if(1<d){for(var c={},f=c,h=0;h<d-1;h++){var j=""+
arguments[h];f[j]={};h<d-2&&(f=f[j])}f[j]=arguments[d-1];a=c}H("","","",a,{ar:!0,pa:!0,onlyData:!0})}};x.file=function(a,d,c,f){a&&H(a,"",p().href,f,{ar:!0,ln:!0,dl:!0})};x.extLink=function(a,d,c,f){a&&H(a,"",p().href,f,{ar:!0,ln:!0,ut:Ca})};x.notBounce=function(){var a=0;Ea&&Fa&&(a=Fa-Ea);H("","","",null,{cl:a,ar:!0,nb:!0,onlyData:!0})};var oa=[];x.addFileExtension=function(a){"string"==typeof a?oa.push(a):oa=oa.concat(a)};x.clickmap=function(a){x._clickmap?x._clickmap.updateStatus(a):x._clickmap=
new E(a)};var Fb=!1;x.accurateTrackBounce=function(e){function j(){x.notBounce()}if(!Fb){Fb=!0;var c=a.referrer,f=p().href,h=function(a){a=a.split(":");a=a[1]||"";a=a.replace(/^\/*/,"").replace(/^www\./,"");return a.split("/")[0]};if(!(!c||!f?!c&&!f:h(c)==h(f)))if("number"!=typeof e&&(e=15E3),ja)setTimeout(j,e);else{var q=e,n=function(){if(!l){B&&clearTimeout(B);var a=q-(z?k:k+ +new Date-C);0>a&&(a=0);B=setTimeout(function(){l=!0;r(!1);j()},a)}};e=function(){s||(t=!0,z=!1,s=!0,n())};var r=function(a){for(var c=
0;c<A.length;c+=3)a?v(A[c],A[c+1],A[c+2]):F(A[c],A[c+1],A[c+2])},t=!1,s=!1,z=!0,k=0,C=+new Date,B=null,l=!1,A=[d,"blur",function(){z=t=s=!0;k+=+new Date-C;C=+new Date;n()},d,"focus",function(){!t&&!s&&(k=0);C=+new Date;t=s=!0;z=!1;n()},a,"click",e,a,"mousemove",e,a,"keydown",e,a,"scroll",e];r(!0);n()}}};var Gb=null,$=!1;x.trackHash=function(a){if(!1===a)$&&("onhashchange"in d?F(d,"hashchange",r):clearInterval(Gb),$=!1);else if(!$){if("onhashchange"in d)v(d,"hashchange",r);else{var j=function(){var a=
p().hash.split("#")[1];if("undefined"==typeof a)return!1;var c=a.indexOf("?");0<c&&(a=a.substring(0,c));return a},c=j();(function h(){var a=j();a!==c&&(r(),c=a);Gb=setTimeout(h,200)})()}$=!0}x._trackHash=$};x.video=function(a,d,c,f){var h=["end","play","pause","seek"];if(a&&c){a:{for(var j=0,n=h.length;j<n;j+=1)if(a===h[j]){h=j;break a}h=-1}-1!==h&&H(c,f||"","",null,{ar:!0,va:a,vt:~~d})}};x.social=function(a,d,c){a&&d&&H(c||p().href,"","",null,{ar:!0,sn:C(a,64),sa:C(d,64)})};x.enableAll=function(){x.trackLinks(!0);
x.clickmap(!0);x.accurateTrackBounce()};x.pause=U;x.uploadPage=function(){};if(z)a:{Ya._metrika.counters=Ya._metrika.counters||{};var aa=!1,M=z+":"+s;if(Ya._metrika.hitParam[M])if(1==s&&!Ya._metrika.counters[M])aa=!0;else break a;Ya._metrika.counters[M]=x;Ya._metrika.hitParam[M]=1;x._webvisor=!t&&(n&&n.webvisor||!1);n&&n.trackHash&&x.trackHash(!0);if(!t&&!aa){var Q=Na("_ym_visorc");"b"!=Q&&"w"!=Q&&(Q="");Ha("_metrika_enabled","1",60);t=!!Na("_metrika_enabled");Ha("_metrika_enabled","",-1);t||(Q="b");
Ea=+new Date;t=V.href;var aa=na(),ba=a.referrer,M={ut:va,he:n?~~n.httpError:0,ad:1==s&&d.Ya&&d.Ya.Direct?!0:!1,saveRef:!0},Hb=Q,Y=function(a,d){pa[pa.length]=a;pa[pa.length]=d},M=M||{},ba="undefined"!=typeof ba?ba:X,pa=[];M.ar&&!M.onlyData&&(ba=ga(ba),t=ga(t));if(!ka()){var qa="_ymjsp"+O(),A=a.createElement("script");d[qa]=function(a){try{delete d[qa]}catch(j){d[qa]=fa}Fa||(Fa=+new Date);a=a||{};var c=a.webvisor||{};a=[];if(za){var f=+c.recp;if(!isFinite(f)||0>f||1<f)Q="w";Q||(Q=P%1E4/1E4<f?"w":"b");
Ha("_ym_visorc",Q,30);"w"==Q?(K(a,"visor"),f=c.arch_type,(c=c.urls)&&f&&za.uploadPages(c,f)):za.stop()}Eb.init(a);A.parentNode&&A.parentNode.removeChild(A)};Y("wmode",5);Y("callback",qa);Y("page-ref",C(ba,ea));Y("page-url",C(t,ea));t=sa(aa,M);Hb&&(t=["vc",Hb,t].join(":"));Y("browser-info",t);Ma()?Y("ut",Ca):"undefined"!=typeof M.ut&&Y("ut",C(""+M.ut,ab));S&&Y("site-info",C(L(S),bb));M.saveRef&&(X=ba);t=ta(j,pa);A.type="text/javascript";A.src=t;aa=a.getElementsByTagName("head")[0];aa.insertBefore(A,
aa.firstChild);ua(t)}}yb(!1);v(a,"click",function(a){if(Ia.on){var d=function(a){var d=xb(c.innerHTML?c.innerHTML.toString().replace(/<\/?[^>]+>/gi,""):"");H(j,j==d?"":d,p().href,null,a)},c;var f=a.target||a.srcElement;if(f){3==f.nodeType&&(f=f.parentNode);for(var h=f.nodeName.toString().toLowerCase();f.parentNode&&f.parentNode.nodeName&&("a"!=h&&"area"!=h||!f.href);)f=f.parentNode,h=f.nodeName.toString().toLowerCase();c=f.href?f:!1}else c=!1;if(c){var f=!1,j=""+c.href,h=j?j.split(/\?/)[0]:"";if(db.test(h)||
db.test(j)||la(j,oa)||la(h,oa))f=!0;var n=c.className,h=n&&-1!=n.search(/ym-disable-tracklink/)?!0:!1,n=n&&-1!=n.search(/ym-external-link/)?!0:!1;h||(a={ln:!0,dl:f,isDelay:ma(a,c),delay:Ia.delay},n?d(a):(h=p().hostname,n=c.hostname,(h?h.replace(/^www\./,""):"")==(n?n.replace(/^www\./,""):"")?f&&(a.ln=!1,d(a)):j&&-1!=j.search(/^ *javascript:/i)||(a.ut=Ca,d(a))))}}});n&&(n.enableAll?x.enableAll():(n.clickmap&&x.clickmap(n.clickmap),n.trackLinks&&x.trackLinks(n.trackLinks),n.accurateTrackBounce&&x.accurateTrackBounce(n.accurateTrackBounce),
n.ad&&ad()));x._webvisor&&(za=new fb(z,s,n,P,Eb,x))}};d.ya_cid&&new Ya.Metrika(d.ya_cid,d.ya_params,d.ya_class);d.ya_cid&&!d.ya_hit&&(d.ya_hit=function(a,d){Ya._metrika.counter&&Ya._metrika.counter.reachGoal(a,d)});var F=d.yandex_metrika_callback,O=d.yandex_metrika_callbacks;"function"==typeof F&&F();if("object"==typeof O)for(F=0;F<O.length;F++){var U=O[F];U&&(O[F]=null,U())}la("yandex_metrika_callback");la("yandex_metrika_callbacks");O=["link","click","scroll","res"];for(F=0;F<O.length;F++)if(U=
O[F]+"map",-1!=V.href.search("ym_playback="+U)){ma(Ba+"//metrika.yandex.ru/js/"+U+"/_loader.js");break}d.Ya.Metrika.informer=function(a){var d=!!Ya.Metrika._informer;Ya.Metrika._informer=a;d||ma(Ba+"//mc.yandex.ru/metrika/informer.js")};if(top!=d&&parent==top&&d.postMessage&&!Ya.Metrika_visorPlayerOn){Ya.Metrika_visorPlayerOn=!0;F=a.createElement("div");F.innerHTML='<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
var sa=F.firstChild;setTimeout(function(){var d=a.body||a.documentElement;d.insertBefore(sa,d.firstChild);try{var p=sa.contentWindow.document}catch(s){}p&&(p.open(),p.write('<!doctype html><html><head><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7,IE=edge" /></head><body><script type="text/javascript">var newversion = true;try {if (top.postMessage) {window.onmessage = function(evt) {evt = evt || window.event;try {var message = new Function("return " + evt.data)();} catch (e) {return;}if (/(^|\\.)yandex\\.(ru|com|ua|kz|by|com\\.tr)(:\\d{4})?$/.test(evt.origin) && message.name == "script" && message.data) {var head = document.getElementsByTagName("head")[0];var base = document.createElement("base");base.href = message.data;head.appendChild(base);var script = document.createElement("script");script.src = message.data;head.appendChild(script);if (navigator.userAgent.indexOf("Firefox/3.6.") > -1) {parent.removeEventListener("message", window.onmessage, false);}window.onmessage = null;}};if (navigator.userAgent.indexOf("Firefox/3.6.") > -1) {parent.addEventListener("message", window.onmessage, false);}top.postMessage(\'{"name":"ping"}\', "*");}} catch (e) {}\x3c/script></body></html>'),
p.close())},500)}})(this,this.document);
