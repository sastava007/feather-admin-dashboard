import { ReactNode } from "react";
import { classNames } from "./Utils";

export const StatusPill: ReactNode = ({ value }: { value: string }) => {
  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        value.startsWith("ACTIVE") ? "bg-green-100 text-green-700" : null,
        value.startsWith("PENDING") ? "bg-yellow-100 text-yellow-700" : null,
        value.startsWith("CANCELLED") ? "bg-red-100 text-red-700" : null,
        value.startsWith("DROPPED_OUT")? "bg-black text-white" : null,
      )}
    >
      {value}
    </span>
  );
};
