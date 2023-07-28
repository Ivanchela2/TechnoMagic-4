ServerEvents.recipes((event) => {
    const prefix = 'tm4:/productivebees/centrifuge/';
    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:azure_silver"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "silentgear:azure_silver_nugget"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}azure_silver`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:ametrine"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "gribtweaks:ametrine_nugget"
                },
                "chance": 40
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}ametrine`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:carminite"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "twilightforest:carminite"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}carminite`),

    event.custom({
        "type": "productivebees:centrifuge",  
        "ingredient": {
            "item": "gribtweaks:creative_honeycomb"
        },
        "outputs": [
            {
                "item": {
                    "item": "avaritia:infinity_nugget"
                },
                "chance": 10
            }
        ]
    }).id(`${prefix}infinity_nugget`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:crimson_iron"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "silentgear:crimson_iron_nugget"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}crimson_iron_nugget`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:etherium"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "enigmaticlegacy:etherium_nugget"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}etherium_nugget`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:fiery"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "twilightforest:fiery_blood"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"  
                }
            }
        ]
    }).id(`${prefix}fiery_blood`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "item": "gribtweaks:infinity_honeycomb"
        },
        "outputs": [
            {
                "item": {
                    "item": "gribtweaks:infinity_catalyst_pile"  
                },
                "chance": 5
            }
        ]
    }).id(`${prefix}infinity_catalyst_pile`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:iron_wood"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "twilightforest:raw_ironwood"
                },
                "chance": 70
            }
        ]
    }).id(`${prefix}iridium_shard`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:kingmetal"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "twilightforest:armor_shard_cluster"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}armor_shard_cluster`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "item": "gribtweaks:neutronium_honeycomb"
        },
        "outputs": [
            {
                "item": {
                    "item": "avaritia:neutron_nugget"  
                },
                "chance": 15
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}neutron_nugget`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:rune"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "forbidden_arcanus:rune"
                },
                "chance": 70
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}rune`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:witch_ingot"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "hexerei:witch_ingot"
                },
                "chance": 60
            },
            {
                "item": {
                    "tag": "forge:wax"
                }
            }
        ]
    }).id(`${prefix}witch_ingot`),

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:iridium_shard"
                }
            }
        },
        "outputs": [
            {
                "item": {
                    "item": "gribtweaks:iridium_shard"  
                },
                "chance": 25
            }
        ]
    }).id(`${prefix}iridium_shard`)

});