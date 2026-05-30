## Client logos

The 8 SVGs in this folder are clean **text placeholders**. Replace each one with the real logo when you have it (keep the same filename so no code changes are needed).

Filenames are listed in `src/data/site.ts` under `clients.logos`.

### Recommended specs for replacements
- **Format:** SVG preferred. PNG (transparent background, ≥200×100) also works.
- **Aspect:** wide horizontal — fits inside a 200×104 cell with 22×26 padding.
- **Colour:** full-colour brand artwork. The marquee gives every cell a white card and a light hairline border, so any colour palette will look clean.
- **Optimisation:** run SVGs through `svgo` to keep payload tiny.

### To add or remove a brand
Edit `src/data/site.ts` → `clients.logos`:

```ts
{ name: 'YourBrand', file: '/logos/your-brand.svg' }
```
Then drop the matching file into this folder.
