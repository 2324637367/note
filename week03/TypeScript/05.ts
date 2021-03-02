
// 模块： “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”
// import * as valid from './050' 全部导入
  interface StringVli{
    isAcceptable(s:string):boolean;
}
export{StringVli as Valied}//导出语句
//全部导出 export * from './05'

