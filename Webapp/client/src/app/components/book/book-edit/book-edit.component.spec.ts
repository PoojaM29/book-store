import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule,SharedModule, ReactiveFormsModule],
      declarations: [ BookEditComponent ],
      providers:[{ provide: FormBuilder},
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
