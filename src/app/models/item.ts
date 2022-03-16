export class Item {
  id: number;
  name: string;
  unitPrice: number;
  categoryId: number;

  constructor(id: number, name: string, unitPrice: number, categoryId: number) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.categoryId = categoryId;
  }
}
