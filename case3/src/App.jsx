import { useEffect } from "react";
import logowa from "./assets/logowa.png";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({}); // Inisialisasi AOS
  }, []);
  const listAbout = [
    {
      img: "https://img.freepik.com/free-photo/engraving-instrument-arrangement-table_23-2149061698.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=sph",
      title: "Dibuat Dari Bahan Pilihan",
      paragraf:
        " Bahan-bahan pilihan kami tidak hanya menawarkan tampilan yang menawan, tetapi juga memberikan keandalan dan daya tahan yang luar biasa. Kami menggabungkan keahlian tangan yang terampil dengan bahan-bahan terbaik yang kami pilih dengan cermat, untuk menghasilkan produk yang menjadi perwujudan dari kualitas terbaik.",
    },
    {
      img: "https://img.freepik.com/free-photo/close-up-painting-pottery-pot_23-2148643321.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=ais",
      title: "Dibuat Oleh Tangan Profesional",
      paragraf:
        "Kami percaya bahwa keahlian dan pengalaman yang dimiliki oleh para pengrajin kami merupakan kunci utama dalam menciptakan kualitas dan keunggulan setiap karya tangan. Setiap produk yang kami tawarkan adalah hasil dari upaya maksimal untuk memenuhi standar yang tinggi dan memberikan kepuasan kepada pelanggan.",
    },
    {
      img: "https://img.freepik.com/premium-photo/craftsman-shows-letter-agreement-businesswoman-handicraft-workshop_8595-20178.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=ais",
      title: "Harga Yang Terjangkau",
      paragraf:
        "Dengan komitmen kami untuk memberikan pengalaman belanja yang menyenangkan dan terjangkau, kami menawarkan koleksi karya tangan dengan harga yang bersahabat tanpa mengorbankan kualitas. Kami percaya bahwa setiap orang berhak mendapatkan produk berkualitas yang dapat dinikmati tanpa harus mengeluarkan biaya yang mahal.",
    },
  ];
  const listProduk = [
    {
      img: "https://img.freepik.com/free-photo/set-three-unlabeled-similar-craft-cardboard-boxes-with-covers-beautifully-arranged-studio-with-white-walls_346278-1612.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=ais",
      title: "Wadah Tisu",
      harga: "20.000",
    },
    {
      img: "https://img.freepik.com/premium-photo/cardboard-box-with-disposable-containers-green-sprig_261761-824.jpg?w=740",
      title: "Pot Bunga",
      harga: "60.000",
    },
    {
      img: "https://img.freepik.com/free-photo/wood-crafting-tools-assortment-with-wooden-board_23-2148732433.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=ais",
      title: "Hiasan Rumah",
      harga: "50.000",
    },
    {
      img: "https://img.freepik.com/free-photo/wicker-baskets-sale_1398-2317.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=sph",
      title: "Keranjang meong",
      harga: "50.000",
    },
    {
      img: "https://img.freepik.com/free-photo/vertical-shot-blue-chair-made-up-wooden-legs_181624-33152.jpg?size=626&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=sph",
      title: "Kursi",
      harga: "50.000",
    },
    {
      img: "https://img.freepik.com/premium-photo/men-fashion-shoes-leather-wooden-box-shoes-store_107612-608.jpg?w=740",
      title: "Macam Macam Sepatu",
      harga: "200.000",
    },
  ];
  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="font-index scroll-smooth">
      <div className=" pt-7 px-10 md:px-20 lg:px-40 text-white h-[400px] bg-fixed bg-no-repeat bg-cover justify-around bg-[url('https://img.freepik.com/premium-photo/cropped-image-young-concentrated-man-shoemaker_171337-25442.jpg?w=740')]">
        <div
          className="flex   flex-col  items-baseline md:flex-row md:items-center md:justify-between
           w-full "
        >
          <h1 className="text-3xl font-bold">Crafstore</h1>
          <ul className="flex">
            <li className="hover:cursor-pointer mr-5">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:cursor-pointer mr-5">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:cursor-pointer mr-5">
              <Link
                activeClass="active"
                to="product"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Product
              </Link>
            </li>
          </ul>
        </div>
        <div className=" mt-20 w-[400px]">
          <div>
            <h1 className="text-3xl text-white font-bold">
              Mau Kerajinan Tangan Yang Cantik Dan Unik? Disini Tempatanya!
            </h1>
            <p className="mt-10">
              Dapatkan Crafting Pilihan Dari Indonesia Dengan Pengerjaan
              Profesional Dan Harga Yang Terjangkau
            </p>
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div
        className="mt-20 px-10 md:px-20 lg:px-40 "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        id="about"
      >
        {listAbout.map((val, key) => {
          return (
            <div
              className={`flex flex-col md:flex-row text-center md:text-left gap-10 mb-20 ${
                key === 1 && " md:flex-row-reverse"
              }`}
              key={key}
            >
              <img
                src={val.img}
                alt=""
                srcset=""
                className="w-[400px] h-[250px] mx-auto hover:scale-105 transition-all duration-200"
              />
              <div>
                <h1 className="text-3xl font-bold mb-5">{val.title}</h1>
                <p>{val.paragraf}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* PRODUCT */}
      <div className="mt-20 px-10 md:px-20 lg:px-40 " id="product">
        <h1 className="font-bold text-2xl">Product Kami</h1>
        <div
          className="mt-10 grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {listProduk.map((val, key) => {
            return (
              <div
                className="shadow hover:scale-110 transition-all duration-200"
                key={key}
              >
                <img
                  src={val.img}
                  alt=""
                  className="h-[200px] w-full"
                  srcset=""
                />
                <div className="py-5 px-2 ">
                  <h1 className="font-bold">{val.title}</h1>
                  <p>Rp.{val.harga}/pcs</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* GOOGLE MAP */}
      <div className="mapouter mt-14">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://2yu.co">2yu</a>
          <br />
          <style>{`.mapouter{position:relative;text-align:right;height:300px;width:100%;}`}</style>
          {/* <a href="https://embedgooglemap.2yu.co/">html embed google map</a> */}
          <style>{`.gmap_canvas{overflow:hidden;background:none!important;height:300px;width:100%;}`}</style>
        </div>
      </div>
      <div className="fixed right-10 bottom-5 flex flex-col justify-center items-center hover:cursor-pointer">
        <img src={logowa} alt="" className="h-32" srcset="" />
        <span className="bg-neutral-300 rounded w-max px-2 py-1">
          Hubungi Kami
        </span>
      </div>

      {/* FOOTER */}
      <div className="text-center bg-white  py-5">Copyright 2023</div>
    </div>
  );
}

export default App;
