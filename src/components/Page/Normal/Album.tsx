import {
  Button,
  Carousel,
  Dialog,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export interface AlbumProps {
  title: string;
  images: { path: string; desc: string }[];
  titleClasses?: string;
}

export default function Album(props: AlbumProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const iconButtonClasses =
    "hover:bg-transparent active:bg-transparent active:scale-75";
  const arrowWidth = 4;
  const arrowColor = "#FB7185";
  const navigatorCurrentColor = "bg-[#FB7185]";
  const navigatorPreviousColor = "bg-[#A8A29E]";

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    if (!open) {
      setIndex(0);
    }

    return () => {};
  }, [open, index]);

  return (
    <>
      <Button
        onClick={handleOpen}
        ripple={false}
        variant="text"
        className={`${props.titleClasses} active:scale-75 hover:scale-110`}
      >
        {props.title}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="md"
        className="bg-[#333] border-2 border-pink-600 drop-shadow-md shadow-lg shadow-pink-400/60"
      >
        {/* <DialogHeader> </DialogHeader> */}
        <DialogBody className="rounded-sm">
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  if (index > 0) {
                    setIndex((prev) => prev - 1);
                  }
                  handlePrev();
                }}
                ripple={false}
                className={`!absolute top-1/2 -translate-y-2/4 hover:scale-125 ${iconButtonClasses}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={arrowWidth}
                  stroke={arrowColor}
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  if (index < props.images.length - 1) {
                    setIndex((prev) => prev + 1);
                  }
                  handleNext();
                }}
                ripple={false}
                className={`!absolute top-2/4 !right-0 -translate-y-2/4 hover:scale-125 ${iconButtonClasses}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={arrowWidth}
                  stroke={arrowColor}
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? `w-8 ${navigatorCurrentColor}`
                        : `w-4 ${navigatorPreviousColor}`
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {props.images.map((img, index) => (
              <img
                key={index}
                src={img.path}
                className="mx-auto h-[500px] object-scale-down rounded-md"
              />
            ))}

            {/* <img src={Img1} className="mx-auto h-[500px] object-scale-down rounded-md" />
            <img src={Img2} className="mx-auto h-[500px] object-scale-down rounded-md" />
            <img src={Img3} className="mx-auto h-[500px] object-scale-down rounded-md" />
            <img src={Img4} className="mx-auto h-[500px] object-scale-down rounded-md" />
            <img src={Img5} className="mx-auto h-[500px] object-scale-down rounded-md" /> */}
          </Carousel>
        </DialogBody>
        <DialogFooter className="justify-center h-20 py-0 pb-2 ">
          <Typography
            variant="paragraph"
            className="text-pink-100 font-primary text-center"
          >
            {props.images[index].desc}
          </Typography>
        </DialogFooter>
      </Dialog>
    </>
  );
}
