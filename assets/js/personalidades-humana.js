(() => {
    'use strict'

    const questions = [{
            question: "Sinto que minhas necessidades básicas (como alimentação, abrigo e segurança) estão plenamente atendidas?",
            type: "consciencia-basica",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Estou consciente das minhas sensações físicas e as percebo com facilidade?",
            type: "consciencia-basica",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Geralmente consigo identificar quando meu corpo está com fome, cansado ou estressado?",
            type: "consciencia-basica",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Sou capaz de reconhecer e nomear minhas emoções básicas (medo, raiva, alegria, tristeza)?",
            type: "emocoes-primarias",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Tenho controle sobre minhas reações emocionais em situações difíceis?",
            type: "emocoes-primarias",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Consigo expressar minhas emoções de maneira saudável e adequada?",
            type: "emocoes-primarias",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Tenho uma forte noção de quem sou e do que valorizo na vida?",
            type: "identidade",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Me sinto confortável com a imagem que tenho de mim mesmo?",
            type: "identidade",
            answers: [{
                    value: "1",
                    content: "Discordo totalmente"
                },
                {
                    value: "2",
                    content: "Discordo"
                },
                {
                    value: "3",
                    content: "Neutro"
                },
                {
                    value: "4",
                    content: "Concordo"
                },
                {
                    value: "5",
                    content: "Concordo totalmente"
                }
            ]
        },
        {
            question: "Minhas escolhas diárias refletem minha identidade e valores pessoais?",
            type: "identidade",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho relacionamentos saudáveis e satisfatórios com as pessoas ao meu redor?",
            type: "relacionamentos",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto que minhas interações sociais são autênticas e respeitosas?",
            type: "relacionamentos",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho a habilidade de manter limites saudáveis em meus relacionamentos?",
            type: "relacionamentos",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Consigo identificar padrões de comportamento repetitivos em minha vida?",
            type: "padroes-condicionamentos",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Estou ciente de como minhas crenças e condicionamentos influenciam minhas decisões?",
            type: "padroes-condicionamentos",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho consciência dos hábitos que gostaria de mudar para melhorar minha vida?",
            type: "padroes-condicionamentos",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho consciência de partes de mim que evito confrontar (medos, traumas, inseguranças)?",
            type: "sombra-inconsciente",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Reconheço que há aspectos da minha personalidade que estão ocultos ou reprimidos?",
            type: "sombra-inconsciente",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Trabalho ativamente para trazer à luz aspectos do meu inconsciente?",
            type: "sombra-inconsciente",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto que estou unindo todas as partes de quem sou em uma identidade coesa?",
            type: "integracao",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Consigo equilibrar as diferentes facetas da minha personalidade de forma harmoniosa?",
            type: "integracao",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Estou em paz com os aspectos sombrios e luminosos da minha psique?",
            type: "integracao",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho clareza sobre meus valores fundamentais e vivo de acordo com eles?",
            type: "valores-proposito",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto que estou seguindo um propósito maior em minha vida?",
            type: "valores-proposito",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "As minhas ações diárias refletem meu propósito e valores?",
            type: "valores-proposito",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto uma conexão profunda com algo maior do que eu mesmo?",
            type: "conexao-espiritual",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho práticas espirituais ou reflexivas que me ajudam a me conectar com o mundo ao meu redor?",
            type: "conexao-espiritual",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Encontro sentido e propósito em minha espiritualidade ou filosofia de vida?",
            type: "conexao-espiritual",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto que estou transcendo meu ego e vendo além das necessidades pessoais?",
            type: "autotranscendencia",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Experimento momentos de profunda compaixão e unidade com os outros?",
            type: "autotranscendencia",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Vivo com um senso de interconexão com todas as coisas?",
            type: "autotranscendencia",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto uma responsabilidade pessoal em contribuir para o bem-estar da sociedade?",
            type: "compromisso-bem-comum",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Me envolvo ativamente em causas ou ações que beneficiem o coletivo?",
            type: "compromisso-bem-comum",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Minhas decisões são guiadas por um desejo de promover o bem comum?",
            type: "compromisso-bem-comum",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Sinto que estou vivendo minha vida em plena realização e harmonia?",
            type: "realizacao-plena",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Minhas escolhas e ações são congruentes com minha verdade interior?",
            type: "realizacao-plena",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }, {
            question: "Tenho uma sensação de paz interior e completude?",
            type: "realizacao-plena",
            answers: [{
                value: "1",
                content: "Discordo totalmente"
            }, {
                value: "2",
                content: "Discordo"
            }, {
                value: "3",
                content: "Neutro"
            }, {
                value: "4",
                content: "Concordo"
            }, {
                value: "5",
                content: "Concordo totalmente"
            }]
        }
    ];

    function convertNumberToLetter(number) {
        var unicode = number + 64;
        return String.fromCharCode(unicode);
    }

    // embaralha as perguntas
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    const questionResults = document.getElementById("questionResults");

    let countQuestions = 1;

    shuffledQuestions.forEach((question) => {

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
            label.setAttribute("for", "answer-" + question.type + "-" + countQuestions + "-" + countAnswers);
            label.textContent = convertNumberToLetter(countAnswers) + ") " + answer.content;

            input.classList.add("form-check-input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "answer-" + countQuestions);
            input.setAttribute("id", "answer-" + question.type + "-" + countQuestions + "-" + countAnswers);
            input.setAttribute("value", answer.value);

            if (countAnswers === 1) {
                input.setAttribute("required", "required");
            }

            formCheck.classList.add("form-check");
            formCheck.append(label);
            formCheck.append(input);

            if (countAnswers === 5) {
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

    function createResultElement(totalScore) {
        let span = document.createElement("span");
        if (totalScore <= 5) {
            span.textContent = "Esta camada pode representar um desafio significativo em sua vida atual. Vale a pena explorar mais profundamente os aspectos dessa camada em suas sessões terapêuticas.";
        } else if (totalScore >= 6 && totalScore <= 10) {
            span.textContent = "Esta é uma área que pode requerer trabalho adicional. Pode haver desafios ou bloqueios que estão impedindo seu pleno desenvolvimento nessa camada.";
        } else {
            span.textContent = "Você parece estar bem alinhado(a) com essa camada, refletindo um bom nível de desenvolvimento e equilíbrio nessa área.";
        }

        return span;
    }

    function getQuestionResult(questionType) {
        let questions = document.querySelectorAll(`input[type="radio"][id*="${questionType}"]:checked`);
        let totalScore = Array.from(questions).reduce(function(sum, element) {
            return sum + parseInt(element.value);
        }, 0);
        return createResultElement(totalScore);
    }

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
            let consciencia_basica = getQuestionResult("consciencia-basica");
            let emocoes_primarias = getQuestionResult("emocoes-primarias");
            let identidade = getQuestionResult("identidade");
            let relacionamentos = getQuestionResult("relacionamentos");
            let padroes_condicionamentos = getQuestionResult("padroes-condicionamentos");
            let sombra_inconsciente = getQuestionResult("sombra-inconsciente");
            let integracao = getQuestionResult("integracao");
            let valores_proposito = getQuestionResult("valores-proposito");
            let conexao_espiritual = getQuestionResult("conexao-espiritual");
            let autotranscendencia = getQuestionResult("autotranscendencia");
            let compromisso_bem_comum = getQuestionResult("compromisso-bem-comum");
            let realizacao_plena = getQuestionResult("realizacao-plena");

            document.getElementById('result-consciencia-basica').append(consciencia_basica);
            document.getElementById('result-emocoes-primarias').append(emocoes_primarias);
            document.getElementById('result-identidade').append(identidade);
            document.getElementById('result-relacionamentos').append(relacionamentos);
            document.getElementById('result-padroes-condicionamentos').append(padroes_condicionamentos);
            document.getElementById('result-sombra-inconsciente').append(sombra_inconsciente);
            document.getElementById('result-integracao').append(integracao);
            document.getElementById('result-valores-proposito').append(valores_proposito);
            document.getElementById('result-conexao-espiritual').append(conexao_espiritual);
            document.getElementById('result-autotranscendencia').append(autotranscendencia);
            document.getElementById('result-compromisso-bem-comum').append(compromisso_bem_comum);
            document.getElementById('result-realizacao-plena').append(realizacao_plena);

            bsCollapseTips.hide();
            bsCollapseQuestions.hide();
            bsCollapseResult.show();
        }
        questionForm.classList.add('was-validated');
    });
})();