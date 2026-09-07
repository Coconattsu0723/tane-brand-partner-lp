# tane｜Layout & Wireframe Direction

## 1. このドキュメントの役割

このドキュメントは、tane LPをHTML / CSS / JavaScriptで実装する前に、全16セクションの情報順序、SPレイアウト、PC展開、画像配置、余白、操作、アクセシビリティを固定するためのワイヤー設計正本である。

対象はレイアウトと情報構造のみ。色・書体・余白の最終px値、細部の装飾、アニメーション仕様は実装前または実装検証時に確定する。

既存正本との役割分担は次のとおり。

- 企画・コピー・サービス内容：`00_PROJECT_BRIEF.md`
- セクション順と心理導線：`01_CONTENT_STRUCTURE.md`
- デザイン原則：`02_DESIGN_RULES.md`
- 正式画像パスと寸法：`03_IMAGE_ASSETS.md`
- HTML・アクセシビリティ・性能：`04_IMPLEMENTATION_RULES.md`
- 決定履歴：`05_DECISIONS_LOG.md`
- 画像配置とVisual Direction：`06_IMAGE_AND_DESIGN_DIRECTION.md`
- レイアウトとワイヤー：本ドキュメント

画像については、実際に格納済みのPNGパスを記録した`03_IMAGE_ASSETS.md`を正とする。

---

## 2. Layout Principles

### Mobile First

375pxを基準に、コンテンツの意味と読む順序を一列で成立させる。その後、390 / 768 / 1024 / 1366 / 1440pxで段階的に広げる。

| 確認幅 | 主な確認内容 |
|---:|---|
| 375px | 基準ワイヤー、最小余白、改行、Tap Target、画像の見切れ |
| 390px | 端末差による改行と余白の崩れがないか |
| 768px | コンテナ導入、限定的な2カラム化、Menu切替候補 |
| 1024px | 写真と文章の2カラム、比較レイアウト、HeroのPC構成 |
| 1366px | 標準PCでの最大幅、行長、写真サイズ、余白バランス |
| 1440px | 余白が広がりすぎないか、コンテンツが散らばらないか |

PC化は「画面が広いから横並びにする」のではなく、次のいずれかを満たす場合だけ行う。

- 左右を同時に見ることで関係が理解しやすくなる
- 比較がしやすくなる
- 写真と文章を近くに置くことで意味が伝わりやすくなる
- 操作順や時間軸を壊さず、視線移動を減らせる

読む順序や時間軸に意味がある場合は、PCでもDOM順と縦方向の流れを維持する。

### Design Direction

正式方向は**写真主体の静かなエディトリアルLP**。

- Quiet
- Editorial
- Photo-led
- Airy
- Warm
- Honest
- Unstaged
- Small-shop friendly

`assets/images/case-study/case_after_web.png`内のPCサイトから、写真と文字の距離、静かな余白、控えめなTypography、白ベースの軽さ、読み物的な情報密度を参考にする。焼き菓子店サイトのコピーや具体的UIは再現しない。

### Color Direction

現時点の正式実装候補は次のとおり。実装時に本文、補助文字、Border、Button、Focus表示のContrastを確認し、必要な場合のみ値を微調整する。

| Role | Color | Direction |
|---|---|---|
| Background | `#F8F6F1` | Paper White / Warm Off White。ページの基本背景 |
| White | `#FFFEFB` | Formや一部の明るい領域 |
| Main Text | `#332F2A` | Deep Brown / Charcoal。Headingと本文の基本色 |
| Sub Text | `#6F6961` | Supporting Copy、Caption、補助情報 |
| Border | `#D8D2C8` | Thin Border |
| Main Accent | `#66705C` | Muted Olive。CTAや小さな強調へ限定 |
| Warm Supporting | `#A1846B` | 必要最低限の温かな補助色 |

- 写真自体が主要な色を担う
- UIはWhite / Text / Thin Borderを中心にする
- Accentを広い背景面積へ大量使用しない
- ベージュ一色のサイトにせず、明度差と文字色で情報階層をつくる

### Typography Direction

**HeadingはSerif系、Body / UIはSans Serif系**を正式方向とする。

| Role | Direction | Use |
|---|---|---|
| Heading | 日本語Serif。`Noto Serif JP`系候補 | Hero Main Copy、Section Heading、Brand Messageなど短い重要コピー |
| Body / UI | 日本語Sans Serif。`Noto Sans JP`系候補 | 本文、Navigation、Button、Form、FAQ、Plan、補助情報 |

役割は**Serif = 世界観、Sans = 情報理解**。ページ全体をSerifにはしない。具体的な`font-family`、Weight、配信・Loading方法は実装開始時に確認して正式決定する。

### Content Width

- SP：左右に安全なPage Gutterを置き、本文・画像とも画面端へ密着させない
- 768px：本文の行長を制御するContent Widthと、写真を広く見せるWide Widthを分け始める
- 1024px以上：本文、標準コンテンツ、Wide Imageの最大幅を用途別に分ける
- 1366 / 1440px：コンテンツ自体を無制限に広げず、外側余白を増やす

本文は横幅いっぱいに伸ばさず、日本語の1行が長くなりすぎない幅に制限する。写真は本文より広くできるが、重要な被写体が画面端へ追いやられないようにする。

### Spacing Scale

最終px値は未確定とし、次の相対関係で設計する。

| Token | 用途 |
|---|---|
| XL | セクション間、Problem Insightの「間」、Hero / Final CTAの大きな呼吸 |
| Large | セクション上下、Headingと主要コンテンツの間、工程ブロック間 |
| Medium | HeadingとBody、写真と説明、Form Group間 |
| Small | LabelとHeading、項目内の関連要素、補足文との間 |
| XS | 同一情報内の密接な組み合わせ。金額と税込表記など |

余白は装飾ではなく、情報のまとまりと切り替わりを伝える。すべてを広くするのではなく、同じ意味の要素は近く、意味が変わる箇所は遠くする。

### Typography Hierarchy

基本優先順位は次のとおり。

1. HeroのH1または各セクションのHeading
2. セクションの結論となるMain Message
3. Body
4. Supporting Copy
5. English Label / Step Label / Number

English Labelは補助情報であり、日本語Headingより目立たせない。サイズ差だけに頼らず、余白、ウェイト、行長で階層をつくる。

### Image Rules

- HeroのみSP / PC別画像を使う
- その他の画像はSP / PC共通で使う
- 写真は装飾ではなく、店の日常、対話、整理、展開を示す証拠として配置する
- 写真が不要なセクションには無理に置かない
- ワイヤー段階では画像枠の比率を実寸に合わせ、実装時のCLSを防ぐ
- `object-fit`による切り抜きを前提にせず、各確認幅で重要部分の見切れを確認する

最適化は次の順で行う。

1. PNG Originalを維持
2. Mobile Implementation
3. Responsive Implementation
4. Actual Display Size Audit
5. WebP Optimization
6. Before / After File Size Record

