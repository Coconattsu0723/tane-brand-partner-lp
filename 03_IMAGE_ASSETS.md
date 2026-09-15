# tane IMAGE ASSETS

## Status Legend
- PLANNED: 必要性と役割を確定したが未制作
- DRAFT: 仮素材
- REVIEW: 正式採用前レビュー中
- FORMAL: 正式採用
- FORMAL BUT NOT STORED: 正式採用済みだがプロジェクト内未格納
- OPTIMIZED: Web用最適化済み

## Image Strategy

taneでは写真を「おしゃれな店舗を見せる装飾」ではなく、
店にすでにある価値・日常・判断の痕跡を伝える証拠として使う。

写真が不要なセクションでは、Typography / Whitespace / Thin Borderを優先し、
無理に画像を配置しない。

## Current Formal Asset List

ページ内の正式採用ビジュアルは18素材（写真17点、ロゴ1点）。2026年9月8日時点で全18素材を元PNGのまま格納済み。Hero Main PhotoのみSP / PC別画像とし、その他は原則SP / PC共通で使用する。Hero Supporting Visual 3点はPC利用を基本候補とし、SPでの使用はResponsive検証後に判断する。2026年9月15日のPerformance工程で、PNGをMasterとして保持したままProduction用WebP 18点を追加し、Web参照をWebPへ切り替えた。OGP / faviconはページ内ビジュアル18素材とは分け、Metadata Assetとして管理する。

| ID | Filename | Directory / Path | Role | Status | Dimensions | Format | SP / PC use | Formal status |
|---:|---|---|---|---|---|---|---|---|
| 01 | `hero_shop-owner-and-space_sp.png` | `assets/images/hero/hero_shop-owner-and-space_sp.png` | Hero。店主・店舗空間・自然な営業感を伝える | FORMAL | 1122 × 1402 px（約4:5） | PNG | SP専用 | 正式採用済み・格納済み |
| 02 | `hero_shop-owner-and-space_pc.png` | `assets/images/hero/hero_shop-owner-and-space_pc.png` | Hero全体を覆う主写真。左側のコピー用余白を持つ | FORMAL | 1672 × 941 px（約16:9） | PNG | PC専用 | 正式採用済み・格納済み |
| 03 | `philosophy_hands-and-notes.png` | `assets/images/philosophy/philosophy_hands-and-notes.png` | Brand Philosophy。店の日常にある手がかりを伝える | FORMAL | 1536 × 1024 px（3:2） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 04 | `about_designer-working.png` | `assets/images/about/about_designer-working.png` | About。Designerの伴走姿勢と人物像を伝える | FORMAL | 1122 × 1402 px（約4:5） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 05 | `service_discover_conversation.png` | `assets/images/service/service_discover_conversation.png` | Service / Discover。対話から店らしさを見つける工程 | FORMAL | 1536 × 1024 px（3:2） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 06 | `service_define_brand-sheet.png` | `assets/images/service/service_define_brand-sheet.png` | Service / Define。魅力を言葉と判断軸へ整理する工程 | FORMAL | 1536 × 1024 px（3:2） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 07 | `service_express_touchpoints.png` | `assets/images/service/service_express_touchpoints.png` | Service / Express。ブランド軸を複数接点へ展開する工程 | FORMAL | 1536 × 1024 px（3:2） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 08 | `deliverables_brand-sheet.png` | `assets/images/deliverables/deliverables_brand-sheet.png` | Deliverables。手元に残るtane Brand Sheetを見せる | FORMAL | 1448 × 1086 px（4:3） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 09 | `case_before_touchpoints.png` | `assets/images/case-study/case_before_touchpoints.png` | Case Study / Before。接点ごとの表現がばらつく状態 | FORMAL | 1448 × 1086 px（4:3） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 10 | `case_discovery_bakery-owner.png` | `assets/images/case-study/case_discovery_bakery-owner.png` | Case Study / Discovery。日常と手仕事にあるブランドの材料 | FORMAL | 1536 × 1024 px（3:2） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 11 | `case_brand-axis-board.png` | `assets/images/case-study/case_brand-axis-board.png` | Case Study / Brand Axis。言葉・写真・色の方向性を整理した状態 | FORMAL | 1448 × 1086 px（4:3） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 12 | `case_after_web.png` | `assets/images/case-study/case_after_web.png` | Case Study / After Web。ブランド軸を反映したWeb | FORMAL | 1586 × 992 px（約16:10） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 13 | `case_after_social.png` | `assets/images/case-study/case_after_social.png` | Case Study / After Social。同じブランド軸を展開したSNS | FORMAL | 1122 × 1402 px（約4:5） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 14 | `case_after_package-card.png` | `assets/images/case-study/case_after_package-card.png` | Case Study / After Package & Card。同じブランド軸を反映した紙もの・包装 | FORMAL | 1448 × 1086 px（4:3） | PNG | SP / PC共通 | 正式採用済み・格納済み |
| 15 | `tane_logo.png` | `assets/images/logo/tane_logo.png` | Main Brand Wordmark / Header Logo | FORMAL | 2172 × 724 px（3:1） | PNG Alpha | SP / PC共通 | 正式採用済み・格納済み |
| 16 | `hero_thumb_shop-interior.png` | `assets/images/hero/hero_thumb_shop-interior.png` | Hero Supporting Visual / Shop Interior | FORMAL | 1536 × 1024 px（3:2） | PNG | PC Hero Supporting Visualを基本候補。SPはResponsive検証後に判断 | 正式採用済み・格納済み |
| 17 | `hero_thumb_baked-goods.png` | `assets/images/hero/hero_thumb_baked-goods.png` | Hero Supporting Visual / Baked Goods | FORMAL | 1536 × 1024 px（3:2） | PNG | PC Hero Supporting Visualを基本候補。SPはResponsive検証後に判断 | 正式採用済み・格納済み |
| 18 | `hero_thumb_packaging.png` | `assets/images/hero/hero_thumb_packaging.png` | Hero Supporting Visual / Packaging | FORMAL | 1536 × 1024 px（3:2） | PNG | PC Hero Supporting Visualを基本候補。SPはResponsive検証後に判断 | 正式採用済み・格納済み |

