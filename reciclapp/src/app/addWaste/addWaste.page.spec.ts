import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddWastePage } from './addWaste.page';


describe('AdminHomeTests', () => {
  let component: AddWastePage;
  let fixture: ComponentFixture<AddWastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddWastePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
