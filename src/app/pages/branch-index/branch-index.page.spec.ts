import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BranchIndexPage } from './branch-index.page';

describe('BranchIndexPage', () => {
  let component: BranchIndexPage;
  let fixture: ComponentFixture<BranchIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BranchIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
