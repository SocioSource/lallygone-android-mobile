import { Component, OnInit,HostListener,ViewChild,ElementRef} from '@angular/core';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

import { AuthService } from '../service/service.service';
import { Router } from '@angular/router';

import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-draws',
  templateUrl: './draws.page.html',
  styleUrls: ['./draws.page.scss'],
})

export class DrawsPage implements OnInit { 
  public profile:any;
  forms:any={
    "beam_id":this.service.piller_id,
    "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
    "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
    "floor_joist_span_left":"", 
    "floor_joist_span_right":"", 
    "clear_beam_span":"", 
    // "beam_height_type":"", 
    // "remove_beam":""
  };
  update:boolean=true;
  editImage:boolean=false;
  first_icon:any;
  two_icon:any;
  badgeOne:any;
  badgeTwo:any;
  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;

  constructor(private service: AuthService,private alert:AlertService,private router:Router,private elementRef: ElementRef) {
    // console.log(this.service.opportunity);
    // console.log(this.service.piller_id);
   }

  ngOnInit() {
    this.getBeamspan();
  }

  inputsChange(){
    this.forms.clear_beam_span = this.forms.floor_joist_span_left+" ' "+ this.forms.floor_joist_span_right
  }

  editImagefun(){
    this.editImage = this.editImage ? false : true;
  }

  getBeamspan(){
    // let params = {"beam_id":"1","opportunity_id":28075348};
    this.service.showLoader();
    let params = {beam_id:this.service.piller_id,opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"};
    
    this.service.postObs('/getdata/beam_span',params).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 200){
        this.update = false; 
        this.forms = res.result[0];
        this.forms.remove_beam = res.result[0].remove_beam;
        this.badgeOne = this.forms.beam_height_type.split('-')[0];
        this.badgeTwo = this.forms.beam_height_type.split('-')[1];
        this.editImage = false;
        // this.signaturePad.fromDataURL(this.forms.remove_beam);
      } else {
        this.editImage = true;
      }
    })
  }

  selectBeam(event,i){
    this.badgeOne = (i== 1) ? event : this.badgeOne;
    this.badgeTwo = (i == 2) ? event : this.badgeTwo;
    this.forms.beam_height_type = this.badgeOne +'-'+this.badgeTwo; 
  }

 
  create(form:NgForm) {  
    const img = this.signaturePad.toDataURL();
    if(this.service.checkProperties(form.control.value) && img){
      this.service.showLoader();
    let params={
      "beam_id":this.service.piller_id,
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
      "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
      "floor_joist_span_left":form.value.floor_joist_span_left, 
      "floor_joist_span_right":form.value.floor_joist_span_right, 
      "clear_beam_span":form.value.clear_beam_span, 
      "beam_height_type":this.forms.beam_height_type, 
      "remove_beam":img ? img : this.forms.remove_beam
    }; 
    this.service.postObs('/postdata/beam_span',params).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 201){
          this.service.router.navigate(['/pillers']);
      } else {
        this.alert.presentToast('insert data failed..!');
      } 
    });
  } else{ 
    this.alert.presentToast('Please fill all the data..!');
  }
  }

  updateForm(form:NgForm){  
    const img = this.signaturePad.toDataURL(); 
   
    if(this.service.checkProperties(form.control.value) && img){
      this.service.showLoader();
    let params={
      "beam_id":this.service.piller_id,
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
      "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
      "floor_joist_span_left":form.value.floor_joist_span_left, 
      "floor_joist_span_right":form.value.floor_joist_span_right, 
      "clear_beam_span":form.value.clear_beam_span, 
      "beam_height_type":this.forms.beam_height_type, 
      "remove_beam": this.checkImage(img) ? img : this.forms.remove_beam
    };  
    console.log(params);
    this.service.postObs('/putdata/beam_span',params).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 201){
          this.service.router.navigate(['/pillers']);
      } else {
        this.service.router.navigate(['/pillers']);
        // this.alert.presentToast('No more change..!');
      } 
    });
  } else{ 
    this.alert.presentToast('Please fill all the data..!');
  }
  }

  checkImage(img){
    let chk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAADcCAYAAABdyTsCAAAHWklEQVR4Xu3UQQ0AAAwCseHf9Gzco1NAysLOESBAgEBSYMlUQhEgQIDAGWhPQIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBAwED7AQIECEQFDHS0GLEIECBgoP0AAQIEogIGOlqMWAQIEDDQfoAAAQJRAQMdLUYsAgQIGGg/QIAAgaiAgY4WIxYBAgQMtB8gQIBAVMBAR4sRiwABAgbaDxAgQCAqYKCjxYhFgAABA+0HCBAgEBUw0NFixCJAgICB9gMECBCIChjoaDFiESBA4AF8pwDdDhT/YwAAAABJRU5ErkJggg=="
    if(img != chk){
      return true;
    }
  }

  selectColWall(event){
    this.forms.col_wall = event;
    this.forms.col_if_wall_to_remove = event+' to remove';
  }

  selectDropFlush(event){
    this.forms.drop_flush = event;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    this.init();
  }

  init() { 
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    } 
  }

  public ngAfterViewInit(): void { 
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(51,190,229)';
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }
  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }

  skip(form:NgForm){
    this.router.navigate(['/pillers']);
  }


}

