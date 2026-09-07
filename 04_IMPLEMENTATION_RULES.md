# tane IMPLEMENTATION RULES

## Technology
- HTML5
- CSS3
- Vanilla JavaScript

## Mobile First
確認幅：
- 375px
- 390px
- 768px
- 1024px
- 1366px
- 1440px

## HTML
Semantic HTMLを使用する。
- header
- nav
- main
- section
- article
- figure
- figcaption
- footer
- h1-h3
- ul / ol / li
- form
- fieldset
- legend
- button
- a

## Heading
- h1は原則1ページ1つ
- セクション見出しはh2
- 下位項目はh3
- 見た目でHeading Levelを決めない

## JavaScript
目的がある場合のみ使用する。

予定：
- FAQ Accordion
- Mobile Menu
- Form補助 / UI state management（必要な場合のみ）

## Accessibility
最低限確認：
- html lang="ja"
- Heading hierarchy
- alt
- decorative alt=""
- Keyboard operation
- focus-visible
- Tap Target 約44px以上
- label
- fieldset / legend
- aria-expanded
- aria-controls
- aria-live
- Color Contrast
- Skip Link

ARIAはHTMLだけでは表現できない意味を補う場合のみ使用する。

## Performance
- 写真はWebP候補
- 透過素材はWebP alphaまたはPNG
- Heroはlazy loadしない
- Heroにfetchpriority="high"を検討
- FV外はloading="lazy"を検討
- decoding="async"
- width / height または aspect-ratio でCLS対策
- 最適化前後の容量を記録する

## UI
静かで機能的なInteractionを優先する。
- 強いParallaxは使用しない
- 必要に応じて静かなFade / Reveal
- HoverはUnderline / 微細なImage Scale / Text Shift程度
- prefers-reduced-motionへの配慮を検討する

## Git
ユーザー確認なしにGit操作しない。
