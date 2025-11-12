# OctoApp - Architecture Documentation

**Project Name:** weweb-front
**Version:** 4.0.0
**Last Updated:** November 12, 2025
**Application Type:** Multi-page Web Application (SPA/MPA Hybrid)

---

## 1. Overall Directory Structure and Organization

### Root Level Structure
```
OctoApp/
├── src/                          # Source code directory
│   ├── _front/                   # Frontend application root
│   │   ├── main.js               # Application entry point
│   │   ├── App.vue               # Root Vue component
│   │   ├── router.js             # Vue Router configuration (209 lines)
│   │   ├── components/           # Global frontend components
│   │   ├── views/                # Page views
│   │   ├── helpers/              # Frontend-specific helpers
│   │   └── use/                  # Vue composables
│   │
│   ├── _common/                  # Shared utilities & plugins
│   │   ├── helpers/              # Common helper functions
│   │   │   ├── code/
│   │   │   ├── component/
│   │   │   ├── configuration/
│   │   │   ├── data/             # Data initialization & workflows
│   │   │   ├── htmlEscaper.js
│   │   │   ├── pathResolver.js
│   │   │   └── updateVariable.js
│   │   ├── plugins/              # Global plugins
│   │   ├── store/                # Pinia/composable stores
│   │   └── use/                  # Reusable composables
│   │
│   ├── components/               # Component library
│   │   ├── sections/             # Section components (1 section)
│   │   │   └── section-[UUID]/
│   │   ├── elements/             # Element components (31 elements)
│   │   │   ├── element-[UUID]/   # Individual element directories
│   │   │   └── ...
│   │   └── plugins/              # Plugin implementations
│   │       ├── plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/  # Date (dayjs)
│   │       ├── plugin-97e7b1ae-f88a-4697-849c-ee56ab49bb48/  # JavaScript
│   │       ├── plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/  # REST API
│   │       ├── plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186/  # Supabase
│   │       └── plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/  # Supabase Auth
│   │
│   ├── pages/                    # Page initialization & configuration
│   │   └── [pageId].js           # Page-specific setup (30+ page files)
│   │
│   ├── store/                    # Vuex state management
│   │   ├── index.js              # Store root
│   │   ├── websiteData/          # Website structure & pages
│   │   ├── front/                # Frontend state (lang, screen size, etc.)
│   │   ├── libraries/            # Library components
│   │   └── data/                 # General app data
│   │
│   ├── pinia/                    # Pinia (Vue 3 state) stores
│   │   └── index.js
│   │
│   ├── wwLib/                    # Core application library
│   │   ├── index.js              # Main library exports (28KB+)
│   │   └── services/             # Service modules
│   │       ├── wwApp.js
│   │       ├── wwAuth.js
│   │       ├── wwApiRequests.js
│   │       ├── wwCollection.js
│   │       ├── wwElement.js
│   │       ├── wwFormula.js
│   │       ├── wwLang.js
│   │       ├── wwLog.js
│   │       ├── wwObjectHelper.js
│   │       ├── wwPageHelper.js
│   │       ├── wwPluginHelper.js
│   │       ├── wwVariable.js
│   │       ├── wwWebsiteData.js
│   │       ├── wwWorkflow.js
│   │       └── ... (18+ service modules)
│   │
│   ├── helpers/                  # Utility helpers
│   │   ├── asyncCache.ts         # Async caching utility
│   │   ├── mediaQueriesListener.js
│   │   └── jsonAutoClose.js
│   │
│   ├── assets/                   # Static assets
│   │   └── css/
│   │       ├── common.css
│   │       └── index.js
│   │
│   ├── global.d.ts               # Global TypeScript definitions
│   └── vite-env.d.ts
│
├── public/                       # Static public files
├── template.html                 # HTML template for Handlebars compilation
├── vite.config.js                # Vite configuration
├── tsconfig.app.json             # TypeScript configuration
├── tsconfig.node.json            # TypeScript Node configuration
├── package.json                  # NPM dependencies & scripts
├── plugins-settings.json         # Plugin configuration & database tables
├── postbuild.js                  # Post-build script (collection pages)
├── .env                          # Environment variables
└── .git/                         # Git repository
```

### Key Directory Characteristics

- **Component-based Architecture:** Components are organized by type (sections, elements)
- **Plugin System:** External integrations isolated in plugin directories
- **Modular State Management:** Separate Vuex modules for different concerns
- **Service Layer:** wwLib provides centralized access to all services
- **Multi-page Configuration:** Page definitions in router and pages directory

---

## 2. Application Type

**Classification:** Multi-Page Web Application with Single-Page App characteristics (SPA/MPA Hybrid)

