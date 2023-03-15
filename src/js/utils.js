export function formatDate(date) {
    date = new Date(date)

    if (isToday(date))
        return `сегодня, ${formatTime(date)}`

    if (isToday(date, -1))
        return `вчера, ${formatTime(date)}`

    if (isToday(date, 1))
        return `завтра, ${formatTime(date)}`

    return `${date.toLocaleDateString()}, ${formatTime(date)}`
}

export function elementByHtml(html) {
    const template = document.createElement('template')
    template.innerHTML = html
    return template.content.firstChild
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${min}`
}

function isToday(date, offsetDays = 0) {
    const now = new Date()
    now.setDate(now.getDate() + offsetDays)
    return date.getFullYear() === now.getFullYear()
        && date.getMonth() === now.getMonth()
        && date.getDate() === now.getDate();
}