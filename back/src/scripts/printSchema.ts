import { printSchema } from "graphql";
import { schema } from "../schema";

const printableSchema = printSchema(schema);
Bun.write("../schema.graphql", printableSchema);
console.log("Schema printed to schema.graphql");