Heroは`picture`要素でSP / PC画像を切り替え、Lazy Loadしない。`fetchpriority="high"`を検討する。FV外の画像は`loading="lazy"`と`decoding="async"`を検討する。WebP化はResponsive完成後のPerformance工程で行い、正式PNG原本を上書きしない。

altは「写真だから詳しく書く」のではなく、ページ理解に必要か、本文が同じ意味を説明しているか、装飾目的かを周辺文脈から判断する。本文で工程を十分に説明できるService画像などは`alt=""`も候補とし、Mockup内の重要情報は本文でも提供する。

---

## 3. Page Flow

セクション順は変更しない。

1. Header
2. Hero
3. Problem
4. Problem Insight
5. Brand Philosophy
6. Service
7. Before / After
8. Deliverables
9. Case Study
10. Who It's For
11. Process
12. Plan
13. About
14. FAQ
15. Final CTA / Contact
16. Footer

心理導線は、**違和感 → 共感 → 問題認識 → 希望 → 解決理解 → 効果理解 → 具体化 → 証拠 → 自分ごと化 → 安心 → 判断 → 信頼 → 不安解消 → 行動**を維持する。

---

## 01 Header

### Purpose

ブランド名を認識できる状態を保ち、ページ内の主要情報と相談導線へ迷わず移動できるようにする。

### Content

- Skip Link
- tane Wordmark / Home Link
- Menu Button（SP候補）
- Navigation
- CTA「お店のことを話してみる」

Navigation候補は、Service / Case Study / Plan / About / FAQ / Contact。項目数は実装前に画面幅とラベル長を確認して絞る。

### SP 375px Layout

上からではなく同一行に、次の順で配置する。

1. 左：tane Wordmark
2. 右：Menu Button
3. Menu展開内：Navigation
4. Menu末尾：CTA

Header本体へCTAを常時追加すると窮屈になるため、375pxではMenu内を正式な基本配置とする。常時大きなCTAは固定表示しない。

### Image

使用しない。Wordmark、文字、細線だけで構成する。

### Typography Hierarchy

1. Wordmark
2. Navigation Label
3. CTA
4. Menuの補助Label

Wordmarkを過度に大きくせず、HeroのH1と競合させない。

### Spacing

- Header内上下：Small〜Medium
- Wordmarkと画面端：Page Gutter
- Menu内項目間：Medium
- NavigationとCTAの間：Large寄り

### Interaction

- Menu Buttonで開閉する
- `aria-expanded`と`aria-controls`を状態に同期する
- Escapeで閉じる候補
- Menu内Link選択後に閉じる
- Focusを見失わない

Sticky Headerを正式採用する。長いLPの下部やCase Studyを読んでいるユーザーが、主要NavigationとContact CTAへ戻りやすくなるためである。SPではWordmarkとMenu ButtonだけのコンパクトなHeaderを基本とし、CTAはMenu内に置く。常時大きなCTAを固定表示しない。

VisualはWarm Off White系の背景を基本とし、必要な場合のみThin Borderで本文と区切る。強いShadowとGlassmorphismは使わず、Hero写真より目立たせない。

### PC Direction

768pxではMenuのままでもよい。NavigationとCTAが無理なく収まる幅から、左にLogo、中央〜右にNavigation、最右にCTAを一行で配置する。1024px以上をPC Headerの有力な切替候補とし、PCでもStickyを維持する。

### Keep Vertical or Horizontal

PCでは横並びへ変更する。Logo、移動先、CTAを同時に確認でき、Headerの高さを抑えられるため。ただしNavigationが折り返す場合は切替幅を上げる。

### Accessibility Note

- Skip Linkを最初のFocus可能要素にする
- Menu ButtonのTap Targetは約44px以上
- Navigationには意味のある`aria-label`を付ける候補
- 現在位置を示す場合のみ`aria-current`を使う
- Focus中のOutlineを消さない

---

## 02 Hero

### Purpose

「見た目を整える前に、自分の店らしさを見つける」というtaneの視点を最初に伝え、写真の空気とコピーからサービスへの関心をつくる。

### Content

- Service Category「BRAND PARTNER FOR SMALL SHOPS」
- H1「整える前に、見つけよう。」
- Sub Copy
- CTA「お店のことを話してみる」
- 30分 / Online / 無料の補足
- Hero Visual

### SP 375px Layout

1. Service Category
2. H1
3. Sub Copy
4. CTA
5. SP Hero Visual

コピーを写真上に重ねず、白系のText Areaと縦長写真を分ける。相談条件の補足を表示する場合はCTAと同じグループ内に収め、CTAと写真の間へ独立した情報ブロックを増やさない。最初に意味を理解してから写真の空気を受け取れる順とし、375pxで文字の可読性を最優先する。

### Image

- SP：`assets/images/hero/hero_shop-owner-and-space_sp.png`
- PC：`assets/images/hero/hero_shop-owner-and-space_pc.png`

SP画像は原寸比率に近い縦長で大きく見せる。重要な店主と店舗空間を切らない。HeroはLazy Loadせず、実装時に`fetchpriority="high"`を検討する。

### Typography Hierarchy

1. H1
2. Sub Copy
3. CTA
4. Service Category
5. 相談条件

H1はページ内唯一の`h1`。写真に負けないが、広告的に巨大すぎないサイズと行長にする。

### Spacing

- HeaderとService Category：Medium
- CategoryとH1：Small
- H1とSub Copy：Medium
- Sub CopyとCTA：Medium
- Text Areaと写真：Large
- HeroとProblem：XL

### Interaction

CTAはContactへのページ内Link。静かなUnderlineまたは微細な移動程度のHoverとし、主役はコピーと写真に置く。

### PC Direction

1024px以上は、A案から実装検証を開始する。B案は条件を満たせない場合だけ使うFallbackとする。

**A. 写真全面＋左側余白にコピー（第一候補）**

- 1024px以上で横長PC画像を大きく使う
- 画像の左側余白へコピーを置く
- 写真とメッセージを一つの情景として受け取れる
- `case_after_web.png`の写真主体・静かなFVという設計思想に近い

**B. 写真＋テキスト2カラム（Fallback）**

- 左にText Area、右に写真を置く
- 背景に左右されずコントラストを安定させやすい
- 768〜1023px、またはA案で全確認幅の可読性が確保できない場合に適する

A案を第一候補とする理由は、正式PC画像の左側にある静かな余白を活かし、taneの「店の中にある魅力」を説明より先に空気として伝えやすいため。1024 / 1366 / 1440pxでContrast不足、人物との干渉、構図の崩れ、可読性低下がある場合のみB案へ切り替える。文字を読ませるための強いShadowやGlassmorphismは追加しない。768pxではSP型の上下構成またはB案を維持する。

### Keep Vertical or Horizontal

- 375〜767px：縦配置を維持
- 768〜1023px：縦配置または2カラムFallback
- 1024px以上：写真内配置を第一候補

写真内配置は単なる横並びではなく、写真の余白とコピーの意味を一体化できる場合だけ採用する。

### Accessibility Note

