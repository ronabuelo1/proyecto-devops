echo "# Flujo DevOps con Git

## Estructura de ramas
- main: Rama principal de producción
- dev: Rama de desarrollo integrado
- hotfix/*: Ramas para correcciones urgentes
- feature/*: Ramas para nuevas funcionalidades

## Diagrama de flujo
```mermaid
graph TD;
    main --> dev;
    dev --> feature/nuevo-boton;
    dev --> feature/mejora-estilos;
    main --> hotfix/arreglo-urgente;
    hotfix/arreglo-urgente --> dev;
```" > README.md
