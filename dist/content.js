/* Contenido editorial completo. Se puede editar sin cambiar la interfaz. */
window.ROADMAP = {
  version: 1,
  stages: [
    {
      id: "programacion", title: "Programación sólida", short: "Java + Git", months: "0–3", phase: "foundations", icon: "code",
      summary: "Aprende a resolver problemas y a escribir código que puedas explicar.",
      why: "Java será tu lenguaje principal para construir aplicaciones; Python será tu herramienta secundaria para automatizar. La meta es crear programas propios y depurarlos, sin depender de copiar un tutorial completo.",
      prerequisite: "Tu punto de partida: fundamentos básicos. Si ya conoces Java, comprueba los objetivos y dedica más tiempo a los temas que todavía te cuestan.",
      tags: ["Java", "POO", "Git", "GitHub", "Python"],
      groups: [
        {title: "Java: pensar y resolver", items: [
          {name: "Variables, condicionales, ciclos y métodos", description: "Modela datos, toma decisiones, repite operaciones y divide una solución en funciones pequeñas."},
          {name: "Clases, objetos y encapsulamiento", description: "Representa entidades y protege sus reglas internas. Un Producto valida precio y existencias."},
          {name: "Herencia, polimorfismo e interfaces", description: "Distingue reutilizar comportamiento de definir contratos; practica también composición."},
          {name: "ArrayList, HashMap y HashSet", description: "Elige una lista para secuencias, un mapa para buscar por clave y un conjunto para evitar duplicados."},
          {name: "Exceptions y Generics", description: "Maneja errores con intención y usa tipos parametrizados para colecciones y componentes seguros."},
          {name: "Streams y Lambdas", description: "Filtra, transforma y resume colecciones. Domina primero el equivalente con ciclos."}
        ]},
        {title: "Git y GitHub, desde el día uno", items: [
          {name: "Commits, branches y merges", description: "Guarda cambios pequeños con mensajes claros; trabaja en una rama y aprende a resolver un conflicto."},
          {name: "Pull requests y README", description: "Presenta un cambio para revisión y documenta cómo ejecutar tu proyecto, qué hace y qué falta."},
          {name: "Depuración y estructura", description: "Usa breakpoints, examina variables y organiza paquetes. Introduce Maven o Gradle y pruebas de lógica con JUnit."}
        ]},
        {title: "Python como herramienta secundaria", items: [
          {name: "Variables, funciones, listas y diccionarios", description: "Escribe scripts pequeños que organicen información y reduzcan trabajo manual."},
          {name: "Archivos, JSON y requests", description: "Lee y escribe datos, consulta una API y maneja respuestas, errores y tiempos de espera."}
        ]}
      ],
      practice: ["Implementa operaciones primero en papel o pseudocódigo y luego en Java.", "Depura un error de lógica con breakpoints y registra su causa.", "Crea una rama para añadir búsqueda por ID y abre un pull request.", "Escribe un script Python que lea un JSON de productos y genere un resumen."],
      project: {title: "Sistema de inventario en Java", description: "Una aplicación de consola con Productos, Proveedores, Usuarios, Categorías y Ventas. Crece por partes: primero productos, luego relaciones y operaciones.", deliverables: ["Crear, listar, buscar, editar y eliminar productos con validación.", "Registrar una venta y descontar existencias sin permitir valores negativos.", "Separar modelo y lógica; guardar datos en un archivo sencillo.", "Repositorio con README, commits y pruebas de las reglas de inventario."]},
      example: {label: "Una regla antes que una herramienta", language: "Java", code: "public void vender(int cantidad) {\n    if (cantidad <= 0 || cantidad > stock) {\n        throw new IllegalArgumentException(\n            \"Cantidad inválida\");\n    }\n    stock -= cantidad;\n}"},
      checkpoints: ["Creo un programa propio con clases, métodos y colecciones.", "Explico encapsulamiento, interfaces y polimorfismo con mi código.", "Encuentro y corrijo un error usando el depurador.", "Uso ramas y commits; preparo un README y un pull request.", "Escribo un script Python que procesa archivos y JSON."],
      resources: ["java", "git", "python"]
    },
    {
      id: "backend", title: "Backend con Spring Boot", short: "APIs + SQL", months: "3–6", phase: "foundations", icon: "layers",
      summary: "Convierte Java en una API con datos, reglas, permisos y pruebas.",
      why: "Tu stack será Java + Spring Boot + PostgreSQL. Aprende a recibir una solicitud HTTP, aplicar reglas de negocio y persistir datos. Esta base te permitirá entender el software que después desplegarás y protegerás.",
      prerequisite: "Crear y depurar aplicaciones Java; usar Git y entender clases, interfaces, excepciones y colecciones.",
      tags: ["Spring Boot", "PostgreSQL", "REST", "JPA", "JWT", "JUnit"],
      groups: [
        {title: "HTTP y arquitectura de una API", items: [
          {name: "REST, JSON y métodos HTTP", description: "GET consulta, POST crea, PUT reemplaza, PATCH modifica parcialmente y DELETE elimina. Aprende códigos de estado, cabeceras, paginación e idempotencia."},
          {name: "Controller, Service y Repository", description: "El controlador recibe HTTP, el servicio aplica reglas y el repositorio accede a datos. Evita mezclar todo en un solo archivo."},
          {name: "Inyección de dependencias y Configuration", description: "Spring conecta componentes. Separa configuración por entorno y utiliza variables de entorno para valores sensibles."},
          {name: "DTO, Validation y Exceptions", description: "Define contratos claros de entrada y salida, valida datos y devuelve errores consistentes sin exponer detalles internos."}
        ]},
        {title: "Persistencia y SQL", items: [
          {name: "PostgreSQL: CRUD y consultas", description: "Practica SELECT, INSERT, UPDATE y DELETE; combina tablas con JOIN y resume con GROUP BY y HAVING."},
          {name: "Relaciones, restricciones e índices", description: "Diseña claves primarias y foráneas, nulabilidad y unicidad. Usa índices con criterio y aprende a leer un plan de consulta."},
          {name: "JPA / Hibernate y transacciones", description: "Mapea entidades y relaciones, controla transacciones y entiende qué SQL se genera. Introduce migraciones de esquema con una herramienta como Flyway."}
        ]},
        {title: "Seguridad, pruebas y documentación", items: [
          {name: "Spring Security, roles y permisos", description: "Distingue autenticación de autorización. Comprueba que cada usuario solo acceda a sus recursos y guarda contraseñas con hashing adecuado."},
          {name: "JWT y OAuth 2.0", description: "Comprende firma, expiración y validación de tokens. JWT es un formato, no un sistema completo de seguridad; no diseñes tu propia criptografía."},
          {name: "JUnit, Mockito y pruebas de integración", description: "Prueba reglas de negocio y rutas relevantes, incluyendo datos inválidos y accesos sin permiso. Postman sirve para explorar la API, junto con pruebas automatizadas."},
          {name: "Swagger / OpenAPI", description: "Documenta contratos, ejemplos, estados de error y autenticación para que otro desarrollador pueda usar la API."}
        ]}
      ],
      practice: ["Dibuja el modelo de Colmena y Lectura antes de escribir entidades.", "Implementa una ruta de principio a fin: HTTP → servicio → repositorio → PostgreSQL.", "Simula lecturas del gateway con JSON; define unidades y marcas de tiempo con zona horaria.", "Prueba una lectura válida, una inválida y el acceso sin permiso."],
      project: {title: "KAABLAB Backend", description: "El gateway recibe lecturas de los ESP32 por LoRa y las envía por HTTPS a una API Spring Boot, que las almacena en PostgreSQL. Puedes comenzar con datos simulados antes de conectar el hardware.", deliverables: ["Colmenas, dispositivos y lecturas con temperatura, humedad y fecha.", "Endpoints de ingestión y consulta; filtros por colmena y rango de tiempo.", "Autenticación del gateway y permisos para las consultas.", "Documentación OpenAPI, datos de muestra y pruebas automatizadas."]},
      example: {label: "Contrato inicial de tu API", language: "HTTP", code: "POST /api/sensors/data\nGET  /api/hives\nGET  /api/hives/430\nGET  /api/hives/430/temperature\nGET  /api/hives/430/humidity\n\nESP32 → gateway → API → PostgreSQL"},
      checkpoints: ["Construyo una API con Controller, Service y Repository.", "Diseño relaciones y consulto datos con JOIN y GROUP BY.", "Valido entradas y devuelvo errores HTTP consistentes.", "Pruebo autenticación, autorización y reglas de negocio.", "Otra persona puede ejecutar y usar mi API siguiendo el README."],
      resources: ["spring", "postgres", "spring-security"]
    },
    {
      id: "linux-redes", title: "Linux y redes", short: "Sistemas + redes", months: "6–8", phase: "foundations", icon: "terminal",
      summary: "Entiende qué ocurre bajo tu aplicación y cómo viajan sus solicitudes.",
      why: "Durante los meses 6–7 practica Linux; en 7–8 profundiza redes. Ambos son esenciales para Cloud, DevOps y Security. Usa Ubuntu Server en una máquina virtual y trabaja por terminal.",
      prerequisite: "Tener una API local que puedas arrancar, detener y consultar; conocer HTTP básico.",
      tags: ["Linux", "Ubuntu", "SSH", "TCP/IP", "DNS", "TLS"],
      groups: [
        {title: "Linux: administra un sistema", items: [
          {name: "Sistema de archivos y terminal", description: "Practica ls, cd, mkdir, cp, mv, rm, cat, less y grep. Aprende rutas absolutas, redirecciones, pipes y búsqueda de archivos."},
          {name: "Usuarios, grupos y permisos", description: "Usa chmod y chown, entiende lectura/escritura/ejecución y ejecuta servicios con permisos limitados."},
          {name: "Procesos, servicios y logs", description: "Investiga con ps, top y kill. Gestiona servicios con systemctl y revisa eventos con journalctl."},
          {name: "SSH, configuración y scripts", description: "Conecta con claves SSH, utiliza variables de entorno y automatiza tareas con Bash. Consulta servicios con curl y descarga recursos con wget."}
        ]},
        {title: "Redes: entiende la conexión", items: [
          {name: "OSI, TCP/IP, IPv4 y subnetting", description: "Relaciona capas con problemas reales. Calcula subredes, identifica direcciones privadas y entiende rutas y gateways."},
          {name: "TCP, UDP, puertos y sockets", description: "Distingue transporte fiable de datagramas; reconoce qué servicio escucha en un puerto y cómo diagnosticar una conexión."},
          {name: "DNS, HTTP, HTTPS y TLS", description: "DNS resuelve nombres; HTTP describe la solicitud; TLS protege la conexión. Revisa certificados y diferencia nombre, dirección y puerto."},
          {name: "DHCP, NAT y routing", description: "Entiende asignación de IP, traducción de direcciones y cómo un paquete llega a otra red."},
          {name: "Firewall, VLAN y VPN", description: "Controla tráfico, segmenta redes y comprende túneles. Prueba reglas con servicios reales en tu laboratorio."}
        ]}
      ],
      practice: ["Crea una VM Ubuntu Server; entra por SSH y prepara un usuario para la aplicación.", "Ejecuta tu API como servicio y encuentra sus logs desde la terminal.", "Consulta la API con curl y diagnostica un puerto cerrado con ss y herramientas DNS.", "Explica una conexión HTTPS sobre TCP: DNS → TCP → TLS → HTTP → balanceador → backend → base de datos."],
      project: {title: "KAABLAB en un servidor Linux", description: "Instala y opera tu API en una VM. Escribe un pequeño runbook: cómo iniciar el servicio, ver logs, comprobar puertos y recuperarlo después de un fallo.", deliverables: ["Servicio persistente con configuración externa y usuario limitado.", "Acceso SSH y reglas de firewall documentadas.", "Diagrama de red con direcciones, puertos y flujo de solicitudes.", "Script Bash de comprobación y runbook de diagnóstico."]},
      example: {label: "Investiga desde la terminal", language: "Bash", code: "systemctl status kaablab\njournalctl -u kaablab --since today\nss -lntp\ncurl -i http://localhost:8080/api/hives\n\n# ¿Falla el proceso, el puerto o la red?"},
      checkpoints: ["Administro archivos, usuarios, permisos y servicios por terminal.", "Uso SSH y encuentro la causa de un fallo en los logs.", "Explico DNS, TCP/UDP, HTTPS y TLS con un caso real.", "Calculo una subred y entiendo NAT, rutas y puertos.", "Diagnostico una API inaccesible siguiendo un runbook."],
      resources: ["ubuntu", "mdn", "cisco"]
    },
    {
      id: "docker", title: "Docker y contenedores", short: "Empaqueta tu app", months: "8–9", phase: "cloud", icon: "box",
      summary: "Haz que tu aplicación se ejecute de forma reproducible.",
      why: "Docker conecta programación y sistemas: defines el entorno de la aplicación en una imagen y la ejecutas como contenedor. Docker Compose permite levantar tu API y PostgreSQL juntos.",
      prerequisite: "Operar una API en Linux y comprender procesos, puertos, archivos y variables de entorno.",
      tags: ["Docker", "Dockerfile", "Compose", "Volumes", "Registry"],
      groups: [
        {title: "El modelo de los contenedores", items: [
          {name: "Image y Container", description: "Una imagen es la plantilla; un contenedor es una instancia en ejecución. Distingue contenedor, proceso y máquina virtual."},
          {name: "Dockerfile y builds", description: "Describe cómo empaquetar el backend. Usa etapas de construcción, una imagen base mantenida y un usuario sin privilegios."},
          {name: "Volumes y persistencia", description: "Los datos de PostgreSQL deben sobrevivir a la recreación del contenedor. Practica copia de seguridad y restauración."},
          {name: "Networks y puertos", description: "Conecta servicios por una red interna. Publica solo lo necesario y utiliza nombres de servicio para comunicar la API con la base de datos."},
          {name: "Registry y etiquetas", description: "Publica imágenes versionadas y aprende a identificar exactamente qué imagen corresponde a un commit."},
          {name: "Docker Compose", description: "Define servicios, redes, volúmenes y comprobaciones de salud en un archivo. Separa configuración de secretos."}
        ]}
      ],
      practice: ["Crea un Dockerfile para el JAR de Spring Boot y revisa tamaño y capas.", "Levanta API y PostgreSQL con Docker Compose y datos de muestra.", "Recrea los contenedores y comprueba que las lecturas persisten.", "Restaura una copia de la base de datos en un entorno nuevo."],
      project: {title: "KAABLAB reproducible con un comando", description: "Cualquier persona que tenga Docker podrá levantar tu backend y PostgreSQL siguiendo instrucciones claras.", deliverables: ["Dockerfile, compose.yaml y .env.example sin secretos.", "Volumen persistente, red interna y health checks.", "Instrucciones para iniciar, detener, consultar logs y restaurar datos.", "Imagen etiquetada por versión o commit."]},
      example: {label: "Tu entorno, en comandos", language: "Bash", code: "docker compose up --build -d\ndocker compose ps\ndocker compose logs -f api\ndocker compose down\n\n# El volumen conserva los datos."},
      checkpoints: ["Explico imagen, contenedor, volumen, red y registry.", "Empaqueto mi API con un Dockerfile reproducible.", "Levanto API y PostgreSQL con Docker Compose.", "Recreo contenedores sin perder datos y restauro una copia.", "Documento la ejecución para alguien que no conoce el proyecto."],
      resources: ["docker"]
    },
    {
      id: "aws", title: "Cloud con AWS", short: "Tu primer cloud", months: "9–12", phase: "cloud", icon: "cloud",
      summary: "Despliega tu aplicación y entiende identidad, redes y costos.",
      why: "No necesitas aprender todo AWS. Empieza con los servicios que resuelven las necesidades de tu backend y domina IAM: quién puede hacer qué sobre cada recurso.",
      prerequisite: "Linux, redes y una aplicación contenida con Docker; poder seguir sus logs y restaurar sus datos.",
      tags: ["AWS", "IAM", "EC2", "VPC", "RDS", "S3"],
      groups: [
        {title: "Identidad y red primero", items: [
          {name: "IAM: User, Group, Role, Policy y Permission", description: "Entiende identidades y políticas. Aplica least privilege, MFA y credenciales temporales; usa roles para cargas de trabajo y federación para personas cuando corresponda."},
          {name: "VPC, subnets y Security Groups", description: "Diseña segmentos públicos y privados, rutas y control de tráfico. Mantén la base de datos fuera del acceso público."},
          {name: "Responsabilidad compartida y costos", description: "Distingue lo que protege AWS de lo que configuras tú. Crea alertas de presupuesto y elimina recursos de laboratorio al terminar; una alerta no es un límite automático de gasto."}
        ]},
        {title: "Despliega una arquitectura pequeña", items: [
          {name: "EC2 y RDS PostgreSQL", description: "Ejecuta tu API en una instancia Linux y utiliza una base de datos gestionada. Configura almacenamiento, copias y acceso privado."},
          {name: "S3 y CloudWatch", description: "S3 almacena objetos; CloudWatch te ayuda con logs, métricas y alarmas. Comprueba permisos y políticas de acceso."},
          {name: "Route 53, Load Balancer y HTTPS", description: "Relaciona dominio, DNS y certificados con el balanceador que dirige las solicitudes al backend."},
          {name: "Auto Scaling y Lambda", description: "Comprende cómo escalar capacidad y ejecutar funciones por eventos. Explóralos cuando tu caso lo necesite."}
        ]}
      ],
      practice: ["Configura identidad y presupuesto antes de crear infraestructura.", "Dibuja VPC, subredes, rutas y Security Groups; justifica cada acceso.", "Despliega Docker en EC2 y conecta a RDS en red privada.", "Configura logs, una alarma básica y un plan para borrar el laboratorio."],
      project: {title: "KAABLAB desplegado en AWS", description: "Primero EC2 + Docker + Spring Boot + RDS. Después incorpora un dominio, HTTPS y un Load Balancer cuando estés listo.", deliverables: ["Backend consultable y base de datos con acceso restringido.", "Roles y permisos documentados; configuración y secretos fuera del código.", "Diagrama, costos estimados y procedimiento de limpieza.", "Logs, copias de seguridad y demostración del flujo de lecturas."]},
      example: {label: "Del navegador a tus datos", language: "Arquitectura", code: "Dominio / Route 53\n        ↓ HTTPS\nLoad Balancer\n        ↓\nEC2 + Docker + Spring Boot\n        ↓ red privada\nRDS PostgreSQL"},
      checkpoints: ["Explico IAM y aplico permisos mínimos a un rol.", "Diseño VPC, subredes y reglas de tráfico para mi aplicación.", "Despliego la API y conecto una base de datos restringida.", "Encuentro logs y configuro una alarma y alertas de presupuesto.", "Estimo y limpio los recursos del laboratorio."],
      resources: ["aws-start", "iam", "aws-budgets"]
    },
    {
      id: "cicd", title: "Integración y despliegue", short: "CI/CD", months: "12–13", phase: "cloud", icon: "git",
      summary: "Convierte cada cambio en un proceso repetible y comprobable.",
      why: "Con GitHub Actions automatizas compilación, pruebas, imágenes y despliegue. Distingue CI (integrar y validar), entrega continua (cambios listos para desplegar) y despliegue continuo (publicarlos automáticamente).",
      prerequisite: "Un repositorio con pruebas, una imagen Docker y un despliegue que ya puedas realizar manualmente.",
      tags: ["GitHub Actions", "CI/CD", "YAML", "OIDC", "Rollback"],
      groups: [
        {title: "Diseña el pipeline", items: [
          {name: "Workflows, jobs y steps", description: "Define eventos de push y pull request, dependencias entre tareas y runners. Empieza con build y tests."},
          {name: "Build, tests e imagen Docker", description: "Produce artefactos identificables y etiqueta la imagen con el commit. Despliega el mismo artefacto que verificaste."},
          {name: "Entornos, permisos y secretos", description: "Separa desarrollo y producción. Limita GITHUB_TOKEN y aprende OIDC para obtener credenciales temporales hacia AWS."},
          {name: "Despliegue y rollback", description: "Comprueba salud después del cambio, conserva una versión anterior y practica recuperarla cuando falla."}
        ]}
      ],
      practice: ["Ejecuta compilación y pruebas en cada pull request.", "Haz fallar una prueba y comprueba que el pipeline bloquea el siguiente paso.", "Construye una imagen solo si pasan las pruebas y registra su commit.", "Despliega en un entorno de laboratorio y ensaya un rollback."],
      project: {title: "Un cambio, un pipeline", description: "Automatiza KAABLAB para que un cambio pase por validación, build y publicación del artefacto; el despliegue tendrá controles adecuados al entorno.", deliverables: ["Workflow versionado y permisos mínimos.", "Artefactos e imágenes trazables al commit.", "Comprobación de salud y rollback documentado.", "Credenciales temporales o secretos gestionados sin valores en el repositorio."]},
      example: {label: "El flujo que estás construyendo", language: "Pipeline", code: "git push / pull request\n        ↓\nCompile + Tests\n        ↓\nDocker Build + Registry\n        ↓\nDeploy al entorno\n        ↓\nHealth check / Rollback"},
      checkpoints: ["Configuro eventos, jobs y steps en GitHub Actions.", "Un test fallido impide publicar un cambio inválido.", "Relaciono una imagen y un despliegue con su commit.", "Gestiono permisos y credenciales del pipeline.", "Recupero una versión anterior ante un despliegue fallido."],
      resources: ["actions", "actions-oidc"]
    },
    {
      id: "terraform", title: "Infraestructura como código", short: "Terraform", months: "13–15", phase: "cloud", icon: "braces",
      summary: "Define, revisa y reproduce infraestructura con código.",
      why: "Terraform describe recursos como VPC, subredes, Security Groups, EC2 y RDS. El objetivo es entender el plan y el estado, no ejecutar comandos a ciegas.",
      prerequisite: "Conocer los recursos AWS que quieres crear y operar; comprender permisos, red y costos.",
      tags: ["Terraform", "HCL", "IaC", "State", "Modules"],
      groups: [
        {title: "Del clic a una definición", items: [
          {name: "Providers, resources y data sources", description: "Configura al proveedor, declara recursos y consulta información existente."},
          {name: "Variables, outputs y módulos", description: "Separa valores por entorno y agrupa componentes reutilizables sin añadir abstracciones innecesarias."},
          {name: "init, fmt, validate, plan y apply", description: "Inicializa, revisa formato y validez, inspecciona cambios y aplícalos con intención. Practica también destroy en el laboratorio."},
          {name: "State, backend y locking", description: "El estado relaciona tu código con recursos reales y puede contener datos sensibles. Protege el backend y evita aplicar cambios concurrentes."},
          {name: "Drift, dependencias y revisión", description: "Detecta cambios manuales, comprende el orden entre recursos y revisa los planes antes de ejecutarlos."}
        ]}
      ],
      practice: ["Reproduce una parte de tu laboratorio, empezando por red y Security Groups.", "Lee un plan y explica qué crea, cambia o elimina.", "Extrae variables y outputs; protege y versiona la configuración.", "Integra validate y plan al pull request sin publicar el estado ni credenciales."],
      project: {title: "KAABLAB reproducible en AWS", description: "Construye la infraestructura del proyecto con Terraform y documenta cómo crear y retirar un entorno de laboratorio.", deliverables: ["Código para VPC, subredes, reglas, cómputo y base de datos.", "Variables por entorno y backend de estado protegido.", "Revisión del plan en CI y decisiones de diseño.", "Procedimiento de creación, verificación y limpieza con costos estimados."]},
      example: {label: "Fragmento HCL: requiere variables y proveedor", language: "HCL", code: "resource \"aws_instance\" \"backend\" {\n  ami           = var.ami_id\n  instance_type = var.instance_type\n\n  tags = {\n    Name = \"kaablab-backend\"\n  }\n}"},
      checkpoints: ["Declaro recursos y uso variables y outputs.", "Explico un plan antes de aplicarlo.", "Protejo el estado y entiendo locking y drift.", "Recreo una parte del entorno desde el código.", "Valido el código en CI y limpio mi laboratorio."],
      resources: ["terraform"]
    },
    {
      id: "kubernetes", title: "Kubernetes", short: "Orquestación", months: "15–17", phase: "cloud", icon: "hexagon",
      summary: "Aprende a operar varias instancias de una aplicación.",
      why: "Kubernetes administra cargas contenedorizadas y reconcilia su estado deseado. Comienza localmente con kind o minikube; un cluster gestionado no es necesario para aprender los fundamentos.",
      prerequisite: "Dominar Docker, redes y una aplicación con configuración externa, health checks y datos persistentes.",
      tags: ["Kubernetes", "Pods", "Deployments", "Services", "Ingress"],
      groups: [
        {title: "Los objetos que debes entender", items: [
          {name: "Cluster, Node y Pod", description: "El cluster agrupa nodos; un Pod aloja uno o más contenedores relacionados. Comprende el papel del control plane."},
          {name: "Deployment y replicas", description: "Declara cuántas instancias quieres y cómo actualizarlas. Kubernetes reemplaza Pods que fallan; tu diseño también debe manejar fallos de aplicación y datos."},
          {name: "Service e Ingress", description: "Un Service ofrece acceso estable a Pods. Ingress describe rutas HTTP y requiere un controlador para funcionar."},
          {name: "ConfigMap, Secret y Namespace", description: "Separa configuración y datos sensibles, y organiza recursos. Base64 no cifra un Secret; cuida acceso, almacenamiento y gestión de secretos."},
          {name: "Volumes y almacenamiento persistente", description: "Distingue datos efímeros de volúmenes persistentes. Empieza con la API; opera PostgreSQL con una estrategia de datos justificada."},
          {name: "Probes, recursos y kubectl", description: "Configura readiness/liveness, requests y limits. Diagnostica con get, describe, logs y eventos; practica rollout y rollback."}
        ]}
      ],
      practice: ["Despliega tu API en un cluster local con dos réplicas.", "Expón un Service y prueba configuración, probes y límites.", "Elimina un Pod y observa cómo el Deployment lo reemplaza.", "Publica una versión nueva y recupera la anterior; investiga un Pod que no arranca."],
      project: {title: "KAABLAB en un cluster de laboratorio", description: "Versiona manifiestos claros para tu API. Mantén la base de datos fuera del cluster al principio si eso simplifica tu laboratorio.", deliverables: ["Deployment, Service, Namespace y configuración documentados.", "Probes, requests, limits y estrategia de secretos.", "Actualización y recuperación demostradas.", "Runbook de diagnóstico y decisiones sobre persistencia."]},
      example: {label: "Observa y recupera", language: "Bash", code: "kubectl get pods -n kaablab\nkubectl describe deployment api -n kaablab\nkubectl logs deployment/api -n kaablab\nkubectl rollout status deployment/api -n kaablab\nkubectl rollout undo deployment/api -n kaablab"},
      checkpoints: ["Explico Cluster, Node, Pod, Deployment y Service.", "Despliego réplicas con configuración y recursos definidos.", "Distingo ConfigMap de Secret y protejo datos sensibles.", "Diagnostico fallos con logs, eventos y describe.", "Realizo y recupero una actualización de la API."],
      resources: ["kubernetes", "k8s-secrets"]
    },
    {
      id: "observabilidad", title: "Observabilidad y fiabilidad", short: "Ver qué ocurre", months: "17–18", phase: "security", icon: "activity",
      summary: "Pasa de saber que algo falla a entender por qué falla.",
      why: "Logs, métricas y trazas te permiten investigar sistemas. Para SRE, aprende a definir objetivos de fiabilidad y a reducir trabajo manual mediante ingeniería.",
      prerequisite: "Una aplicación desplegada que puedas cambiar y un entorno donde puedas simular fallos controlados.",
      tags: ["Prometheus", "Grafana", "OpenTelemetry", "SLO", "SRE"],
      groups: [
        {title: "Tres señales complementarias", items: [
          {name: "Logs", description: "Eventos con contexto: qué ocurrió y cuándo. Usa registros estructurados e identificadores de solicitud sin incluir secretos o datos innecesarios."},
          {name: "Metrics", description: "Observa CPU, memoria, tasa de solicitudes, latencia y errores. Usa Prometheus y Grafana para métricas y dashboards; CloudWatch también forma parte de tu entorno AWS."},
          {name: "Traces y OpenTelemetry", description: "Sigue una solicitud a través de componentes para encontrar dónde se consume tiempo y cómo se relacionan sus fallos."}
        ]},
        {title: "Primeros fundamentos SRE", items: [
          {name: "SLI, SLO y SLA", description: "Un SLI mide comportamiento, un SLO fija una meta y un SLA es un acuerdo con compromisos. Define un objetivo útil para el servicio."},
          {name: "Error budget y alertas", description: "Cuantifica el margen de fallos permitido por el SLO. Prioriza alertas accionables sobre señales que necesitan intervención."},
          {name: "Incidentes, runbooks y postmortems", description: "Practica diagnóstico y recuperación. Documenta causas, impacto y mejoras sin centrarte en culpar a una persona."}
        ]}
      ],
      practice: ["Instrumenta latencia, solicitudes y errores de tu API.", "Crea un dashboard con métricas del servicio y del sistema.", "Introduce una demora o un error de laboratorio y relaciónalo con logs y trazas.", "Define un SLO inicial, configura una alerta y escribe un postmortem."],
      project: {title: "KAABLAB observable", description: "Construye una vista que te permita explicar qué pasó cuando la ingestión de lecturas se vuelve lenta o comienza a fallar.", deliverables: ["Dashboard con latencia, errores y tasa de lecturas.", "Logs estructurados y una traza de solicitud.", "SLO, alerta accionable y runbook.", "Informe breve de un incidente simulado y su mejora."]},
      example: {label: "Ejemplo de laboratorio; no son datos reales", language: "Métricas", code: "CPU              90 %\nMemoria          72 %\nLatencia p95    650 ms\nErrores         4.8 %\nSolicitudes  12 000 / min\n\n¿Qué cambió y dónde empieza el problema?"},
      checkpoints: ["Distingo logs, métricas y trazas y uso las tres señales.", "Construyo un dashboard con señales del servicio.", "Defino un SLI y un SLO medibles.", "Diagnostico un fallo simulado y recupero el servicio.", "Documento una mejora en un postmortem y un runbook."],
      resources: ["prometheus", "grafana", "otel", "sre"]
    },
    {
      id: "seguridad", title: "AppSec y Cloud Security", short: "Protege el sistema", months: "18–20", phase: "security", icon: "shield",
      summary: "Profundiza en seguridad de aplicaciones, identidades y cloud.",
      why: "Ya has practicado validación, permisos y secretos. Ahora estudia amenazas y demuestra cómo detectar, corregir y volver a comprobar una vulnerabilidad. Usa laboratorios propios o autorizados.",
      prerequisite: "Entender el backend, las redes, IAM y el despliegue; poder interpretar logs y permisos.",
      tags: ["OWASP", "AppSec", "IAM", "KMS", "CloudTrail", "Threat Modeling"],
      groups: [
        {title: "Seguridad web y del código", items: [
          {name: "OWASP Top 10 vigente", description: "Usa la edición actual como mapa de riesgos. Aprende SQL Injection, XSS, controles de acceso rotos, fallos de autenticación, mala configuración, dependencias vulnerables y SSRF; no todos son categorías separadas."},
          {name: "Autenticación y autorización", description: "Comprueba propiedad de recursos, roles, caducidad de sesiones y permisos por acción. Incluye pruebas para peticiones que deben ser rechazadas."},
          {name: "Threat modeling", description: "Dibuja componentes, datos y fronteras de confianza. Identifica amenazas, prioriza riesgos y registra mitigaciones verificables."},
          {name: "Vulnerabilidad → corrección → nueva prueba", description: "Reproduce el problema en un laboratorio, entiende su causa, corrige el código o configuración y escribe una prueba que evite regresiones."}
        ]},
        {title: "AWS desde el punto de vista de seguridad", items: [
          {name: "IAM avanzado y permisos mínimos", description: "Revisa roles, políticas, condiciones y accesos. Evita permisos administrativos innecesarios y elimina identidades y credenciales sin uso."},
          {name: "Security Groups, Network ACL y WAF", description: "Distingue control de tráfico a nivel de recurso y subred, y protección de solicitudes web. Justifica cada regla con tu arquitectura."},
          {name: "KMS y Secrets Manager", description: "Entiende claves de cifrado y ciclo de vida de secretos: acceso, almacenamiento, rotación y uso por la aplicación."},
          {name: "CloudTrail, GuardDuty y Security Hub", description: "Audita actividad, investiga detecciones y organiza hallazgos. Una alerta exige contexto y una acción razonada."},
          {name: "AWS Config e incident response", description: "Evalúa configuraciones y cambios; prepara un procedimiento para contener, investigar, recuperar y mejorar."}
        ]}
      ],
      practice: ["Practica una vulnerabilidad en OWASP Juice Shop o un laboratorio propio y documenta la corrección.", "Revisa accesos a S3, exposición de la base de datos y permisos IAM de KAABLAB.", "Detecta configuraciones como SSH abierto al mundo o secretos en código y explica cómo corregirlas.", "Simula pérdida de una credencial: revoca, rota, investiga logs y verifica la recuperación."],
      project: {title: "Revisión de seguridad de KAABLAB", description: "Presenta riesgos concretos, decisiones y evidencia de mitigación. Une seguridad del código con configuración del entorno.", deliverables: ["Threat model y matriz breve de riesgos priorizados.", "Pruebas de acceso y correcciones de código.", "Políticas IAM y configuración de red revisadas.", "Runbook de respuesta a incidentes y evidencias sin datos sensibles."]},
      example: {label: "Comprender, corregir y comprobar", language: "Laboratorio", code: "SQL Injection / acceso indebido\n        ↓\nReproducción en laboratorio\n        ↓\nConsulta parametrizada / control de acceso\n        ↓\nPrueba de regresión\n        ↓\nRevisión del código y despliegue"},
      checkpoints: ["Explico riesgos web y reproduzco uno en un laboratorio autorizado.", "Corrijo una vulnerabilidad y añado una prueba de regresión.", "Construyo un threat model de mi aplicación.", "Reviso permisos, exposición de red y gestión de secretos en AWS.", "Sigo un procedimiento de respuesta a una credencial comprometida."],
      resources: ["owasp", "juice-shop", "iam", "aws-security"]
    },
    {
      id: "devsecops", title: "DevSecOps", short: "Seguridad automatizada", months: "20–22", phase: "security", icon: "lock",
      summary: "Integra controles de seguridad en cada cambio de software.",
      why: "Une Development, Security y Operations. Security as Code significa definir controles reproducibles y gestionar sus resultados, desde el repositorio hasta el sistema en ejecución.",
      prerequisite: "Un pipeline CI/CD, infraestructura versionada, conocimientos de AppSec y Cloud Security y observabilidad.",
      tags: ["SAST", "Trivy", "Dependabot", "Secret scanning", "DAST"],
      groups: [
        {title: "Controles complementarios", items: [
          {name: "SAST y revisión de código", description: "Analiza el código sin ejecutarlo. SonarQube u otras herramientas ayudan a identificar problemas; revisa contexto y falsos positivos."},
          {name: "Dependencias y SCA", description: "Inventaría componentes y verifica vulnerabilidades conocidas. Explora Dependabot o Snyk y decide cómo actualizar y comprobar compatibilidad."},
          {name: "Secret scanning", description: "Detecta credenciales expuestas. Si un secreto ya se publicó, revócalo y rótalo; borrarlo del archivo no elimina la exposición."},
          {name: "Container e IaC scanning", description: "Usa Trivy u otra herramienta para revisar imágenes y configuración. Actualiza bases mantenidas y prioriza riesgos explotables."},
          {name: "DAST y OWASP ZAP", description: "Prueba una aplicación ejecutándose en un laboratorio para descubrir comportamientos inseguros. Complementa, no sustituye, las pruebas y la revisión."},
          {name: "Runtime security y monitoreo", description: "Relaciona eventos del entorno con versiones, permisos y cambios. Define quién atiende hallazgos y cómo verifica la corrección."}
        ]},
        {title: "Políticas útiles, no ruido", items: [
          {name: "Gates y remediación", description: "Define qué hallazgos bloquean un despliegue según impacto y contexto. Las excepciones deben tener motivo, responsable y vencimiento."},
          {name: "Permisos y disponibilidad", description: "Limita el acceso del pipeline. GitHub Advanced Security / Code Security / Secret Protection y otros servicios dependen del plan y del repositorio; verifica disponibilidad y costo."}
        ]}
      ],
      practice: ["Añade un escaneo de dependencias y un escaneo de imagen al pipeline.", "Prueba detección de secretos con una cadena de prueba admitida por la herramienta.", "Introduce un hallazgo de laboratorio y verifica el bloqueo y la remediación.", "Documenta un falso positivo y la política de excepciones; no intentes dominar todas las herramientas a la vez."],
      project: {title: "Pipeline seguro de KAABLAB", description: "Cada cambio conserva pruebas, análisis, trazabilidad y controles de despliegue. Después del despliegue, las señales permiten investigar y mejorar.", deliverables: ["Unit tests, SAST, SCA, secret y container scans integrados.", "Controles sobre infraestructura y despliegue.", "Política de severidad, excepciones y remediación.", "Demostración de un cambio rechazado y luego corregido."]},
      example: {label: "Tu pipeline final", language: "DevSecOps", code: "Cambio → Unit tests → SAST\n  ↓\nDependency + Secret scans\n  ↓\nBuild → Container + IaC scans\n  ↓\nDeploy + Health check\n  ↓\nRuntime security + Monitoring"},
      checkpoints: ["Distingo SAST, SCA, secret scanning, container scanning y DAST.", "Integro controles relevantes con permisos mínimos.", "Un hallazgo de prueba bloquea el despliegue según una política.", "Corrijo el problema y demuestro que pasa la nueva verificación.", "Documento hallazgos, excepciones y seguimiento en operación."],
      resources: ["trivy", "dependabot", "zap", "sonarqube", "snyk", "github-security"]
    },
    {
      id: "especializacion", title: "Elige tu especialización", short: "Tu siguiente capítulo", months: "22–24", phase: "security", icon: "branch",
      summary: "Usa tu experiencia práctica para elegir dónde profundizar.",
      why: "Después de probar desarrollo, infraestructura y seguridad, tendrás mejores señales de lo que disfrutas. No es una decisión definitiva: la base aprendida sigue siendo útil si cambias de dirección.",
      prerequisite: "Haber construido, desplegado, observado y revisado un sistema; reconocer qué tareas te motivaron y cuáles te costaron.",
      tags: ["DevOps", "SRE", "Platform", "Cloud Security", "DevSecOps"],
      groups: [
        {title: "Infraestructura y automatización", items: [
          {name: "DevOps, SRE y Platform Engineering", description: "Profundiza Linux, redes, AWS, Terraform, Kubernetes, Go, observabilidad y sistemas distribuidos. SRE se centra en fiabilidad; Platform crea herramientas y plataformas para otros desarrolladores."},
          {name: "Evolución profesional posible", description: "DevOps / Cloud Engineer → mayor responsabilidad → SRE, Platform, liderazgo o Cloud Architect. Son alternativas relacionadas, no ascensos obligatorios en fila."}
        ]},
        {title: "Seguridad como especialidad", items: [
          {name: "Security Engineering y Cloud Security", description: "Profundiza IAM, redes, criptografía aplicada, threat modeling, respuesta a incidentes, AppSec y seguridad de Kubernetes."},
          {name: "Evolución profesional posible", description: "Security / AppSec Engineer → Cloud Security Engineer → Senior Security Engineer → Security Architect, según experiencia y empresa."}
        ]},
        {title: "La combinación", items: [
          {name: "DevSecOps", description: "Si disfrutas ambos mundos, une programación, cloud, automatización y seguridad. Construye políticas y controles que ayudan a entregar software con menos riesgo."},
          {name: "Evolución profesional posible", description: "Backend + Cloud + DevOps + Security → DevSecOps Engineer → Senior o arquitectura de seguridad. La especialidad se construye con experiencia operando sistemas."}
        ]}
      ],
      practice: ["Durante dos semanas mejora un SLO o automatiza una tarea operativa.", "Durante otras dos semanas investiga un riesgo, ajusta permisos y demuestra la mitigación.", "Escribe qué disfrutaste, qué aprendiste y qué área quieres explorar los siguientes tres meses.", "Compara vacantes reales y adapta tu portafolio a una ruta principal."],
      project: {title: "Tu portafolio con una dirección", description: "Presenta cuatro proyectos conectados y un caso profundo de tu ruta elegida. La meta es que puedas explicar tus decisiones y defenderlas con evidencia.", deliverables: ["README principal con proyectos, demos y arquitectura.", "Un caso de fiabilidad, seguridad o pipeline con problema y resultado.", "CV adaptado a puestos iniciales y un plan de aprendizaje de 90 días.", "Reflexión sobre tu siguiente especialidad sin cerrar otras posibilidades."]},
      example: {label: "Tu base sigue siendo útil", language: "Ruta", code: "Backend + Linux + Redes + Docker + AWS\n                 ↓\n     DevOps / SRE / Platform\n     Cloud Security / AppSec\n     DevSecOps\n\nElige por experiencia, no solo por el título."},
      checkpoints: ["Explico las diferencias entre DevOps, SRE, Platform y Cloud Security.", "Tengo evidencia concreta de construir, operar y proteger un sistema.", "Elijo una ruta inicial por lo que disfruté al practicar.", "Adapto mi portafolio y CV a oportunidades reales.", "Defino un siguiente plan de 90 días con un proyecto y objetivos."],
      resources: ["sre", "aws-security", "cncf"]
    }
  ],
  tracks: [
    {id: "devops", name: "DevOps / SRE / Platform", eyebrow: "CONSTRUYE Y OPERA", icon: "terminal", color: "green", description: "Para quien disfruta Linux, automatizar despliegues, crear infraestructura y encontrar por qué un sistema falla.", question: "¿Cómo hacemos que este sistema sea fácil de desplegar y fiable?", tasks: ["Automatizar CI/CD e infraestructura", "Diagnosticar latencia, capacidad y errores", "Definir SLO y reducir trabajo manual", "Crear APIs, CLI y plataformas internas"], deepen: "Kubernetes · Terraform · AWS · Linux · Redes · Go · Observabilidad · Sistemas distribuidos", path: "Backend / Cloud → DevOps → SRE o Platform → liderazgo o arquitectura", experiment: "Simula una caída, recupérala y automatiza la recuperación que tenga sentido."},
    {id: "security", name: "Cloud Security", eyebrow: "INVESTIGA Y PROTEGE", icon: "shield", color: "blue", description: "Para quien disfruta revisar permisos, investigar amenazas y proteger aplicaciones, identidades, redes y datos.", question: "¿Quién puede acceder, a qué y bajo qué condiciones?", tasks: ["Diseñar IAM y permisos mínimos", "Revisar código y amenazas", "Investigar detecciones e incidentes", "Proteger secretos, redes y datos"], deepen: "IAM · AppSec · Cloud Security · Redes · Criptografía aplicada · Threat modeling · Incident response · Kubernetes Security", path: "Backend / AppSec → Security Engineer → Cloud Security → Security Architect", experiment: "Revisa un rol con permisos excesivos, reduce el acceso y demuestra que la aplicación sigue funcionando."},
    {id: "devsecops", name: "DevSecOps", eyebrow: "UNE LOS DOS MUNDOS", icon: "lock", color: "orange", description: "Para quien quiere hacer que las herramientas de desarrollo y operación incorporen seguridad de forma automática.", question: "¿Cómo comprobamos que cada cambio sea seguro antes y después de desplegarlo?", tasks: ["Integrar análisis y escaneos al pipeline", "Crear políticas como código", "Gestionar remediación y excepciones", "Relacionar despliegues con señales de seguridad"], deepen: "CI/CD · IaC · SAST · SCA · Secrets · Contenedores · Cloud · Seguridad en ejecución", path: "Backend + Cloud + DevOps + Security → DevSecOps → Senior o arquitectura", experiment: "Haz que un hallazgo de laboratorio detenga un cambio, corrígelo y comprueba el nuevo despliegue."}
  ],
  projects: [
    {number: "01", title: "API Spring Boot + PostgreSQL", subtitle: "Demuestra Backend", icon: "layers", period: "Meses 3–6", description: "Modela colmenas y lecturas, implementa reglas y ofrece endpoints documentados y probados.", evidence: ["Contratos HTTP y OpenAPI", "SQL, relaciones y migraciones", "Validación, permisos y pruebas"], stage: "backend"},
    {number: "02", title: "KAABLAB desplegado en AWS", subtitle: "Demuestra Cloud + IoT", icon: "cloud", period: "Meses 9–12", description: "Conecta el flujo de lecturas con una API desplegada, datos persistentes y una red justificada.", evidence: ["Diagrama de arquitectura", "IAM, HTTPS y base privada", "Logs, costos y recuperación"], stage: "aws"},
    {number: "03", title: "Infraestructura + CI/CD", subtitle: "Demuestra DevOps", icon: "braces", period: "Meses 12–18", description: "Reproduce entornos con Terraform y despliega artefactos verificados y trazables con GitHub Actions.", evidence: ["IaC y estado protegido", "Pipeline y rollback", "Dashboard, SLO y runbooks"], stage: "terraform"},
    {number: "04", title: "Pipeline y aplicación protegida", subtitle: "Demuestra Security", icon: "shield", period: "Meses 18–24", description: "Identifica riesgos, corrige vulnerabilidades e integra controles para cada cambio.", evidence: ["Threat model y mitigaciones", "Pruebas de autorización", "Scans y remediación demostrada"], stage: "devsecops"}
  ],
  careers: [
    {period: "MESES 5–7", title: "Tu primera experiencia con código", jobs: ["Backend Intern", "Java Intern", "Software Developer Intern", "Junior Backend"], evidence: "Una API propia con SQL, pruebas, Git y documentación; poder explicar y depurar tu código."},
    {period: "MESES 9–12", title: "Acércate a infraestructura", jobs: ["Cloud Intern", "Cloud Support", "Junior Cloud Engineer", "DevOps Intern"], evidence: "Linux, redes y un despliegue cloud documentado con logs, permisos y costos."},
    {period: "CON MÁS PRÁCTICA", title: "Busca una ruta de entrada", jobs: ["Junior DevOps Engineer", "Cloud Engineer", "Junior Security Engineer", "SOC / Security Engineering", "Application Security Jr"], evidence: "Pipeline, IaC, diagnóstico o seguridad con evidencia. SOC y Security Engineering tienen tareas distintas; revisa cada vacante."},
    {period: "CON EXPERIENCIA REAL", title: "Crece en tu especialidad", jobs: ["DevOps Engineer", "SRE", "Platform Engineer", "Cloud Security Engineer", "DevSecOps Engineer"], evidence: "Experiencia operando sistemas, decisiones de arquitectura, colaboración y resolución de incidentes."}
  ],
  certificates: [
    {moment: "Backend", name: "Ninguna necesaria al inicio", description: "Tu API, sus pruebas y tu capacidad para explicarla son la prioridad.", priority: "Proyecto primero", url: null},
    {moment: "Linux", name: "Linux Essentials", description: "Valida fundamentos si te ayuda a estructurar el aprendizaje.", priority: "Opcional", url: "https://www.lpi.org/our-certifications/linux-essentials-overview/"},
    {moment: "Redes", name: "CCNA", description: "Útil si quieres profundizar redes y configuración de infraestructura.", priority: "Opcional", url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html"},
    {moment: "AWS inicial", name: "AWS Certified Cloud Practitioner", description: "Panorama cloud y vocabulario; no sustituye práctica de ingeniería.", priority: "Opcional", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"},
    {moment: "AWS con práctica", name: "AWS Solutions Architect – Associate", description: "Refuerza diseño de soluciones cuando ya has construido un entorno.", priority: "Según tu ruta", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"},
    {moment: "Seguridad inicial", name: "CompTIA Security+", description: "Estructura fundamentos de seguridad antes de una especialidad avanzada.", priority: "Según tu ruta", url: "https://www.comptia.org/certifications/security"},
    {moment: "Kubernetes", name: "Certified Kubernetes Administrator (CKA)", description: "Tiene sentido cuando puedes administrar y diagnosticar clusters por terminal.", priority: "Con práctica", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"},
    {moment: "Cloud Security avanzada", name: "AWS Certified Security – Specialty", description: "Profundiza seguridad cloud después de experiencia práctica relevante.", priority: "Más adelante", url: "https://aws.amazon.com/certification/certified-security-specialty/"},
    {moment: "Gestión de proyectos", name: "CAPM → PMP cuando cumplas requisitos", description: "Apoyan gestión; PMP exige experiencia y requisitos del proveedor. No son necesarias para empezar en Backend.", priority: "Ruta de gestión", url: "https://www.pmi.org/certifications/certified-associate-capm"}
  ],
  resources: [
    {id: "java", category: "Fundamentos", name: "Dev.java", label: "Java, POO, Collections y Streams", url: "https://dev.java/learn/"},
    {id: "git", category: "Fundamentos", name: "Pro Git", label: "Control de versiones, ramas y colaboración", url: "https://git-scm.com/book/es/v2"},
    {id: "python", category: "Fundamentos", name: "Tutorial de Python", label: "Scripts, estructuras y archivos", url: "https://docs.python.org/es/3/tutorial/"},
    {id: "spring", category: "Backend", name: "Spring Guides", label: "APIs y proyectos guiados oficiales", url: "https://spring.io/guides"},
    {id: "postgres", category: "Backend", name: "PostgreSQL Tutorial", label: "SQL y bases de datos relacionales", url: "https://www.postgresql.org/docs/current/tutorial.html"},
    {id: "spring-security", category: "Backend", name: "Spring Security", label: "Autenticación y autorización", url: "https://docs.spring.io/spring-security/reference/"},
    {id: "ubuntu", category: "Fundamentos", name: "Ubuntu: command line", label: "Primeros pasos en la terminal Linux", url: "https://ubuntu.com/tutorials/command-line-for-beginners"},
    {id: "mdn", category: "Fundamentos", name: "MDN: HTTP", label: "Solicitudes, métodos y respuestas", url: "https://developer.mozilla.org/es/docs/Web/HTTP"},
    {id: "cisco", category: "Fundamentos", name: "Cisco Networking Academy", label: "Explora formación en redes", url: "https://www.netacad.com/"},
    {id: "docker", category: "Cloud & DevOps", name: "Docker Get Started", label: "Imágenes, contenedores y Compose", url: "https://docs.docker.com/get-started/"},
    {id: "aws-start", category: "Cloud & DevOps", name: "AWS Getting Started", label: "Servicios y laboratorios iniciales", url: "https://aws.amazon.com/getting-started/"},
    {id: "iam", category: "Seguridad", name: "AWS IAM Best Practices", label: "Identidad, roles y privilegio mínimo", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"},
    {id: "aws-budgets", category: "Cloud & DevOps", name: "AWS Budgets", label: "Alertas y seguimiento de costos", url: "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"},
    {id: "actions", category: "Cloud & DevOps", name: "GitHub Actions", label: "Workflows, jobs y despliegues", url: "https://docs.github.com/en/actions"},
    {id: "actions-oidc", category: "Cloud & DevOps", name: "GitHub Actions + AWS OIDC", label: "Acceso temporal al entorno cloud", url: "https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services"},
    {id: "terraform", category: "Cloud & DevOps", name: "HashiCorp Terraform", label: "Infraestructura, módulos y estado", url: "https://developer.hashicorp.com/terraform/tutorials"},
    {id: "kubernetes", category: "Cloud & DevOps", name: "Kubernetes Concepts", label: "Objetos y funcionamiento del cluster", url: "https://kubernetes.io/docs/concepts/"},
    {id: "k8s-secrets", category: "Seguridad", name: "Kubernetes Secrets", label: "Buenas prácticas con datos sensibles", url: "https://kubernetes.io/docs/concepts/security/secrets-good-practices/"},
    {id: "prometheus", category: "Fiabilidad", name: "Prometheus", label: "Métricas y consultas", url: "https://prometheus.io/docs/introduction/overview/"},
    {id: "grafana", category: "Fiabilidad", name: "Grafana", label: "Dashboards y observación de servicios", url: "https://grafana.com/docs/grafana/latest/"},
    {id: "otel", category: "Fiabilidad", name: "OpenTelemetry", label: "Instrumentación, métricas y trazas", url: "https://opentelemetry.io/docs/"},
    {id: "sre", category: "Fiabilidad", name: "Google SRE Books", label: "Fiabilidad, SLO e incidentes", url: "https://sre.google/books/"},
    {id: "owasp", category: "Seguridad", name: "OWASP Top 10", label: "Mapa vigente de riesgos web", url: "https://owasp.org/projects/top-ten"},
    {id: "juice-shop", category: "Seguridad", name: "OWASP Juice Shop", label: "Aplicación para laboratorio de seguridad", url: "https://owasp.org/www-project-juice-shop/"},
    {id: "aws-security", category: "Seguridad", name: "AWS Security Documentation", label: "Seguridad y controles del entorno cloud", url: "https://docs.aws.amazon.com/security/"},
    {id: "trivy", category: "Seguridad", name: "Trivy", label: "Escaneo de imágenes y configuración", url: "https://trivy.dev/"},
    {id: "dependabot", category: "Seguridad", name: "Dependabot", label: "Actualizaciones y alertas de dependencias", url: "https://docs.github.com/en/code-security/dependabot"},
    {id: "zap", category: "Seguridad", name: "OWASP ZAP", label: "Análisis de una aplicación en ejecución", url: "https://www.zaproxy.org/docs/"},
    {id: "sonarqube", category: "Seguridad", name: "SonarQube", label: "Análisis estático y calidad de código", url: "https://docs.sonarsource.com/"},
    {id: "snyk", category: "Seguridad", name: "Snyk Docs", label: "Dependencias, contenedores e infraestructura", url: "https://docs.snyk.io/"},
    {id: "github-security", category: "Seguridad", name: "GitHub Code Security", label: "Controles y disponibilidad por plan", url: "https://docs.github.com/en/code-security"},
    {id: "cncf", category: "Cloud & DevOps", name: "CNCF Platforms", label: "Principios de plataformas para desarrolladores", url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/"}
  ]
};
