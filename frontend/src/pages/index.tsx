import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <Link href="/memo/new">
        memoの作成
      </Link>
    </>
  )
}
