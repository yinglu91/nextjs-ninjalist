import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae excepturi unde eveniet explicabo, sed dolor laudantium tempora voluptates fugiat rerum blanditiis dolore, numquam optio.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, dolor sequi. Minima ipsum exercitationem repudiandae animi fugit laudantium omnis numquam, hic dolores excepturi, accusamus quaerat ab explicabo eius voluptatibus labore.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
