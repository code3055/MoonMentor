# MoonMentor

MoonMentor 是一个给 MoonBit 初学者使用的学习记录工具。用户把最近做过的练习填进去，程序会估计各知识点的熟练程度，并安排下一段练习。

它只处理本地数据，不需要账号、网络或模型服务。推荐结果来自几条明确的规则：答题结果会改变掌握度；提示和用时会影响判断；前置知识未达到要求时，后面的内容暂不安排；一道题可以同时练习多个知识点。

## 运行命令

环境要求：MoonBit CLI，`moonc` 不低于 `0.10.14`。

```powershell
Set-Location E:\moonbit
moon fmt --check
moon check
moon build
moon test
moon run cmd/moonmentor
```

运行仓库中的完整示例：

```powershell
.\scripts\moonmentor.ps1 -Format text
.\scripts\moonmentor.ps1 -Format json
```

## 记录格式

学习记录文件 `examples/learner.attempts` 每行一条：

```text
知识点|是否答对(1/0)|是否看提示(1/0)|用时毫秒|错误标签（可选）
```

例如：

```text
syntax|1|0|1200
option|0|1|42000|none
```

课程和练习题分别见：

- `examples/moonbit-basics.curriculum`
- `examples/moonbit-basics.exercises`

练习题可以覆盖多个知识点，格式为：

```text
exercise|题目ID|标题|知识点1,知识点2|难度|分钟|题目|提示
```

## 网页界面

项目带有一个本地网页，可以查看掌握情况、错误提醒和学习计划：

```powershell
.\scripts\serve-web.ps1
```

打开 <http://localhost:4173>。页面中的计算仍由 MoonBit bridge 完成，网页只负责输入和展示。

## 代码结构

- `moonmentor/model.mbt`：课程、练习、学习记录和报告结构。
- `moonmentor/parser.mbt`：课程、练习题和学习记录解析。
- `moonmentor/engine.mbt`：掌握度更新、错误诊断和时间预算规划。
- `moonmentor/report.mbt`：文本和 JSON 输出。
- `cmd/moonmentor`：命令行入口。
- `web/`：本地网页和 MoonBit JS bridge。

## 验证

当前测试覆盖答对/答错、前置知识、多知识点练习、错误标签、时间预算和输入错误：

```text
Total tests: 8, passed: 8, failed: 0.
```

GitHub Actions 会运行格式检查、检查、构建、JS bridge 构建和测试。

## 发布说明

发布前需要把 `moon.mod` 里的仓库地址和维护者名称换成实际公开仓库，再执行 `moon publish`。本地工作区当前没有上传 GitHub，也没有伪造公开仓库地址或提交数量。

项目使用 MIT License，见 [LICENSE](LICENSE)。
