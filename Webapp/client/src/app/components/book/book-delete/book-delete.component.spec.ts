import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteComponent } from './book-delete.component';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppModule } from '../../../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';

describe('BookDeleteComponent', () => {
  let component: BookDeleteComponent;
  let fixture: ComponentFixture<BookDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule,SharedModule, ReactiveFormsModule],
      declarations: [ BookDeleteComponent ],
      providers:[{ provide: FormBuilder},{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
