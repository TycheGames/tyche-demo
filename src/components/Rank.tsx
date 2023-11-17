import { useScore } from './hooks'
const Rank = () => {
    const { score, setScore } = useScore()
    return (
        <div className="flex flex-col  h-[400px] items-center w-[200px]  text-cyan-50 ]">
            RANK
            <div className="flex flex-row space-x-10">
                <div>Luis</div>
                <div>{score}</div>
            </div>
        </div>
    )
}

export default Rank
