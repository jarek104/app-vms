import { Component } from '@angular/core';
import { Ivm } from './Ivm';

@Component ({
  selector: 'vm-list',
  templateUrl: './vm-list.component.html'
})
export class VmListComponent {
  vmToEdit: Ivm;
  vms: Ivm[] = [
    {
      'vmID': 1,
      'vmName': 'QAV-000697',
      'vmIP': '10.41.1.212',
      'vmOS': 'Windows 10',
      'vmDotNet': '4.5',
      'vmBuildInstalled': '17.1.0.5',
      'vmCurrentUser': 'Jerry',
      'vmComment': 'Automation',
      'vmLauncher': ''
    },
    {
      'vmID': 2,
      'vmName': 'QAV-000234',
      'vmIP': '10.41.1.242',
      'vmOS': 'Windows Server 2008',
      'vmDotNet': '4.5',
      'vmBuildInstalled': '17.0.0.115',
      'vmCurrentUser': 'Bryce',
      'vmComment': 'RFA',
      'vmLauncher': ''
    },
    {
      'vmID': 3,
      'vmName': 'QAV-005435',
      'vmIP': '10.41.1.312',
      'vmOS': 'Windows Server 2012',
      'vmDotNet': '4.5',
      'vmBuildInstalled': '15.0.2.5',
      'vmCurrentUser': 'May',
      'vmComment': 'Testing',
      'vmLauncher': ''
    }
  ];
  editVmUser(edit: Ivm) {
    edit.vmCurrentUser = 'Testing';
  }
}
