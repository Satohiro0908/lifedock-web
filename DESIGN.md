# Design System Strategy: Hiroo Orange Clinic

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Radiant Sanctuary."**

Medical interfaces often lean toward a sterile, cold clinicalism. This system intentionally pivots toward a high-end editorial experience that feels warm, authoritative, and human-centric. By utilizing a sophisticated "Warm-Neutral" foundation paired with vibrant accenting, we create a digital environment that feels more like a wellness retreat than a laboratory.

The design breaks away from standard "template" aesthetics by prioritizing **intentional asymmetry** and **tonal layering**. We move beyond the grid-block mentality, using generous whitespace (medical-grade clarity) and overlapping elements to guide the patient’s eye with grace and intentionality.

---

## 2. Colors

Our palette is rooted in the "Radiant Sanctuary" concept—using heat and earth to convey health and stability.

### Primary & Secondary Palette

- **Primary Focus:** `primary_container (#F3811D)` is our signature orange. It is reserved for high-impact CTAs and navigational anchors.
- **The Sanctuary Base:** `surface (#fbf9f8)` and `surface_container_lowest (#ffffff)` provide the clean, premium backdrop.
- **The Grounding Element:** `on_background (#1b1c1c)` (deep charcoal) ensures legibility for long-form medical explanations.
- **The Natural Accent:** `secondary (#31685d)` (muted green) acts as a secondary signifier for health-related icons and success states.

### The "No-Line" Rule

To maintain a premium editorial feel, **prohibit the use of 1px solid borders for sectioning.** Structural boundaries must be achieved through:

- **Tonal Shifts:** Transitioning from `surface` to `surface_container_low` to define a new content area.
- **Generous Gaps:** Using the higher end of the Spacing Scale (`16` or `20`) to create mental separation without visual clutter.

### Surface Hierarchy & Nesting

Treat the UI as physical layers of fine paper.

- **Level 0 (Foundation):** `surface (#fbf9f8)`
- **Level 1 (Sections):** `surface_container_low (#f6f3f2)`
- **Level 2 (Cards):** `surface_container_lowest (#ffffff)`
  This "Nesting" creates depth without the need for heavy shadows or lines.

### Signature Textures

Use subtle linear gradients for Hero CTAs, transitioning from `primary (#954a00)` to `primary_container (#F3811D)`. This adds a "glow" that feels professional and prevents the orange from appearing flat or "budget."

---

## 3. Typography

We employ a high-contrast typographic scale to balance clinical precision with editorial elegance.

- **Display & Headlines (Manrope):** Chosen for its geometric modernism and humanist terminals. Bold weights convey authority and trustworthiness.
  - `display-lg`: Used for emotional hero statements.
  - `headline-md`: Used for section titles (e.g., "Director Profile").
- **Body & Titles (Plus Jakarta Sans):** A high-legibility sans-serif that feels contemporary and approachable.
  - `body-lg`: The standard for patient testimonials and medical advice.
  - `title-md`: Used for UI-level headers within cards.
- **Identity Hierarchy:** Headings are always prioritized with significant vertical spacing (`spacing-8`) above and below to ensure the medical information breathes.

---

## 4. Elevation & Depth

In this system, depth is a result of **light and layering**, not structure.

### The Layering Principle

Depth is achieved by stacking the surface-container tiers. A `surface-container-lowest` card placed on a `surface-container-low` background provides a soft, natural lift.

### Ambient Shadows

Shadows should be rare. When required for "Floating" elements (like a sticky booking bar):

- **Blur:** `32px` to `48px`
- **Opacity:** `4%-6%`
- **Tint:** Use a tinted version of `on_surface` (deep charcoal-brown) rather than pure black to keep the warmth of the brand intact.

### The "Ghost Border" Fallback

If a border is required for accessibility (e.g., in a high-density data table), use a **Ghost Border**: the `outline_variant` token at **15% opacity**.

### Glassmorphism

For mobile navigation or floating contact buttons, use `surface_container_lowest` at 85% opacity with a `20px` backdrop-blur. This allows the medical imagery or text behind to bleed through, softening the interface.

---

## 5. Components

### Buttons

- **Primary:** `primary_container` background with `on_primary` text. `Roundedness-full` (9999px) for an approachable, friendly feel.
- **Secondary:** `surface_container_lowest` background with a `ghost border` and `primary` text.
- **States:** On hover, apply a subtle scale-up (1.02x) rather than a harsh color change to maintain the "premium" feel.

