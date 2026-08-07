export default function FloatingGlow() {
  return (
    <>
      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[180px]
        pointer-events-none
      "
      />

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[450px]
        w-[450px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-violet-500/10
        blur-[140px]
        pointer-events-none
      "
      />
    </>
  );
}
