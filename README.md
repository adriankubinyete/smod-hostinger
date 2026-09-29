# hostinger

Administração da conta Hostinger direto do Discord, sem precisar logar na plataforma pra ações comuns (por enquanto, apontamento de DNS). Feito para a **Phonevox**.

Módulo do bot de Discord construído sobre o framework **sora**. Foi criado pra ser usado em cima dele: a pasta do módulo vai em `src/usermodules/` e o loader a carrega sozinho, sem registro manual.

## O que faz

Gerencia registros DNS dos domínios da conta pela API da Hostinger. Quem pode usar os subcomandos de DNS é controlado à parte, por `!hostinger add-perm` (guardado no Postgres), e não por `OWNER_IDS` nem por cargo do Discord.

Comando: `hostinger` com o grupo `dns` (`list`, `search`, `set`, `remove`) e o grupo `advanceddns` (`add` e outros).

## Instalação

Clone este repositório dentro de `src/usermodules/` do seu projeto sora e reinicie o bot (ou use `!bot reload`). O nome da pasta não importa: o módulo é identificado pelo `name` do cog (`hostinger`).

## Variáveis de ambiente

Lidas de `process.env` e centralizadas em `settings.ts` (`modConfig`).

| Variável | Descrição |
|---|---|
| `MOD_HOSTINGER_TOKEN` | Token da API (hPanel > Avatar > API > Criar token) |

## Banco

As migrations (permissões) rodam sozinhas no carregamento do módulo.
