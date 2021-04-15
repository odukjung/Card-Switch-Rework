const config = require('./config.json');
let zoneId;

module.exports = function CardPresets(mod) {

    mod.hook('S_LOAD_TOPO', 3, (event) => {
        zoneId = event.zone

        if(zoneId == 3206 || zoneId == 3106 || zoneId == 3103) //ancestor
        {
            setPresetAndEffects(33, config.ancestorPreset -1)
        }
        else if(zoneId == 3104 || zoneId == 3204 || zoneId == 3102) //azart
        {
            setPresetAndEffects(28, config.azartPreset -1)
        }
        else if(zoneId == 9970) //demon
        {
            setPresetAndEffects(32, config.demonPreset -1)
        }
        else if(zoneId == 3026 || zoneId == 3126 || zoneId == 3023) //argon
        {
            setPresetAndEffects(24, config.argonPreset -1)
        }
        else if(zoneId == 9044) //god
        {
            setPresetAndEffects(26, config.godPreset -1)
        }
        else if(zoneId == 'placeholder') //mag creature (none yet)
        {
            setPresetAndEffects(29, config.magicalPreset -1)
        }
        else 
        {
            setPresetAndEffects(config.secondaryEffect, config.basicPreset -1)
        }

    });

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