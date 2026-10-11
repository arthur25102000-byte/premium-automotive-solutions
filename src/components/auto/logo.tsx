import logoFull from "@/assets/logo-autovf.png";
import logoWordmark from "@/assets/logo-autovf-wordmark.png";
import logoVf from "@/assets/logo-vf.png";

// full: com "Premium Cars" (rodapé); wordmark: só AUTO/VF, legível no cabeçalho; compact: monograma VF
export function Logo({ variant = "full" }: { variant?: "full" | "wordmark" | "compact" }) {
  if (variant === "compact")
    return (
      <img src={logoVf} width={400} height={218} className="vf-logo" alt="AUTO/VF Premium Cars" />
    );
  if (variant === "wordmark")
    return (
      <img
        src={logoWordmark}
        width={760}
        height={205}
        className="brand-logo"
        alt="AUTO/VF Premium Cars"
      />
    );
  return (
    <img
      src={logoFull}
      width={760}
      height={234}
      className="brand-logo"
      alt="AUTO/VF Premium Cars"
    />
  );
}
