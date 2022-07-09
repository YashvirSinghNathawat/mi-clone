import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.875 18.417q-.708 0-1.208-.511-.5-.51-.5-1.218 0-.688.5-1.188t1.208-.5q.708 0 1.208.5t.5 1.208q0 .709-.5 1.209-.5.5-1.208.5Zm8.271 0q-.708 0-1.208-.511-.5-.51-.5-1.218 0-.688.5-1.188t1.208-.5q.708 0 1.208.5t.5 1.208q0 .709-.5 1.209-.5.5-1.208.5ZM5.354 5.146 7.167 9h5.791l2.084-3.854Zm-.916-1.917h12.166q.688 0 .917.5.229.5-.042 1.021l-2.896 5.208q-.229.438-.645.688-.417.25-.917.25H6.896l-.813 1.479h9.896v1.917H5.854q-1 0-1.521-.886-.521-.885-.021-1.76l1.063-1.958L2.458 3.5H.75V1.583h2.896ZM7.167 9h5.791Z"/></svg>
const PreNavbar = () => {
  return (
    <div className='preNav'>
      <div>
        <a href='https://www.mi.com/in/'>MI INDIA</a> <span>|</span>
        <a href='https://in.event.mi.com/in/install-mi-store'>GET MI STORE APP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
        <a href='https://www.mi.com/in/service/authorized_stores/'>RETAIL STORE</a>
      </div>
      <div>
        <a href='https://store.mi.com/in/site/login'>SIGN IN</a> <span>|</span>
        <a href='https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN'>SIGN UP</a>
        <span>|</span>
        <a href='https://store.mi.com/in/cart'><div className='cart'>{cartIcon}CART{0}</div></a>
      </div>
    </div>
  )
}

export default PreNavbar