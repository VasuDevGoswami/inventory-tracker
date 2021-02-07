import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Item} from "../models/item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private baseUrl = environment.apiUrl;
  private itemsUrl = `${this.baseUrl}/items`;

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<ItemsResponse>(this.itemsUrl).pipe(
      map(value => value._embedded.items)
    );
  }

  addItem(item: Item): Observable<Item>  {
    return this.http.post<Item>(this.itemsUrl,item);
  }

  getItemDetail(itemId: number): Observable<Item> {
    const url = `${this.itemsUrl}/${itemId}`;
    return this.http.get<Item>(url);
  }

  deleteItem(itemId: number) {
    const url = `${this.itemsUrl}/${itemId}`;
    return this.http.delete(url);

  }
}

interface ItemsResponse {
  _embedded: {items: Item[]}
}
