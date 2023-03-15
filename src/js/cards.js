import RepoCard from "../card.html";
import {elementByHtml, formatDate} from "./utils";

export const CardsContainer = document.getElementById('cards-container')

export function createCard(options) {
    const {name, url, author, avatarUrl, date, stars} = options

    let html = String(RepoCard)
        .replaceAll('$Name$', name)
        .replaceAll('$RepoUrl$', url)
        .replaceAll('$Author$', author)
        .replaceAll('$Date$', formatDate(date))
        .replaceAll('$Stars$', stars)
        .replaceAll('$AvatarUrl$', avatarUrl)

    return elementByHtml(html)
}

export function appendCard(options) {
    CardsContainer.append(createCard(options))
}

export function clearCards(message = '') {
    CardsContainer.innerHTML = message
}