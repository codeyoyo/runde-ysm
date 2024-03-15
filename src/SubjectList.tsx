import questionList from "./data";
import { useState } from "react";
import SeachQuestion from "./SeachQuestion";

export default function SubjectList() {
    const [subId, setSubId] = useState<Number>(0)
    const [show, setShow] = useState<Boolean>(false)
    function selectSubject(subjectId: Number) {
        setSubId(subjectId)
    }
    const subList = questionList.map(item => <div className="subjuect-item" key={item.id} onClick={() => {
        selectSubject(item.id)
        setShow(true)
    }}>{item.name}</div>)
    function hideQuestion() {
        setShow(false)
    }
    function showQuestion() {
        if (show) {
            return (
                <SeachQuestion subjectId={subId} banckFn={hideQuestion} />
            )
        }
        return (
            <div className="subjuect-box">
                {subList}
            </div>
        )
    }
    return showQuestion()
}