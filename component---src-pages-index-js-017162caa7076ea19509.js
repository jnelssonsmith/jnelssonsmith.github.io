(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return b});var n=a(6),s=a.n(n),r=a(0),l=a.n(r),o=(a(136),a(142)),i=a.n(o),c=a(140),m=a.n(c),u=(a(164),a(165),a(166)),p=a(138),d=a(145),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:!0,disableAnimations:null},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=sessionStorage.getItem("disable-animations");e||sessionStorage.setItem("disable-animations","."),this.setState({disableAnimations:e,loading:!1})},a.render=function(){var e=i()(this,"props.data.site.siteMetadata.title"),t=i()(this,"props.data.site.siteMetadata.description"),a=i()(this,"props.data.allMarkdownRemark.edges"),n=this.state,s=n.disableAnimations;return n.loading?null:l.a.createElement(p.a,{disableAnimations:s,location:this.props.location,title:e},l.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),l.a.createElement(u.a,{disableAnimations:s}),l.a.createElement("div",{className:!s&&"fade-in--nav"},l.a.createElement("hr",null),l.a.createElement("h2",{className:"header--brush-stroke"},l.a.createElement("span",{className:"brush-stroke-wrapper"},l.a.createElement("span",{className:"brush-stroke-test"},"Latest Blog Posts"))),l.a.createElement(d.a,{posts:a,numberOfPosts:3}),l.a.createElement("a",{className:"blog-post-link",href:"/blog"},"See all posts"),l.a.createElement("div",{style:{marginBottom:"100px"}}),l.a.createElement("hr",null),l.a.createElement("h2",{className:"header--brush-stroke"},l.a.createElement("span",{className:"brush-stroke-wrapper"},l.a.createElement("span",{className:"brush-stroke-test"},"Projects"))),l.a.createElement("p",null,"Projects coming soon!")))},t}(l.a.Component);t.default=h;var b="2584137191"},145:function(e,t,a){"use strict";var n=a(6),s=a.n(n),r=a(0),l=a.n(r),o=a(136),i=a(142),c=a.n(i),m=(a(140),a(138),a(4),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.numberOfPosts,a=e.posts,n=a;return t&&(n=a.slice(0,t)),n?n.map(function(e){var t=e.node,a=c()(t,"frontmatter.title")||t.fields.slug;return l.a.createElement("div",{key:t.fields.slug},l.a.createElement("h3",null,l.a.createElement(o.Link,{class:"blog-post-link",style:{boxShadow:"none"},to:t.fields.slug},a)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}):null},t}(l.a.Component));t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-017162caa7076ea19509.js.map