import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaCadeiraComponent } from './sala-cadeira.component';

describe('SalaCadeiraComponent', () => {
  let component: SalaCadeiraComponent;
  let fixture: ComponentFixture<SalaCadeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaCadeiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaCadeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