### Application Characteristics

- **Format:** Web application (runs in browser)
- **Architecture:** Component-driven, plugin-enabled framework
- **Deployment:** Static site generation with dynamic initialization
- **Build Output:** Multiple HTML pages generated at build time with Vite
- **Client-Side Rendering:** Vue 3 components rendered on the client
- **Responsive Design:** Mobile-first approach with media query listeners

### Primary Use Case

This is a **Business Management System** specifically designed for:
- Financial calculations (revisional calculations, credit card analysis)
- CRM (Customer Relationship Management)
- Client management and contact tracking
- Case/process management (legal/financial cases)
- User and permission management
- Task and meeting management
- Lead generation and sales funnel tracking
- Document/petition generation

### Domain Context

The application appears to be built for a **Portuguese-speaking legal/financial services firm**, handling:
- Mortgage financing calculations
- Credit card dispute resolution
- Financial product analysis
- Legal document generation (petitions)
- Client and employee management

---

## 3. Main Technology Stack

### Frontend Framework & Build Tools

| Technology | Version | Purpose |
|-----------|---------|---------|
| Vue.js | 3.5.13 | UI framework & component system |
| Vue Router | 4.5.1 | Client-side routing |
| Vite | 6.3.5 | Build tool & dev server |
| @vitejs/plugin-vue | 5.2.4 | Vue SFC support in Vite |

### State Management

| Technology | Version | Purpose |
|-----------|---------|---------|
| Vuex | 4.1.0 | Global state management (legacy) |
| Pinia | 3.0.2 | Modern Vue 3 state management |

### Styling & CSS

| Technology | Version | Purpose |
|-----------|---------|---------|
| SCSS | (sass-embedded 1.89.0) | CSS preprocessing |
| Autoprefixer | 10.4.21 | Browser compatibility |

### Rich Text & Content Editing

| Technology | Version | Purpose |
|-----------|---------|---------|
| TipTap | 2.8.0 | WYSIWYG editor framework |
| ProseMirror | 1.5.0 | Document model for editor |
| Markdown support | (tiptap-markdown 0.8.10) | Markdown parsing/output |

### Data & API Communication

| Technology | Version | Purpose |
|-----------|---------|---------|
| Axios | 1.12.2 | HTTP client for API requests |
| @supabase/supabase-js | 2.50.3 | Supabase client SDK |
| REST API (plugin) | - | Custom REST API integration |

### Database & Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| Supabase | - | PostgreSQL-based backend |
| Supabase Auth | - | Authentication & authorization |

### Date & Time

| Technology | Version | Purpose |
|-----------|---------|---------|
| dayjs | 1.11.0 | Date/time manipulation (lighter than moment.js) |
| date-fns | 4.1.0 | Modern date utility library |

### UI Components & Utilities

| Technology | Version | Purpose |
|-----------|---------|---------|
| @vueform/multiselect | 2.6.2 | Enhanced select component |
| @vuepic/vue-datepicker | 3.6.8 | Date picker component |
| @floating-ui/vue | 1.1.5 | Positioning for floating elements |
| vuedraggable | 4.1.0 | Drag-and-drop functionality |
| imask | 7.6.1 | Input masking |
| vue-ellipse-progress | 2.1.1 | Circular progress indicator |

### Utilities & Helpers

| Technology | Version | Purpose |
|-----------|---------|---------|
| lodash | 4.17.21 | Utility functions (compact, legacy) |
| lodash-es | 4.17.21 | ES6 module version of lodash |
| html-escaper | 3.0.3 | HTML escaping utilities |
| qs | 6.14.0 | Query string parsing |
| uuid | 11.1.0 | UUID generation |
| short-unique-id | 5.3.0 | Shorter unique IDs |
| tiny-emitter | 2.1.0 | Event emitter |

### Head & Meta Management

| Technology | Version | Purpose |
|-----------|---------|---------|
| @vueuse/head | 2.0.0 | Document head management |
| @vueuse/core | 12.5.0 | Vue composition utilities |
| vue-meta | 2.4.0 | Meta tag management |

### Cookies & Storage

| Technology | Version | Purpose |
|-----------|---------|---------|
| vue-cookie-next | 1.3.0 | Cookie management |

### Virtual Scrolling

| Technology | Version | Purpose |
|-----------|---------|---------|
| vue-virtual-scroller | 2.0.0-beta.8 | Large list rendering optimization |

### Build & Development

| Technology | Purpose |
|-----------|---------|
| Handlebars | Template compilation for HTML pages |
| vite-plugin-node-polyfills | Node.js polyfills in browser |
| Rollup | Bundling engine (integrated with Vite) |

