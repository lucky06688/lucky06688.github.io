(window.webpackJsonp=window.webpackJsonp||[]).push([[8,20],{116:function(t,s,n){"use strict";var a=n(81);n.n(a).a},117:function(t,s,n){},118:function(t,s,n){},142:function(t,s,n){"use strict";n.r(s);var a={props:["tag","slug"]},e=(n(116),n(2)),r=Object(e.a)(a,function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"tag-wrap",attrs:{tabindex:"0"}},[s("span",{staticClass:"tag-inner"},[this._t("default")],2)])},[],!1,null,null,null);s.default=r.exports},184:function(t,s,n){"use strict";var a=n(117);n.n(a).a},185:function(t,s,n){"use strict";var a=n(118);n.n(a).a},214:function(t,s,n){"use strict";n.r(s);var a=n(142),e={name:"post-card",props:{post:{type:Object,required:!0}},components:{Tag:a.default},computed:{title(){return this.post.frontmatter.title||this.post.title}}},r=(n(184),n(185),n(2)),i=Object(r.a)(e,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"card article-card"},[n("h2",[n("router-link",{staticClass:"art-header-link",attrs:{to:t.post.path}},[t._v(t._s(t.title))])],1),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.excerpt)}}),t._v(" "),t.post.tags?n("div",[n("div",{staticClass:"divider article-card-line"}),t._v(" "),t._l(t.post.tags,function(s){return n("tag",{key:s,attrs:{slug:s}},[t._v("\n      "+t._s(s)+"\n    ")])})],2):t._e()])},[],!1,null,null,null);s.default=i.exports},81:function(t,s,n){}}]);