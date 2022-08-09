async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
SHREK

Escrito por

William Steig & Ted Elliott




SHREK
Era uma vez uma linda
Princesa. Mas ela tinha um encantamento
sobre ela de um tipo terrível que poderia
só ser quebrado pelo primeiro beijo do amor.
Ela foi trancada em um castelo guardado
por um terrível dragão cuspidor de fogo.
Muitos bravos cavaleiros tentaram
libertá-la desta terrível prisão,
mas não prevaleceu. Ela esperou no
fortaleza do dragão na sala mais alta de
a torre mais alta para seu verdadeiro amor
e o primeiro beijo do amor verdadeiro. (risos)
Como se isso fosse acontecer. o que
uma carga de - (descarga do vaso sanitário)

Allstar - por Smashmouth começa a tocar. Shrek continua sua
dia. Enquanto em uma cidade próxima, os moradores se reúnem para ir
depois do ogro.

NOITE - PERTO DA CASA DE SHREK

MAN1
Acha que está lá?

MAN2
Tudo bem. Vamos obtê-lo!

MAN1
Uau. Aguentar. Você sabe o que isso
coisa pode fazer com você?

MAN3
Sim, vai moer seus ossos por isso
pão.

Shrek se esgueira por trás deles e ri.

SHREK
Sim, bem, na verdade, isso seria um
gigante. Agora, ogros, oh, eles são muito piores.
Eles vão fazer um terno de seu recém-
pele descascada.

HOMENS
Não!

SHREK
Eles vão raspar seu fígado. Aperte o
geléia de seus olhos! Na verdade, é
muito bom em torradas.

MAN1
De volta! De volta, fera! De volta! Eu te aviso!
(acena a tocha para Shrek.)

Shrek calmamente lambe os dedos e apaga a tocha. o
os homens se afastam dele. Shrek ruge muito alto e longo
e sua respiração extingue todas as tochas restantes até que o
os homens estão no escuro.

SHREK
Esta é a parte em que você foge.
(Os homens correm para fugir. Ele ri.)
E fique de fora! (olha para baixo e pega
até um pedaço de papel. Lê.) "Procurado.
Criaturas de contos de fadas." (Ele suspira e
joga o papel por cima do ombro.)


O PRÓXIMO DIA

Há uma linha de criaturas de contos de fadas. O chefe da guarda
senta em uma mesa pagando as pessoas por trazerem as criaturas dos contos de fadas
para ele. Há gaiolas ao redor. Algumas das pessoas na fila
são Peter Pan, que está carregando Sininho em uma gaiola, Gipetto
que está carregando Pinóquio, e um fazendeiro que está carregando os três
pequenos porcos.

GUARDA
Tudo bem. Este está cheio. Pegue
um jeito! Mova-o junto. Vamos! Levante-se!


PROTETOR DE CABEÇA
Próximo!

GUARDA
(pegando a vassoura de bruxa) Dá-me isso!
Seus dias de vôo acabaram. (quebra o
vassoura ao meio)

PROTETOR DE CABEÇA
São 20 moedas de prata para a bruxa.
Próximo!

GUARDA
Levante-se! Vamos!

PROTETOR DE CABEÇA
Vinte peças.

URSINHO
(chorando) Esta gaiola é muito pequena.

ASNO
Por favor, não me entregue. Eu nunca vou
ser teimoso novamente. Eu posso mudar. Por favor!
Me dê outra chance!

VELHA
Ah, cale a boca. (empurra a corda)

ASNO
Oh!

PROTETOR DE CABEÇA
Próximo! O que voce conseguiu?

GIPETTO
Este pequeno boneco de madeira.

PINÓQUIO
Eu não sou um fantoche. Eu sou um menino de verdade. (seu
nariz cresce)

PROTETOR DE CABEÇA
Cinco xelins pelo brinquedo possuído.
Leve-o embora.

PINÓQUIO
Pai, por favor! Não os deixe fazer isso!
Ajude-me!

Gipetto pega o dinheiro e vai embora. A velha avança
para a mesa.

PROTETOR DE CABEÇA
Próximo! O que voce conseguiu?

VELHA
Bem, eu tenho um burro falante.

PROTETOR DE CABEÇA
Certo. Bem, isso é bom para dez xelins,
se você puder provar isso.

VELHA
Oh, vá em frente, amiguinho.

Burro apenas olha para ela.

PROTETOR DE CABEÇA
Nós iremos?

VELHA
Oh, oh, ele é apenas... ele é apenas um pouco
nervoso. Ele é realmente um tagarela.
Fale, seu idiota cabeça-dura...

PROTETOR DE CABEÇA
É isso. Já ouvi o suficiente. Guardas!


VELHA
Não, não, ele fala! Ele faz. (finge
ser Burro) eu posso falar. eu amo
conversa. Eu sou a coisa mais falante
você já viu.

PROTETOR DE CABEÇA
Tire-a da minha vista.

VELHA
Não não! Juro! Oh! Ele pode falar!

Os guardas agarram a velha e ela luta com eles. Um
de suas pernas voa para fora e chuta Sininho para fora do Peter Pan
mãos, e sua gaiola cai na cabeça do Burro. Ele fica aspergido
com pó de fada e ele é capaz de voar.

ASNO
Ei! Eu posso voar!

PETER PAN
Ele pode voar!

3 PORQUINHOS
Ele pode voar!

PROTETOR DE CABEÇA
Ele pode falar!

ASNO
Há, há! Isso mesmo, idiota! Agora eu sou
um burro voador e falante. Você pode
vi uma mosca doméstica, talvez até uma supermosca
mas eu aposto que você nunca viu um burro
voe. Há, há! (o pó mágico começa
para se desgastar) Uh-oh. (ele começa a afundar
para o chão.)

Ele bate no chão com um baque.

PROTETOR DE CABEÇA
Aproveite-o! (O burro começa a correr.)
Depois dele!

GUARDAS
Ele está fugindo! Pegue ele! Deste jeito!
Virar!

Burro continua correndo e ele finalmente encontra Shrek. Literalmente.
Shrek se vira para ver quem esbarrou nele. Burro parece assustado
por um momento, ele vê os guardas vindo pelo caminho. Ele
rapidamente se esconde atrás de Shrek.

PROTETOR DE CABEÇA
Você aí. Ogro!

SHREK
Sim?

PROTETOR DE CABEÇA
Por ordem de Lord Farquaad estou autorizado
para colocá-lo tanto sob prisão e transporte
você a uma instalação de reassentamento designada.


SHREK
Oh sério? Você e que exército?

Ele olha para trás do guarda e o guarda se vira para olhar também
e vemos que os outros homens fugiram. O guarda dobra o rabo
e foge. Shrek ri e volta para seus negócios e
começa a caminhar de volta para sua casa.

ASNO
Posso te dizer uma coisa? Ouço,
você era realmente, realmente, realmente algo
de volta aqui. Incrível!

SHREK
Você está falando com... (ele se vira
e Burro se foi) eu? (ele volta
ao redor e Burro está bem na frente
dele.) Uau!

ASNO
Sim. Eu estava falando com você. Posso dizer
você que você que você foi ótimo de volta
aqui? Esses guardas! Eles pensaram que
foi tudo isso. Então você apareceu,
e bam! Eles estavam tropeçando em si mesmos
como bebês na floresta. Isso realmente
me fez sentir bem em ver isso.

SHREK
Oh isso é ótimo. Sério.

ASNO
Cara, é bom ser livre.

SHREK
Agora, por que você não vai comemorar o seu
liberdade com seus próprios amigos? Hum?


ASNO
Mas, uh, eu não tenho nenhum amigo. E
Eu não vou lá fora sozinho. Ei,
espere um minuto! Tive uma ótima ideia! Eu vou
ficar com você. Você é mau, verde,
máquina de luta. Juntos vamos assustar
o cuspe de qualquer um que cruze
nós.

Shrek se vira e olha Burro por um momento antes de rugir muito
ruidosamente.

ASNO
Uau! Isso foi realmente assustador. Se você
não se importe que eu diga, se isso não acontecer
trabalho, sua respiração certamente vai ficar
o trabalho feito, porque você definitivamente
preciso de alguns Tic Tacs ou algo assim, porque
seu hálito fede! Você quase queimou
o cabelo do meu nariz, assim como o
tempo... (Shrek cobre a boca, mas Burro
continua a falar, então Shrek remove
sua mão.) ... então eu comi alguns podres
bagas. Eu tive gases fortes vazando
fora da minha bunda naquele dia.

SHREK
Por que você está me seguindo?

ASNO
Eu vou te dizer por quê. (cantando) Porque
Estou sozinho, não há ninguém aqui ao lado
eu, meus problemas todos se foram, há
ninguém para me ridicularizar, mas você tem que ter
fé...

SHREK
Pára de cantar! Não é de admirar que você não
tem algum amigo.

ASNO
Uau. Só um verdadeiro amigo seria isso
cruelmente honesto.

SHREK
Ouça, burrinho. Dê uma olhada
Eu. O que eu sou?

ASNO
(olha todo o caminho para Shrek) Uh ... realmente
alta?

SHREK
Não! Eu sou um ogro! Você sabe. "Pegue seu
tocha e forcados." Não é isso
incomodá-lo?

ASNO
Não.

SHREK
Sério?

ASNO
Sério sério.

SHREK
Oh.

ASNO
Cara, eu gosto de você. Qual é o seu nome?

SHREK
Ah, Shrek.

ASNO
Shrek? Bem, você sabe o que eu gosto sobre
você, Shrek? Você tem aquele tipo de eu-não-me importo-o-que-ninguém-pensa-de-mim
coisa. Eu gosto disso. Eu respeito isso,
Shrek. Você está bem. (Eles vêm
uma colina e você pode ver a cabana de Shrek.)
Uau! Olhe para isso. Quem gostaria de viver
no lugar assim?

SHREK
Essa seria a minha casa.

ASNO
Oh! E é adorável! Apenas bonita.
Você sabe que é um grande decorador.
É incrível o que você fez com tal
um orçamento modesto. Eu gosto daquele pedregulho.
Essa é uma bela pedra. eu acho que você
não entretém muito, não é?

SHREK
Eu gosto da minha privacidade.

ASNO
Sabe, eu também. Isso é outra coisa
temos em comum. Como eu odeio quando
você tem alguém na sua cara. Você tem
tentando dar-lhes uma dica, e eles
não vai sair. Há aquele silêncio constrangedor.
(silêncio constrangedor) Posso ficar com você?


SHREK
Uh o quê?

ASNO
Posso ficar com você, por favor?

SHREK
(sarcasticamente) Claro!

ASNO
Sério?

SHREK
Não.

ASNO
Por favor! Eu não quero voltar lá!
Você não sabe como é ser
considerado uma aberração. (pausa enquanto ele
olha para Shrek) Bem, talvez sim.
Mas é por isso que temos que ficar juntos.
Você tem que me deixar ficar! Por favor! Por favor!


SHREK
Ok! Ok! Mas uma noite apenas.

ASNO
Ah! Obrigada! (ele corre para dentro da cabana)


SHREK
O que você está...? (O burro salta para
uma cadeira.) Não! Não!

ASNO
Isso vai ser divertido! Podemos ficar acordados
tarde, trocando histórias viris, e em
de manhã estou fazendo waffles.

SHREK
Oh!

ASNO
Onde, uh, eu durmo?

SHREK
(irritado) Lá fora!

