!function(t,e,n){function r(e){var r=t[e];return t[e]=n,r}function o(t,e){return r("yandex_"+(e?e+"_":"")+t)}function a(t,e,n){for(var r=0;r<e.length;r++)t[e[r]]=o(e[r],n)}var c=t.Ya=t.Ya||{};if(!c.loaderVer&&(c.loaderVer=1095),!c.codeVer){var i=Math.random();c.codeVer=.05>=i?1095:.1>=i?1094:1091}if(c.confirmVer=1071,!c.Context){c.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,HTTPS_MODE:n,HTTPS_MODES:{CONTROL:1,ENABLED:2}};var i=Math.random();.1>=i?c.Context.HTTPS_MODE=c.Context.HTTPS_MODES.CONTROL:.2>=i&&(c.Context.HTTPS_MODE=c.Context.HTTPS_MODES.ENABLED),c.Direct={insertInto:function(t,e,n,r){c.Context._asyncModeOn||(c.Context._asyncModeOn=!0),c.Context.AdvManager?c.Context.AdvManager.renderDirect(t,e,n,r):c.Context._callbacks.push(function(){c.Context.AdvManager.renderDirect(t,e,n,r)})}}}for(var _=["yandex_context_callbacks","yandexContextAsyncCallbacks"],l=0;l<_.length;l++){var s=r(_[l]);if(s){c.Context._asyncModeOn||(c.Context._asyncModeOn=!0);for(var d=0;d<s.length;d++)c.Context._callbacks.push(s[d])}}if(t.yandexContextSyncCallbacks)for(var s=r("yandexContextSyncCallbacks"),l=0;l<s.length;l++)c.Context._callbacks.push(s[l]);var x=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],C=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(t.yandex_ad_format){var f={};a(f,x),a(f,C,f.ad_format);var v=f.place;v&&e.getElementById(v)||(v="Ya_sync_"+c.Context._asyncIdCounter++,e.write('<div id="'+v+'"></div>'));var y=o("partner_id");c.Context._callbacks.push(function(){c.Context.AdvManager.renderDirect(y,v,f)})}var h="http:"===t.location.protocol?"http:":"https:";c.Context.HTTPS_MODE===c.Context.HTTPS_MODES.ENABLED&&(h="https:");var u="an.yandex.ru/resource/context_static_r"+c.codeVer+".js";if(e.getElementById(u)&&c.Context._init)return void c.Context._init();var g=h+"//"+u;if(c.Context._asyncModeOn){var p=e.createElement("script"),M=e.getElementsByTagName("script")[0];p.id=u,p.src=g,M.parentNode.insertBefore(p,M)}else e.write('<script type="text/javascript" src="'+g+'" id="'+u+'"></script>')}(this,this.document);