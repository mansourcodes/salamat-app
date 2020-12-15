import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppoFormPage } from './appo-form.page';

describe('AppoFormPage', () => {
  let component: AppoFormPage;
  let fixture: ComponentFixture<AppoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
