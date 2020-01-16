import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material";
import { user } from "./../models/user.model";
import { ApiService } from "./../services/api.service";
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { MatFormFieldModule } from "@angular/material";

export interface PeriodicElement {
  id: any;
  name: any;
  cost: any;
  rate: any;
  date: any;
  cgst: any;
  sgst: any;
  igst: any;
}

@Component({
  selector: "app-api",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"]
})
export class ApiComponent implements OnInit {
  displayedColumns: any[] = ["id", "name", "cost", "rate", "date", "cgst"];

  ELEMENT_DATA: PeriodicElement[];
  dataSource = this.ELEMENT_DATA;
  constructor(private service: ApiService) {}
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.service.getData().subscribe(user => {
      this.dataSource = user.results;
      console.log(user.results);
    });
  }
}
