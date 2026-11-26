# Actual project artwork

The portfolio uses the six projects in `public/RBM brand book`:

| Project | Original folder | Artboards |
| --- | --- | --- |
| Wow China | wow_china | 13 |
| Flavours of India | foi | 14 |
| Hideaway | hideaway | 14 |
| Kinky's | kinkys | 5 |
| The Paw Story | PAW STORY | 6 |
| Turtle | turtle | 14 |
| Utsav Hotel & Banquet | utsav | 10 |

All 63 artboards are included, in their original numeric order. The WebP copies in these folders are up to 2000 pixels wide; the source JPEGs remain unchanged. The artwork viewer links to the original JPEG for full-resolution inspection.

Project metadata, categories, covers, and board counts are defined in `lib/projects.ts`. Add artwork and update that file when extending the portfolio. Project summaries describe the supplied artwork; no campaign performance metrics or additional client work have been invented.

## Shared brand details design

Use `app/work/[slug]/page.tsx` for Amber and all future brand details pages, following the Hideaway design. Keep the shared black and yellow header, large brand title, headline and service tags, opening artwork, brand introduction, accent-colour creative direction panel, three craft details, statement, responsive artwork gallery, next-brand link and contact section.

For each new brand, add its metadata in `lib/projects.ts` and its headline, introduction, direction, accent colour, statement and three craft entries in `lib/project-stories.ts`. Add numbered WebP frames and accurate dimensions in `lib/project-image-dimensions.json`. Preserve each PDF page as a complete, uncropped frame: page 1 is the opening artwork, page 2 appears in the direction panel, and pages 3 onward appear in the gallery. The artwork viewer includes all pages. Use brand-specific content and accent colours within this shared layout.

Amber includes all 14 pages of the supplied AMBER.pdf as numbered WebP frames in `amber/`.

Wow Kulfi includes all 11 pages of `kulfi_showcase.pdf` as numbered WebP frames in `wow-kulfi/`, with the supplied summer campaign reel. The reel uses the shared gallery’s muted autoplay, looping and playback controls.
