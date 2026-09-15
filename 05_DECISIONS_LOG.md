# tane DECISIONS LOG

## Reference Site
### Decision
https://rashiks.com/

### Use
- Design philosophy
- Information hierarchy
- WHY → HOW → WHAT
- Psychology flow
- Whitespace / photography / typography based organization

### Do Not Copy
- Brand
- Service
- Copy
- Color
- Logo
- Photography
- Exact layout
- Proprietary UI

## Main Target
### Decision
開業1〜5年程度の小規模店舗オーナー。

### Reason
すでに店舗としての魅力は存在する一方、
ブランド表現が整理されていない状態を
taneのサービス価値と自然につなげられるため。

## Core Problem
### Decision
自分の店らしさを、言葉とデザインの判断基準として持てていない。

## Essential Value
### Decision
自分の店の魅力を、自信を持って伝え続けられる。

## Brand Name
### Decision
tane

### Rejected
- moto
- naka
- ito
- tone

### Reason
「すでに店の中にあるブランドの種を見つける」というBrand Conceptとの接続が自然なため。

## Brand Concept
### Decision
店らしさは、つくるのではなく見つける。

## Brand Message
### Decision
店らしさは、もうそこにある。

## Hero Main Copy
### Decision
整える前に、見つけよう。

## Hero Sub Copy
### Decision
店を始めた理由、
選んできたもの、
大切にしていること。

そこから、伝え方の軸を一緒に見つけます。

## CTA
### Decision
お店のことを話してみる

## Main CV
### Decision
30分オンライン無料相談フォーム。

## Design Direction
### Decision
Editorial & Natural

### Ratio
Editorial 80% / Warm & Friendly 20%

## Service Plans
### BRAND FOUNDATION
約4週間 / 88,000円（税込）

### BRAND + WEB
約8〜10週間 / 220,000円（税込）

## Case Study
### Decision
開業3年目の架空焼き菓子店を使用する。

### Purpose
ブランド伴走という見えにくいサービスを、
Before → Discovery → Brand Axis → After で可視化する。

## Image Planning
### Decision
写真が不要なセクションには無理に写真を置かない。
写真は装飾ではなく、店にある価値・日常・痕跡を伝える証拠として使用する。

### Initial Planned Count
初期計画では候補15素材。
うちCase Study関連6素材。

現在の正式採用数は、後述の「Image Asset Formalization」を正とする。

## Image Asset Formalization

### Decision

- 正式採用画像は14素材とする
- HeroのみSP / PC別画像を正式採用する
- その他の画像は原則SP / PC共通とする
- 正式採用画像14素材すべてをプロジェクトへ格納済みとする
- `case_after_package-card.png` は正式採用済み・格納済みとする
- 元PNGは現段階では画質・ピクセル寸法・形式を変えずに保存する
- WebP変換、圧縮、リサイズはPerformance工程まで実施しない

### Stored Date

2026年9月8日

## Logo Formalization

### Decision

tane正式Logoとして、lowercase Serif Wordmarkを採用する。

### File

`assets/images/logo/tane_logo.png`

### Role

Header / Footer等で使用するMain Wordmark。

### Reason

- Hero HeadingのSerif Directionと調和する
- 小さなお店向けサービスの静かなEditorial感に合う
- 装飾を増やさずブランド認知を作れる

## Hero Supporting Visuals

### Decision

PC Hero下部のSupporting Visualとして、以下の3画像を正式採用する。

- Shop Interior：`assets/images/hero/hero_thumb_shop-interior.png`
- Baked Goods：`assets/images/hero/hero_thumb_baked-goods.png`
- Packaging：`assets/images/hero/hero_thumb_packaging.png`

### Purpose

Hero Main Photoだけでは伝えきれない次の要素を、小さな3ビジュアルで補足する。

- 店内
- 商品
- 包装 / 店舗接点

これらは装飾目的ではなく、taneが扱う「店そのものの魅力」を短時間で伝えるために使用する。

今回の追加正式化により、正式ビジュアルは写真17点とロゴ1点の合計18点となる。

## Implementation Preflight

### Header

Sticky Headerを正式採用する。

- SP：tane Wordmark + Menu Button。CTAはMenu内を基本とする
- PC：tane Wordmark + Navigation + CTA
- Visual：Warm Off White系背景。必要な場合のみThin Border。強いShadowとGlassmorphismは使わない

長いLPでCase Studyなど下部を読んでいるユーザーも主要NavigationとCTAへ戻りやすくしながら、Header自体はコンパクトに保ち、静かなEditorial Directionを維持するため。

### Hero Layout

- SP：Service Category → Main Copy → Sub Copy → CTA → SP Photo
- PC 1024px以上：Full Photo + Left Overlay Copyを第一候補とし、この案から実装検証を開始する
- PC Fallback：Photo + Text 2 Columns

PCでは正式画像の左側にある静かな余白を活かし、写真とメッセージを一つの情景として伝える。Contrast不足、人物との干渉、1366 / 1440pxでの構図崩れ、可読性低下がある場合のみ2カラムへ変更する。

### Color Direction

| Role | Color |
|---|---|
| Background | `#F8F6F1` |
| White | `#FFFEFB` |
| Main Text | `#332F2A` |
| Sub Text | `#6F6961` |
| Border | `#D8D2C8` |
| Main Accent | `#66705C` |
| Warm Supporting | `#A1846B` |

