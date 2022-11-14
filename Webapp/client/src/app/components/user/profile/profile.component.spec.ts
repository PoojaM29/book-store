import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from  '../../../core/shared/shared.module';
import { UserService } from '../../../core/services/user.service';
import { CommentService } from '../../../core/services/comment.service';
import { HelperService } from '../../../core/services/helper.service';
import { of, throwError } from 'rxjs';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let userService: UserService;
  let commentService: CommentService;
  let helperService: HelperService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule,SharedModule, ReactiveFormsModule],
      declarations: [ ProfileComponent ],
      providers:[{ provide: FormBuilder},
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = fixture.debugElement.injector.get(UserService);
    helperService = fixture.debugElement.injector.get(HelperService);
    commentService = fixture.debugElement.injector.get(CommentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call getComments', () => {
    const spy= spyOn(commentService, "getLatestFiveComments").and.returnValue(of([]));
    component.getComments()
  });

  it('should call blockComments', () => {
    const id = "10";
    const payload = {
      id: "10",
      avatar: "test"
    };
    const spy= spyOn(userService, "changeAvatar").and.returnValue(of([]));
    component.blockComments(id);
  });

  xit('should call userservice fail', () => {
    const spy= spyOn(userService, "changeAvatar").and.returnValue(throwError([]));
    component.getComments()
  });

  it('should call unblockComments', () => {
    const id= "10";
    component.unblockComments(id);
  });
  
  xit('should call onSubmit', () => {
    const payload = {
      id: "10",
      avatar: "test"
    };
    component.onSubmit()
  });

  it('should call avatar', () => {
    component.avatar;
  });

});
