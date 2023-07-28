ServerEvents.recipes((event) => {
    const prefix = 'tm4:/productivebees/macerating/';
    event.custom({
        "type": "ftbic:macerating",
        "inputItems": [
          {
            "count": 1,
            "ingredient": {
              "item": "enigmaticlegacy:etherium_ore"
            }
          }
        ],
        "outputItems": [
          {
            "count": 3,
            "item": "gribtweaks:chunk_of_etherium"
          }
        ]
    }).id(`${prefix}chunk_of_etherium`)
  
});