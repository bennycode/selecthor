import { PropertyFilter } from "./PropertyFilter";
import { Query } from "./Query";

/**
 * Select data from a JSON object using SQL-like syntax.
 *
 * @param input - JSON data which you want to query.
 * @param statement - Query in SQL-like syntax.
 *
 * @returns The query result.
 */
export function selecthor(
  input: Record<string, any>,
  statement: string
): Record<string, any> {
  const tokens = statement.split(" ");
  const lowerCasedTokens = statement.toLowerCase().split(" ");

  // FROM
  const tableIndex = lowerCasedTokens.indexOf("from") + 1;
  const tableName = tokens[tableIndex];
  const query = new Query(tableName);

  // WHERE
  const whereIndex = lowerCasedTokens.indexOf("where");
  if (whereIndex > -1) {
    const propertyName = tokens[whereIndex + 1];
    const operator = tokens[whereIndex + 2];
    const value = tokens[whereIndex + 3];
    const filter = new PropertyFilter({
      name: propertyName,
      operator,
      value
    });
    query.addFilter(filter);
  }

  let selection: Record<string, any> = Object.assign({}, input);
  selection = selection[query.table];

  for (const filter of Object.values(query.filters)) {
    selection = selection.filter((item: any) => {
      const value = filter.name
        .split(".")
        .reduce((properties, key) => properties[key], item);
      switch (filter.operator) {
        case "=":
          return value === filter.value;
        case ">":
          return value > filter.value;
        case "<":
          return value < filter.value;
        case "<=":
          return value <= filter.value;
        case ">=":
          return value >= filter.value;
        default:
          return false;
      }
    });
  }

  // SELECT
  const propertiesIndex = lowerCasedTokens.indexOf("select") + 1;
  const properties = tokens[propertiesIndex];
  if (properties !== "*") {
    const mappings = properties.split(",");
    selection = selection.map((item: any) => {
      const newItem = { ...item };
      const ownProperties = Object.keys(newItem);
      for (const ownProperty of ownProperties) {
        if (!mappings.includes(ownProperty)) {
          delete newItem[ownProperty];
        }
      }
      return newItem;
    });
  }

  return selection;
}