- 写真上へ文字を置く場合は、画像の明暗変化を含めて十分なコントラストを確認する
- Hero画像には内容を簡潔に伝えるaltを付ける
- CTAはLinkとして目的地が分かる文言を維持する
- 文字を画像化しない

---

## 03 Problem

### Purpose

小規模店舗オーナーの日常にある違和感を言語化し、「これは自分のことかもしれない」という共感をつくる。

### Content

- Section Label
- Heading / 導入文
- Instagramの写真選びに迷う
- Webが今の店の雰囲気と合わない
- 制作物ごとに雰囲気が変わる
- 店の良さを言葉で説明できない

### SP 375px Layout

1. Section Label
2. 短いHeadingまたは導入文
3. 困りごと4項目を一列で配置
4. 次のProblem Insightへつなぐ短い余韻

各項目はカードにせず、Numberまたは短いLeadと本文を細線で区切る。項目全体を一つの読み物としてスクロールできる構成にする。

### Image

使用しない。写真で状況を限定せず、読者自身の店へ置き換えやすくする。

### Typography Hierarchy

1. 困りごとの短いMain Text
2. Heading / 導入文
3. Section Label / Number
4. 補足文

4項目を同じ強さで並べ、特定の悩みだけを誇張しない。

### Spacing

- セクション上下：Large
- LabelとHeading：Small
- Headingと項目群：Large
- 各項目内：Small
- 項目間：Medium＋Thin Border

### Interaction

なし。Hover前提にせず、読むだけで内容が完結する。

### PC Direction

本文幅を抑えたまま、項目群をWide Widthへ広げる。1024px以上では「Number / 短いLead / 補足」を横方向の行として整理する候補とし、4枚カードや均等Gridにはしない。

### Keep Vertical or Horizontal

基本は縦配置を維持する。困りごとを順に読み、共感を積み上げる役割があるため。PCでは各項目の内部だけを横並びにして視線移動を整える。

### Accessibility Note

- 単なる装飾記号ではなく`ul`など意味のある一覧を使う
- 薄い文字色だけで優先度を表現しない
- Numberは読み上げが不要なら装飾として扱う

---

## 04 Problem Insight

### Purpose

表面的な不統一から、「店らしさの判断軸を持てていない」という本質的な課題へ認識を一段深める。同時に、情報密度を落として次のBrand Philosophyを受け取るための「間」をつくる。

### Content

- Main Message

> 揃っていないのは、
> デザインではなく、
> 軸かもしれません。

- 必要な場合のみ短いSupporting Copy

### SP 375px Layout

1. 大きな上余白
2. Main Message
3. 必要最小限のSupporting Copy
4. 大きな下余白

要素数を増やさず、一画面に近い呼吸をつくる。

### Image

使用しない。TypographyとWhitespaceだけで意味を切り替える。

### Typography Hierarchy

1. Main Message
2. Supporting Copy

改行は意味のまとまりを優先し、「デザインではなく」と「軸」を対比させる。

### Spacing

- 上下：XL
- Main Message内部の行間：広め
- Main MessageとSupporting Copy：Medium

### Interaction

なし。Scroll Animationを入れる場合も意味理解に不要な演出は避ける。

### PC Direction

文字を横に広げすぎず、Content Width内に置く。1024px以上では中央寄せまたは余白を活かした左寄せを比較し、前後セクションとの流れで決める。背景色変更は必須としない。

### Keep Vertical or Horizontal

全幅で単一カラムを維持する。ここは比較や複数情報ではなく、一つの気づきを静かに受け取る場所だからである。

### Accessibility Note

- 見た目の改行のためだけに複数Headingへ分割しない
- `h2`と一続きの文としてマークアップする
- 文字色のコントラストを確保する

---

## 05 Brand Philosophy

### Purpose

店らしさは外から作るのではなく、開業理由、商品選び、接客、空間、過ごしてほしい時間の中にすでにあると伝える。

### Content

- Section Label
- Heading「店らしさは、もうそこにある。」
- Body
- 店の中にある材料の例
- Philosophy Photo

### SP 375px Layout

1. Section Label
2. Heading
3. Body
4. 必要なら材料の短い列挙
5. Photo

文章を理解した後に写真を見ることで、写真内の手元やノートを「店らしさの手がかり」として読める順にする。

### Image

`assets/images/philosophy/philosophy_hands-and-notes.png`

SP / PC共通。3:2比率を基本に、手元・ノート・商品の関係が切れないように置く。

### Typography Hierarchy

1. Heading / Brand Message
2. Body
3. 材料の例
4. Section Label

Headingを広告コピーのように強くしすぎず、Bodyと一続きの読み物にする。

### Spacing

- セクション上下：XL寄り
- LabelとHeading：Small
- HeadingとBody：Medium
- BodyとPhoto：Large
- 材料の列挙内：Small

### Interaction

なし。写真のHover拡大はLinkではないため原則不要。

### PC Direction

1024px以上では写真と文章をほぼ対等な幅の2カラムにする。文章を左、写真を右の第一候補とし、前のProblem Insightから自然にHeadingへ入れるようにする。768pxでは上下配置を維持し、本文の行長だけ制御する。

### Keep Vertical or Horizontal

- SP / 768px：縦配置
- 1024px以上：横並び

PCで横並びにするのは、文章に書かれた「日常の手がかり」と写真の内容を同時に見比べられるため。

### Accessibility Note

- 写真が内容理解を補うため、文脈に沿ったaltを付ける
- 材料の例が一覧なら`ul`を使う
- 見た目の左右順とDOM順を一致させる

---

## 06 Service

### Purpose

taneが行うことを、Discover / Define / Expressの連続した3工程として具体的に理解してもらう。

### Content

- Section Label
- Section Heading
- Section Intro
- 01 Discover / 見つける
- 02 Define / 整える
- 03 Express / つなげる
- 各工程のStep Label、Heading、Photo、Short Body

### SP 375px Layout

1. Section Label
2. Section Heading
3. Section Intro
4. Discover：Step Label → Heading → Photo → Short Body
5. Define：Step Label → Heading → Photo → Short Body
6. Express：Step Label → Heading → Photo → Short Body

1工程ずつ十分な余白で読み、上から下へ「対話 → 整理 → 接点化」が崩れないようにする。カード枠では囲わない。

### Image

- Discover：`assets/images/service/service_discover_conversation.png`
- Define：`assets/images/service/service_define_brand-sheet.png`
- Express：`assets/images/service/service_express_touchpoints.png`

3枚ともSP / PC共通、3:2。写真サイズをそろえ、同じサービス内の連続性を示す。

### Typography Hierarchy

1. 各工程Heading
2. Section Heading
3. Short Body
4. Step Label / Number
5. Section Label

英語名と日本語名を近くに置き、別情報に見えないようにする。

### Spacing

- セクション上下：XL
- Section Introと最初の工程：Large
- 工程間：XL
- Step LabelとHeading：Small
- HeadingとPhoto：Medium
- PhotoとShort Body：Medium

### Interaction

なし。工程をCarouselやTabにせず、3工程を常に読める状態にする。

### PC Direction

比較候補は次の2案。

**A. 3カラム**

