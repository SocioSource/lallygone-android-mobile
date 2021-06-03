import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserlistsPage } from './userlists.page';

describe('UserlistsPage', () => {
  let component: UserlistsPage;
  let fixture: ComponentFixture<UserlistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserlistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
