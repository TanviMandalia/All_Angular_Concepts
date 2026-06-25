import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1 } from './admin1';

describe('Admin1', () => {
  let component: Admin1;
  let fixture: ComponentFixture<Admin1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin1],
    }).compileComponents();

    fixture = TestBed.createComponent(Admin1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
