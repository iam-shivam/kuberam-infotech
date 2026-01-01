import type { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
  color: string;
};

export default function TechCard({ name, icon: Icon, color }: Props) {
  return (
    <div
      className="
        group
        flex items-center gap-3
        px-5 py-3
        rounded-[12px]
        bg-gradient-to-br from-[#1e293b] to-[#0f172a]
        border border-white/10
        hover:border-white/20
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Icon */}
      <span
        className={`
          ${color}
          text-2xl
          transition-transform duration-500 ease-out
          group-hover:rotate-[180deg]
        `}
      >
        <Icon />
      </span>

      {/* Text */}
      <p className="text-white text-lg font-medium whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}
