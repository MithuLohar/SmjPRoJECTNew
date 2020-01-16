import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSortModule } from "@angular/material/sort";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { DynamicTableModule } from "material-dynamic-table";
import { ApiComponent } from "./api/api.component";
import {
  MatPaginatorModule,
  MatInputModule,
  MatOptionModule,
  MatIconModule,
  MatFormFieldModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, ApiComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    DynamicTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
