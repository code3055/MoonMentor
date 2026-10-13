function _M0TP38code305510moonmentor10moonmentor14Recommendation(param0, param1, param2, param3, param4, param5) {
  this.concept = param0;
  this.title = param1;
  this.confidence = param2;
  this.information_gain = param3;
  this.reason = param4;
  this.prompt = param5;
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsdE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsdEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsiEE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGsRP38code305510moonmentor10moonmentor10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP38code305510moonmentor10moonmentor10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP38code305510moonmentor10moonmentor10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP38code305510moonmentor10moonmentor10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError.prototype.$tag = 0;
function _M0TP38code305510moonmentor10moonmentor7Concept(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.title = param1;
  this.difficulty = param2;
  this.prerequisite = param3;
  this.prompt = param4;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP38code305510moonmentor10moonmentor7Attempt(param0, param1, param2, param3, param4) {
  this.concept = param0;
  this.correct = param1;
  this.hint_used = param2;
  this.latency_ms = param3;
  this.misconception = param4;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP38code305510moonmentor10moonmentor8Exercise(param0, param1, param2, param3, param4, param5, param6) {
  this.id = param0;
  this.title = param1;
  this.concepts = param2;
  this.difficulty = param3;
  this.minutes = param4;
  this.prompt = param5;
  this.hint = param6;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsdEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP38code305510moonmentor10moonmentor7Learner(param0, param1, param2) {
  this.mastery = param0;
  this.attempts = param1;
  this.wrong = param2;
}
function _M0TP38code305510moonmentor10moonmentor9Diagnosis(param0, param1, param2, param3) {
  this.concept = param0;
  this.label = param1;
  this.confidence = param2;
  this.advice = param3;
}
function _M0TP38code305510moonmentor10moonmentor11SessionStep(param0, param1, param2, param3, param4, param5, param6) {
  this.exercise = param0;
  this.title = param1;
  this.minutes = param2;
  this.expected_gain = param3;
  this.reason = param4;
  this.prompt = param5;
  this.hint = param6;
}
function _M0TP38code305510moonmentor10moonmentor11SessionPlan(param0, param1, param2, param3) {
  this.budget_minutes = param0;
  this.used_minutes = param1;
  this.projected_gain = param2;
  this.steps = param3;
}
function _M0TP38code305510moonmentor10moonmentor6Report(param0, param1, param2, param3, param4, param5) {
  this.learner = param0;
  this.recommendation = param1;
  this.attempt_count = param2;
  this.mastery = param3;
  this.diagnoses = param4;
  this.session = param5;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPC16string10StringView4trimN7_2abindS6831 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6932 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9909GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9910GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9909GcE = 0;
const _M0MPB4Iter4nextN6constrS9910GcE = 0;
const _M0MPB4Iter3newN6constrS9917GsE = 0;
const _M0MPB4Iter3newN6constrS9917GcE = 0;
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS225 = "\\";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS226 = "\\\\";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS227 = "\"";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS228 = "\\\"";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS229 = "\n";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS230 = "\\n";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS231 = "\r";
const _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS232 = "\\r";
const _M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS234 = ",";
const _M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS235 = ",";
const _M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS236 = ",";
const _M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS317 = "\n";
const _M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS298 = "#";
const _M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS306 = "|";
const _M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS359 = "\n";
const _M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS328 = "#";
const _M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS348 = "|";
const _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS389 = "\n";
const _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS362 = "#";
const _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS378 = "|";
const _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS365 = ",";
const _M0FP38code305510moonmentor10moonmentor19prerequisite__readyN7_2abindS413 = ",";
const _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS420 = "none";
const _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS421 = "option";
const _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS422 = "error";
const _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS423 = "raise";
const _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS424 = "pattern";
const _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS425 = "match";
const _M0FP38code305510moonmentor10moonmentor8diagnoseN7_2abindS434 = "\u001f";
const _M0MPC16string10StringView4findN6constrS9919 = 0;
const _M0FP38code305510moonmentor10moonmentor11parse__boolN6constrS542 = false;
const _M0FP38code305510moonmentor10moonmentor11parse__boolN6constrS543 = true;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP38code305510moonmentor10moonmentor9recommendN6recordS544 = new _M0TP38code305510moonmentor10moonmentor14Recommendation("", "暂无可推荐练习", 0, 0, "请先完成任一前置知识点，系统才能解锁后续内容", "");
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGsE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GsE;
  }
  return new _M0TPB4IterGsE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPB13StringBuilder11write__iter(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(iter);
    if (_bind === -1) {
      return;
    } else {
      const _Some = _bind;
      const _ch = _Some;
      _M0IPB13StringBuilderPB6Logger11write__char(self, _ch);
      continue;
    }
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      let _tmp$2;
      const _p = data.charCodeAt(pos);
      if (_p === first) {
        const _p$2 = data.charCodeAt(pos + last_offset | 0);
        _tmp$2 = _p$2 === last;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      const _p = left.charCodeAt(left_start + i | 0);
      const _p$2 = right.charCodeAt(right_start + i | 0);
      if (_p !== _p$2) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      const _p = data.charCodeAt(pos);
      if (_p === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9919;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  if (str_len <= (self.end - self.start | 0)) {
    let _tmp;
    if (str_len === 0) {
      _tmp = true;
    } else {
      const _p = self.str.charCodeAt(self.start);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp = _p === _p$2;
    }
    if (_tmp) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$4;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$4;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos < end) {
      const _p = str.charCodeAt(pos);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos > start) {
      const _p = str.charCodeAt(pos - 1 | 0);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                const _p = self.str.charCodeAt(self.start + i | 0);
                if (_p === high$2) {
                  const _p$2 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$2 === low) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView4trimN7_2abindS6831, 0, _M0MPC16string10StringView4trimN7_2abindS6831.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6932, 0, _M0MPC16string6String4trimN7_2abindS6932.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGsE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String7replace(self, old, new_) {
  const _bind = _M0MPC16string6String4find(self, old);
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _end = _Some;
    const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, 0, _end)));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(new_));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, _end + (old.end - old.start | 0) | 0, undefined)));
    const _p = _self;
    return _p.val;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function _M0MPC16option6Option10unwrap__orGdE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC16option6Option10unwrap__orGiE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsdE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsdE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsdE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsdE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsdE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsdE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsdE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsdE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsdE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsdE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsdE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsdE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsdE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsdE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsdE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsdE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsdE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsdE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsdE(self, key, value) {
  _M0MPB3Map15set__with__hashGsdE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsdE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsdE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsdE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsdE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGdE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGdE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGdE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4iterGsdE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsdEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGsE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4iterGsiE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsiEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGsE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsdE(self) {
  return _M0MPB3Map4iterGsdE(self);
}
function _M0MPB3Map5iter2GsiE(self) {
  return _M0MPB3Map4iterGsiE(self);
}
function _M0MPB4Iter6filterGsE(self, f) {
  return _M0MPB4Iter3newGsE(() => {
    while (true) {
      const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
      if (_bind === undefined) {
        return undefined;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB5Iter24nextGsdE(self) {
  return _M0MPB4Iter4nextGRPC16string10StringViewE(self);
}
function _M0MPB5Iter24nextGsiE(self) {
  return _M0MPB4Iter4nextGRPC16string10StringViewE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15array5Array4copyGsE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FP38code305510moonmentor10moonmentor12json__escape(text) {
  return _M0MPC16string6String7replace(_M0MPC16string6String7replace(_M0MPC16string6String7replace(_M0MPC16string6String7replace(text, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS225, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS225.length), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS226, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS226.length)), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS227, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS227.length), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS228, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS228.length)), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS229, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS229.length), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS230, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS230.length)), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS231, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS231.length), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS232, 0, _M0FP38code305510moonmentor10moonmentor12json__escapeN7_2abindS232.length));
}
function _M0FP38code305510moonmentor10moonmentor6quoted(text) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP38code305510moonmentor10moonmentor12json__escape(text));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
  return _string_builder.val;
}
function _M0FP38code305510moonmentor10moonmentor12report__json(result) {
  const rec = result.recommendation;
  const _p = result.mastery;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = `{\"concept\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$5._0)},\"probability\":${String(_p$5._1)}}`;
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const mastery = _p$2;
  const _p$4 = result.diagnoses;
  const _p$5 = new Array(_p$4.length);
  const _p$6 = _p$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$7 = _tmp$2;
    if (_p$7 < _p$6) {
      const _p$8 = _p$4[_p$7];
      _p$5[_p$7] = `{\"concept\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$8.concept)},\"label\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$8.label)},\"confidence\":${String(_p$8.confidence)},\"advice\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$8.advice)}}`;
      _tmp$2 = _p$7 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const diagnoses = _p$5;
  const _p$7 = result.session.steps;
  const _p$8 = new Array(_p$7.length);
  const _p$9 = _p$7.length;
  let _tmp$3 = 0;
  while (true) {
    const _p$10 = _tmp$3;
    if (_p$10 < _p$9) {
      const _p$11 = _p$7[_p$10];
      _p$8[_p$10] = `{\"exercise\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$11.exercise)},\"title\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$11.title)},\"minutes\":${_M0MPC13int3Int18to__string_2einner(_p$11.minutes, 10)},\"expected_gain\":${String(_p$11.expected_gain)},\"reason\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$11.reason)},\"prompt\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$11.prompt)},\"hint\":${_M0FP38code305510moonmentor10moonmentor6quoted(_p$11.hint)}}`;
      _tmp$3 = _p$10 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const steps = _p$8;
  return `{\"attempt_count\":${_M0MPC13int3Int18to__string_2einner(result.attempt_count, 10)},\"mastery\":[${_M0MPC15array5Array4joinGsE(mastery, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS234, 0, _M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS234.length))}],\"diagnoses\":[${_M0MPC15array5Array4joinGsE(diagnoses, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS235, 0, _M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS235.length))}],\"session\":{\"budget_minutes\":${_M0MPC13int3Int18to__string_2einner(result.session.budget_minutes, 10)},\"used_minutes\":${_M0MPC13int3Int18to__string_2einner(result.session.used_minutes, 10)},\"projected_gain\":${String(result.session.projected_gain)},\"steps\":[${_M0MPC15array5Array4joinGsE(steps, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS236, 0, _M0FP38code305510moonmentor10moonmentor12report__jsonN7_2abindS236.length))}]},\"recommendation\":{\"concept\":${_M0FP38code305510moonmentor10moonmentor6quoted(rec.concept)},\"title\":${_M0FP38code305510moonmentor10moonmentor6quoted(rec.title)},\"confidence\":${String(rec.confidence)},\"information_gain\":${String(rec.information_gain)},\"reason\":${_M0FP38code305510moonmentor10moonmentor6quoted(rec.reason)},\"prompt\":${_M0FP38code305510moonmentor10moonmentor6quoted(rec.prompt)}}}`;
}
function _M0FP38code305510moonmentor10moonmentor12report__text(result) {
  const rec = result.recommendation;
  let output = "MoonMentor\n";
  const _tmp = output;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "attempts: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, result.attempt_count);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\n");
  output = `${_tmp}${_string_builder.val}`;
  output = `${output}mastery:`;
  const _bind = result.mastery;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const item = _bind[_];
      const _tmp$3 = output;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, item._0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "=");
      _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, item._1);
      output = `${_tmp$3}${_string_builder$2.val}`;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  output = `${output}\n`;
  if (result.diagnoses.length > 0) {
    output = `${output}diagnoses:\n`;
    const _bind$3 = result.diagnoses;
    const _bind$4 = _bind$3.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$4) {
        const item = _bind$3[_];
        const _tmp$4 = output;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "- ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, item.concept);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ": ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, item.label);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " (");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, item.confidence);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ") -> ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, item.advice);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\n");
        output = `${_tmp$4}${_string_builder$2.val}`;
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _tmp$3 = output;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(24);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "session (");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, result.session.used_minutes);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "/");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, result.session.budget_minutes);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " min, gain ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, result.session.projected_gain);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "):\n");
  output = `${_tmp$3}${_string_builder$2.val}`;
  const _bind$3 = result.session.steps;
  const _bind$4 = _bind$3.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$4) {
      const step = _bind$3[_];
      const _tmp$5 = output;
      const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "- ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, step.title);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " [");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, step.exercise);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "] ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, step.minutes);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "min, ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, step.reason);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\n");
      output = `${_tmp$5}${_string_builder$3.val}`;
      const _tmp$6 = output;
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "  题目: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, step.prompt);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\n");
      output = `${_tmp$6}${_string_builder$4.val}`;
      const _tmp$7 = output;
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "  提示: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, step.hint);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\n");
      output = `${_tmp$7}${_string_builder$5.val}`;
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$5 = output;
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "next: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, rec.title);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " [");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, rec.concept);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "]\n");
  output = `${_tmp$5}${_string_builder$3.val}`;
  const _tmp$6 = output;
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "mastery estimate: ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, rec.confidence);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\n");
  output = `${_tmp$6}${_string_builder$4.val}`;
  const _tmp$7 = output;
  const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "information gain: ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$5, rec.information_gain);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\n");
  output = `${_tmp$7}${_string_builder$5.val}`;
  const _tmp$8 = output;
  const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "reason: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$6, rec.reason);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\n");
  output = `${_tmp$8}${_string_builder$6.val}`;
  const _tmp$9 = output;
  const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "exercise: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$7, rec.prompt);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "\n");
  output = `${_tmp$9}${_string_builder$7.val}`;
  return output;
}
function _M0FP38code305510moonmentor10moonmentor10parse__int(text) {
  const value = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(text, undefined));
  if (value === "") {
    return undefined;
  }
  let result = 0;
  let sign = 1;
  let index = 0;
  const _it = _M0MPC16string6String4iter(value);
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (index === 0 && _c === 45) {
        sign = -1;
      } else {
        if (_c < 48 || _c > 57) {
          return undefined;
        } else {
          result = ((Math.imul(result, 10) | 0) + _c | 0) - 48 | 0;
        }
      }
      index = index + 1 | 0;
      continue;
    }
  }
  return index === 0 || index === 1 && sign === -1 ? undefined : Math.imul(result, sign) | 0;
}
function _M0FP38code305510moonmentor10moonmentor11parse__bool(text) {
  _L: {
    _L$2: {
      _L$3: {
        const _bind = _M0MPC16string6String4trim(text, undefined);
        if ((_bind.end - _bind.start | 0) === 1) {
          const _x = _bind.str.charCodeAt(_bind.start);
          switch (_x) {
            case 49: {
              break _L$3;
            }
            case 48: {
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        } else {
          if ((_bind.end - _bind.start | 0) === 4) {
            const _x = _bind.str.charCodeAt(_bind.start);
            if (_x === 116) {
              const _x$2 = _bind.str.charCodeAt(_bind.start + 1 | 0);
              if (_x$2 === 114) {
                const _x$3 = _bind.str.charCodeAt(_bind.start + 2 | 0);
                if (_x$3 === 117) {
                  const _x$4 = _bind.str.charCodeAt(_bind.start + 3 | 0);
                  if (_x$4 === 101) {
                    break _L$3;
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          } else {
            if ((_bind.end - _bind.start | 0) === 3) {
              const _x = _bind.str.charCodeAt(_bind.start);
              if (_x === 121) {
                const _x$2 = _bind.str.charCodeAt(_bind.start + 1 | 0);
                if (_x$2 === 101) {
                  const _x$3 = _bind.str.charCodeAt(_bind.start + 2 | 0);
                  if (_x$3 === 115) {
                    break _L$3;
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            } else {
              if ((_bind.end - _bind.start | 0) === 5) {
                const _x = _bind.str.charCodeAt(_bind.start);
                if (_x === 102) {
                  const _x$2 = _bind.str.charCodeAt(_bind.start + 1 | 0);
                  if (_x$2 === 97) {
                    const _x$3 = _bind.str.charCodeAt(_bind.start + 2 | 0);
                    if (_x$3 === 108) {
                      const _x$4 = _bind.str.charCodeAt(_bind.start + 3 | 0);
                      if (_x$4 === 115) {
                        const _x$5 = _bind.str.charCodeAt(_bind.start + 4 | 0);
                        if (_x$5 === 101) {
                          break _L$2;
                        } else {
                          break _L;
                        }
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                if ((_bind.end - _bind.start | 0) === 2) {
                  const _x = _bind.str.charCodeAt(_bind.start);
                  if (_x === 110) {
                    const _x$2 = _bind.str.charCodeAt(_bind.start + 1 | 0);
                    if (_x$2 === 111) {
                      break _L$2;
                    } else {
                      break _L;
                    }
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              }
            }
          }
        }
      }
      return _M0FP38code305510moonmentor10moonmentor11parse__boolN6constrS543;
    }
    return _M0FP38code305510moonmentor10moonmentor11parse__boolN6constrS542;
  }
  return -1;
}
function _M0FP38code305510moonmentor10moonmentor8required(value, label) {
  const text = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(value, undefined));
  if (text === "") {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, label);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " cannot be empty");
    return new _M0DTPC16result6ResultGsRP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
  }
  return new _M0DTPC16result6ResultGsRP38code305510moonmentor10moonmentor10ParseErrorE2Ok(text);
}
function _M0FP38code305510moonmentor10moonmentor7concept(id, title, difficulty, prerequisite, prompt) {
  return new _M0TP38code305510moonmentor10moonmentor7Concept(id, title, difficulty, prerequisite, prompt);
}
function _M0FP38code305510moonmentor10moonmentor17parse__curriculum(input) {
  const result = [];
  let line_number = 0;
  const _it = _M0MPC16string6String5split(input, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS317, 0, _M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS317.length));
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _raw = _Some;
      line_number = line_number + 1 | 0;
      const line = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_raw, undefined));
      if (line === "" || _M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS298, 0, _M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS298.length))) {
        continue;
      }
      const fields = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(line, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS306, 0, _M0FP38code305510moonmentor10moonmentor17parse__curriculumN7_2abindS306.length)), (s) => _M0MPC16string10StringView9to__owned(s)));
      if (fields.length !== 5) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(53);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "curriculum line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " must contain 5 pipe-separated fields");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      let difficulty;
      _L: {
        _L$2: {
          const _bind$2 = _M0FP38code305510moonmentor10moonmentor10parse__int(_M0MPC15array5Array2atGsE(fields, 2));
          if (_bind$2 === undefined) {
            break _L$2;
          } else {
            const _Some$2 = _bind$2;
            const _value = _Some$2;
            if (_value >= 1 && _value <= 5) {
              difficulty = _value;
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(40);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "curriculum line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " difficulty must be 1..5");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      const _bind$2 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 0), "concept id");
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _tmp$2 = _tmp;
      const _bind$3 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 1), "concept title");
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      const _tmp$4 = _tmp$3;
      const _tmp$5 = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC15array5Array2atGsE(fields, 3), undefined));
      const _bind$4 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 4), "concept prompt");
      let _tmp$6;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$6 = _ok._0;
      } else {
        return _bind$4;
      }
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(result, _M0FP38code305510moonmentor10moonmentor7concept(_tmp$2, _tmp$4, difficulty, _tmp$5, _tmp$6));
      continue;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7ConceptERP38code305510moonmentor10moonmentor10ParseErrorE2Ok(result);
}
function _M0FP38code305510moonmentor10moonmentor15attempt_2einner(concept, correct, hint_used, latency_ms, misconception) {
  return new _M0TP38code305510moonmentor10moonmentor7Attempt(concept, correct, hint_used, latency_ms, misconception);
}
function _M0FP38code305510moonmentor10moonmentor15parse__attempts(input) {
  const result = [];
  let line_number = 0;
  const _it = _M0MPC16string6String5split(input, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS359, 0, _M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS359.length));
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _raw = _Some;
      line_number = line_number + 1 | 0;
      const line = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_raw, undefined));
      if (line === "" || _M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS328, 0, _M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS328.length))) {
        continue;
      }
      const fields = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(line, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS348, 0, _M0FP38code305510moonmentor10moonmentor15parse__attemptsN7_2abindS348.length)), (s) => _M0MPC16string10StringView9to__owned(s)));
      if (fields.length !== 4 && fields.length !== 5) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(55);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "attempt line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " must contain 4 or 5 pipe-separated fields");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      const _bind$2 = _M0FP38code305510moonmentor10moonmentor11parse__bool(_M0MPC15array5Array2atGsE(fields, 1));
      let correct;
      if (_bind$2 === -1) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "attempt line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has invalid correct flag");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      } else {
        correct = _bind$2;
      }
      const _bind$3 = _M0FP38code305510moonmentor10moonmentor11parse__bool(_M0MPC15array5Array2atGsE(fields, 2));
      let hint_used;
      if (_bind$3 === -1) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(35);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "attempt line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has invalid hint flag");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      } else {
        hint_used = _bind$3;
      }
      let latency_ms;
      _L: {
        _L$2: {
          const _bind$4 = _M0FP38code305510moonmentor10moonmentor10parse__int(_M0MPC15array5Array2atGsE(fields, 3));
          if (_bind$4 === undefined) {
            break _L$2;
          } else {
            const _Some$2 = _bind$4;
            const _value = _Some$2;
            if (_value >= 0) {
              latency_ms = _value;
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(42);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "attempt line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " latency must be non-negative");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      const misconception = fields.length === 5 ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC15array5Array2atGsE(fields, 4), undefined)) : "";
      const _bind$4 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 0), "attempt concept");
      let _tmp;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp = _ok._0;
      } else {
        return _bind$4;
      }
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(result, _M0FP38code305510moonmentor10moonmentor15attempt_2einner(_tmp, correct, hint_used, latency_ms, misconception));
      continue;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor7AttemptERP38code305510moonmentor10moonmentor10ParseErrorE2Ok(result);
}
function _M0FP38code305510moonmentor10moonmentor8exercise(id, title, concepts, difficulty, minutes, prompt, hint) {
  return new _M0TP38code305510moonmentor10moonmentor8Exercise(id, title, concepts, difficulty, minutes, prompt, hint);
}
function _M0FP38code305510moonmentor10moonmentor16parse__exercises(input) {
  const result = [];
  let line_number = 0;
  const _it = _M0MPC16string6String5split(input, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS389, 0, _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS389.length));
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _raw = _Some;
      line_number = line_number + 1 | 0;
      const line = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_raw, undefined));
      if (line === "" || _M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS362, 0, _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS362.length))) {
        continue;
      }
      const fields = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(line, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS378, 0, _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS378.length)), (s) => _M0MPC16string10StringView9to__owned(s)));
      let _tmp;
      if (fields.length !== 8) {
        _tmp = true;
      } else {
        const _p = _M0MPC15array5Array2atGsE(fields, 0);
        const _p$2 = "exercise";
        _tmp = !(_p === _p$2);
      }
      if (_tmp) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "exercise line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " must contain 8 fields and start with exercise");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      let difficulty;
      _L: {
        _L$2: {
          const _bind$2 = _M0FP38code305510moonmentor10moonmentor10parse__int(_M0MPC15array5Array2atGsE(fields, 4));
          if (_bind$2 === undefined) {
            break _L$2;
          } else {
            const _Some$2 = _bind$2;
            const _value = _Some$2;
            if (_value >= 1 && _value <= 5) {
              difficulty = _value;
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "exercise line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " difficulty must be 1..5");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      let minutes;
      _L$2: {
        _L$3: {
          const _bind$2 = _M0FP38code305510moonmentor10moonmentor10parse__int(_M0MPC15array5Array2atGsE(fields, 5));
          if (_bind$2 === undefined) {
            break _L$3;
          } else {
            const _Some$2 = _bind$2;
            const _value = _Some$2;
            if (_value > 0 && _value <= 120) {
              minutes = _value;
            } else {
              break _L$3;
            }
          }
          break _L$2;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(37);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "exercise line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " minutes must be 1..120");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      const concepts = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter6filterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(_M0MPC15array5Array2atGsE(fields, 3), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS365, 0, _M0FP38code305510moonmentor10moonmentor16parse__exercisesN7_2abindS365.length)), (s) => _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(s, undefined))), (s) => {
        const _p = "";
        return !(s === _p);
      }));
      if (concepts.length === 0) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(47);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "exercise line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_number);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " must target at least one concept");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE3Err(new _M0DTPC15error5Error60code3055_2fmoonmentor_2fmoonmentor_2eParseError_2eParseError(_string_builder.val));
      }
      const _bind$2 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 1), "exercise id");
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      const _tmp$3 = _tmp$2;
      const _bind$3 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 2), "exercise title");
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      const _tmp$5 = _tmp$4;
      const _bind$4 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 6), "exercise prompt");
      let _tmp$6;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$6 = _ok._0;
      } else {
        return _bind$4;
      }
      const _tmp$7 = _tmp$6;
      const _bind$5 = _M0FP38code305510moonmentor10moonmentor8required(_M0MPC15array5Array2atGsE(fields, 7), "exercise hint");
      let _tmp$8;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$8 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(result, _M0FP38code305510moonmentor10moonmentor8exercise(_tmp$3, _tmp$5, concepts, difficulty, minutes, _tmp$7, _tmp$8));
      continue;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38code305510moonmentor10moonmentor8ExerciseERP38code305510moonmentor10moonmentor10ParseErrorE2Ok(result);
}
function _M0FP38code305510moonmentor10moonmentor12new__learner(concepts) {
  const _bind = [];
  const mastery = _M0MPB3Map3MapGsdE(new _M0TPB9ArrayViewGUsdEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const attempts = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const wrong = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
  const _bind$4 = concepts.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const item = concepts[_];
      _M0MPB3Map3setGsdE(mastery, item.id, 0.2);
      _M0MPB3Map3setGsiE(attempts, item.id, 0);
      _M0MPB3Map3setGsiE(wrong, item.id, 0);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP38code305510moonmentor10moonmentor7Learner(mastery, attempts, wrong);
}
function _M0FP38code305510moonmentor10moonmentor19update__probability(current, record) {
  const guess = record.hint_used ? 0.3 : 0.2;
  const slip = record.latency_ms > 30000 ? 0.16 : 0.1;
  let posterior;
  if (record.correct) {
    const numerator = current * (1 - slip);
    const denominator = numerator + (1 - current) * guess;
    posterior = denominator === 0 ? current : numerator / denominator;
  } else {
    const numerator = current * slip;
    const denominator = numerator + (1 - current) * (1 - guess);
    posterior = denominator === 0 ? current : numerator / denominator;
  }
  const learn = record.hint_used ? 0.06 : 0.12;
  const latency_penalty = record.latency_ms > 30000 ? 0.03 : 0;
  const _p = posterior + (1 - posterior) * learn - latency_penalty;
  return _p < 0 ? 0 : _p > 1 ? 1 : _p;
}
function _M0FP38code305510moonmentor10moonmentor14apply__attempt(learner, record) {
  const current = _M0MPC16option6Option10unwrap__orGdE(_M0MPB3Map3getGsdE(learner.mastery, record.concept), 0.2);
  _M0MPB3Map3setGsdE(learner.mastery, record.concept, _M0FP38code305510moonmentor10moonmentor19update__probability(current, record));
  _M0MPB3Map3setGsiE(learner.attempts, record.concept, _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(learner.attempts, record.concept), 0) + 1 | 0);
  if (!record.correct) {
    _M0MPB3Map3setGsiE(learner.wrong, record.concept, _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(learner.wrong, record.concept), 0) + 1 | 0);
    return;
  } else {
    return;
  }
}
function _M0FP38code305510moonmentor10moonmentor5train(concepts, attempts) {
  const learner = _M0FP38code305510moonmentor10moonmentor12new__learner(concepts);
  const _bind = attempts.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const record = attempts[_];
      _M0FP38code305510moonmentor10moonmentor14apply__attempt(learner, record);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return learner;
}
function _M0FP38code305510moonmentor10moonmentor7mastery(learner, concept) {
  return _M0MPC16option6Option10unwrap__orGdE(_M0MPB3Map3getGsdE(learner.mastery, concept), 0.2);
}
function _M0FP38code305510moonmentor10moonmentor19prerequisite__ready(learner, item) {
  if (item.prerequisite === "") {
    return true;
  }
  const _it = _M0MPC16string6String5split(item.prerequisite, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor19prerequisite__readyN7_2abindS413, 0, _M0FP38code305510moonmentor10moonmentor19prerequisite__readyN7_2abindS413.length));
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _dependency = _Some;
      const id = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_dependency, undefined));
      let _tmp;
      const _p = "";
      if (!(id === _p)) {
        _tmp = _M0FP38code305510moonmentor10moonmentor7mastery(learner, id) < 0.55;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        return false;
      }
      continue;
    }
  }
  return true;
}
function _M0FP38code305510moonmentor10moonmentor16candidate__score(learner, item) {
  if (!_M0FP38code305510moonmentor10moonmentor19prerequisite__ready(learner, item)) {
    return -1;
  }
  const confidence = _M0FP38code305510moonmentor10moonmentor7mastery(learner, item.id);
  const uncertainty = 1 - Math.abs(2 * confidence - 1);
  const attempts = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(learner.attempts, item.id), 0) + 0;
  const novelty = 1 / (1 + attempts * 0.15);
  const difficulty_weight = 0.8 + (item.difficulty + 0) * 0.08;
  return uncertainty * novelty * difficulty_weight;
}
function _M0FP38code305510moonmentor10moonmentor22recommendation__reason(learner, item) {
  const confidence = _M0FP38code305510moonmentor10moonmentor7mastery(learner, item.id);
  const count = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(learner.attempts, item.id), 0);
  const wrong = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(learner.wrong, item.id), 0);
  return wrong >= 2 ? "同一知识点连续出现错误，先做针对性纠错" : count === 0 ? "这是前置知识已满足但尚未练习的知识点" : confidence < 0.55 ? "掌握度仍低于稳定阈值，优先巩固基础" : "掌握度处于不确定区间，这道题能带来较高信息增益";
}
function _M0FP38code305510moonmentor10moonmentor9recommend(learner, concepts) {
  let best_index = -1;
  let best_score = -1;
  let _tmp = 0;
  while (true) {
    const index = _tmp;
    if (index < concepts.length) {
      const score = _M0FP38code305510moonmentor10moonmentor16candidate__score(learner, _M0MPC15array5Array2atGsE(concepts, index));
      if (score > best_score) {
        best_score = score;
        best_index = index;
      }
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (best_index < 0) {
    return _M0FP38code305510moonmentor10moonmentor9recommendN6recordS544;
  } else {
    const item = _M0MPC15array5Array2atGsE(concepts, best_index);
    return new _M0TP38code305510moonmentor10moonmentor14Recommendation(item.id, item.title, _M0FP38code305510moonmentor10moonmentor7mastery(learner, item.id), best_score, _M0FP38code305510moonmentor10moonmentor22recommendation__reason(learner, item), item.prompt);
  }
}
function _M0FP38code305510moonmentor10moonmentor17diagnosis__advice(label) {
  const normalized = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(label, undefined));
  return _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS420, 0, _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS420.length)) || _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS421, 0, _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS421.length)) ? "先画出 Some/None 两条路径，再补一个空值测试" : _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS422, 0, _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS422.length)) || _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS423, 0, _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS423.length)) ? "先区分可恢复错误和必须向上抛出的错误" : _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS424, 0, _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS424.length)) || _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS425, 0, _M0FP38code305510moonmentor10moonmentor17diagnosis__adviceN7_2abindS425.length)) ? "把每个构造器列成分支，检查是否覆盖全部情况" : "把错误拆成一个最小例子，再重新完成同类练习";
}
function _M0FP38code305510moonmentor10moonmentor8diagnose(learner, attempts) {
  const keys = [];
  const counts = [];
  const _bind = attempts.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const record = attempts[_];
      let _tmp$2;
      if (!record.correct) {
        const _p = record.misconception;
        const _p$2 = "";
        _tmp$2 = !(_p === _p$2);
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        const key = `${record.concept}\u001f${record.misconception}`;
        let index = -1;
        let _tmp$3 = 0;
        while (true) {
          const i = _tmp$3;
          if (i < keys.length) {
            if (_M0MPC15array5Array2atGsE(keys, i) === key) {
              index = i;
            }
            _tmp$3 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (index < 0) {
          _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(keys, key);
          _M0MPC15array5Array4pushGiE(counts, 1);
        } else {
          const _index_2 = index;
          _M0MPC15array5Array3setGiE(counts, _index_2, _M0MPC15array5Array2atGiE(counts, _index_2) + 1 | 0);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const result = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < keys.length) {
      const fields = _M0MPB4Iter9to__arrayGsE(_M0MPC16string6String5split(_M0MPC15array5Array2atGsE(keys, i), new _M0TPC16string10StringView(_M0FP38code305510moonmentor10moonmentor8diagnoseN7_2abindS434, 0, _M0FP38code305510moonmentor10moonmentor8diagnoseN7_2abindS434.length)));
      const concept_id = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGsE(fields, 0));
      const label = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGsE(fields, 1));
      const _p = 0.4 + (_M0MPC15array5Array2atGiE(counts, i) + 0) * 0.15 + (1 - _M0FP38code305510moonmentor10moonmentor7mastery(learner, concept_id)) * 0.2;
      const confidence = _p < 0 ? 0 : _p > 1 ? 1 : _p;
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(result, new _M0TP38code305510moonmentor10moonmentor9Diagnosis(concept_id, label, confidence, _M0FP38code305510moonmentor10moonmentor17diagnosis__advice(label)));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP38code305510moonmentor10moonmentor14clone__learner(learner) {
  const _bind = [];
  const mastery_copy = _M0MPB3Map3MapGsdE(new _M0TPB9ArrayViewGUsdEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const attempts_copy = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const wrong_copy = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsdE(learner.mastery);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsdE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _value = _x._1;
      _M0MPB3Map3setGsdE(mastery_copy, _key, _value);
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsiE(learner.attempts);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsiE(_it$2);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _value = _x._1;
      _M0MPB3Map3setGsiE(attempts_copy, _key, _value);
      continue;
    }
  }
  const _it$3 = _M0MPB3Map5iter2GsiE(learner.wrong);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsiE(_it$3);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _value = _x._1;
      _M0MPB3Map3setGsiE(wrong_copy, _key, _value);
      continue;
    }
  }
  return new _M0TP38code305510moonmentor10moonmentor7Learner(mastery_copy, attempts_copy, wrong_copy);
}
function _M0FP38code305510moonmentor10moonmentor12contains__id(ids, id) {
  return _M0MPC15array5Array8containsGsE(ids, id);
}
function _M0FP38code305510moonmentor10moonmentor12concept__for(concepts, id) {
  const _bind = concepts.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = concepts[_];
      if (item.id === id) {
        return item;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP38code305510moonmentor10moonmentor15exercise__ready(learner, concepts, item) {
  const _bind = item.concepts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const concept_id = _bind[_];
      const _bind$3 = _M0FP38code305510moonmentor10moonmentor12concept__for(concepts, concept_id);
      if (_bind$3 === undefined) {
        return false;
      } else {
        const _Some = _bind$3;
        const _concept = _Some;
        if (!_M0FP38code305510moonmentor10moonmentor19prerequisite__ready(learner, _concept)) {
          return false;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP38code305510moonmentor10moonmentor14expected__gain(learner, concepts, item) {
  if (!_M0FP38code305510moonmentor10moonmentor15exercise__ready(learner, concepts, item)) {
    return -1;
  }
  let gain = 0;
  const _bind = item.concepts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const concept_id = _bind[_];
      const current = _M0FP38code305510moonmentor10moonmentor7mastery(learner, concept_id);
      const difficulty_gap = Math.abs(item.difficulty + 0 - (1 + current * 4));
      const fit = difficulty_gap > 2 ? 0.35 : 1 - difficulty_gap * 0.2;
      gain = gain + (1 - current) * 0.12 * fit;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return gain / (item.minutes + 0);
}
function _M0FP38code305510moonmentor10moonmentor12future__gain(learner, concepts, exercises, excluded, remaining) {
  let best = 0;
  const _bind = exercises.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = exercises[_];
      if (!_M0FP38code305510moonmentor10moonmentor12contains__id(excluded, item.id) && item.minutes <= remaining) {
        const gain = _M0FP38code305510moonmentor10moonmentor14expected__gain(learner, concepts, item);
        if (gain > best) {
          best = gain;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return best;
}
function _M0FP38code305510moonmentor10moonmentor17project__exercise(learner, item) {
  const projected = _M0FP38code305510moonmentor10moonmentor14clone__learner(learner);
  const _bind = item.concepts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const concept_id = _bind[_];
      _M0FP38code305510moonmentor10moonmentor14apply__attempt(projected, _M0FP38code305510moonmentor10moonmentor15attempt_2einner(concept_id, true, false, Math.imul(item.minutes, 60000) | 0, ""));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return projected;
}
function _M0FP38code305510moonmentor10moonmentor12step__reason(learner, item) {
  let weak = "";
  const _bind = item.concepts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const concept_id = _bind[_];
      if (_M0FP38code305510moonmentor10moonmentor7mastery(learner, concept_id) < 0.55) {
        const _p = weak;
        const _p$2 = "";
        if (!(_p === _p$2)) {
          weak = `${weak},`;
        }
        weak = `${weak}${concept_id}`;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (weak === "") {
    return "巩固已学知识并检验迁移";
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "覆盖薄弱知识点: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, weak);
    return _string_builder.val;
  }
}
function _M0FP38code305510moonmentor10moonmentor13plan__session(learner, concepts, exercises, budget_minutes) {
  let projected = _M0FP38code305510moonmentor10moonmentor14clone__learner(learner);
  const selected = [];
  const steps = [];
  let used = 0;
  let total_gain = 0;
  while (true) {
    if (used < budget_minutes && steps.length < 4) {
      let best_index = -1;
      let best_score = -1;
      let _tmp = 0;
      while (true) {
        const index = _tmp;
        if (index < exercises.length) {
          _L: {
            const item = _M0MPC15array5Array2atGsE(exercises, index);
            if (_M0FP38code305510moonmentor10moonmentor12contains__id(selected, item.id) || (used + item.minutes | 0) > budget_minutes) {
              break _L;
            }
            const gain = _M0FP38code305510moonmentor10moonmentor14expected__gain(projected, concepts, item);
            const lookahead_excluded = _M0MPC15array5Array4copyGsE(selected);
            _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(lookahead_excluded, item.id);
            const lookahead = _M0FP38code305510moonmentor10moonmentor12future__gain(_M0FP38code305510moonmentor10moonmentor17project__exercise(projected, item), concepts, exercises, lookahead_excluded, (budget_minutes - used | 0) - item.minutes | 0);
            const score = gain + lookahead * 0.35;
            if (score > best_score) {
              best_score = score;
              best_index = index;
            }
            break _L;
          }
          _tmp = index + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (best_index < 0) {
        break;
      }
      const chosen = _M0MPC15array5Array2atGsE(exercises, best_index);
      const gain = _M0FP38code305510moonmentor10moonmentor14expected__gain(projected, concepts, chosen);
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(selected, chosen.id);
      _M0MPC15array5Array4pushGRP38code305510moonmentor10moonmentor7ConceptE(steps, new _M0TP38code305510moonmentor10moonmentor11SessionStep(chosen.id, chosen.title, chosen.minutes, gain, _M0FP38code305510moonmentor10moonmentor12step__reason(projected, chosen), chosen.prompt, chosen.hint));
      total_gain = total_gain + gain;
      used = used + chosen.minutes | 0;
      projected = _M0FP38code305510moonmentor10moonmentor17project__exercise(projected, chosen);
      continue;
    } else {
      break;
    }
  }
  return new _M0TP38code305510moonmentor10moonmentor11SessionPlan(budget_minutes, used, total_gain, steps);
}
function _M0FP38code305510moonmentor10moonmentor21plan__with__exercises(concepts, attempts, exercises, budget_minutes) {
  const learner = _M0FP38code305510moonmentor10moonmentor5train(concepts, attempts);
  const _tmp = _M0FP38code305510moonmentor10moonmentor9recommend(learner, concepts);
  const _tmp$2 = attempts.length;
  const _p = new Array(concepts.length);
  const _p$2 = concepts.length;
  let _tmp$3 = 0;
  while (true) {
    const _p$3 = _tmp$3;
    if (_p$3 < _p$2) {
      const _p$4 = concepts[_p$3];
      _p[_p$3] = { _0: _p$4.id, _1: _M0FP38code305510moonmentor10moonmentor7mastery(learner, _p$4.id) };
      _tmp$3 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP38code305510moonmentor10moonmentor6Report(learner, _tmp, _tmp$2, _p, _M0FP38code305510moonmentor10moonmentor8diagnose(learner, attempts), _M0FP38code305510moonmentor10moonmentor13plan__session(learner, concepts, exercises, budget_minutes));
}
function _M0FP48code305510moonmentor3web6bridge7analyze(curriculum_text, attempts_text, exercises_text, budget_minutes, format) {
  let _try_err;
  _L: {
    const _bind = _M0FP38code305510moonmentor10moonmentor17parse__curriculum(curriculum_text);
    let concepts;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      concepts = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP38code305510moonmentor10moonmentor15parse__attempts(attempts_text);
    let attempts;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      attempts = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0FP38code305510moonmentor10moonmentor16parse__exercises(exercises_text);
    let exercises;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      exercises = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const report = _M0FP38code305510moonmentor10moonmentor21plan__with__exercises(concepts, attempts, exercises, budget_minutes);
    return format === "json" ? _M0FP38code305510moonmentor10moonmentor12report__json(report) : _M0FP38code305510moonmentor10moonmentor12report__text(report);
  }
  const _ParseError = _try_err;
  const _message = _ParseError._0;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"error\":\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _message);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"}");
  return _string_builder.val;
}
export { _M0FP48code305510moonmentor3web6bridge7analyze as analyze }
