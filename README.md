_静态网页项目所需要的的大致结构已经用空文件勾勒
建议先完善网页首页、用户主页模板和帖子详情模板等静态网页项目后再往动态网页的目标修改
这边建议先构造一两个虚拟的用户与帖子完善静态网页后再学习动态网页的开发_

### 第一阶段：静态“论坛”
目标：利用**基础前端**技术构建出网站首页，用户主页模板与帖子详情模板，然后构造两个**虚拟用户**（如张三、李四）和几个**虚拟帖子**

### 第二阶段：修改为真正的论坛
目标：利用 $\text{php}$ 和 $\text{SQL}$ 完善论坛的动态功能

### 第三阶段：部署服务器与域名
目标：将网站部署到Web

---

_PS：以下是二阶段的框架_


```
BDSMersNest/
├── index.php                  # 论坛首页 - 显示帖子列表、最新动态
├── login.php                  # 用户登录页面 - 登录表单、认证处理
├── register.php              # 用户注册页面 - 注册表单、用户创建
├── post.php                  # 帖子详情页 - 显示单个帖子内容和回复
├── profile.php               # 用户资料页 - 显示和编辑用户信息
├── admin/                    # 后台管理目录 - 管理员功能页面
│   ├── index.php             # 管理后台首页 - 数据统计、快捷操作
│   ├── users.php             # 用户管理页面 - 用户列表、封禁操作
│   └── posts.php             # 帖子管理页面 - 帖子审核、删除管理
│
├── includes/                 # 包含文件目录 - 被其他页面引用的公共文件
│   ├── config.php            # 数据库配置 - 数据库连接参数、常量定义
│   ├── header.php            # 页头文件 - 导航栏、CSS引入
│   ├── footer.php            # 页脚文件 - 版权信息、JS引入
│   ├── auth.php              # 认证函数 - 登录状态检查、权限验证
│   ├── database.php          # 数据库操作 - 数据库连接、查询函数
│   └── functions.php         # 通用函数 - 工具函数、字符串处理
│
├── classes/                  # 类文件目录 - PHP面向对象类定义
│   ├── User.php              # 用户类 - 用户数据模型和相关方法
│   ├── Post.php              # 帖子类 - 帖子数据模型和相关方法
│   ├── Comment.php           # 评论类 - 评论数据模型和相关方法
│   └── Database.php          # 数据库类 - 数据库连接和基础操作
│
├── api/                      # API接口目录 - 为前端提供数据接口
│   ├── users.php             # 用户API - 用户相关数据接口
│   ├── posts.php             # 帖子API - 帖子相关数据接口
│   └── comments.php          # 评论API - 评论相关数据接口
│
├── assets/                   # 静态资源目录 - CSS、JS、图片等资源
│   ├── css/                  # 样式文件目录
│   │   ├── bootstrap.min.css # Bootstrap框架样式 - 响应式UI框架
│   │   └── custom.css        # 自定义样式 - 覆盖Bootstrap的定制样式
│   ├── js/                   # JavaScript文件目录
│   │   ├── bootstrap.min.js  # Bootstrap框架JS - 交互组件功能
│   │   ├── jquery.min.js     # jQuery库 - DOM操作和Ajax
│   │   └── app.js            # 应用主JS - 自定义交互逻辑
│   └── images/               # 图片资源目录
│       ├── avatars/          # 用户头像目录 - 用户上传的头像图片
│       └── icons/            # 图标目录 - 功能图标、表情图标
│
├── uploads/                  # 用户上传文件目录 - 用户生成的内容
│   ├── avatars/              # 用户头像目录 - 用户上传的个人头像
│   ├── attachments/          # 附件目录 - 帖子中的图片、文件附件
│   └── temp/                 # 临时文件目录 - 上传过程中的临时文件
│
└── vendor/                   # 第三方依赖目录 - Composer管理的PHP包
    ├── autoload.php          # 自动加载文件 - Composer自动加载配置
    └── composer/             # Composer目录 - 依赖包管理文件
```

# Copilot 使用指引 — bdsmersnest

以下说明帮助 AI 编码助手快速在本仓库中变得高效并给出安全、可审查的改动。

## 大局与目标
- 这是一个以静态前端为主的“论坛”站点骨架（见 `README.md`），未来可能迁移为 PHP+SQL 的动态站点。
- 当前目录重点：`index.html`、`login/`、`post/`、`register/`、`user/`（页面）；静态资源集中在 `css/`, `js/`, `lib/`, `images/`。