ASNO
Oh, bem, eu acho que é legal. Quero dizer,
Eu não te conheço, e você não sabe
eu, então acho que fora é melhor, você
conhecer. Aqui vou eu. Boa noite. (Shrek
bate a porta.) (suspiro) Quer dizer, eu faço
como o ar livre. Eu sou um burro. Eu era
nascido fora. eu vou estar apenas sentado por
me fora, eu acho, você sabe. Por
eu mesmo, fora. eu estou sozinho... há
ninguém aqui ao meu lado...

CASA DO SHREK - NOITE

Shrek está se preparando para o jantar. Ele se senta e acende
uma vela feita de cera de ouvido. Ele começa a comer quando ouve um
ruído. Ele se levanta com um huff.

SHREK
(para Burro) Eu pensei que eu te disse para
fique do lado de fora.

ASNO
(da janela) Estou do lado de fora.

Há outro barulho e Shrek se vira para encontrar a pessoa que
fez o barulho. Ele vê várias sombras se movendo. Ele finalmente se transforma
e vê 3 ratos cegos em sua mesa.

RATO CEGO1
Bem, senhores, está muito longe do
fazenda, mas que escolha temos?


RATO CEGO 2
Não é casa, mas vai ficar bem.


GORDO
(pulando em uma lesma) Que cama linda.


SHREK
Entendi. (Pega um mouse, mas ele escapa
e cai em seu ombro.)

GORDO
Encontrei um pouco de queijo. (morde o Shrek
orelha)

SHREK
Ai!

GORDO
Blá! Coisas horríveis.

RATO CEGO1
É você, Gordo?

GORDO
Como você sabia?

SHREK
O suficiente! (ele pega os 3 ratos) O que são
você está fazendo na minha casa? (Ele é atropelado
por trás e ele deixa cair os ratos.)
Ei! (ele se vira e vê os Sete Anões
com a Branca de Neve na mesa.) Ah, não,
não não. Morto fora da mesa.


ANÃO
Onde devemos colocá-la? o
cama está tomada.

SHREK
Huh?

Shrek vai até o quarto e abre a cortina.
O Lobo Mau está sentado na cama. O lobo apenas olha
dele.

LOBO MAU
O que?

LAPSO DE TEMPO

Shrek agora tem o Lobo Mau pela gola e está arrastando
ele para a porta da frente.

SHREK
Eu moro em um pântano. Eu coloquei sinais. Eu estou
um ogro aterrorizante! O que eu tenho que
obter um pouco de privacidade? (Ele abre o
porta da frente para jogar o lobo fora e
ele vê que todas as Fadas coletadas
As Criaturas do Conto estão em sua terra.) Oh,
não. Não! Não!

Os 3 ursos estão sentados ao redor do fogo, o flautista está tocando seu
cachimbo e os ratos estão todos correndo para ele, alguns elfos estão dirigindo
tráfego aéreo para que as fadas e bruxas possam pousar...etc.


SHREK
O que você está fazendo no meu pântano? (isto
ecoa e todos ficam em silêncio.)


Suspiros são ouvidos por toda parte. As 3 fadas boas se escondem dentro de um
barraca.

SHREK
Tudo bem, saia daqui. Todos vocês,
Mova isso! Vamos! Vamos lá! Hapaya!
Hapaya! Ei! Rapidamente. Vamos! (mais
anões correm para dentro de casa) Não, não!
Não não. Não está lá. Não está lá. (elas
feche a porta nele) Oh! (vira para
olha Burro)

ASNO
Ei, não olhe para mim. eu não convidei
eles.

PINÓQUIO
Oh, Deus, ninguém nos convidou.

SHREK
O que?

PINÓQUIO
Fomos obrigados a vir aqui.

SHREK
(espantado) Por quem?

PEQUENO PORCO
Senhor Farquaad. Ele bufou e ele bufou
e ele... assinou um aviso de despejo.


SHREK
(suspiro pesado) Tudo bem. Quem sabe onde
esse cara Farquaad é?

Todos se olham, mas ninguém responde.

ASNO
Ah, eu sei. Eu sei onde ele está.

SHREK
Alguém mais sabe onde encontrar
dele? Qualquer um?

ASNO
Eu! Eu!

SHREK
Alguém?

ASNO
Oh! Ah, me escolha! Oh eu sei! Eu sei!
Eu, eu!

SHREK
(suspiro) Ok, tudo bem. Atenção, todas as fadas
coisas de conto. Não fique confortável.
Suas boas-vindas estão oficialmente esgotadas.
Na verdade, eu vou ver esse cara Farquaad
agora e tirar todos da minha terra
e de volta de onde você veio! (Pausa.
Então a multidão vai à loucura.) Oh! (para Burro)
Você! Você vem comigo.

ASNO
Tudo bem, isso é o que eu gosto de ouvir,
cara. Shrek e Burro, dois robustos
amigos, em uma cidade grande turbilhão
aventura. Eu amo isso!

ASNO
(cantando) Na estrada novamente. Cante isso
comigo, Shrek. Eu não posso esperar para obter
Na estrada novamente.

SHREK
O que eu disse sobre cantar?

ASNO
Posso assobiar?

SHREK
Não.

ASNO
Posso cantarolar?

SHREK
Tudo bem, cantarolar.

Burro começa a cantarolar 'On the Road Again'.

DULOC - COZINHA

Um homem mascarado está torturando o Gingerbread Man. Ele está continuamente
mergulhando-o em um copo de leite. Lord Farquaad entra.

FARQUAAD
É o bastante. Ele está pronto para falar.


O Gingerbread Man é retirado do leite e derrubado
em uma assadeira. Farquaad ri enquanto caminha até o
tabela. Porém quando ele chega na mesa vemos que vai
até os olhos. Ele limpa a garganta e a mesa é abaixada.


FARQUAAD
(ele pega as pernas do Gingerbread Man
e brinca com eles) Corra, corra, corra,
o mais rápido que puder. Você não pode pegar
Eu. Eu sou o homem-biscoito.

HOMEM DE GENGIBRE
Você é um monstro.

FARQUAAD
Eu não sou o monstro aqui. Tu es. Você
e o resto daquele lixo de conto de fadas,
envenenando meu mundo perfeito. Agora, diga
Eu! Onde estão os outros?

HOMEM DE GENGIBRE
Coma-me! (Ele cospe leite na boca de Farquaad
olho.)

FARQUAAD
Tentei ser justo com vocês, criaturas.
Agora minha paciência chegou ao fim!
Diga-me ou eu vou... (ele faz como se
puxe os botões do Gingerbread Man)


HOMEM DE GENGIBRE
Não, não, não os botões. Não é minha goma
botões.

FARQUAAD
Tudo bem então. Quem os está escondendo?


HOMEM DE GENGIBRE
Ok, eu vou te dizer. Voce sabe o
homem muffin?

FARQUAAD
O homem do muffin?

HOMEM DE GENGIBRE
O homem dos bolinhos.

FARQUAAD
Sim, eu conheço o homem muffin, que vive
em Drury Lane?

HOMEM DE GENGIBRE
Bem, ela é casada com o homem dos bolinhos.


FARQUAAD
O homem do muffin?

HOMEM DE GENGIBRE
O homem muffin!

FARQUAAD
Ela é casada com o homem muffin.

A porta se abre e o guarda-chefe entra.

PROTETOR DE CABEÇA
Meu Senhor! Nós achamos.

FARQUAAD
Então o que você está esperando? Trazer
em.

Mais guardas entram carregando algo que está coberto por um lençol.
Eles desligam o que quer que seja e removem o lençol. É a Magia
Espelho.

HOMEM DE GENGIBRE
(com admiração) Ahhhh...

FARQUAAD
Espelho mágico...

HOMEM DE GENGIBRE
Não diga nada a ele! (Escolhas do Farquaad
ele e joga ele em uma lata de lixo
com tampa.) Não!

FARQUAAD
Tarde. Espelho, espelho na parede.
Este não é o reino mais perfeito
de todos eles?

ESPELHO
Bem, tecnicamente você não é um rei.


FARQUAAD
Ah, Thelonius. (Thelonius levanta um
espelho de mão e o esmaga com seu
punho.) Você estava dizendo?

ESPELHO
O que quero dizer é que você ainda não é um rei.
Mas você pode se tornar um. Tudo o que tens
fazer é casar com uma princesa.

FARQUAAD
Prossiga.

ESPELHO
(ri nervosamente) Então, apenas sente-se
e relaxe, meu senhor, porque é hora
para você conhecer as solteiras elegíveis de hoje.
E aqui estão eles! Número de despedida de solteira
um é um recluso mentalmente abusado de
um reino muito, muito distante. Ela gosta de sushi
e banheira de hidromassagem a qualquer momento. Seus hobbies
incluem cozinhar e limpar para ela
duas irmãs más. Por favor, dê as boas-vindas à Cinderela.
(mostra a foto da Cinderela) Bachelorette
número dois é uma garota vestindo capa de
a terra da fantasia. Embora ela viva
com sete outros homens, ela não é fácil.
Apenas beije seus lábios mortos e congelados e
descobrir o que um fio vivo ela é. Venha
sobre. Desista da Branca de Neve! (mostra
foto da Branca de Neve) E por último, mas
certamente não é o último, número de despedida de solteira
três é uma ruiva ardente de um dragão guardado
castelo cercado por lava fervente!
Mas não deixe que isso te esfrie. Ela é
uma pistola carregada que gosta de pina colads
e ser pego pela chuva. Seu
para o resgate, princesa Fiona! (Mostra
foto da princesa Fiona) Assim será
ser solteira número um, solteira
número dois ou despedida de solteira número três?


GUARDAS
Dois! Dois! Três! Três! Dois! Dois! Três!


FARQUAAD
Três? Um? Três?

TELÔNIO
Três! (levanta 2 dedos) Escolha o número
três, meu senhor!

FARQUAAD
Ok, ok, uh, número três!

ESPELHO
Lord Farquaad, você escolheu a princesa
Fiona.

FARQUAAD
Princesa Fiona. Ela é perfeita. Tudo que eu
tem que fazer é encontrar alguém que
poder ir...

ESPELHO
Mas eu provavelmente deveria mencionar o pequeno
coisa que acontece à noite.

FARQUAAD
Eu vou fazer isso.

ESPELHO
Sim, mas depois do pôr do sol...

FARQUAAD
Silêncio! vou fazer essa princesa Fiona
minha rainha, e DuLoc finalmente terá
o rei perfeito! Capitão, monte
seus melhores homens. Nós vamos ter
um torneio. (sorri maliciosamente)

Estacionamento DuLoc - Seção Lancelot

Shrek e Burro saem do campo que fica ao lado do estacionamento
muito. O castelo em si tem cerca de 40 andares.

ASNO
Mas é isso. É isso aí.
Isso é DuLoc. Eu disse que iria encontrá-lo.


SHREK
Então, deve ser o castelo do Lorde Farquaad.


ASNO
Uh-uh. Esse é o lugar.

SHREK
Você acha que talvez ele esteja compensando
para algo? (Ele ri, mas então
geme quando Burro não entende a piada.
Ele continua andando pelo estacionamento
muito.)

ASNO
Ei, espere. Espere, Shrek.

CARA
Depressa, querida. Estamos atrasados. Pressa.


SHREK
Ei você! (O atendente, que está vestindo
uma cabeça gigante que se parece com Lord Farquaad,
grita e começa a correr pela
fileiras de corda para chegar ao portão da frente
para fugir de Shrek.) Espere um segundo.
Olha, eu não vou comer você. Eu acabei de
- - Eu só - - (Ele suspira e então começa
andando direto pelas fileiras. o
atendente esbarra em uma parede e cai
baixa. Shrek e Burro olham para ele então
continue em DuLoc.)

