(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(6),r=n.n(a),i=n(0),l=n.n(i),o=(n(136),n(142)),s=n.n(o),c=n(140),u=n.n(c),m=n(138),h=(n(145),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description");s()(this,"props.data.allMarkdownRemark.edges");return l.a.createElement(m.a,{location:this.props.location,title:e},l.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),l.a.createElement("p",null,"Projects page"),l.a.createElement("p",null,"Projects coming soon!"))},t}(l.a.Component));t.default=h;var d="3998338720"},136:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(135),s=n.n(o);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(137),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var m=n(28);n.d(t,"parsePath",function(){return m.a});var h=r.a.createContext({}),d=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},137:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},138:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(46),l=n.n(i),o=n(0),s=n.n(o),c=(n(136),n(144)),u=n.n(c),m=(n(143),function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleDarkMode=n.toggleDarkMode.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.toggleDarkMode=function(e){var t=!0===e.target.checked?"dark":"light";window.__setPreferredTheme(t)},n.render=function(){var e=this.props.initialTheme;return s.a.createElement(u.a,{id:"dark-mode-toggle",defaultChecked:"dark"===e,onChange:this.toggleDarkMode,icons:{checked:"🌙",unchecked:"☀️"}})},t}(s.a.Component)),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={initialTheme:null},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({initialTheme:localStorage.getItem("theme")||"light"})},n.render=function(){var e=this.props,t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.animateIn,i=this.state.initialTheme;return s.a.createElement("nav",{className:"navigation-bar"+(r?" fade-in--nav":"")},t?s.a.createElement("div",{className:"menu-container"},s.a.createElement("a",{className:"menu-link",href:"/"},"Home"),s.a.createElement("a",{className:"menu-link",href:"/blog"},"Blog"),s.a.createElement("a",{className:"menu-link",href:"/projects"},"Projects"),s.a.createElement("button",{className:"menu-link menu-link--btn",onClick:a},"Close")):s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo"},s.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),s.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),s.a.createElement("div",{className:"nav-link-container"},s.a.createElement("div",{className:"toggle-container"},i&&s.a.createElement(m,{initialTheme:i})),s.a.createElement("a",{className:"no-underline nav-link first",href:"/blog"},"Blog"),s.a.createElement("a",{className:"no-underline nav-link",href:"/projects"},"Projects"),s.a.createElement("a",{className:"no-underline nav-link menu mobile-only",onClick:n},s.a.createElement("i",{className:"fa fa-bars"})))))},t}(s.a.Component),d=n(139),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"footer-content__container"},s.a.createElement("div",{className:"links-container"},s.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo brush-stroke-logo--light home-container--light"},s.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),s.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),s.a.createElement(d.a,{isLight:!0})),s.a.createElement("div",{className:"footer-content"},s.a.createElement("p",null,"Made with ",s.a.createElement("i",{class:"fas fa-heart"})," in Melbourne, Australia"),s.a.createElement("p",null,"Copyright © 2019 Josh Nelsson-Smith"))))},t}(s.a.Component),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1,first:!0},n.handleOpen=n.handleOpen.bind(l()(l()(n))),n.handleClose=n.handleClose.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.handleOpen=function(){window.__scrollLock(),this.setState({navOpen:!0,first:!1})},n.handleClose=function(){window.__scrollUnlock(),this.setState({navOpen:!1})},n.render=function(){var e=this.props,t=e.children,n=e.location,a=(e.title,e.disableAnimations),r=this.state,i=r.navOpen,l=r.first,o="/"===n.pathname,c="shade";return i?c+=" shade--open":l||(c+=" shade--close"),s.a.createElement("div",{className:"app"},s.a.createElement(h,{animateIn:o&&!a,onClose:this.handleClose,onOpen:this.handleOpen,isOpen:i}),s.a.createElement("div",{className:c}),s.a.createElement("div",{className:"content",style:{}},t),s.a.createElement(p,null))},t}(s.a.Component);t.a=f},139:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),l=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.animateIn,n=e.isLight;return l.a.createElement("div",{className:"links"+(t?" fade-in--nav":"")},l.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"https://www.linkedin.com/in/jnelssonsmith/"},l.a.createElement("i",{class:"fab fa-linkedin-in"})),l.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"https://twitter.com/jnelssonsmith"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"https://github.com/jnelssonsmith"},l.a.createElement("i",{class:"fab fa-github"})),l.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"mailto:https://github.com/jnelssonsmith"},l.a.createElement("i",{class:"fas fa-envelope"})))},t}(l.a.Component);t.a=o},141:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(47),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},143:function(e,t,n){},145:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),l=n.n(i),o=n(136),s=n(142),c=n.n(s),u=(n(140),n(138),n(4),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.numberOfPosts,n=e.posts,a=n;return t&&(a=n.slice(0,t)),a?a.map(function(e){var t=e.node,n=c()(t,"frontmatter.title")||t.fields.slug;return l.a.createElement("div",{key:t.fields.slug},l.a.createElement("h3",null,l.a.createElement(o.Link,{class:"blog-post-link",style:{boxShadow:"none"},to:t.fields.slug},n)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}):null},t}(l.a.Component));t.a=u}}]);
//# sourceMappingURL=component---src-pages-projects-index-js-cc11d5ba846da40b9cd4.js.map