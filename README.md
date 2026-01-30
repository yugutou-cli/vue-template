# Vue Template

基于 Vue 3 的前端项目模板，使用 TypeScript、Vite、Pinia 和文件-based 路由。

## 技术栈

- **框架**: Vue 3.5.26
- **构建工具**: Vite 7.2.5 (使用 rolldown-vite)
- **语言**: TypeScript 5.9.3
- **状态管理**: Pinia 3.0.4
- **路由**: Vue Router (使用 unplugin-vue-router 实现文件-based 路由)
- **工具库**: @vueuse/core 14.1.0
- **包管理器**: pnpm 10.20.0

## 目录结构

```
vue-template/
├── public/               # 静态资源目录
├── src/                  # 源代码目录
│   ├── assets/           # 资源文件目录
│   ├── components/       # 组件目录
│   ├── pages/            # 页面目录（文件-based 路由）
│   │   ├── index.vue     # 首页
│   │   └── about.vue     # 关于页面
│   ├── stores/           # Pinia 状态管理目录
│   │   └── counter.ts    # 计数器示例 store
│   ├── App.vue           # 应用根组件
│   ├── main.ts           # 应用入口文件
│   ├── style.css         # 全局样式
│   └── typed-router.d.ts # 路由类型定义文件（自动生成）
├── index.html            # HTML 入口文件
├── package.json          # 项目配置和依赖管理
├── tsconfig.json         # TypeScript 配置
├── tsconfig.node.json    # Node.js 环境 TypeScript 配置
└── vite.config.ts        # Vite 配置
```

## 路由系统

本项目使用 **unplugin-vue-router** 实现文件-based 路由，路由规则如下：

- 路由文件存放在 `src/pages` 目录下
- 文件路径自动映射为路由路径
- `index.vue` 文件对应根路径 `/`
- 例如：`src/pages/about.vue` 对应路由 `/about`

## 安装与使用

### 安装依赖

```bash
pnpm install
```

### 开发环境

```bash
pnpm run dev
```

开发服务器默认运行在 `http://localhost:5173/`

### 构建生产版本

```bash
pnpm run build
```

构建产物会输出到 `dist` 目录

### 预览生产构建

```bash
pnpm run preview
```

## 脚本命令

| 命令 | 描述 |
|------|------|
| `pnpm run dev` | 启动开发服务器 |
| `pnpm run build` | 构建生产版本 |
| `pnpm run preview` | 预览生产构建 |
| `pnpm run type-check` | 运行 TypeScript 类型检查 |

## 代码规范

- 使用 TypeScript 严格模式
- 遵循 Vue 3 Composition API 最佳实践
- 使用 `<script setup>` 语法
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case 或 index.vue

## 扩展指南

### 添加新页面

在 `src/pages` 目录下创建新的 `.vue` 文件，路由会自动生成：

```bash
# 创建新页面
touch src/pages/new-page.vue
```

### 添加新的 Pinia Store

在 `src/stores` 目录下创建新的 store 文件：

```bash
# 创建新的 store
touch src/stores/new-store.ts
```

### 添加新组件

在 `src/components` 目录下创建新的组件文件：

```bash
# 创建新组件
touch src/components/MyComponent.vue
```

## 许可证

ISC