DULO

Eles olham em volta, mas tudo está quieto.

SHREK
Está quieto. Muito quieto. Onde está todo mundo?


ASNO
Ei, olhe para isso!

Burro corre e puxa uma alavanca que está presa a uma caixa
marcado 'Informações'. A música acaba e então as portas da caixa
Abra. Há pequenas pessoas de madeira dentro e eles começam
cantar.

PESSOAS DE MADEIRA
Bem-vindo ao DuLoc uma cidade tão perfeita


Aqui temos algumas regras

Vamos deitá-los

Não faça ondas, fique na linha

E nós vamos nos dar bem

DuLoc é o lugar perfeito

Por favor, fique longe da grama

Engraxe seus sapatos, limpe seu... rosto

DuLoc é, DuLoc é

DuLoc é o lugar perfeito.

De repente, uma câmera tira a foto de Burro e Shrek.

ASNO
Uau! Vamos fazer isso de novo! (prepara
para atropelar e puxar a alavanca novamente)


SHREK
(pega o rabo do Burro e o segura parado)
Não não não não não! Não.

Eles ouvem uma fanfarra de trompete e dirigem-se para a arena.

FARQUAAD
Bravos cavaleiros. Você é o melhor e
mais brilhante em toda a terra. Hoje um
de você deve provar a si mesmo...

Enquanto Shrek e Burro descem o túnel para entrar na arena
Burro está cantarolando a música tema de DuLoc.

SHREK
Tudo bem. Você está indo no caminho certo
para um fundo batido.

ASNO
Me desculpe por isso.

FARQUAAD
Esse campeão terá a honra -
- não, não - - o privilégio de sair
e resgatar a adorável princesa Fiona
da fortaleza de fogo do dragão. Se
por qualquer motivo o vencedor não for bem sucedido,
o primeiro vice-campeão ocupará seu lugar
e assim por diante. Alguns de vocês
pode morrer, mas é um sacrifício que estou disposto
fazer. (aplausos) Deixe o torneio
começar! (Ele percebe Shrek) Oh! O que é
este? É horrível!

SHREK
(volta-se para o Burro e depois volta
em Farquaad) Ah, isso não é muito legal.
É apenas um burro.

FARQUAAD
De fato. Cavaleiros, novo plano! Aquele que
mata o ogro será nomeado campeão!
Tê-lo!

HOMENS
Pegue ele!

SHREK
Oi! Agora vamos! Espere agora. (solavancos
em uma mesa onde há canecas de
Cerveja)

MULTIDÃO
Vá em frente! Pegue ele!

SHREK
(segura uma caneca de cerveja) Não podemos apenas
resolver isso com uma cerveja?

MULTIDÃO
Mate a fera!

SHREK
Não? Tudo bem então. (bebe a cerveja)
Vamos!

Ele pega a caneca e quebra a torneira do barril grande
de cerveja atrás dele. A cerveja sai correndo encharcando o
outros homens e molhando o chão. É como lama agora. slides do Shrek
passa pelos homens e pega uma lança que um dos homens deixou cair.
Quando Shrek começa a lutar, o Burro pula em um dos maiores
barris de cerveja. Ele se liberta de suas cordas e começa a rolar.
Burro consegue esmagar dois homens na lama. Há tanto
luta acontecendo aqui eu não vou entrar em detalhes. Satisfazer
dizer que Shrek chuta o traseiro.

ASNO
Ei, Shrek, me marque! Marque-me!

Shrek vem e bate a cabeça de um homem contra Burros. Shrek
levanta-se nas cordas e interage com a multidão.

SHREK
Sim!

Um homem tenta se esgueirar atrás de Shrek, mas Shrek vira a tempo
e o vê.

MULHER
A cadeira! Dê-lhe a cadeira!

Shrek bate uma cadeira nas costas dos caras. Finalmente todos os homens
estão para baixo. Burro chuta um deles no capacete, e o ding
soa o fim da partida. O público vai à loucura.

SHREK
Oh sim! Ah! Ah! Obrigada! obrigada
muitíssimo! Estou aqui até quinta. Tentar
a vitela! Há, há! (risos)

A risada para quando todos os guardas ligam suas armas
Shrek.

PROTETOR DE CABEÇA
Devo dar a ordem, senhor?

FARQUAAD
Não, eu tenho uma ideia melhor. Povo de
DuLoc, dou-te o nosso campeão!

SHREK
O que?

FARQUAAD
Parabéns, ogro. Você ganhou o
honra de embarcar em um grande e nobre
busca.

SHREK
Busca? Eu já estou em uma busca, uma busca
para recuperar meu pântano.

FARQUAAD
Seu pântano?

SHREK
Sim, meu pântano! Onde você despejou aqueles
criaturas de contos de fadas!

FARQUAAD
De fato. Tudo bem, ogro. eu vou fazer você
um acordo. Vá nesta busca para mim, e
Eu te devolvo seu pântano.

SHREK
Exatamente do jeito que era?

FARQUAAD
Até o último cogumelo coberto de lodo.


SHREK
E os posseiros?

FARQUAAD
Tão bom quanto se foi.

SHREK
Que tipo de busca?

Time Lapse - Burro e Shrek agora estão andando pelo campo
indo para longe de DuLoc. Shrek está mastigando uma cebola.

ASNO
Deixe-me ver se entendi. Você vai
vá lutar contra um dragão e resgatar uma princesa
só para Farquaad te devolver
um pântano que você só não tem porque
ele encheu de aberrações no primeiro
Lugar, colocar. Está certo?

SHREK
Você sabe, talvez haja uma boa razão
burros não devem falar.

ASNO
Eu não entendo. Por que você não apenas puxa
alguma daquelas coisas de ogro nele? Acelerador
ele, sitiar sua fortaleza, mói
seus ossos para fazer o seu pão, todo
viagem de ogro.

SHREK
Ah, eu sei o quê. Talvez eu pudesse ter
decapitou uma aldeia inteira e colocou
suas cabeças em um pique, pegou uma faca,
abra seu baço e beba seu
fluidos. isso parece bom para você?


ASNO
Uh, não, não realmente, não.

SHREK
Para sua informação, há muito
mais aos ogros do que as pessoas pensam.

ASNO
Exemplo?

SHREK
Exemplo? Certo, ogros são como cebolas.
(ele estende a cebola)

ASNO
(cheira a cebola) Eles fedem?

SHREK
Sim não!

ASNO
Eles te fazem chorar?

SHREK
Não!

ASNO
Você os deixa no sol, eles ficam
todo marrom, comece a brotar branquinho
cabelos.

SHREK
Não! Camadas! As cebolas têm camadas. Ogros
tem camadas! As cebolas têm camadas. Você
pegue? Nós dois temos camadas. (ele levanta
um suspiro e depois vai embora)

ASNO
(seguindo atrás de Shrek) Oh, vocês dois
tem camadas. Oh. {Sniffs} Você sabe,
nem todo mundo gosta de cebola. Bolo! Todo o mundo
adora bolos! Os bolos têm camadas.

SHREK
Eu não me importo... o que todo mundo gosta.
Ogros não são como bolos.

ASNO
Sabe o que mais todo mundo gosta?
Parfaits. Você já conheceu uma pessoa,
você diz: "Vamos pegar um parfait", eles
dizer: "Claro que não, eu não gosto de parfait"?
Parfaits são deliciosos.

SHREK
Não! Você denso, irritante, em miniatura
Besta de carga! Ogros são como cebolas!
E de história. Tchau tchau. Te vejo mais tarde.


ASNO
Parfaits pode ser a coisa mais deliciosa
em todo o maldito planeta.

SHREK
Sabes, acho que preferia o teu cantarolar.


ASNO
Você tem um lenço ou algo assim? Eu estou
fazendo bagunça. Apenas a palavra parfait
me faça começar a babar.

Eles vão embora. Há uma montagem de sua jornada. Andando por
um campo ao pôr do sol. Dormindo sob uma lua brilhante. Shrek tentando
apagar a fogueira no dia seguinte e ter um pequeno problema,
então Burro faz xixi no fogo para apagá-lo.

GUARDA DO DRAGÃO

Shrek e Burro estão caminhando até a fortaleza que deveria
casa princesa Fiona. Parece um vulcão gigante.


ASNO
(funga) Ah! Shrek! Você fez isso?
Você tem que avisar alguém antes de você apenas
quebrar um. Minha boca estava aberta e
tudo.

SHREK
Acredite em mim, Burro, se fosse eu, você
estar morto. (funga) É enxofre. Nós
deve estar chegando perto.

ASNO
Sim, certo, enxofre. Não fique falando
sobre isso é o enxofre. eu sei o que
Eu cheiro. Não era enxofre. Isto
não saiu nenhuma pedra também.


Eles sobem pela lateral do vulcão/manter e olham para baixo. Lá
é um pequeno pedaço de rocha bem no centro e é aí que
o castelo é. É cercado por lava fervente. Parece muito
pressentimento.

SHREK
Claro, é grande o suficiente, mas olhe para o
localização. (risos... então a risada vira
em um gemido)

ASNO
Ah, Shrek? Uh, lembre-se quando você disse
os ogros têm camadas?

SHREK
Ah, sim.

ASNO
Bem, eu tenho uma pequena confissão para
faço. Burros não têm camadas. Nós
usar nosso medo lá fora em nosso
mangas.

SHREK
Espere um segundo. Burros não têm mangas.


ASNO
Você sabe o que eu quero dizer.

SHREK
Você não pode me dizer que tem medo de altura.


ASNO
Não, estou apenas um pouco desconfortável
sobre estar em uma ponte frágil sobre
uma ebulição como de lava!

SHREK
Vamos, Burro. estou bem aqui ao lado
sim, ok? Para apoio emocional., vamos
apenas enfrentar essa coisa juntos um
pequeno passo de bebê de cada vez.

ASNO
Sério?

SHREK
Sério sério.

ASNO
Ok, isso me faz sentir muito melhor.


SHREK
Apenas continue se movendo. E não olhe para baixo.


ASNO
Ok, não olhe para baixo. Não olhe para baixo.
Não olhe para baixo. Continue em movimento. Não
olhar para baixo. (ele passa por um apodrecido
bordo e acaba olhando para baixo
na lava) Shrek! Estou olhando para baixo!
Oh, Deus, eu não posso fazer isso! Apenas me deixe
fora, por favor!

SHREK
Mas você já está na metade.

ASNO
Mas eu sei que metade está segura!

SHREK
OK tudo bem. Eu não tenho tempo para isso.
Você vai voltar.

ASNO
Shrek, não! Espere!

SHREK
Só Burro - - Vamos dançar
então, vou? (salta e balança o
ponte)

ASNO
Não faça isso!

SHREK
Oh, me desculpe. Fazer o que? Ah, isso? (salta
a ponte novamente)

ASNO
Isso!

SHREK
Sim? Sim, faça isso. OK. (continua a
quicar e balançar enquanto ele faz o Burro atravessar
a Ponte)

ASNO
Não, Shrek! Não! Pare!

SHREK
Você disse faça isso! Eu estou fazendo isso.

ASNO
Eu vou morrer. Eu vou morrer. Shrek,
Eu vou morrer. (passos em terra firme)
Oh!

SHREK
Isso serve, Burro. Isso serve. (anda em
em direção ao castelo)

ASNO
Legal. Então, onde está esse cuspidor de fogo
dor-no-pescoço de qualquer maneira?

SHREK
Lá dentro, esperando por nós para resgatá-la.
(risos)

