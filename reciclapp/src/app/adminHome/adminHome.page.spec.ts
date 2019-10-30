import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AdminHome } from './adminHome.page';

describe('AdminHomeTests', () => {
  let component: AdminHome;
  let fixture: ComponentFixture<AdminHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHome],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
