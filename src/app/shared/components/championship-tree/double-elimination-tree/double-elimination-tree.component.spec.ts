import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleEliminationTreeComponent } from './double-elimination-tree.component';

describe('DoubleEliminationTreeComponent', () => {
  let component: DoubleEliminationTreeComponent;
  let fixture: ComponentFixture<DoubleEliminationTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleEliminationTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleEliminationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
