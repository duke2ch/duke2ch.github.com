---
# ヘッダ情報は YAML Front Matter 記法で書きます。
layout: default
permalink: /:categories/:title.html # optional
published: false                    # optional
date: YYYY-MM-DD                    # optional
title: 記事のタイトル
description: 記事の概要を 1 行で書きます。
category: 'Name of Category' # 'Duke Nukem 3D' 'Duke Nukem Forever' 'Wiki'
tags:
- 'Tag'
- 'Another tag'
---

見出し 1
========

記事の内容は Markdown 記法で書きます。拡張子を .textile にすれば Textile 記法でも書けます。

見出し 2
________

本文の段落はこんな感じです。
改行は行末に半角スペース 2 つ入れないと無視されます。

段落を変えるときは、1 行空けて書きます。改行しただけだと、同じ段落として処理されます。

### 見出し 3

* リスト項目その 1
    * ネスト項目その 1
    * ネスト項目その 2
* リスト項目その 2
* リスト項目その 3

1. 番号付きリスト項目その 1
2. 番号付きリスト項目その 2

#### 見出し 4

[リンクはこんな感じ。](http://example.com/)

![画像のタイトル](http://example.com/example.png)
画像はこんな感じで挿入できます。

HTML も普通に挿入できます。

<p>ブロック要素も<em>インライン要素も</em>制限なく挿入できます。</p>

HTML と同じで、予約語や特殊文字は HTML エンティティとして記入します。

* &amp; ＆
* &lt; &gt; ＜＞
* &copy; (c)

 などなど。
