(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{wEb3:function(e,t,i){"use strict";i.r(t),i.d(t,"DrawsPageModule",(function(){return h}));var o=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),n=i("tyNb"),g=i("kOL3"),A=i("fXoL"),r=i("VGr1"),b=i("hq03");const l=["canvas"],c=[{path:"",component:(()=>{class e{constructor(e,t,i,o){this.service=e,this.alert=t,this.router=i,this.elementRef=o,this.forms={beam_id:this.service.piller_id,opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,floor_joist_span_left:"",floor_joist_span_right:"",clear_beam_span:""},this.update=!0,this.editImage=!1}ngOnInit(){this.getBeamspan()}inputsChange(){this.forms.clear_beam_span=this.forms.floor_joist_span_left+" ' "+this.forms.floor_joist_span_right}editImagefun(){this.editImage=!this.editImage}getBeamspan(){this.service.showLoader(),this.service.postObs("/getdata/beam_span",{beam_id:this.service.piller_id,opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe(e=>{this.service.hideLoader(),200==e.status?(this.update=!1,this.forms=e.result[0],this.forms.remove_beam=e.result[0].remove_beam,this.badgeOne=this.forms.beam_height_type.split("-")[0],this.badgeTwo=this.forms.beam_height_type.split("-")[1],this.editImage=!1):this.editImage=!0})}selectBeam(e,t){this.badgeOne=1==t?e:this.badgeOne,this.badgeTwo=2==t?e:this.badgeTwo,this.forms.beam_height_type=this.badgeOne+"-"+this.badgeTwo}create(e){const t=this.signaturePad.toDataURL();this.service.checkProperties(e.control.value)&&t?(this.service.showLoader(),this.service.postObs("/postdata/beam_span",{beam_id:this.service.piller_id,opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,floor_joist_span_left:e.value.floor_joist_span_left,floor_joist_span_right:e.value.floor_joist_span_right,clear_beam_span:e.value.clear_beam_span,beam_height_type:this.forms.beam_height_type,remove_beam:t||this.forms.remove_beam}).subscribe(e=>{this.service.hideLoader(),201==e.status?this.service.router.navigate(["/pillers"]):this.alert.presentToast("insert data failed..!")})):this.alert.presentToast("Please fill all the data..!")}updateForm(e){const t=this.signaturePad.toDataURL();if(this.service.checkProperties(e.control.value)&&t){this.service.showLoader();let i={beam_id:this.service.piller_id,opportunity_id:this.service.opportunity.OPPORTUNITY_ID,opportunity_user_id:this.service.opportunity.OWNER_USER_ID,floor_joist_span_left:e.value.floor_joist_span_left,floor_joist_span_right:e.value.floor_joist_span_right,clear_beam_span:e.value.clear_beam_span,beam_height_type:this.forms.beam_height_type,remove_beam:this.checkImage(t)?t:this.forms.remove_beam};console.log(i),this.service.postObs("/putdata/beam_span",i).subscribe(e=>{this.service.hideLoader(),this.service.router.navigate(["/pillers"])})}else this.alert.presentToast("Please fill all the data..!")}checkImage(e){if("data:image/png;base64,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"!=e)return!0}selectColWall(e){this.forms.col_wall=e,this.forms.col_if_wall_to_remove=e+" to remove"}selectDropFlush(e){this.forms.drop_flush=e}onResize(e){console.log(e),this.init()}init(){this.elementRef.nativeElement.querySelector("canvas"),this.signaturePad&&this.signaturePad.clear()}ngAfterViewInit(){this.signaturePad=new g.a(this.signaturePadElement.nativeElement),this.signaturePad.clear(),this.signaturePad.penColor="rgb(51,190,229)"}isCanvasBlank(){if(this.signaturePad)return!!this.signaturePad.isEmpty()}clear(){this.signaturePad.clear()}undo(){const e=this.signaturePad.toData();e&&(e.pop(),this.signaturePad.fromData(e))}skip(e){this.router.navigate(["/pillers"])}}return e.\u0275fac=function(t){return new(t||e)(A.Hb(r.a),A.Hb(b.a),A.Hb(n.g),A.Hb(A.l))},e.\u0275cmp=A.Bb({type:e,selectors:[["app-draws"]],viewQuery:function(e,t){var i;1&e&&A.hc(l,!0),2&e&&A.bc(i=A.Tb())&&(t.signaturePadElement=i.first)},hostBindings:function(e,t){1&e&&A.Sb("resize",(function(e){return t.onResize(e)}),!1,A.dc)},decls:64,vars:14,consts:[["slot","start"],["method","post",1,"form_item"],["form","ngForm"],[1,"lb-img"],["position","floating"],["type","number","name","floor_joist_span_left",3,"ngModel","ionChange","ngModelChange"],["type","number","name","floor_joist_span_right",3,"ngModel","ionChange","ngModelChange"],["type","text","name","clear_beam_span",3,"ngModel","ngModelChange"],["lines","none",1,"lb-img"],[1,""],[1,"ion-align-items-center","lb-img"],["col-4","","size","2",1,"ion-align-self-start","margin_set",3,"click"],[3,"ngClass"],["col-4","",1,"ion-align-self-center","ion-text-center"],["col-4","","size","2",1,"ion-align-self-end","margin_set",3,"click"],[1,"signature-pad",3,"ngClass"],[1,"align-center"],["width","360","height","220",1,"signature-pad-canvas",2,"touch-action","none"],["canvas",""],["color","light","expand","full","size","4",3,"click"],["width","360","height","220",3,"src"],["expand","full","color","secondary",1,"button_pos",3,"click"],["type","submit","expand","full","color","secondary",1,"footer_btn",3,"click"]],template:function(e,t){if(1&e){const e=A.Lb();A.Kb(0,"ion-header"),A.Kb(1,"ion-toolbar"),A.Kb(2,"ion-buttons",0),A.Ib(3,"ion-back-button"),A.Jb(),A.Kb(4,"ion-title"),A.jc(5,"draws"),A.Jb(),A.Jb(),A.Jb(),A.Kb(6,"ion-content"),A.Kb(7,"form",1,2),A.Kb(9,"ion-item",3),A.Kb(10,"ion-label",4),A.jc(11,"Floor Joist Span Left"),A.Jb(),A.Kb(12,"ion-input",5),A.Sb("ionChange",(function(){return t.inputsChange()}))("ngModelChange",(function(e){return t.forms.floor_joist_span_left=e})),A.Jb(),A.Jb(),A.Kb(13,"ion-item",3),A.Kb(14,"ion-label",4),A.jc(15,"Floor Joint Span Right"),A.Jb(),A.Kb(16,"ion-input",6),A.Sb("ionChange",(function(){return t.inputsChange()}))("ngModelChange",(function(e){return t.forms.floor_joist_span_right=e})),A.Jb(),A.Jb(),A.Kb(17,"ion-item",3),A.Kb(18,"ion-label",4),A.jc(19,"Clear Beam Span"),A.Jb(),A.Kb(20,"ion-input",7),A.Sb("ngModelChange",(function(e){return t.forms.clear_beam_span=e})),A.Jb(),A.Jb(),A.Kb(21,"ion-item",8),A.Kb(22,"ion-label",9),A.jc(23,"Beam height"),A.Jb(),A.Jb(),A.Kb(24,"ion-row",10),A.Kb(25,"ion-col",11),A.Sb("click",(function(e){return t.selectBeam(e.target.innerHTML,1)})),A.Kb(26,"ion-badge",12),A.jc(27,"F"),A.Jb(),A.Kb(28,"ion-badge",12),A.jc(29,"C"),A.Jb(),A.Kb(30,"ion-badge",12),A.jc(31,"W"),A.Jb(),A.Kb(32,"ion-badge",12),A.jc(33,"O"),A.Jb(),A.Jb(),A.Ib(34,"ion-col",13),A.Kb(35,"ion-col",14),A.Sb("click",(function(e){return t.selectBeam(e.target.innerHTML,2)})),A.Kb(36,"ion-badge",12),A.jc(37,"F"),A.Jb(),A.Kb(38,"ion-badge",12),A.jc(39,"C"),A.Jb(),A.Kb(40,"ion-badge",12),A.jc(41,"W"),A.Jb(),A.Kb(42,"ion-badge",12),A.jc(43,"O"),A.Jb(),A.Jb(),A.Jb(),A.Kb(44,"ion-item",15),A.Kb(45,"ion-row",16),A.Kb(46,"ion-label"),A.jc(47,"Draw Beam"),A.Jb(),A.Ib(48,"canvas",17,18),A.Kb(50,"ion-button",19),A.Sb("click",(function(){return t.undo()})),A.jc(51," Undo"),A.Jb(),A.Kb(52,"ion-button",19),A.Sb("click",(function(){return t.clear()})),A.jc(53," Clear"),A.Jb(),A.Jb(),A.Jb(),A.Kb(54,"ion-item",15),A.Kb(55,"ion-row",16),A.Kb(56,"ion-label"),A.jc(57,"Draw Beam"),A.Jb(),A.Ib(58,"img",20),A.Kb(59,"ion-button",21),A.Sb("click",(function(){return t.editImagefun()})),A.jc(60," Edit"),A.Jb(),A.Jb(),A.Jb(),A.Jb(),A.Jb(),A.Kb(61,"ion-footer"),A.Kb(62,"ion-button",22),A.Sb("click",(function(){A.ec(e);const i=A.cc(8);return t.update?t.create(i):t.updateForm(i)})),A.jc(63,"Continue"),A.Jb(),A.Jb()}2&e&&(A.xb(12),A.Zb("ngModel",t.forms.floor_joist_span_left),A.xb(4),A.Zb("ngModel",t.forms.floor_joist_span_right),A.xb(4),A.Zb("ngModel",t.forms.clear_beam_span),A.xb(6),A.Zb("ngClass","F"==t.badgeOne?"badgeColor":""),A.xb(2),A.Zb("ngClass","C"==t.badgeOne?"badgeColor":""),A.xb(2),A.Zb("ngClass","W"==t.badgeOne?"badgeColor":""),A.xb(2),A.Zb("ngClass","O"==t.badgeOne?"badgeColor":""),A.xb(4),A.Zb("ngClass","F"==t.badgeTwo?"badgeColor":""),A.xb(2),A.Zb("ngClass","C"==t.badgeTwo?"badgeColor":""),A.xb(2),A.Zb("ngClass","W"==t.badgeTwo?"badgeColor":""),A.xb(2),A.Zb("ngClass","O"==t.badgeTwo?"badgeColor":""),A.xb(2),A.Zb("ngClass",t.editImage?"":"hideClass"),A.xb(10),A.Zb("ngClass",t.editImage?"hideClass":""),A.xb(4),A.Zb("src",t.forms.remove_beam,A.fc))},directives:[s.p,s.N,s.g,s.c,s.d,s.M,s.k,a.h,a.e,a.f,s.t,s.u,s.s,s.T,a.d,a.g,s.X,s.D,s.j,s.e,o.i,s.f,s.o],styles:[".signature-pad[_ngcontent-%COMP%]{background:#fff;border:1px solid #33bee5!important;margin-top:0}.hideClass[_ngcontent-%COMP%]{display:none}.margin_set[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{width:100%;background:none;color:#000;border:1px solid #33bee5;float:left;margin:2px 0}.badgeColor[_ngcontent-%COMP%]{background:#33bee5!important}.label_color[_ngcontent-%COMP%]{color:#9e9e9e}.button_pos[_ngcontent-%COMP%]{position:absolute;right:0}.lb-img[_ngcontent-%COMP%]{background:#fff}"]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=A.Fb({type:e}),e.\u0275inj=A.Eb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(c)],n.i]}),e})(),h=(()=>{class e{}return e.\u0275mod=A.Fb({type:e}),e.\u0275inj=A.Eb({factory:function(t){return new(t||e)},imports:[[o.b,a.a,s.O,C]]}),e})()}}]);