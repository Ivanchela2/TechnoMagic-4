ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/mechanical_crafter/';
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '123',
        ' 4 ',
        '567'
        ],
        'key': {
            '1': {
                'item': 'chemlib:hydrogen'
            },
            '2': {
                'item': 'chemlib:carbon'
            },
            '3': {
                'item': 'chemlib:nitrogen'
            },
            '4': {
                'item': 'chemlib:oxygen'
            },
            '5': {
                'item': 'chemlib:phosphorus'
            },
            '6': {
                'item': 'chemlib:sulfur'
            },
            '7': {
                'item': 'chemlib:selenium'
            },
        },
        'result': {
        'item': 'chemlib:all_reactive_non-metals_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_reactive_non-metals_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '123',
        '456'
        ],
        'key': {
            '1': {
                'item': 'chemlib:lithium'
            },
            '2': {
                'item': 'chemlib:sodium'
            },
            '3': {
                'item': 'chemlib:potassium'
            },
            '4': {
                'item': 'chemlib:rubidium'
            },
            '5': {
                'item': 'chemlib:francium'
            },
            '6': {
                'item': 'chemlib:cesium'
            }
        },
        'result': {
        'item': 'chemlib:all_alkali_metals_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_alkali_metals_element`)
    
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '123',
        '456'
        ],
        'key': {
            '1': {
                'item': 'chemlib:beryllium'
            },
            '2': {
                'item': 'chemlib:magnesium'
            },
            '3': {
                'item': 'chemlib:calcium'
            },
            '4': {
                'item': 'chemlib:strontium'
            },
            '5': {
                'item': 'chemlib:barium'
            },
            '6': {
                'item': 'chemlib:radium'
            }
        },
        'result': {
        'item': 'chemlib:all_alkaline_earth_metals_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_alkaline_earth_metals_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        ' 12345', //34
        '67890A', 
        'BCDEFG', 
        'HIJKLM', 
        'NOPQRS', 
        'TUVWX ' 
        ],
        'key': {
            '1': {
                'item': 'chemlib:scandium'
            },
            '2': {
                'item': 'chemlib:titanium'
            },
            '3': {
                'item': 'chemlib:vanadium'
            },
            '4': {
                'item': 'chemlib:chromium'
            },
            '5': {
                'item': 'chemlib:manganese'
            },
            '6': {
                'item': 'chemlib:iron'
            },
            '7': {
                'item': 'chemlib:cobalt'
            },
            '8': {
                'item': 'chemlib:nickel'
            },
            '9': {
                'item': 'chemlib:copper'
            },
            '0': {
                'item': 'chemlib:zinc'
            },
            'A': {
                'item': 'chemlib:yttrium'
            },
            'B': {
                'item': 'chemlib:zirconium'
            },
            'C': {
                'item': 'chemlib:niobium'
            },
            'D': {
                'item': 'chemlib:molybdenum'
            },
            'E': {
                'item': 'chemlib:technetium'
            },
            'F': {
                'item': 'chemlib:ruthenium'
            },
            'G': {
                'item': 'chemlib:rhodium'
            },
            'H': {
                'item': 'chemlib:palladium'
            },
            'I': {
                'item': 'chemlib:silver'
            },
            'J': {
                'item': 'chemlib:cadmium'
            },
            'K': {
                'item': 'chemlib:hafnium'
            },
            'L': {
                'item': 'chemlib:tantalum'
            },
            'M': {
                'item': 'chemlib:tungsten'
            },
            'N': {
                'item': 'chemlib:rhenium'
            },
            'O': {
                'item': 'chemlib:osmium'
            },
            'P': {
                'item': 'chemlib:iridium'
            },
            'Q': {
                'item': 'chemlib:platinum'
            },
            'R': {
                'item': 'chemlib:gold'
            },
            'S': {
                'item': 'chemlib:mercury'
            },
            'T': {
                'item': 'chemlib:rutherfordium'
            },
            'U': {
                'item': 'chemlib:dubnium'
            },
            'V': {
                'item': 'chemlib:seaborgium'
            },
            'W': {
                'item': 'chemlib:bohrium'
            },
            'X': {
                'item': 'chemlib:hassium'
            }
        },
        'result': {
        'item': 'chemlib:all_transition_metals_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_transition_metals_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '1234',
        '5678'
        ],
        'key': {
            '1': {
                'item': 'chemlib:aluminum'
            },
            '2': {
                'item': 'chemlib:gallium'
            },
            '3': {
                'item': 'chemlib:indium'
            },
            '4': {
                'item': 'chemlib:tin'
            },
            '5': {
                'item': 'chemlib:thallium'
            },
            '6': {
                'item': 'chemlib:lead'
            },
            '7': {
                'item': 'chemlib:bismuth'
            },
            '8': {
                'item': 'chemlib:polonium'
            }
        },
        'result': {
        'item': 'chemlib:all_post-transition_metals_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_post-transition_metals_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '12345',
        '67890'
        ],
        'key': {
            '1': {
                'item': 'chemlib:meitnerium'
            },
            '2': {
                'item': 'chemlib:darmstadtium'
            },
            '3': {
                'item': 'chemlib:roentgenium'
            },
            '4': {
                'item': 'chemlib:copernicium'
            },
            '5': {
                'item': 'chemlib:nihonium'
            },
            '6': {
                'item': 'chemlib:flerovium'
            },
            '7': {
                'item': 'chemlib:moscovium'
            },
            '8': {
                'item': 'chemlib:livermorium'
            },
            '9': {
                'item': 'chemlib:tennessine'
            },
            '0': {
                'item': 'chemlib:oganesson'
            }
        },
        'result': {
        'item': 'chemlib:all_unknown_properties_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_unknown_properties_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '123',
        '456'
        ],
        'key': {
            '1': {
                'item': 'chemlib:boron'
            },
            '2': {
                'item': 'chemlib:silicon'
            },
            '3': {
                'item': 'chemlib:germanium'
            },
            '4': {
                'item': 'chemlib:arsenic'
            },
            '5': {
                'item': 'chemlib:antimony'
            },
            '6': {
                'item': 'chemlib:tellurium'
            }
        },
        'result': {
        'item': 'chemlib:all_metalloids_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_metalloids_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        ' 1 ',
        '234',
        ' 5 ',
        ],
        'key': {
            '1': {
                'item': 'chemlib:fluorine'
            },
            '2': {
                'item': 'chemlib:chlorine'
            },
            '3': {
                'item': 'chemlib:bromine'
            },
            '4': {
                'item': 'chemlib:iodine'
            },
            '5': {
                'item': 'chemlib:astatine'
            }
        },
        'result': {
        'item': 'chemlib:all_halogens_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_halogens_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '123',
        '456',
        ],
        'key': {
            '1': {
                'item': 'chemlib:helium'
            },
            '2': {
                'item': 'chemlib:neon'
            },
            '3': {
                'item': 'chemlib:argon'
            },
            '4': {
                'item': 'chemlib:krypton'
            },
            '5': {
                'item': 'chemlib:xenon'
            },
            '6': {
                'item': 'chemlib:radon'
            }
        },
        'result': {
        'item': 'chemlib:all_noble_gases_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_noble_gases_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        ' 123 ', //15
        '4 5 6',
        '7 8 9',
        '0 A B',
        ' CDE ',
        ],
        'key': {
            '1': {
                'item': 'chemlib:lanthanum'
            },
            '2': {
                'item': 'chemlib:cerium'
            },
            '3': {
                'item': 'chemlib:praseodymium'
            },
            '4': {
                'item': 'chemlib:neodymium'
            },
            '5': {
                'item': 'chemlib:promethium'
            },
            '6': {
                'item': 'chemlib:samarium'
            },
            '7': {
                'item': 'chemlib:europium'
            },
            '8': {
                'item': 'chemlib:gadolinium'
            },
            '9': {
                'item': 'chemlib:terbium'
            },
            '0': {
                'item': 'chemlib:dysprosium'
            },
            'A': {
                'item': 'chemlib:holmium'
            },
            'B': {
                'item': 'chemlib:erbium'
            },
            'C': {
                'item': 'chemlib:thulium'
            },
            'D': {
                'item': 'chemlib:ytterbium'
            },
            'E': {
                'item': 'chemlib:lutetium'
            }
        },
        'result': {
        'item': 'chemlib:all_lanthanides_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_lanthanides_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        ' 123 ', //15
        '4 5 6',
        '7 8 9',
        '0 A B',
        ' CDE ',
        ],
        'key': {
            '1': {
                'item': 'chemlib:actinium'
            },
            '2': {
                'item': 'chemlib:thorium'
            },
            '3': {
                'item': 'chemlib:protactinium'
            },
            '4': {
                'item': 'chemlib:uranium'
            },
            '5': {
                'item': 'chemlib:neptunium'
            },
            '6': {
                'item': 'chemlib:plutonium'
            },
            '7': {
                'item': 'chemlib:americium'
            },
            '8': {
                'item': 'chemlib:curium'
            },
            '9': {
                'item': 'chemlib:berkelium'
            },
            '0': {
                'item': 'chemlib:californium'
            },
            'A': {
                'item': 'chemlib:einsteinium'
            },
            'B': {
                'item': 'chemlib:fermium'
            },
            'C': {
                'item': 'chemlib:mendelevium'
            },
            'D': {
                'item': 'chemlib:nobelium'
            },
            'E': {
                'item': 'chemlib:lawrencium'
            }
        },
        'result': {
        'item': 'chemlib:all_actinides_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_actinides_element`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        ' 123 456 ', //37
        '7  8 9  0',
        'A   B   C',
        'DE F G HI',
        ' JKLMNOP ',
        '  QR ST  ',
        '  U   V  ',
        '  W   X  ',
        '   YZ=   '
        ],
        'key': {
            '1': {
                'item': 'chemlib:technetium'
            },
            '2': {
                'item': 'chemlib:polonium'
            },
            '3': {
                'item': 'chemlib:astatine'
            },
            '4': {
                'item': 'chemlib:radon'
            },
            '5': {
                'item': 'chemlib:francium'
            },
            '6': {
                'item': 'chemlib:radium'
            },
            '7': {
                'item': 'chemlib:rutherfordium'
            },
            '8': {
                'item': 'chemlib:dubnium'
            },
            '9': {
                'item': 'chemlib:seaborgium'
            },
            '0': {
                'item': 'chemlib:bohrium'
            },
            'A': {
                'item': 'chemlib:hassium'
            },
            'B': {
                'item': 'chemlib:meitnerium'
            },
            'C': {
                'item': 'chemlib:darmstadtium'
            },
            'D': {
                'item': 'chemlib:roentgenium'
            },
            'E': {
                'item': 'chemlib:copernicium'
            },
            'F': {
                'item': 'chemlib:nihonium'
            },
            'G': {
                'item': 'chemlib:flerovium'
            },
            'H': {
                'item': 'chemlib:moscovium'
            },
            'I': {
                'item': 'chemlib:livermorium'
            },
            'J': {
                'item': 'chemlib:tennessine'
            },
            'K': {
                'item': 'chemlib:oganesson'
            },
            'L': {
                'item': 'chemlib:promethium'
            },
            'M': {
                'item': 'chemlib:actinium'
            },
            'N': {
                'item': 'chemlib:thorium'
            },
            'O': {
                'item': 'chemlib:protactinium'
            },
            'P': {
                'item': 'chemlib:uranium'
            },
            'Q': {
                'item': 'chemlib:neptunium'
            },
            'R': {
                'item': 'chemlib:plutonium'
            },
            'S': {
                'item': 'chemlib:americium'
            },
            'T': {
                'item': 'chemlib:curium'
            },
            'U': {
                'item': 'chemlib:berkelium'
            },
            'V': {
                'item': 'chemlib:californium'
            },
            'W': {
                'item': 'chemlib:einsteinium'
            },
            'X': {
                'item': 'chemlib:fermium'
            },
            'Y': {
                'item': 'chemlib:mendelevium'
            },
            'Z': {
                'item': 'chemlib:nobelium'
            },
            '=': {
                'item': 'chemlib:lawrencium'
            }
        },
        'result': {
        'item': 'chemlib:all_radioactive_element',
        'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}all_radioactive_element`)
});