### Languages & Type System

- **JavaScript (ES6+):** Primary language
- **TypeScript:** Optional, with strict mode disabled
- **Vue Single File Components (.vue):** Template, script, style co-location

### Browser Support

```
browserslist: "last 3 years"  // Modern browsers only
```

---

## 4. Key Architectural Components and Their Purposes

### A. Core Application Layer (wwLib)

**Location:** `/src/wwLib/index.js` (28KB+)

**Purpose:** Central hub providing all application services and utilities

**Main Exports:**

```javascript
{
  // Authentication & Users
  wwAuth              // Authentication service

  // Data & Collections
  wwCollection        // Collection/data management
  wwVariable          // Variable state management
  wwFormula           // Formula evaluation

  // UI & Elements
  wwElement           // Element manipulation
  wwObjectHelper      // Object/element utilities
  wwElementHelper     // Alias for wwObjectHelper

  // Page & Navigation
  wwPageHelper        // Page routing & navigation
  wwWebsiteData       // Website structure & data fetching

  // Plugins & Extensions
  wwPluginHelper      // Plugin management

  // Utilities
  wwApp               // Application management
  wwUtils             // General utilities
  wwLang              // Language/localization
  wwLog               // Logging
  wwFormula           // Formula evaluation
  wwWorkflow          // Workflow execution

  // Stores & Events
  scrollStore         // Scroll position management
  keyboardEventStore  // Keyboard event handling
  logStore            // Application logging

  // Event System
  $on(event, fn)      // Event listener
  $emit(event, ...args) // Event emission
  $once(event, fn)    // One-time listener
  $off(event, fn)     // Event removal
}
```

**Usage Pattern:**
```javascript
// Services accessed globally via wwLib
wwLib.$store          // Vuex store
wwLib.$pinia          // Pinia instance
wwLib.wwAuth          // Authentication service
wwLib.wwCollection    // Collections/tables
wwLib.scrollStore     // Scroll management
```

### B. State Management

#### 1. Vuex Store (Legacy)
**Location:** `/src/store/`

**Modules:**
- `websiteData` - Page definitions, website structure, design info
- `front` - Language, screen size, UI state
- `data` - General application data
- `libraries` - Library components state

**Usage:**
```javascript
// Getters
this.$store.getters['websiteData/getDesignInfo']
this.$store.getters['front/getLang']
this.$store.getters['front/getScreenSize']

// Actions
await this.$store.dispatch('websiteData/setFullDesign', designInfo)
this.$store.dispatch('front/setLang', langCode)
```

#### 2. Pinia Stores (Modern)
**Location:** `/src/pinia/`

- Modern Vue 3 state management
- Integrated with composition API
- Used for features like variables, icons

### C. Routing System

**Location:** `/src/_front/router.js` (209 lines)

**Pages:** 32 total pages organized in 7 categories

**Routes Structure:**
```
/                           # Home
/login                      # Authentication
/cadastro                   # Sign up
/recuperar-senha            # Password recovery
/nova-senha                 # New password
/cadastrar-empresa          # Company registration

/calculo-revisional/        # Financial calculation section
  /financiamento-imobiliario
  /cartao-credito
  /revisao-geral
  /analise-previa
  /analise-previa-calculo
  /relatorio-completo-calculo

/crm/                       # Customer relationship section
  /crm
  /criar-nova-oportunidade
  /cadastrar-cliente
  /detalhes_cliente
  /cadastrar-lead

/geracao-de-peticoes/       # Document generation
/usuarios/                  # User management
/contatos/                  # Contact management
/permissoes-de-usuarios/    # Permission management
/configuracoes-gerais/      # General settings
/usuarios-tela-completa/    # User dashboard
```

**Key Features:**
- Language prefix support (Portuguese: `/pt/`)
- Dynamic page loading on navigation
- Route guards for authentication
- Role-based access control
- Hash-based scrolling

**Route Guard Logic:**
```javascript
- Check authentication (private pages)
- Validate user roles
- Redirect to login if not authenticated
- Redirect to forbidden page if unauthorized
- Initialize page data & plugins before render
```

### D. Plugin System

**Location:** `/src/components/plugins/`

**5 Integrated Plugins:**

1. **Supabase (f9ef41c3-1c53-4857-855b-f2f6a40b7186)**
   - Database operations
   - Real-time subscriptions
   - Authentication backend
   - Collections/tables query interface

2. **Supabase Auth (1fa0dd68-5069-436c-9a7d-3b54c340f1fa)**
   - User authentication
   - Session management
   - Role-based access control
   - User groups & permissions

