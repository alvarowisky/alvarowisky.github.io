(() => {
    'use strict'

    const questions = [{
            key: "sabio-01",
            value: "Acredita no poder do conhecimento e da sabedoria para guiar suas ações e decisões na vida?"
        },
        {
            key: "sabio-02",
            value: "Costuma oferecer conselhos e reflexões ponderadas aos outros?"
        },
        {
            key: "sabio-03",
            value: "Valoriza a busca pela verdade e pelo entendimento profundo das questões?"
        },
        {
            key: "sabio-04",
            value: "É calmo e paciente, evitando agir impulsivamente em momentos de tensão?"
        },
        {
            key: "sabio-05",
            value: "Acredita que a experiência de vida é uma fonte valiosa de aprendizado e crescimento pessoal?"
        },
        {
            key: "sabio-06",
            value: "Teme perder sua capacidade de aprender, entender ou ser reconhecido por sua sabedoria?"
        },
        {
            key: "mago-01",
            value: "Acredita que o conhecimento e a magia podem trazer transformação e mudança significativa?"
        },
        {
            key: "mago-02",
            value: "Afirma possuir habilidades ou conhecimentos especiais além da compreensão comum?"
        },
        {
            key: "mago-03",
            value: "Valoriza a busca pelo autoconhecimento e o aprimoramento constante de suas habilidades mágicas?"
        },
        {
            key: "mago-04",
            value: "É enigmático, muitas vezes falando de forma misteriosa ou usando metáforas para transmitir suas ideias?"
        },
        {
            key: "mago-05",
            value: "Acredita que existe uma conexão profunda entre o mundo físico e espiritual, e que a magia é uma forma de explorá-la?"
        },
        {
            key: "mago-06",
            value: "Teme que seus poderes ou conhecimentos sejam mal utilizados ou caiam em mãos erradas?"
        },
        {
            key: "explorador-01",
            value: "Acredita que a vida é uma jornada de descoberta e que vale a pena explorar o desconhecido?"
        },
        {
            key: "explorador-02",
            value: "Costuma buscar constantemente novas aventuras e desafios em sua vida?"
        },
        {
            key: "explorador-03",
            value: "Valoriza a liberdade e a independência, buscando evitar restrições e limitações em sua jornada de exploração?"
        },
        {
            key: "explorador-04",
            value: "É entusiasmado, energético e disposto a se adaptar a novas situações?"
        },
        {
            key: "explorador-05",
            value: "Acredita que as experiências e aprendizados obtidos por meio da exploração são fundamentais para o crescimento pessoal?"
        },
        {
            key: "explorador-06",
            value: "Teme ficar preso em uma rotina monótona e perder a oportunidade de explorar e viver aventuras emocionantes?"
        },
        {
            key: "criador-01",
            value: "Acredita que a criação e a expressão artística são fundamentais para enriquecer a vida e a sociedade?"
        },
        {
            key: "criador-02",
            value: "Costuma buscar constantemente formas de expressar sua criatividade e materializar suas ideias?"
        },
        {
            key: "criador-03",
            value: "Valoriza a originalidade e a autenticidade, buscando criar algo único e pessoal em suas obras?"
        },
        {
            key: "criador-04",
            value: "É imaginativo, inspirado e muitas vezes mergulha em seus pensamentos e visões criativas?"
        },
        {
            key: "criador-05",
            value: "Acredita que a arte e a criação têm o poder de provocar emoções, despertar reflexões e promover mudanças?"
        },
        {
            key: "criador-06",
            value: "Teme perder sua capacidade criativa ou ser incapaz de produzir algo significativo e impactante?"
        },
        {
            key: "heroi-01",
            value: "Acredita que é seu dever e propósito ajudar e proteger os outros, mesmo que isso envolva sacrifícios pessoais?"
        },
        {
            key: "heroi-02",
            value: "Está disposto a enfrentar perigos e obstáculos para superar ameaças e salvar o dia?"
        },
        {
            key: "heroi-03",
            value: "Valoriza a justiça, a honra e a lealdade como princípios essenciais em suas ações heroicas?"
        },
        {
            key: "heroi-04",
            value: "É altruísta, agindo muitas vezes em benefício dos outros, mesmo que isso implique riscos para si mesmo?"
        },
        {
            key: "heroi-05",
            value: "Acredita que é possível fazer a diferença e causar impacto positivo no mundo ao lutar contra o mal e a injustiça?"
        },
        {
            key: "heroi-06",
            value: "Teme ser incapaz de proteger aqueles que ama ou falhar em cumprir suas missões heroicas?"
        },
        {
            key: "rebelde-01",
            value: "Acredita que desafiar o status quo e lutar contra a opressão é fundamental para promover mudanças positivas?"
        },
        {
            key: "rebelde-02",
            value: "Costuma desafiar as regras e convenções sociais, buscando seu próprio caminho e identidade?"
        },
        {
            key: "rebelde-03",
            value: "Valoriza a liberdade pessoal e a autenticidade, rejeitando pressões para se encaixar em padrões estabelecidos?"
        },
        {
            key: "rebelde-04",
            value: "É audacioso, ousado e muitas vezes assume riscos para seguir suas convicções?"
        },
        {
            key: "rebelde-05",
            value: "Acredita que é possível e necessário questionar as estruturas de poder e as normas sociais para criar um mundo mais justo?"
        },
        {
            key: "rebelde-06",
            value: "Teme ser sufocado ou controlado pelas instituições ou expectativas sociais, perdendo sua autonomia e individualidade?"
        },
        {
            key: "amante-01",
            value: "Acredita que o amor é uma das forças mais poderosas que conecta e transforma as pessoas?"
        },
        {
            key: "amante-02",
            value: "Valoriza o amor, a beleza e a harmonia em todas as áreas da vida, buscando criar relacionamentos significativos?"
        },
        {
            key: "amante-03",
            value: "Valoriza a empatia e a conexão emocional, buscando compreender as emoções e necessidades dos outros?"
        },
        {
            key: "amante-04",
            value: "É carinhoso, afetuoso e procura demonstrar cuidado e ternura em seus relacionamentos?"
        },
        {
            key: "amante-05",
            value: "Acredita que o amor pode curar feridas emocionais e trazer sentido e propósito à vida?"
        },
        {
            key: "amante-06",
            value: "Teme a solidão e o abandono, buscando evitar situações que possam levar ao rompimento de laços afetivos?"
        },
        {
            key: "tolo-01",
            value: "Acredita que a vida é uma brincadeira e que é melhor viver sem se preocupar com as responsabilidades?"
        },
        {
            key: "tolo-02",
            value: "Costuma agir impulsivamente, sem considerar as possíveis consequências de suas ações?"
        },
        {
            key: "tolo-03",
            value: "Valoriza a liberdade e a espontaneidade, evitando se prender a regras ou planejamentos?"
        },
        {
            key: "tolo-04",
            value: "É despreocupado, leve e muitas vezes age de forma infantil ou lúdica?"
        },
        {
            key: "tolo-05",
            value: "Acredita que as coisas sempre darão certo e que tudo acabará bem, mesmo sem tomar precauções?"
        },
        {
            key: "tolo-06",
            value: "Teme perder a liberdade e a diversão, mas pode não perceber os perigos ou problemas em suas ações?"
        },
        {
            key: "cuidador-01",
            value: "Acredita que cuidar e apoiar os outros é uma forma significativa de contribuir para o mundo?"
        },
        {
            key: "cuidador-02",
            value: "Costuma se colocar à disposição dos outros, oferecendo ajuda e suporte quando necessário?"
        },
        {
            key: "cuidador-03",
            value: "Valoriza o bem-estar, a saúde e a felicidade dos outros, colocando suas necessidades em primeiro lugar?"
        },
        {
            key: "cuidador-04",
            value: "É compassivo, gentil e disposto a ouvir e compreender os problemas e preocupações alheias?"
        },
        {
            key: "cuidador-05",
            value: "Acredita que a empatia e o cuidado são fundamentais para criar conexões significativas e relacionamentos saudáveis?"
        },
        {
            key: "cuidador-06",
            value: "Teme não ser capaz de ajudar ou proteger aqueles que ama, ou se preocupa em ser percebido como negligente ou insensível?"
        },
        {
            key: "homem-comum-01",
            value: "Acredita que viver uma vida simples e comum é uma forma válida de encontrar significado e satisfação?"
        },
        {
            key: "homem-comum-02",
            value: "Normalmente leva uma vida comum, sem estar envolvido em grandes aventuras ou acontecimentos extraordinários?"
        },
        {
            key: "homem-comum-03",
            value: "Valoriza a estabilidade, a rotina e a segurança em sua vida cotidiana?"
        },
        {
            key: "homem-comum-04",
            value: "É realista, pragmático e geralmente lida bem com as situações comuns do dia a dia?"
        },
        {
            key: "homem-comum-05",
            value: "Acredita que a felicidade pode ser encontrada nas pequenas coisas da vida e nos relacionamentos com as pessoas ao seu redor?"
        },
        {
            key: "homem-comum-06",
            value: "Teme perder sua estabilidade e segurança, ou se sente ansioso com mudanças radicais em sua vida comum?"
        },
        {
            key: "inocente-01",
            value: "Acredita que a vida é cheia de possibilidades e que o mundo é um lugar bom e acolhedor?"
        },
        {
            key: "inocente-02",
            value: "Tende a ver o lado positivo das situações e das pessoas, evitando ceticismo ou desconfiança?"
        },
        {
            key: "inocente-03",
            value: "Valoriza a inocência e a simplicidade, buscando manter-se afastado de negatividade e cinismo?"
        },
        {
            key: "inocente-04",
            value: "É gentil, amável e tende a tratar os outros com benevolência e compaixão?"
        },
        {
            key: "inocente-05",
            value: "Acredita que é possível encontrar beleza e bondade em todas as coisas e que as pessoas são, em sua essência, boas?"
        },
        {
            key: "inocente-06",
            value: "Teme ser enganado, traído ou perder sua inocência, podendo se sentir vulnerável diante da maldade ou crueldade do mundo?"
        },
        {
            key: "governante-01",
            value: "Acredita que governar é uma responsabilidade que requer sabedoria e compromisso com o bem-estar do povo?"
        },
        {
            key: "governante-02",
            value: "Exerce influência e autoridade sobre outros, buscando guiar e liderar de forma justa e benevolente?"
        },
        {
            key: "governante-03",
            value: "Valoriza a estabilidade, a ordem e a prosperidade do seu reino, comunidade ou organização?"
        },
        {
            key: "governante-04",
            value: "É carismático, assertivo e possui habilidades de liderança que inspiram confiança e respeito?"
        },
        {
            key: "governante-05",
            value: "Acredita que o poder deve ser usado para proteger e melhorar a vida das pessoas sob sua liderança?"
        },
        {
            key: "governante-06",
            value: "Teme perder o controle, ser desafiado ou perder o respeito e a lealdade dos seus súditos ou seguidores?"
        }
    ];

    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    const questionResults = document.getElementById("questionResults");
    let count = 1;

    shuffledQuestions.forEach((question) => {

        let row = document.createElement("div");
        let formGroup = document.createElement("div");
        let questionParagraph = document.createElement("p");
        let formCheckYes = document.createElement("div");
        let inputYes = document.createElement("input");
        let labelYes = document.createElement("label");
        let formCheckNo = document.createElement("div");
        let inputNo = document.createElement("input");
        let labelNo = document.createElement("label");
        let feedback = document.createElement("div");

        labelNo.classList.add("form-check-label");
        labelNo.setAttribute("for", "question-" + question.key + "-no");
        labelNo.textContent = "Não";

        feedback.classList.add("invalid-feedback");
        feedback.textContent = "Por favor, selecione uma opção.";

        inputNo.classList.add("form-check-input");
        inputNo.setAttribute("type", "radio");
        inputNo.setAttribute("name", "question-" + question.key);
        inputNo.setAttribute("id", "question-" + question.key + "-no");
        inputNo.setAttribute("value", "no");

        formCheckNo.classList.add("form-check");
        formCheckNo.append(labelNo);
        formCheckNo.append(inputNo);
        formCheckNo.append(feedback);

        labelYes.classList.add("form-check-label");
        labelYes.setAttribute("for", "question-" + question.key + "-yes");
        labelYes.textContent = "Sim";

        inputYes.classList.add("form-check-input");
        inputYes.setAttribute("type", "radio");
        inputYes.setAttribute("name", "question-" + question.key);
        inputYes.setAttribute("id", "question-" + question.key + "-yes");
        inputYes.setAttribute("value", "yes");
        inputYes.setAttribute("required", "required");

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

    function createResultElement(value) {
      let percentage = Math.round(value * 100);
      let span = document.createElement("span");
      span.textContent = percentage + "%";

      if (percentage >= 80) {
          span.classList.add("green");
      } else if (percentage < 80 && percentage >= 60) {
          span.classList.add("lime");
      } else {
          span.classList.add("gray");
      }

      return span;
    }

    function getQuestionResult(questionKey) {
        let questions = document.querySelectorAll("input[name^=question-" + questionKey + "]:checked");
        let yesAnswers = Array.from(questions).filter(function(element) {
            return element.value == "yes";
        }).length;
        return createResultElement(yesAnswers / 6);
    }

    const questionForm = document.getElementById('questionForm');
    const bsCollapseTips = new bootstrap.Collapse('#collapse-tips', {
        toggle: false
    });
    const bsCollapseQuestions = new bootstrap.Collapse('#collapse-questions', {
        toggle: false
    });
    const bsCollapseResult = new bootstrap.Collapse('#collapse-result', {
        toggle: false
    });

    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (questionForm.checkValidity()) {
            let sabio = getQuestionResult("sabio");
            let mago = getQuestionResult("mago");
            let explorador = getQuestionResult("explorador");
            let criador = getQuestionResult("criador");
            let heroi = getQuestionResult("heroi");
            let rebelde = getQuestionResult("rebelde");
            let amante = getQuestionResult("amante");
            let tolo = getQuestionResult("tolo");
            let cuidador = getQuestionResult("cuidador");
            let homemComum = getQuestionResult("homem-comum");
            let inocente = getQuestionResult("inocente");
            let governante = getQuestionResult("governante");

            document.getElementById('result-sabio').append(sabio);
            document.getElementById('result-mago').append(mago);
            document.getElementById('result-explorador').append(explorador);
            document.getElementById('result-criador').append(criador);
            document.getElementById('result-heroi').append(heroi);
            document.getElementById('result-rebelde').append(rebelde);
            document.getElementById('result-amante').append(amante);
            document.getElementById('result-tolo').append(tolo);
            document.getElementById('result-cuidador').append(cuidador);
            document.getElementById('result-homem-comum').append(homemComum);
            document.getElementById('result-inocente').append(inocente);
            document.getElementById('result-governante').append(governante);

            bsCollapseTips.hide();
            bsCollapseQuestions.hide();
            bsCollapseResult.show();
        }
        questionForm.classList.add('was-validated');
    });

})();