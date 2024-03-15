function getQuestionItem(questionItem: any, idx: Number) {
    let itemList: Array<any> = questionItem.itemList
    const itemSelects = itemList.map((value) =>
        <p key={value.id}>
            {value.content}
        </p>
    )
    return (
        <div className="question-box">
            <div>
                <span>{idx + ''}、</span>
                {questionItem.type === 1 ? '单选题' : '多选题'}
            </div>
            <div>
                {questionItem.title}
            </div>
            <div className="select-box">
                {itemSelects}
            </div>
            <div>正确答案：{questionItem.answer}</div>
            <div>解析：{questionItem.analysis}</div>
        </div>
    )
}

export default function Question({ questionItem }: { questionItem: any }) {
    let result: any[] = []
    let itemList: Array<any> = questionItem.itemList
    let idx = 1
    if (itemList) {
        return getQuestionItem(questionItem, idx)
    }
    for (const children of questionItem.children) {
        result.push(getQuestionItem(children, idx))
        idx += 1
    }
    return (
        <>
            <div className="big-question-box">
                <div>
                    案例题
                </div>
                <div>
                    {questionItem.title}
                </div>
                <div>
                    {result}
                </div>
            </div>
            <hr />
        </>
    )
}
