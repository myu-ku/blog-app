import { useState } from "react"
import axios from "axios"
import Link from "next/link"

const NewMemo = () => {
  const [text, setText] = useState("");
  const params = {content: text}
  // console.log(params)
  const createMemo = async () => {
    try {
      const result = await axios.post("http://localhost:80/api/v1/memo/memos", params)
      console.log(result.data)
      
      const memoForm = document.getElementById('memo-form') as HTMLInputElement
      memoForm.value = ''
    } catch(e) {
      console.log(e)
    }
   
  }
  return (
    <>
      <h1>新規メモ作成</h1>

      <div onSubmit={createMemo}>
        <input type="text" id="memo-form" value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={createMemo}>保存</button>
      </div>

      <Link href="/">
        home
      </Link>
    </>
  )
}
export default NewMemo
