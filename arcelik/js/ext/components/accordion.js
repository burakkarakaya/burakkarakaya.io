var accordion={el:{main:".accordion",btn:".acc-item > button"},cls:{active:"active"},addEvent:function(){var s=this;$(s.el.main).find(s.el.btn).on("click",function(){var a=$(this),c=a.parents(s.el.main).attr("data-type")||"connected",a=a.parents("li").eq(0);"connected"==c?(a.hasClass(s.cls.active)?a.add(a.siblings()):a.addClass(s.cls.active).siblings()).removeClass(s.cls.active):a.hasClass(s.cls.active)?a.removeClass(s.cls.active):a.addClass(s.cls.active)})},init:function(){this.addEvent()}};