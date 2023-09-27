import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaAuditorioComponent } from './sala-auditorio.component';

describe('SalaAuditorioComponent', () => {
  let component: SalaAuditorioComponent;
  let fixture: ComponentFixture<SalaAuditorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaAuditorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaAuditorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
