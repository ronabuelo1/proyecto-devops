# Flujo DevOps con Git

## Estructura de ramas
- `main`: Rama de producción
- `dev`: Rama de desarrollo
- `hotfix/*`: Correcciones urgentes
- `feature/*`: Nuevas funcionalidades

## Diagrama de flujo
```mermaid
graph TD;
    main --> dev;
    dev --> feature/nuevo-boton;
    dev --> feature/mejora-estilos;
    main --> hotfix/arreglo-urgente;
```
