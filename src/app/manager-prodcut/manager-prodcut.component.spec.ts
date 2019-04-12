import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProdcutComponent } from './manager-prodcut.component';

describe('ManagerProdcutComponent', () => {
  let component: ManagerProdcutComponent;
  let fixture: ComponentFixture<ManagerProdcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProdcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProdcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
