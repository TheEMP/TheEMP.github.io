webpackJsonp([0],[,,function(t,e,a){a(24);var s=a(0)(a(11),a(43),"data-v-4b77e3a4",null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(12),a(45),null,null);t.exports=s.exports},function(t,e,a){a(20);var s=a(0)(a(14),a(39),"data-v-2f1d9b99",null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(17),a(46),null,null);t.exports=s.exports},function(t,e,a){"use strict";(function(t){var s=a(1),i=a(47),n=a(34),r=a.n(n),o=a(2),l=a.n(o),c=a(3),d=a.n(c),u=a(5),v=a.n(u);s.a.use(i.a);var m="#Interests",p={Gmod:m,Hammer:m,ZARP:m};e.a=new i.a({scrollBehavior:function(t,e,a){return p[t.name]?{selector:p[t.name]}:(console.log(t.hash),t.hash?{selector:t.hash}:void 0)},mode:"history",base:t,routes:[{path:"/",name:"Hello",component:r.a,children:[{path:"#gmod",name:"Gmod",component:l.a},{path:"#hammer",name:"Hammer",component:d.a},{path:"#fp-zarp",name:"ZARP",component:v.a}]}]})}).call(e,"/")},function(t,e,a){a(22);var s=a(0)(a(8),a(41),null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),i=a.n(s),n=a(33),r=a.n(n);e.default={name:"app",components:{NavBar:i.a,FooterBar:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myfooter"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer-bar"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"gmod",mounted:function(){$(".carousel.carousel-slider").carousel({fullWidth:!0}),setTimeout(function(){$(".carousel.carousel-slider").css("height","400px")},1e3)},data:function(){return{cheight:400}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hammer",mounted:function(){$(".slider").slider()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),i=a.n(s),n=a(32),r=a.n(n),o=a(3),l=a.n(o),c=a(2),d=a.n(c),u=a(5),v=a.n(u),m=a(35),p=a.n(m),h=a(29),f=a.n(h);e.default={name:"landingpage",data:function(){return{img:{bg1:f.a}}},components:{Hammer:l.a,Gmod:d.a,ZARP:v.a,MyFooter:r.a,NavBar:i.a,SC:p.a},computed:{isViewing:function(){return""!==this.$route.hash}},methods:{push:function(t){this.$router.push({name:t})},top:function(){document.body.scrollTop=document.documentElement.scrollTop=0}},mounted:function(){console.log(this.$route),$(".parallax").parallax(),$("ul.tabs").tabs()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(36),i=a.n(s);e.default={name:"Nav",mounted:function(){$(".dropdown-button").dropdown()},components:{submenus:i.a},activated:function(){console.log("activated"),this.$nextTick(function(){console.log("Next tick"),setTimeout(function(){$(".dropdown-button").dropdown()},1e3)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"showcase"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"submenus",mounted:function(){$(".dropdown-button").dropdown(),this.$nextTick(function(){console.log("Next tick"),setTimeout(function(){$(".dropdown-button").dropdown()},1e3)})},activated:function(){console.log("activated"),this.$nextTick(function(){console.log("Next tick"),setTimeout(function(){$(".dropdown-button").dropdown()},1e3)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hammer",mounted:function(){$(".slider").slider()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a(7),n=a.n(i),r=a(6);s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"static/img/SongSamurai.9e6473f.png"},function(t,e,a){t.exports=a.p+"static/img/background1.f0aea65.jpg"},function(t,e,a){t.exports=a.p+"static/img/background2.538862c.png"},function(t,e,a){t.exports=a.p+"static/img/background3.02eed65.jpg"},function(t,e,a){t.exports=a.p+"static/img/inspire.2597b41.jpg"},function(t,e,a){t.exports=a.p+"static/img/multi-player.40dccba.png"},function(t,e,a){var s=a(0)(a(9),a(38),null,null);t.exports=s.exports},function(t,e,a){a(25);var s=a(0)(a(10),a(44),null,null);t.exports=s.exports},function(t,e,a){a(19);var s=a(0)(a(13),a(37),"data-v-29b2218e",null);t.exports=s.exports},function(t,e,a){a(23);var s=a(0)(a(15),a(42),"data-v-3fee7694",null);t.exports=s.exports},function(t,e,a){a(21);var s=a(0)(a(16),a(40),"data-v-3478d5fd",null);t.exports=s.exports},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"fixed-action-btn"},[a("a",{staticClass:"btn-floating btn-large purple",on:{click:t.top}},[a("i",{staticClass:"large material-icons"},[t._v("publish")])])]),t._v(" "),a("div",{staticClass:"parallax-container",attrs:{id:"index-banner"}},[a("NavBar"),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"section"},[t._m(4),t._v(" "),a("Gmod",{staticClass:"col s12",attrs:{id:"gmod"}}),t._v(" "),a("ZARP",{staticClass:"col s12",attrs:{id:"zarp"}}),t._v(" "),a("Hammer",{staticClass:"col s12",attrs:{id:"hammer"}})],1)]),t._v(" "),a("div",{staticClass:"parallax-container valign-wrapper",attrs:{id:"Showcase"}},[t._m(5),t._v(" "),a("div",{staticClass:"parallax"},[a("img",{attrs:{src:t.img.bg1,alt:"Unsplashed background img 2"}})])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"section"},[a("SC")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section no-pad-bot"},[a("div",{staticClass:"container"},[a("br"),a("br"),t._v(" "),a("h1",{staticClass:"header center purple-text text-darken-3"},[t._v("Gunnar Anderson")]),t._v(" "),a("div",{staticClass:"row center"},[a("h5",{staticClass:"header col s12 black-text"},[t._v("A modern developer and network engineer")])]),t._v(" "),a("br"),a("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parallax"},[s("img",{attrs:{src:a(27),alt:"Unsplashed background img 1"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"section section scrollspy"},[a("div",{staticClass:"row",attrs:{id:"About"}},[a("div",{staticClass:"col l6 m12"},[a("div",{staticClass:"icon-block"},[a("h2",{staticClass:"center purple-text"},[a("i",{staticClass:"material-icons"},[t._v("flash_on")])]),t._v(" "),a("h5",{staticClass:"center"},[t._v("Great Guy")]),t._v(" "),a("p",{staticClass:"light flow-text"},[t._v("I love team work! Over the past 7 years I have had the unique opportunity to work as part part of the Community\n              Management Team of two great Gaming Community's. During this time I have been privileged to work with amazing\n              Individuals as part of a close team to solve and overcome the various challenges associated with running a\n              Network of thousands of active users and hundreds of thousands of unique players!")])])]),t._v(" "),a("div",{staticClass:"col l6 m12"},[a("div",{staticClass:"icon-block"},[a("h2",{staticClass:"center purple-text"},[a("i",{staticClass:"material-icons"},[t._v("group")])]),t._v(" "),a("h5",{staticClass:"center"},[t._v("About Me")]),t._v(" "),a("p",{staticClass:"light flow-text"},[t._v("The third gernation of my family to be born here in Boise, I've lived in the Boise Area all my life. After\n              Graduating high school in 2015. I briefly attended CWI and while I have taken a break from College to pursue\n              An early career in programming."),a("br"),t._v(" Starting a little over 7 years ago, I began playing around with a LUA\n              based language for a popular sandbox game know as Garry's Mod. Fast forward to the present and I have spent the last two years expanding my skill set as a full time Network Engineer.")])])]),t._v(" "),a("div",{staticClass:"col m12"},[a("div",{staticClass:"icon-block"},[a("h2",{staticClass:"center purple-text"},[a("i",{staticClass:"material-icons"},[t._v("settings")])]),t._v(" "),a("h5",{staticClass:"center"},[t._v("Language's I know")]),t._v(" "),a("p",{staticClass:"light flow-text"},[t._v("I would consider myself to be advanced in the following languages:\n              "),a("ul",[a("b",[a("li",[t._v("LUA (7+ Years),")]),t._v(" "),a("li",[t._v(" HTML/PHP (+7 Years),")]),t._v(" "),a("li",[t._v("SQL/MySQL (+7 Years),")]),t._v(" "),a("li",[t._v("Javascript (+5 Years)")])])])]),t._v(" "),a("p",{staticClass:"light flow-text"},[t._v(" and I would consider myself proficient in these languages: "),a("b",[t._v("C#, GIT, CSS")])]),t._v(" "),a("p",{staticClass:"light flow-text"},[t._v(" and have some knowledge and interests in these languages: "),a("b",[t._v("Java")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parallax-container valign-wrapper"},[s("div",{staticClass:"section no-pad-bot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row center"},[s("h3",{staticClass:"header col s12 white-text"},[t._v("Passionate, Dedicated, Determined")])])])]),t._v(" "),s("div",{staticClass:"parallax"},[s("img",{attrs:{src:a(28),alt:"Unsplashed background img 2"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"Interests"}},[a("div",{staticClass:"col s12"},[a("ul",{staticClass:"tabs tabs-fixed-width"},[a("li",{staticClass:"tab col s4"},[a("a",{staticClass:"purple-text",attrs:{href:"#gmod"}},[t._v("Garry's Mod")])]),t._v(" "),a("li",{staticClass:"tab col s4"},[a("a",{staticClass:"purple-text",attrs:{href:"#zarp"}},[t._v("FP/ZARP")])]),t._v(" "),a("li",{staticClass:"tab col s4"},[a("a",{staticClass:"purple-text",attrs:{href:"#hammer"}},[t._v("Hammer")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row center"},[a("h3",{staticClass:"header col s12 black-text"},[t._v("Showcase")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer purple darken-2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col l6 s12"},[a("h5",{staticClass:"white-text"},[t._v("Company Bio")]),t._v(" "),a("p",{staticClass:"grey-text text-lighten-4"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi natus vitae necessitatibus quas possimus\n          debitis, architecto facere iusto, ex rem consequatur est culpa minima, explicabo vero ducimus voluptas commodi.")])]),t._v(" "),a("div",{staticClass:"col l3 s12"},[a("h5",{staticClass:"white-text"},[t._v("Settings")]),t._v(" "),a("ul",[a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 1")])]),t._v(" "),a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 2")])]),t._v(" "),a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 3")])]),t._v(" "),a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 4")])])])]),t._v(" "),a("div",{staticClass:"col l3 s12"},[a("h5",{staticClass:"white-text"},[t._v("Connect")]),t._v(" "),a("ul",[a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 1")])]),t._v(" "),a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 2")])]),t._v(" "),a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 3")])]),t._v(" "),a("li",[a("a",{staticClass:"white-text",attrs:{href:"#!"}},[t._v("Link 4")])])])])])]),t._v(" "),a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"container"},[t._v("\n      Made by "),a("a",{staticClass:"purple-text text-lighten-3",attrs:{href:"http://materializecss.com"}},[t._v("Materialize")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("nav",{staticClass:"transparent"},[a("div",{staticClass:"nav-wrapper"},[a("submenus")],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"dropdown-content section",attrs:{id:"dropdown1"}},[a("li",[a("router-link",{staticClass:"purple-text",attrs:{href:"#Interests",to:{name:"Gmod"}}},[t._v("Garrys Mod")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"purple-text",attrs:{href:"#Interests",to:{name:"ZARP"}}},[t._v("FP/ZARP")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"purple-text",attrs:{href:"#Interests",to:{name:"Hammer"}}},[t._v("Mapping")])],1)]),t._v(" "),a("ul",{staticClass:"right menu-padding",attrs:{id:"nav-mobile section "}},[a("li",[a("router-link",{attrs:{to:"/#About",href:"#About"}},[t._v("About")])],1),t._v(" "),t._m(0),t._v(" "),a("li",[a("router-link",{attrs:{to:"/#Showcase",href:"#Showcase"}},[t._v("Showcase")])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"dropdown-button",attrs:{href:"#","data-activates":"dropdown1"}},[t._v("Interests"),a("i",{staticClass:"material-icons right"},[t._v("arrow_drop_down")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t._v(" "),a("FooterBar")],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col l4 m12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image showcard waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:a(31)}})]),t._v(" "),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Multi-Player"),s("i",{staticClass:"material-icons right"},[t._v("more_vert")])])]),t._v(" "),s("div",{staticClass:"card-reveal"},[s("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("Multi-Player"),s("i",{staticClass:"material-icons right"},[t._v("close")])]),t._v(" "),s("p",{staticClass:"black-text flow-text"},[t._v("A chat application, to allow gamers to connect to those with similar gaming interests! Built using Vue.js with a\r\n          Node backend.")]),t._v(" "),s("a",{attrs:{href:"https://jaime-lynn.github.io/multi-player/#/"}},[s("i",{staticClass:"small material-icons"},[t._v("launch")]),t._v("Demo")])])])]),t._v(" "),s("div",{staticClass:"col l4 m12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image showcard waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:a(26)}})]),t._v(" "),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Song Samurai"),s("i",{staticClass:"material-icons right"},[t._v("more_vert")])])]),t._v(" "),s("div",{staticClass:"card-reveal"},[s("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("Song Samurai"),s("i",{staticClass:"material-icons right"},[t._v("close")])]),t._v(" "),s("p",{staticClass:"black-text flow-text"},[t._v("A mix of fruit ninja and guitar hero. A rhythm based VR game created for and won the 2017 Hackfort imersithon. ")]),t._v(" "),s("a",{attrs:{href:"http://blog.boisecodeworks.com/2017/04/04/codeworks-won-the-ivrc-immersathon/"}},[s("i",{staticClass:"small material-icons"},[t._v("launch")]),t._v("Blog")])])])]),t._v(" "),s("div",{staticClass:"col l4 m12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image showcard waves-effect waves-block waves-light"}),t._v(" "),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Flame Wars"),s("i",{staticClass:"material-icons right"},[t._v("more_vert")])])]),t._v(" "),s("div",{staticClass:"card-reveal"},[s("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("Flame Wars"),s("i",{staticClass:"material-icons right"},[t._v("close")])]),t._v(" "),s("p",{staticClass:"black-text flow-text"},[t._v("A redit clone build in Vue.js.")]),t._v(" "),s("a",{attrs:{href:"https://github.com/TheEMP/flamewars"}},[s("i",{staticClass:"small material-icons"},[t._v("launch")]),t._v("Github")])])])]),t._v(" "),s("div",{staticClass:"col l4 m12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image showcard waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:a(30)}})]),t._v(" "),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Inspire"),s("i",{staticClass:"material-icons right"},[t._v("more_vert")])])]),t._v(" "),s("div",{staticClass:"card-reveal"},[s("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("Inspire"),s("i",{staticClass:"material-icons right"},[t._v("close")])]),t._v(" "),s("p",{staticClass:"black-text flow-text"},[t._v("A simple Javascript home page built to illustrate JS basics.")]),t._v(" "),s("a",{attrs:{href:"https://theemp.github.io/inspire/"}},[s("i",{staticClass:"small material-icons"},[t._v("launch")]),t._v("Demo")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 center"},[t._m(0),t._v(" "),a("p",{staticClass:"left-align light flow-text"},[t._v("A sandbox physics based game, Garry's Mod created by Facepunch. Utilizes a Lua based scripting language for a C++\n        interface to allow developers almost limitless moding possibilities. Gmod as it is more commonly know was first\n        Introduction to the concepts of programming and the biggest reason I started to actively program. Over the past\n        7 years I have created and maintained many addons/gamemodes/maps/servers for the use in Gmod. Utilizing a trusted\n        3rd party website (gmodstore.com) I have been able to successfully sell multiple scripts to hundreds of different\n        Customers.")]),t._v(" "),a("div",{staticClass:"carousel carousel-slider center",style:{height:t.cheight},attrs:{"data-indicators":"true"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("i",{staticClass:"mdi-content-send purple-text"},[t._v("Garry's Mod")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel-item grey white-text",attrs:{href:"#one!"}},[a("h2",[t._v("Man of the Match")]),t._v(" "),a("p",{staticClass:"white-text flow-text"},[t._v("Man of the match is a great way to reward your players for doing well in various game modes. At the end of\n            each map Man of the Match (MOTM) will automatically calculate the top 3 players. Rewarding them with a selection\n            Of easy to add/configure prizes. Anything from speed/health boosts to points and karma boosts.")]),t._v(" "),a("img",{attrs:{src:"https://s3.scriptfodder.com/script_banners/764cf9bb12b5daaf34d1764eb317e290.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel-item grey white-text",attrs:{href:"#two!"}},[a("h2",[t._v("RapSheet")]),t._v(" "),a("p",{staticClass:"white-text flow-text"},[t._v("Rapsheet is a brand new way for you to keep track of the punishments that a player has accumulated, punishments are stored forever and are available for admins to view in a sleek looking menu. Admins abusing commands? Now you can find out who is doing what, without having to search through hundreds of text files.")]),t._v(" "),a("img",{attrs:{src:"https://s3.scriptfodder.com/script_banners/97af4d502cba57242575f78936d97120.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel-item grey white-text",attrs:{href:"#three!"}},[a("h2",[t._v("Clean Chat")]),t._v(" "),a("p",{staticClass:"white-text flow-text"},[t._v("Clean chat is a simple way for server owners to stop players from using and spamming offensive language in chat. Put a stop once and for all to trolls and racists who come on your server just to chat spam.\n          "),a("br"),t._v(" "),a("br"),t._v(" "),a("br")]),t._v(" "),a("img",{attrs:{src:"https://s3.scriptfodder.com/script_banners/e68056704946208795747f85bcd878ce.png",alt:""}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer black text-white"},[a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"container"},[t._v("\n            © 2020 Gunnar Anderson\n            "),a("div",{staticClass:"right footer-icon"},[a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"http://steamcommunity.com/id/theemp/"}},[a("i",{staticClass:"fa fa-steam-square"})]),t._v("                    | "),a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://github.com/TheEMP"}},[a("i",{staticClass:"fa fa-github"})])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 center"},[a("h3",[a("i",{staticClass:"mdi-content-send purple-text"},[t._v("Hammer")])]),t._v(" "),a("p",{staticClass:"left-align light flow-text"},[t._v("An exelent way to ulitilze Binary Space Partition (.bsp), Hammer is a tool created by Valve to design and create\n        maps utilizing their format. I have been using hammer for around 6 years now and it has taught me alot about\n        how to create fulid and life like envoiroments for many people to enjoy!")]),t._v(" "),a("h4",[t._v("RP Down Town ZARP V4")]),t._v(" "),a("p",{staticClass:"left-align light flow-text"},[t._v("My most recent and updated example of something I have created/helped create in Hammer and while I can not claim credit for creating the original version of this map. I have extensivly redone and updated a majority of this map. Adding my own tweaks as I learned more about mapping in hammer! Please also keep in mind that on this verison of the map I was not working alone, as a talented hammer novice joined me as he strove to learn more about hammer. But overall this version of the map still showcases mostly my work.")]),t._v(" "),a("div",{staticClass:"slider"},[a("ul",{staticClass:"slides"},[a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589073688/FA138159B9F294050B0199716907D6D10614F03B/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589074031/00A6C5D22F94D527CC58DB946496C04D148BE2F3/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589074239/1F3CF73F56401795C55C3DAAE9D0D45A5449C0BB/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589075216/448CFA9550F6CFA005F3974F8E118EB41F0EE812/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589082202/9C99059C9C7F5A55BB065E454F758446F8C5DD1D/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589076881/CBC71FFDA662C4C163DAF9E4A35576105AF24E03/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589077256/7B230CB80BFD7FCD0B4573851B18F015740B82D1/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589079185/5B774B79734A1AF4BF57C50A8050E095721EF1C7/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589079466/1A1EC2D5A7B4E0D676DF91B76D4C87590B91D4E8/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://steamuserimages-a.akamaihd.net/ugc/168156750589079755/03273DCFC4E9E86F57F2F2B1F9D05AB1A763CF45/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside|1280:728&composite-to%3D%2A%2C%2A%7C637%3A358&background-color=black"}})])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 center"},[a("h3",[a("i",{staticClass:"mdi-content-send purple-text"},[t._v("Friendly Players and ZARP Gaming")])]),t._v(" "),a("p",{staticClass:"left-align light flow-text"},[t._v("\n        I found my way into the Friendly Players Gmod Gaming community 7 years ago. Friendly Players is one of the oldest Garry's Mod community's that is still in existance. After proving my trustworthyness, showing initation and demonstrating a passion for development. I was given the chance to step up into a leadership role and help develop Friendly Players and its sister community ZARP Gaming into some of the most popular servers in Garry's Mod. The friendships and experences I gained while running a community of this size has been extremly helpfull already in my profesonal experences.\n      ")])])])])}]}}],[18]);
//# sourceMappingURL=app.cdddd0443b3e3abda1e3.js.map