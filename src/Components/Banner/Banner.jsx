

const Banner = () => {
    return (
      <div className="hero min-h-[450px]" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/italian-food-composition-with-big-space-middle_23-2147686550.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Savoria Bistro</h1>
      <p className="mb-5"> Where Flavor Meets Elegance. Join us for a culinary adventure of exquisite dishes in a charming setting. Discover the art of savoring every moment</p>
      <button className="btn ">Manus</button>
    </div>
  </div>
</div>
    );
};

export default Banner;