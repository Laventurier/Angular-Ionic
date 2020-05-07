import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepoViewPage } from './repo-view.page';

describe('RepoViewPage', () => {
  let component: RepoViewPage;
  let fixture: ComponentFixture<RepoViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepoViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
