import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnimalComponent } from './menu-animal.component';

describe('MenuAnimalComponent', () => {
  let component: MenuAnimalComponent;
  let fixture: ComponentFixture<MenuAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
