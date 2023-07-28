ServerEvents.recipes((event) => {
    const prefix = 'tm4:/productivebees/inscriber/';
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "tag": "forge:ingots/bronze"
          },
          "middle": {
            "tag": "forge:ingots/tin"
          },
          "top": {
            "tag": "forge:ingots/lead"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:tin_lead_bronze_alloy"
        }
    }).id(`${prefix}tin_lead_bronze_alloy`),

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gribtweaks:printed_babbitt_alloy_processor"
          },
          "middle": {
            "item": "gribtweaks:oblivion_powder"
          },
          "top": {
            "item": "ae2:printed_silicon"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:babbitt_alloy_processor"
        }
    }).id(`${prefix}babbitt_alloy_processor`),

      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "gribtweaks:tin_lead_bronze_alloy"
          },
          "top": {
            "item": "gribtweaks:advanced_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "gribtweaks:printed_babbitt_alloy_processor"
        }
    }).id(`${prefix}printed_babbitt_alloy_processor`),

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "tag": "forge:ingots/uranium"
          },
          "middle": {
            "tag": "forge:ingots/enderium"
          },
          "top": {
            "item": "ftbic:iridium_alloy"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:endrium_uranium_iridium_alloy"
        }
    }).id(`${prefix}endrium_uranium_iridium_alloy`),

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "gribtweaks:endrium_uranium_iridium_alloy"
          },
          "top": {
            "item": "gribtweaks:advanced_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "gribtweaks:printed_inadequate_alloy_processor"
        }
    }).id(`${prefix}printed_inadequate_alloy_processor`),

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gribtweaks:printed_inadequate_alloy_processor"
          },
          "middle": {
            "item": "gribtweaks:oblivion_powder"
          },
          "top": {
            "item": "ae2:printed_silicon"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:inadequate_alloy_processor"
        }
    }).id(`${prefix}inadequate_alloy_processor`),

      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "tag": "forge:ingots/aluminum"
          },
          "middle": {
            "tag": "forge:ingots/gold"
          },
          "top": {
            "tag": "forge:ingots/copper"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:copper_aluminium_gold_alloy"
        }
    }).id(`${prefix}copper_aluminium_gold_alloy`),

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "gribtweaks:copper_aluminium_gold_alloy"
          },
          "top": {
            "item": "gribtweaks:advanced_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "gribtweaks:printed_nordic_alloy_processor"
        }
    }).id(`${prefix}printed_nordic_alloy_processor`),

      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gribtweaks:printed_nordic_alloy_processor"
          },
          "middle": {
            "item": "gribtweaks:oblivion_powder"
          },
          "top": {
            "item": "ae2:printed_silicon"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:nordic_alloy_processor"
        }
    }).id(`${prefix}nordic_alloy_processor`),

      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gribtweaks:endrium_uranium_iridium_alloy"
          },
          "middle": {
            "item": "gribtweaks:copper_aluminium_gold_alloy"
          },
          "top": {
            "item": "gribtweaks:tin_lead_bronze_alloy"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:super_alloy"
        }
    }).id(`${prefix}super_alloy`),

      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "gribtweaks:super_alloy"
          },
          "top": {
            "item": "gribtweaks:advanced_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "gribtweaks:printed_super_alloy_processor"
        }
    }).id(`${prefix}printed_super_alloy_processor`),

      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gribtweaks:printed_super_alloy_processor"
          },
          "middle": {
            "item": "gribtweaks:oblivion_powder"
          },
          "top": {
            "item": "ae2:printed_silicon"
          }
        },
        "mode": "press",
        "result": {
          "item": "gribtweaks:super_alloy_processor"
        }
    }).id(`${prefix}super_alloy_processor`)
  
});