## Metadata and Social Preview Assets

2026年9月16日に、SNS共有表示とブラウザ識別に使用するMetadata Asset 4点を正式格納した。ページ本文で使用する正式18素材のカウントには含めない。

| ID | Filename | Path | Dimensions | Format | Role | Status |
|---:|---|---|---:|---|---|---|
| M01 | `ogp_tane.png` | `assets/images/ogp/ogp_tane.png` | 1200 × 630 px | PNG | OGP / X Large Image Card共通のSocial Preview | FORMAL |
| M02 | `favicon-48.png` | `assets/images/favicon/favicon-48.png` | 48 × 48 px | PNG | 高密度環境を含むBrowser Tab Icon | FORMAL |
| M03 | `favicon-32.png` | `assets/images/favicon/favicon-32.png` | 32 × 32 px | PNG | 標準Browser Tab Icon | FORMAL |
| M04 | `favicon.ico` | `assets/images/favicon/favicon.ico` | 32 × 32 px / 48 × 48 px | ICO（PNG 2サイズ内包） | Favicon互換フォーマット | FORMAL |

- OGP source: `ChatGPT Image 2026年9月16日 00_51_01.png`（1731 × 909 px）を、完成デザインと中心位置を維持して1200 × 630 pxへ変換した
- Favicon source: `ChatGPT Image 2026年9月16日 00_57_30.png`（1254 × 1254 px）を、デザインを変更せず32px / 48pxへ縮小した
- Public URL確定前のため、`og:image`と`twitter:image`はプロジェクト相対パスを使用する。公開時に絶対URLへ更新する

## Production Image Optimization

- Optimization date: 2026年9月15日
- Conversion tool: Sharp 0.35.4 / libwebp 1.6.0（Codex作業用ランタイム。プロジェクト依存には追加していない）
- Master policy: 正式PNG 18点は原寸・ファイル内容を変更せず保持する
- Production policy: Web表示では同一basenameのWebPを使用する
- Resize basis: 375 / 390 / 768 / 1024 / 1366 / 1440pxでの最大CSS表示寸法とRetina 2xを基準にする
- Quality policy: Heroと細部重視素材はquality 86〜88、通常写真はquality 82〜84、Logoは透過を保持したlossless WebPとする
- Total: PNG Master 36,852,110 bytes → Production WebP 1,971,458 bytes（34,880,652 bytes / 94.7%削減）