ASNO
Eu estava falando sobre o dragão, Shrek.


DENTRO DO CASTELO

ASNO
Você tem medo?

SHREK
Não.

ASNO
Mas...

SHREK
Shh.

ASNO
Ah, bom. Nem eu. (vê um esqueleto
e suspiros) porque não há nada de errado
com medo. O medo é sensato
resposta a uma situação desconhecida.
Situação perigosa desconhecida, eu poderia
adicionar. Com um dragão que cospe fogo
e come cavaleiros e cospe fogo,
com certeza não significa que você é um covarde
se você está um pouco assustado. eu com certeza
diabos não é nenhum covarde. Eu sei que.


SHREK
Burro, duas coisas, está bem? Cale-se.
Agora vá até lá e veja se você pode
encontrar qualquer escada.

ASNO
Escadas? Eu pensei que estávamos procurando
a princesa.

SHREK
(colocando um capacete) A princesa vai
estar subindo as escadas no quarto mais alto
na torre mais alta.

ASNO
O que te faz pensar que ela estará lá?


SHREK
Li em um livro uma vez. (saindo)


ASNO
Legal. Você lida com o dragão. eu vou lidar
as escadas. Eu vou encontrar aquelas escadas.
Eu vou chicotear a bunda deles também. Aquelas escadas
não vai saber para que lado eles estão indo.
(saindo)

SALA VAZIA

Burro ainda está falando sozinho enquanto olha ao redor da sala.


ASNO
Vou tomar medidas drásticas. Chute-o
ao meio-fio. Não mexa comigo. Eu estou
o mestre da escada. eu dominei o
escadas. Eu gostaria de ter um passo aqui.
Eu pisaria em tudo.

EM OUTRO LUGAR

Shrek vê uma luz na janela da torre mais alta.

SHREK
Bem, pelo menos sabemos onde a princesa
é, mas onde está o...

ASNO
(os) Dragão!

Burro suspira e sai correndo enquanto o dragão ruge novamente.
Shrek consegue tirar o Burro do caminho assim como o dragão
respira fogo.

SHREK
Burro, cuidado! (ele consegue
segura a cauda do dragão e segura
em) Entendi!

O dragão fica irritado com isso e sacode sua cauda e Shrek
vai voando pelo ar e colide com o teto do
torre mais alta. Fiona acorda com um empurrão e olha para ele deitado
no chão.

ASNO
Oh! Aah! Aah!

Burro fica encurralado quando o dragão derruba tudo, exceto um pequeno
parte da ponte em que ele está.

ASNO
Não. Oh, não, não! (o dragão ruge) Oh,
que dentes grandes você tem. (o Dragão
rosna) Quero dizer, dentes brancos e brilhantes.
Eu sei que você provavelmente ouve isso o tempo todo
de sua comida, mas você deve alvejar,
porque esse é um sorriso deslumbrante que você
chegou lá. Eu detecto um toque de menta
frescor? E sabe o que mais? Você é
- - Você é uma menina dragão! Ah com certeza!
Quero dizer, é claro que você é uma menina dragão.
Você está apenas cheirando a beleza feminina.
(o dragão começa a agitar os olhos
para ele) Qual é o problema com você?
Você tem algo em seu olho? Ohh.
Oh. Oh. Cara, eu realmente adoraria ficar,
mas você sabe, eu sou, uh... (o dragão
sopra um anel de fumaça em forma de
coração direto para ele, e ele tosse) eu sou
um asmático, e não sei se
trabalhar se você vai soprar fumaça
argolas. Shrek! (o dragão o pega
levanta com os dentes e o leva embora)
Não! Shrek! Shrek! Shrek!

SALA DE FIONA

Shrek geme quando se levanta do chão. Ele está de costas para Fiona
então ela ajeita o vestido e se deita na cama. Ela
então rapidamente estende a mão e pega o buquê de flores
a mesa lateral. Ela então se deita e parece estar dormindo.
Shrek se vira e vai até ela. Ele olha para Fiona para
um momento e ela franze os lábios. Shrek a pega pelos ombros
e a afasta.

FIONA
Oh! Oh!

SHREK
Acordar!

FIONA
O que?

SHREK
Você é a princesa Fiona?

FIONA
Estou, esperando um cavaleiro tão ousado a ponto de
resgate-me.

SHREK
Oh, isso é legal. Agora vamos!

FIONA
Mas espere, Senhor Cavaleiro. Este é nosso
primeiro encontro. Não deveria ser uma maravilha,
momento romântico?

SHREK
Sim, desculpe, senhora. Não há tempo.


FIONA
Ei, espere. O que você está fazendo? Você deve
varre-me fora dos meus pés para fora da janela
e descer uma corda em seu corcel valente.


SHREK
Você teve muito tempo para planejar isso,
você não tem?

FIONA
(sorri) Mm-hmm.

Shrek quebra a fechadura da porta e a puxa para fora e para baixo
o corredor.

FIONA
Mas temos que saborear este momento! Você
poderia recitar um poema épico para mim. UMA
balada? Um soneto! Um limerique? Ou alguma coisa!


SHREK
Eu não acho.

FIONA
Posso pelo menos saber o nome do meu campeão?


SHREK
Ah, Shrek.

FIONA
Senhor Shrek. (limpa a garganta e segura
um lenço) eu rezo para que você
tome este favor como um sinal de minha gratidão.


SHREK
Obrigado!

De repente, eles ouvem o rugido do dragão.

FIONA
(surpreso) Você não matou o dragão?


SHREK
Está na minha lista de tarefas. Agora vamos!
(sai correndo e arrasta Fiona atrás
dele.)

FIONA
Mas isso não está certo! Você foi feito
para atacar, espada desembainhada, bandeira voando.
Foi o que todos os outros cavaleiros fizeram.


SHREK
Sim, logo antes de explodirem em chamas.


FIONA
Essa não é a questão. (Shrek de repente
pára e ela corre para ele.) Oh! (Shrek
a ignora e se dirige para uma porta de madeira
para o lado.) Espere. Onde você está
indo? A saída é ali.

SHREK
Bem, eu tenho que salvar minha bunda.

FIONA
Que tipo de cavaleiro você é?

SHREK
Um de cada tipo. (abre a porta para
a sala do trono)

ASNO
(os) Desacelere. Devagar, querida, por favor.
Eu acredito que é saudável conhecer
alguém por um longo período de tempo.
Apenas me chame de antiquado. (risos
preocupado) (nós o vemos de perto e
à distância enquanto Shrek se esgueira
a sala) eu não quero me apressar
uma relação física. não estou emocionalmente
pronto para um compromisso de, uh, este
- - Magnitude é realmente a palavra que eu sou
procurando por. Magnitude- - Ei, isso
é o contato físico indesejado. Ei o que
você esta fazendo? Está bem, está bem. Vamos só
recuar um pouco e dar este passo
de uma vez. Nós realmente devemos conhecer
primeiro como amigos ou amigos por correspondência.
Eu estou na estrada muito, mas eu adoro
receber cartões - - Eu realmente adoraria
para ficar, mas... - Não faça isso! Isso é
minha cauda! Essa é a minha cauda pessoal. Você é
vai arrancar. eu não dou permissão
- - O que você vai fazer com isso?
Ei, agora. Sem chance. Não! Não! Não não! Não.
Não não não. Não! Oh!

Shrek pega uma corrente que está conectada ao lustre e balança
em direção ao dragão. Ele erra e ele balança de volta novamente. Ele olha
para cima e vê que o lustre está bem acima da cabeça do dragão.
Ele puxa a corrente e ela solta e ele cai e esbarra
Burro fora do caminho quando o dragão está prestes a beijá-lo.
Em vez disso, o dragão beija a bunda de Shreks. Ela abre os olhos e
ruge. Shrek solta a corrente e o lustre cai
a cabeça, mas é muito grande e passa por cima da cabeça e forma
uma espécie de coleira para ela. Ela ruge novamente e Shrek e Burro
saia correndo. Muito estilo 'Matrix'. Shrek pega Burro e
então agarra a princesa Fiona enquanto ele passa por ela.

ASNO
Olá princesa!

FIONA
Isso fala!

SHREK
Sim, está fazendo ele calar a boca isso é
o truque.

Todos eles começam a gritar quando o dragão avança sobre eles. Manchas de Shrek
um escorregador descendente e pula. Mas infelizmente existe um
rachadura na pedra e atinge Shrek bem na virilha. Dele
olhos se cruzam e quando ele chega ao fundo do escorregador ele tropeça
desligado e anda levemente.

SHREK
Oh!

Shrek os aproxima da saída e coloca Burro e Fiona no chão.


SHREK
Ok, vocês dois, ouviram a saída! Eu vou
cuide do dragão.

Shrek pega uma espada e volta para o interior do
castelo. Ele joga a espada para baixo entre vários
elos da cadeia. Os elos da corrente estão presos ao lustre que
ainda está no pescoço do dragão.

SHREK
(ecoando) Corra!

Todos saem correndo para a saída com o dragão na brasa
perseguir. Eles chegam à ponte e atravessam. Os dragões
cospe fogo e a ponte começa a queimar. Todos eles aguentam
pela preciosa vida enquanto as cordas que seguram a ponte desmoronam. Elas
são balançados para o outro lado. Enquanto eles ficam pendurados de cabeça para baixo, eles parecem
horrorizado enquanto o dragão voa sobre a lava fervente para
pegue eles. Mas de repente o lustre com a corrente empurrou o
dragão de volta e ela é incapaz de chegar até eles. Nossa gangue sobe
rapidamente para a segurança como o dragão parece irritado e então dá um
choramingar triste enquanto observa Burro ir embora.

FIONA
(deslizando pela colina do 'vulcão') Você
fez isso! Você me resgatou! Você é incrível.
(atrás dela Burro cai morro abaixo)
Você é... - Você é maravilhoso. Você é...
(se vira e vê Shrek cair no
colina e esbarrar no Burro) um pouco
heterodoxo, admito. Mas tua ação
é grande, e o teu coração é puro. Eu sou
eternamente em dívida. (O burro limpa
sua garganta.) E onde iria um bravo
cavaleiro ficar sem seu nobre corcel?


ASNO
Espero que você tenha ouvido isso. Ela me chamou
um nobre corcel. Ela acha que sou um corcel.


FIONA
A batalha está vencida. Você pode remover seu
capacete, bom senhor cavaleiro.

SHREK
Oh não.

FIONA
Por que não?

SHREK
Eu tenho cabelo de capacete.

FIONA
Por favor. eu não olharia para o rosto
do meu salvador.

SHREK
Não, não, você não iria - - 'st.

FIONA
Mas como você vai me beijar?

SHREK
O que? (para Burro) Isso não estava no
descrição do trabalho.

ASNO
Talvez seja um privilégio.

FIONA
Não, é o destino. Ah, você deve saber
Como vai. Uma princesa trancada em um
torre e cercado por um dragão é resgatado
por um bravo cavaleiro, e então eles compartilham
primeiro beijo do amor verdadeiro.

ASNO
Hum? Com Shrek? Vocę acha... - Espere.
Espere. Você acha que Shrek é verdade
amor?

FIONA
Bem, sim.

Tanto Burro quanto Shrek caíram na gargalhada.

ASNO
Você acha que Shrek é seu verdadeiro amor!


FIONA
O que é tão engraçado?

SHREK
Vamos apenas dizer que eu não sou seu tipo, ok?Fiona:
Claro que você é. Você é meu salvador.
Agora - - Agora retire seu capacete.

