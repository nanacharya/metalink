import {Component, OnInit, ViewChild} from '@angular/core';
import {AllcustomerService} from "../../../../provider/allcustomer.service";
import {HttpClient} from "@angular/common/http";
import {AgGridNg2} from "ag-grid-angular";

@Component({
  selector: 'ml-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent implements OnInit {

  //agGrid instance to get the ag grid data

  @ViewChild('agGrid') agGrid: AgGridNg2;

  constructor(private http: HttpClient) {
  }

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: false, checkboxSelection: true},
    //{headerName: 'Model', field: 'model', sortable: false, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true},
    {headerName: 'Second Make', field: 'make', sortable: true, filter: false},
    {headerName: 'Second Price', field: 'price', sortable: true, filter: false},

  ];

  autoGroupColumnDef={
    headerName:"ModelGroup",
    field:'model',
    cellRenderer:'agGroupCellRenderer',
    cellRendererParams:{
      chekbox:true
    }
  };

  rowData: any;


  ngOnInit() {
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
