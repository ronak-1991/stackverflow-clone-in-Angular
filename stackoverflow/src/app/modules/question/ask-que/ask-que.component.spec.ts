import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQueComponent } from './ask-que.component';

describe('AskQueComponent', () => {
  let component: AskQueComponent;
  let fixture: ComponentFixture<AskQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