3. **JavaScript (97e7b1ae-f88a-4697-849c-ee56ab49bb48)**
   - Custom JavaScript execution
   - Code evaluation in templates

4. **Date (832d6f7a-42c3-43f1-a3ce-9a678272f811)**
   - Date/time utilities (dayjs)
   - Format & manipulation

5. **REST API (2bd1c688-31c5-443e-ae25-59aa5b6431fb)**
   - HTTP request execution
   - External API integration

**Plugin Architecture:**
```javascript
// Each plugin implements:
{
  _onLoad(settings)        // Initialization
  _getUser()              // Auth info
  _getIsAuthenticated()   // Auth status
  _matchUserGroups(groups) // Role checking
  // ... plugin-specific methods
}
```

### E. Component System

**Elements:** 31 custom elements with UUID-based naming
- Each element is a reusable Vue component
- Self-contained with own styling
- Located in `/src/components/elements/element-[UUID]/src/`

**Sections:** 1 section component
- Higher-level layout component
- Located in `/src/components/sections/`

**Global Components:**
```javascript
// Registered in wwLayout system
<wwLayout>              // Layout wrapper
<wwLayoutItem>          # Layout grid item
<wwElement>            # Element renderer
<wwSection>            # Section renderer
<wwText>               # Text component
<wwSimpleLayout>       # Basic layout
<wwEditableText>       # Editable text
<wwBackgroundVideo>    # Video background
```

### F. Data & Collections

**Database Tables** (Supabase PostgreSQL):

1. **User & Permission Management**
   - `users` - User accounts & profiles
   - `permissoes` - Permission definitions

2. **CRM & Sales**
   - `clientes` - Client/customer records
   - `contato` - Contact information
   - `empresa` - Company/organization data
   - `oportunidades` - Sales opportunities
   - `funil_vendas` - Sales funnel
   - `etapa_funil` - Funnel stages

3. **Financial Products**
   - `cartao_credito` - Credit card disputes/cases
   - `financiamento_imobiliario` - Mortgage financing
   - `emprestimos_financiamentos` - Loans

4. **Cases & Tasks**
   - `casos` - Legal/financial cases
   - `peticoes` - Generated legal documents
   - `tarefas` - Task management
   - `reunioes` - Meeting tracking
   - `followups` - Follow-up tasks

5. **System**
   - `modulos` - Module definitions/features

### G. Authentication & Authorization

**Service:** `wwLib.wwAuth`

**Features:**
- User authentication via Supabase
- Role-based access control (RBAC)
- User groups & permissions
- Private page protection
- Custom login/logout workflows

**User Roles Architecture:**
```javascript
// Users have roles
// Roles are assigned to user groups
// Pages require specific user groups
// Dynamic permission checking on navigation

wwLib.wwAuth.getUser()
wwLib.wwAuth.getIsAuthenticated()
wwLib.wwAuth.getUserRoles()
wwLib.wwAuth.matchUserGroups(userGroups)
```

### H. Lifecycle Management

**Page Data Loading Flow:**
```
Router Navigation
    ↓
[Route Guard] → Check Auth → Check Permissions
    ↓
Initialize Plugins
    ↓
Fetch Page Data (data/[pageId].json)
    ↓
Fetch Collections Data
    ↓
Execute Workflows (onload)
    ↓
Render Page → User Interaction
    ↓
[Unload Event] → Execute Unload Workflows
```

**Key Hooks:**
- `before-collection-fetch-app` - First load setup
- `before-collection-fetch` - Pre-data initialization
- `onload-app` - Initial app load
- `onload` - Page load
- `page-unload` - Cleanup

### I. Data Initialization

**Location:** `/src/_common/helpers/data/index.js`

**Process:**
1. Reset collections and workflows
2. Initialize authentication
3. Reset variables
4. Execute pre-fetch workflows
5. Fetch non-static collections from APIs
6. Execute post-fetch workflows
7. Register page unload listener

---

## 5. Configuration Files and Their Roles

### vite.config.js
**Purpose:** Build configuration and page generation

**Key Configurations:**
- **Multi-page Input:** 32+ page entry points (HTML files)
- **Template Compilation:** Handlebars template rendering with page metadata
- **Vue Plugin:** Vue 3 SFC support
- **CSS Processing:** SCSS with modern API, Autoprefixer
- **Build Options:**
  - Large chunk size limit (10000KB)
  - Node polyfills for browser (events, stream, string_decoder)
  - Parallel file operations optimization
- **Base URL:** `/` (root)
- **Path Aliases:** `@/` → `./src/`

**Output:** Each page generates:
```
/[page-path]/index.html        # Compiled page with metadata
```

