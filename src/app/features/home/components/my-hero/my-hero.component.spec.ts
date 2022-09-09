import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeroComponent } from './my-hero.component';

describe('MyHeroComponent', () => {
  let component: MyHeroComponent;
  let fixture: ComponentFixture<MyHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
