ServerEvents.recipes(event => {
        event.shaped('gribtweaks:primitive_brush', [
            ' F',
            'S '
        ], {
            F: 'minecraft:feather',
            S: 'minecraft:stick'
        })

        event.shaped('gribtweaks:copper_brush', [
            'A  ',
            'B  ',
            'C  '
        ], {
            A: 'minecraft:feather',
            B: 'minecraft:copper_ingot',
            C: 'minecraft:stick'
        })

        event.shaped('gribtweaks:andesite_brush', [
            'A  ',
            'B  ',
            'C  '
        ], {
            A: 'minecraft:feather',
            B: 'create:andesite_alloy',
            C: 'minecraft:stick'
        })

        event.shaped('gribtweaks:gold_brush', [
            'A  ',
            'B  ',
            'C  '
        ], {
            A: 'minecraft:feather',
            B: 'minecraft:gold_ingot',
            C: 'minecraft:stick'
        })

        event.shaped('gribtweaks:sand_knife', [
            'PP',
            'S '
        ], {
            P: 'gribtweaks:sand_stone_pieces',
            S: 'minecraft:stick'
        })

        event.shaped('gribtweaks:wooden_knife', [
            ' S',
            'S '
        ], {
            S: 'minecraft:stick'
        })

        event.shaped('gribtweaks:sand_bucket', [
            '   ',
            ' P ',
            'P  '
        ], {
            P: 'gribtweaks:sand_stone_pieces'
        })

        event.shaped('gribtweaks:sand_copper', [
            'NN ',
            'NN ',
            '   '
        ], {
            N: 'gribtweaks:sand_copper_nugget'
        })
        
        event.shaped('gribtweaks:sand_gold', [
            'NN ',
            'NN ',
            '   '
        ], {
            N: 'gribtweaks:sand_gold_nugget'
        })
        
        event.shaped('gribtweaks:sand_iron', [
            'NN ',
            'NN ',
            '   '
        ], {
            N: 'gribtweaks:sand_iron_nugget'
        })
        
        event.shaped('gribtweaks:sand_lapis', [
            'NN ',
            'NN ',
            '   '
        ], {
            N: 'gribtweaks:sand_lapis_nugget'
        })
        
        event.shaped('gribtweaks:sand_redstone', [
            'NN ',
            'NN ',
            '   '
        ], {
            N: 'gribtweaks:sand_redstone_nugget'
        })
        
        event.shaped('gribtweaks:sand_zinc', [
            'NN ',
            'NN ',
            '   '
        ], {
            N: 'gribtweaks:sand_zinc_nugget'
        })
        
        event.shaped('crafting_on_a_stick:crafting_table', [
            'BC ',
            'AB ',
            '   '
        ], {
            A: 'minecraft:stick',
            B: '#minecraft:planks',
            C: '#minecraft:logs'
        })
        
        event.shaped('minecraft:crafting_table', [
            'NNN',
            'NNN',
            'NNN'
        ], {
            N: '#minecraft:planks'
        })
        
        event.shaped('gribtweaks:wooden_bucket', [
            '   ',
            'N N',
            ' N '
        ], {
            N: '#minecraft:woodblock'
        })
        
        event.shaped('gribtweaks:arch_block', [
            'ABA',
            'CDC',
            'EEE'
        ], {
            A: 'minecraft:string',
            B: '#minecraft:wool',
            C: 'minecraft:copper_ingot',
            D: 'gribtweaks:unforgotten_soul',
            E: 'minecraft:sandstone'
        })
        
        event.shaped('gribtweaks:primitive', [
            'AAB',
            'AB ',
            'B  '
        ], {
            A: '#minecraft:woodblock',
            B: 'minecraft:feather'
        })
        
        event.shaped('gribtweaks:compost', [
            'A A',
            'A A',
            'BBB'
        ], {
            A: '#minecraft:wooden_slabs',
            B: '#minecraft:planks'
        })
        
        event.shaped('minecraft:andesite', [
            'AA ',
            'AA ',
            '   '
        ], {
            A: 'gribtweaks:andesite_piece'
        })
        
        event.shaped('minecraft:cobblestone', [
            'AA ',
            'AA ',
            '   '
        ], {
            A: 'gribtweaks:stone_nugget'
        })
        
        event.shaped('create:andesite_alloy', [
            'AB ',
            'BA ',
            '   '
        ], {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:andesite'
        })
        
        event.shaped('gribtweaks:sand_shears', [
            'A  ',
            'BA ',
            '   '
        ], {
            A: 'gribtweaks:sand_stone_pieces',
            B: 'minecraft:string'
        })
        
        event.shaped('gribtweaks:hope_catalyst', [
            ' AB',
            'ACA',
            'DA '
        ], {
            A: 'minecraft:sandstone',
            B: 'gribtweaks:sand_iron',
            C: 'minecraft:oak_sapling',
            D: 'gribtweaks:sand_zinc'
        })
});