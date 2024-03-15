import Question from "./Question";
export default function QuestionList({ rows }: { rows: Array<any> }) {
    const result = []
    for (const item of rows) {
        result.push(
            <Question questionItem={item} />
        )
    }
    return (<div className="question-list">{result}</div>)
}