- 3工程を同時に俯瞰できる
- ただし写真と文章が小さくなり、3カードに見えやすい
- 流れより比較の印象が強くなる

**B. 大きな写真＋文章の交互レイアウト（採用候補）**

- 各工程の写真を十分な大きさで見せられる
- 読み物的なリズムが生まれる
- 工程の順序を縦方向に維持できる
- カードテンプレート感を避けられる

Editorial Directionに合うためB案を第一候補とする。1024px以上で各工程を写真と文章の2カラムにし、Discoverは文章＋写真、Defineは写真＋文章、Expressは文章＋写真のように視覚上交互にできる。ただしDOM順は常にStep Label → Heading → Photo / Bodyの意味順を保ち、CSS Gridで配置する。768pxでは縦配置を維持する。

### Keep Vertical or Horizontal

工程全体の縦順はすべての幅で維持する。1024px以上では各工程の内部だけ横並びにする。工程は比較対象ではなく時間順なので、3工程を一列の横カードにはしない。

### Accessibility Note

- 3工程は意味のある`ol`候補
- Step Numberを画像内に埋め込まない
- 視覚上交互にしてもDOM順を入れ替えない
- 各写真のaltは工程の違いが伝わる内容にする

---

## 07 Before / After

### Purpose

ブランド整理の効果を、「ダサいからおしゃれになる」ではなく、「判断基準がない状態から、店らしい共通の軸を持てる状態になる」と概念的に理解してもらう。

### Content

- Section Label
- Heading
- Before：判断がその場ごとに変わる状態
- Transition：taneで店らしさを発見・整理する
- After：共通の軸から各接点を判断できる状態
- 「全部を同じ見た目にすることではない」という補足

### SP 375px Layout

1. Section Label
2. Heading
3. Before Label
4. Beforeの短い状態説明
5. Thin Line＋Transition Copy
6. After Label
7. Afterの短い状態説明
8. Supporting Copy

BeforeからAfterへ自然に縦スクロールするだけで変化が理解できる構造にする。

### Image

使用しない。Case Study本編のBefore画像と重複させず、ここでは概念理解に集中する。

### Typography Hierarchy

1. Before / Afterの状態を示すMain Text
2. Heading
3. Transition Copy
4. Label
5. Supporting Copy

Afterだけを派手な色や大きさで勝者のように扱わない。

### Spacing

- セクション上下：Large〜XL
- Headingと比較：Large
- Before / Transition / After間：Medium〜Large
- Supporting Copy前：Medium

### Interaction

なし。SliderによるBefore / After比較は見た目の変化を示すUIになりやすいため採用しない。

### PC Direction

768px以上でBeforeとAfterを2カラムにし、中央にTransitionを置く候補。左右を同時に見比べることで「判断の変化」が理解しやすくなる。説明量が増えて高さが不均衡になる場合は1024pxまで縦型を維持する。

### Keep Vertical or Horizontal

- SP：縦配置
- PC：比較が一望できる幅で横並び

ここは同時比較が目的なので横並びに意味がある。ただしDOM順はBefore → Transition → Afterを維持する。

### Accessibility Note

- 色や矢印だけでBefore / Afterを区別せず、明確なテキストLabelを付ける
- 読み上げ順をBefore → Transition → Afterにする
- 否定的・侮蔑的な表現を避ける

---

## 08 Deliverables

### Purpose

相談や対話だけで終わらず、今後の制作判断に使える`tane Brand Sheet`が手元に残る安心感を具体化する。

### Content

- Section Label
- Heading
- Short Description
- Deliverables Photo
- Brand Sheetの10項目
- 使い方を示すSupporting Copy

### SP 375px Layout

1. Section Label
2. Heading
3. Short Description
4. Photo
5. Brand Sheet項目一覧
6. Supporting Copy

写真で成果物の実在感を示してから、何が含まれるかを読める順にする。

### Image

`assets/images/deliverables/deliverables_brand-sheet.png`

SP / PC共通、4:3。資料表紙と見開きの関係が分かるサイズを確保する。

### Typography Hierarchy

1. Heading
2. Short Description
3. 項目名
4. Supporting Copy
5. Section Label / Number

10項目を10枚のカードにせず、番号付きの一覧または2列になり得るテキストリストとして扱う。

### Spacing

- セクション上下：XL
- HeadingとDescription：Medium
- DescriptionとPhoto：Large
- Photoと項目一覧：Large
- 項目間：Small＋必要ならThin Border

### Interaction

なし。資料Preview Modalは現段階では設けない。

### PC Direction

1024px以上で左に写真、右にHeading / Description / 項目一覧を置く2カラムを第一候補とする。項目一覧は右カラム内で2列化できるが、読み順が蛇行しないように行方向または列方向を明確にする。768pxでは写真と文章を上下にする。

### Keep Vertical or Horizontal

- SP / 768px：縦配置
- 1024px以上：横並び

成果物の見た目と内容を同時に確認でき、「手元に残るもの」が理解しやすくなるため横並びにする。

### Accessibility Note

- 10項目は`ol`候補
- 写真のaltはBrand Sheetの外観と用途を簡潔に伝える
- 小さな資料内文字を読ませる前提にせず、内容はHTMLテキストでも提供する

---

## 09 Case Study

### Purpose

ブランド伴走という見えにくいサービスを、開業3年目の架空焼き菓子店が変化する過程として具体化し、taneの進め方と成果に根拠を与える。

### Content

- Section Label
- Heading
- Case概要
- 01 Before
- 02 Discovery
- 03 Brand Axis
- 04 After Web
- 05 After Social
- 06 After Package / Card
- Caseの結論

### SP 375px Layout

1. Section Label
2. Heading
3. Case概要
4. Before：Step Label → Heading → Body → Image
5. Discovery：Step Label → Heading → Body → Image
6. Brand Axis：Step Label → Heading → Body → Image
7. After Web：Step Label → Heading → Body → Image
8. After Social：Step Label → Heading → Body → Image
9. After Package / Card：Step Label → Heading → Body → Image
10. Caseの結論

工程順を絶対に崩さない。各工程はThin Borderと大きめの工程間余白で区切り、カードの集合ではなく一つの長い記事として見せる。

### Image

工程順に次を使う。

1. `assets/images/case-study/case_before_touchpoints.png`
2. `assets/images/case-study/case_discovery_bakery-owner.png`
3. `assets/images/case-study/case_brand-axis-board.png`
4. `assets/images/case-study/case_after_web.png`
5. `assets/images/case-study/case_after_social.png`
6. `assets/images/case-study/case_after_package-card.png`

すべてSP / PC共通。画像ごとの原寸比率を尊重し、After Socialの縦長画像を他と同じ高さへ無理に切りそろえない。Image Size Variationを情報のリズムとして活かす。

### Typography Hierarchy

1. 各工程Heading
2. Section Heading
3. Case概要 / 各工程Body
4. Step Label / Number
5. Caseの結論

Step LabelとHeadingを必ず近くに置き、工程名と説明の対応を明確にする。

### Spacing

