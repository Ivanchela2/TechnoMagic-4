BlockEvents.rightClicked('notreepunching:clay_flower_pot', e => {
    if (e.player.mainHandItem == 'notreepunching:clay_tool') {
        e.block.popItem('ceramicshears:clay_shears_part')
        e.player.damageHeldItem(e.hand)
    };
});