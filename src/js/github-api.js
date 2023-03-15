export async function searchRepository(name) {
    const url = getSearchRepositoryUrl(name, 10)
    const response = await fetch(url)

    if (+response.status === 200)
        return await response.json()
    console.error(`Response code isn't success: ${await response.text()}`)
}

function getSearchRepositoryUrl(repoName, count) {
    const url = new URL("https://api.github.com/search/repositories");
    url.searchParams.append('q', repoName)
    url.searchParams.append('per_page', count)
    return url
}
