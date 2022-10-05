//1100 -> 18:00 função pega os minutos e converte em uma string no formato de hora

export function convertMinutes(minutesAmount: number){

    const hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
}