import { analyze } from "./bridge.js";

const curriculum = `syntax|语法基础|1||写出一个接收 Int 并返回 Int 的函数。
option|Option 与空值|2|syntax|把可能缺失的配置值安全地转换成 Int。
error|错误处理|3|option|为一个可能失败的解析函数设计 raise/catch 调用。
pattern|模式匹配|3|syntax|用 match 处理一个包含 Some 和 None 的值。
collection|集合变换|3|pattern|用 map/filter 完成一次不可变数据转换。
testing|测试设计|4|error|为解析失败和成功各写一个最小测试。
async|异步边界|5|error|说明异步函数中错误传播和取消的边界。`;

const exercises = `exercise|syntax-1|函数签名识别|syntax|1|3|给出一个接收 Int 并返回 Int 的函数签名。|先写参数类型，再写返回类型。
exercise|option-1|Option 分支|syntax,option|2|4|把 Some(3) 和 None 映射成可打印文本。|检查两个构造器分支。
exercise|error-1|解析错误传播|option,error|3|5|设计一个会返回错误的数字解析器。|区分错误产生点和错误处理点。
exercise|pattern-1|模式匹配覆盖|syntax,pattern|3|4|为一个代数数据类型写完整 match。|逐个列出构造器。
exercise|testing-1|边界测试|error,testing|4|5|为成功和失败路径各写一个测试。|先列出最小输入。
exercise|async-1|异步取消边界|error,async|5|6|说明异步任务取消时资源如何释放。|画出创建、等待、取消三步。`;

const sampleAttempts = `# concept|correct|hint|latency_ms|misconception
syntax|1|0|1200
syntax|1|0|1800
option|0|1|42000|none`;

const $ = (id) => document.getElementById(id);
const attemptsInput = $("attempts");
attemptsInput.value = sampleAttempts;

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
}

function render(report) {
  const rec = report.recommendation;
  $("attemptCount").textContent = report.attempt_count;
  $("sessionTime").textContent = `${report.session.used_minutes}/${report.session.budget_minutes}`;
  $("sessionGain").textContent = report.session.projected_gain.toFixed(3);
  $("nextConcept").textContent = rec.concept || "—";
  $("nextConfidence").textContent = `掌握度 ${(rec.confidence * 100).toFixed(0)}%`;
  $("mastery").innerHTML = report.mastery.map((item) => `
    <div class="mastery-row"><span>${esc(item.concept)}</span><div class="bar"><i style="width:${Math.round(item.probability * 100)}%"></i></div><span class="prob">${(item.probability * 100).toFixed(0)}%</span></div>`).join("");
  $("diagnoses").innerHTML = report.diagnoses.length ? report.diagnoses.map((item) => `
    <div class="diagnosis"><strong>${esc(item.concept)} · ${esc(item.label)} · ${(item.confidence * 100).toFixed(0)}%</strong><p>${esc(item.advice)}</p></div>`).join("") : '<p class="empty">暂时没有稳定的错误模式。</p>';
  $("planSummary").textContent = `用时 ${report.session.used_minutes}/${report.session.budget_minutes} 分钟 · 预计提升 ${report.session.projected_gain.toFixed(3)}`;
  $("session").innerHTML = report.session.steps.length ? report.session.steps.map((step, index) => `
    <div class="session-step"><div class="step-number">${index + 1}</div><div><strong>${esc(step.title)}</strong><p>${esc(step.prompt)}</p><small>${esc(step.hint)} · ${esc(step.reason)}</small></div><div class="gain">${step.minutes} min<br/>+${step.expected_gain.toFixed(3)}</div></div>`).join("") : '<p class="empty">当前时间预算下没有满足前置条件的练习。</p>';
  $("recommendationTitle").textContent = rec.title || "暂无可推荐练习";
  $("recommendationReason").textContent = rec.reason;
  $("recommendationPrompt").textContent = rec.prompt || "请先完成一个前置知识点。";
}

function run() {
  $("status").textContent = "正在分析…";
  try {
    const budget = Number($("budget").value);
    const result = JSON.parse(analyze(curriculum, attemptsInput.value, exercises, budget, "json"));
    if (result.error) throw new Error(result.error);
    render(result);
    $("status").textContent = `已完成 · ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    $("status").textContent = `输入错误：${error.message}`;
  }
}

$("budget").addEventListener("input", (event) => { $("budgetValue").textContent = event.target.value; });
$("analyze").addEventListener("click", run);
$("reset").addEventListener("click", () => { attemptsInput.value = sampleAttempts; $("budget").value = 15; $("budgetValue").textContent = "15"; run(); });
run();
