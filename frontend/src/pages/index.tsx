import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"

export default function Home() {
  const getMemos = async () => {
    try {
      const result = await axios.get("http://localhost:80/api/v1/memo/memos")
      // console.log(result.data)
      setMemos(result.data)
    } catch(e) {
      console.log(e)
    }
  }

  const [memos, setMemos] = useState([])

  useEffect(() => {
    getMemos()
  },[]);

  return (
    <>
      <Link href="/memo/new">
        memoの作成
      </Link>
      <h1>hello</h1>
      <div>
        {memos.map((memo: any, i) => <div key={i}>{memo.content}</div>)}
      </div>
    </>
  )
}
