import {Component, OnInit, ViewChild} from '@angular/core';
import {AllcustomerService} from "../../../../provider/allcustomer.service";
import {HttpClient} from "@angular/common/http";
import {AgGridNg2} from "ag-grid-angular";
import {FormDataService} from "../create-customer/common/form-data.service";

@Component({
  selector: 'ml-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent implements OnInit {

  //agGrid instance to get the ag grid data

  @ViewChild('agGrid') agGrid: AgGridNg2;

  constructor(private http: HttpClient, private service: AllcustomerService) {
  }

  columnDefs = [
    {headerName: 'First Name', field: 'firstname', sortable: true, filter: false, checkboxSelection: true},
    {headerName: 'Last Name', field: 'lastname', sortable: false, filter: true},
    {headerName: 'DOB', field: 'dob', sortable: true, filter: true},
    {headerName: 'State', field: 'state', sortable: true, filter: false},
    {headerName: 'City', field: 'city', sortable: true, filter: false},
    {headerName: 'Zip', field: 'zip', sortable: true, filter: false},
    {headerName: 'Company Name', field: 'companyname', sortable: true, filter: false},
    {headerName: 'Company Address', field: 'companyaddress', sortable: true, filter: false},
    {headerName: 'Monthly Salary', field: 'monthlysalary', sortable: true, filter: false},
    {headerName: 'Monthly Expense', field: 'monthlyexpense', sortable: true, filter: false},

  ];

  autoGroupColumnDef = {
    headerName: "ModelGroup",
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      chekbox: true
    }
  };

  rowData: any;


  ngOnInit() {
    // this.service.getAllUser().subscribe(response => {
    //   this.rowData = response;
    // });
    this.http.get('https://api.myjson.com/bins/15psn9').subscribe(result => {
      this.rowData = result;
    });

  }

  getSelectedData() {
    debugger;
    let selectedNodes = this.agGrid.api.getSelectedNodes();
    let data = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = data.map(node => node.make + ' ' + node.model).join(', ');
    alert(selectedDataStringPresentation);
    console.log(selectedNodes);
  }
}
