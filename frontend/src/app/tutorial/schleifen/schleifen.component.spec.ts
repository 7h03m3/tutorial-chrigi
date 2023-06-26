import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchleifenComponent } from './schleifen.component';

describe('SchleifenComponent', () => {
  let component: SchleifenComponent;
  let fixture: ComponentFixture<SchleifenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchleifenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchleifenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
