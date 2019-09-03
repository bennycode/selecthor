import { PropertyFilter } from "./PropertyFilter";

export class Query {
  filters: Record<string, PropertyFilter>;
  properties: string[];
  table: string;

  constructor(table: string) {
    this.filters = {};
    this.properties = [];
    this.table = table;
  }

  addFilter(filter: PropertyFilter): void {
    this.filters[filter.name] = filter;
  }
}
