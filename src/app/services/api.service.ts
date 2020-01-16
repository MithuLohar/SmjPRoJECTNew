import { MatPaginator } from '@angular/material/paginator';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public api = "https://test.1ounce.in/ounceAdmin/ounceSellOrders/";
  getData() {
    return this.http.get<any>(this.api);
  }
  public search = "https://test.1ounce.in/ounceAdmin/ounceSellOrders/?";
  
}
