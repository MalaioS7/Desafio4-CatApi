import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCatComponent } from './images-cat.component';

describe('ImagesCatComponent', () => {
  let component: ImagesCatComponent;
  let fixture: ComponentFixture<ImagesCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
