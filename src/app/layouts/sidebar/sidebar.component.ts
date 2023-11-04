import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { MenuItem } from './menu.model';
import { GlobalService } from 'src/app/core/services/global.service';
import { MENU } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @ViewChild('componentRef') scrollRef;
  @Input() isCondensed = true;
  menu: any;
  data: any;

  permissions = [];
  sideBarItems = [];
  showSubItems = true;

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
    if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }

  initialize(): void {
    this.permissions = this.globalService.getUserRole('permissions');
    console.log('permissions:', this.permissions);

    let permissionArray: any[] = [];
    this.permissions.forEach((item: any) => {
      permissionArray.push(item.name);
    });

    for (const item of MENU) {
      if (permissionArray.includes(item.permission)) {
        this.sideBarItems.push(item);
      }
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  // routeToPage(item: any, subItem: any) {
  //   console.log(item, subItem);
  //   this.router.navigate([`/${item.toLowerCase()}/${subItem.toLowerCase()}`]);
  // }

  toggleSubItems(item: any) {
    this.showSubItems = !this.showSubItems;
  }
}
