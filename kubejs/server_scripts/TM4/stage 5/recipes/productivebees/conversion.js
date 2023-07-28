ServerEvents.recipes((event) => {
    const prefix = 'tm4:/productivebees/conversion/';
    event.custom({
        "type": "productivebees:bee_conversion",
        "source": "productivebees:amethyst",
        "result": "productivebees:ametrine",
        "item": {
            "item": "gribtweaks:ametrine_block"
        }
    })

    event.custom({
        "type": "productivebees:bee_conversion",
        "source": "productivebees:iron",
        "result": "productivebees:carminite",
        "item": {
            "item": "twilightforest:carminite_block"
        }
    })

    event.custom({
        "type": "productivebees:bee_conversion",
        "source": "productivebees:neutronium",
        "result": "productivebees:infinity",
        "item": {
            "item": "avaritia:infinity_catalyst"
        }
    })

    event.custom({
        "type": "productivebees:bee_conversion",
        "source": "productivebees:iron",
        "result": "productivebees:iron_wood",
        "item": {
            "item": "twilightforest:ironwood_block"
        }
    })

    event.custom({
        "type": "productivebees:bee_conversion",
        "source": "productivebees:withered",
        "result": "productivebees:neutronium",
        "item": {
            "item": "gribtweaks:neutronium_catalyst"
        }
    })

    event.custom({
        "type": "productivebees:bee_conversion",
        "source": "productivebees:iron",
        "result": "productivebees:witch_ingot",
        "item": {
            "item": "gribtweaks:witch_ingot"
        }
    })
});