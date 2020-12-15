import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppoSinglePage } from './appo-single.page';

describe('AppoSinglePage', () => {
  let component: AppoSinglePage;
  let fixture: ComponentFixture<AppoSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppoSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
