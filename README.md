# 🏎️ Route 66 Grand Prix - Interactive Invitation Experience

Una experiencia web inmersiva, interactiva y premium desarrollada como una invitación digital temática de carreras. Combina transiciones controladas por estado, orquestación de audio global, efectos visuales de profundidad y animaciones fluidas basadas en la física. 

Este proyecto fue optimizado para formar parte de mi portafolio profesional, sirviendo como demostración técnica en arquitectura de componentes de React, manejo de asincronía en interfaces y diseño moderno aplicando *Glassmorphism*.

---

## 🚀 Demo En Vivo
🔗 [Explora la experiencia interactiva aquí]((https://lightning-race-invitation.vercel.app/))

---

## ✨ Características Técnicas y Funcionalidades

* **🎬 Transición de Entrada Fluida (`AnimatePresence`):** Control de flujo asíncrono que desmonta de forma limpia la pantalla de bienvenida (`IntroScreen`) aplicando efectos combinados de desvanecimiento, escalado y desenfoque (`blur`), dando paso al contenido principal de forma fluida.
* **🎵 Orquestación y Control de Audio Global:** Implementación de referencias mutables (`useRef`) vinculadas a la API del DOM para la reproducción multimedia en segundo plano (`music.mp3`). Manejo nativo de políticas de restricciones de reproducción automática (*autoplay policies*) mediante capturas de promesas rechazadas.
* **🛣️ Capas de Movimiento Inmersivo (`RoadParallax`):** Estructura visual con componentes dedicados para simular traslación espacial y profundidad en carretera mientras se explora la interfaz.
* **⚡ Animaciones Impulsadas por Física (`Framer Motion`):** Desplazamientos laterales dinámicos con retraso para elementos de impacto visual (como el coche principal) y soporte nativo para efectos de interacción interactiva tridimensional en contenedores fijos.
* **🎫 Sistema Interno de Navegación Fluida:** Anclajes reactivos controlados mediante JavaScript nativo (`scrollIntoView`) para dirigir el flujo del usuario directamente hacia las secciones críticas de la invitación, como el pase de acceso premium (`RaceTicket`).

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **React.js** – Arquitectura modular basada en componentes y hooks de control de estado/referencias (`useState`, `useRef`).
* **Tailwind CSS** – Diseño responsivo optimizado mediante utilidades modernas, opacidades dinámicas y degradados complejos de color.
* **Framer Motion** – Orquestación avanzada de animaciones de entrada, salida y estados interactivos de alta tasa de refresco.
* **Vite** – Entorno de desarrollo rápido y empaquetador altamente eficiente.
* **Pnpm** – Gestor de dependencias veloz y optimizado para la gestión del almacenamiento en disco.

---

## 📂 Arquitectura del Proyecto

```text
├── public/
│   ├── audio/          # Recursos de audio ambientales sincronizados (.mp3)
│   └── images/         # Elementos gráficos vectoriales y mapas de bits (Fondos, Carros, Badges)
└── src/
    ├── components/     # Bloques de UI modulares y lógicos aislados
    │   ├── CountdownSection.jsx  # Temporizador dinámico en tiempo real
    │   ├── IntroScreen.jsx       # Evento inicial y disparador multimedia
    │   ├── JhonDoeCard.jsx       # Tarjeta informativa principal con efecto 3D
    │   ├── McQueenEntrance.jsx   # Animaciones específicas de objetos vectorizados
    │   ├── RaceTicket.jsx        # Pase de acceso interactivo premium
    │   ├── RoadParallax.jsx      # Control de capas de profundidad
    │   └── Route66Section.jsx    # Bloques gráficos adicionales de la ruta
    ├── styles/         # Hojas de estilo globales de la aplicación
    ├── App.jsx         # Orquestador del estado raíz y lógica de audio principal
    └── main.jsx        # Punto de entrada para la hidratación del DOM de React
