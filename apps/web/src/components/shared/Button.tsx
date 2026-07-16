type ButtonProps = {
  children: React.ReactNode;
  variant?: "gold" | "outline";
};

export default function Button({
  children,
  variant = "gold",
}: ButtonProps) {
  const styles = {
    gold:
      "rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]",

    outline:
      "rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black",
  };

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}