- セクション上下：XL
- Introと最初の工程：XL
- 工程間：XL＋Thin Border
- 工程内のHeadingとBody：Medium
- BodyとImage：Medium〜Large
- 最終画像と結論：Large

情報量が多いため、すべての余白を同じにせず、工程内より工程間を明確に広くする。

### Interaction

基本はなし。画像Gallery、Carousel、横スクロールにはしない。画像拡大が内容理解に必要と判明した場合のみ、Dialogのアクセシビリティを含めて別途検討する。

### PC Direction

PCでも6工程の縦時間軸を維持する。1024px以上では各工程内部を文章＋画像の2カラムにできるが、工程を複雑なMasonry Gridにしない。

- Before / Discovery / Brand Axis：流れを揃えたEditorial Row
- After Web：横長画像をWide Widthで大きく見せる
- After Social：縦長画像を狭めの幅で配置し、説明と並べる
- After Package / Card：4:3画像と結論を近づける

画像サイズの差は、情報の重要度と原寸比率に合わせて使い、装飾的な非対称Gridにしない。

### Keep Vertical or Horizontal

セクション全体は全幅で縦配置を維持する。工程の時間軸がCase Studyの理解そのものだからである。1024px以上で工程内部だけ横並びにし、文章と対応写真を同時に見られるようにする。

### Accessibility Note

- 6工程は`ol`または連続する`article`として構造化する
- DOM順を時間順に固定する
- 各画像に工程固有のaltを付ける
- Mockup画像内の重要情報は本文でも説明する
- 細線や画像サイズだけに構造を依存せずHeading階層を使う

---

## 10 Who It's For

### Purpose

読者がサービス対象に自分を重ね、「これは自分向けか」を短時間で判断できるようにする。

### Content

- Section Label
- Heading
- 開業して数年経った
- 店に愛着がある
- 世界観を大切にしている
- Web / SNSの見せ方に迷う
- 今ある良さを活かしたい
- 対象を限定しすぎない補足

### SP 375px Layout

1. Section Label
2. Heading
3. Short Intro
4. 対象条件5項目を一列で配置
5. Supporting Copy

大量のCheck IconやBoxを使わず、項目番号、Typography、Thin Borderで整理する。

### Image

使用しない。対象像を特定の人物写真へ狭めない。

### Typography Hierarchy

1. 各対象項目のMain Text
2. Heading
3. Short Intro
4. Section Label / Number
5. Supporting Copy

### Spacing

- セクション上下：Large〜XL
- Introと一覧：Large
- 各項目：Medium
- 項目間：Thin Border
- 一覧とSupporting Copy：Large

### Interaction

なし。Checkboxのような見た目は入力UIと誤認されるため避ける。

### PC Direction

1024px以上で、左にHeading / Intro、右に5項目の一覧を置く2カラム候補。項目自体は右カラム内で縦方向を維持する。768pxでは全体を一列にする。

### Keep Vertical or Horizontal

PCではセクションの導入と一覧を横並びにするが、一覧内部は縦配置を維持する。導入を読みながら対象条件を確認でき、カード化せずに視線を整理できるため。

### Accessibility Note

- 一覧は`ul`を使う
- 装飾Numberや記号は読み上げを重複させない
- Check Iconだけで対象条件を伝えない

---

## 11 Process

### Purpose

初めてブランドサービスを利用する人が、相談後の進み方と関わり方を予測できるようにし、不安を減らす。

### Content

- Section Label
- Heading
- Short Intro
- 01 Talk
- 02 Discover
- 03 Define
- 04 Express
- 05 Grow
- 期間や進行に関するSupporting Copy

### SP 375px Layout

1. Section Label
2. Heading
3. Short Intro
4. Talk
5. Discover
6. Define
7. Express
8. Grow
9. Supporting Copy

5工程を縦の時間軸として配置する。左のThin LineやNumberは補助とし、各StepのHeadingと説明だけでも順序が分かるようにする。

### Image

使用しない。Serviceの写真と重複させず、進行の理解に集中する。

### Typography Hierarchy

1. Step Heading
2. Section Heading
3. Step Description
4. Step Number / English Label
5. Supporting Copy

### Spacing

- セクション上下：XL
- IntroとTimeline：Large
- Step間：Medium〜Large
- NumberとStep Heading：Small
- TimelineとSupporting Copy：Large

### Interaction

なし。進行をAccordionへ隠さない。

### PC Direction

PCでもTalk → Discover → Define → Express → Growの縦順を正式に維持する。1024px以上では、左にPROCESS Label / Heading / Short Description、右に01〜05のVertical Listを置く2カラムを候補とする。右側の工程はThin Borderで区切り、横5カードや横Timelineにはしない。

### Keep Vertical or Horizontal

全確認幅で工程の縦配置を維持する。PCで横並びにするのはSection IntroとVertical Listの関係だけで、5工程自体は横へ並べない。Processは比較情報ではなく順番に意味がある工程情報であり、一般的な横5カードを避けることでEditorial Directionも維持できるため。

### Accessibility Note

- 工程は`ol`を使う
- Lineや位置だけで順序を示さず、Numberをテキストで持つ
- DOM順をTalk → Growで固定する

---

## 12 Plan

### Purpose

サービス範囲、期間、料金を比較できる判断材料として示し、自分に必要な支援の範囲を選べるようにする。

### Content

- Section Label
- Heading
- Plan Intro
- BRAND FOUNDATION
- 約4週間
- 88,000円（税込）
- FOUNDATIONの内容
- BRAND + WEB
- 約8〜10週間
- 220,000円（税込）
- BRAND + WEBの内容
- 共通事項 / 注記

### SP 375px Layout

1. Section Label
2. Heading
3. Plan Intro
4. BRAND FOUNDATION：Name → Duration → Price → Scope
5. BRAND + WEB：Name → Duration → Price → Scope
6. 共通注記

各Planを単独で理解できる順にし、左右比較を前提にしない。2つのBoxを縦に積む場合も、強いShadow、過度なRadius、「おすすめ」Badgeは使わない。

### Image

使用しない。価格と範囲の理解を優先する。

### Typography Hierarchy

1. Plan Name
2. Price
3. Scope Heading / 主な内容
4. Duration
5. 注記
6. Section Label

価格だけを過度に大きくせず、範囲・期間と同時に判断できる階層にする。

### Spacing

- セクション上下：XL
- IntroとPlan群：Large
- Plan内：Medium
- Plan間：Large
- Scope項目間：Small
- Plan群と注記：Medium

### Interaction

各Planに個別CTAを置くかは未確定。置く場合も同じContactへ移動し、選択Planをフォームへ引き継ぐ必要性を実装前に判断する。

### PC Direction

768pxまたは1024px以上で2プランを2カラムにし、Name / Duration / Price / Scopeの開始位置をそろえる。比較しやすさのため、内容行の意味を可能な範囲で対応させる。高さ合わせのために不自然な空白や固定高を作らない。

### Keep Vertical or Horizontal

- SP：縦配置
- PC：横並び

Planは同時比較することで違いが理解しやすいため、横並びに明確な理由がある。DOM順はBRAND FOUNDATION → BRAND + WEBとする。

