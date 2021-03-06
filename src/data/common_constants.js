import React from "react";
import {
  Architect,
  Follower,
  Veteran,
  Sponsor,
  LittleHelper,
  CakeBoss,
  Donator,
  BigDonator
} from './badges';

import Sentinel from "../img/sentinel-icon.png";
import Striker from "../img/striker-icon.png";
import Sunbreaker from "../img/sunbreaker-icon.png";
import Nightstalker from "../img/nightstalker-icon.png";
import Arcstrider from "../img/arcstrider-icon.png";
import Gunslinger from "../img/gunslinger-icon.png";
import Voidwalker from "../img/voidwalker-icon.png";
import Dawnblade from "../img/dawnblade-icon.png";
import Stormcaller from "../img/stormcaller-icon.png";

export const GAME_TYPES = {
  2: 'Story',
  3: 'Strikes Playlist',
  4: 'Raid',
  5: 'PVP - Any',
  6: 'Patrol',
  7: 'PVE - Any',
  10: 'Control',
  12: 'Clash',
  16: 'Nightfall',
  17: 'Nightfall - Heroic',
  18: 'Strikes - Any',
  19: 'Iron banner',
  31: 'Supremacy',
  37: 'Survival',
  38: 'Countdown',
  39: 'Trials of the Nine',
  100: 'PVE - Other',
  101: 'PVP - Other',
  102: 'Other',
}

export const CHECKPOINTS = {
  1: "Leviathan - Full Raid",
  2: "Leviathan - Castellum",
  3: "Leviathan - Royal Pools",
  4: "Leviathan - Pleasure Gardens",
  5: "Leviathan - Gauntlet",
  6: "Leviathan - Calus", 
  11: "Leviathan - Full Raid",
  12: "Leviathan - Castellum",
  13: "Leviathan - Royal Pools",
  14: "Leviathan - Pleasure Gardens",
  15: "Leviathan - Gauntlet",
  16: "Leviathan - Calus",
  102: "Leviathan - Other"
}

export const BADGES = {
  1: <Donator />,
  2: <Architect />,
  3: <BigDonator />,
  4: <Sponsor />,
  5: <Veteran />,
  6: <CakeBoss />,
  7: <LittleHelper />,
  8: <Follower />
}

export const SUBCLASS_ICONS = {
  'Sentinel': Sentinel,
  'Striker': Striker, 
  'Sunbreaker': Sunbreaker,
  'Nightstalker': Nightstalker,
  'Arcstrider': Arcstrider, 
  'Gunslinger': Gunslinger,
  'Voidwalker': Voidwalker,
  'Dawnblade': Dawnblade, 
  'Stormcaller': Stormcaller,
  'Lost Light': Sentinel
}

export const PLATFORMS = {
  1: "Xbox",
  2: "Playstation",
  4: "PC"
}