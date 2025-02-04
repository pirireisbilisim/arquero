/**
 * Convenience function for computing a single aggregate value for
 * a table. Equivalent to ungrouping a table, applying a rollup verb
 * for a single aggregate, and extracting the resulting value.
 * @param {Table} table A table instance.
 * @param {import('../../table/transformable').TableExpr} expr An
 *   aggregate table expression to evaluate.
 * @return {import('../../table/table').DataValue} The aggregate value.
 * @example agg(table, op.max('colA'))
 * @example agg(table, d => [op.min('colA'), op.max('colA')])
 */
export default function agg(table: Table, expr: import('../../table/transformable').TableExpr): import('../../table/table').DataValue;
import Table from "../../table/table";