### Accessibility Note

- Plan Nameは`h3`候補
- 料金、税込、期間の関係を読み上げ順でも明確にする
- 色だけで差や推奨を示さない
- Box全体をLinkにしない

---

## 13 About

### Purpose

誰が伴走するのか、なぜtaneを始めたのか、どのような姿勢で店主と向き合うのかを示して信頼をつくる。

### Content

- Section Label
- Heading
- Operator Photo
- Role「Brand Designer / Web Designer」
- taneを始めた理由
- 伴走姿勢
- 必要最小限のProfile

### SP 375px Layout

1. Section Label
2. Heading
3. Intro / taneを始めた理由
4. Photo
5. Role
6. 伴走姿勢
7. 必要な場合のみ短いProfile

実績の羅列より、「誰とどのように話すのか」が伝わる順にする。

### Image

`assets/images/about/about_designer-working.png`

SP / PC共通、約4:5。カメラ目線のPortraitとして切り抜かず、作業や対話の自然な様子を残す。

### Typography Hierarchy

1. Heading
2. taneを始めた理由 / 伴走姿勢
3. Role
4. Profile
5. Section Label

人物名や肩書だけを大きくしすぎず、姿勢を中心に読む階層とする。

### Spacing

- セクション上下：XL
- HeadingとIntro：Medium
- IntroとPhoto：Large
- PhotoとRole：Medium
- RoleとBody：Small〜Medium

### Interaction

なし。SNS Linkなどは運営設定と公開方針が確定した場合のみ追加する。

### PC Direction

1024px以上で写真と文章の2カラム。左に写真、右にHeading / Reason / Attitudeを置く第一候補。写真を本文よりやや狭くし、人物を広告モデルのように大きく見せすぎない。768pxでは上下配置を維持する。

### Keep Vertical or Horizontal

- SP / 768px：縦配置
- 1024px以上：横並び

人物の様子と伴走姿勢を同時に確認でき、信頼の根拠がつながるため横並びにする。

### Accessibility Note

- 写真のaltは作業・対話の様子を文脈に沿って伝える
- 肩書はHeading階層を不必要に増やさない
- Linkを追加する場合は目的を具体的にする

---

## 14 FAQ

### Purpose

相談直前に生じる具体的な不安を解消し、Contactへ進む判断を支える。

### Content

- Section Label
- Heading
- FAQ Intro
- 何も決まっていなくても相談できるか
- 今あるロゴを残せるか
- Web制作も依頼できるか
- 遠方でも相談できるか
- 期間はどれくらいか
- 飲食店以外でも相談できるか

### SP 375px Layout

1. Section Label
2. Heading
3. FAQ Intro
4. Accordion 6項目
5. 解決しない場合のContact案内

質問Buttonは行全体を押せるようにし、質問文と開閉Indicatorを同一行へ置く。

### Image

使用しない。質問と回答の読みやすさを優先する。

### Typography Hierarchy

1. Question
2. Heading
3. Answer
4. FAQ Intro / Contact案内
5. Section Label

QuestionとAnswerをサイズ差だけでなく、ウェイトと余白で区別する。

### Spacing

- セクション上下：XL
- IntroとAccordion：Large
- Question Button内：Medium
- Answer内：Medium
- 項目間：Thin Border

### Interaction

- `button`で開閉する
- `aria-expanded`を状態に同期する
- `aria-controls`で回答領域と関連づける
- Keyboardで操作できる
- Indicatorの向きだけで状態を伝えず、支援技術へ状態を渡す
- 複数項目を同時に開ける
- 一つを開いても他の項目を自動で閉じない

### PC Direction

AccordionはPCでも単一カラムを維持し、読みやすい最大幅へ制限する。左にSection Heading、右にAccordionを置く2カラムは1024px以上の候補だが、Accordion自体を2列へ分割しない。

### Keep Vertical or Horizontal

質問一覧は全幅で縦配置を維持する。質問から回答への操作順があり、2列にすると読む順とFocus移動が分かりにくくなるため。

### Accessibility Note

- ButtonのTap Targetは約44px以上
- Focus表示を明確にする
- 回答を非表示にする方法と読み上げ状態を一致させる
- JavaScriptが利用できない場合にも内容へ到達できる実装を検討する

---

## 15 Final CTA / Contact

### Purpose

ページ全体で理解と安心を得た読者を、30分のオンライン無料相談へ無理なくつなげる。

### Content

- Section Label
- Main Copy「まだ言葉になっていなくても、大丈夫です。」
- Supporting Copy
- CTA「お店のことを話してみる」
- 30分 / Online / 無料
- Contact Form
- 名前
- 店舗名
- 店舗ジャンル
- Web / SNS URL
- 今気になっていること
- 相談内容
- Privacyへの案内
- Submit Button
- 送信結果Message

### SP 375px Layout

1. Section Label
2. Main Copy
3. Supporting Copy
4. 相談条件
5. CTAまたはFormへの短い導入
6. Form Heading
7. 名前
8. 店舗名
9. 店舗ジャンル
10. Web / SNS URL
11. 今気になっていること
12. 相談内容
13. Privacy案内
14. Submit Button
15. 送信結果Message領域

フォームを最優先に、一列でLabel → Input → 補足 / Errorの順を保つ。背景装飾を増やさない。

### Image

使用しない。正式なFinal CTA専用画像はなく、コピーとFormの操作性を優先する。

### Typography Hierarchy

1. Main Copy
2. Form Heading
3. Field Label
4. Supporting Copy
5. Help / Error Text
6. Section Label / 相談条件

PlaceholderをLabelの代わりにしない。

### Spacing

- セクション上下：XL
- Main CopyとSupporting Copy：Medium
- 導入とForm：XL
- Form Group間：Medium〜Large
- LabelとInput：Small
- InputとHelp / Error：XS〜Small
- 最終FieldとSubmit：Large

### Interaction

- HeroやHeaderのCTAはこのFormへ移動する
- 必須 / 任意を明示する
- ErrorはField付近と必要に応じてSummaryで伝える
- 送信中、成功、失敗の状態を分ける
- 二重送信を防ぐ
- ポートフォリオ用Demo Formとし、外部サービスやメールへ実際の送信は行わない
- Validation成功後、ページ内にSuccess Stateを表示する
- Success Stateでは架空サービスのDemoであり、実際には送信されていないことを明示する

### PC Direction

1024px以上で左にMain Copy / Supporting Copy / 相談条件、右にFormを置く2カラムを候補とする。Form Fields自体は原則一列を維持する。名前と店舗名などを横並びにしても入力効率の改善が小さく、375pxとの構造差が増えるためである。768pxでは全体を一列にする。

### Keep Vertical or Horizontal

- SP / 768px：全体を縦配置
- 1024px以上：導入とFormのみ横並び候補
- Form内部：全幅で縦配置

PCの2カラムは、安心をつくるコピーを読みながらFormの全体量を把握できるため。操作順はForm内で縦に固定する。

### Accessibility Note