SHREK
Olhar. Eu realmente não acho que isso seja um
boa ideia.

FIONA
Basta tirar o capacete.

SHREK
Eu não estou indo.

FIONA
Tire.

SHREK
Não!

FIONA
Agora!

SHREK
Ok! Fácil. Como você manda. Sua Alteza.
(tira o capacete)

FIONA
Você... - Você é um... - um ogro.

SHREK
Oh, você estava esperando o Príncipe Encantado.


FIONA
Bem, sim, na verdade. Oh não. Isto é
tudo errado. Você não deveria ser
um ogro.

SHREK
Princesa, fui enviado para resgatá-la por
Lorde Farquaad, está bem? Ele é aquele que
quer casar com você.

FIONA
Então por que ele não veio me resgatar?


SHREK
Boa pergunta. Você deveria perguntar isso a ele
quando chegarmos lá.

FIONA
Mas eu tenho que ser resgatado pelo meu verdadeiro
amor, não por algum ogro e seu- - seu
bicho de estimação.

ASNO
Bem, tanto para o nobre corcel.

SHREK
Você não está facilitando meu trabalho.


FIONA
Sinto muito, mas seu trabalho não é problema meu.
Você pode dizer a Lord Farquaad que se ele
quer me resgatar adequadamente, eu estarei
esperando por ele aqui.

SHREK
Ei! Eu não sou mensageiro de ninguém, tudo
certo? (sinistro) Eu sou um entregador.
(ele rapidamente a pega no colo e balança
ela por cima do ombro como se ela fosse uma
saco de batatas)

FIONA
Você não ousaria. Coloque-me para baixo!

SHREK
Você vem, Burro?

ASNO
Estou bem atrás de você.

FIONA
Coloque-me no chão, ou você vai sofrer o
consequências! Isso não é digno!
Coloque-me para baixo!

MADEIRAS

Pouco tempo se passou e Fiona se acalmou. Ela só
pendurada frouxamente enquanto Shrek a carrega.

ASNO
Ok, então aqui está outra pergunta. Dizer
há uma mulher que gosta de você, certo,
mas você realmente não gosta dela desse jeito.
Como você a decepcionou muito fácil, então
seus sentimentos não são feridos, mas você não
se queimar a uma batata frita e comido?

FIONA
Você acabou de dizer a ela que ela não é sua verdade
Ame. Todo mundo sabe o que acontece quando
você encontra sua... (Shrek a deixa cair
o chão) Ei! Quanto mais cedo chegarmos
DuLoc melhor.

ASNO
Você vai adorar lá, princesa.
É lindo!

FIONA
E o meu futuro noivo? Lorde Farquaad?
Como ele é?

SHREK
Deixe-me colocar desta forma, princesa. Homens
da estatura de Farquaad estão em falta.
(ele e o Burro riem)

Shrek então começa a jogar água no rosto para lavar
a poeira e a sujeira.

ASNO
Não sei. Há quem pense
pouco dele. (eles riem de novo) Fiona:
Pare com isso. Parem com isso, vocês dois. Você é
apenas com inveja, você nunca pode medir
a um grande governante como Lord Farquaad.


SHREK
Sim, bem, talvez você esteja certa, princesa.
Mas eu vou deixar você fazer a "medição"
quando você vê-lo amanhã.

FIONA
(olha para o sol poente) Amanhã?
Vai demorar tanto? Não devemos parar
fazer acampamento?

SHREK
Não, isso vai demorar mais. Nós podemos manter
indo.

FIONA
Mas há ladrões na floresta.

ASNO
Uau! Tempo limite, Shrek! O acampamento está começando
para soar bem.

SHREK
Ei, vamos lá. eu sou mais assustador do que qualquer coisa
vamos ver nesta floresta.


FIONA
Eu preciso encontrar um lugar para acampar agora!


As orelhas de Burro e Shrek abaixam enquanto se afastam dela.


PENHASCO DE MONTANHA

Shrek encontrou uma caverna que parece estar em boas condições. Ele empurra
uma pedra fora do caminho para revelar a caverna.

SHREK
Ei! Por aqui.

ASNO
Shrek, podemos fazer melhor que isso. EU
não acho que isso é digno de uma princesa.


FIONA
Não, não, é perfeito. Ele só precisa
alguns toques caseiros.

SHREK
Toques caseiros? Como o quê? (ele ouve
um barulho de lacrimejamento e olha para Fiona
que arrancou a casca de uma árvore.)


FIONA
Uma porta? Bem, senhores, peço-vos
boa noite. (entra na caverna e
coloca a porta da casca atrás dela)


ASNO
Quer que eu leia uma história para você dormir?
Eu vou.

FIONA
(os) Eu disse boa noite!

Shrek olha para Burro por um segundo e então vai mover o
pedregulho de volta na frente da entrada da caverna com Fiona
ainda dentro.

ASNO
Shrek, o que você está fazendo?

SHREK
(risos) Eu só... - Você sabe... - Oh,
vamos. Eu estava apenas brincando.

MAIS TARDE NAQUELA NOITE

Shrek e Burro estão sentados ao redor de uma fogueira. Eles estão olhando
para o céu enquanto Shrek aponta certas constelações de estrelas
para Burro.

SHREK
E, uh, aquele, isso é Throwback,
o único ogro a cuspir mais de três
Campos de trigo.

ASNO
Certo. Sim. Ei, você pode dizer o meu futuro
dessas estrelas?

SHREK
As estrelas não dizem o futuro, Burro.
Eles contam histórias. Olha, há Bloodnut,
o Flatulento. Você pode adivinhar o que ele é
famoso por.

ASNO
Eu sei que você está inventando isso.

SHREK
Não, olhe. Lá está ele, e lá está o
grupo de caçadores fugindo de sua
fedor.

ASNO
Isso não é nada, mas um monte de pouco
pontos.

SHREK
Você sabe, Burro, às vezes as coisas são
mais do que aparentam. Hum? Esqueça.


ASNO
(dá um grande suspiro) Ei, Shrek, o que
vamos fazer quando chegarmos ao nosso pântano de qualquer maneira?


SHREK
Nosso pântano?

ASNO
Você sabe, quando terminarmos de resgatar
a princesa.

SHREK
Nós? Burro, não existe "nós". Há
não "nosso". Há apenas eu e meu pântano.
A primeira coisa que vou fazer é construir
um muro de três metros em volta da minha terra.

ASNO
Você me cortou profundamente, Shrek. Você me cortou de verdade
profundo agora. Você sabe oque eu penso?
Eu acho que essa coisa toda de parede é apenas
uma maneira de manter alguém fora.

SHREK
Não, você acha?

ASNO
Você está escondendo alguma coisa?

SHREK
Não importa, Burro.

ASNO
Oh, esta é outra daquelas cebolas
coisas, não é?

SHREK
Não, este é um daqueles desista e
deixe as coisas em paz.

ASNO
Por que você não quer falar sobre isso?


SHREK
Por que você quer falar sobre isso?

ASNO
Por que você está bloqueando?

SHREK
Eu não estou bloqueando.

ASNO
Ah, sim, você é.

SHREK
Burro, estou avisando.

ASNO
Quem você está tentando manter fora?

SHREK
Todos! Ok?

ASNO
(pausa) Oh, agora estamos chegando a algum lugar.
(sorri)

Neste ponto, Fiona puxa a 'porta' da entrada para
a caverna e picos para fora. Nenhum dos caras a vê.

SHREK
Oh! Pelo amor de Pedro! (levanta-se e
caminha até a beira do precipício
e senta-se)

ASNO
Qual é o seu problema? O que você tem contra
o mundo inteiro mesmo?

SHREK
Olha, eu não sou o único com o problema,
ok? É o mundo que parece ter
um problema comigo. As pessoas dão uma olhada
para mim e vá. "Aah! Socorro! Corra! Um grande,
estúpido, feio ogro!" Eles me julgam antes
eles até me conhecem. É por isso que estou melhor
fora sozinho.

ASNO
Você sabe o que? Quando nos conhecemos, eu não
acho que você era apenas um grande, estúpido, feio
ogro.

SHREK
Sim, eu sei.

ASNO
Então, uh, há algum burro lá em cima?


SHREK
Bem, há, hum, Gabby, a Pequena
e irritante.

ASNO
Ok, ok, eu vejo agora. O grande brilhante
um, bem ali. Aquele aí?


Fiona abre a porta.

SHREK
Essa é a lua.

ASNO
Oh, tudo bem.

DuLoc - Quarto do Farquaad

A câmera filma um monte de coisas de casamento. A música suave toca
no fundo. Farquaad está na cama, observando o Magic
Mirror mostra a ele a princesa Fiona.

FARQUAAD
Mais uma vez, mostre-me novamente. Espelho Espelho,
mostre-a para mim. Mostre-me a princesa.


ESPELHO
Hmph.

O espelho retrocede e começa a tocar novamente desde o início.


FARQUAAD
Ah. Perfeito.

Farquaad olha para seu peito nu e puxa o lençol para cima
cobrir-se como se Fiona pudesse vê-lo enquanto ele olha timidamente
em sua imagem no espelho.

MANHÃ

Fiona sai da caverna. Ela olha para Shrek e Burro
que ainda estão dormindo. Ela vagueia na floresta e vem
através de um pássaro azul. Ela começa a cantar. O pássaro canta junto
com ela. Ela atinge notas cada vez mais altas e o pássaro luta
para acompanhá-la. De repente, a pressão da nota é muito
grande e o pássaro explode. Fiona parece um pouco tímida, mas
ela olha para os ovos que o pássaro deixou para trás. Lapso de tempo, Fiona
agora está cozinhando os ovos para o café da manhã. Shrek e Burro ainda estão
adormecido. Shrek acorda e olha para Fiona. Burro está falando
em seu sono.

ASNO
(silenciosamente) Mmm, sim, você sabe que eu gosto
é assim. Vem cá Neném. Eu disse
Eu gosto disso.

SHREK
Burro, acorde. (o sacode)

ASNO
Huh? O que?

SHREK
Acordar.

ASNO
O que? (estica e boceja)

FIONA
Bom Dia. Hm, como você gosta do seu
ovos?

ASNO
Ah, bom dia, princesa!

Fiona se levanta e coloca os ovos na frente deles.

SHREK
O que é tudo isso?

FIONA
Você sabe, nós meio que saímos mal
começar ontem. eu queria fazer isso
você decide. Quero dizer, afinal, você fez
resgate-me.

SHREK
Obrigado.

Burro cheira os ovos e lambe os lábios.

FIONA
Bem, coma. Temos um grande dia pela frente
de nós. (saindo)

MAIS TARDE

Eles estão mais uma vez a caminho. Eles estão andando pela
floresta. Shrek arrota.

ASNO
Shrek!

SHREK
O que? É um elogio. Melhor sair
do que em, eu sempre digo. (risos)

ASNO
Bem, não é maneira de se comportar na frente
de uma princesa.

Fiona arrota

FIONA
Obrigado.

ASNO
Ela é tão desagradável quanto você.

SHREK
(risos) Você sabe, você não é exatamente
o que eu esperava.

FIONA
Bem, talvez você não devesse julgar as pessoas
antes de conhecê-los.

Ela sorri e continua andando, cantando baixinho. De repente
do nada, um homem desce e arrebata Fiona
uma árvore.

ROBIN HOOD
La liberte! Ei!

SHREK
Princesa!

FIONA
(para Robin Hood) O que você está fazendo?


ROBIN HOOD
Fique quieto, mon chérie, pois eu sou seu salvador!
E eu estou resgatando você desse verde... (beijos
em seu braço enquanto Fiona puxa de volta
desgosto)... besta.

