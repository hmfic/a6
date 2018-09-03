import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysettingsmodalComponent } from './mysettingsmodal.component';

describe('MysettingsmodalComponent', () => {
  let component: MysettingsmodalComponent;
  let fixture: ComponentFixture<MysettingsmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysettingsmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysettingsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
