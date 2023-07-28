ServerEvents.recipes(event => {
    //Пестик
    event.remove({ output: 'rootsclassic:pestle' })

    //Обычный каменный столб
    event.remove({ output: 'rootsclassic:mundane_standing_stone' })
})