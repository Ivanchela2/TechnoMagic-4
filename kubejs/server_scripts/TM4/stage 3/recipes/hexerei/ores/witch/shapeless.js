
ServerEvents.recipes(event => { 
    event.shapeless(
        Item.of('hexerei:witch_nugget', 9),
        [ 
            'hexerei:witch_ingot'
        ]
      )
      event.shapeless(
        Item.of('hexerei:witch_ingot', 9),
        [ 
            'hexerei:witch_ingot_block'
        ]
      )
  })