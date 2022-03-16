import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/category";
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = []
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItemList().subscribe(items => {
      this.items = items
    }, error => {
      console.log(error)
    })
  }


}