## 快速事实（无需猜测）
- 无构建系统：可以直接在浏览器打开 `index.html` 预览；也可用简单静态服务器（示例见下）。
- 若需要本地 PHP 动态测试，可在仓库根运行内建 PHP 服务器（示例见下）。

示例：在 PowerShell 中启动静态预览
```powershell
python -m http.server 8000
# 或者使用 Node 的 serve：npx serve .
```
示例：本地 PHP 测试（若安装 PHP）
```powershell
php -S localhost:8000
```

## 关键区域与模式（从代码中可直接观察）
- 全局样式与重置：`css/reset.css`, `css/style.css`, 响应式规则在 `css/responsive.css`。
- 页面专用样式：`css/home.css` —— 观察到多处页面特定规则（例如 `#post-list`, `#welcome`, `.leftSidebar`），适合保留为页面级样式。
- JS 与库：`js/main.js`, `lib/jquery.js`, `lib/chart.js`。

### 在 `css/home.css` 中可发现的模式（实际例子）
- 混合使用 ID 与 class 来做布局：如 `#body`, `#left`, `#right` 与 `.main-container`。建议：避免用 ID 做样式绑定，改为 class（可复用、可覆盖）。
- 固定/极端高度使用较多：`height: 100em`, `height: 150vh` 等，会导致响应式问题和滚动问题。
- 字体族、颜色等在多个选择器重复声明（例如 `.main-body` 中的 font-family），建议集中到 `body` 或 `:root`。
- 交互样式示例：`.leftSidebar` 使用 hover 展开（60px → 240px），是可复用的组件行为，建议用 CSS 变量控制宽度。

## 明确的改进与重构建议（可直接执行的步骤）
1. 把 CSS 拆成明确分层：
   - `css/variables.css` 或在 `css/style.css` 的 `:root` 中放置颜色/间距/字体变量（例如 `--color-bg`, `--sidebar-width`）。
   - `css/base.css`（reset + body、typography）、`css/layout.css`（grid、container、sidebar）、`css/components.css`（nav、post-card、notice）、`css/pages/home.css`（页面专用）。
2. 替换 ID 布局为 class：把 `#body`, `#left`, `#right` 改为 `.layout__body`, `.layout__main`, `.layout__aside`，保持语义清晰。
3. 移除或替换绝对/大 vh 值：使用 max-height / min-height 与 overflow 管理滚动区域；或改为弹性布局（flex / grid）并使用 rem 单位。
4. 聚合重复声明：将 `.main-body` 的 font-family、font-size、line-height 移到 `body`。
5. 抽取可配置变量：把颜色 `#ebecde`, `#ffffef`, `#C6CCFF` 提为 `--bg-panel`, `--bg-main`, `--accent`。
6. 响应式：在 `css/responsive.css` 中定义断点（示例： `@media (max-width: 900px)` 用于侧栏折叠），并避免在页面 CSS 中散落媒体查询。

## 代码审查注意点（给 AI 的指令）
- 优先做小、可回滚的改动（一次只改 1–3 行的移动或提取），并在 PR 描述中列出影响的页面与选择器。
- 任何替换 ID -> class 的更改，都应同时更新关联 HTML（例如 `index.html`、`login/index.html` 等）并在 PR 中指明需要人工视觉核对。
- 视觉改动需附带“如何本地验证”的步骤（例如打开 `index.html`，或启动 `python -m http.server 8000` 并在浏览器比较变更前后）。

## 参考文件（优先读取）
- `css/home.css` — 页面专用样式（已存在较多位置性/高度样式）。
- `css/style.css`, `css/reset.css`, `css/responsive.css` — 放置全局与响应式样式。
- `README.md` — 含项目分阶段计划和预期的 PHP 迁移说明。
- HTML 模板：根目录以及 `login/`, `register/`, `post/`, `user/` 下的 `index.html`/`temp.html`。

## 小结与下一步建议
- 优先把可复用变量和基础排版抽离到 `style.css` 的 `:root` 与 `body`，把页面专用规则保留在 `home.css`。
- 我可以基于以上建议帮你做一次小规模、最低风险的重构（例如：抽取 3 个颜色变量、把 `body` 的字体集中、替换 `.main-body` 的 font 声明），你愿意我现在执行并生成 PR 示例吗？

---
如果有特定的视觉参考或你担心的样式区块（例如 `.leftSidebar` 或 `#post-list`），告诉我优先级，我会先处理那些区域并附上视觉校验步骤。
