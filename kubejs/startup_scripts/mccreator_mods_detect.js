// const $PlatformImpl = Java.loadClass("dev.architectury.platform.forge.PlatformImpl")
// StartupEvents.postInit(e => {
//   let mcreatorMods = Utils.newList()
//   Platform.getMods().forEach((key,val) => {
//     let mod
//     try {
//       mod = $PlatformImpl.getMod(key)
//     } catch (ignored) {}
//     if (!mod) return
//     let container = getPrivateField(mod, "container")
//     let modInstance = container.getMod()
//     modInstance && modInstance.getClass().getName().startsWith("net.mcreator") && mcreatorMods.add(key)
//   })
//   if (!mcreatorMods.isEmpty()){
//     console.error(`Mods created using MCreator are not supported by this pack, please uninstall the following mods:`)
//     console.error(`${mcreatorMods}`)
//   }
// })

// function getPrivateField(obj, field) {
//   let classField = obj.class.getDeclaredField(field)
//   classField.setAccessible(true)
//   return classField.get(obj)
// }