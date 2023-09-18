import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export interface AskProps {
  show: boolean;
  okayHandler: () => void;
  handler: () => void;
}

export default function Ask(props: AskProps) {
  return (
    <>
      <Dialog
        size="sm"
        open={props.show}
        handler={props.handler}
        className="bg-transparent "
      >
        <DialogHeader
          className="font-primary rounded-t-xl bg-gray-800 
          text-primaryPink-400 justify-center py-2 
          border-t-2 border-t-primaryPink-600
          border-r-2 border-r-primaryPink-600
          border-l-2 border-l-primaryPink-600"
        >
          Cho anh một cơ hội, em nhớ
        </DialogHeader>
        <DialogBody
          divider
          className="bg-gray-800 text-primaryPink-300 px-2 py-2
          border-r-2 border-r-primaryPink-600
          border-l-2 border-l-primaryPink-600"
        >
          <Typography className="font-secondary text-lg font-normal">
            Nếu phải lựa chọn giữa việc yêu em và oxy để thở,
          </Typography>
          <Typography className="font-secondary text-lg font-normal">
            Anh sẽ dùng hơi thở cuối cùng để nói lời yêu em.
          </Typography>
        </DialogBody>
        <DialogFooter
          className="bg-gray-800 rounded-b-xl py-2 justify-center
        border-b-2 border-b-primaryPink-600
        border-r-2 border-r-primaryPink-600
        border-l-2 border-l-primaryPink-600"
        >
          <Button
            variant="gradient"
            color="pink"
            onClick={props.okayHandler}
            className="font-primary wide normal-case text-sm font-normal border-2 border-gray-200"
          >
            <span>Rep anh nha</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
