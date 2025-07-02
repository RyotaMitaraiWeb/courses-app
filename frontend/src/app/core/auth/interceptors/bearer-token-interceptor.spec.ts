import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, HttpStatusCode, provideHttpClient, withInterceptors } from '@angular/common/http';

import { bearerTokenInterceptor } from './bearer-token-interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('bearerTokenInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => bearerTokenInterceptor(req, next));
  let httpTest: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(withInterceptors([interceptor])), provideHttpClientTesting()],
    });

    httpTest = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('Attaches a token to the request if such is available', (done: DoneFn) => {
    spyOn(window.localStorage, 'getItem').and.returnValue('a');

    httpClient.get('/test').subscribe(() => {
      done();
    });

    const request = httpTest.expectOne('/test');
    request.flush(null, { status: HttpStatusCode.Ok, statusText: 'Ok' });
    expect(request.request.headers.get('Authorization')).toBe('Bearer a');
  });

  it('Does not attach a token if there is no such in localStorage', (done: DoneFn) => {
    spyOn(window.localStorage, 'getItem').and.returnValue(null);

    httpClient.get('/test').subscribe(() => {
      done();
    });

    const request = httpTest.expectOne('/test');
    request.flush(null, { status: HttpStatusCode.Ok, statusText: 'Ok' });
    expect(request.request.headers.has('Authorization')).toBeFalse();
  });

  afterEach(() => {
    httpTest.verify();
  });
});
