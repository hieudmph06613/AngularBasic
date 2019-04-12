import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerproductComponent } from './managerproduct.component';

describe('ManagerproductComponent', () => {
  let component: ManagerproductComponent;
  let fixture: ComponentFixture<ManagerproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
