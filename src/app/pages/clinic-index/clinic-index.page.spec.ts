import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClinicIndexPage } from './clinic-index.page';

describe('ClinicIndexPage', () => {
  let component: ClinicIndexPage;
  let fixture: ComponentFixture<ClinicIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
