interface Props {
  onClick: () => void;
}

export default function Logo({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="На главную"
      className="
        text-[27px]
        font-light
        uppercase
        tracking-[0.42em]
        text-[#092B32]
        transition-colors
        duration-300
        hover:text-[#2F6873]
      "
    >
      MIMISU
    </button>
  );
}