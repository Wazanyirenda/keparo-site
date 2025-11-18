import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CustomCarouselProps {
  items: React.ReactNode[];
  showControls?: boolean;
  autoScroll?: boolean;
  itemsPerView?: number;
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({
  items,
  showControls = true,
  autoScroll = false,
  itemsPerView = 1,
}) => {
  const plugins = autoScroll ? [Autoplay({ delay: 2000, stopOnInteraction: true })] : [];

  return (
    <Carousel
      plugins={plugins}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className={`basis-1/${itemsPerView}`}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showControls && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};
