import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppoIndexPage } from './appo-index.page';

describe('AppoIndexPage', () => {
  let component: AppoIndexPage;
  let fixture: ComponentFixture<AppoIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppoIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