| ID | PNG Original Path | WebP Path | Original Dimensions | Max CSS / Retina 2x | WebP Dimensions | PNG Size | WebP Size | Reduction | Web Use Status |
|---:|---|---|---:|---:|---:|---:|---:|---:|---|
| 01 | `assets/images/hero/hero_shop-owner-and-space_sp.png` | `assets/images/hero/hero_shop-owner-and-space_sp.webp` | 1122 × 1402 | 768 × 768 / 1536 × 1536 | 1122 × 1402 | 2,024,069 B | 142,568 B | 93.0% | PRODUCTION |
| 02 | `assets/images/hero/hero_shop-owner-and-space_pc.png` | `assets/images/hero/hero_shop-owner-and-space_pc.webp` | 1672 × 941 | 1095 × 668 / 2190 × 1336 | 1672 × 941 | 2,172,204 B | 208,930 B | 90.4% | PRODUCTION |
| 03 | `assets/images/philosophy/philosophy_hands-and-notes.png` | `assets/images/philosophy/philosophy_hands-and-notes.webp` | 1536 × 1024 | 704 × 470 / 1408 × 940 | 1440 × 960 | 2,307,003 B | 132,488 B | 94.3% | PRODUCTION |
| 04 | `assets/images/about/about_designer-working.png` | `assets/images/about/about_designer-working.webp` | 1122 × 1402 | 448 × 560 / 896 × 1120 | 896 × 1120 | 1,949,998 B | 79,186 B | 95.9% | PRODUCTION |
| 05 | `assets/images/service/service_discover_conversation.png` | `assets/images/service/service_discover_conversation.webp` | 1536 × 1024 | 704 × 470 / 1408 × 940 | 1440 × 960 | 2,266,477 B | 108,464 B | 95.2% | PRODUCTION |
| 06 | `assets/images/service/service_define_brand-sheet.png` | `assets/images/service/service_define_brand-sheet.webp` | 1536 × 1024 | 704 × 470 / 1408 × 940 | 1440 × 960 | 2,181,512 B | 111,608 B | 94.9% | PRODUCTION |
| 07 | `assets/images/service/service_express_touchpoints.png` | `assets/images/service/service_express_touchpoints.webp` | 1536 × 1024 | 704 × 470 / 1408 × 940 | 1440 × 960 | 2,250,479 B | 104,272 B | 95.4% | PRODUCTION |
| 08 | `assets/images/deliverables/deliverables_brand-sheet.png` | `assets/images/deliverables/deliverables_brand-sheet.webp` | 1448 × 1086 | 704 × 528 / 1408 × 1056 | 1448 × 1086 | 1,985,138 B | 126,608 B | 93.6% | PRODUCTION |
| 09 | `assets/images/case-study/case_before_touchpoints.png` | `assets/images/case-study/case_before_touchpoints.webp` | 1448 × 1086 | 704 × 528 / 1408 × 1056 | 1448 × 1086 | 2,172,851 B | 122,124 B | 94.4% | PRODUCTION |
| 10 | `assets/images/case-study/case_discovery_bakery-owner.png` | `assets/images/case-study/case_discovery_bakery-owner.webp` | 1536 × 1024 | 704 × 470 / 1408 × 940 | 1440 × 960 | 2,221,909 B | 110,908 B | 95.0% | PRODUCTION |
| 11 | `assets/images/case-study/case_brand-axis-board.png` | `assets/images/case-study/case_brand-axis-board.webp` | 1448 × 1086 | 704 × 528 / 1408 × 1056 | 1448 × 1086 | 2,185,407 B | 157,976 B | 92.8% | PRODUCTION |
| 12 | `assets/images/case-study/case_after_web.png` | `assets/images/case-study/case_after_web.webp` | 1586 × 992 | 706 × 442 / 1412 × 884 | 1586 × 992 | 1,934,955 B | 145,488 B | 92.5% | PRODUCTION |
| 13 | `assets/images/case-study/case_after_social.png` | `assets/images/case-study/case_after_social.webp` | 1122 × 1402 | 403 × 504 / 806 × 1008 | 896 × 1120 | 2,041,527 B | 84,358 B | 95.9% | PRODUCTION |
| 14 | `assets/images/case-study/case_after_package-card.png` | `assets/images/case-study/case_after_package-card.webp` | 1448 × 1086 | 717 × 538 / 1434 × 1076 | 1448 × 1086 | 2,202,409 B | 156,718 B | 92.9% | PRODUCTION |
| 15 | `assets/images/logo/tane_logo.png` | `assets/images/logo/tane_logo.webp` | 2172 × 724 | 128 × 43 / 256 × 86 | 512 × 171 | 206,797 B | 12,200 B | 94.1% | PRODUCTION / LOSSLESS ALPHA |
| 16 | `assets/images/hero/hero_thumb_shop-interior.png` | `assets/images/hero/hero_thumb_shop-interior.webp` | 1536 × 1024 | 335 × 224 / 670 × 448 | 768 × 512 | 2,310,315 B | 59,648 B | 97.4% | PRODUCTION |
| 17 | `assets/images/hero/hero_thumb_baked-goods.png` | `assets/images/hero/hero_thumb_baked-goods.webp` | 1536 × 1024 | 335 × 224 / 670 × 448 | 768 × 512 | 2,179,626 B | 52,262 B | 97.6% | PRODUCTION |
| 18 | `assets/images/hero/hero_thumb_packaging.png` | `assets/images/hero/hero_thumb_packaging.webp` | 1536 × 1024 | 335 × 224 / 670 × 448 | 768 × 512 | 2,259,434 B | 55,652 B | 97.5% | PRODUCTION |

