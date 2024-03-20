"use client";

import { Board } from "@prisma/client";
import { BoardOption } from "./board-options";
import { BoardTitleForm } from "./board-title-form";

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-40 bg-black/50 fixed top-14 flex items-center gap-x-4 px-6 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOption id={data.id} />
      </div>
    </div>
  );
};
