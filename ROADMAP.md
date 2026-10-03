# PATH — De Backend a Cloud & Security

Roadmap personal de David. 18–24 meses orientativos, 12 etapas, 4 proyectos y 3 rutas. Aprende en paralelo con la universidad y avanza según lo que puedes demostrar.

Prioridad inmediata: **Java → Git → SQL → Spring Boot**. Practica seguridad desde el inicio.

| Etapa | Meses | Objetivo |
|---|---|---|
| 1. Programación sólida | 0–3 | Aprende a resolver problemas y a escribir código que puedas explicar. |
| 2. Backend con Spring Boot | 3–6 | Convierte Java en una API con datos, reglas, permisos y pruebas. |
| 3. Linux y redes | 6–8 | Entiende qué ocurre bajo tu aplicación y cómo viajan sus solicitudes. |
| 4. Docker y contenedores | 8–9 | Haz que tu aplicación se ejecute de forma reproducible. |
| 5. Cloud con AWS | 9–12 | Despliega tu aplicación y entiende identidad, redes y costos. |
| 6. Integración y despliegue | 12–13 | Convierte cada cambio en un proceso repetible y comprobable. |
| 7. Infraestructura como código | 13–15 | Define, revisa y reproduce infraestructura con código. |
| 8. Kubernetes | 15–17 | Aprende a operar varias instancias de una aplicación. |
| 9. Observabilidad y fiabilidad | 17–18 | Pasa de saber que algo falla a entender por qué falla. |
| 10. AppSec y Cloud Security | 18–20 | Profundiza en seguridad de aplicaciones, identidades y cloud. |
| 11. DevSecOps | 20–22 | Integra controles de seguridad en cada cambio de software. |
| 12. Elige tu especialización | 22–24 | Usa tu experiencia práctica para elegir dónde profundizar. |

## 1. Programación sólida — Meses 0–3

Java será tu lenguaje principal para construir aplicaciones; Python será tu herramienta secundaria para automatizar. La meta es crear programas propios y depurarlos, sin depender de copiar un tutorial completo.

**Punto de partida:** Tu punto de partida: fundamentos básicos. Si ya conoces Java, comprueba los objetivos y dedica más tiempo a los temas que todavía te cuestan.

### Java: pensar y resolver

- **Variables, condicionales, ciclos y métodos:** Modela datos, toma decisiones, repite operaciones y divide una solución en funciones pequeñas.
- **Clases, objetos y encapsulamiento:** Representa entidades y protege sus reglas internas. Un Producto valida precio y existencias.
- **Herencia, polimorfismo e interfaces:** Distingue reutilizar comportamiento de definir contratos; practica también composición.
- **ArrayList, HashMap y HashSet:** Elige una lista para secuencias, un mapa para buscar por clave y un conjunto para evitar duplicados.
- **Exceptions y Generics:** Maneja errores con intención y usa tipos parametrizados para colecciones y componentes seguros.
- **Streams y Lambdas:** Filtra, transforma y resume colecciones. Domina primero el equivalente con ciclos.

### Git y GitHub, desde el día uno

- **Commits, branches y merges:** Guarda cambios pequeños con mensajes claros; trabaja en una rama y aprende a resolver un conflicto.
- **Pull requests y README:** Presenta un cambio para revisión y documenta cómo ejecutar tu proyecto, qué hace y qué falta.
- **Depuración y estructura:** Usa breakpoints, examina variables y organiza paquetes. Introduce Maven o Gradle y pruebas de lógica con JUnit.

### Python como herramienta secundaria

- **Variables, funciones, listas y diccionarios:** Escribe scripts pequeños que organicen información y reduzcan trabajo manual.
- **Archivos, JSON y requests:** Lee y escribe datos, consulta una API y maneja respuestas, errores y tiempos de espera.

### Práctica

1. Implementa operaciones primero en papel o pseudocódigo y luego en Java.
2. Depura un error de lógica con breakpoints y registra su causa.
3. Crea una rama para añadir búsqueda por ID y abre un pull request.
4. Escribe un script Python que lea un JSON de productos y genere un resumen.

### Proyecto: Sistema de inventario en Java

Una aplicación de consola con Productos, Proveedores, Usuarios, Categorías y Ventas. Crece por partes: primero productos, luego relaciones y operaciones.

- Crear, listar, buscar, editar y eliminar productos con validación.
- Registrar una venta y descontar existencias sin permitir valores negativos.
- Separar modelo y lógica; guardar datos en un archivo sencillo.
- Repositorio con README, commits y pruebas de las reglas de inventario.

**Una regla antes que una herramienta**

```text
public void vender(int cantidad) {
    if (cantidad <= 0 || cantidad > stock) {
        throw new IllegalArgumentException(
            "Cantidad inválida");
    }
    stock -= cantidad;
}
```

### Criterios para avanzar

- [ ] Creo un programa propio con clases, métodos y colecciones.
- [ ] Explico encapsulamiento, interfaces y polimorfismo con mi código.
- [ ] Encuentro y corrijo un error usando el depurador.
- [ ] Uso ramas y commits; preparo un README y un pull request.
- [ ] Escribo un script Python que procesa archivos y JSON.

### Recursos oficiales

