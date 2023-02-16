import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPicsComponent } from './fetch-pics.component';

describe('FetchPicsComponent', () => {
  let component: FetchPicsComponent;
  let fixture: ComponentFixture<FetchPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchPicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
