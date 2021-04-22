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
								mod.command.message('Hellgrammite - <font color="#fff317">Magical Creature</font>');
								return true;
							case 2001: // 2 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Gossamer Regent - <font color="#fff317">Magical Creature</font>');
								return true;
						}
					
					// Akalath Quarantine
					case 3023: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Akalath Travan - <font color="#fff317">Argon</font>');
								return true;
							case 2000: // 2 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Akalath Kashir - <font color="#fff317">Argon</font>');
								return true;
						}
					
					// Ruinous Manor (Normal)
					case 770: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Resurrected Atrocitas - <font color="#fff317">Magical Creature</font>');
								return true;
								
							case 3000: // 3 BOSS
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('Lachelith - <font color="#fff317">Demon</font>');
								return true;
						}
					
					// Ruinous Manor (Hard)
					case 970: 
						
						switch (event.templateId) 
						{
							case 3000: // 3 BOSS
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('Nightmare Lachelith - <font color="#fff317">Demon</font>');
								return true;
						}
					
					// Manglemire
					case 470: 
						
						switch (event.templateId) 
						{
							case 800: // 1 BOSS
								setPresetAndEffects(35, config.giantPreset -1)
								mod.command.message('Manglemore - <font color="#fff317">Giant</font>');
								return true;
						}
					
					// Commander Residence
					case 3030: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Maknakh - <font color="#fff317">Azart</font>');
								return true;
							case 3000: // 3 BOSS
								setPresetAndEffects(31, config.magicaldevicePreset -1)
								mod.command.message('LB-1 - <font color="#fff317">Magical Device</font>');
								return true;
						}
						
					// Catalepticon
					case 3104: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Lumikan - <font color="#fff317">Azart</font>');
								return true;
						}
					
					// Catalepticon (Hard)
					case 3204: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Nightmare Lumikan - <font color="#fff317">Azart</font>');
								return true;
						}
						
					// Killing Grounds
					case 3106: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('Gardan - <font color="#fff317">Ancestor</font>');
								return true;
						}
					
					// Killing Grounds (Hard)
					case 3206: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('Nightmare Gardan - <font color="#fff317">Ancestor</font>');
								return true;
						}
						
					// Draakon Arena
					case 3102: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('Commander Kalligar - <font color="#fff317">Azart</font>');
								return true;
						}
					
					// Forbidden Arena [Undying Warlord]
					case 3103: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('Undying Warlord - <font color="#fff317">Ancestor</font>');
								return true;
						}
					
					// Corrupted Skynest
					case 3026: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Kelsaik - <font color="#fff317">Argon</font>');
								return true;
						}
					
					// Corrupted Skynest (Hard)
					case 3126: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('Nightmare Kelsaik - <font color="#fff317">Argon</font>');
								return true;
						}
						
					// Bahaar Sanctum
					case 444: 
						
						switch (event.templateId) 
						{
							case 1000: // Phase 1
								setPresetAndEffects(26, config.godPreset -1)
								mod.command.message('Bahaar Phase 1 - <font color="#fff317">God</font>');
								return true;
							case 2000: // Phase 2
								setPresetAndEffects(26, config.godPreset -1)
								mod.command.message('Bahaar Phase 2 - <font color="#fff317">God</font>');
								return true;
						}
					
					/*
					// Default
					default : 
						
						setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
						return true;
					*/
					
					// Dreadreaper
					case 622: 
						
						switch (event.templateId) 
						{	
							case 1000: // Dreadreaper
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('Dreadreaper - <font color="#fff317">Magical Creature</font>');
								return true;
						}
					
					// Vehemos
					case 620: 
						
						switch (event.templateId) 
						{	
							case 1000: // Vehemos
								setPresetAndEffects(35, config.giantPreset -1)
								mod.command.message('Vehemos - <font color="#fff317">Giant</font>');
								return true;
						}
				}
		});		
		
		
		mod.hook('S_LOAD_TOPO', 3, (event) => 
		{
			
			zoneId = event.zone
			
			mod.hook('S_SPAWN_NPC', 12, (event) => 
					
			{
				//Frost Reach
				if(zoneId == 7012) 
					{
						switch (event.huntingZoneId)
							{
								// Anansha
								case 29: 
						
									switch (event.templateId) 
										{	
											case 2001: // Anansha
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('Anansha - <font color="#fff317">Magical Creature</font>');
											return true;
										}
								// Frygaras
								case 34: 
						
									switch (event.templateId) 
										{	
											case 2002: // Frygaras
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('Frygaras - <font color="#fff317">Dragon</font>');
											return true;
										}
							}
					}
				
				//Timeless Woods - Blessing Basin
				if(zoneId == 7011) 
					{
						switch (event.huntingZoneId)
							{
								// Sabranak
								case 34: 
						
									switch (event.templateId) 
										{	
											case 2003: // Sabranak
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('Sabranak - <font color="#fff317">Dragon</font>');
											return true;
										}
										
								// Ortan
								case 26: 
									
									switch (event.templateId) 
										{	
											case 5001: // Ortan
												setPresetAndEffects(26, config.godPreset -1)
												mod.command.message('Ortan - <font color="#fff317">God</font>');
												return true;
										}
							}
					}
				
				//Lorcada
				if(zoneId == 7022) 
					{
						switch (event.huntingZoneId)
							{
								// Cerrus
								case 51: 
									
									switch (event.templateId) 
									{	
										case 4001: // Cerrus
											setPresetAndEffects(30, config.beastPreset -1)
											mod.command.message('Cerrus - <font color="#fff317">Beast</font>');
											return true;
									}
							}
					}
				
				//Val Palrada
				if(zoneId == 7013) 
					{
						switch (event.huntingZoneId)
							{
								// Hazard
								case 39: 
									
									switch (event.templateId) 
									{	
										case 501: // Hazard
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('Hazard - <font color="#fff317">Magical Creature</font>');
											return true;
									}
							}
					}
				
				//Pit of Petrax
				if(zoneId == 9126) 
					{
						switch (event.huntingZoneId)
							{
								// Empowered Petrax
								case 126: 
									
									switch (event.templateId) 
									{	
										case 110: // Empowered Petrax
											setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
											mod.command.message('Empowered Petrax - <font color="#fff317">None Type</font>');
											return true;
										
										case 1071: // Withered Petrax
											setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
											mod.command.message('Withered Petrax - <font color="#fff317">None Type</font>');
											return true;
									}
							}
					}
			});
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
