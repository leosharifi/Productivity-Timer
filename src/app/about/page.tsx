import styles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About This App</h1>

        <p className={styles.description}>
          This is a simple productivity app with a Pomodoro timer and a todo
          list. It helps you stay focused and organized.
        </p>

        <p className={styles.description}>
          Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Tailwind CSS</strong> (or plain CSS if you prefer). All tasks
          are saved in your browser using localStorage.
        </p>

        <h2 className={styles.subtitle}>Made by</h2>
        <p className={styles.madeBy}>[Elyas Sharifi]</p>

        <div className={styles.links}>
          <a
            href="https://github.com/leosharifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/leosharifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>

          <a href="mailto:elyassharifi2548@gmail.com">Email</a>
        </div>

        <div className={styles.backHome}>
          <Link href="/">Back to Timer</Link>
        </div>
      </div>
    </div>
  );
}
