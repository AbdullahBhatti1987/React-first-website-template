const FashionCategories = () => {
  return (
    <div className="flex flex-lg-row flex-md-row flex-sm-column flex-column justify-between w-10/12 mx-auto">
      <div className="p-4 bg-white-400 flex flex-col items-center" id="mensFashion">
        <img src="../../images/categories/items1.jpg" className="" alt="Men's Fashion" />
        <h1>Men's Fashion</h1>
        <a href="#" className="text-anchortag">Shop Now</a>
      </div>
      <div className="p-4 bg-white-400 flex flex-col items-center" id="womensFashion">
        <img src="../../images/categories/items2.jpg" className="" alt="Women's Fashion" />
        <h1>Women's Fashion</h1>
        <a href="#" className="text-anchortag">Shop Now</a>
      </div>
      <div className="p-4 bg-white-400 flex flex-col items-center" id="babysFashion">
        <img src="../../images/categories/items3.jpg" className="" alt="Baby's Fashion" />
        <h1>Baby's Fashion</h1>
        <a href="#" className="text-anchortag">Shop Now</a>
      </div>
    </div>
  );
};

export default FashionCategories;
