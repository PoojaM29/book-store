import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule  } from '@angular/router/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [ HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),],
      declarations: [ RegisterComponent ],
      providers:[{ provide: FormBuilder},
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
