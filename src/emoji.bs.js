// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var LodashFlatten = require("lodash.flatten");
var LodashShuffle = require("lodash.shuffle");

var joiner = String.fromCodePoint(8205);

var woman = "👩";

var man = "👨";

var genders = [
  "♂️",
  "♀️"
];

var skinTones = [
  "🏻",
  "🏼",
  "🏽",
  "🏾",
  "🏿"
];

function mapToProfessions(professions, people) {
  return LodashFlatten(professions.map(function (profession) {
                  return people.map(function (person) {
                              return person + (joiner + profession);
                            });
                }));
}

function mapToSkinTones(people) {
  return LodashFlatten(people.map(function (profession) {
                  return skinTones.map(function (tone) {
                              return profession + tone;
                            });
                }));
}

function mapToGenders(people) {
  return LodashFlatten(people.map(function (person) {
                  return genders.map(function (gender) {
                              return person + (joiner + gender);
                            });
                }));
}

var professions = [
  "⚕️",
  "🎓",
  "🏫",
  "🌾",
  "🍳",
  "🔧",
  "🏭",
  "💼",
  "🔬",
  "💻",
  "🎤",
  "🎨",
  "✈️",
  "🚀",
  "🚒"
];

var nonSequencedProfessions = mapToGenders(mapToSkinTones([
          "👮",
          "🕵️",
          "👷",
          "👳",
          "👱"
        ]));

var people = skinTones.map(function (tone) {
        return man + tone;
      }).concat(skinTones.map(function (tone) {
          return woman + tone;
        }));

var sequencedProfessions = LodashShuffle(mapToProfessions(professions, people));

function getPeople(param) {
  return LodashShuffle(nonSequencedProfessions.concat(sequencedProfessions));
}

exports.joiner = joiner;
exports.woman = woman;
exports.man = man;
exports.genders = genders;
exports.skinTones = skinTones;
exports.mapToProfessions = mapToProfessions;
exports.mapToSkinTones = mapToSkinTones;
exports.mapToGenders = mapToGenders;
exports.professions = professions;
exports.nonSequencedProfessions = nonSequencedProfessions;
exports.people = people;
exports.sequencedProfessions = sequencedProfessions;
exports.getPeople = getPeople;
/* joiner Not a pure module */
