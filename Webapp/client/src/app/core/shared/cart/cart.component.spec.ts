import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [ HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),],
      declarations: [ CartComponent ],
      providers:[{ provide: FormBuilder},
        {provide: APP_BASE_HREF, useValue : '/' },
        {provide: BsModalService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
