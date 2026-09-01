/**
 * Every artwork on the site, resolved at build time into AVIF/WebP srcsets.
 *
 * Add a piece by dropping the .jpg in and naming it below. `full` is the
 * fullscreen tier, fetched only when the viewer opens.
 */

export interface Picture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

export interface Artwork extends Picture {
  alt: string;
  /** AVIF srcset up to 3200px, for the fullscreen viewer. */
  full: string;
}

const pictures = import.meta.glob<Picture>("./*.jpg", {
  query: "?w=480;960;1440&format=avif;webp&quality=65&as=picture",
  import: "default",
  eager: true,
});

const fullsize = import.meta.glob<string>("./*.jpg", {
  query: "?w=1600;2400;3200&format=avif&quality=62&as=srcset",
  import: "default",
  eager: true,
});

const alt = {
  cat_bilbo: "Coloured pencil portrait of Bilbo, a tabby cat",
  cat_mitzi: "Coloured pencil portrait of a silver maine coon cat",
  cat_neeks: "Coloured pencil portrait of a black and white cat",
  cat_phoenix: "Coloured pencil portrait of a black and white maine coon cat",
  cat_pusscat: "Coloured pencil portrait of a black cat",
  cat_tabby_white: "Coloured pencil portrait of a tabby and white cat",
  dog_maisie: "Coloured pencil portrait of Maisie, a cockapoo",
  dog_marcie: "Coloured pencil portrait of Marcie, a terrier",
  dog_max: "Coloured pencil portrait of Max, a boxer dog",
  dog_sausage: "Coloured pencil portrait of a dachshund",
  holly_grass: "Holly Rebecca sitting in long grass",
  hope: "Coloured pencil drawing of a rhino mother and calf",
  lynx: "Coloured pencil drawing of a lynx",
  ocelot: "Coloured pencil drawing of an ocelot",
  owl_barn: "Coloured pencil drawing of a barn owl",
  owl_eagle: "Coloured pencil drawing of an eagle owl",
  owl_little: "Coloured pencil drawing of a little owl",
  owl_snowy: "Coloured pencil drawing of a snowy owl",
  owl_tawny: "Coloured pencil drawing of a tawny owl",
  owl_ural: "Coloured pencil drawing of a ural owl",
  reflective_beauty: "Coloured pencil drawing of two tigers in a pool",
  seeing_red: "Coloured pencil drawing of a red panda",
  zebras: "Coloured pencil drawing of two zebras",
} as const;

export type ArtworkName = keyof typeof alt;

export const artwork = Object.fromEntries(
  Object.entries(alt).map(([name, alt]) => {
    const picture = pictures[`./${name}.jpg`];
    const full = fullsize[`./${name}.jpg`];
    if (!picture || !full) {
      throw new Error(`no image file for src/images/${name}.jpg`);
    }
    return [name, { ...picture, full, alt }];
  }),
) as Record<ArtworkName, Artwork>;

export function artworks(...names: ArtworkName[]): Artwork[] {
  return names.map((name) => artwork[name]);
}
