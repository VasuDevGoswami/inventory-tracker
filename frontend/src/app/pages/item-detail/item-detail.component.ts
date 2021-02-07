import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from "../../services/item-service.service";
import {Item} from "../../models/item";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemService: ItemServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(value => {
     this.handleItemDetail();
   })
  }

  private handleItemDetail() {
    const itemId = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItemDetail(itemId).subscribe(data => {
      this.item = data;
    })
  }
}