SHREK
Ei! Essa é minha princesa! Vá te encontrar
ter!

ROBIN HOOD
Por favor, monstro! Você não pode ver que eu sou um
pouco ocupado aqui?

FIONA
(ficando farto) Olha, amigo, eu não
saiba quem você pensa que é!

ROBIN HOOD
Oh! É claro! Oh, que rude. Por favor
deixe-me apresentar-me. Oh, Homens Alegres.
(risos)

De repente, um acordeão começa a tocar e os homens Merry aparecem
dos arbustos. Eles começam a cantar a música tema de Robin.

HOMENS FELIZES
Ta, dah, dah, dah, whoo.

ROBIN HOOD
Eu roubo dos ricos e dou aos
carente.

HOMENS FELIZES
Ele pega uma pequena porcentagem,

ROBIN HOOD
Mas não sou ganancioso. eu resgato bonito
donzelas, cara, eu estou bem.

HOMENS FELIZES
Que cara, Monsieur Hood.

ROBIN HOOD
Quebre isso. Eu gosto de uma luta honesta
e uma garotinha atrevida...

HOMENS FELIZES
O que ele está basicamente dizendo é que ele gosta
para obter...

ROBIN HOOD
Pago. Então... quando um ogro no mato
agarra uma senhora pelo bumbum. Isso é ruim.


HOMENS FELIZES
Isso é ruim.

ROBIN HOOD
Quando uma bela está com uma fera, isso faz
eu terrivelmente louco.

HOMENS FELIZES
Ele é louco, ele é muito, muito louco.


ROBIN HOOD
Eu vou pegar minha lâmina e forçá-la
seu coração, mantenha seus olhos em mim, meninos
pois vou começar...

Há um grunhido quando Fiona desce do galho da árvore e
deixa Robin Hood inconsciente.

FIONA
Cara, isso foi irritante!

Shrek olha para ela com admiração.

HOMEM ALEGRE
Oh, seu pequeno- - (atira uma flecha em
Fiona, mas ela sai do caminho)


A flecha voa em direção ao Burro que pula nos braços de Shrek para
saia do caminho. A flecha continua a apenas ricochetear em uma árvore.


Outra sequência de luta começa e Fiona dá um grito de caratê e
em seguida, passa a espancar os Merry Men. Há
um momento 'Matrix' muito interessante aqui quando Fiona faz uma pausa
no ar para arrumar o cabelo. Finalmente todos os Merry Men estão caídos,
e Fiona começa a se afastar.

FIONA
Vamos?

SHREK
Segure o telefone. (deixa o Burro e começa
andando atrás de Fiona) Oh! Ei, ei,
Uau. Espere agora. De onde veio isso
a partir de?

FIONA
O que?

SHREK
Este! Ali atrás. Isso foi incrível!
Onde você aprendeu aquilo?

FIONA
Bem... (risos) quando se vive sozinho,
uh, é preciso aprender essas coisas em
caso haja um... (suspiros e pontos)
há uma flecha na sua bunda!

SHREK
O que? (vira-se e olha) Oh, você faria
Olhe para isso? (ele vai tirar
mas vacila porque é macio)


FIONA
Oh não. Isso é tudo minha culpa. Estou tão
desculpe.

ASNO
(subindo) Por quê? O que há de errado?

FIONA
Shrek está ferido.

ASNO
Shrek está ferido. Shrek está ferido? Oh não,
Shrek vai morrer.

SHREK
Burro, estou bem.

ASNO
Você não pode fazer isso comigo, Shrek. Eu estou
muito jovem para morrer. Mantenha suas pernas
elevado. Vire a cabeça e tosse.
Alguém conhece o Heimlich?

FIONA
Asno! Acalmar. Se você quer ajudar
Shrek, corra para a floresta e me encontre
uma flor azul com espinhos vermelhos.

ASNO
Flor azul, espinhos vermelhos. Ok, estou em
isto. Flor azul, espinhos vermelhos. Não morra
Shrek. Se você vir um longo túnel, fique
longe da luz!

SHREK E FIONA
Asno!

ASNO
Oh sim. Certo. Flor azul, espinhos vermelhos.
(foge)

SHREK
Para que servem as flores?

FIONA
(como é óbvio) Para se livrar
de Burro.

SHREK
Ah.

FIONA
Agora você fica parado, e eu vou puxar isso
coisa fora. (dá a seta um pouco
puxar)

SHREK
(salta para longe) Ai! Ei! Fácil com o
puxando.

Enquanto eles continuam a falar, Fiona continua indo atrás da flecha e
Shrek continua se esquivando das mãos dela.

FIONA
Sinto muito, mas tem que sair.


SHREK
Não, é macio.

FIONA
Agora, espere.

SHREK
O que você está fazendo é o oposto de
ajuda.

FIONA
Não se mova.

SHREK
Olha, tempo limite.

FIONA
Você... (grunhe enquanto Shrek coloca seu
mão sobre seu rosto para impedi-la de
chegando na flecha) Ok. Fazer o que
você propõe que fazemos?

EM OUTRO LUGAR

Burro ainda está procurando a flor especial.

ASNO
Flor azul, espinhos vermelhos. Flor-azul,
espinhos vermelhos. Flor azul, espinhos vermelhos.
Isso seria muito mais fácil se eu não fosse
daltônico! Flor azul, espinhos vermelhos.


SHREK
(os) Ai!

ASNO
Espera, Shrek! Estou chegando'! (rasga um
flor de um arbusto próximo que simplesmente acontece
ser uma flor azul com espinhos vermelhos)


O CAMINHO DA FLORESTA

SHREK
Ai! Não é bom.

FIONA
OK. OK. Quase posso ver a cabeça.
(Shrek grunhe enquanto ela puxa) É só
cerca de...

SHREK
Ai! Ah! (ele sacode e consegue cair
com Fiona em cima dele)

ASNO
Aham.

SHREK
(jogando Fiona de cima dele) Nada
aconteceu. Estávamos apenas, uh - -

ASNO
Olha, se você quisesse ficar sozinho, tudo
você tinha que fazer era perguntar. Ok?

SHREK
Oh vamos lá! Essa é a última coisa em
minha mente. A princesa aqui era apenas-
- (Fiona puxa a flecha) Ugh! (ele
se vira para olhar para Fiona que segura
a flecha com um sorriso) Ai!

ASNO
Ei, o que é isso? (riso nervoso)
Isso é... isso é sangue?

Burro desmaia. Shrek se aproxima e o pega enquanto eles continuam
no caminho deles.

Há uma montagem de cenas enquanto o grupo volta para DuLoc.
Shrek rastejando até o topo de uma árvore para fazê-la cair sobre um
pequeno riacho para que Fiona não se molhe. Shrek então se levanta como
Burro está prestes a atravessar a árvore e a árvore balança para trás
em sua posição vertical e Burro voa. Shrek golpeando
e um monte de moscas e mosquitos. Fiona pega uma teia de aranha próxima
que está em um galho de árvore e corre pelo campo balançando
ao redor para pegar os insetos. Ela então entrega para Shrek, que começa
comendo como se fosse um deleite. Enquanto ele se afasta, ela lambe os dedos.
Shrek pegando um sapo e explodindo como um balão e apresentando
para Fiona. Fiona pegando uma cobra, explodindo, formando
transformá-lo em um animal balão e apresentá-lo a Shrek. O grupo
chegando a um moinho de vento que fica perto de DuLoc.

MOINHO DE VENTO

SHREK
Aí está, princesa. Seu futuro espera
vocês.

FIONA
Isso é DuLoc?

ASNO
Sim, eu sei. Você sabe, Shrek pensa
Lord Farquaad está compensando algo,
o que eu acho que significa que ele realmente tem um... (Shrek
pisa em seu casco) Ai!

SHREK
Hum, eu, uh- - Acho melhor nos mudarmos
sobre.

FIONA
Claro. Mas, Shrek? Estou - - Estou preocupado
sobre Burro.

SHREK
O que?

FIONA
Quero dizer, olhe para ele. Ele não parece
tão bom.

ASNO
O que você está falando? Estou bem.


FIONA
(ajoelha-se para olhá-lo nos olhos) Isso é
o que eles sempre dizem, e depois
coisa que você sabe, você está de costas.
(pausa) Morto.

SHREK
Você sabe, ela está certa. Você está horrível.
Você quer sentar?

FIONA
Uh, você sabe, eu vou fazer um chá para você.


ASNO
Eu não queria dizer nada, mas eu
tenho essa pontada no pescoço, e quando
Eu viro minha cabeça assim, olha, (vira
seu pescoço de uma forma muito afiada até que seu
cabeça está completamente de lado) Ow! Ver?


SHREK
Quem está com fome? Vou arranjar-nos um jantar.


FIONA
Eu vou pegar a lenha.

ASNO
Ei, onde você vai? Oh, cara, eu não posso
sinta meus dedos! (olha para baixo e grita)
Eu não tenho dedos! acho que preciso
um abraço.

PÔR DO SOL

Shrek acendeu uma fogueira e está cozinhando o resto do jantar enquanto
Fiona come.

FIONA
Mmm. Isso é bom. Isto é muito bom.
O que é isto?

SHREK
Uh, rato de erva daninha. Estilo rotisserie.

FIONA
Sem brincadeiras. Bem, isso é delicioso.


SHREK
Bem, eles também são ótimos em ensopados. Agora,
Eu não quero me gabar, mas eu faço uma média
guisado de rato de erva daninha. (risos)

Fiona olha para DuLoc e suspira.

FIONA
Acho que vou jantar um pouco diferente
amanhã à noite.

SHREK
Talvez você possa vir me visitar no pântano
às vezes. Eu vou cozinhar todo tipo de coisa
para voce. Sopa de sapo do pântano, tártaro de olho de peixe
- - O que você disser.

FIONA
(sorri) Eu gostaria disso.

Eles sorriem um para o outro.

SHREK
Hum, princesa?

FIONA
Sim, Shrek?

SHREK
Eu, hum, eu estava me perguntando... você está... (suspiros)
Você vai comer aquilo?

ASNO
(risos) Cara, isso não é romântico?
Basta olhar para aquele pôr do sol.

FIONA
(salta) Pôr do sol? Oh não! quero dizer, é
tarde. E-É muito tarde.

SHREK
O que?

ASNO
Espere um minuto. Eu vejo o que está acontecendo
aqui. Você tem medo do escuro, não tem
vocês?

FIONA
Sim! Sim é isso. Eu estou aterrorizado.
Sabe, é melhor eu entrar.

ASNO
Não se sinta mal, princesa. Eu costumava
tenha medo do escuro também, até que -
- Ei, não, espere. ainda tenho medo
o escuro.

Shrek suspira

FIONA
Boa noite.

SHREK
Boa noite.

Fiona entra no moinho de vento e fecha a porta. Aparência de burro
em Shrek com um novo olhar.

ASNO
Ah! Agora eu realmente vejo o que está acontecendo
aqui.

SHREK
Ah, do que você está falando?

ASNO
Eu nem quero ouvir. Olha, eu estou
um animal, e eu tenho instintos. E
Eu sei que vocês dois estavam cavando em cada um
outro. Eu podia sentir isso.

SHREK
Você é louco. eu só estou trazendo ela
de volta ao Farquaad.

ASNO
Ah, vamos, Shrek. Acorde e cheire
os feromônios. Basta entrar e dizer
ela como você se sente.

