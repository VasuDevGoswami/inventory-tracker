import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ItemServiceService} from "../../services/item-service.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  deleteItem(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(value => {
      this.getAllItems();
    })
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }
}
