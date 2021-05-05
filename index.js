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
								mod.command.message('<font color="#fff317">Hellgrammite</font> - <font color="#fff317">Magical Creature</font>');
								return true;
							case 2001: // 2 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('<font color="#fff317">Gossamer Regent</font> - <font color="#fff317">Magical Creature</font>');
								return true;
						}
					
					// Akalath Quarantine
					case 3023: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('<font color="#fff317">Akalath Travan</font> - <font color="#fff317">Argon</font>');
								return true;
							case 2000: // 2 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('<font color="#fff317">Akalath Kashir</font> - <font color="#fff317">Argon</font>');
								return true;
						}
					
					// Ruinous Manor (Normal)
					case 770: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(29, config.magicalPreset -1)
								mod.command.message('<font color="#fff317">Resurrected Atrocitas</font> - <font color="#fff317">Magical Creature</font>');
								return true;
								
							case 3000: // 3 BOSS
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('<font color="#fff317">Lachelith</font> - <font color="#fff317">Demon</font>');
								return true;
						}
					
					// Ruinous Manor (Hard)
					case 970: 
						
						switch (event.templateId) 
						{
							case 3000: // 3 BOSS
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('<font color="#fff317">Nightmare Lachelith</font> - <font color="#fff317">Demon</font>');
								return true;
						}
					
					// Manglemire
					case 470: 
						
						switch (event.templateId) 
						{
							case 800: // 1 BOSS
								setPresetAndEffects(35, config.giantPreset -1)
								mod.command.message('<font color="#fff317">Manglemore</font> - <font color="#fff317">Giant</font>');
								return true;
						}
						
					// Catalepticon
					case 3104: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('<font color="#fff317">Lumikan</font> - <font color="#fff317">Azart</font>');
								return true;
						}
					
					// Catalepticon (Hard)
					case 3204: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('<font color="#fff317">Nightmare Lumikan</font> - <font color="#fff317">Azart</font>');
								return true;
						}
						
					// Killing Grounds
					case 3106: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('<font color="#fff317">Gardan</font> - <font color="#fff317">Ancestor</font>');
								return true;
						}
					
					// Killing Grounds (Hard)
					case 3206: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('<font color="#fff317">Nightmare Gardan</font> - <font color="#fff317">Ancestor</font>');
								return true;
						}
						
					// Draakon Arena
					case 3102: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(28, config.azartPreset -1)
								mod.command.message('<font color="#fff317">Commander Kalligar</font> - <font color="#fff317">Azart</font>');
								return true;
						}
					
					// Forbidden Arena [Undying Warlord]
					case 3103: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(33, config.ancestorPreset -1)
								mod.command.message('<font color="#fff317">Undying Warlord</font> - <font color="#fff317">Ancestor</font>');
								return true;
						}
					
					// Corrupted Skynest
					case 3026: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('<font color="#fff317">Kelsaik</font> - <font color="#fff317">Argon</font>');
								return true;
						}
					
					// Corrupted Skynest (Hard)
					case 3126: 
						
						switch (event.templateId) 
						{
							case 1000: // 1 BOSS
								setPresetAndEffects(24, config.argonPreset -1)
								mod.command.message('<font color="#fff317">Nightmare Kelsaik</font> - <font color="#fff317">Argon</font>');
								return true;
						}
						
					//Damned Citadel
					case 3041: 
						
						switch (event.templateId) 
						{
							case 1000: // Harnovog
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('<font color="#fff317">Harnovog</font> - <font color="#fff317">Demon</font>');
								return true;
							case 2000: // Harnovog
								setPresetAndEffects(32, config.demonPreset -1)
								mod.command.message('<font color="#fff317">Harnovog</font> - <font color="#fff317">Demon</font>');
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
								mod.command.message('<font color="#fff317">Dreadreaper</font> - <font color="#fff317">Magical Creature</font>');
								return true;
						}
					
					// Vehemos
					case 620: 
						
						switch (event.templateId) 
						{	
							case 1000: // Vehemos
								setPresetAndEffects(35, config.giantPreset -1)
								mod.command.message('<font color="#fff317">Vehemos</font> - <font color="#fff317">Giant</font>');
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
								// Sabranak
								case 34: 
						
									switch (event.templateId) 
										{	
											case 2003: // Sabranak
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('<font color="#fff317">Sabranak</font> - <font color="#fff317">Dragon</font>');
											return true;
										}
								// Frygaras
								case 34: 
						
									switch (event.templateId) 
										{	
											case 2002: // Frygaras
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('<font color="#fff317">Frygaras</font> - <font color="#fff317">Dragon</font>');
											return true;
										}
							}
					}
				
				//Timeless Woods - Blessing Basin
				if(zoneId == 7011) 
					{
						switch (event.huntingZoneId)
							{
								// Anansha
								case 29: 
						
									switch (event.templateId) 
										{	
											case 2001: // Anansha
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('<font color="#fff317">Anansha</font> - <font color="#fff317">Magical Creature</font>');
											return true;
										}
										
								// Ortan
								case 434: 
									
									switch (event.templateId) 
										{	
											case 7000: // Ortan
												setPresetAndEffects(30, config.beastPreset -1)
												mod.command.message('<font color="#fff317">Ortan</font> - <font color="#fff317">Beast</font>');
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
								case 994: 
									
									switch (event.templateId) 
									{	
										case 1000: // Cerrus
											setPresetAndEffects(30, config.beastPreset -1)
											mod.command.message('<font color="#fff317">Cerrus</font> - <font color="#fff317">Beast</font>');
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
								case 777: 
									
									switch (event.templateId) 
									{	
										case 77730: // Hazard
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('<font color="#fff317">Hazard</font> - <font color="#fff317">Magical Creature</font>');
											return true;
									}
							}
					}
				
				//Lumikan Trial
				if(zoneId == 3040) 
					{
						switch (event.huntingZoneId)
							{
								// /Lumikan Trial
								case 3040: 
									
									switch (event.templateId) 
									{	
										case 1000: //Lumikan Trial
											setPresetAndEffects(28, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Lumikan Trial</font> - <font color="#fff317">Azart</font>');
											return true;
									}
							}
					}
				
				//Pit of Petrax
				if(zoneId == 9126) 
					{
						switch (event.huntingZoneId)
							{
								// Pit of Petrax
								case 126: 
									
									switch (event.templateId) 
									{	
										case 110: // Empowered Petrax
											setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
											mod.command.message('<font color="#fff317">Empowered Petrax</font> - <font color="#fff317">None Type</font>');
											return true;
										
										case 1071: // Withered Petrax
											setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
											mod.command.message('<font color="#fff317">Withered Petrax</font> - <font color="#fff317">None Type</font>');
											return true;
									}
							}
					}
				
				//Commander Residence
				if(zoneId == 3030) 
					{
						switch (event.huntingZoneId)
							{
								// Commander Residence
								case 3030: 
									
									switch (event.templateId) 
									{
										case 1000: //Maknakh
											setPresetAndEffects(28, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Maknakh</font> - <font color="#fff317">Azart</font>');
											return true;
										
										case 2000: //LB-1
											setPresetAndEffects(31, config.magicaldevicePreset -1)
											mod.command.message('<font color="#fff317">LB-1</font> - <font color="#fff317">Magical Device</font>');
											return true;
									}
							}
					}
					
				// Bahaar Sanctum
				if(zoneId == 9044) 
					{
						switch (event.huntingZoneId)
							{	
								// Bahaar Sanctum
								case 444: 
									
									switch (event.templateId) 
									{
										case 1000: // Phase 1
											setPresetAndEffects(26, config.godPreset -1)
											mod.command.message('<font color="#fff317">Bahaar Phase 1</font> - <font color="#fff317">God</font>');
											return true;
										case 2000: // Phase 2
											setPresetAndEffects(26, config.godPreset -1)
											mod.command.message('<font color="#fff317">Bahaar Phase 2</font> - <font color="#fff317">God</font>');
											return true;
									}
							}
					}
					
				// RK-9 Rampaging
				if(zoneId == 3034) 
					{
						switch (event.huntingZoneId)
							{
								// RK-9 Rampaging
								case 3034: 
									
									switch (event.templateId) 
									{
										case 1000: //Ventarun
											setPresetAndEffects(31, config.magicaldevicePreset -1)
											mod.command.message('<font color="#fff317">Ventarun</font> - <font color="#fff317">Magical Device</font>');
											return true;
										case 2000: //Hexapleon
											setPresetAndEffects(31, config.magicaldevicePreset -1)
											mod.command.message('<font color="#fff317">Hexapleon</font> - <font color="#fff317">Magical Device</font>');
											return true;
										case 3000: //Rampaging RK-9
											setPresetAndEffects(31, config.magicaldevicePreset -1)
											mod.command.message('<font color="#fff317">Rampaging RK-9</font> - <font color="#fff317">Magical Device</font>');
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
