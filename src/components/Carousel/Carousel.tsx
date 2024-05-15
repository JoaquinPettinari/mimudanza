import { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ArticleCarouselProps {
  id: string;
  photos: number;
}

function ArticleCarousel({ id, photos }: ArticleCarouselProps) {
  const getImages = useMemo(() => {
    const tenIndex = Array.from({ length: photos }, (_, i) => i + 1);
    return tenIndex.map((number) => `/${id}_${number}.jpg`);
  }, []);

  return (
    <div className="w-full md:w-3/6 rounded-2xl h-4/5">
      <Carousel
        dynamicHeight={false}
        showThumbs={false}
        emulateTouch
        infiniteLoop
      >
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
