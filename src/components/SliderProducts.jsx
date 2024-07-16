import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photoGrapeImage from '../images/pages/photogrape.png';


export const SliderProducts = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const sliderImageUrl = [
      {
        title:"PhotoGrape",
        url:"https://photo-grape.vercel.app/",
        image:photoGrapeImage
      },
      {
        title:"pagina",
        url:"#",
        image:
          "https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
      },
      {
        title:"pagina",
        url:"#",
        image:
          "https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
      },
      {
        title:"pagina",
        url:"#",
        image:
          "https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
      },
      {
        title:"pagina",
        url:"#",
        image:
          "https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
      },

      ];
    return (
        <div className="parent ">
      <Carousel
      
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        arrows={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map(({image,title,url}, index) => {
          return (
            <div className="slider group  transition  rounded" key={index}>
              <a href={url}>
              <img className="w-full h-60 group-hover:opacity-20 " src={image} alt="movie" />
              <div className="text-transparent text-white group-hover:bg-emerald-400  py-1 lg:py-3  transition  group-hover:-translate-y-8  lg:group-hover:-translate-y-12">
                <h4 className="text-emerald-900 uppercase hidden group-hover:block">{title}</h4>
                
              </div>
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
    );
};
