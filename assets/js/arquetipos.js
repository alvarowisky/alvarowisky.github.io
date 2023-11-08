(() => {
    'use strict'

    const questions = [{
            key: 1,
            value: "Acredita no poder do conhecimento e da sabedoria para guiar suas ações e decisões na vida?"
        },
        {
            key: 2,
            value: "Costuma oferecer conselhos e reflexões ponderadas aos outros?"
        },
        {
            key: 3,
            value: "Valoriza a busca pela verdade e pelo entendimento profundo das questões?"
        },
        {
            key: 4,
            value: "É calmo e paciente, evitando agir impulsivamente em momentos de tensão?"
        },
        {
            key: 5,
            value: "Acredita que a experiência de vida é uma fonte valiosa de aprendizado e crescimento pessoal?"
        },
        {
            key: 6,
            value: "Teme perder sua capacidade de aprender, entender ou ser reconhecido por sua sabedoria?"
        },
        {
            key: 7,
            value: "Acredita que o conhecimento e a magia podem trazer transformação e mudança significativa?"
        },
        {
            key: 8,
            value: "Afirma possuir habilidades ou conhecimentos especiais além da compreensão comum?"
        },
        {
            key: 9,
            value: "Valoriza a busca pelo autoconhecimento e o aprimoramento constante de suas habilidades mágicas?"
        },
        {
            key: 10,
            value: "É enigmático, muitas vezes falando de forma misteriosa ou usando metáforas para transmitir suas ideias?"
        },
        {
            key: 11,
            value: "Acredita que existe uma conexão profunda entre o mundo físico e espiritual, e que a magia é uma forma de explorá-la?"
        },
        {
            key: 12,
            value: "Teme que seus poderes ou conhecimentos sejam mal utilizados ou caiam em mãos erradas?"
        },
        {
            key: 13,
            value: "Acredita que a vida é uma jornada de descoberta e que vale a pena explorar o desconhecido?"
        },
        {
            key: 14,
            value: "Costuma buscar constantemente novas aventuras e desafios em sua vida?"
        },
        {
            key: 15,
            value: "Valoriza a liberdade e a independência, buscando evitar restrições e limitações em sua jornada de exploração?"
        },
        {
            key: 16,
            value: "É entusiasmado, energético e disposto a se adaptar a novas situações?"
        },
        {
            key: 17,
            value: "Acredita que as experiências e aprendizados obtidos por meio da exploração são fundamentais para o crescimento pessoal?"
        },
        {
            key: 18,
            value: "Teme ficar preso em uma rotina monótona e perder a oportunidade de explorar e viver aventuras emocionantes?"
        },
        {
            key: 19,
            value: "Acredita que a criação e a expressão artística são fundamentais para enriquecer a vida e a sociedade?"
        },
        {
            key: 20,
            value: "Costuma buscar constantemente formas de expressar sua criatividade e materializar suas ideias?"
        },
        {
            key: 21,
            value: "Valoriza a originalidade e a autenticidade, buscando criar algo único e pessoal em suas obras?"
        },
        {
            key: 22,
            value: "É imaginativo, inspirado e muitas vezes mergulha em seus pensamentos e visões criativas?"
        },
        {
            key: 23,
            value: "Acredita que a arte e a criação têm o poder de provocar emoções, despertar reflexões e promover mudanças?"
        },
        {
            key: 24,
            value: "Teme perder sua capacidade criativa ou ser incapaz de produzir algo significativo e impactante?"
        },
        {
            key: 25,
            value: "Acredita que é seu dever e propósito ajudar e proteger os outros, mesmo que isso envolva sacrifícios pessoais?"
        },
        {
            key: 26,
            value: "Está disposto a enfrentar perigos e obstáculos para superar ameaças e salvar o dia? Valoriza a justiça, a honra e a lealdade como princípios essenciais em suas ações heroicas?"
        },
        {
            key: 27,
            value: "É altruísta, agindo muitas vezes em benefício dos outros, mesmo que isso implique riscos para si mesmo?"
        },
        {
            key: 28,
            value: "Acredita que é possível fazer a diferença e causar impacto positivo no mundo ao lutar contra o mal e a injustiça?"
        },
        {
            key: 29,
            value: "Teme ser incapaz de proteger aqueles que ama ou falhar em cumprir suas missões heroicas?"
        },
        {
            key: 30,
            value: "Acredita que desafiar o status quo e lutar contra a opressão é fundamental para promover mudanças positivas?"
        },
        {
            key: 31,
            value: "Costuma desafiar as regras e convenções sociais, buscando seu próprio caminho e identidade?"
        },
        {
            key: 32,
            value: "Valoriza a liberdade pessoal e a autenticidade, rejeitando pressões para se encaixar em padrões estabelecidos?"
        },
        {
            key: 33,
            value: "É audacioso, ousado e muitas vezes assume riscos para seguir suas convicções?"
        },
        {
            key: 34,
            value: "Acredita que é possível e necessário questionar as estruturas de poder e as normas sociais para criar um mundo mais justo?"
        },
        {
            key: 35,
            value: "Teme ser sufocado ou controlado pelas instituições ou expectativas sociais, perdendo sua autonomia e individualidade?"
        },
        {
            key: 36,
            value: "Acredita que o amor é uma das forças mais poderosas que conecta e transforma as pessoas?"
        },
        {
            key: 37,
            value: "Valoriza o amor, a beleza e a harmonia em todas as áreas da vida, buscando criar relacionamentos significativos?"
        },
        {
            key: 38,
            value: "Valoriza a empatia e a conexão emocional, buscando compreender as emoções e necessidades dos outros?"
        },
        {
            key: 39,
            value: "É carinhoso, afetuoso e procura demonstrar cuidado e ternura em seus relacionamentos? Acredita que o amor pode curar feridas emocionais e trazer sentido e propósito à vida?"
        },
        {
            key: 40,
            value: "Teme a solidão e o abandono, buscando evitar situações que possam levar ao rompimento de laços afetivos?"
        },
        {
            key: 41,
            value: "Acredita que a vida é uma brincadeira e que é melhor viver sem se preocupar com as responsabilidades?"
        },
        {
            key: 42,
            value: "Costuma agir impulsivamente, sem considerar as possíveis consequências de suas ações?"
        },
        {
            key: 43,
            value: "Valoriza a liberdade e a espontaneidade, evitando se prender a regras ou planejamentos?"
        },
        {
            key: 44,
            value: "É despreocupado, leve e muitas vezes age de forma infantil ou lúdica?"
        },
        {
            key: 45,
            value: "Acredita que as coisas sempre darão certo e que tudo acabará bem, mesmo sem tomar precauções?"
        },
        {
            key: 46,
            value: "Teme perder a liberdade e a diversão, mas pode não perceber os perigos ou problemas em suas ações?"
        },
        {
            key: 47,
            value: "Acredita que cuidar e apoiar os outros é uma forma significativa de contribuir para o mundo?"
        },
        {
            key: 48,
            value: "Costuma se colocar à disposição dos outros, oferecendo ajuda e suporte quando necessário?"
        },
        {
            key: 49,
            value: "Valoriza o bem-estar, a saúde e a felicidade dos outros, colocando suas necessidades em primeiro lugar?"
        },
        {
            key: 50,
            value: "É compassivo, gentil e disposto a ouvir e compreender os problemas e preocupações alheias?"
        },
        {
            key: 51,
            value: "Acredita que a empatia e o cuidado são fundamentais para criar conexões significativas e relacionamentos saudáveis?"
        },
        {
            key: 52,
            value: "Teme não ser capaz de ajudar ou proteger aqueles que ama, ou se preocupa em ser percebido como negligente ou insensível?"
        },
        {
            key: 53,
            value: "Acredita que viver uma vida simples e comum é uma forma válida de encontrar significado e satisfação?"
        },
        {
            key: 54,
            value: "Normalmente leva uma vida comum, sem estar envolvido em grandes aventuras ou acontecimentos extraordinários?"
        },
        {
            key: 55,
            value: "Valoriza a estabilidade, a rotina e a segurança em sua vida cotidiana?"
        },
        {
            key: 56,
            value: "É realista, pragmático e geralmente lida bem com as situações comuns do dia a dia?"
        },
        {
            key: 57,
            value: "Acredita que a felicidade pode ser encontrada nas pequenas coisas da vida e nos relacionamentos com as pessoas ao seu redor?"
        },
        {
            key: 58,
            value: "Teme perder sua estabilidade e segurança, ou se sente ansioso com mudanças radicais em sua vida comum?"
        },
        {
            key: 59,
            value: "Acredita que a vida é cheia de possibilidades e que o mundo é um lugar bom e acolhedor?"
        },
        {
            key: 60,
            value: "Tende a ver o lado positivo das situações e das pessoas, evitando ceticismo ou desconfiança?"
        },
        {
            key: 61,
            value: "Valoriza a inocência e a simplicidade, buscando manter-se afastado de negatividade e cinismo?"
        },
        {
            key: 62,
            value: "É gentil, amável e tende a tratar os outros com benevolência e compaixão?"
        },
        {
            key: 63,
            value: "Acredita que é possível encontrar beleza e bondade em todas as coisas e que as pessoas são, em sua essência, boas?"
        },
        {
            key: 64,
            value: "Teme ser enganado, traído ou perder sua inocência, podendo se sentir vulnerável diante da maldade ou crueldade do mundo?"
        },
        {
            key: 65,
            value: "Acredita que governar é uma responsabilidade que requer sabedoria e compromisso com o bem-estar do povo?"
        },
        {
            key: 66,
            value: "Exerce influência e autoridade sobre outros, buscando guiar e liderar de forma justa e benevolente?"
        },
        {
            key: 67,
            value: "Valoriza a estabilidade, a ordem e a prosperidade do seu reino, comunidade ou organização?"
        },
        {
            key: 68,
            value: "É carismático, assertivo e possui habilidades de liderança que inspiram confiança e respeito?"
        },
        {
            key: 69,
            value: "Acredita que o poder deve ser usado para proteger e melhorar a vida das pessoas sob sua liderança?"
        },
        {
            key: 70,
            value: "Teme perder o controle, ser desafiado ou perder o respeito e a lealdade dos seus súditos ou seguidores?"
        }
    ];

    const shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    const questionResults = document.getElementById("questionResults");
    let count = 1;

    shuffleQuestions.forEach((question) => {

        let row = document.createElement("div");
        let formGroup = document.createElement("div");
        let questionParagraph = document.createElement("p");
        let formCheckYes = document.createElement("div");
        let inputYes = document.createElement("input");
        let labelYes = document.createElement("label");
        let formCheckNo = document.createElement("div");
        let inputNo = document.createElement("input");
        let labelNo = document.createElement("label");

        labelNo.classList.add("form-check-label");
        labelNo.setAttribute("for", "question-" + question.key + "-no");
        labelNo.textContent = "Não";

        inputNo.classList.add("form-check-input");
        inputNo.setAttribute("type", "radio");
        inputNo.setAttribute("name", "question-" + question.key);
        inputNo.setAttribute("id", "question-" + question.key + "-no");
        inputNo.setAttribute("value", "no");

        formCheckNo.classList.add("form-check");
        formCheckNo.classList.add("form-check-inline");
        formCheckNo.append(labelNo);
        formCheckNo.append(inputNo);

        labelYes.classList.add("form-check-label");
        labelYes.setAttribute("for", "question-" + question.key + "-yes");
        labelYes.textContent = "Sim";

        inputYes.classList.add("form-check-input");
        inputYes.setAttribute("type", "radio");
        inputYes.setAttribute("name", "question-" + question.key);
        inputYes.setAttribute("id", "question-" + question.key + "-yes");
        inputYes.setAttribute("value", "yes");

        formCheckYes.classList.add("form-check");
        formCheckYes.classList.add("form-check-inline");
        formCheckYes.append(labelYes);
        formCheckYes.append(inputYes);

        questionParagraph.textContent = count + ". " + question.value;

        formGroup.classList.add("form-group");
        formGroup.classList.add("col-md-12");

        formGroup.append(questionParagraph);
        formGroup.append(formCheckYes);
        formGroup.append(formCheckNo);

        row.classList.add("row");
        row.append(formGroup);

        questionResults.append(row);
        count++;
    });

})();