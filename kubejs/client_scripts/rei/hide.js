const alfsteeltools = /aiotbotania:alfsteel/
const apothecaries = /botania:apothecary_(forest|plains|mountain|fungal|swamp|desert|taiga|mesa|mossy|livingrock|deepslate)/
const transformers = /ftbic:(lv|mv|hv|ev)_transformer/

JEIEvents.hideItems(e => {
    e.hide(apothecaries)
    e.hide(alfsteeltools)
    e.hide(transformers)

    e.hide("hexerei:animal_fat")
    e.hide("hexerei:book_of_shadows")

    e.hide("farmersdelight:rope")

    e.hide("pigsteel:pigsteel_block")
})