### Cards & Lists

- **The Rule:** No divider lines. Use `spacing-6` between list items.
- **Testimonial Cards:** Use `surface_container_lowest` with a `roundedness-xl` (1.5rem).
- **FAQ Lists:** Use a subtle background shift (`surface_container_low`) for the question and `surface` for the answer.

### Inputs & Fields

- Use `surface_container_highest` for the input track.
- Avoid 100% black text; use `on_surface_variant` for labels to keep the tone soft.

### Signature Component: The "Timeline"

For the "Flow of Visit" or "Career" sections, use a vertical line in `outline_variant` (2px width) with `secondary_fixed` circular anchors to create a narrative journey.

---

## 6. Do's and Don'ts

### Do:

- **Embrace the Void:** Use `spacing-20` for top/bottom margins of major sections.
- **Layer Vertically:** Stack white cards on off-white backgrounds to create "islands" of information.
- **Use "Human" Imagery:** Warm-toned photography of the clinic space or staff, integrated with `roundedness-lg`.

### Don't:

- **No Sharp Corners:** Avoid `roundedness-none`. Everything in a clinic should feel safe and soft.
- **No Pure Black Borders:** This immediately breaks the "Premium Sanctuary" aesthetic. Use background color shifts instead.
- **No Crowding:** If a section feels "busy," increase the vertical spacing. Medical clarity requires room to breathe.
- **No Generic Icons:** Use modern, thin-line icons (2px stroke) in `secondary` green to maintain a bespoke look.

# デザインシステム戦略：広尾オレンジクリニック

## 1. 概要とクリエイティブ・ノーススター

このデザインシステムのクリエイティブ・ノーススターは、**「The Radiant Sanctuary（光に満ちた安らぎの聖域）」**です。

医療系インターフェースは、無機質で冷たい臨床的な表現に寄りがちです。本システムはそこから意図的に転換し、温かみ・権威性・人間中心性を備えた、上質なエディトリアル体験を目指します。洗練された「Warm-Neutral（暖かいニュートラル）」の基盤に鮮やかなアクセントを組み合わせることで、研究室ではなくウェルネスリトリートのように感じられるデジタル環境をつくります。

本デザインは、**意図的な非対称性**と**トーンのレイヤリング**を重視することで、一般的なテンプレート的美学から脱却します。グリッドを機械的に並べる発想を超え、十分な余白（医療レベルの明瞭さ）と要素の重なりによって、患者の視線を自然かつ意図的に導きます。

---

## 2. カラー

カラーパレットは「Radiant Sanctuary」のコンセプトに基づき、熱量と土のニュアンスで健康と安定感を表現します。

### プライマリとセカンダリのパレット

- **Primary Focus:** `primary_container (#F3811D)` はシグネチャーオレンジ。高インパクトなCTAとナビゲーションの要所に限定して使用します。
- **The Sanctuary Base:** `surface (#fbf9f8)` と `surface_container_lowest (#ffffff)` が、クリーンで上質な背景を形成します。
- **The Grounding Element:** `on_background (#1b1c1c)`（深いチャコール）は、長文の医療説明でも高い可読性を確保します。
- **The Natural Accent:** `secondary (#31685d)`（落ち着いたグリーン）は、健康関連アイコンや成功状態を示す補助的なサインとして機能します。

### 「No-Line」ルール

上質なエディトリアル感を保つため、**セクション区切りに1px実線ボーダーを使わないこと。**
構造的な区切りは次の方法で実現します。

- **Tonal Shifts:** `surface` から `surface_container_low` へトーンを切り替え、新しいコンテンツ領域を定義する。
- **Generous Gaps:** Spacing Scale の大きめ値（`16` または `20`）を使い、視覚ノイズなしで心理的な区切りを作る。

### サーフェス階層とネスト

UIは上質な紙を重ねた物理レイヤーとして扱います。

- **Level 0 (Foundation):** `surface (#fbf9f8)`
- **Level 1 (Sections):** `surface_container_low (#f6f3f2)`
- **Level 2 (Cards):** `surface_container_lowest (#ffffff)`
  この「Nesting（入れ子構造）」により、強い影や線を使わずに奥行きを生み出せます。

### シグネチャーテクスチャ

Hero CTA には、`primary (#954a00)` から `primary_container (#F3811D)` へ移る控えめな線形グラデーションを使用します。これによりプロフェッショナルな「光感」を与え、オレンジが平板または安価に見えるのを防ぎます。

