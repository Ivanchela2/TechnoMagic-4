ServerEvents.recipes((event) => {
    const prefix = 'tm4:/productivebees/breading/';
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:redstone",
        "parent2": "productivebees:silver",
        "offspring": [
            "productivebees:azure_silver"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:redstone"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:azure_silver"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:silver"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:redstone",
        "parent2": "productivebees:iron",
        "offspring": [
            "productivebees:crimson_iron"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:redstone"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:iron"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:crimson_iron"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:ender",
        "parent2": "productivebees:draconic",
        "offspring": [
            "productivebees:etherium"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:ender"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:etherium"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:draconic"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:carminite",
        "parent2": "productivebees:red_shroom",
        "offspring": [
            "productivebees:fiery"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:carminite"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:fiery"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:red_shroom"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:infinity",
        "parent2": "productivebees:infinity",
        "offspring": [
            "productivebees:infinity"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:infinity"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:infinity"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:iridium",
        "parent2": "productivebees:silver",
        "offspring": [
            "productivebees:iridium_shard"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:iridium"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:iridium_shard"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:silver"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:iron",
        "parent2": "productivebees:amethyst",
        "offspring": [
            "productivebees:kingmetal"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:iron"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:kingmetal"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:neutronium",
        "parent2": "productivebees:neutronium",
        "offspring": [
            "productivebees:neutronium"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:neutronium"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:neutronium"
            }
        ]
    })
    event.custom({
        "type": "productivebees:bee_breeding",
        "parent1": "productivebees:redstone",
        "parent2": "productivebees:obsidian",
        "offspring": [
            "productivebees:rune"
        ],
        "conditions": [
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:redstone"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:rune"
            },
            {
                "type": "productivebees:bee_exists",
                "bee": "productivebees:obsidian"
            }
        ]
    })
});