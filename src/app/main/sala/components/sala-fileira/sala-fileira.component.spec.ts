import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaFileiraComponent } from './sala-fileira.component';

describe('SalaFileiraComponent', () => {
  let component: SalaFileiraComponent;
  let fixture: ComponentFixture<SalaFileiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaFileiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaFileiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
