import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment.development';
import { Course, EditCourseBody, SearchCoursesParams } from '../../types';

const api = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly http = inject(HttpClient);
  readonly endpoints = {
    get: `${api}/courses`,
    put: (id: number) => `${api}/courses/${id}`,
  };

  readonly courseImagesUrl = `${api}/static/courses-images`;

  public get(searchParams: SearchCoursesParams) {
    const params = new HttpParams().append('query', searchParams.query);
    return this.http.get<Course[]>(this.endpoints.get, { params });
  }

  public edit(courseId: number, body: EditCourseBody) {
    return this.http.put(this.endpoints.put(courseId), { body });
  }
}
