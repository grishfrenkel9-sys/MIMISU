interface Props {
  onClick: () => void;
}

export default function Logo({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-xl font-light tracking-[0.35em]"
    >
      MIMISU
    </button>
  );
}
