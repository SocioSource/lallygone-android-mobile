import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppoinmentPage } from './appoinment.page';

describe('AppoinmentPage', () => {
  let component: AppoinmentPage;
  let fixture: ComponentFixture<AppoinmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppoinmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
