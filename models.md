{

    "identificacaoPessoal": {

    "termosDeUso": "boolean",

    "nomeCivil": "string",

    "nomeSocial":"string",

    "estadoCivil": "string",

    "nacionalidade":"string",

    "orientacaoSexual": "string",

    "identidadeDeGenero":"string",

    "documentosPessoais":"string",

    "faixaEtaria":"string",

    "email": "string",

    "telefone":"string"

    },

    "cadastroGeral":{

    "identificacaoPessoal": "id",

    "dimensaoHabitacao":"id",

    "dimensaoDeficiencia":"id",

    "dimensaoEducacao":"id",

    "dimensaoTrabalhoeRenda":"id",

    "dimensaoSaude": "id",

    "dimensaoAssistenciaSocial": "id",

    },

    "dimensaoHabitacao":{

    "regiao":"string",

    "endereco": "string",

    "municipio": "string",

    "zona":"string",

    "tipoDeResidencia":"string"

    },

    "dimensaoDeficiencia":{

    "possui":"boolean",

    "descricao":"string | null"

    },

    "dimensaoEducacao":{

    "escolaridade":"string",

    "lgbtfobiaNaEscola":"boolean",

    "descricao":"string | null"

    },

    "dimensaoTrabalhoeRenda": {

    "estaTrabalhando":"boolean",

    "areaDeAtuacao": "string | null",

    "tipodeEmprego": "string",

    "buscandoEmprego":"string",

    "rendaMensal":"string",

    "desafiosTrabalho":"string",

    "acaoEmpregabilidade": "string"

    },

    "dimensaoSaude":{

    "acessoMetodosPrevencao": "string",

    "preparacaoProfissionais":"string",

    "servicoEspecifico": "string",

    "respeitoOrientIdentidade":"boolean",

    "lgbtfobiaNaSaude": "boolean"

    },

    "dimensaoAssistenciaSocial": {

    "atendimentoRedeSuas": "string",

    "atendimentoHumanizado": "boolean",

    "respeitoOrientIdentidade":"boolean",

    },

    "dimensaoSegurancaPublica": {

    "sofreuLgbtfobia": "boolean",

    "descricao":"string | null",

    "localDoFato":"string",

    "procurouDelegacia": "boolean",

    "motivo":"string | null",

    "profissionaisPreparados": "string",

    "sentimentoLgbtfobia": "string",

    "segurançaemMorar": "string"

    },

    "avaliação": {

    "importanciaCenso":"string",

    "sugestaoReclamacaoDenuncia": "string",

    "receberResultado": "boolean",

    "contato": "string | null"

    }

}
