import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScopePage } from './scope.page';

describe('ScopePage', () => {
  let component: ScopePage;
  let fixture: ComponentFixture<ScopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
