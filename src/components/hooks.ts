import useSWR from 'swr'
function useScore() {
    const { data: score, mutate: setScore } = useSWR('score', {
        fallbackData: 0,
    })
    return { score, setScore }
}
export { useScore }
