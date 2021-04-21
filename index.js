const config = require('./config.json');
let zoneId;

module.exports = function CardPresets(mod) {

		mod.hook('S_SPAWN_NPC', 12, (event) => 
		{
	
			switch (event.huntingZoneId)
				{
					// Gossamer Vault (Easy)
					case 3101: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Hellgrammite - Magical Creature');
								return true;
							case 2000: // 2 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Gossamer Regent - Magical Creature');
								return true;
						}
					
					// Akalath Quarantine
					case 3023: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Akalath Travan - Argon');
								return true;
							case 2000: // 2 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Akalath Kashir - Argon');
								return true;
						}
					
					// Ruinous Manor (Normal)
					case 770: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Resurrected Atrocitas - Magical Creature');
								return true;
								
							case 3000: // 3 BOSS
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('Lachelith - Demon');
								return true;
						}
					
					// Ruinous Manor (Hard)
					case 970: 
						
						switch (event.templateId) 
						{
							case 3000: // 3 BOSS
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('Nightmare Lachelith - Demon');
								return true;
						}
					
					// Manglemire
					case 470: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(35, config.giantPreset -1)
								mod.command.message('Manglemore - Giant');
								return true;
						}
					
					// Commander Residence
					case 3030: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Maknakh - Azart');
								return true;
							case 3000: // 3 BOSS
								setPresetAndEffects(31, config.magicaldevicePreset -1)
								mod.command.message('LB-1 - Magical Device');
								return true;
						}
						
					// Catalepticon
					case 3104: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Lumikan - Azart');
								return true;
						}
					
					// Catalepticon (Hard)
					case 3204: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Nightmare Lumikan - Azart');
								return true;
						}
						
					// Killing Grounds
					case 3106: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('Gardan - Ancestor');
								return true;
						}
					
					// Killing Grounds (Hard)
					case 3206: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('Nightmare Gardan - Ancestor');
								return true;
						}
						
					// Draakon Arena
					case 3102: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Commander Kalligar - Azart');
								return true;
						}
					
					// Forbidden Arena [Undying Warlord]
					case 3103: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('Undying Warlord - Ancestor');
								return true;
						}
					
					// Corrupted Skynest
					case 3026: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Kelsaik - Argon');
								return true;
						}
					
					// Corrupted Skynest (Hard)
					case 3126: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Nightmare Kelsaik - Argon');
								return true;
						}
						
					// Bahaar Sanctum
					case 444: 
						
						switch (event.templateId) 
						{
							case 1000: // Phase 1
								setPresetAndEffects(26, config.godPreset -1)
								mod.command.message('Bahaar Phase 1 - God');
								return true;
							case 2000: // Phase 2
								setPresetAndEffects(26, config.godPreset -1)
								mod.command.message('Bahaar Phase 2 - God');
								return true;
						}
					
					// Anansha
					case 29: 
						
						switch (event.templateId) 
						{	
							case 2001: // Anansha
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Anansha - Magical Creature');
								return true;
						}
					
					// Frygaras
					case 34: 
						
						switch (event.templateId) 
						{	
							case 2002: // Frygaras
								setPresetAndEffects(25, config.dragonPreset -1)
								mod.command.message('Frygaras - Dragon');
								return true;
						}
					
					// Sabranak
					case 34: 
						
						switch (event.templateId) 
						{	
							case 2003: // Sabranak
								setPresetAndEffects(25, config.dragonPreset -1)
								mod.command.message('Sabranak - Dragon');
								return true;
						}
					
					// Ortan
					case 26: 
						
						switch (event.templateId) 
						{	
							case 5001: // Ortan
								setPresetAndEffects(26, config.godPreset -1)
								mod.command.message('Ortan - God');
								return true;
						}
					
					// Hazard
					case 39: 
						
						switch (event.templateId) 
						{	
							case 501: // Hazard
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Hazard - Magical Creature');
								return true;
						}
					
					// Cerrus
					case 51: 
						
						switch (event.templateId) 
						{	
							case 4001: // Cerrus
								setPresetAndEffects(30, config.beastPreset -1)
								mod.command.message('Cerrus - Beast');
								return true;
						}
					
					// Dreadreaper
					case 622: 
						
						switch (event.templateId) 
						{	
							case 1000: // Dreadreaper
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Dreadreaper - Magical Creature');
								return true;
						}
					
					// Vehemos
					case 620: 
						
						switch (event.templateId) 
						{	
							case 1000: // Vehemos
								setPresetAndEffects(35, config.giantPreset -1)
								mod.command.message('Vehemos - Giant');
								return true;
						}
					
					/*
					// Default
					default : 
						
						setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
						return true;
					*/
				}
		});

	/*
    mod.hook('C_USE_ITEM', 3, (event) => {

        if(config.fishing)
        {
            config.rodID.forEach(e => {
                if(event.id == e)
                {
                    setPresetAndEffects(config.secondaryEffect, config.fishPreset -1)
                }
            });
        }

    });
	*/
    
    function setPresetAndEffects(colId, presetId)
    {

        clearEffects();
        mod.toServer('C_ACTIVATE_CARD_COMBINE_LIST', 1, {
            id: colId
        })
        mod.toServer('C_CHANGE_CARD_PRESET', 1, {
            preset: presetId
        })
    }

    function clearEffects()
    {
        for (let i = 0; i < 36; i++) {
            
            mod.toServer('C_DEACTIVATE_CARD_COMBINE_LIST', 1, {
                id: i
            })
            
        }
        mod.toServer('C_ACTIVATE_CARD_COMBINE_LIST', 1, {
            id: config.defaultEffect
        })
    }

}