### package.json
**Name:** weweb-front (v4.0.0)

**Scripts:**
- `serve` - Development server (Vite)
- `build` - Production build
- `postbuild` - Post-build collection page generation

**Dependencies:** 40+ packages including Vue ecosystem, Supabase, UI utilities

### tsconfig.app.json
**Purpose:** TypeScript configuration for app code

**Settings:**
- Target: DOM environment
- Path alias: `@/*` → `src/*`
- Strict mode: Disabled (checkJs: false)
- Unused variables/parameters: Reported as warnings
- JSON modules: Allowed
- JavaScript files: Allowed

### tsconfig.node.json
**Purpose:** TypeScript for Node.js scripts (build config)

### .env
**Purpose:** Environment variables for API endpoints

```
VITE_APP_CDN_URL=https://cdn.weweb.io/
VITE_APP_API_URL=https://api.weweb.io/v1
VITE_APP_PLUGINS_URL=https://data.weweb.io
VITE_APP_PREVIEW_URL=weweb-preview.io
```

### plugins-settings.json
**Purpose:** Plugin configuration and runtime settings

**Content:**
- Plugin definitions with IDs and names
- Supabase credentials (API key, project URL)
- Environment-specific configurations
- Real-time table subscriptions
- Authentication plugin settings

**Real-time Tables Subscribed:**
```
casos, cartao_credito, clientes, contato, empresa,
emprestimos_financiamentos, etapa_funil, financiamento_imobiliario,
followups, funil_vendas, modulos, oportunidades, permissoes,
peticoes, reunioes, tarefas, users
```

### postbuild.js
**Purpose:** Post-build script for dynamic collection page generation

**Functionality:**
- Processes collection-based pages (if applicable)
- Generates individual HTML files for collection items
- Replaces metadata placeholders with item-specific data
- Cleans up intermediate build artifacts

---

## 6. Entry Points of the Application

### Primary Entry Point

**File:** `/src/_front/main.js`

**Initialization Sequence:**

```
1. Vue App Creation
   └─ createApp(App)

2. Plugin Installation
   ├─ Pinia (state management)
   ├─ Vuex (legacy state)
   ├─ Vue Cookie (storage)
   ├─ wwElements (component library)
   └─ Global Services

3. Theme Setup
   └─ Apply dark/light theme from localStorage

4. Service Worker Registration
   └─ Register serviceworker.js for PWA

5. Library Initialization
   └─ wwLib.initFront({ store, router })

6. Router Setup
   └─ app.use(router)
   └─ await router.isReady()

7. DOM Mounting
   └─ app.mount('#app')

8. Post-Mount Setup
   └─ Emit 'wwLib:isMounted' event
   └─ Initialize scroll store values
   └─ Setup PWA install prompt
```

### HTML Entry Point

**File:** `/template.html`

**Purpose:** Base HTML template compiled by Handlebars

**Structure:**
```html
<!DOCTYPE html>
<html lang="{{ lang }}">
<head>
    <meta charset="UTF-8">
    <!-- Meta tags: title, description, OG tags, etc. -->
    {{ scripts.head }}
    <!-- Alternate language links -->
</head>
<body>
    <div id="app"></div>
    {{ scripts.body }}
    <script type="module" src="/src/_front/main.js"></script>
</body>
</html>
```

### Page Loading Entry Points

**Location:** `/src/pages/[pageId].js`

**Purpose:** Page-specific initialization code

**Pattern:** Each page file exports:
```javascript
// Called when page is navigated to
// Sets up page-specific data, workflows, etc.
```

### Router Entry Point

**File:** `/src/_front/router.js`

**Configuration:**
- 32 routes with language variants
- Dynamic page loading
- Authentication guards
- Role-based access control

**Page Component:**
```javascript
// All pages rendered by:
import wwPage from './views/wwPage.vue'
```

---

## 7. API Endpoints and Routes

### REST API Plugin Integration

**Endpoint Base:** Configured via plugin settings
- Used for external API calls
- Supports custom HTTP methods
- Integrated with variable/formula system

### Supabase API

**Base URL:** `https://fpqumfqedhcpqusgcuqa.supabase.co`

**Operations:**
- **CRUD operations** on database tables
- **Real-time subscriptions** to table changes
- **Authentication** (sign-up, login, password reset)
- **Streaming** for long-running operations

### Application Routes (Frontend)

**Language Support:** Portuguese (pt) with default language support

