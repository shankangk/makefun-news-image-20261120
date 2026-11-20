# makefun-news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/shankangk/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/shankangk/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A newspaper front page summing up Friday, November 20, 2026: Anthropic — the first purely AI company to list — soars more than 34% on its stock market debut to about a $2 trillion valuation, the International Court of Justice rules Myanmar committed genocide against the Rohingya, COP31 climate talks reach crunch time with fossil fuels cut from the draft deal, plus the Shenzhen summit fallout, the Crimea Bridge, the Epstein files bill and more.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## What the image shows

- **Lead story — Anthropic's market debut:** Shares in the Claude-maker jump more than 34% on the first trading day, valuing the first purely AI company to list at about $2 trillion, after pricing its record $81.3 billion IPO at $83 a share.
- **The Hague:** The UN's top court finds Myanmar committed genocide against the Rohingya, in a landmark ruling dominating front pages worldwide.
- **COP31:** The climate talks' draft deal drops any mention of a fossil-fuel transition, as near-final texts are called an "outrage" by observers.
- **Also:** Trump, Xi and Putin sign a four-point peace declaration at the Shenzhen summit. Ukraine hits the Crimea Bridge again while Putin rules out a sea or energy truce. The U.S. Senate passes the Epstein files release bill and rejects an Iran war-powers curb. The Netherlands halts its Nexperia move, Iran steps up Hormuz tanker attacks as oil slides, and Meta says it is "reevaluating" its 2030 net-zero target.

## How it was built

Three editorial illustrations were generated with AI image tools (the cheering stock-exchange floor on Anthropic's debut, the Peace Palace in The Hague, the COP31 climate summit hall), then composed into one 1024×1024 poster with Python (PIL). Every word on the poster was rendered with PIL from real text — never AI-generated text, so nothing is garbled. `main.ts` copies the finished `entry.png` to `/output/entry.png`, deterministically, with no network.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
