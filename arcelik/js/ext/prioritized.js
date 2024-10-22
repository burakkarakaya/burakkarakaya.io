var utilsIn={detectEl:function(e){return null!=e},forEach:function(e,t,s){for(var l=0;l<e.length;l++)t.call(s,l,e[l])},setClass:function(e){var t=this,s=(e=e||{}).target,l=(e.cls||"").split(" "),n=e.type||"add";t.forEach(s,function(e,s){t.forEach(l,function(e,t){"add"==n?s.classList.add(t):s.classList.remove(t)})})},responsiveControl:function(){var e=!1;return e=window.matchMedia("(max-width: 1024px)").matches?!0:e}},prioritized=(!function(a){a.stage={addEventListener:function(t,s){function e(e){e.events.push(t),e.handlers.push(s)}if(0<this.events.length){for(var l=0;l<this.events.length;++l)if(this.events[l]==t){var n=l;break}if(0<=n)for(n=0;n<s.length;++n)this.handlers[l].push(s[n]);else e(this)}else e(this)},removeEventListener:function(e,t){for(var s=0;s<this.events.length;++s)if(this.events[s]==e){if(null==t||""==t||null==t)this.events.splice(s,1),this.handlers.splice(s,1);else for(var s=this.handlers[s],l=0;l<s.length;++l)s[l].type==t&&s.splice(l,1);break}},dispatchEvent:function(e,t,s){if(0<this.events.length)for(var l=0;l<this.events.length;++l)if(this.events[l]==e&&0<this.handlers.length)for(var n=this.handlers[l],c=0;c<n.length;++c){var i=n[c];i.type==t&&void 0!==a[i.handler]&&a[i.handler](s)}},events:[],handlers:[]}}(window),{init:function(){this.customMenu.init(),this.customSearch.init()},customMenu:{el:{btn:".js-ov-trg",target:".js-ov-target",closeBtn:"#overlay, .btn-close, .btn-back",subMenuBtn:".menu-category > li",subMenuAccBtn:".menu-category > li > a",lv2Btn:".menu-category .lv2-li",lv2AccBtn:".menu-category .lv2-li > a"},cls:{activated:"activated",selected:"selected",nosub:"no-sub"},addEvent:function(){var t,r=this,e=document.querySelectorAll(r.el.btn),s=document.querySelectorAll(r.el.closeBtn),l=document.querySelectorAll(r.el.subMenuBtn),n=document.querySelectorAll(r.el.lv2Btn),c=document.querySelectorAll(r.el.lv2AccBtn),i=document.querySelectorAll(r.el.subMenuAccBtn);function a(e){(t=this.closest(".lv2-li")).classList.contains(r.cls.nosub)||(e.preventDefault(),t.classList.contains(r.cls.selected)?(console.log("lv1 fired!1"),utilsIn.setClass({target:n,cls:r.cls.selected,type:"remove"})):(console.log("lv1 fired!2"),utilsIn.setClass({target:n,cls:r.cls.selected,type:"remove"}),t.classList.add(r.cls.selected)))}function o(e){(t=this.closest("li")).classList.contains(r.cls.nosub)||(e.preventDefault(),t.classList.contains(r.cls.selected)?(t.classList.remove(r.cls.selected),document.querySelector(".menu-category").classList.remove("lv1-active")):(t.classList.add(r.cls.selected),document.querySelector(".menu-category").classList.add("lv1-active")))}utilsIn.detectEl(e)&&e.forEach(function(e){e.classList.contains("evt-initialized")||(e.classList.add("evt-initialized"),e.addEventListener("click",function(e){e.preventDefault();var t,s,l,n,c,i,a,e=this;e.classList.contains(r.cls.activated)?r.destroy():(r.destroy(),utilsIn.setClass({target:[e],cls:r.cls.activated,type:"add"}),a=e.getAttribute("data-target")||"",s=e.getAttribute("data-focus-input")||"",l=e.getAttribute("data-bdy")||"",""!==(t=a)&&(a=document.querySelectorAll(a),utilsIn.detectEl(a)&&utilsIn.setClass({target:a,cls:r.cls.activated,type:"add"}),s&&(s=document.querySelector(s))&&s.focus(),""!==l&&(document.body.classList.add(l),"menu-mnp-ready"===l)&&(s=e.closest(".prd-more"),l=e.closest(".pdp-more"),n=e.closest(".pdp-breadcrump"),c=e.closest(".evt-details"),i=e.closest(".page-ml-detail"),s?customShare.getObj(e,"plp"):l||n?customShare.getObj(e,"pdp"):c?customShare.getObj(e,"mll"):i&&customShare.getObj(e,"mld"),customShare.prepareLinks()),stage.dispatchEvent("CustomEvent",t+".opened",{elm:a[0],trigger:e})))}))}),utilsIn.detectEl(s)&&s.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),r.destroy()})}),utilsIn.detectEl(l)&&(utilsIn.responsiveControl()?(n=document.querySelectorAll(r.el.lv2Btn),c.forEach(function(e){e.classList.contains("evt-initialized")||(e.classList.add("evt-initialized"),e.addEventListener("click",a))}),i.forEach(function(e){e.classList.contains("evt-initialized")||(e.classList.add("evt-initialized"),e.addEventListener("click",o))})):l.forEach(function(e,t){0===t&&e.classList.add(r.cls.selected),e.addEventListener("mouseenter",function(e){this.classList.contains(r.cls.nosub)||(e.preventDefault(),utilsIn.setClass({target:l,cls:r.cls.selected,type:"remove"}),this.classList.add(r.cls.selected),(e=this.closest("li")).querySelector(".big-sub")&&e.classList.add("big-sub-container"))})}))},onMouseUp:function(){for(var e=document.getElementById("blog-main-menu").querySelectorAll(".selected"),t=0;t<e.length;t++)e[t].classList.remove("selected")},destroy:function(){var e,t=this,s=document.querySelectorAll(t.el.btn);utilsIn.detectEl(s)&&utilsIn.setClass({target:s,cls:t.cls.activated,type:"remove"}),utilsIn.forEach(s,function(e,t){t=t.getAttribute("data-bdy")||"";""!==t&&document.body.classList.remove(t)}),s=document.querySelectorAll(t.el.target),utilsIn.detectEl(s)&&(e=document.querySelector(t.el.target+"."+t.cls.activated))&&(utilsIn.setClass({target:s,cls:t.cls.activated,type:"remove"}),stage.dispatchEvent("CustomEvent","#"+e.getAttribute("id")+".closed",{elm:e,trigger:null})),document.body.classList.remove("ntf-ready")},init:function(){this.addEvent()}},customSearch:{el:{header:"#header-search",input:"#searchText",clearBtn:".btn-clear"},cls:{searching:"searching",searched:"searched",nores:"no-result"},addEvent:function(){var t=this,s=document.querySelector(t.el.header),l=s.querySelector(t.el.input),e=s.querySelector(t.el.clearBtn);utilsIn.detectEl(e)&&e.addEventListener("click",function(e){e.preventDefault(),l.value="",l.focus(),s.classList.remove(t.cls.searching,t.cls.searched,t.cls.nores)})},init:function(){this.addEvent()}}});"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?prioritized.init():document.addEventListener("DOMContentLoaded",function(){prioritized.init()});