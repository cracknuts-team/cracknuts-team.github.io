# 快速开始

推荐在开启虚拟环境进行开发，如`conda`、`vevn`、`virtualenv`。

## 国内镜像优化

### pip 镜像配置

- 阿里镜像（推荐）

  ```shell
  pip config set global.index-url https://mirrors.aliyun.com/pypi/simple
  pip config set install.trusted-host mirrors.aliyun.com
  ```

- 清华镜像（暂时不推荐，镜像仓库没有同步cracknuts库）

  ```shell
  pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
  pip config set install.trusted-host pypi.tuna.tsinghua.edu.cn
  ```

## 安装

### 纯Python环境

```shell
pip install cracknuts
```

### 在 `Jupyter` 运行 

```shell
pip install cracknuts-panel
pip install jupyter=
```

安装成功后，按照下图运行成功即可

![image-20241027143300952](asset/jupyter-demo.png)

### 安装`Scarr`（可选）

`Cracknuts`推荐使用`scarr`[https://github.com/decryptofy/scarr.git](https://github.com/decryptofy/scarr.git)框架进行分析，如果采用，则按照如下命令进行安装：

1. 下载或克隆scarr仓库到本地
2. 进入仓库目录
3. 执行如下命令

```shell
# 克隆仓库
git clone https://github.com/decryptofy/scarr.git
# 进入仓库目录
cd scarr
# 安装
pip install .
```



## 采集波形

todo

## 分析波形

todo