**Route Structure:**
```
/                               # Home
/login                          # Authentication routes
/cadastro
/recuperar-senha
/nova-senha
/codigo-verificacao
/cadastrar-empresa

/calculo-revisional             # Financial calculation
/financiamento-imobiliario
/cartao-credito
/revisao-geral
/analise-previa
/analise-previa-calculo
/relatorio-completo-calculo

/crm                            # CRM management
/criar-nova-oportunidade
/cadastrar-cliente
/detalhes_cliente
/cadastrar-lead

/usuarios                       # User management
/cadastrar-usuario
/editar-usuarios
/usuarios-tela-completa
/detalhes-do-usuario
/permissoes-de-usuarios

/contatos                       # Contact management
/cadastrar-contato
/editar-contato
/detalhes-do-contato

/geracao-de-peticoes            # Document generation
/configuracoes-gerais           # Settings
```

### Data Endpoints (Static)

**Pattern:** `GET /data/[pageId].json?wwlang=[lang]&_wwcv=[cacheVersion]`

**Returns:**
```javascript
{
  cacheVersion,
  page,           // Page configuration
  sections,       // Layout sections
  wwObjects,      // UI elements
  collections,    // Data collections
  variables,      // Page variables
  formulas,       // Formula definitions
  workflows,      // Workflow definitions
  libraryComponents
}
```

**Collections Endpoint:** `GET /collections/[collectionId].json`

---

## 8. Database and Data Storage Approach

### Primary Database: Supabase (PostgreSQL)

**Connection Details:**
- **Project URL:** `https://fpqumfqedhcpqusgcuqa.supabase.co`
- **Public API Key:** JWT token (in plugins-settings.json)
- **Authentication:** Row-level security (RLS) policies

### Database Schema (17 Tables)

#### User Management
```sql
users
├── id (PK)
├── email
├── password_hash
├── roles/permissions
└── created_at, updated_at

permissoes
├── id (PK)
├── name
├── description
└── metadata
```

#### CRM Core
```sql
clientes
├── id (PK)
├── nome
├── email
├── telefone
└── empresa_id (FK)

contato
├── id (PK)
├── nome
├── email
├── telefone
├── cliente_id (FK)
└── empresa_id (FK)

empresa
├── id (PK)
├── razao_social
├── cnpj
├── endereco
└── metadata

oportunidades
├── id (PK)
├── titulo
├── cliente_id (FK)
├── etapa_funil_id (FK)
├── valor
└── data_criacao

funil_vendas
├── id (PK)
├── nome
└── descricao

etapa_funil
├── id (PK)
├── nome
├── funil_id (FK)
└── ordem
```

#### Financial Products
```sql
cartao_credito
├── id (PK)
├── cliente_id (FK)
├── banco
├── numero_final
├── saldo_devedor
└── data_analise

financiamento_imobiliario
├── id (PK)
├── cliente_id (FK)
├── imovel
├── valor_financiado
├── taxa
└── condicoes

emprestimos_financiamentos
├── id (PK)
├── cliente_id (FK)
├── tipo
├── valor
└── condicoes
```

#### Cases & Tasks
```sql
casos
├── id (PK)
├── numero_protocolo
├── cliente_id (FK)
├── tipo_produto
├── status
└── data_criacao

peticoes
├── id (PK)
├── caso_id (FK)
├── titulo
├── conteudo
├── data_geracao
└── arquivo_url

tarefas
├── id (PK)
├── titulo
├── responsavel_id (FK)
├── data_vencimento
├── status
└── caso_id (FK)

reunioes
├── id (PK)
├── titulo
├── participantes
├── data_hora
└── notas

followups
├── id (PK)
├── tarefa_id (FK)
├── data_proxima
├── status
└── notas
```

#### System
```sql
modulos
├── id (PK)
├── nome
├── descricao
└── ativo
```

### Real-Time Subscriptions

**Enabled Tables:** 17 tables (all major tables)

```javascript
// Real-time listeners for:
- User logins/logouts
- CRM data updates
- Case status changes
- Task assignments
- Financial data modifications
```

### Local Storage

**Uses:** `window.localStorage`

**Stored Items:**
- `ww-app-theme` - Current theme (dark/light)
- Cookies for session management (via vue-cookie-next)

### Data Caching Strategy

**AsyncCache Implementation:** `/src/helpers/asyncCache.ts`

```typescript
// TTL-based caching (default 1 minute)
// Deduplication of concurrent requests
// Automatic invalidation & clearing
```

### Data Synchronization

**Fetch Pattern:**
```
1. Check localStorage/cache
2. Fetch from API if not cached or expired
3. Update local store
4. Subscribe to real-time updates
5. Update UI reactively
```

---

## 9. Testing Setup

### Current Status: **No Testing Framework Detected**

**Analysis:**
- No `.test.*` or `.spec.*` files found
- No testing libraries in package.json
  - No Jest, Vitest, Cypress, Playwright, etc.
  - No @testing-library dependencies
