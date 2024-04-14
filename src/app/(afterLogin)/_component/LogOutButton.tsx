
"use client"

import style from "./logoutButton.module.css"

const LogOutButton = () => {


  const me = {
    id: 'lars',
    image: '/5Udwvqim.jpg',
    nickname: '아틀라스'
  }

  const onLogOut = () => {

  }
  return (
    <button className={style.logOutButton}>
      <div className={style.logOutUserImage} onClick={onLogOut}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}



export default LogOutButton