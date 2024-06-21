#!/usr/bin/env node
import { Command } from "commander";
import {
  seedStations,
} from "./index.js";


const program = new Command();
program.version("1.0.0").description("Z Energy Database Seeding Tool");


program
  .command("seed")
  .alias("s")
  .description("Seed the database with initial data")
  .action(() => seedStations());

program.parse(process.argv);
