 

const Banner = () => {
    return (
        <div className="hero h-[70vh] " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-100"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto space-y-4 pt-36 text-white">
                    <input className="w-full py-2 px-3 rounded-md" type="text" name="" id="" placeholder="seach phones" />
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md">search</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;