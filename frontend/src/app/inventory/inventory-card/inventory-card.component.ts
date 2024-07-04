import { Component, Input } from "@angular/core";
import { IProduct } from "../../interfaces/IProduct.interface";

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.css'
})
export class InventoryCardComponent {
  @Input() product: IProduct | null = null;
  @Input() hideIcons: boolean = false;

}

