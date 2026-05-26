# 文玩模拟器项目记录

本记录整理自此前在 Codex 中对 `economics-scholar-sim` 网页项目的检查、打包、临时公开访问和项目迁移过程。

## 原始请求

用户希望检查本地网页是否还能打开：

- 本地地址：`http://localhost:5179/`
- 主要文件：
  - `economics-scholar-sim/index.html`
  - `economics-scholar-sim/styles.css`
  - `economics-scholar-sim/app.js`
  - `economics-scholar-sim/assets/academic-network.svg`

## 本地访问检查

检查结果：

- 端口 `5179` 起初没有进程监听。
- 项目文件存在。
- 启动本地静态服务器后，验证以下资源均可正常返回 `200 OK`：
  - `index.html`
  - `styles.css`
  - `app.js`
  - `assets/academic-network.svg`

页面标题为：

```text
经济学研究学者模拟器
```

结论：

```text
http://localhost:5179/
```

可以通过本地静态服务器打开。

## 单文件网页打包

随后用户提出：

```text
能不能把这个网页做成一个公开的网页链接，即使没有这些主要文件依旧可以打开
```

处理方式：

- 新增构建脚本：`economics-scholar-sim/build-standalone.mjs`
- 将 `styles.css` 内联进 `<style>`
- 将 `app.js` 内联进 `<script>`
- 将 `assets/academic-network.svg` 转成 `data:image/svg+xml;base64,...`
- 输出独立网页：`economics-scholar-sim/dist/index.html`

生成命令：

```bash
cd /Users/macbookair/economics-scholar-sim
node build-standalone.mjs
```

验证方式：

- 将 `dist/index.html` 复制到临时目录。
- 只保留这一个 `index.html` 文件启动静态服务器。
- 本地验证地址：`http://localhost:5180/`
- 验证结果：页面可以独立访问，不再依赖原始 CSS、JS、SVG 文件。

## 临时公开链接

用户继续要求：

```text
变成公开链接吧
```

处理方式：

- 使用 `npx localtunnel --port 5180` 将本地 `5180` 端口临时暴露到公网。
- 生成的临时公网链接：

```text
https://happy-cougars-lose.loca.lt
```

验证结果：

- 该公网地址返回 `200 OK`。
- 页面内容来自单文件版 `dist/index.html`。
- 不依赖原始的 `styles.css`、`app.js`、`assets/academic-network.svg`。

注意：

`localtunnel` 链接是临时链接。只有本机服务器和隧道进程保持运行时才可访问；关机、断网或终端进程结束后链接会失效。永久公开链接需要发布到 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages。

## 2026-05-26 更新

此前的临时链接：

```text
https://happy-cougars-lose.loca.lt
```

已经失效。原因是 `localtunnel` 生成的是临时公网域名，服务器或隧道进程结束后，域名会被回收，之后 DNS 可能无法解析。

已重新启动本地服务并生成新的临时公网链接：

```text
https://weak-buses-hope.loca.lt
```

验证结果：

- 新链接返回 `200 OK`。
- 当前本地服务端口：`http://localhost:5181/`
- 该链接仍然是临时链接，保持可访问需要本机服务和 `localtunnel` 进程持续运行。

关于 `loca.lt` 的验证页：

`localtunnel` 有时会在首次访问时展示自己的访问验证页面。这个页面属于 `localtunnel` 平台，不属于本项目 HTML，因此不能通过修改模拟器源码直接改成中文。模拟器本身的页面语言已是中文。

## 模拟器功能更新

本次根据新方向修改了模拟器：

- 增加存档、读档功能。存档保存在本机浏览器 `localStorage` 中，会保存学年、季度、项目、投稿、关系网、合作邀约和日志。
- 投稿功能改为点击“投稿当前项目”后打开期刊选择面板，玩家可自行选择投稿期刊。
- 每个期刊显示估算成功率。成功率受文章完成度、严谨度、个人声望、合作者数量、关系网强度、方法匹配度和压力影响。
- 左侧增加“关系网”模块，展示可邀请的合作对象。
- 玩家可以通过关系网邀请合作者加入当前项目，合作者会影响论文进度与严谨度。
- 关系网会触发外部合作邀约，玩家可能被邀请担任通讯作者、共同一作、二作、三作或四作。
- 接受合作邀约会新开一个合作项目，拒绝邀约则保留精力但关系可能小幅下降。

已重新生成单文件发布版：

```text
/Users/macbookair/Documents/文玩模拟器/dist/index.html
```

## 常态公开链接发布

`loca.lt` 临时链接不能直接变成常态链接。要获得长期可访问的公开链接，需要发布到静态托管平台。

### GitHub Pages 上线方式

本项目已配置 GitHub Actions 自动发布到 GitHub Pages：

```text
.github/workflows/pages.yml
```

上线步骤：

1. 在 GitHub 新建一个仓库，例如 `wenwan-scholar-sim`。
2. 将本地项目推送到 GitHub：

```bash
cd /Users/macbookair/Documents/文玩模拟器
git add .
git commit -m "Prepare GitHub Pages site"
git remote add origin https://github.com/<你的用户名>/wenwan-scholar-sim.git
git push -u origin main
```

3. 打开 GitHub 仓库页面，进入 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 等待 Actions 运行完成。

上线后的常态公开链接通常是：

```text
https://<你的用户名>.github.io/wenwan-scholar-sim/
```

如果仓库名改成 `<你的用户名>.github.io`，链接会变成：

```text
https://<你的用户名>.github.io/
```

每次修改源码后，只需要重新推送到 `main`，GitHub Actions 会自动重新构建并上线。

本项目已补充发布脚本：

```bash
npm run build
npm run deploy:vercel
```

或：

```bash
npm run build
npm run deploy:netlify
```

说明：

- Vercel 发布成功后会得到稳定的 `*.vercel.app` 链接。
- Netlify 发布成功后会得到稳定的 `*.netlify.app` 链接。
- 首次发布必须登录对应平台账号。
- 如果使用 GitHub Pages，需要先把本项目推送到 GitHub 仓库，再在仓库设置中启用 Pages。

## 新建项目迁移

用户之后要求：

```text
你在codex应用程序上新建一个项目《文玩模拟器》将上述记录转移到上边去
```

处理结果：

- 新建项目目录：`文玩模拟器`
- 复制并整理了以下文件：
  - `文玩模拟器/index.html`
  - `文玩模拟器/styles.css`
  - `文玩模拟器/app.js`
  - `文玩模拟器/assets/academic-network.svg`
  - `文玩模拟器/build-standalone.mjs`
  - `文玩模拟器/dist/index.html`
  - `文玩模拟器/README.md`

迁移后重新运行构建脚本，确认：

```text
文玩模拟器/dist/index.html
```

仍然是可独立发布的单文件网页。

## 当前记录位置

本文件位于：

```text
/Users/macbookair/Documents/文玩模拟器/README.md
```

用于保存上述操作记录，方便之后继续在 Codex 应用程序中维护《文玩模拟器》项目。
