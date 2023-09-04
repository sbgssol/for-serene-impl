import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import RightIcon from "../../../assets/right.svg";
import LeftIcon from "../../../assets/left.svg";

export default function Words() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md shadow-pink-800/70">
          <Typography className="font-marmelad text-pink-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            repellat delectus veritatis tempore, est quod velit odio blanditiis
            laborum reiciendis quas recusandae, magnam, expedita maxime
            accusamus aperiam. Libero, quo odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam voluptate obcaecati debitis
            nam vitae in, pariatur commodi tempora ipsum, voluptatibus quod
            earum perferendis quibusdam dignissimos fugiat ipsa neque quos
            dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Illum veritatis enim, tempore sed mollitia iste omnis iusto fuga
            assumenda eos explicabo incidunt cum modi ex labore ab sunt, totam
            debitis? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae iusto repudiandae voluptates odit eius harum nostrum qui
            numquam at ullam soluta perferendis est quia dolor error quaerat,
            aliquam odio animi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, iure a doloribus dolorum nobis,
            asperiores molestiae explicabo iusto provident enim magni doloremque
            consequuntur similique officia assumenda. Quos fuga officia
            laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nesciunt rem eveniet a molestias totam minus! Corporis sequi,
            earum aliquid ullam, saepe fuga voluptates molestiae assumenda,
            beatae dolor dolores harum nulla!
          </Typography>
        </div>
        <div className="flex place-content-between w-80 md:w-[720px] lg:w-[800px] mt-5">
          <Button
            className="p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-150 duration-150"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={LeftIcon} alt="" />
          </Button>
          <Button
            className="p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-150 duration-150"
            onClick={() => {
              navigate("/for-serene-impl/3");
            }}
          >
            <img src={RightIcon} alt="" />
          </Button>
        </div>
      </div>
    </>
  );
}