- No testing configuration files
  - No jest.config.js
  - No vitest.config.ts
  - No cypress.config.ts

### Recommendations for Testing Implementation

**Suggested Setup:**

1. **Unit Testing:** Vitest (Vue 3 compatible)
   ```bash
   npm install -D vitest @vitest/ui
   ```

2. **Component Testing:** Vue Test Utils + Vitest
   ```bash
   npm install -D @vue/test-utils happy-dom
   ```

3. **E2E Testing:** Playwright or Cypress
   ```bash
   npm install -D @playwright/test
   ```

4. **Code Coverage:** Coverage integration
   ```bash
   npm install -D @vitest/coverage-v8
   ```

### Testing Strategy Recommendations

**Unit Tests:**
- wwLib services (wwAuth, wwCollection, wwVariable, etc.)
- Helper utilities (AsyncCache, formatters, etc.)
- Pinia stores
- Vuex store modules

**Component Tests:**
- Element components
- Section components
- Global components (wwLayout, wwElement, etc.)

**Integration Tests:**
- Page navigation flow
- Authentication flow
- Data fetching & synchronization
- Plugin initialization

**E2E Tests:**
- User login/logout
- CRM workflows
- Form submissions
- Real-time updates

---

## 10. Build and Deployment Configuration

### Build System: Vite

**Configuration File:** `/vite.config.js`

### Build Process

#### 1. Development Build
```bash
npm run serve
# Starts Vite dev server on localhost:5173
# Hot module replacement enabled
# Full source maps
```

#### 2. Production Build
```bash
npm run build
# Vite builds all pages
# Output: /dist/ directory

npm run postbuild
# Post-build script processes collection pages
# Generates dynamic collection item pages
# Cleans up intermediate files
```

### Build Output Structure

```
dist/
├── [page-path]/
│   └── index.html           # Compiled page HTML
├── assets/
│   ├── [name].[hash].js     # JavaScript bundles
│   └── [name].[hash].css    # CSS bundles
├── data/
│   └── [pageId].json        # Page data JSON
└── collections/
    └── [collectionId].json  # Collection data JSON
```

### Build Optimization

**Configurations:**
- **Chunk Size Warning Limit:** 10,000KB (increased for large modules)
- **Rollup Options:**
  - Custom warning filter (ignore eval warnings)
  - Parallel file operations: 900 max
  - Max parallel file operations for optimization

### Multi-Page Entry Points

**Page Configuration:** 32 pages defined in vite.config.js

**Each Page Includes:**
- Language (pt - Portuguese)
- Cache version (25)
- Meta tags (title, description, OG tags, robots)
- Alternate language links (hreflang)
- Base tag configuration
- Custom head/body scripts

### Template Compilation

**Engine:** Handlebars

**Template:** `/template.html`

**Variables Passed:**
```javascript
{
  title,
  lang,
  meta: [
    { name: 'description', content: '...' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' }
  ],
  scripts: { head: '', body: '' },
  alternateLinks,
  cacheVersion,
  baseTag
}
```

### Environment Configuration

**Environment Variables:** `/src/_front/main.js`

Accessed via:
- `window.wwg_designInfo` - Design/page configuration
- `window.wwg_cacheVersion` - Cache busting
- `window.wwg_pluginsSettings` - Plugin configuration
- `window.wwg_disableManifest` - PWA manifest control

### Deployment Considerations

#### Static Site Hosting
- Can be deployed to any static hosting (Netlify, Vercel, GitHub Pages)
- Generated HTML files are static
- JavaScript bundles are versioned with hashes

#### Environment-Specific Config
```javascript
// Supabase credentials per environment
environments: {
  production: {
    apiKey: '...',
    projectUrl: 'https://...'
  }
}
```

#### Service Worker
- Registered for PWA support
- URL: `/serviceworker.js`
- Cache version parameter for updates

#### Cache Strategy
```javascript
// Versioned assets
[name].[hash].js    // Content hash - changes on code update
[name].[hash].css   // Content hash - changes on style update

// Busting strategy
?_wwcv=25           // Cache version parameter
```

### Build Performance

**Optimizations:**
- Parallel file operations (max 900)
- Vendor code splitting (via Rollup)
- Tree-shaking (unused code removal)
- CSS extraction & minification
- JavaScript minification

### Deployment Checklist

