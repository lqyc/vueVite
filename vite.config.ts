// https://vitejs.dev/config/
import path from 'path';
import ip from 'ip';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";

export default defineConfig({
  base: './', //打包路径
  //  生产环境
  build: {
    //指定输出路径
    assetsDir: "./",
    // 指定输出文件路径
    outDir: "dist",
    // 代码压缩配置
    terserOptions: {
    // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // rollup 配置
    rollupOptions: {
      output: {
          manualChunks(id: any): string {
              if (id.includes("style.css")) {
                  // 需要单独分割那些资源 就写判断逻辑就行
                  return 'src/style.css';
              }
              // // 最小化拆分包
              if (id.includes("node_modules")) {
                  return id
                          .toString()
                          .split("node_modules/")[1]
                          .split("/")[0]
                          .toString();
              }
          }
      }
    }
  },
  // 服务配置
  server:{
    host: ip.address()||'0.0.0.0',
    port: 8088,// 端口号    
    // open: true,// 自动在浏览器打开    
    https: false,// 是否开启 https
    hotOnly: true, //是否开启热更新
    proxy: {
      '/apiMock': {
        target: "http://localhost:8989/testapi",
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apiMock': ''   //需要rewrite的,
        }
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver()
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Android >= 4.4", "iOS >= 8"],
        }),
        postCssPxToRem({ // 自适应，px>rem转换
          rootValue: 16, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ],
    },
  },
});