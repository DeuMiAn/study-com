

import style from './trend.module.css'
import Link from 'next/link';

const Trend = () => {
  return (
    <Link href={'/search?q=xmfpsem'} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>라스</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
}


export default Trend