export interface PropertyFilterData {
  name: string;
  operator: string;
  value: number | string;
}

export class PropertyFilter {
  name: string;
  operator: string;
  value: number | string;

  constructor(data: PropertyFilterData) {
    this.name = data.name;
    this.operator = data.operator;
    this.value = parseInt(`${data.value}`, 10);
  }
}
