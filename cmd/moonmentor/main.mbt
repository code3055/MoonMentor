///|
fn default_curriculum() -> String {
  "syntax|语法基础|1||写出一个接收 Int 并返回 Int 的函数。\noption|Option 与空值|2|syntax|把可能缺失的配置值安全地转换成 Int。\nerror|错误处理|3|option|为一个可能失败的解析函数设计 raise/catch 调用。\npattern|模式匹配|3|syntax|用 match 处理一个包含 Some 和 None 的值。\ncollection|集合变换|3|pattern|用 map/filter 完成一次不可变数据转换。\ntesting|测试设计|4|error|为解析失败和成功各写一个最小测试。\nasync|异步边界|5|error|说明异步函数中错误传播和取消的边界。"
}

///|
fn default_exercises() -> String {
  "exercise|syntax-1|函数签名识别|syntax|1|3|给出一个接收 Int 并返回 Int 的函数签名。|先写参数类型，再写返回类型。\nexercise|option-1|Option 分支|syntax,option|2|4|把 Some(3) 和 None 映射成可打印文本。|检查两个构造器分支。\nexercise|error-1|解析错误传播|option,error|3|5|设计一个会返回错误的数字解析器。|区分错误产生点和错误处理点。\nexercise|pattern-1|模式匹配覆盖|syntax,pattern|3|4|为一个代数数据类型写完整 match。|逐个列出构造器。\nexercise|testing-1|边界测试|error,testing|4|5|为成功和失败路径各写一个测试。|先列出最小输入。\nexercise|async-1|异步取消边界|error,async|5|6|说明异步任务取消时资源如何释放。|画出创建、等待、取消三步。"
}

///|
fn main {
  let curriculum_text = @env.get_env_var("MOONMENTOR_CURRICULUM").unwrap_or(
    default_curriculum(),
  )
  let attempts_text = @env.get_env_var("MOONMENTOR_ATTEMPTS").unwrap_or("")
  let exercises_text = @env.get_env_var("MOONMENTOR_EXERCISES").unwrap_or(
    default_exercises(),
  )
  let format = @env.get_env_var("MOONMENTOR_FORMAT").unwrap_or("text")
  let budget = 15
  let concepts = @core.parse_curriculum(curriculum_text) catch {
    @core.ParseError(message) => {
      println("curriculum error: \{message}")
      return
    }
  }
  let attempts = @core.parse_attempts(attempts_text) catch {
    @core.ParseError(message) => {
      println("attempt error: \{message}")
      return
    }
  }
  let exercises = @core.parse_exercises(exercises_text) catch {
    @core.ParseError(message) => {
      println("exercise error: \{message}")
      return
    }
  }
  let result = @core.plan_with_exercises(concepts, attempts, exercises, budget)
  if format == "json" {
    println(@core.report_json(result))
  } else {
    println(@core.report_text(result))
  }
}
