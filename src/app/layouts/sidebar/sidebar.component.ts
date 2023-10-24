import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
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

  menuItems = [];
  sideBarItems = [];
  showSubItems = true;

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
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
    const parentIds: number[] = [1];
    this.menuItems = this.globalService.getUserRole('permissions');

    let menuItemsNames: any[] = [];
    this.menuItems.forEach((item: any) => {
      menuItemsNames.push(item.name);
    });

    for (const item of MENU) {
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (menuItemsNames.includes(subItem.value)) {
            parentIds.push(item.id);
            break;
          }
        }
      }
    }

    for (const item of MENU) {
      if (parentIds.includes(item.id)) {
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
    console.log('HI');
    this.showSubItems = !this.showSubItems;
  }
}
