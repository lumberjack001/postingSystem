import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedPostComponent } from './fetched-post.component';

describe('FetchedPostComponent', () => {
  let component: FetchedPostComponent;
  let fixture: ComponentFixture<FetchedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchedPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