- [Dev.java](https://dev.java/learn/) — Java, POO, Collections y Streams
- [Pro Git](https://git-scm.com/book/es/v2) — Control de versiones, ramas y colaboración
- [Tutorial de Python](https://docs.python.org/es/3/tutorial/) — Scripts, estructuras y archivos

## 2. Backend con Spring Boot — Meses 3–6

Tu stack será Java + Spring Boot + PostgreSQL. Aprende a recibir una solicitud HTTP, aplicar reglas de negocio y persistir datos. Esta base te permitirá entender el software que después desplegarás y protegerás.

**Punto de partida:** Crear y depurar aplicaciones Java; usar Git y entender clases, interfaces, excepciones y colecciones.

### HTTP y arquitectura de una API

- **REST, JSON y métodos HTTP:** GET consulta, POST crea, PUT reemplaza, PATCH modifica parcialmente y DELETE elimina. Aprende códigos de estado, cabeceras, paginación e idempotencia.
- **Controller, Service y Repository:** El controlador recibe HTTP, el servicio aplica reglas y el repositorio accede a datos. Evita mezclar todo en un solo archivo.
- **Inyección de dependencias y Configuration:** Spring conecta componentes. Separa configuración por entorno y utiliza variables de entorno para valores sensibles.
- **DTO, Validation y Exceptions:** Define contratos claros de entrada y salida, valida datos y devuelve errores consistentes sin exponer detalles internos.

### Persistencia y SQL

- **PostgreSQL: CRUD y consultas:** Practica SELECT, INSERT, UPDATE y DELETE; combina tablas con JOIN y resume con GROUP BY y HAVING.
- **Relaciones, restricciones e índices:** Diseña claves primarias y foráneas, nulabilidad y unicidad. Usa índices con criterio y aprende a leer un plan de consulta.
- **JPA / Hibernate y transacciones:** Mapea entidades y relaciones, controla transacciones y entiende qué SQL se genera. Introduce migraciones de esquema con una herramienta como Flyway.

### Seguridad, pruebas y documentación

- **Spring Security, roles y permisos:** Distingue autenticación de autorización. Comprueba que cada usuario solo acceda a sus recursos y guarda contraseñas con hashing adecuado.
- **JWT y OAuth 2.0:** Comprende firma, expiración y validación de tokens. JWT es un formato, no un sistema completo de seguridad; no diseñes tu propia criptografía.
- **JUnit, Mockito y pruebas de integración:** Prueba reglas de negocio y rutas relevantes, incluyendo datos inválidos y accesos sin permiso. Postman sirve para explorar la API, junto con pruebas automatizadas.
- **Swagger / OpenAPI:** Documenta contratos, ejemplos, estados de error y autenticación para que otro desarrollador pueda usar la API.

### Práctica

1. Dibuja el modelo de Colmena y Lectura antes de escribir entidades.
2. Implementa una ruta de principio a fin: HTTP → servicio → repositorio → PostgreSQL.
3. Simula lecturas del gateway con JSON; define unidades y marcas de tiempo con zona horaria.
4. Prueba una lectura válida, una inválida y el acceso sin permiso.

### Proyecto: KAABLAB Backend

El gateway recibe lecturas de los ESP32 por LoRa y las envía por HTTPS a una API Spring Boot, que las almacena en PostgreSQL. Puedes comenzar con datos simulados antes de conectar el hardware.

- Colmenas, dispositivos y lecturas con temperatura, humedad y fecha.
- Endpoints de ingestión y consulta; filtros por colmena y rango de tiempo.
- Autenticación del gateway y permisos para las consultas.
- Documentación OpenAPI, datos de muestra y pruebas automatizadas.

**Contrato inicial de tu API**

```text
POST /api/sensors/data
GET  /api/hives
GET  /api/hives/430
GET  /api/hives/430/temperature
GET  /api/hives/430/humidity

ESP32 → gateway → API → PostgreSQL
```

### Criterios para avanzar

- [ ] Construyo una API con Controller, Service y Repository.
- [ ] Diseño relaciones y consulto datos con JOIN y GROUP BY.
- [ ] Valido entradas y devuelvo errores HTTP consistentes.
- [ ] Pruebo autenticación, autorización y reglas de negocio.
- [ ] Otra persona puede ejecutar y usar mi API siguiendo el README.

### Recursos oficiales

- [Spring Guides](https://spring.io/guides) — APIs y proyectos guiados oficiales
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html) — SQL y bases de datos relacionales
- [Spring Security](https://docs.spring.io/spring-security/reference/) — Autenticación y autorización

## 3. Linux y redes — Meses 6–8

Durante los meses 6–7 practica Linux; en 7–8 profundiza redes. Ambos son esenciales para Cloud, DevOps y Security. Usa Ubuntu Server en una máquina virtual y trabaja por terminal.

**Punto de partida:** Tener una API local que puedas arrancar, detener y consultar; conocer HTTP básico.

### Linux: administra un sistema

- **Sistema de archivos y terminal:** Practica ls, cd, mkdir, cp, mv, rm, cat, less y grep. Aprende rutas absolutas, redirecciones, pipes y búsqueda de archivos.
- **Usuarios, grupos y permisos:** Usa chmod y chown, entiende lectura/escritura/ejecución y ejecuta servicios con permisos limitados.
- **Procesos, servicios y logs:** Investiga con ps, top y kill. Gestiona servicios con systemctl y revisa eventos con journalctl.
- **SSH, configuración y scripts:** Conecta con claves SSH, utiliza variables de entorno y automatiza tareas con Bash. Consulta servicios con curl y descarga recursos con wget.

### Redes: entiende la conexión

- **OSI, TCP/IP, IPv4 y subnetting:** Relaciona capas con problemas reales. Calcula subredes, identifica direcciones privadas y entiende rutas y gateways.
- **TCP, UDP, puertos y sockets:** Distingue transporte fiable de datagramas; reconoce qué servicio escucha en un puerto y cómo diagnosticar una conexión.
- **DNS, HTTP, HTTPS y TLS:** DNS resuelve nombres; HTTP describe la solicitud; TLS protege la conexión. Revisa certificados y diferencia nombre, dirección y puerto.
- **DHCP, NAT y routing:** Entiende asignación de IP, traducción de direcciones y cómo un paquete llega a otra red.
- **Firewall, VLAN y VPN:** Controla tráfico, segmenta redes y comprende túneles. Prueba reglas con servicios reales en tu laboratorio.

### Práctica

1. Crea una VM Ubuntu Server; entra por SSH y prepara un usuario para la aplicación.
2. Ejecuta tu API como servicio y encuentra sus logs desde la terminal.
3. Consulta la API con curl y diagnostica un puerto cerrado con ss y herramientas DNS.
4. Explica una conexión HTTPS sobre TCP: DNS → TCP → TLS → HTTP → balanceador → backend → base de datos.

### Proyecto: KAABLAB en un servidor Linux

Instala y opera tu API en una VM. Escribe un pequeño runbook: cómo iniciar el servicio, ver logs, comprobar puertos y recuperarlo después de un fallo.

- Servicio persistente con configuración externa y usuario limitado.
- Acceso SSH y reglas de firewall documentadas.
- Diagrama de red con direcciones, puertos y flujo de solicitudes.
- Script Bash de comprobación y runbook de diagnóstico.

**Investiga desde la terminal**

```text
systemctl status kaablab
journalctl -u kaablab --since today
ss -lntp
curl -i http://localhost:8080/api/hives

# ¿Falla el proceso, el puerto o la red?
```

### Criterios para avanzar

- [ ] Administro archivos, usuarios, permisos y servicios por terminal.
- [ ] Uso SSH y encuentro la causa de un fallo en los logs.
- [ ] Explico DNS, TCP/UDP, HTTPS y TLS con un caso real.
- [ ] Calculo una subred y entiendo NAT, rutas y puertos.
- [ ] Diagnostico una API inaccesible siguiendo un runbook.

### Recursos oficiales

- [Ubuntu: command line](https://ubuntu.com/tutorials/command-line-for-beginners) — Primeros pasos en la terminal Linux
- [MDN: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) — Solicitudes, métodos y respuestas
- [Cisco Networking Academy](https://www.netacad.com/) — Explora formación en redes

## 4. Docker y contenedores — Meses 8–9

Docker conecta programación y sistemas: defines el entorno de la aplicación en una imagen y la ejecutas como contenedor. Docker Compose permite levantar tu API y PostgreSQL juntos.

**Punto de partida:** Operar una API en Linux y comprender procesos, puertos, archivos y variables de entorno.

### El modelo de los contenedores

- **Image y Container:** Una imagen es la plantilla; un contenedor es una instancia en ejecución. Distingue contenedor, proceso y máquina virtual.
- **Dockerfile y builds:** Describe cómo empaquetar el backend. Usa etapas de construcción, una imagen base mantenida y un usuario sin privilegios.
- **Volumes y persistencia:** Los datos de PostgreSQL deben sobrevivir a la recreación del contenedor. Practica copia de seguridad y restauración.
- **Networks y puertos:** Conecta servicios por una red interna. Publica solo lo necesario y utiliza nombres de servicio para comunicar la API con la base de datos.
- **Registry y etiquetas:** Publica imágenes versionadas y aprende a identificar exactamente qué imagen corresponde a un commit.
- **Docker Compose:** Define servicios, redes, volúmenes y comprobaciones de salud en un archivo. Separa configuración de secretos.

### Práctica

1. Crea un Dockerfile para el JAR de Spring Boot y revisa tamaño y capas.
2. Levanta API y PostgreSQL con Docker Compose y datos de muestra.
3. Recrea los contenedores y comprueba que las lecturas persisten.
4. Restaura una copia de la base de datos en un entorno nuevo.

### Proyecto: KAABLAB reproducible con un comando

Cualquier persona que tenga Docker podrá levantar tu backend y PostgreSQL siguiendo instrucciones claras.

- Dockerfile, compose.yaml y .env.example sin secretos.
- Volumen persistente, red interna y health checks.
- Instrucciones para iniciar, detener, consultar logs y restaurar datos.
- Imagen etiquetada por versión o commit.

**Tu entorno, en comandos**

```text
docker compose up --build -d
docker compose ps
docker compose logs -f api
docker compose down

# El volumen conserva los datos.
```

### Criterios para avanzar

- [ ] Explico imagen, contenedor, volumen, red y registry.
- [ ] Empaqueto mi API con un Dockerfile reproducible.
- [ ] Levanto API y PostgreSQL con Docker Compose.
- [ ] Recreo contenedores sin perder datos y restauro una copia.
- [ ] Documento la ejecución para alguien que no conoce el proyecto.

### Recursos oficiales

- [Docker Get Started](https://docs.docker.com/get-started/) — Imágenes, contenedores y Compose

## 5. Cloud con AWS — Meses 9–12

No necesitas aprender todo AWS. Empieza con los servicios que resuelven las necesidades de tu backend y domina IAM: quién puede hacer qué sobre cada recurso.

**Punto de partida:** Linux, redes y una aplicación contenida con Docker; poder seguir sus logs y restaurar sus datos.

### Identidad y red primero

- **IAM: User, Group, Role, Policy y Permission:** Entiende identidades y políticas. Aplica least privilege, MFA y credenciales temporales; usa roles para cargas de trabajo y federación para personas cuando corresponda.
- **VPC, subnets y Security Groups:** Diseña segmentos públicos y privados, rutas y control de tráfico. Mantén la base de datos fuera del acceso público.
- **Responsabilidad compartida y costos:** Distingue lo que protege AWS de lo que configuras tú. Crea alertas de presupuesto y elimina recursos de laboratorio al terminar; una alerta no es un límite automático de gasto.

### Despliega una arquitectura pequeña

- **EC2 y RDS PostgreSQL:** Ejecuta tu API en una instancia Linux y utiliza una base de datos gestionada. Configura almacenamiento, copias y acceso privado.
- **S3 y CloudWatch:** S3 almacena objetos; CloudWatch te ayuda con logs, métricas y alarmas. Comprueba permisos y políticas de acceso.
- **Route 53, Load Balancer y HTTPS:** Relaciona dominio, DNS y certificados con el balanceador que dirige las solicitudes al backend.
- **Auto Scaling y Lambda:** Comprende cómo escalar capacidad y ejecutar funciones por eventos. Explóralos cuando tu caso lo necesite.

### Práctica

1. Configura identidad y presupuesto antes de crear infraestructura.
2. Dibuja VPC, subredes, rutas y Security Groups; justifica cada acceso.
3. Despliega Docker en EC2 y conecta a RDS en red privada.
4. Configura logs, una alarma básica y un plan para borrar el laboratorio.

### Proyecto: KAABLAB desplegado en AWS

Primero EC2 + Docker + Spring Boot + RDS. Después incorpora un dominio, HTTPS y un Load Balancer cuando estés listo.

- Backend consultable y base de datos con acceso restringido.
- Roles y permisos documentados; configuración y secretos fuera del código.
- Diagrama, costos estimados y procedimiento de limpieza.
- Logs, copias de seguridad y demostración del flujo de lecturas.

**Del navegador a tus datos**

```text
Dominio / Route 53
        ↓ HTTPS
Load Balancer
        ↓
EC2 + Docker + Spring Boot
        ↓ red privada
RDS PostgreSQL
```

### Criterios para avanzar

- [ ] Explico IAM y aplico permisos mínimos a un rol.
- [ ] Diseño VPC, subredes y reglas de tráfico para mi aplicación.
- [ ] Despliego la API y conecto una base de datos restringida.
- [ ] Encuentro logs y configuro una alarma y alertas de presupuesto.
- [ ] Estimo y limpio los recursos del laboratorio.

### Recursos oficiales

- [AWS Getting Started](https://aws.amazon.com/getting-started/) — Servicios y laboratorios iniciales
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) — Identidad, roles y privilegio mínimo
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) — Alertas y seguimiento de costos

## 6. Integración y despliegue — Meses 12–13

Con GitHub Actions automatizas compilación, pruebas, imágenes y despliegue. Distingue CI (integrar y validar), entrega continua (cambios listos para desplegar) y despliegue continuo (publicarlos automáticamente).

**Punto de partida:** Un repositorio con pruebas, una imagen Docker y un despliegue que ya puedas realizar manualmente.

### Diseña el pipeline

- **Workflows, jobs y steps:** Define eventos de push y pull request, dependencias entre tareas y runners. Empieza con build y tests.
- **Build, tests e imagen Docker:** Produce artefactos identificables y etiqueta la imagen con el commit. Despliega el mismo artefacto que verificaste.
- **Entornos, permisos y secretos:** Separa desarrollo y producción. Limita GITHUB_TOKEN y aprende OIDC para obtener credenciales temporales hacia AWS.
- **Despliegue y rollback:** Comprueba salud después del cambio, conserva una versión anterior y practica recuperarla cuando falla.

### Práctica

1. Ejecuta compilación y pruebas en cada pull request.
2. Haz fallar una prueba y comprueba que el pipeline bloquea el siguiente paso.
3. Construye una imagen solo si pasan las pruebas y registra su commit.
4. Despliega en un entorno de laboratorio y ensaya un rollback.

### Proyecto: Un cambio, un pipeline

Automatiza KAABLAB para que un cambio pase por validación, build y publicación del artefacto; el despliegue tendrá controles adecuados al entorno.

- Workflow versionado y permisos mínimos.
- Artefactos e imágenes trazables al commit.
- Comprobación de salud y rollback documentado.
- Credenciales temporales o secretos gestionados sin valores en el repositorio.

**El flujo que estás construyendo**

```text
git push / pull request
        ↓
Compile + Tests
        ↓
Docker Build + Registry
        ↓
Deploy al entorno
        ↓
Health check / Rollback
```

### Criterios para avanzar

- [ ] Configuro eventos, jobs y steps en GitHub Actions.
- [ ] Un test fallido impide publicar un cambio inválido.
- [ ] Relaciono una imagen y un despliegue con su commit.
- [ ] Gestiono permisos y credenciales del pipeline.
- [ ] Recupero una versión anterior ante un despliegue fallido.

### Recursos oficiales

- [GitHub Actions](https://docs.github.com/en/actions) — Workflows, jobs y despliegues
- [GitHub Actions + AWS OIDC](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) — Acceso temporal al entorno cloud

## 7. Infraestructura como código — Meses 13–15

Terraform describe recursos como VPC, subredes, Security Groups, EC2 y RDS. El objetivo es entender el plan y el estado, no ejecutar comandos a ciegas.

**Punto de partida:** Conocer los recursos AWS que quieres crear y operar; comprender permisos, red y costos.

### Del clic a una definición

- **Providers, resources y data sources:** Configura al proveedor, declara recursos y consulta información existente.
- **Variables, outputs y módulos:** Separa valores por entorno y agrupa componentes reutilizables sin añadir abstracciones innecesarias.
- **init, fmt, validate, plan y apply:** Inicializa, revisa formato y validez, inspecciona cambios y aplícalos con intención. Practica también destroy en el laboratorio.
- **State, backend y locking:** El estado relaciona tu código con recursos reales y puede contener datos sensibles. Protege el backend y evita aplicar cambios concurrentes.
- **Drift, dependencias y revisión:** Detecta cambios manuales, comprende el orden entre recursos y revisa los planes antes de ejecutarlos.

### Práctica

1. Reproduce una parte de tu laboratorio, empezando por red y Security Groups.
2. Lee un plan y explica qué crea, cambia o elimina.
3. Extrae variables y outputs; protege y versiona la configuración.
4. Integra validate y plan al pull request sin publicar el estado ni credenciales.

### Proyecto: KAABLAB reproducible en AWS

Construye la infraestructura del proyecto con Terraform y documenta cómo crear y retirar un entorno de laboratorio.

- Código para VPC, subredes, reglas, cómputo y base de datos.
- Variables por entorno y backend de estado protegido.
- Revisión del plan en CI y decisiones de diseño.
- Procedimiento de creación, verificación y limpieza con costos estimados.

**Fragmento HCL: requiere variables y proveedor**

```text
resource "aws_instance" "backend" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name = "kaablab-backend"
  }
}
```

### Criterios para avanzar

- [ ] Declaro recursos y uso variables y outputs.
- [ ] Explico un plan antes de aplicarlo.
- [ ] Protejo el estado y entiendo locking y drift.
- [ ] Recreo una parte del entorno desde el código.
- [ ] Valido el código en CI y limpio mi laboratorio.

### Recursos oficiales

- [HashiCorp Terraform](https://developer.hashicorp.com/terraform/tutorials) — Infraestructura, módulos y estado

## 8. Kubernetes — Meses 15–17

Kubernetes administra cargas contenedorizadas y reconcilia su estado deseado. Comienza localmente con kind o minikube; un cluster gestionado no es necesario para aprender los fundamentos.

**Punto de partida:** Dominar Docker, redes y una aplicación con configuración externa, health checks y datos persistentes.

### Los objetos que debes entender

- **Cluster, Node y Pod:** El cluster agrupa nodos; un Pod aloja uno o más contenedores relacionados. Comprende el papel del control plane.
- **Deployment y replicas:** Declara cuántas instancias quieres y cómo actualizarlas. Kubernetes reemplaza Pods que fallan; tu diseño también debe manejar fallos de aplicación y datos.
- **Service e Ingress:** Un Service ofrece acceso estable a Pods. Ingress describe rutas HTTP y requiere un controlador para funcionar.
- **ConfigMap, Secret y Namespace:** Separa configuración y datos sensibles, y organiza recursos. Base64 no cifra un Secret; cuida acceso, almacenamiento y gestión de secretos.
- **Volumes y almacenamiento persistente:** Distingue datos efímeros de volúmenes persistentes. Empieza con la API; opera PostgreSQL con una estrategia de datos justificada.
- **Probes, recursos y kubectl:** Configura readiness/liveness, requests y limits. Diagnostica con get, describe, logs y eventos; practica rollout y rollback.

### Práctica

1. Despliega tu API en un cluster local con dos réplicas.
2. Expón un Service y prueba configuración, probes y límites.
3. Elimina un Pod y observa cómo el Deployment lo reemplaza.
4. Publica una versión nueva y recupera la anterior; investiga un Pod que no arranca.

### Proyecto: KAABLAB en un cluster de laboratorio

Versiona manifiestos claros para tu API. Mantén la base de datos fuera del cluster al principio si eso simplifica tu laboratorio.

- Deployment, Service, Namespace y configuración documentados.
- Probes, requests, limits y estrategia de secretos.
- Actualización y recuperación demostradas.
- Runbook de diagnóstico y decisiones sobre persistencia.

**Observa y recupera**

```text
kubectl get pods -n kaablab
kubectl describe deployment api -n kaablab
kubectl logs deployment/api -n kaablab
kubectl rollout status deployment/api -n kaablab
kubectl rollout undo deployment/api -n kaablab
```

### Criterios para avanzar

- [ ] Explico Cluster, Node, Pod, Deployment y Service.
- [ ] Despliego réplicas con configuración y recursos definidos.
- [ ] Distingo ConfigMap de Secret y protejo datos sensibles.
- [ ] Diagnostico fallos con logs, eventos y describe.
- [ ] Realizo y recupero una actualización de la API.

### Recursos oficiales

- [Kubernetes Concepts](https://kubernetes.io/docs/concepts/) — Objetos y funcionamiento del cluster
- [Kubernetes Secrets](https://kubernetes.io/docs/concepts/security/secrets-good-practices/) — Buenas prácticas con datos sensibles

## 9. Observabilidad y fiabilidad — Meses 17–18

Logs, métricas y trazas te permiten investigar sistemas. Para SRE, aprende a definir objetivos de fiabilidad y a reducir trabajo manual mediante ingeniería.

**Punto de partida:** Una aplicación desplegada que puedas cambiar y un entorno donde puedas simular fallos controlados.

### Tres señales complementarias

- **Logs:** Eventos con contexto: qué ocurrió y cuándo. Usa registros estructurados e identificadores de solicitud sin incluir secretos o datos innecesarios.
- **Metrics:** Observa CPU, memoria, tasa de solicitudes, latencia y errores. Usa Prometheus y Grafana para métricas y dashboards; CloudWatch también forma parte de tu entorno AWS.
- **Traces y OpenTelemetry:** Sigue una solicitud a través de componentes para encontrar dónde se consume tiempo y cómo se relacionan sus fallos.

### Primeros fundamentos SRE

- **SLI, SLO y SLA:** Un SLI mide comportamiento, un SLO fija una meta y un SLA es un acuerdo con compromisos. Define un objetivo útil para el servicio.
- **Error budget y alertas:** Cuantifica el margen de fallos permitido por el SLO. Prioriza alertas accionables sobre señales que necesitan intervención.
- **Incidentes, runbooks y postmortems:** Practica diagnóstico y recuperación. Documenta causas, impacto y mejoras sin centrarte en culpar a una persona.

### Práctica

1. Instrumenta latencia, solicitudes y errores de tu API.
2. Crea un dashboard con métricas del servicio y del sistema.
3. Introduce una demora o un error de laboratorio y relaciónalo con logs y trazas.
4. Define un SLO inicial, configura una alerta y escribe un postmortem.

### Proyecto: KAABLAB observable

Construye una vista que te permita explicar qué pasó cuando la ingestión de lecturas se vuelve lenta o comienza a fallar.

- Dashboard con latencia, errores y tasa de lecturas.
- Logs estructurados y una traza de solicitud.
- SLO, alerta accionable y runbook.
- Informe breve de un incidente simulado y su mejora.

**Ejemplo de laboratorio; no son datos reales**

```text
CPU              90 %
Memoria          72 %
Latencia p95    650 ms
Errores         4.8 %
Solicitudes  12 000 / min

¿Qué cambió y dónde empieza el problema?
```

### Criterios para avanzar

- [ ] Distingo logs, métricas y trazas y uso las tres señales.
- [ ] Construyo un dashboard con señales del servicio.
- [ ] Defino un SLI y un SLO medibles.
- [ ] Diagnostico un fallo simulado y recupero el servicio.
- [ ] Documento una mejora en un postmortem y un runbook.

### Recursos oficiales

- [Prometheus](https://prometheus.io/docs/introduction/overview/) — Métricas y consultas
- [Grafana](https://grafana.com/docs/grafana/latest/) — Dashboards y observación de servicios
- [OpenTelemetry](https://opentelemetry.io/docs/) — Instrumentación, métricas y trazas
- [Google SRE Books](https://sre.google/books/) — Fiabilidad, SLO e incidentes

## 10. AppSec y Cloud Security — Meses 18–20

Ya has practicado validación, permisos y secretos. Ahora estudia amenazas y demuestra cómo detectar, corregir y volver a comprobar una vulnerabilidad. Usa laboratorios propios o autorizados.

**Punto de partida:** Entender el backend, las redes, IAM y el despliegue; poder interpretar logs y permisos.

### Seguridad web y del código

- **OWASP Top 10 vigente:** Usa la edición actual como mapa de riesgos. Aprende SQL Injection, XSS, controles de acceso rotos, fallos de autenticación, mala configuración, dependencias vulnerables y SSRF; no todos son categorías separadas.
- **Autenticación y autorización:** Comprueba propiedad de recursos, roles, caducidad de sesiones y permisos por acción. Incluye pruebas para peticiones que deben ser rechazadas.
- **Threat modeling:** Dibuja componentes, datos y fronteras de confianza. Identifica amenazas, prioriza riesgos y registra mitigaciones verificables.
- **Vulnerabilidad → corrección → nueva prueba:** Reproduce el problema en un laboratorio, entiende su causa, corrige el código o configuración y escribe una prueba que evite regresiones.

### AWS desde el punto de vista de seguridad

- **IAM avanzado y permisos mínimos:** Revisa roles, políticas, condiciones y accesos. Evita permisos administrativos innecesarios y elimina identidades y credenciales sin uso.
- **Security Groups, Network ACL y WAF:** Distingue control de tráfico a nivel de recurso y subred, y protección de solicitudes web. Justifica cada regla con tu arquitectura.
- **KMS y Secrets Manager:** Entiende claves de cifrado y ciclo de vida de secretos: acceso, almacenamiento, rotación y uso por la aplicación.
- **CloudTrail, GuardDuty y Security Hub:** Audita actividad, investiga detecciones y organiza hallazgos. Una alerta exige contexto y una acción razonada.
- **AWS Config e incident response:** Evalúa configuraciones y cambios; prepara un procedimiento para contener, investigar, recuperar y mejorar.

### Práctica

1. Practica una vulnerabilidad en OWASP Juice Shop o un laboratorio propio y documenta la corrección.
2. Revisa accesos a S3, exposición de la base de datos y permisos IAM de KAABLAB.
3. Detecta configuraciones como SSH abierto al mundo o secretos en código y explica cómo corregirlas.
4. Simula pérdida de una credencial: revoca, rota, investiga logs y verifica la recuperación.

### Proyecto: Revisión de seguridad de KAABLAB

Presenta riesgos concretos, decisiones y evidencia de mitigación. Une seguridad del código con configuración del entorno.

- Threat model y matriz breve de riesgos priorizados.
- Pruebas de acceso y correcciones de código.
- Políticas IAM y configuración de red revisadas.
- Runbook de respuesta a incidentes y evidencias sin datos sensibles.

**Comprender, corregir y comprobar**

```text
SQL Injection / acceso indebido
        ↓
Reproducción en laboratorio
        ↓
Consulta parametrizada / control de acceso
        ↓
Prueba de regresión
        ↓
Revisión del código y despliegue
```

### Criterios para avanzar

- [ ] Explico riesgos web y reproduzco uno en un laboratorio autorizado.
- [ ] Corrijo una vulnerabilidad y añado una prueba de regresión.
- [ ] Construyo un threat model de mi aplicación.
- [ ] Reviso permisos, exposición de red y gestión de secretos en AWS.
- [ ] Sigo un procedimiento de respuesta a una credencial comprometida.

### Recursos oficiales

- [OWASP Top 10](https://owasp.org/projects/top-ten) — Mapa vigente de riesgos web
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) — Aplicación para laboratorio de seguridad
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) — Identidad, roles y privilegio mínimo
- [AWS Security Documentation](https://docs.aws.amazon.com/security/) — Seguridad y controles del entorno cloud

## 11. DevSecOps — Meses 20–22

Une Development, Security y Operations. Security as Code significa definir controles reproducibles y gestionar sus resultados, desde el repositorio hasta el sistema en ejecución.

**Punto de partida:** Un pipeline CI/CD, infraestructura versionada, conocimientos de AppSec y Cloud Security y observabilidad.

### Controles complementarios

- **SAST y revisión de código:** Analiza el código sin ejecutarlo. SonarQube u otras herramientas ayudan a identificar problemas; revisa contexto y falsos positivos.
- **Dependencias y SCA:** Inventaría componentes y verifica vulnerabilidades conocidas. Explora Dependabot o Snyk y decide cómo actualizar y comprobar compatibilidad.
- **Secret scanning:** Detecta credenciales expuestas. Si un secreto ya se publicó, revócalo y rótalo; borrarlo del archivo no elimina la exposición.
- **Container e IaC scanning:** Usa Trivy u otra herramienta para revisar imágenes y configuración. Actualiza bases mantenidas y prioriza riesgos explotables.
- **DAST y OWASP ZAP:** Prueba una aplicación ejecutándose en un laboratorio para descubrir comportamientos inseguros. Complementa, no sustituye, las pruebas y la revisión.
- **Runtime security y monitoreo:** Relaciona eventos del entorno con versiones, permisos y cambios. Define quién atiende hallazgos y cómo verifica la corrección.

### Políticas útiles, no ruido

- **Gates y remediación:** Define qué hallazgos bloquean un despliegue según impacto y contexto. Las excepciones deben tener motivo, responsable y vencimiento.
- **Permisos y disponibilidad:** Limita el acceso del pipeline. GitHub Advanced Security / Code Security / Secret Protection y otros servicios dependen del plan y del repositorio; verifica disponibilidad y costo.

### Práctica

1. Añade un escaneo de dependencias y un escaneo de imagen al pipeline.
2. Prueba detección de secretos con una cadena de prueba admitida por la herramienta.
3. Introduce un hallazgo de laboratorio y verifica el bloqueo y la remediación.
4. Documenta un falso positivo y la política de excepciones; no intentes dominar todas las herramientas a la vez.

### Proyecto: Pipeline seguro de KAABLAB

Cada cambio conserva pruebas, análisis, trazabilidad y controles de despliegue. Después del despliegue, las señales permiten investigar y mejorar.

- Unit tests, SAST, SCA, secret y container scans integrados.
- Controles sobre infraestructura y despliegue.
- Política de severidad, excepciones y remediación.
- Demostración de un cambio rechazado y luego corregido.

**Tu pipeline final**

```text
Cambio → Unit tests → SAST
  ↓
Dependency + Secret scans
  ↓
Build → Container + IaC scans
  ↓
Deploy + Health check
  ↓
Runtime security + Monitoring
```

### Criterios para avanzar

- [ ] Distingo SAST, SCA, secret scanning, container scanning y DAST.
- [ ] Integro controles relevantes con permisos mínimos.
- [ ] Un hallazgo de prueba bloquea el despliegue según una política.
- [ ] Corrijo el problema y demuestro que pasa la nueva verificación.
- [ ] Documento hallazgos, excepciones y seguimiento en operación.

### Recursos oficiales

- [Trivy](https://trivy.dev/) — Escaneo de imágenes y configuración
- [Dependabot](https://docs.github.com/en/code-security/dependabot) — Actualizaciones y alertas de dependencias
- [OWASP ZAP](https://www.zaproxy.org/docs/) — Análisis de una aplicación en ejecución
- [SonarQube](https://docs.sonarsource.com/) — Análisis estático y calidad de código
- [Snyk Docs](https://docs.snyk.io/) — Dependencias, contenedores e infraestructura
- [GitHub Code Security](https://docs.github.com/en/code-security) — Controles y disponibilidad por plan

## 12. Elige tu especialización — Meses 22–24

Después de probar desarrollo, infraestructura y seguridad, tendrás mejores señales de lo que disfrutas. No es una decisión definitiva: la base aprendida sigue siendo útil si cambias de dirección.

**Punto de partida:** Haber construido, desplegado, observado y revisado un sistema; reconocer qué tareas te motivaron y cuáles te costaron.

### Infraestructura y automatización

- **DevOps, SRE y Platform Engineering:** Profundiza Linux, redes, AWS, Terraform, Kubernetes, Go, observabilidad y sistemas distribuidos. SRE se centra en fiabilidad; Platform crea herramientas y plataformas para otros desarrolladores.
- **Evolución profesional posible:** DevOps / Cloud Engineer → mayor responsabilidad → SRE, Platform, liderazgo o Cloud Architect. Son alternativas relacionadas, no ascensos obligatorios en fila.

### Seguridad como especialidad

- **Security Engineering y Cloud Security:** Profundiza IAM, redes, criptografía aplicada, threat modeling, respuesta a incidentes, AppSec y seguridad de Kubernetes.
- **Evolución profesional posible:** Security / AppSec Engineer → Cloud Security Engineer → Senior Security Engineer → Security Architect, según experiencia y empresa.

### La combinación

- **DevSecOps:** Si disfrutas ambos mundos, une programación, cloud, automatización y seguridad. Construye políticas y controles que ayudan a entregar software con menos riesgo.
- **Evolución profesional posible:** Backend + Cloud + DevOps + Security → DevSecOps Engineer → Senior o arquitectura de seguridad. La especialidad se construye con experiencia operando sistemas.

### Práctica

1. Durante dos semanas mejora un SLO o automatiza una tarea operativa.
2. Durante otras dos semanas investiga un riesgo, ajusta permisos y demuestra la mitigación.
3. Escribe qué disfrutaste, qué aprendiste y qué área quieres explorar los siguientes tres meses.
4. Compara vacantes reales y adapta tu portafolio a una ruta principal.

### Proyecto: Tu portafolio con una dirección

Presenta cuatro proyectos conectados y un caso profundo de tu ruta elegida. La meta es que puedas explicar tus decisiones y defenderlas con evidencia.

- README principal con proyectos, demos y arquitectura.
- Un caso de fiabilidad, seguridad o pipeline con problema y resultado.
- CV adaptado a puestos iniciales y un plan de aprendizaje de 90 días.
- Reflexión sobre tu siguiente especialidad sin cerrar otras posibilidades.

**Tu base sigue siendo útil**

```text
Backend + Linux + Redes + Docker + AWS
                 ↓
     DevOps / SRE / Platform
     Cloud Security / AppSec
     DevSecOps

Elige por experiencia, no solo por el título.
```

### Criterios para avanzar

- [ ] Explico las diferencias entre DevOps, SRE, Platform y Cloud Security.
- [ ] Tengo evidencia concreta de construir, operar y proteger un sistema.
- [ ] Elijo una ruta inicial por lo que disfruté al practicar.
- [ ] Adapto mi portafolio y CV a oportunidades reales.
- [ ] Defino un siguiente plan de 90 días con un proyecto y objetivos.

### Recursos oficiales

- [Google SRE Books](https://sre.google/books/) — Fiabilidad, SLO e incidentes
- [AWS Security Documentation](https://docs.aws.amazon.com/security/) — Seguridad y controles del entorno cloud
- [CNCF Platforms](https://tag-app-delivery.cncf.io/whitepapers/platforms/) — Principios de plataformas para desarrolladores

## Especialidades

### DevOps / SRE / Platform

Para quien disfruta Linux, automatizar despliegues, crear infraestructura y encontrar por qué un sistema falla.

**Pregunta:** ¿Cómo hacemos que este sistema sea fácil de desplegar y fiable?

- Automatizar CI/CD e infraestructura
- Diagnosticar latencia, capacidad y errores
- Definir SLO y reducir trabajo manual
- Crear APIs, CLI y plataformas internas

**Profundiza:** Kubernetes · Terraform · AWS · Linux · Redes · Go · Observabilidad · Sistemas distribuidos

**Posibilidades:** Backend / Cloud → DevOps → SRE o Platform → liderazgo o arquitectura

**Experimento:** Simula una caída, recupérala y automatiza la recuperación que tenga sentido.

### Cloud Security

Para quien disfruta revisar permisos, investigar amenazas y proteger aplicaciones, identidades, redes y datos.

**Pregunta:** ¿Quién puede acceder, a qué y bajo qué condiciones?

- Diseñar IAM y permisos mínimos
- Revisar código y amenazas
- Investigar detecciones e incidentes
- Proteger secretos, redes y datos

**Profundiza:** IAM · AppSec · Cloud Security · Redes · Criptografía aplicada · Threat modeling · Incident response · Kubernetes Security

**Posibilidades:** Backend / AppSec → Security Engineer → Cloud Security → Security Architect

**Experimento:** Revisa un rol con permisos excesivos, reduce el acceso y demuestra que la aplicación sigue funcionando.

### DevSecOps

Para quien quiere hacer que las herramientas de desarrollo y operación incorporen seguridad de forma automática.

**Pregunta:** ¿Cómo comprobamos que cada cambio sea seguro antes y después de desplegarlo?

- Integrar análisis y escaneos al pipeline
- Crear políticas como código
- Gestionar remediación y excepciones
- Relacionar despliegues con señales de seguridad

**Profundiza:** CI/CD · IaC · SAST · SCA · Secrets · Contenedores · Cloud · Seguridad en ejecución

**Posibilidades:** Backend + Cloud + DevOps + Security → DevSecOps → Senior o arquitectura

**Experimento:** Haz que un hallazgo de laboratorio detenga un cambio, corrígelo y comprueba el nuevo despliegue.

Los títulos cambian entre empresas; DevOps, SRE y Platform no son una secuencia obligatoria de ascensos.

## Proyectos de portafolio

### 01. API Spring Boot + PostgreSQL

Modela colmenas y lecturas, implementa reglas y ofrece endpoints documentados y probados. **Meses 3–6.**

- Contratos HTTP y OpenAPI
- SQL, relaciones y migraciones
- Validación, permisos y pruebas

### 02. KAABLAB desplegado en AWS

Conecta el flujo de lecturas con una API desplegada, datos persistentes y una red justificada. **Meses 9–12.**

- Diagrama de arquitectura
- IAM, HTTPS y base privada
- Logs, costos y recuperación

### 03. Infraestructura + CI/CD

Reproduce entornos con Terraform y despliega artefactos verificados y trazables con GitHub Actions. **Meses 12–18.**

- IaC y estado protegido
- Pipeline y rollback
- Dashboard, SLO y runbooks

### 04. Pipeline y aplicación protegida

Identifica riesgos, corrige vulnerabilidades e integra controles para cada cambio. **Meses 18–24.**

- Threat model y mitigaciones
- Pruebas de autorización
- Scans y remediación demostrada

Arquitectura posible: ESP32 + LoRa → gateway → HTTPS / balanceador → API Java en Docker (Kubernetes al avanzar) → PostgreSQL / RDS en red privada. GitHub Actions y Terraform automatizan pruebas, controles e infraestructura. Prometheus, Grafana y OpenTelemetry ofrecen observabilidad; CloudTrail audita actividad. WAF es opcional según el laboratorio.

Cada proyecto debe incluir README, instrucciones reproducibles, pruebas, arquitectura, decisiones y una demo. Usa datos de muestra y configuración sin credenciales.

## Empleo

### MESES 5–7: Tu primera experiencia con código

- Backend Intern
- Java Intern
- Software Developer Intern
- Junior Backend

**Evidencia:** Una API propia con SQL, pruebas, Git y documentación; poder explicar y depurar tu código.

### MESES 9–12: Acércate a infraestructura

- Cloud Intern
- Cloud Support
- Junior Cloud Engineer
- DevOps Intern

**Evidencia:** Linux, redes y un despliegue cloud documentado con logs, permisos y costos.

### CON MÁS PRÁCTICA: Busca una ruta de entrada

- Junior DevOps Engineer
- Cloud Engineer
- Junior Security Engineer
- SOC / Security Engineering
- Application Security Jr

**Evidencia:** Pipeline, IaC, diagnóstico o seguridad con evidencia. SOC y Security Engineering tienen tareas distintas; revisa cada vacante.

### CON EXPERIENCIA REAL: Crece en tu especialidad

- DevOps Engineer
- SRE
- Platform Engineer
- Cloud Security Engineer
- DevSecOps Engineer

**Evidencia:** Experiencia operando sistemas, decisiones de arquitectura, colaboración y resolución de incidentes.

Los tiempos no garantizan empleo. Año 1: buen Backend/Software Developer. Año 2: entender sistemas reales y su operación. Año 3+: profundizar en una especialidad.

## Certificaciones

| Momento | Certificación | Propósito | Prioridad |
|---|---|---|---|
| Backend | Ninguna necesaria al inicio | Tu API, sus pruebas y tu capacidad para explicarla son la prioridad. | Proyecto primero |
| Linux | [Linux Essentials](https://www.lpi.org/our-certifications/linux-essentials-overview/) | Valida fundamentos si te ayuda a estructurar el aprendizaje. | Opcional |
| Redes | [CCNA](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html) | Útil si quieres profundizar redes y configuración de infraestructura. | Opcional |
| AWS inicial | [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) | Panorama cloud y vocabulario; no sustituye práctica de ingeniería. | Opcional |
| AWS con práctica | [AWS Solutions Architect – Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) | Refuerza diseño de soluciones cuando ya has construido un entorno. | Según tu ruta |
| Seguridad inicial | [CompTIA Security+](https://www.comptia.org/certifications/security) | Estructura fundamentos de seguridad antes de una especialidad avanzada. | Según tu ruta |
| Kubernetes | [Certified Kubernetes Administrator (CKA)](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/) | Tiene sentido cuando puedes administrar y diagnosticar clusters por terminal. | Con práctica |
| Cloud Security avanzada | [AWS Certified Security – Specialty](https://aws.amazon.com/certification/certified-security-specialty/) | Profundiza seguridad cloud después de experiencia práctica relevante. | Más adelante |
| Gestión de proyectos | [CAPM → PMP cuando cumplas requisitos](https://www.pmi.org/certifications/certified-associate-capm) | Apoyan gestión; PMP exige experiencia y requisitos del proveedor. No son necesarias para empezar en Backend. | Ruta de gestión |

Consulta temarios y requisitos actuales con el proveedor antes de pagar. [PMP](https://www.pmi.org/certifications/project-management-pmp) exige experiencia y otros requisitos. PMI Student Membership es una membresía, no una certificación. No necesitas todas las certificaciones; proyectos y experiencia tienen prioridad.

## Plan semanal

Ejemplo con 8 horas: 2 horas de documentación, 4 de construcción, 1 de pruebas y repaso y 1 para documentar el avance. Ajusta a tu carga universitaria. Practica inglés técnico 15–20 minutos diarios. Si usas IA, comprueba y explica el código.

Primera semana:

1. Prepara un JDK compatible, IDE, Git y GitHub.
2. Crea una clase Producto y una lista en un inventario de consola.
3. Añade crear, listar y buscar; valida datos y depura un error.
4. Sube commits y README; elige la siguiente mejora.

## Biblioteca de referencia

- [Dev.java](https://dev.java/learn/) — Java, POO, Collections y Streams
- [Pro Git](https://git-scm.com/book/es/v2) — Control de versiones, ramas y colaboración
- [Tutorial de Python](https://docs.python.org/es/3/tutorial/) — Scripts, estructuras y archivos
- [Spring Guides](https://spring.io/guides) — APIs y proyectos guiados oficiales
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html) — SQL y bases de datos relacionales
- [Spring Security](https://docs.spring.io/spring-security/reference/) — Autenticación y autorización
- [Ubuntu: command line](https://ubuntu.com/tutorials/command-line-for-beginners) — Primeros pasos en la terminal Linux
- [MDN: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) — Solicitudes, métodos y respuestas
- [Cisco Networking Academy](https://www.netacad.com/) — Explora formación en redes
- [Docker Get Started](https://docs.docker.com/get-started/) — Imágenes, contenedores y Compose
- [AWS Getting Started](https://aws.amazon.com/getting-started/) — Servicios y laboratorios iniciales
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) — Identidad, roles y privilegio mínimo
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) — Alertas y seguimiento de costos
- [GitHub Actions](https://docs.github.com/en/actions) — Workflows, jobs y despliegues
- [GitHub Actions + AWS OIDC](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) — Acceso temporal al entorno cloud
- [HashiCorp Terraform](https://developer.hashicorp.com/terraform/tutorials) — Infraestructura, módulos y estado
- [Kubernetes Concepts](https://kubernetes.io/docs/concepts/) — Objetos y funcionamiento del cluster
- [Kubernetes Secrets](https://kubernetes.io/docs/concepts/security/secrets-good-practices/) — Buenas prácticas con datos sensibles
- [Prometheus](https://prometheus.io/docs/introduction/overview/) — Métricas y consultas
- [Grafana](https://grafana.com/docs/grafana/latest/) — Dashboards y observación de servicios
- [OpenTelemetry](https://opentelemetry.io/docs/) — Instrumentación, métricas y trazas
- [Google SRE Books](https://sre.google/books/) — Fiabilidad, SLO e incidentes
- [OWASP Top 10](https://owasp.org/projects/top-ten) — Mapa vigente de riesgos web
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) — Aplicación para laboratorio de seguridad
- [AWS Security Documentation](https://docs.aws.amazon.com/security/) — Seguridad y controles del entorno cloud
- [Trivy](https://trivy.dev/) — Escaneo de imágenes y configuración
- [Dependabot](https://docs.github.com/en/code-security/dependabot) — Actualizaciones y alertas de dependencias
- [OWASP ZAP](https://www.zaproxy.org/docs/) — Análisis de una aplicación en ejecución
- [SonarQube](https://docs.sonarsource.com/) — Análisis estático y calidad de código
- [Snyk Docs](https://docs.snyk.io/) — Dependencias, contenedores e infraestructura
- [GitHub Code Security](https://docs.github.com/en/code-security) — Controles y disponibilidad por plan
- [CNCF Platforms](https://tag-app-delivery.cncf.io/whitepapers/platforms/) — Principios de plataformas para desarrolladores
