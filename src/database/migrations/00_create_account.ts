import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("account", (table) => {
    table.increments("id").primary();
    table.string("amount").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("account");
}
