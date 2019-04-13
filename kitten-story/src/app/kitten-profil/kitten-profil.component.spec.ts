import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenProfilComponent } from './kitten-profil.component';

describe('KittenProfilComponent', () => {
  let component: KittenProfilComponent;
  let fixture: ComponentFixture<KittenProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
