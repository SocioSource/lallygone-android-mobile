(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{D4zX:function(t,i,o){"use strict";o.r(i),o.d(i,"LeadsPageModule",(function(){return p}));var e=o("ofXK"),n=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),c=o("fXoL"),a=o("VGr1"),b=o("hq03"),l=o("A7BC");function u(t,i){if(1&t){const t=c.Lb();c.Kb(0,"ion-item",5),c.Sb("click",(function(){c.ec(t);const o=i.$implicit;return c.Ub().ShowLead(o)})),c.Kb(1,"ion-col"),c.jc(2),c.Jb(),c.Kb(3,"ion-col"),c.Kb(4,"span",6),c.jc(5),c.Jb(),c.Jb(),c.Jb()}if(2&t){const t=i.$implicit,o=i.index;c.xb(2),c.lc("",o+1+". "+t.FIRST_NAME+" "+t.LAST_NAME," "),c.xb(3),c.kc(t.VISIBLE_TO)}}const d=[{path:"",component:(()=>{class t{constructor(t,i,o,e){this.service=t,this.alert=i,this.router=o,this.route=e,this.skipNo=500}ngOnInit(){}ionViewWillEnter(){this.getLeads()}getLeads(){this.service.showLoader(),this.skipNo=""==this.skipNo?0:this.skipNo,this.service.postObs("/callApi",{method:"GET",url:"https://api.insightly.com/v2.1/Leads?$orderby=DATE_CREATED_UTC%20desc&$top=100",data:!1,key:"Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"}).subscribe(t=>{this.service.hideLoader(),200==t.status?this.leadLists=t.result:this.alert.presentToast("No more users")})}ShowLead(t){let i={queryParams:{special:JSON.stringify(t)}};this.service.router.navigate(["lead-create"],i)}leadPage(){this.service.router.navigate(["lead-create"])}opportunity(){this.service.router.navigate(["home"])}ionViewDidEnter(){this.setUIBackButtonAction()}setUIBackButtonAction(){this.backButton.onClick=()=>{this.service.router.navigateByUrl("/main")}}}return t.\u0275fac=function(i){return new(i||t)(c.Hb(a.a),c.Hb(b.a),c.Hb(r.g),c.Hb(r.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-leads"]],viewQuery:function(t,i){var o;1&t&&c.nc(s.d,!0),2&t&&c.bc(o=c.Tb())&&(i.backButton=o.first)},decls:15,vars:1,consts:[["slot","start"],[1,"ion-text-center","ion-no-margin"],[3,"click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["name","add"],[3,"click"],[1,"ion-text-right",2,"float","right","color","Red"]],template:function(t,i){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-back-button"),c.Jb(),c.Kb(4,"ion-title",1),c.jc(5,"Leads"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.Kb(7,"ion-list"),c.ic(8,u,6,2,"ion-item",2),c.Jb(),c.Kb(9,"ion-fab",3),c.Sb("click",(function(){return i.leadPage()})),c.Kb(10,"ion-fab-button"),c.Ib(11,"ion-icon",4),c.Jb(),c.Jb(),c.Jb(),c.Kb(12,"ion-footer"),c.Kb(13,"ion-toolbar"),c.Ib(14,"app-footer"),c.Jb(),c.Jb()),2&t&&(c.xb(8),c.Zb("ngForOf",i.leadLists))},directives:[s.p,s.N,s.g,s.c,s.d,s.M,s.k,s.v,e.j,s.m,s.n,s.q,s.o,l.a,s.t,s.j],styles:["ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{float:left;width:50%}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{margin:0}.hideShow[_ngcontent-%COMP%]{display:none}.closeIcon[_ngcontent-%COMP%]{position:absolute;right:12px;top:6px;color:#33bee5;width:16pt}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(i){return new(i||t)},imports:[[r.i.forChild(d)],r.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(i){return new(i||t)},imports:[[e.b,n.a,s.O,h]]}),t})()}}]);