```
Before Deployment:
☐ Run `npm run build`
☐ Verify dist/ directory structure
☐ Check cache version is incremented
☐ Validate all pages generate correctly
☐ Test real-time subscriptions work
☐ Verify Supabase credentials for environment
☐ Check CDN configuration

Deployment:
☐ Upload dist/ to hosting
☐ Configure CORS for APIs
☐ Update DNS if needed
☐ Verify serviceworker.js is accessible
☐ Test all pages load
☐ Validate authentication flow
☐ Check real-time updates

Post-Deployment:
☐ Monitor error logs
☐ Verify performance metrics
☐ Test on multiple devices
☐ Check analytics tracking
```

---

## Architecture Diagrams

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Browser                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │           Vue 3 Application                       │  │
│  │  ┌──────────────────────────────────────────┐    │  │
│  │  │       Pages / Views / Components         │    │  │
│  │  │  (31 Elements + 1 Section + Layouts)     │    │  │
│  │  └──────────────────────────────────────────┘    │  │
│  │                    ↓                             │  │
│  │  ┌──────────────────────────────────────────┐    │  │
│  │  │         Vue Router                        │    │  │
│  │  │  (32 Routes, Language Variants)           │    │  │
│  │  └──────────────────────────────────────────┘    │  │
│  │                    ↓                             │  │
│  │  ┌──────────────────────────────────────────┐    │  │
│  │  │    wwLib Central Service Hub             │    │  │
│  │  │  • Auth • Collection • Element           │    │  │
│  │  │  • Page • Language • Variable            │    │  │
│  │  │  • Workflow • Plugin • Formula           │    │  │
│  │  └──────────────────────────────────────────┘    │  │
│  │                    ↓                             │  │
│  │  ┌──────────────────────────────────────────┐    │  │
│  │  │ State Management                         │    │  │
│  │  │  • Vuex (websiteData, front, data)      │    │  │
│  │  │  • Pinia (modern stores)                 │    │  │
│  │  └──────────────────────────────────────────┘    │  │
│  │                    ↓                             │  │
│  │  ┌──────────────────────────────────────────┐    │  │
│  │  │        Plugins                            │    │  │
│  │  │  • Supabase • REST API                    │    │  │
│  │  │  • Auth • JavaScript • Date               │    │  │
│  │  └──────────────────────────────────────────┘    │  │
│  └──────────────────────────────────────────────────┘  │
│                      ↓↓↓                              │
└──────────────────────────────────────────────────────────┘
         │                              │
         ↓                              ↓
   ┌──────────────┐         ┌─────────────────────┐
   │  APIs        │         │  Supabase           │
   │              │         │  (PostgreSQL DB)    │
   │ • REST API   │         │                     │
   │ • Real-time  │         │ • 17 Tables         │
   │   Updates    │         │ • Real-time Subs    │
   └──────────────┘         │ • Auth              │
                            └─────────────────────┘
```

### Data Flow Architecture

```
User Interaction
    ↓
Component Event
    ↓
wwLib Service Call
    ↓
Supabase API / Plugin
    ↓
Database Operation / External API
    ↓
Real-time Subscription Update (if applicable)
    ↓
State Update (Vuex/Pinia)
    ↓
Reactive Component Re-render
    ↓
DOM Update
```

### Page Loading Lifecycle

```
Navigation Initiated
    ↓
[Route Guard Check]
  ├─ Authentication Check
  ├─ Authorization Check
  └─ Redirect if failed
    ↓
Fetch Page Data (data/[pageId].json)
    ↓
Initialize Plugins
    ↓
Fetch Collections (database tables)
    ↓
Execute onload Workflows
    ↓
Render Page Components
    ↓
Mount Components
    ↓
User Can Interact
    ↓
[Page Unload]
    ↓
Execute page-unload Workflows
    ↓
Cleanup
```

---

## Summary Table

| Aspect | Details |
|--------|---------|
| **Project Type** | Multi-page Web Application (SPA/MPA Hybrid) |
| **Framework** | Vue 3.5.13 |
| **Build Tool** | Vite 6.3.5 |
| **State Management** | Vuex 4.1.0 + Pinia 3.0.2 |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | Supabase Auth |
| **API Layer** | Axios + REST API Plugin + Supabase SDK |
| **Rich Text Editor** | TipTap 2.8.0 |
| **Pages** | 32 routes (7 categories) |
| **Components** | 31 elements + 1 section |
| **Database Tables** | 17 tables (CRM, Financial, Users, Tasks) |
| **Plugins** | 5 (Supabase, Auth, REST API, JavaScript, Date) |
| **Languages** | Portuguese (pt) with internationalization support |
| **Testing** | No testing framework (recommended: Vitest) |
| **Deployment** | Static site hosting (Netlify, Vercel, etc.) |

---

**Document Generated:** November 12, 2025
**Analysis Level:** Very Thorough
