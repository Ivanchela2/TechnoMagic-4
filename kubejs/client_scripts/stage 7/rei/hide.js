const alfsteeltools = /aiotbotania:alfsteel/
const apothecaries = /botania:apothecary_(forest|plains|mountain|fungal|swamp|desert|taiga|mesa|mossy|livingrock|deepslate)/

REIEvents.hide('item', e => {
    e.hide(apothecaries)
    e.hide(alfsteeltools)
})