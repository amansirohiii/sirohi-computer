import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/utils/constants";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] sm:h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-3xl sm:text-5xl mb-5 items-start dark:text-white text-black">Students Reviews</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
