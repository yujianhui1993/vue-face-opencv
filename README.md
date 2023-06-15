# face

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

> 特别鸣谢：其中图片裁剪使用了开源的 vue-cropper，我在其中参考了几个版本，改了一点代码，由于这个是事后写的，参考的几位作者一时找不到了。如果有谁知道可联系我
> 我加上作者来源。

### 准备工作

1. OpenCVjs 文件
2. 人脸检测参考点文件（提供给opencv使用）


#### OpenCVjs 文件

> 这个文件怎么获取，我代码中有提供，网上也有教程，如何去生成js文件。由于我的重心不在这，我也是采用了别人生成好的文件。你可以自己生成，也可以采用我的。

#### 人脸检测文件

> 这份文件也是我网上搜索的 haarcascade_frontalface_default.xml, 目前用起来还可以。检测也正常。

