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