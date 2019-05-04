(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return h}),t.d(n,"StaticQuery",function(){return d});var a=t(0),r=t.n(a),i=t(4),s=t.n(i),l=t(135),o=t.n(l);t.d(n,"Link",function(){return o.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var c=t(137),m=t.n(c);t.d(n,"PageRenderer",function(){return m.a});var u=t(28);t.d(n,"parsePath",function(){return u.a});var h=r.a.createContext({}),d=function(e){return r.a.createElement(h.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},137:function(e,n,t){var a;e.exports=(a=t(141))&&a.default||a},138:function(e,n,t){"use strict";var a=t(6),r=t.n(a),i=t(46),s=t.n(i),l=t(0),o=t.n(l),c=(t(136),t(144)),m=t.n(c),u=(t(143),function(e){function n(n){var t;return(t=e.call(this,n)||this).toggleDarkMode=t.toggleDarkMode.bind(s()(s()(t))),t}r()(n,e);var t=n.prototype;return t.toggleDarkMode=function(e){var n=!0===e.target.checked?"dark":"light";window.__setPreferredTheme(n)},t.render=function(){var e=this.props.initialTheme;return o.a.createElement(m.a,{id:"dark-mode-toggle",defaultChecked:"dark"===e,onChange:this.toggleDarkMode,icons:{checked:"🌙",unchecked:"☀️"}})},n}(o.a.Component)),h=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={initialTheme:null},t}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({initialTheme:localStorage.getItem("theme")||"light"})},t.render=function(){var e=this.props,n=e.isOpen,t=e.onOpen,a=e.onClose,r=e.animateIn,i=this.state.initialTheme;return o.a.createElement("nav",{className:"navigation-bar"+(r?" fade-in--nav":"")},n?o.a.createElement("div",{className:"menu-container"},o.a.createElement("a",{className:"menu-link",href:"/"},"Home"),o.a.createElement("a",{className:"menu-link",href:"/blog"},"Blog"),o.a.createElement("a",{className:"menu-link",href:"/projects"},"Projects"),o.a.createElement("button",{className:"menu-link menu-link--btn",onClick:a},"Close")):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo"},o.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),o.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),o.a.createElement("div",{className:"nav-link-container"},o.a.createElement("div",{className:"toggle-container"},i&&o.a.createElement(u,{initialTheme:i})),o.a.createElement("a",{className:"no-underline nav-link first",href:"/blog"},"Blog"),o.a.createElement("a",{className:"no-underline nav-link",href:"/projects"},"Projects"),o.a.createElement("a",{className:"no-underline nav-link menu mobile-only",onClick:t},o.a.createElement("i",{className:"fa fa-bars"})))))},n}(o.a.Component),d=t(139),p=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-content__container"},o.a.createElement("div",{className:"links-container"},o.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo brush-stroke-logo--light home-container--light"},o.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),o.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),o.a.createElement(d.a,{isLight:!0})),o.a.createElement("div",{className:"footer-content"},o.a.createElement("p",null,"Made with ",o.a.createElement("i",{class:"fas fa-heart"})," in Melbourne, Australia"),o.a.createElement("p",null,"Copyright © 2019 Josh Nelsson-Smith"))))},n}(o.a.Component),f=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={navOpen:!1,first:!0},t.handleOpen=t.handleOpen.bind(s()(s()(t))),t.handleClose=t.handleClose.bind(s()(s()(t))),t}r()(n,e);var t=n.prototype;return t.handleOpen=function(){window.__scrollLock(),this.setState({navOpen:!0,first:!1})},t.handleClose=function(){window.__scrollUnlock(),this.setState({navOpen:!1})},t.render=function(){var e=this.props,n=e.children,t=e.location,a=(e.title,e.disableAnimations),r=this.state,i=r.navOpen,s=r.first,l="/"===t.pathname,c="shade";return i?c+=" shade--open":s||(c+=" shade--close"),o.a.createElement("div",{className:"app"},o.a.createElement(h,{animateIn:l&&!a,onClose:this.handleClose,onOpen:this.handleOpen,isOpen:i}),o.a.createElement("div",{className:c}),o.a.createElement("div",{className:"content",style:{}},n),o.a.createElement(p,null))},n}(o.a.Component);n.a=f},139:function(e,n,t){"use strict";var a=t(6),r=t.n(a),i=t(0),s=t.n(i),l=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.animateIn,t=e.isLight;return s.a.createElement("div",{className:"links"+(n?" fade-in--nav":"")},s.a.createElement("a",{className:"no-underline link__item"+(t?" link__item--light":""),href:"https://www.linkedin.com/in/jnelssonsmith/"},s.a.createElement("i",{class:"fab fa-linkedin-in"})),s.a.createElement("a",{className:"no-underline link__item"+(t?" link__item--light":""),href:"https://twitter.com/jnelssonsmith"},s.a.createElement("i",{class:"fab fa-twitter"})),s.a.createElement("a",{className:"no-underline link__item"+(t?" link__item--light":""),href:"https://github.com/jnelssonsmith"},s.a.createElement("i",{class:"fab fa-github"})),s.a.createElement("a",{className:"no-underline link__item"+(t?" link__item--light":""),href:"mailto:https://github.com/jnelssonsmith"},s.a.createElement("i",{class:"fas fa-envelope"})))},n}(s.a.Component);n.a=l},141:function(e,n,t){"use strict";t.r(n);t(29);var a=t(0),r=t.n(a),i=t(4),s=t.n(i),l=t(47),o=t(2),c=function(e){var n=e.location,t=o.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=c},143:function(e,n,t){},164:function(e,n,t){},165:function(e,n,t){},166:function(e,n,t){"use strict";var a=t(6),r=t.n(a),i=t(0),s=t.n(i),l=t(139),o=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props.disableAnimations;return s.a.createElement("div",{className:"intro"},s.a.createElement("p",null,s.a.createElement("span",{className:"bio-text "+(e?"":" intro-anim intro-anim--first")},"Hi, I'm")," ",s.a.createElement("span",{className:(e?"":"brush-anim brush-anim--first")+" bio-brush-stroke bio-brush-stroke--josh"},"Josh")),s.a.createElement("p",null,s.a.createElement("span",{className:"bio-text "+(e?"":" intro-anim intro-anim--second")},"I'm a"),s.a.createElement("br",{className:"mobile-break"}),s.a.createElement("span",{className:(e?"":"brush-anim brush-anim--second")+" bio-brush-stroke bio-brush-stroke--job"},"Front-End Engineer")),s.a.createElement("p",null,s.a.createElement("span",{className:"bio-text "+(e?"":" intro-anim intro-anim--third")},"Currently based in"),s.a.createElement("br",{className:"mobile-break"}),s.a.createElement("span",{className:(e?"":"brush-anim brush-anim--third")+" bio-brush-stroke bio-brush-stroke--location"},"Melbourne, Australia")),s.a.createElement(l.a,{animateIn:!e}))},n}(s.a.Component);n.a=o}}]);
//# sourceMappingURL=1-aa96268f5c7bb3a5b90f.js.map