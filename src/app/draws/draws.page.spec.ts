import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrawsPage } from './draws.page';

describe('DrawsPage', () => {
  let component: DrawsPage;
  let fixture: ComponentFixture<DrawsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
