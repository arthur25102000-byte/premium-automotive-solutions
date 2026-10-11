// Dados de contato da AUTO/VF. Preencher com os dados reais antes de publicar.
// whatsapp: só números, com país e DDD (ex.: 5562999999999). Vazio = botões levam ao formulário.
// instagram: endereço completo do perfil. Vazio = ícone escondido.
export const contact = {
  whatsapp: "",
  instagram: "",
  phone: "",
  email: "",
  address: "",
};

export function whatsappLink(message: string) {
  return contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
    : null;
}
