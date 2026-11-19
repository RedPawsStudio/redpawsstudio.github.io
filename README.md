# RedPaws Studio : site vitrine

Site statique (HTML, CSS, un peu de JavaScript), sans dépendance ni étape de construction.
Identité visuelle : `../Concept.png` (palette, Baloo 2 + Montserrat) et `../Concept_site.png` (mise en page),
avec une touche de pixel art (Pixelify Sans, pattes pixel).

## Les trois liens à renseigner

Tout est en haut de `script.js`, dans `LIENS` :

| Clé | Quoi | Tant que c'est vide |
| --- | --- | --- |
| `steam` | URL de la page Steam d'Hexplore (« Coming soon ») | les boutons Steam mènent à Instagram, avec un texte honnête |
| `instagram` | URL du compte ; le pseudo affiché en est déduit | — |
| `email` | adresse Gmail de contact | la carte « Contact » est masquée |

## Mettre en ligne sur GitHub Pages

1. Sur GitHub, dans l'organisation **RedPawsStudio**, créer un dépôt public nommé exactement
   `redpawsstudio.github.io` (sans README).
2. Pousser ce dossier :
   ```powershell
   git remote add origin https://github.com/RedPawsStudio/redpawsstudio.github.io.git
   git push -u origin main
   ```
3. Dépôt → Settings → Pages : « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Le site est en ligne sur `https://redpawsstudio.github.io/` en une ou deux minutes.

Ce lien peut ensuite être donné à Steamworks (site web du développeur), dans la bio Instagram, etc.
Si un nom de domaine est acheté plus tard, mettre à jour `og:url` et `og:image` dans `index.html`.

## Images

`assets/img/` : logo, mascotte et paysages découpés dans les deux concepts (basse définition d'origine,
agrandis ×2) ; captures d'Hexplore prises dans le jeu. Pour un rendu plus net sur grand écran, remplacer
`hero.webp`, `mascotte.webp` et `panorama.webp` par des versions haute définition, aux mêmes noms.
