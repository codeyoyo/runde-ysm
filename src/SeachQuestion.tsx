import QuestionList from "./QuestionList";
import questionList from "./data";
import { MouseEventHandler, useState } from "react";


export default function SeachQuestion({ subjectId, banckFn }: { subjectId: Number, banckFn: MouseEventHandler }) {
    const [searchTxt, setSearchTxt] = useState('')
    const questionRows: any[] = []
    for (const item of questionList) {
        if (item.id === subjectId) {
            questionRows.push(...item.rows)
            break
        }
    }
    const [searchRows, setSearchRows] = useState<any[]>(questionRows)

    function searchClick(): void {
        if (!searchTxt && searchTxt === '') {
            setSearchRows([...questionRows])
            return
        }
        const tempList: Array<any> = []
        for (const item of questionRows) {
            const title: String = item.title
            if (title.indexOf(searchTxt) > -1) {
                tempList.push(item)
            }
        }
        setSearchRows([...tempList])
    }

    function inputChange(event: any) {
        setSearchTxt(event.target.value)
    }


    return (
        <div className='search-box'>
            <div className='search-form'>
                <button onClick={banckFn}>返回</button>
                <input type="text" value={searchTxt} onChange={inputChange}></input>
                <button onClick={searchClick}>搜索</button>
            </div>
            <QuestionList rows={searchRows} />
        </div>
    )
}