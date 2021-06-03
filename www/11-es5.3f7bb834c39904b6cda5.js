!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8Aay":function(t,i,n){"use strict";n.r(i),n.d(i,"BillersPageModule",(function(){return w}));var l=n("ofXK"),r=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),c=n("fXoL"),b=n("VGr1"),u=n("hq03");function h(e,o){if(1&e){var t=c.Lb();c.Kb(0,"ion-list",24),c.Kb(1,"ion-item"),c.Kb(2,"ion-label",25),c.Sb("click",(function(){c.ec(t);var e=o.$implicit;return c.Ub().editForm(e)})),c.jc(3),c.Jb(),c.Kb(4,"ion-icon",26),c.Sb("click",(function(){c.ec(t);var e=o.index;return c.Ub().removePiller(e)})),c.Jb(),c.Jb(),c.Jb()}if(2&e){var i=o.$implicit,n=o.index,l=c.Ub();c.Zb("ngClass",l.showList?"":"hideShow"),c.xb(3),c.mc("",i.opportunity_id," Pillar ",n+1,"")}}function d(e,o){if(1&e){var t=c.Lb();c.Kb(0,"ion-button",27),c.Sb("click",(function(){c.ec(t);var e=c.Ub(),o=c.cc(9);return e.update?e.updateForm(o):e.create(o)})),c.jc(1,"Continue"),c.Jb()}}function p(e,o){if(1&e){var t=c.Lb();c.Kb(0,"ion-button",28),c.Sb("click",(function(){c.ec(t);var e=c.Ub(),o=c.cc(9);return e.skip(o)})),c.jc(1,"Continue"),c.Jb()}if(2&e){var i=c.Ub();c.Zb("disabled",0==i.pillers.length)}}var _,f,m,g=[{path:"",component:(_=function(){function t(o,i,n){e(this,t),this.service=o,this.alert=i,this.router=n,this.forms={opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,col_wall:"",col_wall_location:"",height_from_FF:"",beam_length:"",beam_width:"",beam_depth:"",col_if_wall_to_remove:"",drop_flush:"",unit_price:"",total:""},this.pillers=[],this.update=!1,this.showList=!1,console.log(this.service.opportunity)}var i,n,l;return i=t,(n=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.update=!1,this.showList=!1,this.getPillerDetails()}},{key:"getPillerDetails",value:function(){var e=this;this.service.showLoader(),this.service.postObs("/getdata/pillers",{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe((function(o){200==o.status&&(e.update=!0,e.showList=!0,e.pillers=o.result),e.service.hideLoader()}))}},{key:"editForm",value:function(e){this.forms=e,this.update=!0,this.showList=!1}},{key:"add",value:function(){this.forms={opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,col_wall:"",col_wall_location:"",height_from_FF:"",beam_length:"",beam_width:"",beam_depth:"",col_if_wall_to_remove:"",drop_flush:"",unit_price:"",total:""},this.update=!1,this.showList=!1}},{key:"create",value:function(e){var o=this;this.service.checkProperties(e.control.value)?(this.service.showLoader(),this.service.postObs("/postdata/pillers",{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,col_wall:e.value.col_wall,col_wall_location:e.value.col_wall_location,height_from_FF:e.value.height_from_FF,beam_length:e.value.beam_length,beam_width:e.value.beam_width,beam_depth:e.value.beam_depth,col_if_wall_to_remove:e.value.col_if_wall_to_remove,drop_flush:e.value.drop_flush,unit_price:e.value.unit_price,total:e.value.total}).subscribe((function(e){201==e.status?o.getPillerID():o.alert.presentToast("insert data failed..!"),o.service.hideLoader()}))):this.alert.presentToast("Please fill all the data..!")}},{key:"getPillerID",value:function(){var e=this;this.service.showLoader(),this.service.postObs("/getdata/pillers",{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe((function(o){e.service.hideLoader(),200==o.status&&(e.service.piller_id=o.result[o.count-1].id,e.service.router.navigateByUrl("/draws"))}))}},{key:"updateForm",value:function(e){var o=this;this.service.checkProperties(e.control.value)?(this.service.showLoader(),this.service.postObs("/putdata/pillers",{id:this.forms.id,opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,col_wall:this.forms.col_wall,col_wall_location:e.value.col_wall_location,height_from_FF:e.value.height_from_FF,beam_length:e.value.beam_length,beam_width:e.value.beam_width,beam_depth:e.value.beam_depth,col_if_wall_to_remove:e.value.col_if_wall_to_remove,drop_flush:this.forms.drop_flush,unit_price:e.value.unit_price,total:e.value.total}).subscribe((function(e){o.service.hideLoader(),201==e.status?(o.service.piller_id=o.forms.id,o.service.router.navigateByUrl("/draws")):(o.service.piller_id=o.forms.id,o.router.navigateByUrl("/draws"))}))):this.alert.presentToast("Please fill all the data..!")}},{key:"removePiller",value:function(e){var o=this;this.service.showLoader(),this.service.postObs("/putdata/pillers",{id:this.pillers[e].id,delete_status:"N"}).subscribe((function(t){o.service.hideLoader(),201==t.status?o.pillers.splice(e,1):o.alert.presentToast("Delete data failed..!")}))}},{key:"selectColWall",value:function(e){this.forms.col_wall=e,this.forms.col_if_wall_to_remove=e+" to remove"}},{key:"selectDropFlush",value:function(e){this.forms.drop_flush=e}},{key:"skip",value:function(e){this.service.piller_id=this.forms.id,this.router.navigateByUrl("/fees")}},{key:"ionViewDidEnter",value:function(){console.log("ionViewDidEnter"),this.setUIBackButtonAction()}},{key:"setUIBackButtonAction",value:function(){var e=this;this.backButton.onClick=function(){e.showList?e.router.navigateByUrl("/appoinment"):e.showList=!1,e.showList=!0}}}])&&o(i.prototype,n),l&&o(i,l),t}(),_.\u0275fac=function(e){return new(e||_)(c.Hb(b.a),c.Hb(u.a),c.Hb(s.g))},_.\u0275cmp=c.Bb({type:_,selectors:[["app-billers"]],viewQuery:function(e,o){var t;1&e&&c.nc(a.d,!0),2&e&&c.bc(t=c.Tb())&&(o.backButton=t.first)},decls:68,vars:16,consts:[["slot","start"],[3,"ngClass",4,"ngFor","ngForOf"],["method","post",1,"form_item",3,"ngClass"],["form","ngForm"],["name","col_wall",3,"ngModel","ngModelChange","ionChange"],["value","col"],["value","wall"],[1,"lb-img"],["position","floating"],["ngModel","","type","text","name","col_wall_location","placeholder","Location",3,"ngModel","ngModelChange"],["ngModel","","type","number","name","height_from_FF","placeholder","Height FF",3,"ngModel","ngModelChange"],["ngModel","","type","number","name","beam_length","placeholder","Beam length",3,"ngModel","ngModelChange"],["ngModel","","type","number","name","beam_width","placeholder","Beam width",3,"ngModel","ngModelChange"],["ngModel","","type","number","name","beam_depth","placeholder","Beam depth",3,"ngModel","ngModelChange"],["ngModel","","type","text","name","col_if_wall_to_remove","disabled","true",3,"ngModel","placeholder","ngModelChange"],["name","drop_flush",3,"ngModel","ngModelChange","ionChange"],["value","drop"],["value","flush"],["ngModel","","type","number","name","unit_price","placeholder","Unit price",3,"ngModel","ngModelChange"],["ngModel","","type","number","name","total","placeholder","Total",3,"ngModel","ngModelChange"],["vertical","bottom","horizontal","end","slot","fixed",3,"ngClass","click"],["name","add"],["class","footer_btn","type","submit","expand","full","color","secondary",3,"click",4,"ngIf"],["class","footer_btn","type","submit","expand","full","color","secondary",3,"disabled","click",4,"ngIf"],[3,"ngClass"],[3,"click"],["name","close",1,"closeIcon",3,"click"],["type","submit","expand","full","color","secondary",1,"footer_btn",3,"click"],["type","submit","expand","full","color","secondary",1,"footer_btn",3,"disabled","click"]],template:function(e,o){1&e&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-back-button"),c.Jb(),c.Kb(4,"ion-title"),c.jc(5,"Pillars"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.ic(7,h,5,3,"ion-list",1),c.Kb(8,"form",2,3),c.Kb(10,"ion-list"),c.Kb(11,"ion-radio-group",4),c.Sb("ngModelChange",(function(e){return o.forms.col_wall=e}))("ionChange",(function(e){return o.selectColWall(e.target.value)})),c.Kb(12,"ion-item"),c.Kb(13,"ion-label"),c.jc(14,"Col"),c.Jb(),c.Ib(15,"ion-radio",5),c.Jb(),c.Kb(16,"ion-item"),c.Kb(17,"ion-label"),c.jc(18,"Wall"),c.Jb(),c.Ib(19,"ion-radio",6),c.Jb(),c.Jb(),c.Jb(),c.Kb(20,"ion-item",7),c.Kb(21,"ion-label",8),c.jc(22,"Location"),c.Jb(),c.Kb(23,"ion-input",9),c.Sb("ngModelChange",(function(e){return o.forms.col_wall_location=e})),c.Jb(),c.Jb(),c.Kb(24,"ion-item",7),c.Kb(25,"ion-label",8),c.jc(26,"Height FF"),c.Jb(),c.Kb(27,"ion-input",10),c.Sb("ngModelChange",(function(e){return o.forms.height_from_FF=e})),c.Jb(),c.Jb(),c.Kb(28,"ion-item",7),c.Kb(29,"ion-label",8),c.jc(30,"Beam Length"),c.Jb(),c.Kb(31,"ion-input",11),c.Sb("ngModelChange",(function(e){return o.forms.beam_length=e})),c.Jb(),c.Jb(),c.Kb(32,"ion-item",7),c.Kb(33,"ion-label",8),c.jc(34,"Beam Width"),c.Jb(),c.Kb(35,"ion-input",12),c.Sb("ngModelChange",(function(e){return o.forms.beam_width=e})),c.Jb(),c.Jb(),c.Kb(36,"ion-item",7),c.Kb(37,"ion-label",8),c.jc(38,"Beam Depth"),c.Jb(),c.Kb(39,"ion-input",13),c.Sb("ngModelChange",(function(e){return o.forms.beam_depth=e})),c.Jb(),c.Jb(),c.Kb(40,"ion-item",7),c.Kb(41,"ion-label",8),c.jc(42,"To Remove"),c.Jb(),c.Kb(43,"ion-input",14),c.Sb("ngModelChange",(function(e){return o.forms.col_if_wall_to_remove=e})),c.Jb(),c.Jb(),c.Kb(44,"ion-list"),c.Kb(45,"ion-radio-group",15),c.Sb("ngModelChange",(function(e){return o.forms.drop_flush=e}))("ionChange",(function(e){return o.selectDropFlush(e.target.value)})),c.Kb(46,"ion-item"),c.Kb(47,"ion-label"),c.jc(48,"Drop"),c.Jb(),c.Ib(49,"ion-radio",16),c.Jb(),c.Kb(50,"ion-item"),c.Kb(51,"ion-label"),c.jc(52,"Flush"),c.Jb(),c.Ib(53,"ion-radio",17),c.Jb(),c.Jb(),c.Jb(),c.Kb(54,"ion-item",7),c.Kb(55,"ion-label",8),c.jc(56,"Unit Price"),c.Jb(),c.Kb(57,"ion-input",18),c.Sb("ngModelChange",(function(e){return o.forms.unit_price=e})),c.Jb(),c.Jb(),c.Kb(58,"ion-item",7),c.Kb(59,"ion-label",8),c.jc(60,"Total"),c.Jb(),c.Kb(61,"ion-input",19),c.Sb("ngModelChange",(function(e){return o.forms.total=e})),c.Jb(),c.Jb(),c.Jb(),c.Kb(62,"ion-fab",20),c.Sb("click",(function(){return o.add()})),c.Kb(63,"ion-fab-button"),c.Ib(64,"ion-icon",21),c.Jb(),c.Jb(),c.Jb(),c.Kb(65,"ion-footer"),c.ic(66,d,2,0,"ion-button",22),c.ic(67,p,2,1,"ion-button",23),c.Jb()),2&e&&(c.xb(7),c.Zb("ngForOf",o.pillers),c.xb(1),c.Zb("ngClass",o.showList?"hideShow":""),c.xb(3),c.Zb("ngModel",o.forms.col_wall),c.xb(12),c.Zb("ngModel",o.forms.col_wall_location),c.xb(4),c.Zb("ngModel",o.forms.height_from_FF),c.xb(4),c.Zb("ngModel",o.forms.beam_length),c.xb(4),c.Zb("ngModel",o.forms.beam_width),c.xb(4),c.Zb("ngModel",o.forms.beam_depth),c.xb(4),c.ac("placeholder","",o.forms.col_wall," to remove"),c.Zb("ngModel",o.forms.col_if_wall_to_remove),c.xb(2),c.Zb("ngModel",o.forms.drop_flush),c.xb(12),c.Zb("ngModel",o.forms.unit_price),c.xb(4),c.Zb("ngModel",o.forms.total),c.xb(1),c.Zb("ngClass",o.showList?"":"hideShow"),c.xb(4),c.Zb("ngIf",!o.showList),c.xb(1),c.Zb("ngIf",o.showList))},directives:[a.p,a.N,a.g,a.c,a.d,a.M,a.k,l.j,r.h,r.e,r.f,l.i,a.v,a.z,a.W,r.d,r.g,a.t,a.u,a.y,a.V,a.s,a.X,a.T,a.m,a.n,a.q,a.o,l.k,a.f],styles:["ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{float:left;width:50%}.hideShow[_ngcontent-%COMP%]{display:none}.closeIcon[_ngcontent-%COMP%]{position:absolute;right:12px;top:6px;color:#33bee5;width:16pt}.btn_full[_ngcontent-%COMP%]{margin:auto;height:35pt}.lb-img[_ngcontent-%COMP%]{background:#fff}"]}),_)}],v=((m=function o(){e(this,o)}).\u0275mod=c.Fb({type:m}),m.\u0275inj=c.Eb({factory:function(e){return new(e||m)},imports:[[s.i.forChild(g)],s.i]}),m),w=((f=function o(){e(this,o)}).\u0275mod=c.Fb({type:f}),f.\u0275inj=c.Eb({factory:function(e){return new(e||f)},imports:[[l.b,r.a,a.O,v]]}),f)}}])}();