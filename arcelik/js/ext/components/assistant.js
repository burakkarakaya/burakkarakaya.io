var loadAssistant={init:function(){var t=$("#modal-assistant [data-poltio-js]").attr("data-poltio-js");$.cachedScript(t).done(function(t,s){console.log("Assistant JS loaded!")})}},PLPassistant={init:function(){utils.detectEl($("#assistant")[0])&&$.cachedScript(extJSPath+"components/filter/PLPassistant.js").done(function(t,s){"success"==s&&PLPassistantFN.init()})}},assistantStart={init:function(){this.events()},events:function(){$('[data-target="#modal-assistant"], #assistant').on("click",function(){loadAssistant.init(),PLPassistant.init()})}};