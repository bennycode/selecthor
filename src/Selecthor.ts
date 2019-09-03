import { Query } from "./Query";

function selecthor(
  input: Record<string, any>,
  query: string
): Record<string, any> {
  const tokens = query.split(" ");
  const tableIndex = tokens.indexOf("from") + 1;
  const tableName = tokens[tableIndex];
  const selection = new Query(tableName);
  return input[selection.table];
}

export default selecthor;
