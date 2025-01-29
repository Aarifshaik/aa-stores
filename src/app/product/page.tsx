// 'use client';
// import * as React from "react"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"

// export default function CarouselSpacing() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 1000, stopOnInteraction: true })
//   )
//   return (
//     <Carousel 
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//       className="w-full max-w-sm" 
//       plugins={[plugin.current]}
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent className="-ml-2 md:-ml-4">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Card Title</CardTitle>
//                   <CardDescription>Card Description</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                 <span className="text-2xl font-semibold">{index + 1}</span> 
//                 </CardContent>
//                 <CardFooter>
//                   <p>Card Footer</p>
//                 </CardFooter>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }


// import { Metadata } from "next"
// import { PlusCircle } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

// import { AlbumArtwork } from "./components/album-artwork"
// import { listenNowAlbums, madeForYouAlbums } from "./data/albums"

// export const metadata: Metadata = {
//   title: "Aa Store",
//   description: "Example music app using the components.",
// }

// export default function ProductPage() {
//   return (
//     <>
//       <div className="hidden md:block">
//         <div className="border-t">
//           <div className="bg-background">
//             <div className="grid lg:grid-cols-4">
//               <div className="col-span-3 lg:col-span-4 lg:border-l">
//                 <div className="h-full px-4 py-6 lg:px-8">
//                     <div className="space-between flex items-center">
//                       <div className="ml-auto mr-4">
//                         <Button>
//                           <PlusCircle />
//                           View All
//                         </Button>
//                       </div>
//                     </div>
//                       <div className="flex items-center justify-between">
//                         <div className="space-y-1">
//                           <h2 className="text-2xl font-semibold tracking-tight">
//                             Latest Drops
//                           </h2>
//                           <p className="text-sm text-muted-foreground">
//                             Top picks for you. Updated daily.
//                           </p>
//                         </div>
//                       </div>
//                       <Separator className="my-4" />
//                       <div className="relative">
//                         <ScrollArea>
//                           <div className="flex space-x-4 pb-4">
//                             {listenNowAlbums.map((album) => (
//                               <AlbumArtwork
//                                 key={album.name}
//                                 album={album}
//                                 className="w-[250px]"
//                                 aspectRatio="portrait"
//                                 width={250}
//                                 height={330}
//                               />
//                             ))}
//                           </div>
//                           <ScrollBar orientation="horizontal" />
//                         </ScrollArea>
//                       </div>
//                       <div className="mt-6 space-y-1">
//                         <h2 className="text-2xl font-semibold tracking-tight">
//                           Made for You
//                         </h2>
//                         <p className="text-sm text-muted-foreground">
//                           Your personal playlists. Updated daily.
//                         </p>
//                       </div>
//                       <Separator className="my-4" />
//                       <div className="relative">
//                         <ScrollArea>
//                           <div className="flex space-x-4 pb-4">
//                             {madeForYouAlbums.map((album) => (
//                               <AlbumArtwork
//                                 key={album.name}
//                                 album={album}
//                                 className="w-[150px]"
//                                 aspectRatio="square"
//                                 width={150}
//                                 height={150}
//                               />
//                             ))}
//                           </div>
//                           <ScrollBar orientation="horizontal" />
//                         </ScrollArea>
//                       </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


'use client';
// import { Metadata } from "next";
import { CircleArrowOutUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useAuth } from "@/context/authContext";
import { AlbumArtwork } from "./components/album-artwork";
import { listenNowAlbums, madeForYouAlbums } from "./data/albums";

// export const metadata: Metadata = {
//   title: "Aa Store",
//   description: "Example music app using the components.",
// };

export default function ProductPage() {
  const { user,logout } = useAuth();
  useProtectedRoute();

  return (
    <>
    {user && (
    <div className="min-h-screen bg-background">
      <div className="border-t">
        <div className="px-4 py-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Latest Drops</h2>
            <Button>
              <CircleArrowOutUpRight className="mr-2" /> View All
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Top picks for you. Updated daily.
          </p>
          <Separator className="mb-6" />
          <div className="relative mb-8">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {listenNowAlbums.map((album) => (
                  <AlbumArtwork
                    key={album.product_name}
                    album={album}
                    // className="w-[150px]"
                    className="w-[115px] sm:w-[150px] md:w-[180px] lg:w-[200px]" // Responsive
                    aspectRatio="portrait"
                    width={150}
                    height={150}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold tracking-tight">Sale</h2>
            <Separator className="mb-6" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {madeForYouAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.product_name}
                      album={album}
                      // className="w-[150px]"
                      className="w-[80px] sm:w-[110px] md:w-[130px] lg:w-[150px]" // Responsive
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