SHREK
Eu... - Não há nada para contar. Além do mais,
mesmo se eu dissesse a ela que, bem, você
sei - - e não estou dizendo que sei porque
Eu não - - ela é uma princesa, e eu sou
- -

ASNO
Um ogro?

SHREK
Sim. Um ogro.

ASNO
Ei, onde você vai?

SHREK
Para pegar... mova lenha. (suspiros)

Burro olha para a grande pilha de lenha já lá
é.

LAPSO DE TEMPO

Burro abre a porta do Moinho de Vento e entra.
nenhum lugar para ser visto.

ASNO
Princesa? Princesa Fiona? Princesa,
Onde você está? Princesa?

Fiona olha para Burro das sombras, mas não podemos vê-la.


ASNO
É muito assustador aqui. eu não estou jogando
sem jogos.

De repente, Fiona cai do parapeito. Ela se levanta só que ela não
parecer ela mesma. Ela parece um ogro e o Burro começa a enlouquecer
Fora.

ASNO
Aah!

FIONA
Oh não!

ASNO
Nenhuma ajuda!

FIONA
Shh!

ASNO
Shrek! Shrek! Shrek!

FIONA
Não, está tudo bem. Está bem.

ASNO
O que você fez com a princesa?


FIONA
Burro, eu sou a princesa.

ASNO
Aah!

FIONA
Sou eu, neste corpo.

ASNO
Oh meu Deus! Você comeu a princesa. (para
seu estômago) Você pode me ouvir?

FIONA
Asno!

ASNO
(ainda apontada para o estômago dela) Ouça,
continue respirando! vou tirar você de
lá!

FIONA
Não!

ASNO
Shrek! Shrek! Shrek!

FIONA
Shh.

ASNO
Shrek!

FIONA
Este sou eu.

Burro olha nos olhos dela enquanto ela acaricia seu focinho, e ele se acalma
baixa.

ASNO
Princesa? O que aconteceu com você? Você é,
uh, uh, uh, diferente.

FIONA
Eu sou feio, ok?

ASNO
Bem, sim! Foi algo que você comeu?
Porque eu disse ao Shrek que aqueles ratos eram um
péssima ideia. Você é o que você come, eu disse.
Agora - -

FIONA
Não. Eu - - Estou assim há tanto tempo
como me lembro.

ASNO
O que você quer dizer? Olha, eu nunca
vi você assim antes.

FIONA
Isso só acontece quando o sol se põe.
"À noite de um jeito, de dia de outro.
será a norma... até que você encontre
primeiro beijo do amor verdadeiro... e depois tome
a verdadeira forma do amor."

ASNO
Isso é lindo. eu não sabia
você escreveu poesia.

FIONA
É um feitiço. (suspiro) Quando eu era um pouco
menina, uma bruxa lançou um feitiço em mim. Todo
noite eu me tornei isso. Este horrível,
fera feia! Eu fui colocado em uma torre
para esperar o dia em que meu verdadeiro amor
resgate-me. É por isso que eu tenho que me casar
Lord Farquaad amanhã antes do sol
define e ele me vê assim. (começa
chorar)

ASNO
Tudo bem, tudo bem. Acalmar. Olhar,
não é tão ruim. Você não é tão feio.
Bem, eu não vou mentir. Você é feio.
Mas você só fica assim à noite.
Shrek é feio 24-7.

FIONA
Mas Burro, eu sou uma princesa, e isso
não é como uma princesa deve ser.


ASNO
Princesa, que tal se você não se casar
Farquaad?

FIONA
Eu tenho que. Apenas o beijo do meu verdadeiro amor
pode quebrar o feitiço.

ASNO
Mas, você sabe, hum, você é uma espécie de
orge, e Shrek - - bem, você tem um
muito em comum.

FIONA
Shrek?

FORA

Shrek está caminhando em direção ao moinho de vento com um girassol em seu
mão.

SHREK
(para si mesmo) Princesa, eu - - Uh, como vai
vai, em primeiro lugar? Bom? Hum, bom
para mim também. Estou bem. eu vi essa flor
e pensei em você porque é bonito
e - - bem, eu realmente não gosto disso,
mas eu pensei que você poderia gostar porque
você é bonita. Mas eu gosto de você de qualquer maneira.
Eu... - uh, uh... (suspiros) Estou com problemas.
Ok, aqui vamos nós.

Ele caminha até a porta e para do lado de fora quando ouve Burro
e Fiona conversando.

FIONA
(os) Eu não posso simplesmente casar com quem eu quiser.
Dê uma boa olhada em mim, Burro. Quero dizer,
realmente, quem pode amar uma fera assim
horrível e feio? "Princesa" e "feio"
não vá junto. Por isso não consigo
fique aqui com Shrek.

Shrek recua em estado de choque.

FIONA
(os) Minha única chance de viver feliz
para sempre é me casar com meu verdadeiro amor.


Shrek solta um suspiro profundo. Ele joga a flor no chão e caminha
um jeito.

LADO DE DENTRO

FIONA
Você não vê, Burro? Isso é apenas como
tem que ser. É a única maneira de quebrar
o feitiço.

ASNO
Você pelo menos tem que dizer a verdade ao Shrek.


FIONA
Não! Você não pode respirar uma palavra. Ninguém
deve sempre saber.

ASNO
Qual é o ponto de ser capaz de falar
se você tem que manter segredos?

FIONA
Prometa que não vai contar. Promessa!

ASNO
Tudo bem, tudo bem. Eu não vou dizer a ele.
Mas voce devia. (sai para fora) eu só
saiba antes que isso acabe, eu vou
precisa de muita terapia séria.
Olhe para o meu olho trêmulo.

Fiona sai pela porta e o observa ir embora. Ela parece
para baixo e avista o girassol. Ela pega antes de voltar
dentro do moinho de vento.

MANHÃ

Burro está dormindo. Shrek está longe de ser visto. Fiona ainda
acordado. Ela está arrancando pétalas do girassol.

FIONA
Eu digo a ele, eu digo a ele que não. digo a ele,
Eu digo a ele que não. Eu digo a ele. (ela rapidamente
corre para a porta e sai) Shrek!
Shrek, tem algo que eu quero... (ela
olha e vê o sol nascente, e como
o sol nasce no céu ela volta
em um humano.)

Assim que ela olha para o sol, ela vê Shrek caminhando em direção
sua.

FIONA
Shrek. Você está bem?

SHREK
Perfeito! Nunca estive melhor.

FIONA
Eu - - Eu não - - Há algo
Eu tenho que te dizer.

SHREK
Você não precisa me dizer nada,
Princesa. Ouvi o suficiente ontem à noite.


FIONA
Você ouviu o que eu disse?

SHREK
Toda palavra.

FIONA
Achei que você entenderia.

SHREK
Ah, Eu entendi. Como você disse: "Quem
poderia amar uma fera horrível e feia?"


FIONA
Mas eu pensei que não importaria para
vocês.

SHREK
Sim? Bem, ele faz. (Fiona olha para
ele em choque. Ele olha além dela e
vê um grupo se aproximando.) Ah, certo
na hora. Princesa, eu te trouxe
um pouco de algo.

Farquaad chegou com um grupo de seus homens. Ele parece muito real
sentado em seu cavalo. Você nunca adivinharia que ele é apenas
como 3 metros de altura. Burro acorda com um bocejo enquanto os soldados
marchar.

ASNO
O que eu perdi? O que eu perdi? (pontos
os soldados) (abafado) Quem disse isso?
Não pode ter sido o burro.

FARQUAAD
Princesa Fiona.

SHREK
Como prometido. Agora entregue.

FARQUAAD
Muito bem, ogro. (apresenta um pedaço
de papel) A escritura do seu pântano, desembaraçada
fora, conforme combinado. Pegue e vá antes
Eu mudei de ideia. (Shrek pega o papel)
Perdoe-me, princesa, por surpreender
você, mas você me assustou, porque eu tenho
nunca vi uma beleza tão radiante antes.
Eu sou Lorde Farquaad.

FIONA
Lorde Farquaad? Ah, não, não. (Farquaad
estala os dedos) Perdoe-me, meu senhor,
pois eu estava apenas dizendo um breve... (Relógios
como Farquaad é levantado de seu cavalo
e se deitou na frente dela. Ele vem
até a cintura.) adeus.

FARQUAAD
Ah, isso é tão doce. Você não tem
desperdiçar boas maneiras com o ogro. Isso é
não como se tivesse sentimentos.

FIONA
Não, você está certo. Não.

Burro observa essa troca com um olhar curioso em seu rosto.


FARQUAAD
Princesa Fiona, linda, justa, impecável
Fiona. Peço sua mão em casamento.
Você será a noiva perfeita para o
noivo perfeito?

FIONA
Lorde Farquaad, eu aceito. Nada seria
faço - -

FARQUAAD
(interrompendo) Excelente! Vou começar
os planos, para amanhã nos casamos!

FIONA
Não! Quero dizer, uh, por que esperar? Vamos pegar
casou hoje antes do sol se pôr.


FARQUAAD
Oh, ansioso, você está? Você tem razão.
Quanto antes melhor. Há tanto
façam! Há o bufê, o bolo,
a banda, a lista de convidados. Capitão, redondo
alguns convidados! (um guarda coloca Fiona
nas costas de seu cavalo)

FIONA
Adeus, ogro.

Todo o grupo de Farquaad começa a voltar para DuLoc. Relógios de burro
eles vão.

ASNO
Shrek, o que você está fazendo? Você está deixando
ela se afaste.

SHREK
Sim? E daí?

ASNO
Shrek, há algo sobre ela você
não sei. Olha, eu falei com ela pela última vez
noite, ela é - -

SHREK
Eu sei que você falou com ela ontem à noite.
Vocês são ótimos amigos, não são? Agora se
vocês dois são tão bons amigos, por que não
você a segue até em casa?

ASNO
Shrek, eu... - Quero ir contigo.

SHREK
Eu te disse, não disse? Você não está vindo
casa comigo. Eu vivo sozinho! Meu pântano!
Eu! Ninguém mais! Entender? Ninguém!
Especialmente inútil, patético, irritante,
burros falantes!

ASNO
Mas eu pensei - -

SHREK
Sim. Você sabe o que? Você pensou errado!
(despedida)

ASNO
Shrek.

Montagem de cenas diferentes. Shrek chegando em casa. Fiona
sendo ajustado para o vestido de noiva. Burro em um córrego em execução
no dragão. Shrek limpando sua casa. Fiona jantando
sozinho. Shrek jantando sozinho.

CASA DO SHREK

Shrek está jantando quando ouve um som lá fora. Ele vai
fora para investigar.

SHREK
Asno? (O Burro o ignora e continua
com o que ele está fazendo.) O que você está
fazendo?

ASNO
Eu pensaria que, de todas as pessoas, você
reconhecer uma parede quando você vê um.


SHREK
Bem, sim. Mas a parede é suposto
contornar meu pântano, não atravessá-lo.


ASNO
É em torno de sua metade. Veja que é seu
metade, e esta é a minha metade.

SHREK
Oh! Sua metade. Hum.

ASNO
Sim, minha metade. Ajudei a resgatar a princesa.
Eu fiz metade do trabalho. eu recebo metade do
espólio. Agora me dê aquela grande e velha pedra,
aquele que se parece com a sua cabeça.


SHREK
Recuar!

ASNO
Não, você recua.

SHREK
Este é o meu pântano!

ASNO
Nosso pântano.

SHREK
(pega o galho da árvore O Burro está a trabalhar
com) Solte, Burro!

ASNO
Você deixou ir.

SHREK
Macaco teimoso!

