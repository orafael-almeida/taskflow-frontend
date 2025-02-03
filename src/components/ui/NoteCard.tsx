import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Trash, EllipsisVertical, CircleArrowRight } from "lucide-react";
import { Status } from "@/store/useNotesStore";

interface NoteCardProps {
  noteId: string;
  title: string;
  status: Status;
  content: string;
  date: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onUpdateStatus?: () => void;
}

export const NoteCard = ({
  title,
  status,
  content,
  date,
  onEdit,
  onDelete,
  onUpdateStatus,
}: NoteCardProps) => {
  return (
    <Card className="h-[190px] w-[380px]">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="break-words overflow-auto">{title}</CardTitle>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onEdit} className="cursor-pointer">
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onDelete}
              className="text-red-600 cursor-pointer data-[highlighted]:bg-red-100 data-[highlighted]:text-red-600"
            >
              <Trash className="mr-2 h-4 w-4" />
              Apagar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="break-words h-[90px] overflow-hidden">
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>{date}</p>
        {status !== "completed" && (
          <Button
            variant="ghost"
            className="h-max py-1 px-2"
            onClick={onUpdateStatus}
          >
            <CircleArrowRight className="h-5 w-5" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
