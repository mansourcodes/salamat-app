import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialistIndexPage } from './specialist-index.page';

describe('SpecialistIndexPage', () => {
  let component: SpecialistIndexPage;
  let fixture: ComponentFixture<SpecialistIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialistIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