ASNO
Ogro fedorento.

SHREK
Multar! (deixa o galho da árvore e caminha
um jeito)

ASNO
Ei, ei, volte aqui. eu não terminei
com você ainda.

SHREK
Bem, eu terminei com você.

ASNO
Uh-uh. Você sabe, com você é sempre,
"Eu eu Eu!" Bem, adivinhe! Agora
é a minha vez! Então você acabou de calar a boca e
prestar atenção! Você é mau comigo. Você
me insulte e você não aprecia nada
aquilo eu faço! Você está sempre me empurrando
ao redor ou me empurrando para longe.

SHREK
Oh sim? Bem, se eu te tratasse assim
ruim, como você voltou?

ASNO
Porque é isso que os amigos fazem! Elas
perdoar um ao outro!

SHREK
Oh sim. Você está certo, Burro. Eu perdoo
você... por me esfaquear pelas costas!
(vai para a casinha e bate o
porta)

ASNO
Ah! Você está tão embrulhado em camadas,
menino cebola, você tem medo do seu próprio
sentimentos.

SHREK
(os) Vá embora!

ASNO
Aí está você, fazendo isso de novo apenas
como você fez com Fiona. Tudo que ela sempre
fazer era como você, talvez até te amo.


SHREK
(os) Me ama? Ela disse que eu era feio, um
criatura medonha. Eu ouvi os dois
você falando.

ASNO
Ela não estava falando de você. Ela era
falando sobre, uh, outra pessoa.


SHREK
(abre a porta e sai) Ela não estava
falando sobre mim? Bem, então quem era
ela está falando?

ASNO
Uh-uh, de jeito nenhum. Eu não estou dizendo nada.
Você não quer me ouvir. Certo?
Certo?

SHREK
Asno!

ASNO
Não!

SHREK
Ok, olhe. Desculpe, tudo bem? (suspirar)
Eu sinto Muito. Acho que sou apenas um grande,
ogro estúpido e feio. Você pode me perdoar?


ASNO
Ei, é para isso que servem os amigos, certo?


SHREK
Certo. Amigos?

ASNO
Amigos.

SHREK
Então, hum, o que Fiona disse sobre mim?


ASNO
O que você está me pedindo? Por que não
você só vai perguntar a ela?

SHREK
O casamento! Nós nunca vamos fazer isso em
Tempo.

ASNO
Ha ha ha! Nunca tema, para onde, há
uma vontade, há um caminho e eu tenho um caminho.
(assobios)

De repente, o dragão chega e voa baixo o suficiente para
eles podem subir.

SHREK
Asno?

ASNO
Acho que é apenas o meu magnetismo animal.


Ambos riem.

SHREK
Ah, venha aqui, você. (dá ao Burro um
noogie)

ASNO
Tudo bem, tudo bem. Não pegue tudo
babado. Ninguém gosta de um beijo na bunda. Tudo
certo, suba e segure firme. eu não tenho
teve a chance de instalar os cintos de segurança
ainda.

Eles sobem a bordo do dragão e ela parte para DuLoc.

DULOC - IGREJA

Fiona e Farquaad vão se casar. A cidade inteira está lá.
O cara do cartão de prompter segura um cartão que diz 'Silêncio Reverenciado'.


PADRE
Povo de DuLoc, nos reunimos aqui hoje
para testemunhar a união....

FIONA
(olhando para o sol poente) Um-

PADRE
...do nosso novo rei...

FIONA
Com licença. Poderíamos apenas pular adiante
para o "eu faço"?

FARQUAAD
(ri e depois faz um gesto para o padre
para satisfazer Fiona) Vá em frente.

PÁTIO

Alguns guardas estão circulando. De repente, o dragão pousa com
um boom. Todos os guardas saem correndo.

ASNO
(para Dragon) Vá em frente, divirta-se.
Se precisarmos de você, assobiarei. Que tal
este? (ela balança a cabeça e vai atrás dos guardas)
Shrek, espere, espere! Espere um minuto! Você
quer fazer isso direito, não é?

SHREK
(na porta da igreja) O que você está falando
cerca de?

ASNO
Há uma linha que você tem que esperar. o
pregador vai dizer: "Fale agora ou
cale-se para sempre." Foi quando
você diz: "Eu me oponho!"

SHREK
Eu não tenho tempo para isso!

ASNO
Ei, espere. O que você está fazendo? Ouço
para mim! Olha, você ama essa mulher, não
vocês?

SHREK
Sim.

ASNO
Você quer segurá-la?

SHREK
Sim.

ASNO
Por favor, ela?

SHREK
Sim!

ASNO
(cantando estilo James Brown) Então você
tem que, tem que tentar um pouco de ternura.
(normal) As garotas adoram aquele romântico
porcaria!

SHREK
Tudo bem! Pare com isso. Quando isso acontece
cara dizer a linha?

ASNO
Temos que verificar.

DENTRO DA IGREJA

Enquanto o padre fala vemos a sombra do Burro através de um dos
janelas Shrek o joga para cima para que ele possa ver.

PADRE
E assim, pelo poder investido em mim...


Fora

SHREK
O que você vê?

ASNO
A cidade inteira está lá.

Lado de dentro

PADRE
Eu agora os declaro marido e mulher...


Fora

ASNO
Eles estão no altar.

Lado de dentro

PADRE
...Rei e Rainha.

Fora

ASNO
Mãe Fletcher! Ele já disse isso.


SHREK
Ah, pelo amor de Pete!

Ele corre para dentro sem pegar o Burro, que bate forte no chão.


DENTRO DA IGREJA

SHREK
(correndo em direção ao altar) Eu me oponho!


FIONA
Shrek?

Toda a congregação suspira ao ver Shrek.

FARQUAAD
Ah, agora o que ele quer?

SHREK
(para a congregação quando ele chega à frente
da Igreja) Olá a todos. Tendo
um bom tempo, não é? Eu amo DuLoc, primeiro
de tudo. Muito limpo.

FIONA
O que você está fazendo aqui?

SHREK
Realmente, é rude o suficiente estar vivo
quando ninguém te quer, mas aparecendo
sem ser convidado para um casamento...

SHREK
Fiona! Eu preciso falar com você.

FIONA
Ah, agora você quer conversar? É um pouco
tarde para isso, então se você me der licença
- -

SHREK
Mas você não pode se casar com ele.

FIONA
E porque não?

SHREK
Porque- - Porque ele está apenas se casando
você para que ele possa ser rei.

FARQUAAD
Ultrajante, ultrajoso! Fiona, não dê ouvidos a ele.


SHREK
Ele não é seu verdadeiro amor.

FIONA
E o que você sabe sobre o amor verdadeiro?


SHREK
Bem, eu - - Uh - - quero dizer - -

FARQUAAD
Ah, isso é precioso. O ogee caiu
apaixonada pela princesa! Ah, bom
Senhor. (risos)

O cara do cartão de prompter segura um cartão que diz 'Ria'. o
toda a congregação ri.

FARQUAAD
Um ogro e uma princesa!

FIONA
Shrek, isso é verdade?

FARQUAAD
Quem se importa? É absurdo! Fiona,
meu amor, estamos a um beijo de distância
nosso "felizes para sempre". Agora me beije!
(enruga os lábios e se inclina em direção a ela,
mas ela recua.)

FIONA
(olhando para o sol poente) "À noite
de um jeito, de dia de outro." (para Shrek)
Eu queria te mostrar antes.

Ela recua e quando o sol se põe, ela se transforma em seu eu ogro.
Ela dá a Shrek um sorriso tímido.

SHREK
Bem, uh, isso explica muito. (Fiona
sorrisos)

FARQUAAD
Eca! É nojento! Guardas! Guardas!
Eu ordeno que você tire isso da minha vista
agora! Pegue eles! Pegue os dois!

Os guardas correm e separam Fiona e Shrek. Shrek luta
eles.

SHREK
Não não!

FIONA
Shrek!

FARQUAAD
Este hocus-pocus não altera nada. este
casamento é obrigatório, e isso faz com que
eu rei! Ver? Ver?

FIONA
Não, me solte! Shrek!

SHREK
Não!

FARQUAAD
Não fiquem aí parados, seus idiotas.


SHREK
Saia do meu caminho! Fiona! Arrgh!

FARQUAAD
Eu vou fazer você se arrepender do dia em que nos conhecemos.
Vou vê-lo desenhado e esquartejado! Você vai
implorar pela morte para salvá-lo!

FIONA
Não, Shrek!

FARQUAAD
(segure uma adaga na garganta de Fiona) E
quanto a você, minha esposa...

SHREK
Fiona!

FARQUAAD
Eu vou te trancar naquela torre
para o resto de seus dias! Eu sou rei!


Shrek consegue soltar a mão e assobia.

FARQUAAD
vou ter encomenda! Eu terei perfeição!
Eu terei - - (Burro e o dragão
aparecer e o dragão se inclina e
come Farquaad) Aaaah! Aah!

ASNO
Tudo bem. Ninguém se move. eu tenho um dragão
aqui, e eu não tenho medo de usá-lo.
(O dragão ruge.) Eu sou um burro
A beira!

O dragão arrota e a coroa de Farquaad voa para fora de sua boca
e cai no chão.

ASNO
Casamentos de celebridades. Eles nunca duram,
Eles?

A congregação aplaude.

ASNO
Vá em frente, Shrek.

SHREK
Ah, Fiona?

FIONA
Sim, Shrek?

SHREK
Eu - - Eu te amo.

FIONA
Sério?

SHREK
Sério sério.

FIONA
(sorri) Eu também te amo.

Shrek e Fiona se beijam. Thelonius pega um dos cartões e escreve
'Awwww' nas costas e depois mostra para a congregação.


CONGREGAÇÃO
Aawww!

De repente, a magia do feitiço afasta Fiona. Ela é levantada
no ar e ela paira lá enquanto a magia funciona ao redor
sua.

SUSSURROS
"Até que você encontre o primeiro beijo do amor verdadeiro
e então tomar a verdadeira forma do amor. Leva
a verdadeira forma do amor. Assuma a verdadeira forma do amor."


De repente, os olhos de Fiona se arregalam. Ela é consumida pelo feitiço
e, em seguida, é lentamente baixado para o chão.

SHREK
(indo até ela) Fiona? Fiona. São
Você está bem?

FIONA
(levantando-se, ela ainda é um ogro) Bem,
sim. Mas eu não entendo. eu devo
para ser bonita.

SHREK
Mas você é linda.

Eles sorriem um para o outro.

ASNO
(risos) Eu estava esperando que isso fosse
um final feliz.

Shrek e Fiona se beijam... e o beijo se transforma em...

O PÂNTANO

... seu beijo de casamento. Shrek e Fiona agora estão casados. 'Eu estou
a Believer' de Smashmouth é tocada ao fundo. Shrek
e Fiona se separam e correm pela multidão para o seu
transporte. Que é feito de uma cebola gigante. Fiona joga seu buquê
que Cinderela e Branca de Neve tentam pegar. Mas eles acabam
até entrar em uma briga de gatos e assim o dragão pega o buquê
em vez de. O homem de gengibre foi consertado um pouco e agora
tem uma perna e anda com uma bengala-doce. Shrek e Fiona
sai enquanto o resto dos convidados se divertem e o Burro assume
cantando a canção.

HOMEM DE GENGIBRE
Deus abençoe todos nós.

ASNO
(quando ele termina de cantar e nós desaparecemos para
preto) Ah, isso é engraçado. Oh. Oh. Não posso
respirar. Eu não consigo respirar.

O FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
