!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"ct+p":function(n,i,o){"use strict";o.r(i),o.d(i,"HomePageModule",(function(){return T}));var s=o("ofXK"),r=o("3Pt+"),a=o("TEn/"),l=o("tyNb"),c=o("fXoL"),u=o("VGr1"),b=o("hq03"),p=o("A7BC");function f(e,t){if(1&e&&(c.Kb(0,"ion-select-option",13),c.jc(1),c.Jb()),2&e){var n=t.$implicit;c.Zb("value",n.STAGE_ID),c.xb(1),c.kc(n.STAGE_NAME)}}function h(e,t){1&e&&(c.Kb(0,"ion-item",14),c.Kb(1,"ion-col",15),c.jc(2,"No more open data"),c.Jb(),c.Jb())}function g(e,t){if(1&e){var n=c.Lb();c.Kb(0,"ion-item",16),c.Sb("click",(function(){c.ec(n);var e=t.$implicit;return c.Ub().selectOpportunity(e)})),c.Kb(1,"ion-col"),c.jc(2),c.Jb(),c.Kb(3,"ion-col"),c.Kb(4,"span",17),c.jc(5),c.Jb(),c.Jb(),c.Jb()}if(2&e){var i=t.$implicit,o=t.index;c.xb(2),c.lc("",o+1+". "+i.OPPORTUNITY_NAME," "),c.xb(3),c.kc(i.OPPORTUNITY_STATE)}}var d,v,m,y=[{path:"",component:(d=function(){function n(t,i,o){e(this,n),this.service=t,this.alert=i,this.menu=o,this.opportunityLists=[],this.pipelineStages=[],this.show=!1}var i,o,s;return i=n,(o=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var e=this;this.service.st.get("stage_id").then((function(t){e.stageId=null==t||null==t?"All":t,console.log(e.stageId)}))}},{key:"doRefresh",value:function(e){var t=this;setTimeout((function(){e.target.complete(),t.service.st.get("stage_id").then((function(e){t.stageId=null==t.stageId||null==t.stageId?"All":t.stageId,t.getLead()})),t.opportunityLists=[],t.pipelineStages=[],t.stageId=null==t.stageId||null==t.stageId?"All":t.stageId}),1e3)}},{key:"getLead",value:function(){var e=this;this.service.showLoader(),this.show=!1,this.opportunityLists=[],this.service.st.set("stage_id",this.stageId),this.service.postObs("/callApi",{method:"GET",url:"All"==this.stageId?"https://api.insightly.com/v3.1/Opportunities?brief=true&count_total=false":"https://api.insightly.com/v3.1/Opportunities/Search?field_name=STAGE_ID&field_value="+this.stageId+"&PIPELINE_ID=873118&brief=false&count_total=false",data:!1,key:"Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"}).subscribe((function(t){e.service.hideLoader(),200==t.status?t.result.forEach((function(t,n){"OPEN"===t.OPPORTUNITY_STATE&&(e.show=!0,e.opportunityLists.push(t))})):e.alert.presentToast("No more data")}))}},{key:"selectOpportunity",value:function(e){var t={queryParams:{special:JSON.stringify(e)}};this.service.router.navigate(["profile"],t)}},{key:"lead",value:function(){this.service.router.navigate(["/leads"])}}])&&t(i.prototype,o),s&&t(i,s),n}(),d.\u0275fac=function(e){return new(e||d)(c.Hb(u.a),c.Hb(b.a),c.Hb(a.R))},d.\u0275cmp=c.Bb({type:d,selectors:[["app-home"]],decls:22,vars:4,consts:[["slot","start"],[1,"ion-text-center","ion-no-margin"],["slot","end","color","primary","lines","none"],["name","funnel"],[2,"display","none"],["interface","popover",1,"pipe_lines",3,"ngModel","ngModelChange","ionChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],[1,"home-cont"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles","refreshingText","Refreshing..."],["lines","none",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"value"],["lines","none"],[1,"ion-text-center"],[3,"click"],[2,"float","right","color","Red"]],template:function(e,t){1&e&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-back-button"),c.Jb(),c.Kb(4,"ion-title",1),c.jc(5,"Opportunity"),c.Jb(),c.Kb(6,"ion-item",2),c.Ib(7,"ion-icon",3),c.Ib(8,"label",4),c.Kb(9,"ion-select",5),c.Sb("ngModelChange",(function(e){return t.stageId=e}))("ionChange",(function(){return t.getLead()})),c.Kb(10,"ion-select-option",6),c.jc(11,"All"),c.Jb(),c.ic(12,f,2,2,"ion-select-option",7),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(13,"ion-content",8),c.Kb(14,"ion-refresher",9),c.Sb("ionRefresh",(function(e){return t.doRefresh(e)})),c.Ib(15,"ion-refresher-content",10),c.Jb(),c.Kb(16,"ion-list"),c.ic(17,h,3,0,"ion-item",11),c.ic(18,g,6,2,"ion-item",12),c.Jb(),c.Jb(),c.Kb(19,"ion-footer"),c.Kb(20,"ion-toolbar"),c.Ib(21,"app-footer"),c.Jb(),c.Jb()),2&e&&(c.xb(9),c.Zb("ngModel",t.stageId),c.xb(3),c.Zb("ngForOf",t.service.pipelineStages),c.xb(5),c.Zb("ngIf",!t.show),c.xb(1),c.Zb("ngForOf",t.opportunityLists))},directives:[a.p,a.N,a.g,a.c,a.d,a.M,a.t,a.q,a.E,a.W,r.d,r.g,a.F,s.j,a.k,a.A,a.B,a.v,s.k,a.o,p.a,a.j],styles:[".pipe_lines[_ngcontent-%COMP%]{width:0}"]}),d)}],I=((m=function t(){e(this,t)}).\u0275mod=c.Fb({type:m}),m.\u0275inj=c.Eb({factory:function(e){return new(e||m)},imports:[[l.i.forChild(y)],l.i]}),m),T=((v=function t(){e(this,t)}).\u0275mod=c.Fb({type:v}),v.\u0275inj=c.Eb({factory:function(e){return new(e||v)},imports:[[s.b,r.a,a.O,I]]}),v)}}])}();