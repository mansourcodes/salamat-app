import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorIndexPage } from './doctor-index.page';

describe('DoctorIndexPage', () => {
  let component: DoctorIndexPage;
  let fixture: ComponentFixture<DoctorIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
