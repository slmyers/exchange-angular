import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListOverviewComponent } from './grid-list-overview.component';

describe('GridListOverviewComponent', () => {
  let component: GridListOverviewComponent;
  let fixture: ComponentFixture<GridListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
