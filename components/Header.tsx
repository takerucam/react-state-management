import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link href='/'>React状態管理</Link>
        </h1>
        <Link href='/'>TODO一覧</Link>
        <Link href='/add'>TODO追加</Link>
      </nav>
      <h2>TODO: 2件</h2>
    </header>
  )
}
