import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../model/user-model';

@Component({
  selector: 'ml-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class MlCustomerComponent implements OnInit {

  adminMenu: any;
  user: UserModel;
  userInfo: string;

  constructor() {
  }

  ngOnInit() {
    debugger;
    if (sessionStorage.getItem('customer')) {
      this.user = <UserModel> JSON.parse(sessionStorage.getItem('customer'));
    } else {
      this.user = new UserModel();
    }

    if (this.user) {
      if (this.user.firstname && this.user.lastname) {
        this.userInfo = this.user.firstname + ' ' + this.user.lastname;
      } else if (this.user.firstname) {
        this.userInfo = this.user.firstname;
      } else if (this.user.lastname) {
        this.userInfo = this.user.lastname;
      } else {
        this.userInfo = '';
      }
    }
    this.adminMenu = [
      {
        id: 1,
        menuText: 'Home',
        collapseId: 'homeCollapse',
        route: './home',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },
      {
        id: 2,
        menuText: 'OnlineServices',
        collapseId: 'customersCollapse',
        iconCls: 'mdi mdi-home',
        route: '',
        childMenu: [
          {
            menuText: 'Change Password',
            route: 'online-services/changePassword'
          },
          {
            menuText: 'Check Your Mail',
            route: 'online-services/checkMail'
          },
          {
            menuText: 'Contact Update',
            route: 'online-services/contactUpdate'
          },
          {
            menuText: 'View Uses Graph',
            route: 'online-services/usesGraph'
          },
          {
            menuText: 'Check Internet Usage',
            route: 'online-services/internetUses'
          },
          {
            menuText: 'Active Devices',
            route: 'online-services/activeDevices'
          },
          {
            menuText: 'Bandwidth Selector',
            route: 'online-services/bandwidth'
          },
        ]
      },
      {
        id: 3,
        menuText: 'Account Services',
        iconCls: 'mdi mdi-home',
        childMenu: [
          {
            menuText: 'Payment And Account History',
            route: 'account-service/accountHistory'
          }, {
            menuText: 'Service Plan History',
            route: 'account-service/planHistory'
          }, {
            menuText: 'Check Account Status',
            route: 'account-service/accountStatus'
          }, {
            menuText: 'Epayment',
            route: 'account-service/ePayment'
          }, {
            menuText: 'View Epayment History',
            route: 'account-service/ePaymentHistory'
          },
        ]
      },
      {
        id: 4,
        menuText: 'Refer Offer',
        route: './refer-offer',
        iconCls: 'mdi mdi-location_on',
        childMenu: []
      },
      {
        id: 5,
        menuText: 'Support Issues',
        iconCls: 'mdi mdi-ring_volume',
        childMenu: [
          {
            menuText: 'Report Trouble Ticket',
            route: 'support-issue/reportTicket'
          },
          {
            menuText: 'Ticket Status',
            route: 'support-issue/ticketStatus'
          },
          {
            menuText: 'FAQs',
            route: 'support-issue/faqs'
          },

        ]
      },
    ];
  }


}
