"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FiSmile } from "react-icons/fi";

export function FinalProject() {
  return (
    <div className="fixed bottom-4 left-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <FiSmile className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Final Project Front-End Developer</DialogTitle>
            <DialogDescription>
              oleh Fauzi Ramadhani - 17 Agustus 2025
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>
              Website ini dipersembahkan untuk Final Project Front-End Developer dari Coding Studio.
            </p>
          </div>
          <DialogFooter className="flex items-center w-full sm:justify-start">
            <div className="flex items-center gap-x-2 w-full">
              <Avatar>
                <AvatarImage src="/codingstudio.png" alt="Coding Studio" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <p className="text-xs font-semibold text-gray-500">Coding Studio</p>
              <DialogClose asChild className="ml-auto">
                <Button type="button">
                  Mantap!
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FinalProject;