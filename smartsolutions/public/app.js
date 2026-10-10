import { business, whatsappUrl } from './config.js';
const $ = s => document.querySelector(s);
const photos = ['Cores para todos os estilos','Detalhes que fazem a diferença','Seu próximo upgrade','Um olhar para cada detalhe','Simplicidade que surpreende','Mais cor no seu dia','Design em cada ângulo','Escolha o seu favorito','De perto, ainda melhor'];
const track = $('#phone-track');
for (let copy=0;copy<2;copy++) photos.forEach((caption,i)=>{
  const card = document.createElement('figure'); card.className='phone-card'+(copy?' duplicate':'');
  if(copy) card.setAttribute('aria-hidden','true');
  card.innerHTML=`<img src="/assets/aparelho-${i+1}.webp" alt="${caption} — foto de celulares da loja" width="900" height="1600" loading="lazy"><figcaption>${caption} <span aria-hidden="true">↗</span></figcaption>`;
  track.append(card);
});
const icon = '<svg width="30" height="34" viewBox="0 0 30 34" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="5" y="2" width="20" height="30" rx="4"/><path d="M11 6h8M12 28h6"/>';
const services=[['Tela & vidro','Volte a enxergar todos os detalhes. Avaliação e substituição de telas danificadas.','<path d="m16 10-5 7 8-1-5 7"/>'],['Bateria & carga','Mais autonomia para sua rotina. Diagnóstico da bateria e dos conectores de carga.','<rect x="10" y="12" width="10" height="10" rx="1"/>'],['Câmera & áudio','Fotos, chamadas e músicas como devem ser. Avaliação de câmeras e alto-falantes.','<circle cx="15" cy="17" r="5"/>'],['Placa & líquidos','Cuidado técnico para falhas complexas e aparelhos que tiveram contato com líquidos.','<path d="M15 10s-5 6-5 9a5 5 0 0 0 10 0c0-3-5-9-5-9Z"/>'],['Sistema & desempenho','Atualização e restauração para resolver falhas e recuperar a experiência de uso.','<path d="m12 12-4 5 4 5m6-10 4 5-4 5"/>'],['Reforma & diagnóstico','Entenda o problema e as possibilidades de recuperação antes de decidir pelo reparo.','<path d="m10 17 3 3 7-7"/>']];
$('#services').innerHTML=services.map(([name,desc,path])=>`<article class="service-card"><span class="service-icon">${icon}${path}</svg></span><h3>${name}</h3><p>${desc}</p><a class="text-link" href="#contato" data-message="Olá, M&G Teck! Quero um orçamento para ${name}.">Solicitar orçamento ↗</a></article>`).join('');
const faqs=[['Como consulto preços e disponibilidade?','Fale com a loja e informe o modelo ou acessório desejado. Cores, condições do aparelho, valores e formas de pagamento são confirmados no atendimento. As fotos não garantem disponibilidade atual.'],['Quanto tempo leva um reparo?','O prazo é informado após diagnóstico e depende da peça e da complexidade. Pergunte sobre serviços elegíveis para até 48 horas: o prazo só pode ser confirmado após recebimento, diagnóstico, aprovação e disponibilidade das peças.'],['O diagnóstico tem custo?','Consulte a condição da avaliação antes de deixar seu aparelho. Qualquer cobrança deve ser informada previamente.'],['Os serviços têm garantia?','As condições de garantia aplicáveis ao serviço e às peças serão apresentadas no orçamento e no documento de atendimento, sem afastar os direitos do consumidor.'],['Vocês oferecem coleta e entrega?','Consulte a região atendida, os horários, a disponibilidade e eventuais taxas diretamente com a loja antes de agendar.'],['Como ficam os meus dados?','Faça backup quando possível. Senhas só devem ser fornecidas se indispensáveis aos testes. Não envie senhas, documentos ou dados sensíveis pelo formulário.'],['É possível recuperar meu acesso?','A análise é feita somente para o proprietário legítimo ou representante autorizado. Apple, Google, MDM e PayJoy podem exigir comprovantes e autorização dos responsáveis. Não há promessa de resultado que dependa de terceiros.']];
$('#faqs').innerHTML=faqs.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');
$('#year').textContent=new Date().getFullYear();
const menu=$('.menu-toggle');
function closeMenu(){menu.setAttribute('aria-expanded','false');$('#menu').classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));$('#menu').classList.toggle('open',open);});
$('#menu').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
const pause=$('#pause-carousel');
if(matchMedia('(prefers-reduced-motion: reduce)').matches){pause.hidden=true;}
pause.addEventListener('click',()=>{const paused=$('.carousel').classList.toggle('paused');pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'Retomar carrossel ▷':'Pausar carrossel Ⅱ';});
document.querySelectorAll('[data-message]').forEach(a=>{const url=whatsappUrl(a.dataset.message);if(url){a.href=url;a.target='_blank';a.rel='noopener noreferrer';}});
if(business.whatsapp){const link=document.createElement('a');link.className='text-link';link.href=whatsappUrl('Olá, M&G Teck! Gostaria de atendimento.');link.textContent='Falar com o responsável ↗';link.target='_blank';link.rel='noopener noreferrer';$('#contact-links').append(link);const phone=document.createElement('a');phone.href=`tel:+${business.whatsapp}`;phone.textContent=business.phoneDisplay;phone.className='text-link';$('#contact-links').append(document.createElement('br'),phone);$('#submit-contact').innerHTML='Continuar no WhatsApp <span>↗</span>';}
else{$('#contact-links').innerHTML='<p>Contato da loja em atualização.</p>';}
business.groups.forEach(group=>{if(!/^https:\/\/(chat\.whatsapp\.com|(?:www\.)?whatsapp\.com)\//.test(group.url))return;const a=document.createElement('a');a.href=group.url;a.textContent=group.name+' ↗';a.className='community-link';a.target='_blank';a.rel='noopener noreferrer';$('#groups').append(a);});
const form=$('#contact-form');
function updateForm() {
  const authorized=form.elements.interesse.value==='Recuperação de acesso';
  const diagnostic=['Assistência técnica','Recuperação de acesso','Coleta e entrega'].includes(form.elements.interesse.value);
  $('#ownership-field').hidden=!authorized;
  form.elements.proprietario.required=authorized;
  form.elements.proprietario.disabled=!authorized;
  $('#diagnostic-fields').hidden=!diagnostic;
  $('#diagnostic-fields').disabled=!diagnostic;
}
form.elements.interesse.addEventListener('change',updateForm);
updateForm();
form.addEventListener('submit',e=>{
  e.preventDefault();
  for (const name of ['nome','mensagem']) {
    const field=form.elements[name];
    field.setCustomValidity(field.value.trim() ? '' : 'Preencha este campo para continuar.');
  }
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const lines=[`Olá, ${business.name}! Meu nome é ${data.get('nome').trim()}.`, `Interesse: ${data.get('interesse')}`, `Modelo: ${data.get('modelo').trim()||'Quero orientação'}`];
  if(data.get('telefone')?.trim())lines.push(`Meu WhatsApp: ${data.get('telefone').trim()}`);
  for(const [field,label] of [['marca','Marca'],['liga','O aparelho liga'],['estado','Estado físico'],['liquido','Contato com líquido'],['atendimento','Atendimento']]){
    if(data.has(field))lines.push(`${label}: ${data.get(field)}`);
  }
  lines.push(data.get('mensagem').trim());
  if(data.get('proprietario'))lines.push('Confirmo que sou proprietário legítimo ou representante autorizado.');
  const message=lines.join('\n');
  const url=whatsappUrl(message);
  if(url){window.location.assign(url);}else{$('#prepared-message').value=message;$('#copy-status').textContent='';$('#message-dialog').showModal();}
});
for(const name of ['nome','mensagem'])form.elements[name].addEventListener('input',()=>form.elements[name].setCustomValidity(''));
$('.dialog-close').addEventListener('click',()=>$('#message-dialog').close());
$('#copy-message').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#prepared-message').value);$('#copy-status').textContent='Mensagem copiada.';}catch{$('#prepared-message').select();$('#copy-status').textContent='Selecione e copie o texto da mensagem.';}});

