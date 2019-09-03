export class Query {
  filter: Record<string, string | number>;
  properties: string[];
  table: string;

  constructor(table: string) {
    this.filter = {};
    this.properties = [];
    this.table = table;
  }
}
