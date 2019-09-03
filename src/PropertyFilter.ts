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

    const numericValue = parseInt(`${data.value}`, 10);
    if (isNaN(numericValue)) {
      this.value = (data.value as string).replace(/['"]+/g, "");
    } else {
      this.value = numericValue;
    }
  }
}
