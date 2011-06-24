---
layout: default
title: Unreal Engine
description: Duke Nukem Forever で使用されている Unreal Engine に関する情報。
categories:
- 'Duke Nukem Forever'
---

Unreal Engine とは....
======================

(後で書く)

設定
====

設定ファイルの保存先は Steam Cloud 上になっているため、基本的にはローカルでのバックアップや変更等を出来ません。

カスタマイズ
============

コンソールの有効化
------------------

標準では Unreal Engine 由来のコンソール機能を使用することは出来ません。現状ではメモリハックによって実現可能になっています。また SOS コンソールを有効にした後、ゲーム内でコマンドを実行した場合、実績の解除が行われないようです。

1. [Flawless Widescreen](http://www.flawlesswidescreen.org/) をダウンロードする。
2. ダウンロードしたファイルを適当な場所 (展開場所によっては起動時エラーが出て使用不能になるバグがある) に展開し、Flawless Widescreen を起動する。
3. Duke Nukem Forever を起動する。
4. Alt + Tab 等で Flawless Widescreen に切り替える。
5. Flawless Widescreen の Show Log Window 項目の Do It ボタンをクリックする。
6. コンソールウィンドウが表示される。
7. コンソールウィンドウに `set input Tilde ShowControls | Type` と入力し確定する。
8. 以降、ゲーム内で `~` キーを押下すれば in-game の SOS コンソールが表示される。

コンソールコマンド
------------------

SOS コンソールか Flawless Widescreen のコンソールより、Unreal Engine 由来のコマンドと DNF で追加されたコマンドが実行出来ます。Unreal Engine 由来のコマンドは下記の wiki より確認できます。

* [Legacy:Console Commands/Client Only Console Commands - Unreal Wiki](http://wiki.beyondunreal.com/Legacy:Console_Commands/Client_Only_Console_Commands)

`set` コマンドで変更した値は設定ファイルに保存されるので、再度変更するまで有効です。それ以外のコマンドはコマンド実行時のみ有効です (再起動等でリセットされる)。

### Bumpmap の改善

1. コンソールを呼び出す。
2. コンソールに `r_bumpmipbias -1` と入力し確定する。

### DOF の無効化

1. コンソールを呼び出す。
2. コンソールに `r_dofpow 0` と入力し確定する。

### FOV の変更

1. コンソールを呼び出す。
2. コンソールに `fov 85` と入力し確定する。

ただし Duke が死ぬと初期値にリセットされてしまうようです。 Flawless Widescreen で対応した方が良いかもしれません。

`set Engine.PlayerPawn DefaultFOV 85` のがいいかも?

### マウスアクセラレーションの変更

1. コンソールを呼び出す。
2. コンソールに `set Engine.PlayerPawn MouseAccelDampening 0.0001` と入力し確定する。

### マウス感度の変更

1. コンソールを呼び出す。
3. コンソールに `set Engine.PlayerPawn MouseSensitivity 10.65` と入力し確定する。
