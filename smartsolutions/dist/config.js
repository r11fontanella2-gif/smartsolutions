export const business = {
  name: 'M&G Teck',
  legalName: 'M&G Teck Ltda.',
  siteUrl: 'https://mg-teck.muddysiren16.chatgpt.site',
  // Preencher somente com os contatos confirmados pelo responsável pela loja.
  whatsapp: '5521990881415',
  phoneDisplay: '(21) 99088-1415',
  groups: [
    { name: 'Canal de ofertas de celulares', url: 'https://whatsapp.com/channel/0029Vb70GyhHrDZYvGrN3z32' },
    { name: 'Entrar no grupo de WhatsApp', url: 'https://chat.whatsapp.com/DCbKdvCvOO|Faq8QH0rgzl?s=SW&p=a&mlu=4&ilr=4' },
  ],
};
export function whatsappUrl(message) {
  return business.whatsapp ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}` : null;
}
