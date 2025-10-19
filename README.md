# Lima Spacheco - Website

Website institucional para Lima Spacheco, empresa especializada em eventos e celebrações.

## Sobre o Projeto

Este é um website moderno e responsivo desenvolvido com as mais recentes tecnologias web, oferecendo uma experiência excepcional para os visitantes.

## Tecnologias Utilizadas

Este projeto foi construído com:

- **Vite** - Build tool moderna e rápida
- **TypeScript** - Tipagem estática para JavaScript
- **React** - Biblioteca para interfaces de usuário
- **shadcn/ui** - Componentes de UI modernos e acessíveis
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para aplicações React

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue até o diretório do projeto
cd limaspacheco

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de UI base
│   ├── Hero.tsx        # Seção hero da página inicial
│   ├── Services.tsx    # Seção de serviços
│   ├── Portfolio.tsx   # Galeria de portfólio
│   ├── Testimonials.tsx # Depoimentos
│   ├── CTA.tsx         # Call-to-action
│   ├── Navbar.tsx      # Navegação
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
├── assets/             # Imagens e recursos estáticos
├── hooks/              # Hooks customizados
└── lib/                # Utilitários e configurações
```

## Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Deploy

O projeto pode ser facilmente deployado em qualquer plataforma que suporte aplicações React/Vite, como:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## Licença

Este projeto é propriedade de DanielPMorais.