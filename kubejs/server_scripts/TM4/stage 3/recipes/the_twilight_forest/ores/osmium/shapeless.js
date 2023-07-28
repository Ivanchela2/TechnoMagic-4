
ServerEvents.recipes(event => { 
    event.shapeless(
        Item.of('twilightforest:nugget_osmium', 9),
        [ 
            'twilightforest:ingot_osmium'
        ]
      )
      event.shapeless(
        Item.of('twilightforest:ingot_osmium', 9),
        [ 
            'twilightforest:block_osmium'
        ]
      )
  })