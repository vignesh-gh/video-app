import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymusicListComponent } from './mymusic-list.component';

describe('MymusicListComponent', () => {
  let component: MymusicListComponent;
  let fixture: ComponentFixture<MymusicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymusicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
