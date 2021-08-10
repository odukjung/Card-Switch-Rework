const config = require('./config.json');
let zoneId;

module.exports = function CardPresets(mod) {
		
		mod.hook('S_LOAD_TOPO', 3, (event) => 
		{
			
			zoneId = event.zone
			
			mod.hook('S_SPAWN_NPC', 12, (event) => 
					
			{
				
				// Ghillieglade
				if(zoneId == 9713) 
					{
						switch (event.huntingZoneId)
							{
								// Ghillieglade
								case 713: 
									
									switch (event.templateId) 
									{	
										case 81301: // Ghillieglade
											setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
											mod.command.message('<font color="#fff317">Ghillieglade</font> - <font color="#fff317">None Type</font>');
											return true;
									}
							}
					}
				
				// Akalath Quarantine
				if(zoneId == 3023) 
					{
						switch (event.huntingZoneId)
							{
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
							}
					}
					
				// Sky Cruiser (Hard)
				if(zoneId == 3036) 
					{
						switch (event.huntingZoneId)
							{
								// Sky Cruiser (Hard)
								case 3036: 
									
									switch (event.templateId) 
									{
										case 1001: // 1 BOSS
											setPresetAndEffects(32, config.demonPreset -1)
											mod.command.message('<font color="#fff317">Darkan</font> - <font color="#fff317">Demon</font>');
											return true;
										case 1000: // 2 BOSS
											setPresetAndEffects(32, config.demonPreset -1)
											mod.command.message('<font color="#fff317">Darkan</font> - <font color="#fff317">Demon</font>');
											return true;
									}
							}
					}
				
				// Ruinous Manor (Normal)
				if(zoneId == 9770) 
					{
						switch (event.huntingZoneId)
							{
								// Ruinous Manor (Hard)
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
							}
					}
				
				// Ruinous Manor (Hard)
				if(zoneId == 9970) 
					{
						switch (event.huntingZoneId)
							{
								// Ruinous Manor (Hard)
								case 970: 
									
									switch (event.templateId) 
									{	
										case 3000: // 1 BOSS
											setPresetAndEffects(35, config.giantPreset -1)
											mod.command.message('<font color="#fff317">Manglemore</font> - <font color="#fff317">Giant</font>');
											return true;
									}
							}
					}
				
				// Manglemire
				if(zoneId == 9070) 
					{
						switch (event.huntingZoneId)
							{
								// Manglemire
								case 470: 
									
									switch (event.templateId) 
									{	
										case 800: // 1 BOSS
											setPresetAndEffects(35, config.giantPreset -1)
											mod.command.message('<font color="#fff317">Manglemore</font> - <font color="#fff317">Giant</font>');
											return true;
									}
							}
					}
				
				// Catalepticon
				if(zoneId == 3104) 
					{
						switch (event.huntingZoneId)
							{
								// Catalepticon
								case 3104: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
											setPresetAndEffects(37, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Lumikan</font> - <font color="#fff317">Azart</font>');
											return true;
									}
							}
					}
				
				// Catalepticon (Hard)
				if(zoneId == 3204) 
					{
						switch (event.huntingZoneId)
							{
								// Catalepticon (Hard)
								case 3204: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
											setPresetAndEffects(37, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Nightmare Lumikan</font> - <font color="#fff317">Azart</font>');
											return true;
									}
							}
					}
				
				// Killing Grounds
				if(zoneId == 3106) 
					{
						switch (event.huntingZoneId)
							{
								// Killing Grounds
								case 3106: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
										setPresetAndEffects(33, config.ancestorPreset -1)
										mod.command.message('<font color="#fff317">Gardan</font> - <font color="#fff317">Ancestor</font>');
										return true;
									}
							}
					}
				
				// Killing Grounds (Hard)
				if(zoneId == 3206) 
					{
						switch (event.huntingZoneId)
							{
								// Killing Grounds (Hard)
								case 3206: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
										setPresetAndEffects(33, config.ancestorPreset -1)
										mod.command.message('<font color="#fff317">Nightmare Gardan</font> - <font color="#fff317">Ancestor</font>');
										return true;
									}
							}
					}
				
				// Draakon Arena
				if(zoneId == 3102) 
					{
						switch (event.huntingZoneId)
							{
								// Draakon Arena
								case 3102: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
										setPresetAndEffects(37, config.azartPreset -1)
										mod.command.message('<font color="#fff317">Commander Kalligar</font> - <font color="#fff317">Azart</font>');
										return true;
									}
							}
					}
				
				// Forbidden Arena [Undying Warlord]
				if(zoneId == 3103) 
					{
						switch (event.huntingZoneId)
							{
								// Forbidden Arena [Undying Warlord]
								case 3103: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
										setPresetAndEffects(33, config.ancestorPreset -1)
										mod.command.message('<font color="#fff317">Undying Warlord</font> - <font color="#fff317">Ancestor</font>');
										return true;
									}
							}
					}
				
				// Corrupted Skynest (Hard)
				if(zoneId == 3126) 
					{
						switch (event.huntingZoneId)
							{
								// Corrupted Skynest (Hard)
								case 3126: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
										setPresetAndEffects(24, config.argonPreset -1)
										mod.command.message('<font color="#fff317">Nightmare Kelsaik</font> - <font color="#fff317">Argon</font>');
										return true;
									}
							}
					}
				
				// Corrupted Skynest
				if(zoneId == 3026) 
					{
						switch (event.huntingZoneId)
							{
								// Corrupted Skynest
								case 3026: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
										setPresetAndEffects(24, config.argonPreset -1)
										mod.command.message('<font color="#fff317">Kelsaik</font> - <font color="#fff317">Argon</font>');
										return true;
									}
							}
					}
				
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
										
								// Dreadreaper
								case 622: 
									
									switch (event.templateId) 
										{	
											case 1000: // Dreadreaper
												setPresetAndEffects(29, config.magicalPreset -1)
												mod.command.message('<font color="#fff317">Dreadreaper</font> - <font color="#fff317">Magical Creature</font>');
												return true;
										}
							}
					}
				
				// Gossamer Vault (Easy)
				if(zoneId == 3101) 
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
							}
					}
				
				// Grotto of Lost Souls (Hard)
				if(zoneId == 9982) 
					{
						switch (event.huntingZoneId)
							{
								// Grotto of Lost Souls (Hard)
								case 982: 
						
									switch (event.templateId) 
										{	
											case 1000: // 1 BOSS
											setPresetAndEffects(32, config.demonPreset -1)
											mod.command.message('<font color="#fff317">Nightmare Nedra</font> - <font color="#fff317">Demon</font>');
											return true;
											case 2000: // 2 BOSS
											setPresetAndEffects(32, config.demonPreset -1)
											mod.command.message('<font color="#fff317">Nightmare Ptakum</font> - <font color="#fff317">Demon</font>');
											return true;
											case 3000: // 3 BOSS
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('<font color="#fff317">Nightmare Kylos</font> - <font color="#fff317">Dragon</font>');
											return true;
										}
							}
					}
				
				// Velik's Hold
				if(zoneId == 9780) 
					{
						switch (event.huntingZoneId)
							{
								// Grotto of Lost Souls (Hard)
								case 780: 
						
									switch (event.templateId) 
										{	
											case 1000: // 1 BOSS
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('<font color="#fff317">Kavador</font> - <font color="#fff317">Magical Creature</font>');
											return true;
											case 2000: // 2 BOSS
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('<font color="#fff317">Prokyon</font> - <font color="#fff317">Magical Creature</font>');
											return true;
											case 3000: // 3 BOSS
											setPresetAndEffects(32, config.demonPreset -1)
											mod.command.message('<font color="#fff317">Veldeg</font> - <font color="#fff317">Demon</font>');
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
				
				// Vehemos
				if(zoneId == 7015) 
					{
						switch (event.huntingZoneId)
							{
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
											setPresetAndEffects(37, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Lumikan Trial</font> - <font color="#fff317">Azart</font>');
											return true;
									}
							}
					}
				
				// Killing Grounds Trial
				if(zoneId == 3042) 
					{
						switch (event.huntingZoneId)
							{
								// /Killing Grounds Trial
								case 3042: 
									
									switch (event.templateId) 
									{	
										case 1000: //Killing Grounds Trial
											setPresetAndEffects(33, config.ancestorPreset -1)
											mod.command.message('<font color="#fff317">Gardan Trial</font> - <font color="#fff317">Ancestor</font>');
											return true;
									}
							}
					}
				
				//Fusion Laboratory
				if(zoneId == 3105) 
					{
						switch (event.huntingZoneId)
							{
								//Fusion Laboratory
								case 3105: 
									
									switch (event.templateId) 
									{	
										case 1000: //Lumikan Trial
											setPresetAndEffects(37, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Rogash</font> - <font color="#fff317">Azart</font>');
											return true;
									}
							}
					}
				
				//Cursed Fusion Laboratory
				if(zoneId == 3205) 
					{
						switch (event.huntingZoneId)
							{
								//Cursed Fusion Laboratory
								case 3205: 
									
									switch (event.templateId) 
									{	
										case 1000: //Cursed Fusion Laboratory
											setPresetAndEffects(37, config.azartPreset -1)
											mod.command.message('<font color="#fff317">Rampaging Rogash</font> - <font color="#fff317">Azart</font>');
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
											setPresetAndEffects(36, config.basicPreset -1)
											mod.command.message('<font color="#fff317">Empowered Petrax</font> - <font color="#fff317">None Type</font>');
											return true;
										
										case 1071: // Withered Petrax
											setPresetAndEffects(36, config.basicPreset -1)
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
											setPresetAndEffects(37, config.azartPreset -1)
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
				
				//Damned Citadel
				if(zoneId == 3041) 
					{
						switch (event.huntingZoneId)
							{	
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
							}
					}
				
				//Dark Reach Citadel
				if(zoneId == 3044) 
					{
						switch (event.huntingZoneId)
							{	
								///Dark Reach Citadel
								case 3044: 
									
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
        for (let i = 0; i < 39; i++) {
            
            mod.toServer('C_DEACTIVATE_CARD_COMBINE_LIST', 1, {
                id: i
            })
            
        }
        mod.toServer('C_ACTIVATE_CARD_COMBINE_LIST', 1, {
            id: config.defaultEffect
        })
    }

}
