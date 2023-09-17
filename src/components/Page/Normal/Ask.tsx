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
        size="xs"
        open={props.show}
        handler={props.handler}
        className="bg-transparent"
      >
        <DialogHeader className="font-primary rounded-t-xl bg-gray-800 text-primaryPink-400 justify-center py-2">
          Cho anh một cơ hội, em nhé
        </DialogHeader>
        <DialogBody
          divider
          className="bg-gray-800 text-primaryPink-300 px-2 py-2"
        >
          <Typography className="font-primary text-lg font-normal">
            Anh sẽ yêu em thật nhiều.
          </Typography>
          <Typography className="font-primary text-lg font-normal">
            Anh sẽ luôn tôn trọng em.
          </Typography>
          <Typography className="font-primary text-lg font-normal">
            Anh sẽ luôn đối xử tốt với em.
          </Typography>
          <Typography className="font-primary text-lg font-normal">
            Cho anh cơ một lần này, em nhé.
          </Typography>
        </DialogBody>
        <DialogFooter className="bg-gray-800 rounded-b-xl py-2 justify-center">
          <Button
            variant="gradient"
            color="pink"
            onClick={props.okayHandler}
            className="font-primary wide normal-case text-sm font-normal"
          >
            <span>Rep anh nhá</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
