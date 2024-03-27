const alfsteeltools = /aiotbotania:alfsteel/
const apothecaries = /botania:apothecary_(forest|plains|mountain|fungal|swamp|desert|taiga|mesa|mossy|livingrock|deepslate)/

JEIEvents.hideItems(e => {
    e.hide(apothecaries)
    e.hide(alfsteeltools)
})