---

## 3. タイポグラフィ

医療の精密さとエディトリアルの優雅さを両立するため、高コントラストのタイポグラフィスケールを採用します。

- **Display & Headlines (Manrope):** 幾何学的モダニズムとヒューマニストな端末形状を備えた書体。太めのウェイトで権威性と信頼感を伝えます。
  - `display-lg`: 感情に訴えるヒーローステートメントに使用。
  - `headline-md`: セクションタイトル（例: 「院長プロフィール」）に使用。
- **Body & Titles (Plus Jakarta Sans):** 可読性が高く、現代的で親しみやすいサンセリフ。
  - `body-lg`: 患者の声や医療アドバイスの標準本文に使用。
  - `title-md`: カード内のUIレベル見出しに使用。
- **Identity Hierarchy:** 見出しは常に優先度を高く扱い、上下に十分な垂直余白（`spacing-8`）を確保して、医療情報が呼吸できるレイアウトを保ちます。

---

## 4. エレベーションと奥行き

このシステムにおける奥行きは、構造ではなく**光とレイヤリング**によって生まれます。

### レイヤリングの原則

奥行きはサーフェス階層を重ねることで作ります。`surface-container-low` の背景上に `surface-container-lowest` のカードを配置することで、柔らかく自然なリフト感が得られます。

### アンビエントシャドウ

シャドウの使用は最小限にします。必要な場合（例: スティッキーな予約バーなどの浮遊要素）は、以下を基準にします。

- **Blur:** `32px` から `48px`
- **Opacity:** `4%-6%`
- **Tint:** 純黒ではなく `on_surface`（深いチャコールブラウン）を色付きで使用し、ブランドの温かみを保つ。

### 「Ghost Border」フォールバック

アクセシビリティ上ボーダーが必要な場合（例: 高密度なデータテーブル）は、**Ghost Border**として `outline_variant` トークンを**15%不透明度**で使用します。

### グラスモーフィズム

モバイルナビゲーションやフローティング連絡ボタンには、`surface_container_lowest` を 85% 不透明度 + `20px` の背景ぼかしで使用します。背後の医療画像や文字がわずかに透けることで、インターフェース全体をやわらかく見せます。

---

## 5. コンポーネント

### ボタン

- **Primary:** `primary_container` 背景に `on_primary` テキスト。親しみやすく柔和な印象のため、`Roundedness-full`（9999px）を使用。
- **Secondary:** `surface_container_lowest` 背景に `ghost border` と `primary` テキストを組み合わせる。
- **States:** ホバー時は強い色変化ではなく、わずかな拡大（1.02x）を適用し、「プレミアム」な印象を保つ。

### カードとリスト

- **The Rule:** 区切り線は使わない。リスト項目間は `spacing-6` を確保する。
- **Testimonial Cards:** `surface_container_lowest` と `roundedness-xl`（1.5rem）を使用。
- **FAQ Lists:** 質問側に `surface_container_low`、回答側に `surface` を使い、控えめな背景差で整理する。

### 入力とフィールド

- 入力トラックには `surface_container_highest` を使用。
- テキストを100%黒にしない。ラベルには `on_surface_variant` を使い、全体のトーンを柔らかく保つ。

### シグネチャーコンポーネント: 「Timeline」

「来院の流れ」や「キャリア」セクションでは、`outline_variant` の縦線（2px）と `secondary_fixed` の円形アンカーを使い、物語性のある導線を作ります。

---

## 6. Do と Don't

### Do:

- **Embrace the Void:** 主要セクションの上下マージンには `spacing-20` を使用する。
- **Layer Vertically:** オフホワイト背景に白カードを重ね、情報の「島」を作る。
- **Use "Human" Imagery:** クリニック空間やスタッフの暖色系写真を `roundedness-lg` で統合する。

### Don't:

- **No Sharp Corners:** `roundedness-none` は避ける。クリニックの体験は常に安全でやわらかくあるべき。
- **No Pure Black Borders:** これは即座に「Premium Sanctuary」の美学を壊す。代わりに背景トーンの切り替えを使う。
- **No Crowding:** セクションが詰まって見える場合は、垂直方向の余白を増やす。医療の明瞭さには呼吸できる空間が必要。
- **No Generic Icons:** `secondary` グリーンのモダンな細線アイコン（2pxストローク）を使い、特注感を維持する。
