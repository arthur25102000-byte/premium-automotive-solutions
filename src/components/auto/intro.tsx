import { useEffect, useState } from "react";
import logoFull from "@/assets/logo-autovf-dark.png";

// abertura do Figma ("Abertura 1–3", agora em fundo branco): a barra dourada sobe, AUTO e VF saem de trás dela,
// depois as duas metades da tela se abrem na diagonal da barra. Uma vez por sessão.
const seenKey = "autovf-intro";
// vai no <head> e roda antes da pintura: se já viu nesta sessão, a abertura nem aparece;
// se não viu, intro-pending cobre a tela de escuro até a abertura montar (sem piscar a home)
export const introSkipScript = `try{if(location.pathname==="/"){var c=document.documentElement.classList;if(sessionStorage.getItem("${seenKey}"))c.add("intro-seen");else if(!matchMedia("(prefers-reduced-motion: reduce)").matches)c.add("intro-pending");sessionStorage.setItem("${seenKey}","1")}}catch(e){}`;
// navegação interna de volta à home não repete a abertura
let played = false;

export function Intro() {
  const [visible, setVisible] = useState(!played);
  useEffect(() => {
    played = true;
    document.documentElement.classList.remove("intro-pending");
    const timer = window.setTimeout(() => setVisible(false), 3600);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return (
    <div className="intro" aria-hidden="true" onClick={() => setVisible(false)}>
      <div className="intro-half intro-left" />
      <div className="intro-half intro-right" />
      <div className="intro-logo">
        {(["auto", "vf", "bar", "sub"] as const).map((piece) => (
          <div key={piece} className={`intro-mask intro-${piece}`}>
            <img src={logoFull} width={760} height={234} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
