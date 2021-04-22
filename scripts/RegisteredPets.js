import { getPets, getWalkers } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            const pet = pets[petId]

            for (const walker of walkers) {
                if (walker.id === parseInt(pet.walkerId)) {
                    window.alert(`${pet.name} is being walked by ${walker.name}`)
                }
            }
        }
    }
)


const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

