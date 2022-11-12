import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MyCommonModule } from './components/common/my-common.module';
import { AppRoutingModule } from './app.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/landing/home/home.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent,
        HomeComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          newestOnTop: false
        }),
        MyCommonModule,
        AppRoutingModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
