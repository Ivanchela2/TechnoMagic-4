const alfsteeltools = /aiotbotania:alfsteel/
const apothecaries = /botania:apothecary_(forest|plains|mountain|fungal|swamp|desert|taiga|mesa|mossy|livingrock|deepslate)/

JEIEvents.hideItems(e => {
    e.hide(apothecaries)
    e.hide(alfsteeltools)

    e.hide("hexerei:animal_fat")
    e.hide("hexerei:book_of_shadows")

    e.hide("farmersdelight:rope")

    e.hide("pigsteel:pigsteel_block")
})