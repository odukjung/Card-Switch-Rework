## card-switcher
* Changes card presets and collection effect when entering a dungeon

# OP Code
C_CHANGE_CARD_PRESET 36656
C_DEACTIVATE_CARD_COMBINE_LIST 20541
C_ACTIVATE_CARD_COMBINE_LIST 30699

# Fix Bug
- CR (Done)
- Ortan (Done)
- Hazard (Done)
- Cerrus (Done)

# Update
- Support

1. RK-9 Rampaging
2. Damned Citadel


## Request
* 10 page Preset Card
* 35 Collection Effect or edit the number with the of collection effect you have
  | Default Preset Card |
  | ------------------------ |
  | "Ancestor Preset"              : 1 |
  | "Azart Preset"                 : 2 |
  | "Demon Preset"                 : 3 |
  | "Argon Preset"                 : 4 |
  | "Dragon Preset"                : 5 |
  | "God Preset"                   : 6 |
  | "Magical Creature"             : 7 |
  | "Magicaldevice Preset"         : 8 |
  | "Giant Preset"                 : 9 |
  | "Basic Preset" or "Beast Preset" : 10 |

### Instructions
* move flie in folder defs to \TeraToolbox\data\definitions
* move flie in folder opcodes to \TeraToolbox\data\opcodes
* Set the IDs of your preset in `config.json`
* Set the IDs of the base collection effect (defaultEffect = The one that is selected all the time, secondaryEffect = This one will be selected if you enter a dungeon with a boss of no type)

| Supported Dungeons |
| ------------------------ |
| Gossamer Vault (Easy) |
| Akalath Quarantine |
| Ruinous Manor (Normal) |
| Ruinous Manor (Hard) |
| Manglemire |
| Commander Residence |
| Catalepticon |
| Catalepticon (Hard) |
| Killing Grounds |
| Killing Grounds (Hard) |
| Draakon Arena |
| Forbidden Arena [Undying Warlord] |
| Corrupted Skynest |
| Corrupted Skynest (Hard) |
| Bahaar Sanctum |
| Dreadreaper (Guardian Legion) |
| Vehemos (Guardian Legion) |
| Anansha (Civil Unrest Bam) |
| Frygaras (Civil Unrest Bam) |
| Sabranak (Civil Unrest Bam) |
| Ortan (World Boss) |
| Hazard (World Boss) |
| Cerrus (World Boss) |
| Pit of Petrax |
| Lumikan Trial |
