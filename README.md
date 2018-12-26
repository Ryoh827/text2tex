## text2tex

テキストで書いた文言を tex の段落形式で出力する

```sh
yarn build
node ./dist/index.js hoge
```

Input:
`hoge.txt`

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

Output: `hoge.tex`

```tex
\hoge{
　hoge.hoge.hoge.\\
　fuga.fuga.fuga.\\
　piyo.piyo.piyo.\\
}
```
