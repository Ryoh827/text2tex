## text2tex

テキストで書いた文章を LaTex の段落形式で出力する

個人の環境用なので別途調整してください。

```sh
yarn build
node ./dist/index.js hoge
```

Input:
`./text/hoge.txt`

```text
hoge.
hoge.
hoge.

fuga.
fuga.
fuga.

piyo.
piyo.
piyo.
```

Output: `./out/hoge.tex`

```tex
\hoge{
　hoge.hoge.hoge.\\
　fuga.fuga.fuga.\\
　piyo.piyo.piyo.\\
}
```