- すべての入力に表示された`label`を関連づける
- 関連項目は必要に応じて`fieldset` / `legend`を使う
- Errorは色だけで示さず、テキストと関連づける
- 送信結果には適切な`aria-live`を検討する
- InputとButtonのTap Target、Focus、Contrastを確認する
- URL Fieldなど適切なInput TypeとAutocompleteを検討する

---

## 16 Footer

### Purpose

ブランド名と最低限の補助導線を示し、Heroから続いた静かな世界観を保ったままページを閉じる。

### Content

- tane
- BRAND PARTNER FOR SMALL SHOPS
- Privacy
- Contact
- Copyright候補

### SP 375px Layout

1. tane Wordmark
2. Service Category
3. Privacy
4. Contact
5. Copyright候補

情報を追加しすぎず、一列で静かに終える。

### Image

使用しない。

### Typography Hierarchy

1. Wordmark
2. Privacy / Contact
3. Service Category
4. Copyright

### Spacing

- Footer上：XL
- WordmarkとCategory：Small
- CategoryとLinks：Large
- Link間：Medium
- Footer下：Large

### Interaction

Text LinkのUnderlineまたは色変化。過度なAnimationは使わない。

### PC Direction

1024px以上では左にWordmark / Category、右にPrivacy / Contactを横並びにする。Copyrightは下段または端に小さく置く。Footerの高さを無理に小さくせず、ページの終わりとして余白を残す。

### Keep Vertical or Horizontal

- SP：縦配置
- PC：ブランド情報と補助Linkを横並び

異なる種類の情報を左右へ分けると短時間で見つけやすくなり、Footerを簡潔に保てるため。

### Accessibility Note

- Link文言だけで移動先が分かるようにする
- 小さい補助文字も読めるサイズとContrastを確保する
- Wordmarkが画像の場合は代替テキストを用意する

---

## Mobile Design Principles

1. 375pxで意味順が成立するDOM構造を先に決める。
2. 390pxでは新しいレイアウトを作らず、改行と余白の安定性を確認する。
3. 原則一列とし、写真・Heading・Bodyの対応を近接で示す。
4. 横スクロール、Carousel、Tabで主要情報を隠さない。
5. Tap Targetは約44px以上とし、指で押しやすい間隔を確保する。
6. 写真を画面端へ無理に広げず、主役の見切れと周囲の呼吸を確認する。
7. 余白は一律ではなく、同一情報内を狭く、セクションや工程の切替を広くする。
8. Main Copy、Heading、Body、Supporting Copyの順がサイズ以外でも分かるようにする。
9. CTAを繰り返しすぎず、Header、Hero、Final CTAを主要導線とする。
10. まずHTMLの読む順を完成させ、PCでCSS配置を変えてもDOM順は維持する。

### なぜこの方針か

小さな画面では複数要素を同時に比較するより、意味の順に一つずつ読む方が理解しやすい。Mobile Firstは単に幅を狭くする作業ではなく、「このページで最初に伝えることは何か」を決める作業である。

---

## Desktop Expansion Principles

1. 768pxでは主にContent Widthと余白を整え、急いで多列化しない。
2. 1024px以上で、比較または写真と文章の同時理解に効果がある箇所だけ2カラム化する。
3. 1366 / 1440pxでは最大幅を保ち、行長と要素間距離が広がりすぎないようにする。
4. Heroは写真内余白へのコピー配置を第一候補とし、可読性を満たさなければ2カラムへ戻す。
5. ServiceとCase Studyは工程順を縦に保ち、工程内部だけを横並びにする。
6. Processは工程順を縦に保ち、Section IntroとVertical Listだけを横並び候補とする。
7. PlanとBefore / Afterは比較のため横並びにする。
8. 写真の比率と役割に応じて幅を変え、すべてを同じカードサイズへそろえない。
9. 外側余白が増えても文字や写真を無制限に拡大しない。

### なぜこの方針か

PCの広さは、要素数を増やすためではなく、関係する情報を同時に見せるために使う。横並びにする理由を「比較」「対応」「俯瞰」のいずれかで説明できない場合は、縦配置を維持する。

---

## Sections That Stay Vertical

| Section | 維持する範囲 | 理由 |
|---|---|---|
| Problem | 項目全体 | 共感を順に積み上げるため |
| Problem Insight | セクション全体 | 一つの気づきと「間」に集中するため |
| Service | 3工程の順序 | 対話 → 整理 → 接点化という時間順のため |
| Case Study | 6工程の順序 | Before → Afterの物語が理解の中心だから |
| Process | 5工程の順序 | 比較ではなく、順番に意味がある工程情報だから |
| Who It's For | 対象項目の一覧 | 項目を落ち着いて照合するため |
| FAQ | 質問一覧 | 操作順とFocus順を明確にするため |
| Contact Form | Form Field | 入力順を一貫させるため |

縦配置を維持しても、PCで何も変えないわけではない。本文幅、工程内部の2カラム、写真サイズ、余白を調整して、広い画面に合う読みやすさをつくる。

---

## Sections That Become Multi-column

| Section | 切替候補 | PC構成 | 横並びにする理由 |
|---|---:|---|---|
| Header | 1024px | Logo / Navigation / CTA | 移動先を一望し、高さを抑える |
| Hero | 1024px | 写真内コピー、またはText / Photo | 写真とメッセージを一体化する |
| Brand Philosophy | 1024px | Text / Photo | 日常の手がかりを文章と写真で対応させる |
| Service各工程 | 1024px | Text / Photo交互 | 工程順を保ちながら写真を大きく見せる |
| Before / After | 768〜1024px | Before / Transition / After | 判断の変化を同時比較する |
| Deliverables | 1024px | Photo / Details | 成果物の外観と内容を対応させる |
| Case Study各工程 | 1024px | Text / Photo | 工程説明と証拠写真を対応させる |
| Who It's For | 1024px | Intro / List | 導入と対象条件を見比べる |
| Process | 1024px | Intro / Vertical List | 工程順を保ったまま、導入と一覧の関係を整理する |
| Plan | 768〜1024px | Plan / Plan | 期間・価格・範囲を同時比較する |
| About | 1024px | Photo / Text | 人物の様子と姿勢を対応させる |
| FAQ | 1024px | Intro / Accordion | 質問自体は一列のまま導入と分ける |
| Final CTA / Contact | 1024px | Intro / Form | 安心をつくるコピーとForm量を同時に示す |
| Footer | 1024px | Brand / Links | 情報種別を簡潔に分ける |

Breakpointは上表の数値で即固定せず、内容が折り返さず、行長・画像・操作性が改善する最初の幅を実装時に決定する。

---

## Interaction Candidates

