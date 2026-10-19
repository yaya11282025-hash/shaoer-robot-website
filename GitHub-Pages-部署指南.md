# GitHub Pages 部署指南

## 🚀 快速部署到GitHub Pages

### 第一步：准备工作

1. **注册GitHub账号**（如果还没有）
   - 访问：https://github.com
   - 点击"Sign up"注册
   - 验证邮箱

2. **安装Git**（如果还没有）
   - 访问：https://git-scm.com/downloads
   - 下载并安装Git

---

### 第二步：创建GitHub仓库

1. 登录GitHub
2. 点击右上角的"+"→"New repository"
3. 填写信息：
   - Repository name: `shaoer-robot-website`（仓库名称）
   - Description: `哨儿机器人官方网站`
   - 选择 **Public**（公开）
   - **不要**勾选"Add a README file"
4. 点击"Create repository"

---

### 第三步：上传网站文件

**在你的网站文件夹中打开PowerShell，依次执行以下命令：**

```powershell
# 1. 初始化Git仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交文件
git commit -m "首次提交：哨儿机器人官方网站"

# 4. 关联GitHub仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/shaoer-robot-website.git

# 5. 推送到GitHub
git branch -M main
git push -u origin main
```

**如果是第一次使用Git，可能需要配置：**
```powershell
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

### 第四步：开启GitHub Pages

1. 在GitHub仓库页面，点击"Settings"（设置）
2. 在左侧菜单找到"Pages"
3. 在"Source"下选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击"Save"
5. 等待1-2分钟，页面会显示：
   ```
   Your site is published at https://YOUR_USERNAME.github.io/shaoer-robot-website/
   ```

---

### 第五步：访问网站

你的网站地址：
```
https://YOUR_USERNAME.github.io/shaoer-robot-website/
```

把这个网址分享给任何人，全世界都能访问！🎉

---

## 📝 方便复制的完整命令

打开PowerShell，复制粘贴以下命令（记得替换YOUR_USERNAME）：

```powershell
cd "D:\桌面\自主实习-提交材料清单\company-website"

git init
git add .
git commit -m "首次提交：哨儿机器人官方网站"
git remote add origin https://github.com/YOUR_USERNAME/shaoer-robot-website.git
git branch -M main
git push -u origin main
```

---

## 🔄 更新网站内容

以后如果修改了网站，重新上传：

```powershell
git add .
git commit -m "更新网站内容"
git push
```

等待1-2分钟，网站自动更新！

---

## ❓ 常见问题

**Q: 推送时要求输入用户名密码怎么办？**
A: GitHub现在使用Personal Access Token（个人访问令牌）：
1. 访问：https://github.com/settings/tokens
2. 点击"Generate new token (classic)"
3. 勾选"repo"权限
4. 生成后复制token
5. 推送时用token作为密码

**Q: 网站更新了但没看到变化？**
A: 
1. 清除浏览器缓存（Ctrl + F5）
2. 等待2-5分钟让GitHub Pages重新部署

**Q: 想用自己的域名？**
A:
1. 购买域名（如：www.shaoer-robot.com）
2. 在GitHub Pages设置中添加"Custom domain"
3. 在域名服务商添加DNS记录指向GitHub

---

## 🎯 成功标志

当你看到：
- ✅ GitHub仓库有你的文件
- ✅ Settings → Pages 显示绿色"Your site is published"
- ✅ 访问网址能看到网站

恭喜！网站已成功部署到互联网！🎉

---

**有任何问题随时问我！** 😊
