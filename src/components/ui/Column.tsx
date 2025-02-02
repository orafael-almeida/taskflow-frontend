import { NoteCard, UpdateCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { AddNotesButton } from "./button";

interface ColumnProps {
  title: string;
  color: string;
}

const Column = ({ title, color }: ColumnProps) => {
  const colors: Record<string, string> = {
    red: "text-red-200",
    blue: "text-blue-200",
    green: "text-green-200",
    yellow: "text-yellow-200",
  };
  return (
    <div>
      <div className="flex gap-2 mb-4 items-center mt-4">
        <Circle
          className={cn(colors[color] || "text-gray-200", "h-[20px]")}
          fill="currentColor"
        />
        <h3 className="text-base ">{title}</h3>
      </div>
      <div className="bg-[#F2F6FF] dark:bg-gray-900 h-max space-y-4 p-4 rounded-xl flex flex-col ">
        <NoteCard
          title="Estudar Golang"
          date="22/01/2025"
          content="Explorar a sintaxe, entender melhor goroutines e channels, e testar na prática com mais alguns exemplos. Se der tempo, começar um projetinho simples pra fixar o aprendizado."
        />
        <UpdateCard />
        <AddNotesButton />
      </div>
    </div>
  );
};

export default Column;
