import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppModule } from '../../../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule,SharedModule, ReactiveFormsModule],
      declarations: [ BookDetailsComponent ],
      providers:[{ provide: FormBuilder},
        {provide: APP_BASE_HREF, useValue : '/' },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // represents the bookId
              },
            },
          },
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
