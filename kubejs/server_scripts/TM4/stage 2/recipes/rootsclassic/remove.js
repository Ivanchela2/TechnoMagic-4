ServerEvents.recipes(event => {
    //������
    event.remove({ output: 'rootsclassic:pestle' })

    //������� �������� �����
    event.remove({ output: 'rootsclassic:mundane_standing_stone' })
})