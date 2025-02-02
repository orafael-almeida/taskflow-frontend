import * as React from "react";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-[#C4D0EB] bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between items-center pt-5 pl-6 pr-3",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-wide text-slate-700",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-6 pt-3 text-slate-600 text-sm", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center px-6 pb-2 mt-3 text-slate-600 text-sm",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardContent };

interface NoteCardProps {
  title: string;
  content: string;
  date: string;
}

export const NoteCard = ({ title, content, date }: NoteCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <EllipsisVertical />
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <p>{date}</p>
    </CardFooter>
  </Card>
);

export const UpdateCard = () => (
  <Card>
    <CardHeader className="pr-6">
      <Input />
    </CardHeader>
    <CardContent>
      <Textarea className="resize-none" />
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-[#202D40] hover:bg-[#334977]">
        Add Note
      </Button>
    </CardFooter>
  </Card>
);
