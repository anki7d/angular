import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JsonApiService {

  handleError: (err: any, caught: Observable<any>) => never;

  constructor(private http: HttpClient) { }

  private getApiUrl() {
    return env.api_url;
  }

  private getAuthToken() {
    return localStorage.getItem('auth_token');
  }

  public reqHeaders() {


    if (this.getAuthToken() && this.getFid()) {

      var auth_token_allHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Auth': this.getAuthToken(),
      });
      return {
        headers: auth_token_allHeaders,
      };

    }

    var allHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return {
      headers: allHeaders,
    };

  }

  private post_http_req(url, fromData) {
    return this.http.post<any>(url, fromData, this.reqHeaders()).pipe(
      delay(100),
      map((data: any) => data.data || data)
    );
  }

  public example_post_req(example_id: string): any {

    return this.post_http_req(this.getApiUrl() + 'example', example_id);
  }

}
