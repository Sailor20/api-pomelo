# 文档说明
### 版本说明
| 版本        | 时间           | 备注  |
| :--------: |:-------------:| :-----|
| 1.0.1      | 2017-05-01    | 用户注册/登录/获取房间登录token |

### 请求地址
请求地址由两部分组成：**请求域名** + **接口路径**
   * 测试环境域名：http://api.test.dlkj.com
   * 生产环境域名：http://api.dlkj.com
   ---
   * 登录接口路径为: /v1/users/login
     1. 测试环境接口地址：http://api.test.dlkj.com/v1/user/login
     2. 生产环境接口地址：http://api.dlkj.com/v1/user/login

**文档中所有的接口路径事例均为测试环境下的接口路径**

### 请求方式
1. http 接口提交数据，应答字段以json封装。
2. socket长连接，直接调用服务端rpc方法请求数据
### 通用字段说明
#### 公共返回字段说明 
| 字段        | 类型      | 选项  | 说明 |
| :--------: |:--------:|:-----|:------------------|
| code      | Number    | 必填   |错误码 |
| msg       | String    | 必填   |错误描述 |
| data      | Object    | 可选   |返回数据内容 |

*注:如果接口本身没有数据需要返回，则无data字段*

### 公共请求参数
#### 需要token的接口需要在请求header中添加以下参数
| 字段        | 类型      | 选项  | 说明 |
| :--------: |:--------:|:-----|:------------------|
| token      | String    | 必填   |登录成功时，接口返回的token |

### 错误码
| 数值       | 说明 |
| :-------- | :------------------|
| 0         |  成功               |
| 1         |  失败               |
| 500       |  系统错误            |
| 401       |  token过期          |
| 1001      |  token不正确         |
| 1002      |  创建token失败       |
| 1003      |  token缺失          |
| 1004      |  手机号码不正确       |
| 1100      |  用户不存在          |
| 1101      |  用户名已存在        |
| 1102      |  用户名或密码错误     |
| 1103      |  重复登入           |
| 1104      |  重复登出           |
