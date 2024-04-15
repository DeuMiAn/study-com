"use client"
import style from '@/app/(afterLogin)/_component/followRecommend.module.css'
const FollowRecommend = () => {

  const onFollow = () => { };

  const user = {
    id: '일론머스크',
    nickname: '화성갈끄니까',
    image: '/yRsRRjGO.jpg'
  }
  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id}></img>
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}



export default FollowRecommend