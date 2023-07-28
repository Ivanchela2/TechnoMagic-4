ServerEvents.recipes((event) => {
    const prefix = 'tm4:/productivebees/advancedbeehive/';
    event.custom({
      "type": "productivebees:advanced_beehive",  
      "ingredient": "productivebees:ametrine",
      "results": [
          {
              "item": {
                  "type": "forge:nbt",
                  "item": "productivebees:configurable_honeycomb",
                  "nbt": {
                      "EntityTag": {
                          "type": "productivebees:ametrine"
                      }
                  }
              }
          },
          {
              "item": {
                  "tag": "forge:pollen"
              },
              "chance": 5
          }
      ],
      "conditions": [
          {
              "type": "productivebees:bee_exists",
              "bee": "productivebees:ametrine"
          }
      ]
  }).id(`${prefix}ametrine`),

  event.custom({
    "type": "productivebees:advanced_beehive",  
    "ingredient": "productivebees:azure_silver",
    "results": [
        {
            "item": {
                "type": "forge:nbt",
                "item": "productivebees:configurable_honeycomb",
                "nbt": {
                    "EntityTag": {
                        "type": "productivebees:azure_silver"
                    }
                }
            }
        },
        {
            "item": {
                "tag": "forge:pollen"
            },
            "chance": 5
        }
    ],
    "conditions": [
        {
            "type": "productivebees:bee_exists",
            "bee": "productivebees:azure_silver"
        }
    ]
}).id(`${prefix}azure_silver`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:carminite",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:carminite"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:carminite"
      }
  ]
}).id(`${prefix}carminite`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:crimson_iron",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:crimson_iron"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:crimson_iron"
      }
  ]
}).id(`${prefix}crimson_iron`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:etherium",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:etherium"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:etherium"
      }
  ]
}).id(`${prefix}etherium`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:fiery",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:fiery"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:fiery"
      }
  ]
}).id(`${prefix}fiery`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:iridium_shard",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:iridium_shard"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:iridium_shard"
      }
  ]
}).id(`${prefix}iridium_shard`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:iron_wood",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:iron_wood"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:iron_wood"
      }
  ]
}).id(`${prefix}iron_wood`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:kingmetal",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:kingmetal"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:kingmetal"
      }
  ]
}).id(`${prefix}kingmetal`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:rune",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:rune"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:rune"
      }
  ]
}).id(`${prefix}rune`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:witch_ingot",
  "results": [
      {
          "item": {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:witch_ingot"
                  }
              }
          }
      },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:witch_ingot"
      }
  ]
}).id(`${prefix}witch_ingot`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:infinity",
  "results": [
    {
        "item": {
            "item": "gribtweaks:infinity_honeycomb"
        }
    },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:infinity"
      }
  ]
}).id(`${prefix}infinity`),

event.custom({
  "type": "productivebees:advanced_beehive",  
  "ingredient": "productivebees:neutronium",
  "results": [
    {
        "item": {
            "item": "gribtweaks:neutronium_honeycomb"
        }
    },
      {
          "item": {
              "tag": "forge:pollen"
          },
          "chance": 5
      }
  ],
  "conditions": [
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees:neutronium"
      }
  ]
}).id(`${prefix}neutronium`)

});