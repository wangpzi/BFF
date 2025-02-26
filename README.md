# 项目名称

## 项目简介

简要介绍项目的目的和功能。

## 目录结构

```
BFF
├── app.ts             # 项目入口文件
├── assets             # 静态文件
├── config             # 配置文件
├── interface          # 接口
├── logs               # 日志
├── middlewares        # 中间件
├── router             # 路由
├── services           # 服务
├── typings            # 类型定义文件
├── views              # 模板文件
├── tsconfig.json      # TypeScript 配置文件
├── package.json       # 项目依赖和脚本
└── README.md          # 项目说明文件
```

## 安装步骤

1. 克隆项目到本地：
   ```sh
   git clone <仓库地址>
   ```

## 路由
1. 前端路由 /about
2. 后端路由 /api/list
### 技术点
**DI (Dependency Injection 依赖注入)**  
将对象依赖关系从内部创建转为**外部传递**，降低耦合度。  
- **示例**：类 `A` 依赖 `B`，通过构造函数/Setter 注入 `B` 的实例。  
- **类型**：构造函数注入、Setter 注入、接口注入。  
- **用途**：解耦、易测试（如 Mock 替换真实依赖）。  

**AOP (Aspect-Oriented Programming 面向切面编程)**  
将**横切关注点**（如日志、事务）从业务代码中剥离，集中管理。  
- **核心概念**：  
  - **切面（Aspect）**：封装通用逻辑（如 `@Transactional`）。  
  - **切点（Pointcut）**：定义在何处应用切面（如 `execution(* com.service.*.*(..))`）。  
  - **通知（Advice）**：切面逻辑的执行时机（如 `@Before`, `@Around`）。  
- **实现**：动态代理（JDK/CGLIB）、字节码增强（如 AspectJ）。  

**IOC (Inversion of Control 控制反转)**  
将对象创建与流程控制的权力交给**容器/框架**，而非程序员硬编码。  
- **传统控制流**：代码主动创建依赖（`new Service()`）。  
- **IOC 控制流**：容器创建对象并注入（如 Spring 管理 Bean 生命周期）。  
- **与 DI 关系**：DI 是实现 IOC 的具体手段之一（另一手段如服务定位器）。  

---

**三者协作场景（以 Spring 为例）**  
1. **IOC 容器**管理所有 Bean 的生命周期。  
2. **DI** 通过 `@Autowired` 将依赖自动注入到 Bean 中。  
3. **AOP** 通过 `@Aspect` 统一处理事务、日志等横切逻辑。  

**类比理解**  
- **IOC** 像餐厅的后厨调度系统：食客不用自己做饭，系统分配厨师（控制权反转）。  
- **DI** 是具体的上菜方式：服务员端菜（构造函数）或自助取餐（Setter）。  
- **AOP** 像餐厅的监控系统：统一记录客流、清洁等非核心但必要的行为。