| Candidate | 必要性 | 現時点の方針 |
|---|---|---|
| Mobile Menu | SPでNavigationを簡潔に保つ | 採用。Keyboard / Focus / Escape対応を含める |
| Sticky Header | 長いLP内の再移動を助ける | 採用。コンパクトなWarm Off White背景＋必要ならThin Border |
| FAQ Accordion | 質問一覧を見渡しやすくする | 採用。複数同時Open、`button`とARIA状態を同期する |
| Anchor Scroll | CTAからContactへ移動する | 採用候補。固定Header使用時の隠れを防ぐ |
| Form Validation | 入力ミスを理解できるようにする | 採用。Error文とFieldを関連づける |
| Form Status | Demo送信の結果を伝える | 採用。Validation後にSuccess Stateを表示し、`aria-live`とFocus移動を検討する |
| Subtle Reveal | 読み進めるリズムを補助する | 任意。内容理解に不要なら使わない |
| Image Hover | Link画像の反応を示す | Linkの場合のみ微細に使用する |

強いParallax、意味のないScroll Animation、Carousel、横スクロール、過剰なHoverは採用しない。Motionを使う場合は`prefers-reduced-motion`へ配慮する。

---

## Implementation Risks

### 1. Heroの文字コントラスト

PC画像内の左側余白へコピーを置いても、端末幅や画像表示方法により背景の明暗が変わる可能性がある。1024 / 1366 / 1440pxで文字位置とコントラストを検証し、安定しなければText / Photoの2カラムへ切り替える。

### 2. 画像の原寸PNGが重い

正式原本はPNGのまま保持されている。実装時は原本を上書きせず、Performance工程でWebPなどの配信用画像を別途生成し、画質と容量を記録する。

### 3. Serviceの視覚順とDOM順

PCで交互レイアウトにすると、CSSの配置方法によって読み上げ順と見た目が一致しなくなる危険がある。HTMLは常に工程順・意味順で書き、CSS Gridで見た目だけを調整する。

### 4. Case Studyの長さ

6工程と6画像があるため、SPでは長いセクションになる。内容をCarouselやTabへ隠さず、工程内文章を短くし、工程間余白とHeadingで現在地を分かりやすくする。

### 5. After Socialの縦長比率

他のCase画像と同じ高さへ切り抜くと内容が欠ける可能性がある。固定高にせず、画像ごとの比率を保持して配置する。

### 6. ProcessのPC 2カラム

左のSection Introと右のVertical Listの高さが大きくずれる可能性がある。Introを不自然に固定せず、上端を合わせて工程の縦順と本文の読みやすさを優先する。

### 7. Planの高さ合わせ

2プランの内容量が異なる。固定高や大きな空白で無理にそろえず、比較する項目の開始位置をそろえる方法を優先する。

### 8. Accordionの状態管理

表示だけが開閉し、`aria-expanded`や回答領域の状態がずれる危険がある。Mouse、Keyboard、支援技術で同じ状態を受け取れるように実装する。

### 9. Demo Formの誤認

Success Stateだけを見ると実際に問い合わせが送信されたと誤認される可能性がある。送信処理を行わないことをSuccess Copyで明示し、入力内容を外部へ送らない実装にする。

### 10. 文字・余白の最終値とColor Contrast

ワイヤーのLarge / Medium / Smallをそのまま感覚で実装すると一貫性が崩れる。実装開始時にFont、Spacing Token、Content Widthを数値化し、正式候補Colorを実際の文字サイズ・UI状態でContrast確認する。

### 11. Sticky Headerによる表示の隠れ

Sticky HeaderがAnchor移動先のHeadingを覆う可能性がある。Header高をコンパクトに保ち、`scroll-margin`などで移動先が隠れないようにする。Navigation項目数とMobile Menu切替幅は実装前に確認する。

### 12. altと画像内文字

Case StudyのMockupには画面内文字が含まれる。重要情報を画像だけに依存させず、本文で意味を説明してから最終altを決める。

---

## Items to Decide Before Implementation

実装開始前に、次を確定または検証可能な候補へ絞る。

1. HeaderのNavigation項目とMobile Menuの切替幅
2. Hero Overlayの1024 / 1366 / 1440pxでのContrastとFallback条件該当有無
3. Content Width / Wide Width / Page Gutterの数値
4. Spacing Token（XL / Large / Medium / Small / XS）の数値
5. 使用Font、Weight、Heading / BodyのFluid Type Scale、Loading方法
6. 正式候補ColorのContrast確認と必要な微調整
7. Section背景色を切り替える箇所
8. Before / AfterとPlanを2カラムへ切り替える実Breakpoint
9. Contact Formの必須 / 任意、Validation、Privacy導線、最終Success Copy
10. 配信用画像形式・サイズと`srcset` / `sizes`
11. 周辺文脈を踏まえた各画像の最終alt
12. Motionを使う範囲と`prefers-reduced-motion`時の挙動

これらは見た目だけの選択ではなく、可読性、操作性、実装可能性を確認して決める。

---

## Implementation Preflight Decisions

| Item | Formal direction |
|---|---|
| Header | Sticky |
| SP Header | Wordmark + Menu Button。CTAはMenu内 |
| PC Header | Wordmark + Navigation + CTA。Sticky |
| SP Hero | Copy → Photo |
| PC Hero | Full Photo + Left Overlay Copyから実装検証を開始 |
| PC Hero Fallback | Photo + Text 2 Columns |
| Background | `#F8F6F1` |
| White | `#FFFEFB` |
| Main Text | `#332F2A` |
| Sub Text | `#6F6961` |
| Border | `#D8D2C8` |
| Accent | `#66705C` |
| Warm Supporting | `#A1846B` |
| Heading | Serif direction。`Noto Serif JP`系候補 |
| Body / UI | Sans Serif direction。`Noto Sans JP`系候補 |
| Process PC | Vertical order retained |
| FAQ | Multiple-open accordion |
| Form | Demo submission。外部送信なし |
| Hero Image | `picture`要素でSP / PC切替 |
| Other Images | SP / PC共通 |
| Image Optimization | Responsive実装後のPerformance工程 |
| alt | 周辺本文・必要性・装飾性から個別判断 |

---

## Final Layout Decision Summary

- 375pxの意味順を全レイアウトの基準にする
- 390pxは別設計にせず、改行と余白を検証する
- 768pxでは主に幅と余白を整え、比較が有効なBefore / AfterとPlanのみ多列化を検討する
- 1024px以上で写真と文章の2カラムを展開する
- HeaderはSP / PCともStickyとし、静かでコンパクトなVisualにする
- Heroは写真内左余白へのコピー配置を第一候補、2カラムをFallbackとする
- Serviceは3カード / 3カラムではなく、縦の工程順＋各工程のEditorialな2カラムを採用候補とする
- Case StudyはPCでも6工程の縦時間軸を維持する
- ProcessはPCでも5工程を縦順に保ち、Section IntroとVertical Listだけを2カラム候補とする
- Before / AfterとPlanは比較のためPCで横並びにする
- FAQは複数項目を同時に開けるAccordionとする
- Formは外部送信しないDemoとし、Validation後にSuccess Stateを表示する
- HeadingはSerif、Body / UIはSans Serifの役割分担とする
- 正式候補Colorを基準に、実装時にContrastを確認する
- WebP最適化はResponsive実装後に行う
- 写真のないセクションはTypography、Whitespace、Thin Borderで成立させる
- 横並びにする理由を説明できない箇所は縦配置を維持する
