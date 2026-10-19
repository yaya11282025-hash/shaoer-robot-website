# 公司网站项目

这是一个现代化、响应式的公司网站，适用于展示企业形象、服务项目和联系方式。

## 项目结构

```
company-website/
├── index.html          # 首页
├── about.html          # 关于我们
├── services.html       # 服务项目
├── contact.html        # 联系我们
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript交互
├── images/             # 图片资源文件夹
└── README.md           # 项目说明
```

## 功能特点

### 1. 响应式设计
- 完美适配桌面、平板和手机设备
- 移动端汉堡菜单导航
- 弹性网格布局

### 2. 页面内容
- **首页**：展示公司核心优势和服务亮点
- **关于我们**：公司简介、核心价值观、发展历程、团队介绍
- **服务项目**：详细的服务内容、服务流程、选择理由
- **联系我们**：联系方式、在线留言表单、地图位置

### 3. 交互功能
- 平滑滚动效果
- 页面元素淡入动画
- 表单验证（姓名、电话、邮箱）
- 移动端导航菜单

### 4. 安全特性
- 表单输入验证
- XSS防护（可进一步添加）
- HTTPS推荐使用

## 使用说明

### 1. 直接使用
双击 `index.html` 文件即可在浏览器中打开网站。

### 2. 本地服务器（推荐）
使用任何HTTP服务器运行，例如：

**Python 3:**
```bash
cd company-website
python -m http.server 8000
```

**Node.js (http-server):**
```bash
cd company-website
npx http-server -p 8000
```

然后在浏览器访问 `http://localhost:8000`

### 3. 部署到生产环境
1. 将整个 `company-website` 文件夹上传到Web服务器
2. 配置Web服务器（如Nginx、Apache）指向该目录
3. 配置HTTPS证书（推荐使用Let's Encrypt）
4. 设置适当的缓存策略

## 自定义修改

### 修改公司信息
1. 在各个HTML文件中搜索"公司名称"并替换为实际公司名称
2. 修改联系方式（电话、邮箱、地址）
3. 更新服务项目内容

### 修改样式
编辑 `css/style.css` 文件中的CSS变量：
```css
:root {
    --primary-color: #2563eb;      /* 主色调 */
    --secondary-color: #1e40af;    /* 辅助色 */
    --accent-color: #3b82f6;       /* 强调色 */
    /* ... 其他颜色变量 */
}
```

### 添加图片
1. 将图片文件放入 `images/` 文件夹
2. 在HTML中使用相对路径引用：
```html
<img src="images/your-image.jpg" alt="描述">
```

### 表单功能
当前表单是前端验证，实际使用需要：
1. 创建后端API接口接收表单数据
2. 修改 `js/main.js` 中的表单提交代码
3. 实现数据存储（数据库或邮件通知）

示例代码已在 `main.js` 中注释提供。

### 添加地图
在 `contact.html` 的地图区域可嵌入：
- **百度地图**：https://lbsyun.baidu.com/
- **高德地图**：https://lbs.amap.com/

## 浏览器兼容性
- Chrome（推荐）
- Firefox
- Safari
- Edge
- IE 11+（部分CSS3特性可能不支持）

## 技术栈
- HTML5
- CSS3（Flexbox + Grid）
- JavaScript (ES6+)
- 响应式设计
- 现代动画效果

## 性能优化建议
1. 压缩CSS和JavaScript文件
2. 优化图片（使用WebP格式、CDN加速）
3. 启用Gzip压缩
4. 配置浏览器缓存
5. 使用CDN加载字体和库

## 安全建议
1. 部署时启用HTTPS
2. 后端实现CSRF保护
3. 对用户输入进行服务器端验证和过滤
4. 实现速率限制防止表单滥用
5. 定期更新依赖和检查漏洞

## 维护工作内容
作为网站维护人员，日常工作包括：
1. 内容更新（新闻、产品信息）
2. 性能监控和优化
3. 安全漏洞扫描和修复
4. 用户反馈处理
5. SEO优化
6. 备份和恢复

## 许可证
此项目可自由使用和修改。

## 联系方式
如有问题，请联系技术支持。

---
**版本**: 1.0.0  
**最后更新**: 2026年9月
