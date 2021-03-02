// 内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”，
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}