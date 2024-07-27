ServerEvents.recipes(event => {
	const output = [
        'enigmaticlegacy:the_acknowledgment',
		'enigmaticlegacy:etherium_ingot',
		'enigmaticlegacy:etherium_helmet',
		'enigmaticlegacy:etherium_chestplate',
		'enigmaticlegacy:etherium_leggings',
		'enigmaticlegacy:etherium_boots',
		'enigmaticlegacy:forbidden_axe',
		'enigmaticlegacy:mega_sponge',
		'enigmaticlegacy:extradimensional_eye',
		'enigmaticlegacy:monster_charm',
		'enigmaticlegacy:cosmic_heart',
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})