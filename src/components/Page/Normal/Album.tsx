import {
  Button,
  Carousel,
  Dialog,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Img1 from "../../../assets/1.jpg";
import Img2 from "../../../assets/2.jpg";
import Img3 from "../../../assets/3.jpg";
import Img4 from "../../../assets/4.jpg";
import Img5 from "../../../assets/5.jpg";

export default function Album() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  let arrowColor = "#F2789F";
  let arrowWidth = 3;

  let imagesAndDescriptions = [
    { path: Img1, desc: "Image 1" },
    { path: Img2, desc: "Image 2" },
    { path: Img3, desc: "Image 3" },
    { path: Img4, desc: "Image 4" },
    { path: Img5, desc: "Image 5" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color="pink">
        Open Dialog
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
                className="!absolute top-2/4 left-4 -translate-y-2/4 hover:scale-125 hover:bg-transparent active:bg-transparent active:scale-75"
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
                  if (index < imagesAndDescriptions.length - 1) {
                    setIndex((prev) => prev + 1);
                  }
                  handleNext();
                }}
                ripple={false}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 hover:scale-125 hover:bg-transparent active:bg-transparent active:scale-75"
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
                      activeIndex === i ? "w-8 bg-pink-200" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {imagesAndDescriptions.map((img, index) => (
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
        <DialogFooter className="justify-center">
          <Typography
            variant="paragraph"
            className="text-pink-100 font-marmelad"
          >
            {imagesAndDescriptions[index].desc}
          </Typography>
        </DialogFooter>
      </Dialog>
    </>
  );
}
