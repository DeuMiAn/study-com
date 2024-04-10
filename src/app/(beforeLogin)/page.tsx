import Image from "next/image";
import styles from "@/app/page.module.css";
//tailwind -> 호불호 심함
//styled component ->server component SSR이슈 
//sass
//css module -> 간단하게 가자
//vanilla extract -> windows와 문제
import Link from "next/link";
import zLogo from '../../../public/zlogo.png';



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/singup" className={styles.singup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={styles.login}>로그인</Link>
      </div>
    </div>
  )
}
