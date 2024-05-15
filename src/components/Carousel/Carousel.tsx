import { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ArticleCarouselProps {
  id: string;
}

function ArticleCarousel({ id }: ArticleCarouselProps) {
  const getImages = useMemo(() => {
    const tenIndex = Array.from({ length: 10 }, (_, i) => i + 1);
    return tenIndex.map((number) => `/${id}_${number}.jpg`);
  }, []);
  console.log(getImages);

  return (
    <div className="w-full md:w-3/6 rounded-2xl">
      <Carousel dynamicHeight={false} emulateTouch showThumbs={false}>
        {getImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen de ${id}`} className="h-[500px]" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ArticleCarousel;
