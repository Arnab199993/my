
import styles from './page.module.css'
import PostsList from './Component/PostsList'

export default function Home() {
  return (
    <main className={styles.main}>
      <PostsList/>
    </main>
  )
}
