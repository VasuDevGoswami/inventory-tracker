import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';
import {ItemServiceService} from "../../services/item-service.service";

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    let fixture = TestBed.createComponent(ItemDetailComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
