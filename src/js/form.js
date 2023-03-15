import {searchRepository} from "./github-api";
import {appendCard, clearCards} from "./cards";

export async function handleSubmit(e) {
    e.preventDefault()
    const repositoryName = this.searchbar.value
    const result = await searchRepository(repositoryName)
    
    clearCards(result.items.length > 0 ? '' : 'Ничего не найдено')
    
    result.items.forEach(repository => {
        appendCard(createCardOptions(repository))
    })
}

function createCardOptions(githubRepository) {
    return {
        name: githubRepository.name,
        url: githubRepository.clone_url,
        author: githubRepository.owner.login,
        avatarUrl: githubRepository.owner.avatar_url,
        date: githubRepository.created_at,
        stars: githubRepository.stargazers_count
    }
}