写真自体が色を担い、UIはWhite / Text / Thin Borderを中心とする。Accentを広い背景へ大量使用せず、ベージュ一色の画面にしない。実装時にContrastを確認し、必要な場合のみ微調整する。

### Typography Direction

- Heading：Serif系日本語書体。`Noto Serif JP`系候補
- Body / UI：Sans Serif系日本語書体。`Noto Sans JP`系候補

SerifはHero Main Copy、Section Heading、Brand Messageなどの世界観を担い、Sans Serifは本文、Navigation、Button、Form、FAQ、Planなどの情報理解を担う。ページ全体をSerifにはしない。具体的なFont Family、Weight、Loading方法は実装開始時に確定する。

### Process PC Layout

PCでもTalk → Discover → Define → Express → Growの時間順序を縦方向に維持する。横5カード / 横Timelineにはしない。

Processは比較ではなく順番に意味がある工程情報であり、縦順の方が内容を自然に追え、Editorial Directionも維持できるため。PCでは左にSection Intro、右にVertical Listを置く2カラムを候補とする。

### FAQ

複数項目を同時に開けるAccordionを正式採用する。一つを開いても他を自動で閉じない。各質問は`button`を使い、`aria-expanded`、`aria-controls`、Keyboard操作、約44px以上のTap Targetへ対応する。

### Contact Form

ポートフォリオ用Demo Formとし、外部サービスやメールへの実送信は行わない。Validation成功後にページ内でSuccess Stateを表示し、架空サービスのため実際には送信されていないことを明示する。`label`、Error Message、`aria-live`、Focus Managementを検討する。

### Image Optimization

正式PNG原本を維持し、Mobile実装 → Responsive実装 → 実表示サイズ監査 → WebP最適化 → 最適化前後の容量記録の順で進める。

レイアウト確定前に画像を最適化すると必要表示サイズを正しく判断できず、再生成や画質不足につながるため、WebP化はResponsive完成後のPerformance工程で行う。Heroは`picture`要素でSP / PCを切り替え、Lazy Loadしない。FV外は`loading="lazy"`と`decoding="async"`を検討する。

### Image Optimization Production Decision

2026年9月15日のPerformance工程で、正式画像18点を次の方針により最適化した。

- 正式PNG 18点はMaster Assetとして削除・上書きせず、原寸のまま維持する
- Web本番では、同一basenameで生成したWebP 18点を使用する
- 375 / 390 / 768 / 1024 / 1366 / 1440pxの実表示サイズを監査し、Retina 2xを必要解像度の基準とする
- Hero SP / PCは元解像度を維持し、quality 88で画質を優先する
- Philosophy、About、Deliverables、Case After Webなど細部が重要な写真はquality 86〜88を基本とする
- Service、Case Study通常写真、Hero Supporting Visualはquality 82〜84を基本とし、表示寸法に対して過剰なピクセル数を削減する
- Logoは最大表示幅128pxに対して512 × 171pxとし、透明エッジを維持するlossless WebPを採用する
- Logoは206,797 bytesから12,200 bytesへ94.1%削減でき、透過品質を維持できるためPNG参照を継続しない
- Production画像合計は36,852,110 bytesから1,971,458 bytesへ削減し、全体削減率は94.7%とする
- HeroはLazy Loadせず`fetchpriority="high"`を維持する
- Hero Supporting VisualはHero構成の一部として通常読み込みを維持し、FV外の写真は`loading="lazy"`と`decoding="async"`を維持する

### Metadata and Social Preview

2026年9月16日に、MetadataとSocial Previewを次の方針で正式化した。

- titleは「tane｜小さなお店のためのブランド伴走サービス」とする
- descriptionは「店を始めた理由や、大切にしていることから「店らしさ」を見つけ、言葉とデザインの軸へ。taneは、小さなお店のWeb・SNS・写真・紙ものまで一貫して整えるブランド伴走サービスです。」とする
- OGP画像は、taneのWordmark、Service Category、Main Copy、店主と店舗空間を一枚で伝えられる正式ビジュアルを採用する
- OGP / X共通画像はSNS共有で標準的に扱いやすい1200 × 630 pxのPNGとする
- faviconは、縮小時にもブランドを識別しやすい「t」のBrand Markを採用し、32px / 48px PNGと両サイズを内包したICOを用意する
- canonicalと`og:url`は、公開URL確定後に同一の正式URLを設定する。それまでは仮のGitHub Pages URLを推測で記載しない
- `og:image`と`twitter:image`は公開前のみプロジェクト相対パスを使用し、公開時に絶対URLへ更新する

### Production Metadata

2026年9月16日、GitHub Pagesの公開完了後にProduction Metadataを正式化した。

- 正式公開URLは`https://coconattsu0723.github.io/tane-brand-partner-lp/`とする
- canonicalは正式公開URLを設定する
- `og:url`は正式公開URLを設定する
- `og:image`は`https://coconattsu0723.github.io/tane-brand-partner-lp/assets/images/ogp/ogp_tane.png`を設定する
- `twitter:image`は`og:image`と同じProduction絶対URLを設定する
- title、description、OGP / Twitter Cardの文言・画像寸法・alt、およびfavicon参照は公開前に確定した値を維持する

### alt Direction

すべての写真へ一律に詳しいaltを付けない。ページ理解に必要か、本文ですでに同じ意味を説明しているか、装飾目的かを周辺文脈から判断する。本文で工程を十分説明している画像は`alt=""`も候補とし、最終文言は実装時に決定する。

### Decision Date

2026年9月8日
