import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { CitiesResponse } from '@interfaces/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService implements OnInit {
  url: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_CITIES;
  }

  ngOnInit() {
  }

  /**
   * Get cities
   *
   */
  getCities(): Observable<CitiesResponse> {
    return this.http.get<CitiesResponse>(this.url);
  }
}
