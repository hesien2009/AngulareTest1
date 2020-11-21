import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivesloginComponent } from './reactiveslogin.component';

describe('ReactivesloginComponent', () => {
  let component: ReactivesloginComponent;
  let fixture: ComponentFixture<ReactivesloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivesloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivesloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
