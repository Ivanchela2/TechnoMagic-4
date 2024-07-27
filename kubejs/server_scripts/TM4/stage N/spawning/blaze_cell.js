// минимальное кол-во мобов, которые могут появиться
const minMobCount = 0
// максимальное кол-во мобов, которые могут появиться
const maxMobCount = 8
// кол-во мобов, которое появится (в диапозоне от minMobCount до maxMobCount)
let mobCount = Math.floor(Math.random() * (maxMobCount - minMobCount + 1)) + minMobCount

// метод. вызывается, когда блок разрушается
BlockEvents.broken(event => {
    // проверка на то, что разрушен нужный блок
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        // переменная, которая хранит в себе сущность
        let myBlaze = event.block.createEntity("blaze")   
        // координаты, где заспавнится моб. считаются от блока
        myBlaze.x += 0.5
        myBlaze.y += 0.5
        myBlaze.z += 0.5
        // спавн сущности
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")  
        myBlaze.x += 1
        myBlaze.y += 0.5
        myBlaze.z += 0.5
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")  
        myBlaze.x += 0.5
        myBlaze.y += 0.5
        myBlaze.z += 1
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")   
        myBlaze.x += 1
        myBlaze.y += 0.5
        myBlaze.z += 1
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")  
        myBlaze.x += 1.5
        myBlaze.y += 0.5
        myBlaze.z += 0.5
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")  
        myBlaze.x += 0.5
        myBlaze.y += 0.5
        myBlaze.z += 1.5
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")  
        myBlaze.x += 1.5
        myBlaze.y += 0.5
        myBlaze.z += 1.5
        myBlaze.spawn()
        mobCount--
    } else {
        return 0
    }
})

BlockEvents.broken(event => {
    if (mobCount > 0 && event.block.id == "gribtweaks:blaze_cell") {
        let myBlaze = event.block.createEntity("blaze")  
        myBlaze.x += 2
        myBlaze.y += 0.5
        myBlaze.z += 0.5
        myBlaze.spawn()
        mobCount--
    } else {    
        return mobCount = Math.floor(Math.random() * (maxMobCount - minMobCount + 1)) + minMobCount
    }
})