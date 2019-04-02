import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalPage } from './page-modal.page';

describe('PageModalPage', () => {
  let component: PageModalPage;
  let fixture: ComponentFixture<PageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
