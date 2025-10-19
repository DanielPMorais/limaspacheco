# Sistema de Animações - Lima & Pacheco

Este documento descreve o sistema de animações implementado no site da Lima & Pacheco para criar transições suaves entre páginas e elementos.

## 🎯 Funcionalidades Implementadas

### 1. Transições de Página
- **Componente**: `PageTransition`
- **Localização**: `src/components/PageTransition.tsx`
- **Funcionalidade**: Animações suaves ao navegar entre páginas
- **Efeito**: Fade in/out com movimento vertical sutil
- **Scroll automático**: Sempre volta ao topo da página

### 2. Animações de Elementos
- **Hook**: `useAnimation` e `useScrollAnimation`
- **Localização**: `src/hooks/use-animation.tsx`
- **Funcionalidade**: Animações controladas por tempo ou scroll
- **Efeitos**: Fade in, slide in, scale in

### 3. Componente AnimatedSection
- **Componente**: `AnimatedSection`
- **Localização**: `src/components/AnimatedSection.tsx`
- **Funcionalidade**: Wrapper para animações de seções
- **Direções**: up, left, right, scale

### 4. Scroll Automático
- **Hook**: `useScrollToTop`
- **Localização**: `src/hooks/use-scroll-to-top.tsx`
- **Funcionalidade**: Scroll automático para o topo da página
- **Comportamento**: Suave e automático em mudanças de rota

## 🎨 Estilos CSS

### Classes de Animação Disponíveis
```css
/* Transições de página */
.page-transition-enter
.page-transition-exit

/* Animações de elementos */
.animate-fade-in-up
.animate-slide-in-left
.animate-slide-in-right
.animate-scale-in

/* Efeitos hover */
.hover-lift

/* Loading */
.loading-pulse
```

### Keyframes Implementados
- `pageEnter` - Entrada de página
- `pageExit` - Saída de página
- `fade-in-up` - Fade com movimento vertical
- `slide-in-left` - Slide da esquerda
- `slide-in-right` - Slide da direita
- `scale-in` - Escala com fade
- `pulse` - Efeito de pulsação

## 🚀 Como Usar

### 1. Transições de Página (Automático)
As transições de página são aplicadas automaticamente em todas as rotas através do `App.tsx`:

```tsx
<Route path="/" element={
  <PageTransition>
    <Index />
  </PageTransition>
} />
```

### 2. Animações de Elementos
```tsx
import { useAnimation } from '@/hooks/use-animation';

const MyComponent = () => {
  const animation = useAnimation({ delay: 200 });
  
  return (
    <div style={animation.animationStyle}>
      Conteúdo animado
    </div>
  );
};
```

### 3. Animações com Scroll
```tsx
import { useScrollAnimation } from '@/hooks/use-animation';

const MyComponent = () => {
  const { ref, animationStyle } = useScrollAnimation({ delay: 100 });
  
  return (
    <div ref={ref} style={animationStyle}>
      Conteúdo que anima ao aparecer na tela
    </div>
  );
};
```

### 4. Componente AnimatedSection
```tsx
import AnimatedSection from '@/components/AnimatedSection';

const MyPage = () => (
  <AnimatedSection direction="up" delay={200}>
    <section>
      Conteúdo da seção
    </section>
  </AnimatedSection>
);
```

## ⚙️ Configurações

### Opções do useAnimation
- `delay`: Tempo de atraso em ms (padrão: 0)
- `duration`: Duração da animação em segundos (padrão: 0.6)
- `threshold`: Threshold para scroll animation (padrão: 0.1)

### Opções do AnimatedSection
- `direction`: Direção da animação ('up', 'left', 'right', 'scale')
- `delay`: Tempo de atraso em ms (padrão: 0)
- `className`: Classes CSS adicionais

## 🎭 Efeitos Visuais

### Transições de Página
- **Duração**: 400ms
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Movimento**: translateY + scale sutil

### Animações de Elementos
- **Duração**: 600ms
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Movimento**: translateY(30px) → translateY(0)

### Hover Effects
- **Duração**: 300ms
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Movimento**: translateY(-5px)

## 📱 Responsividade

Todas as animações são otimizadas para dispositivos móveis:
- Redução de movimento em telas pequenas
- Performance otimizada com `will-change`
- Animações desabilitadas para usuários que preferem movimento reduzido

## 🔧 Performance

- Uso de `will-change` para otimização
- Animações baseadas em `transform` e `opacity`
- Cleanup automático de event listeners
- Intersection Observer para scroll animations

## 🎨 Personalização

Para adicionar novas animações, edite o arquivo `src/index.css` e adicione novos keyframes e classes de animação.

Exemplo:
```css
@keyframes minha-animacao {
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(360deg);
  }
}

.animate-minha-animacao {
  animation: minha-animacao 1s ease-out forwards;
}
```
