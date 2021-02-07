import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {Item} from "../../models/item";
import {Router} from "@angular/router";
import {ItemServiceService} from "../../services/item-service.service";

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  @ViewChild('form') addItemForm: NgForm;
  item: Item = new Item();

  constructor(private itemService: ItemServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  addItem() {
    let flag = this.isValidUrl(this.item.imageUrl);
    if(!flag) {
      this.item.imageUrl = 'http://via.placeholder.com/640x360';
    }

    this.itemService.addItem(this.item).subscribe(value => {
      this.router.navigate(['/']);
    });

  }

  isValidUrl(imageUrl: string) {
    let url;
    try {
      url = new URL(imageUrl);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }
}
