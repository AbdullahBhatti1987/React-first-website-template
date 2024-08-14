

const Header = ()=>{
    return (

<header className="text-gray-600 body-font px-20">
  <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
      <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="Capital Shop" />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Men</a>
      <a className="mr-5 hover:text-gray-900">Women</a>
      <a className="mr-5 hover:text-gray-900">Kids Collection</a>
      <a className="mr-5 hover:text-gray-900">Pages</a>
      <a className="mr-5 hover:text-gray-900">Blog</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <div className="icons flex gap-5">
       <i className="fa-solid fa-magnifying-glass text-2xl"></i>
       <i className="fa-regular fa-user text-2xl"></i>
       <i className="fa-solid fa-cart-shopping text-2xl"></i>
    </div>
  </div>
</header>



)


}


export default Header;