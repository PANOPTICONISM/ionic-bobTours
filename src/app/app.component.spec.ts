import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

// Added imports in chapter 11.6
import { PopoverController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

describe('AppComponent', () => {
  let statusBarSpy,
    splashScreenSpy,
    platformReadySpy,
    platformSpy,
    popoverSpy,
    localNotifySpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    popoverSpy = jasmine.createSpyObj('Popover', ['']);
    localNotifySpy = jasmine.createSpyObj('LocalNotify', ['']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: PopoverController, useValue: popoverSpy },
        { provide: LocalNotifications, useValue: localNotifySpy },
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        IonicStorageModule.forRoot(),
      ],
    }).compileComponents();
  }));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
    expect(popoverSpy).toBeDefined();
    expect(localNotifySpy).toBeDefined();
  });

  it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-menu-toggle');
    expect(menuItems.length).toEqual(4);
    expect(menuItems[0].textContent).toContain('Favorites');
    expect(menuItems[1].textContent).toContain('Regions');
    expect(menuItems[2].textContent).toContain('Tour-Types');
    expect(menuItems[3].textContent).toContain('Slideshow');
  });

  it('should have routes', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-menu-toggle ion-item');
    expect(menuItems.length).toEqual(4);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual(
      '/favorites'
    );
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual(
      '/regions'
    );
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual(
      '/tour-types'
    );
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual(
      '/slideshow'
    );
  });
});