### Previously Planned / Not in Current Formal Set

次の2素材は初期計画に含まれていたが、現在の正式18素材には含めない。今回のコピー・代用・生成対象外とする。

| Filename | Previous role | Current status |
|---|---|---|
| `problem_social-review.jpg` | Problem / Daily friction | PLANNED / NOT FORMAL |
| `final-cta_quiet-shop.jpg` | Final CTA / Emotional close | PLANNED / NOT FORMAL |

## Sections Intentionally Without Required Photography

### Header
画像不要。Wordmark / Navigation / CTAのみ。

### Problem Insight
画像不要。
大きなTypographyと余白でCore Problemを強く見せる。

### Who It's For
画像不要。
文章・チェック項目・細線などで判断しやすくする。

### Process
写真必須ではない。
Step Number / Typography / Thin Lineで整理する。

### Plan
画像不要。
料金・範囲比較を優先する。

### FAQ
画像不要。
情報理解とAccordion操作を優先する。

### Contact Form
画像不要。
入力しやすさとアクセシビリティを優先する。

### Footer
画像不要。

## Case Study Asset Count
Case Studyだけで6素材を予定：
1. Before touchpoints
2. Discovery / bakery owner
3. Brand Axis Board
4. After Web
5. After Social
6. After Package / Card

Case Studyでは「完成形だけ」を見せず、
Before → 発見 → 判断軸 → 展開 のプロセスを可視化する。

## Visual Consistency Rules
正式画像制作時は以下を統一する。

- 日本の小規模店舗として自然な空間
- 過度に高級・無機質にしない
- Warm Off White / Wood / Muted Earth Tone
- 自然光中心
- 強いHDRやドラマチックな照明を避ける
- 人物は広告モデル風にしすぎない
- 店舗・道具・人物に生活感と使用感を残す
- 不自然な大量小物を置かない
- 写真ごとに色温度・時間帯が極端に変わらない
- AI特有の完璧すぎる空間を避ける

## Production Order Recommendation

1. Hero SP / PC
2. Philosophy
3. About / Designer
4. Service 3 images
5. Deliverables
6. Case Study 6 images

格納済み18素材の元PNGは、Masterとして画質・ピクセル寸法・形式を維持する。Web表示にはPerformance工程で生成した同一basenameのWebPを使用する。
