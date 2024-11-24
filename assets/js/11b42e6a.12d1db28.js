"use strict";(self.webpackChunkcracknuts_website=self.webpackChunkcracknuts_website||[]).push([[3343],{8028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>_,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api2/acquisition","title":"Acquisition","description":"Acquisition is responsible for managing the process of waveform data acquisition.","source":"@site/docs/api2/acquisition.md","sourceDirName":"api2","slug":"/api2/acquisition","permalink":"/docs/api2/acquisition","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"toc_max_heading_level":2}}');var i=t(4848),o=t(8453);const _={toc_max_heading_level:2},s="Acquisition",a={},c=[{value:"Acquisition",id:"acquisition-1",level:2},{value:"<em>class</em> cracknuts.acquisition.acquisition.Acquisition(cracker, trace_count=1000, sample_length=-1, sample_offset=0, data_length=0, trigger_judge_wait_time=0.05, trigger_judge_timeout=1.0, do_error_handler_strategy=0, do_error_max_count=-1, file_format=&#39;scarr&#39;, file_path=&#39;auto&#39;)",id:"class-cracknutsacquisitionacquisitionacquisitioncracker-trace_count1000-sample_length-1-sample_offset0-data_length0-trigger_judge_wait_time005-trigger_judge_timeout10-do_error_handler_strategy0-do_error_max_count-1-file_formatscarr-file_pathauto",level:3},{value:"DO_ERROR_HANDLER_STRATEGY_CONTINUE_UNTIL_MAX_ERROR_COUNT <em>: <code>int</code></em> <em>= 1</em>",id:"do_error_handler_strategy_continue_until_max_error_count--int--1",level:4},{value:"DO_ERROR_HANDLER_STRATEGY_EXIT <em>: <code>int</code></em> <em>= 0</em>",id:"do_error_handler_strategy_exit--int--0",level:4},{value:"STATUS_RUNNING <em>: <code>int</code></em> <em>= 2</em>",id:"status_running--int--2",level:4},{value:"STATUS_STOPPED <em>: <code>int</code></em> <em>= 0</em>",id:"status_stopped--int--0",level:4},{value:"STATUS_TESTING <em>: <code>int</code></em> <em>= 1</em>",id:"status_testing--int--1",level:4},{value:"<em>static</em> builder()",id:"static-builder",level:4},{value:"config_cracker()",id:"config_cracker",level:4},{value:"config_scrat()",id:"config_scrat",level:4},{value:"connect_cracker()",id:"connect_cracker",level:4},{value:"connect_net()",id:"connect_net",level:4},{value:"connect_scrat()",id:"connect_scrat",level:4},{value:"<em>abstract</em> do()",id:"abstract-do",level:4},{value:"dump_config(path=None)",id:"dump_configpathnone",level:4},{value:"get_last_wave()",id:"get_last_wave",level:4},{value:"get_status()",id:"get_status",level:4},{value:"<em>abstract</em> init()",id:"abstract-init",level:4},{value:"load_config_from_file(path)",id:"load_config_from_filepath",level:4},{value:"load_config_from_str(json_str)",id:"load_config_from_strjson_str",level:4},{value:"on_run_progress_changed(callback)",id:"on_run_progress_changedcallback",level:4},{value:"on_status_changed(callback)",id:"on_status_changedcallback",level:4},{value:"on_wave_loaded(callback)",id:"on_wave_loadedcallback",level:4},{value:"pause()",id:"pause",level:4},{value:"pre_do()",id:"pre_do",level:4},{value:"pre_init()",id:"pre_init",level:4},{value:"resume()",id:"resume",level:4},{value:"run(count=1, sample_length=1024, sample_offset=0, data_length=None, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None, file_format=&#39;scarr&#39;, file_path=&#39;auto&#39;)",id:"runcount1-sample_length1024-sample_offset0-data_lengthnone-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone-file_formatscarr-file_pathauto",level:4},{value:"run_sync(count=1, sample_length=1024, sample_offset=0, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None, file_format=&#39;scarr&#39;)",id:"run_synccount1-sample_length1024-sample_offset0-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone-file_formatscarr",level:4},{value:"set_cracker(cracker)",id:"set_crackercracker",level:4},{value:"stop()",id:"stop",level:4},{value:"test(count=-1, sample_length=None, sample_offset=None, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None)",id:"testcount-1-sample_lengthnone-sample_offsetnone-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone",level:4},{value:"test_sync(count=-1, sample_length=None, sample_offset=None, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None)",id:"test_synccount-1-sample_lengthnone-sample_offsetnone-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone",level:4},{value:"transfer()",id:"transfer",level:4}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"acquisition",children:"Acquisition"})}),"\n",(0,i.jsx)(n.p,{children:"Acquisition is responsible for managing the process of waveform data acquisition."}),"\n",(0,i.jsx)(n.h2,{id:"acquisition-1",children:"Acquisition"}),"\n",(0,i.jsxs)(n.h3,{id:"class-cracknutsacquisitionacquisitionacquisitioncracker-trace_count1000-sample_length-1-sample_offset0-data_length0-trigger_judge_wait_time005-trigger_judge_timeout10-do_error_handler_strategy0-do_error_max_count-1-file_formatscarr-file_pathauto",children:[(0,i.jsx)(n.em,{children:"class"})," cracknuts.acquisition.acquisition.Acquisition(cracker, trace_count=1000, sample_length=-1, sample_offset=0, data_length=0, trigger_judge_wait_time=0.05, trigger_judge_timeout=1.0, do_error_handler_strategy=0, do_error_max_count=-1, file_format='scarr', file_path='auto')"]}),"\n",(0,i.jsxs)(n.p,{children:["\u57fa\u7c7b\uff1a",(0,i.jsx)(n.code,{children:"ABC"})]}),"\n",(0,i.jsxs)(n.h4,{id:"do_error_handler_strategy_continue_until_max_error_count--int--1",children:["DO_ERROR_HANDLER_STRATEGY_CONTINUE_UNTIL_MAX_ERROR_COUNT ",(0,i.jsxs)(n.em,{children:[": ",(0,i.jsx)(n.code,{children:"int"})]})," ",(0,i.jsx)(n.em,{children:"= 1"})]}),"\n",(0,i.jsxs)(n.h4,{id:"do_error_handler_strategy_exit--int--0",children:["DO_ERROR_HANDLER_STRATEGY_EXIT ",(0,i.jsxs)(n.em,{children:[": ",(0,i.jsx)(n.code,{children:"int"})]})," ",(0,i.jsx)(n.em,{children:"= 0"})]}),"\n",(0,i.jsxs)(n.h4,{id:"status_running--int--2",children:["STATUS_RUNNING ",(0,i.jsxs)(n.em,{children:[": ",(0,i.jsx)(n.code,{children:"int"})]})," ",(0,i.jsx)(n.em,{children:"= 2"})]}),"\n",(0,i.jsxs)(n.h4,{id:"status_stopped--int--0",children:["STATUS_STOPPED ",(0,i.jsxs)(n.em,{children:[": ",(0,i.jsx)(n.code,{children:"int"})]})," ",(0,i.jsx)(n.em,{children:"= 0"})]}),"\n",(0,i.jsxs)(n.h4,{id:"status_testing--int--1",children:["STATUS_TESTING ",(0,i.jsxs)(n.em,{children:[": ",(0,i.jsx)(n.code,{children:"int"})]})," ",(0,i.jsx)(n.em,{children:"= 1"})]}),"\n",(0,i.jsxs)(n.h4,{id:"static-builder",children:[(0,i.jsx)(n.em,{children:"static"})," builder()"]}),"\n",(0,i.jsx)(n.h4,{id:"config_cracker",children:"config_cracker()"}),"\n",(0,i.jsx)(n.h4,{id:"config_scrat",children:"config_scrat()"}),"\n",(0,i.jsx)(n.h4,{id:"connect_cracker",children:"connect_cracker()"}),"\n",(0,i.jsx)(n.p,{children:"Connect to cracker device.\r\n:return:"}),"\n",(0,i.jsx)(n.h4,{id:"connect_net",children:"connect_net()"}),"\n",(0,i.jsx)(n.h4,{id:"connect_scrat",children:"connect_scrat()"}),"\n",(0,i.jsx)(n.p,{children:"Connect to scrat device\r\n:return:"}),"\n",(0,i.jsxs)(n.h4,{id:"abstract-do",children:[(0,i.jsx)(n.em,{children:"abstract"})," do()"]}),"\n",(0,i.jsx)(n.h4,{id:"dump_configpathnone",children:"dump_config(path=None)"}),"\n",(0,i.jsxs)(n.p,{children:["Dump the current config to a JSON file if a path is specified, or to a JSON string if no path is specified.\r\n:type path: ",(0,i.jsx)(n.code,{children:"str"}),"\r\n:param path: the path to the JSON file\r\n:rtype: ",(0,i.jsx)(n.code,{children:"str"})," | ",(0,i.jsx)(n.code,{children:"None"}),"\r\n:return: the content of JSON string or None if no path is specified."]}),"\n",(0,i.jsx)(n.h4,{id:"get_last_wave",children:"get_last_wave()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd4\u56de\u7c7b\u578b:"}),"\r\n",(0,i.jsx)(n.code,{children:"dict"}),"[",(0,i.jsx)(n.code,{children:"int"}),", ",(0,i.jsx)(n.code,{children:"ndarray"}),"] | ",(0,i.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"get_status",children:"get_status()"}),"\n",(0,i.jsxs)(n.h4,{id:"abstract-init",children:[(0,i.jsx)(n.em,{children:"abstract"})," init()"]}),"\n",(0,i.jsx)(n.h4,{id:"load_config_from_filepath",children:"load_config_from_file(path)"}),"\n",(0,i.jsxs)(n.p,{children:["Load config from a JSON file\r\n:type path: ",(0,i.jsx)(n.code,{children:"str"}),"\r\n:param path: the path to the JSON file"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd4\u56de\u7c7b\u578b:"}),"\r\n",(0,i.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"load_config_from_strjson_str",children:"load_config_from_str(json_str)"}),"\n",(0,i.jsxs)(n.p,{children:["Load config from a JSON string\r\n:type json_str: ",(0,i.jsx)(n.code,{children:"str"}),"\r\n:param json_str: the JSON string"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd4\u56de\u7c7b\u578b:"}),"\r\n",(0,i.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"on_run_progress_changedcallback",children:"on_run_progress_changed(callback)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd4\u56de\u7c7b\u578b:"}),"\r\n",(0,i.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"on_status_changedcallback",children:"on_status_changed(callback)"}),"\n",(0,i.jsx)(n.p,{children:"User should not use this function. If you need to perform actions when the ACQ state changes,\r\nplease use the node functions in the ACQ lifecycle point: init, do, and finish."}),"\n",(0,i.jsx)(n.p,{children:"status: 0 stopped, 1 testing, 2 running 3 paused"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd4\u56de\u7c7b\u578b:"}),"\r\n",(0,i.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"on_wave_loadedcallback",children:"on_wave_loaded(callback)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd4\u56de\u7c7b\u578b:"}),"\r\n",(0,i.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"pause",children:"pause()"}),"\n",(0,i.jsx)(n.h4,{id:"pre_do",children:"pre_do()"}),"\n",(0,i.jsx)(n.h4,{id:"pre_init",children:"pre_init()"}),"\n",(0,i.jsx)(n.h4,{id:"resume",children:"resume()"}),"\n",(0,i.jsx)(n.h4,{id:"runcount1-sample_length1024-sample_offset0-data_lengthnone-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone-file_formatscarr-file_pathauto",children:"run(count=1, sample_length=1024, sample_offset=0, data_length=None, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None, file_format='scarr', file_path='auto')"}),"\n",(0,i.jsx)(n.h4,{id:"run_synccount1-sample_length1024-sample_offset0-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone-file_formatscarr",children:"run_sync(count=1, sample_length=1024, sample_offset=0, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None, file_format='scarr')"}),"\n",(0,i.jsx)(n.h4,{id:"set_crackercracker",children:"set_cracker(cracker)"}),"\n",(0,i.jsx)(n.h4,{id:"stop",children:"stop()"}),"\n",(0,i.jsx)(n.h4,{id:"testcount-1-sample_lengthnone-sample_offsetnone-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone",children:"test(count=-1, sample_length=None, sample_offset=None, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None)"}),"\n",(0,i.jsx)(n.h4,{id:"test_synccount-1-sample_lengthnone-sample_offsetnone-trigger_judge_wait_timenone-trigger_judge_timeoutnone-do_error_max_countnone-do_error_handler_strategynone",children:"test_sync(count=-1, sample_length=None, sample_offset=None, trigger_judge_wait_time=None, trigger_judge_timeout=None, do_error_max_count=None, do_error_handler_strategy=None)"}),"\n",(0,i.jsx)(n.h4,{id:"transfer",children:"transfer()"})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>_,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function _(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:_(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);