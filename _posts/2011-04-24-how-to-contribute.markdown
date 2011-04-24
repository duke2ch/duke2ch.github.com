---
layout: default
title: 編集方法
description: 当 wiki の編集方法についてまとめてあります。
categories:
- 'Wiki'
---

Wiki 編集に関心を持ってくれた Duke ファンへ
===========================================

なんで GitHub?

というのがあるかも知れませんが、これは完全に趣味です。VCS じゃ色々敷居が高いというのもあると思います。まぁ趣味なので目をつぶって下さい。ごめんなさい。Markdown 記法は個々に違う wiki 記法よりエコだと思うし、差分管理も GitHub のリッチな web インターフェースと Git の強力な DVCS で楽々... と、きっとメリットもあるはず..!?

これを機会に GitHub デビューなんかしたいって事なら練習台がてら、編集してみませんか(笑) 管理人もアマチュアですので、ご安心を。

編集者の資格は...
-----------------

資格はいりません。編集したい方は誰でも編集して下さって結構です。ただし;

* GitHub のアカウント
* バージョン管理システム (=VCS) と Git の基本的な理解
* CMS として使用している Jekyll の基本的な理解

上記の 3 つが必要になります。

あと GitHub 上での運用なので、匿名編集は難しいです... ごめんなさい。

編集するには...
---------------

### 1. GitHub のアカウントを取得

* [GitHub に登録](https://github.com/signup/?locale=ja)

上のリンクから GitHub のユーザーアカウントを作ります。無料アカウントで結構です。もう持ってる人は、わざわざ新しく作らなくても結構です。

アカウントを作ったらログインしておいて下さい。

### 2. Wiki 用のアカウントをフォロー

* [Wiki 用のアカウントページ](http://github.com/duke2ch)

上のリンクを開いて右中央上らへんの「フォロー」ボタンを押してフォローして下さい。Twitter みたいなもんです。フォロー確認できたアカウントは貢献者として是非を問わず登録させてもらいます。尚、フォロー確認は手作業なので時間かかる場合があります。フォローしてメッセージを送ってもらえると確実だと思います。

貢献者として登録されると自分のアカウント宛に登録完了の通知が行きます。そうしたら編集が自由にできるようになります。

### 3. 編集する

コマンドラインからでしたら以下のような感じで、まずローカルにデータをコピーして下さい。 Windows だったら、[TortoiseGit](http://code.google.com/p/tortoisegit/) 辺り、Mac OS X だったら [Gitti](http://www.gittiapp.com/) か [GitX](http://gitx.frim.nl/) がラクチンだと思います。

    mkdir ./duke2ch
    cd ./duke2ch
    git clone git@github.com:duke2ch/duke2ch.github.com.git ./duke2ch

これで現在の wiki データがローカルにコピーされます。あとは編集をして適当に `add`, `commit`, `push origin` してやれば基本的には OK です。まずは `_posts` ディレクトリ以下の記事の編集から始めてみるのが良いと思います。

### 4. いざ編集! でもその前に...

編集はまとめてドカンとより、細かく細かく分けて編集を繰り返すのが望ましいです。大量の編集・変更は、[事前に他の編集者にその是非を問いましょう。](https://github.com/duke2ch/duke2ch.github.com/issues)

あとは Git なので fork して自分のリポジトリで大幅改変を行って、実際それを見せて是非を問う等、VCS の利点を生かした貢献の仕方を考えられるとベターだと思います。

関連リンク
----------

* [GitHub Pages](http://pages.github.com/)
* [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki)
* [Liquid Wiki](https://github.com/tobi/liquid/wiki)
* [Daring Fireball: Markdown Syntax Documentation](http://daringfireball.net/projects/markdown/syntax)
* [PHP Markdown Extra](http://michelf.com/projects/php-markdown/extra/)
