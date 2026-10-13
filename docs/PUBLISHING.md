# 发布步骤

1. 在 GitHub 创建公开仓库，把 `moon.mod` 中的 `name` 和 `repository` 改成实际信息。
2. 在本地完成检查：

   ```powershell
   moon fmt --check
   moon check
   moon build
   moon build --target js --release web/bridge
   moon test
   ```

3. 保留真实的功能提交记录，再推送到 GitHub。
4. 登录 Mooncakes 并发布：

   ```powershell
   moon login
   moon publish
   ```

5. 在一个新的 MoonBit 项目中执行 `moon add <实际模块名>`，验证库接口。

当前工作区没有执行上传和发布，也没有填写尚不存在的仓库链接。
