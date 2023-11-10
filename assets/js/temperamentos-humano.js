(() => {
    'use strict'

    const questions = [{
            question: "Como você geralmente se comporta em ambientes sociais?",
            answers: [{
                    type: "colerico",
                    content: "Sou sociável e gosto de conhecer novas pessoas."
                },
                {
                    type: "melancolico",
                    content: "Sou bastante extrovertido e gosto de me destacar."
                },
                {
                    type: "fleumatico",
                    content: "Sou introvertido e prefiro observar as pessoas."
                },
                {
                    type: "sanguineo",
                    content: "Sou tranquilo e gosto de conversas mais calmas."
                }
            ]
        },
        {
            question: "Qual é a sua reação diante de um desafio?",
            answers: [{
                    type: "colerico",
                    content: "Me animo e gosto de buscar soluções criativas."
                },
                {
                    type: "melancolico",
                    content: "Fico muito motivado e gosto de traçar um plano de ação."
                },
                {
                    type: "fleumatico",
                    content: "Eu penso bastante antes de tomar alguma decisão."
                },
                {
                    type: "sanguineo",
                    content: "Fico tranquilo e busco soluções mais estáveis e seguras."
                }
            ]
        },
        {
            question: "Como você lida com emoções intensas?",
            answers: [{
                    type: "colerico",
                    content: "Geralmente mantenho a calma e tento acalmar as pessoas ao meu redor."
                },
                {
                    type: "melancolico",
                    content: "Gosto de enfrentar os problemas de frente e sou bem expressivo emocionalmente."
                },
                {
                    type: "fleumatico",
                    content: "Sou bastante sensível e gosto de processar bem minhas emoções antes de agir."
                },
                {
                    type: "sanguineo",
                    content: "Consigo manter a tranquilidade diante de situações emocionantes."
                }
            ]
        },
        {
            question: "Como você se comporta em uma equipe?",
            answers: [{
                    type: "colerico",
                    content: "Gosto de trabalhar com os outros e colaborar de maneira criativa."
                },
                {
                    type: "melancolico",
                    content: "Gosto de liderar e me destacar na equipe."
                },
                {
                    type: "fleumatico",
                    content: "Prefiro trabalhar sozinho ou em equipe pequena."
                },
                {
                    type: "sanguineo",
                    content: "Trabalho bem em equipe, mas prefiro um ambiente mais calmo e tranquilo."
                }
            ]
        },
        {
            question: "Qual estilo de liderança você mais admira?",
            answers: [{
                    type: "colerico",
                    content: "Líderes criativos e que incentivam sua equipe a pensar fora da caixa."
                },
                {
                    type: "melancolico",
                    content: "Líderes fortes e que sabem tomar decisões importantes."
                },
                {
                    type: "fleumatico",
                    content: "Líderes que valorizam a sensibilidade e o cuidado com as pessoas."
                },
                {
                    type: "sanguineo",
                    content: "Líderes tranquilos e que valorizam a harmonia na equipe."
                }
            ]
        },
        {
            question: "Como você lida com o estresse?",
            answers: [{
                    type: "colerico",
                    content: "Tentando manter a calma e resolvendo os problemas um a um."
                },
                {
                    type: "melancolico",
                    content: "Lidando diretamente com os problemas e buscando soluções práticas."
                },
                {
                    type: "fleumatico",
                    content: "Buscando atividades que me ajudem a relaxar e reduzir a ansiedade."
                },
                {
                    type: "sanguineo",
                    content: "Tentando manter a moderação e evitando o estresse ao máximo."
                }
            ]
        },
        {
            question: "Qual é a sua abordagem diante de novas situações?",
            answers: [{
                    type: "colerico",
                    content: "Gosto de experimentar coisas novas e não tenho medo de errar."
                },
                {
                    type: "melancolico",
                    content: "Encaro como um desafio e gosto de me superar."
                },
                {
                    type: "fleumatico",
                    content: "Analiso tudo com cuidado antes de tomar alguma decisão."
                },
                {
                    type: "sanguineo",
                    content: "Prefiro um ambiente mais tranquilo e familiar."
                }
            ]
        },
        {
            question: "Qual atividade você mais gosta de fazer no seu tempo livre?",
            answers: [{
                    type: "colerico",
                    content: "Sair com os amigos e fazer coisas diferentes."
                },
                {
                    type: "melancolico",
                    content: "Praticar esportes ou outras atividades físicas."
                },
                {
                    type: "fleumatico",
                    content: "Ler, escrever, pintar ou outras atividades mais introspectivas."
                },
                {
                    type: "sanguineo",
                    content: "Relaxar em casa, assistir a um filme ou ouvir música."
                }
            ]
        },
        {
            question: "Como você lida com mudanças repentinas?",
            answers: [{
                    type: "colerico",
                    content: "Tento me adaptar o mais rápido possível e não me abalo com mudanças."
                },
                {
                    type: "melancolico",
                    content: "Gosto de buscar soluções rápidas e me adaptar à nova situação."
                },
                {
                    type: "fleumatico",
                    content: "Fico preocupado e levo algum tempo para me ajustar."
                },
                {
                    type: "sanguineo",
                    content: "Tento manter a calma e esperar até que tudo se estabilize novamente."
                }
            ]
        },
        {
            question: "Como você se sente com elogios e críticas?",
            answers: [{
                    type: "colerico",
                    content: "Fico feliz com os elogios, mas não me deixo levar pelos comentários negativos."
                },
                {
                    type: "melancolico",
                    content: "Gosto de ser reconhecido pelo meu trabalho, mas às vezes me afeto com críticas."
                },
                {
                    type: "fleumatico",
                    content: "As críticas me afetam muito, mas valorizo os elogios."
                },
                {
                    type: "sanguineo",
                    content: "Não gosto muito de receber elogios ou críticas, prefiro avaliar minha performance sozinho."
                }
            ]
        },
        {
            question: "Qual é a sua abordagem em relação a mudanças em sua rotina?",
            answers: [{
                    type: "colerico",
                    content: "Gosto de experimentar coisas novas e não me importo em mudar minha rotina."
                },
                {
                    type: "melancolico",
                    content: "Tento ajustar minha rotina para incorporar as mudanças necessárias."
                },
                {
                    type: "fleumatico",
                    content: "Fico ansioso e tento manter minha rotina o mais estável possível."
                },
                {
                    type: "sanguineo",
                    content: "Prefiro manter minha rotina sem muitas mudanças, a menos que sejam necessárias."
                }
            ]
        },
        {
            question: "Como você se sente em grandes grupos de pessoas?",
            answers: [{
                    type: "colerico",
                    content: "Gosto de interagir com muitas pessoas diferentes."
                },
                {
                    type: "melancolico",
                    content: "Gosto de me destacar e ser notado no meio da multidão."
                },
                {
                    type: "fleumatico",
                    content: "Fico um pouco ansioso e prefiro me conectar com algumas pessoas de cada vez."
                },
                {
                    type: "sanguineo",
                    content: "Prefiro um ambiente mais tranquilo e familiar, com poucas pessoas."
                }
            ]
        },
        {
            question: "Como você se adapta a novos ambientes?",
            answers: [{
                    type: "colerico",
                    content: "Me adapto facilmente a novos ambientes e pessoas."
                },
                {
                    type: "melancolico",
                    content: "Gosto de conhecer bem o ambiente antes de me sentir confortável."
                },
                {
                    type: "fleumatico",
                    content: "Levo um pouco de tempo para me sentir confortável em novos ambientes."
                },
                {
                    type: "sanguineo",
                    content: "Prefiro ambientes mais tranquilos e familiares, onde me sinto mais confortável."
                }
            ]
        },
        {
            question: "Qual é a sua reação diante de conflitos?",
            answers: [{
                    type: "colerico",
                    content: "Tento manter a calma e resolver as coisas de maneira pacífica."
                },
                {
                    type: "melancolico",
                    content: "Gosto de enfrentar os problemas de frente e resolver de maneira direta."
                },
                {
                    type: "fleumatico",
                    content: "Fico incomodado com a situação e tento evitar o conflito."
                },
                {
                    type: "sanguineo",
                    content: "Procuro manter a harmonia no ambiente e evitar conflitos desnecessários."
                }
            ]
        },
        {
            question: "Qual é o seu maior medo?",
            answers: [{
                    type: "colerico",
                    content: "Perder oportunidades de experimentar coisas novas."
                },
                {
                    type: "melancolico",
                    content: "Falhar em minhas tarefas ou objetivos."
                },
                {
                    type: "fleumatico",
                    content: "Não ser compreendido ou não ter meu valor reconhecido."
                },
                {
                    type: "sanguineo",
                    content: "Perder minha estabilidade e tranquilidade."
                }
            ]
        },
        {
            question: "Como você busca conforto em momentos difíceis?",
            answers: [{
                    type: "colerico",
                    content: "Buscando apoio em amigos e familiares."
                },
                {
                    type: "melancolico",
                    content: "Tentando resolver os problemas de maneira prática."
                },
                {
                    type: "fleumatico",
                    content: "Buscando atividades introspectivas, como meditação ou reflexão."
                },
                {
                    type: "sanguineo",
                    content: "Buscando conforto na rotina diária e em momentos tranquilos."
                }
            ]
        },
        {
            question: "Que características você mais valoriza em outras pessoas?",
            answers: [{
                    type: "colerico",
                    content: "Criatividade e sociabilidade."
                },
                {
                    type: "melancolico",
                    content: "Forte personalidade e clareza de objetivos."
                },
                {
                    type: "fleumatico",
                    content: "Sensibilidade e compreensão."
                },
                {
                    type: "sanguineo",
                    content: "Tranquilidade e estabilidade emocional."
                }
            ]

        },
        {
            question: "Qual é a atividade profissional que mais combina com você?",
            answers: [{
                    type: "colerico",
                    content: "Profissões criativas que envolvam interação social."
                },
                {
                    type: "melancolico",
                    content: "Profissões de liderança e tomada de decisões importantes."
                },
                {
                    type: "fleumatico",
                    content: "Profissões que envolvam reflexão e expressão artística."
                },
                {
                    type: "sanguineo",
                    content: "Profissões estáveis e que não envolvam muita pressão ou estresse."
                }
            ]

        },
        {
            question: "Como você se comporta diante de pessoas que não conhece bem?",
            answers: [{
                    type: "colerico",
                    content: "Sou simpático e tento conhecer melhor a pessoa."
                },
                {
                    type: "melancolico",
                    content: "Sou direto e tento mostrar minha personalidade forte."
                },
                {
                    type: "fleumatico",
                    content: "Sou tímido e tenho dificuldades em me conectar com pessoas novas."
                },
                {
                    type: "sanguineo",
                    content: "Sou tranquilo e prefiro conhecer melhor as pessoas antes de me conectar."
                }
            ]
        },
        {
            question: "O que você valoriza mais em sua vida pessoal?",
            answers: [{
                    type: "colerico",
                    content: "Liberdade e experimentação de coisas novas."
                },
                {
                    type: "melancolico",
                    content: "Realizar meus objetivos e ser reconhecido pelo meu trabalho."
                },
                {
                    type: "fleumatico",
                    content: "Ter uma vida interior rica e profunda."
                },
                {
                    type: "sanguineo",
                    content: "Ter uma vida tranquila e harmoniosa, sem muitos altos e baixos emocionais."
                }
            ]
        }
    ];

    function convertNumberToLetter(number) {
        var unicode = number + 64;
        return String.fromCharCode(unicode);
    }

    // embaralha as perguntas
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // embaralha as respostas aninhadas dentro de cada pergunta
    const shuffledQuestionsWithAnswers = shuffledQuestions.map(question => {
        const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
        return {
            ...question,
            answers: shuffledAnswers
        };
    });

    const questionResults = document.getElementById("questionResults");

    let countQuestions = 1;

    shuffledQuestionsWithAnswers.forEach((question) => {

        let row = document.createElement("div");
        let formGroup = document.createElement("div");
        let questionParagraph = document.createElement("p");

        questionParagraph.textContent = countQuestions + ") " + question.question;

        formGroup.classList.add("form-group");
        formGroup.classList.add("col-md-12");
        formGroup.append(questionParagraph);

        let countAnswers = 1;
        question.answers.forEach((answer) => {
            let formCheck = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");

            label.classList.add("form-check-label");
            label.setAttribute("for", "answer-" + answer.type + "-" + countQuestions);
            label.textContent = convertNumberToLetter(countAnswers) + ") " + answer.content;

            input.classList.add("form-check-input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "answer-" + countQuestions);
            input.setAttribute("id", "answer-" + answer.type + "-" + countQuestions);
            input.setAttribute("value", answer.type);

            if (countAnswers === 1) {
                input.setAttribute("required", "required");
            }

            formCheck.classList.add("form-check");
            formCheck.append(label);
            formCheck.append(input);

            if (countAnswers === 4) {
                let feedback = document.createElement("div");

                feedback.classList.add("invalid-feedback");
                feedback.textContent = "Por favor, selecione uma opção.";
                formCheck.append(feedback);
            }

            formGroup.append(formCheck);

            countAnswers++;
        });

        row.classList.add("row");
        row.append(formGroup);

        questionResults.append(row);

        countQuestions++;
    });

    function convertToPercentage(value) {
        return Math.round(value * 100) + " %";
    }

    function getQuestionResult(questionKey) {
        let questions = document.querySelectorAll("input[name^=answer-]:checked");
        let yesAnswers = Array.from(questions).filter(function(element) {
            return element.value == questionKey;
        }).length;
        return convertToPercentage(yesAnswers / 20);
    }

    const bsCollapseQuestions = new bootstrap.Collapse('#collapse-questions', {
        toggle: false
    });
    const bsCollapseResult = new bootstrap.Collapse('#collapse-result', {
        toggle: false
    });

    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (questionForm.checkValidity()) {
            let colerico = getQuestionResult("colerico");
            let melancolico = getQuestionResult("melancolico");
            let fleumatico = getQuestionResult("fleumatico");
            let sanguineo = getQuestionResult("sanguineo");

            document.getElementById('result-colerico').textContent = colerico;
            document.getElementById('result-melancolico').textContent = melancolico;
            document.getElementById('result-fleumatico').textContent = fleumatico;
            document.getElementById('result-sanguineo').textContent = sanguineo;

            bsCollapseQuestions.hide();
            bsCollapseResult.show();
        }
        questionForm.classList.add('was-validated');
    });
})();