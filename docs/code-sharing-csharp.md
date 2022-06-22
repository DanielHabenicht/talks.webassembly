# Code-Sharing C# 

## Used Projects

- [DotNetJS](https://github.com/Elringus/DotNetJS)
- Future: [DotNet-Wasi-SDK](https://github.com/SteveSandersonMS/dotnet-wasi-sdk)

### Bugs

> Currently only works with Angular 12 
 - https://github.com/Elringus/DotNetJS/issues/53


## Try Out

```bash
# Compile the C# Code to WebAssembly 
cd ./WASMLib
dotnet publish -c Release

# Run the Demo
cd ../WebAssemblyDemo
dotnet run
> info: Microsoft.Hosting.Lifetime[14]
>      Now listening on: https://localhost:7005
> info: Microsoft.Hosting.Lifetime[14]
>      Now listening on: http://localhost:5025
> info: Microsoft.Hosting.Lifetime[0]
>      Application started. Press Ctrl+C to shut down.
> info: Microsoft.Hosting.Lifetime[0]
>      Hosting environment: Development
> info: Microsoft.Hosting.Lifetime[0]
>      Content root path: /workspaces/talks.webassembly/WebAssemblyDemo/
```
Visit the Link and navigate to the "Forms" Tab. 


## How to add to your project

1. 



## Workarounds

1. Add to your polyfills: 
```js
var getGlobal: any = function () {
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    /** @ts-ignore */
    if (typeof global !== "undefined") {
    /** @ts-ignore */
        return global;
    }
    throw new Error("unable to locate global object");
};
(window as any).global = getGlobal();
``` 
2. Add to your package.json: 
```json
  "browser": {
    "fs": false,
    "os": false,
    "path": false
  }
```
 


