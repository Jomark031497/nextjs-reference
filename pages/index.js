import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Laboris laboris dolor nulla commodo fugiat nisi pariatur ipsum nisi
        Lorem sint adipisicing eiusmod. Enim enim fugiat tempor culpa veniam
        mollit occaecat culpa cillum nostrud reprehenderit. Irure Lorem nulla do
        culpa adipisicing enim consequat qui consectetur dolor. Nulla anim eu
        aliquip consectetur. Tempor ea esse nostrud incididunt eu eu tempor
        minim.
      </p>

      <p className={styles.text}>
        Commodo incididunt pariatur consectetur qui incididunt cupidatat amet
        irure enim culpa aute enim. Ad magna laborum anim ad amet. Exercitation
        ad fugiat ea tempor proident adipisicing ea ea ut incididunt veniam
        laboris. Veniam sint labore ad nostrud. Enim esse elit velit ullamco
        adipisicing Lorem sunt ipsum. Pariatur consectetur veniam veniam ipsum
        reprehenderit officia excepteur mollit ullamco irure. Cupidatat laboris
        esse laborum occaecat anim mollit reprehenderit occaecat veniam occaecat
        ut ex.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  );
}
