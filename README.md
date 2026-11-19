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

Le dépôt existe déjà sur le compte personnel, en privé : `SebGamblin/redpawsstudio.github.io`.

1. Créer l'organisation **RedPawsStudio** sur GitHub (offre gratuite).
2. Dépôt → Settings → General → Danger Zone → **Transfer ownership** → organisation `RedPawsStudio`,
   en gardant le nom `redpawsstudio.github.io`.
3. Dans l'organisation : Settings → General → Danger Zone → **Change visibility** → Public
   (GitHub Pages gratuit exige un dépôt public).
4. Settings → Pages : « Deploy from a branch », branche `main`, dossier `/ (root)`.
5. Le site est en ligne sur `https://redpawsstudio.github.io/` en une ou deux minutes.
6. En local, pointer vers le nouveau dépôt (GitHub redirige l'ancien, mais autant être propre) :
   ```powershell
   git remote set-url origin https://github.com/RedPawsStudio/redpawsstudio.github.io.git
   ```

Ce lien peut ensuite être donné à Steamworks (site web du développeur), dans la bio Instagram, etc.
Si un nom de domaine est acheté plus tard, mettre à jour `og:url` et `og:image` dans `index.html`.

## Images

`assets/img/` : logo, mascotte et paysages découpés dans les deux concepts (basse définition d'origine,
agrandis ×2) ; captures d'Hexplore prises dans le jeu. Pour un rendu plus net sur grand écran, remplacer
`hero.webp`, `mascotte.webp` et `panorama.webp` par des versions haute définition, aux mêmes noms.
