import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ImageCarouselProps {
  images: string[];
  options?: any;
}

const ImageCarousel = ({ images, options }: ImageCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden rounded-b-3xl" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div className="relative flex-[0_0_100%]" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
