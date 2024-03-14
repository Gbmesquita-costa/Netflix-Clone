import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

export function PlayVideoModal({
  changeState,
  overview,
  state,
  title,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps): JSX.Element {
  return (
      <Dialog 
        open={state} 
        onOpenChange={() => changeState(!state)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">{title}</DialogTitle>
            <DialogDescription className="line-clamp-3">
              {overview}
            </DialogDescription>
            <div className="flex gap-x-2 items-center">
              <p>{release}</p>
              <p className="border py-o.5 px-1 border-gray-200 rounded">
                {age}+
              </p>
              <p className="my-3">{duration}h</p>
            </div>
          </DialogHeader>
          <iframe 
            src={youtubeUrl} 
            height={250} 
            className="w-full" 
            allowFullScreen={true}
          />
        </DialogContent>
      </Dialog>
  )
}