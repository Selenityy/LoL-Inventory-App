#! /usr/bin/env node

console.log(
  'This script populates some test champions, roles, and lanes to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Champion = require("./models/champions");
const Lane = require("./models/lanes");
const Role = require("./models/roles");

const champions = [];
const lanes = [];
const roles = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createRoles();
  await createLanes();
  await createChampions();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function championCreate(index, name, description, role, lane) {
  const championDetail = {
    name: name,
    description: description,
    role: role,
    lane: lane,
  };
  if (role != false) championDetail.role = role;
  if (lane != false) championDetail.lane = lane;

  const champion = new Champion(championDetail);
  await champion.save();
  champions[index] = champion;
  console.log(`Added champion: ${name}`);
}

async function roleCreate(index, name) {
  const role = new Role({ name: name });
  await role.save();
  roles[index] = role;
  console.log(`Added role: ${name}`);
}

async function laneCreate(index, name) {
  const lane = new Lane({ name: name });
  await lane.save();
  lanes[index] = lane;
  console.log(`Added lane: ${name}`);
}

async function createRoles() {
  console.log("Adding roles");
  await Promise.all([
    roleCreate(0, "Assassins"),
    roleCreate(1, "Fighters"),
    roleCreate(2, "Mages"),
    roleCreate(3, "Marksmen"),
    roleCreate(4, "Supports"),
    roleCreate(5, "Tanks"),
  ]);
}

async function createLanes() {
  console.log("Adding lanes");
  await Promise.all([
    laneCreate(0, "Top"),
    laneCreate(1, "Jungle"),
    laneCreate(2, "Mid"),
    laneCreate(3, "Bot"),
    laneCreate(4, "Support"),
  ]);
}

async function createChampions() {
  console.log("Adding Champions");
  await Promise.all([
    championCreate(0, "Aatrox", "The Darkin Blade", roles[1], [lanes[0]]),
    championCreate(1, "Ahri", "The Nine-tailed Fox", roles[2], [lanes[2]]),
    championCreate(2, "Amumu", "The Sad Mummy", roles[5], [lanes[1], lanes[4]]),
    championCreate(3, "Ashe", "The Frost Archer", roles[3], [
      lanes[3],
      lanes[4],
    ]),
  ]);
}
