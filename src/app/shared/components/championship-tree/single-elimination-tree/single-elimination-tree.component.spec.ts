import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEliminationTreeComponent } from './single-elimination-tree.component';

describe('SingleEliminationTreeComponent', () => {
  let component: SingleEliminationTreeComponent;
  let fixture: ComponentFixture<SingleEliminationTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEliminationTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEliminationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
