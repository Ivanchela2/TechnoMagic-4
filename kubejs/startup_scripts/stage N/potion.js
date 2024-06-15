StartupEvents.registry('mob_effect', e => {
    e.create('gribtweaks:vigilance')
        .displayName('Зоркость')
        .effectTick((entity, lvl) => {
            entity.removeEffectNoUpdate('darkness')
        })
        .color(Color.WHITE)
});

const $PotionBuilder = Java.loadClass("dev.latvian.mods.kubejs.misc.PotionBuilder");

function potionRegist(e, id, durationInSeconds){
    e.createCustom(`gribtweaks:${id}`, () => {
        return new $PotionBuilder(id)
        .effect(`gribtweaks:${id}`, durationInSeconds * 20, 0)
        .createObject()
    });
};

StartupEvents.registry("potion", e => {
    potionRegist(e, 'vigilance', 240);
});

MoreJSEvents.registerPotionBrewing(e => {
    e.addPotionBrewing('minecraft:echo_shard', "minecraft:night_vision", 'gribtweaks:vigilance');
})