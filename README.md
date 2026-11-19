# RedPaws Studio : site vitrine

Le site de RedPaws Studio, un studio indépendant d'une seule personne, et de son premier jeu, **Hexplore**
(bientôt sur Steam). Mascotte : **Rouxy**, panda roux non binaire.

Site statique : `index.html`, `styles.css`, `script.js` et des images. Pas de framework, pas d'installation,
pas d'étape de construction. Adresse prévue : `https://redpawsstudio.github.io/`.

## Où on en est

- [x] Site terminé, vérifié sur ordinateur et téléphone
- [x] Dépôt GitHub créé, **privé**, sur le compte personnel : `SebGamblin/redpawsstudio.github.io`
- [ ] Créer l'adresse Gmail `redpawsstudio@gmail.com` (déjà affichée sur le site)
- [ ] Créer le compte Instagram `@redpawsstudio` (déjà relié au site)
- [ ] Créer l'organisation GitHub **RedPawsStudio**, y transférer le dépôt, le passer en public, activer Pages
- [ ] Ouvrir la page Steam d'Hexplore (« Coming soon ») et coller son adresse dans `script.js`

## Ce que contient la page

1. **Accueil** : logo, slogan « Petites pattes, grandes aventures. », Rouxy sur son rocher face au château.
2. **Hexplore** : présentation du jeu, deux captures, bouton Steam.
3. **Le studio** : qui est derrière, Rouxy au repos et ses trois expressions.
4. **Suivre l'aventure** : cartes Instagram, Steam et contact.

## Modifier le site

| Je veux changer… | Fichier |
| --- | --- |
| Un lien (Steam, Instagram, Gmail) | `script.js`, l'objet `LIENS` tout en haut (voir plus bas) |
| Un texte | `index.html` (chaque section est annoncée par un commentaire `<!-- 1. Accueil -->`, etc.) |
| Une couleur, une police | `styles.css`, les variables de `:root` tout en haut |
| Une image | voir « Images » plus bas |

Pour voir le résultat : ouvrir `index.html` dans un navigateur (double-clic). Les polices viennent de
Google Fonts et demandent une connexion internet.

**Rouxy est non binaire** : dans les textes, pas d'accord au masculin ni au féminin pour Rouxy (plutôt
« de la curiosité à revendre » que « curieux ») ; en anglais, *they/them*.

## Les liens

En haut de `script.js` :

| Clé | Valeur actuelle | Comportement |
| --- | --- | --- |
| `steam` | vide | Tant que c'est vide, le bouton d'Hexplore affiche le logo Instagram, « Suivre le développement » et mène à Instagram. Une fois l'adresse Steam collée, il redevient tout seul « Ajouter à ma liste de souhaits », avec le logo Steam. |
| `instagram` | `https://www.instagram.com/redpawsstudio/` | Le pseudo affiché (`@redpawsstudio`) est déduit de l'adresse. |
| `email` | `redpawsstudio@gmail.com` | **Pas encore créée** : la créer avant la mise en ligne, ou mettre ici la vraie adresse si celle-ci est prise. Vide, la carte Contact disparaît. |

## Images

Le site n'utilise que des **WebP** (`assets/img/`), 5 fois plus légers que les PNG. Les versions **PNG**,
pour Instagram, Steam, les vidéos ou l'impression, sont dans `../images_png/`. Ce dossier est hors du dépôt
et n'existe que sur l'ordinateur.

| Fichier du site | Ce que c'est | Origine |
| --- | --- | --- |
| `hero.webp` | Rouxy sur son rocher (accueil) | `images_png/hero.png`, **version corrigée** à la main (deux oreilles) : c'est la référence, ne pas la redécouper du concept |
| `logo.webp`, `logo-nav.webp` | Logo, grand et petit, fond transparent | `../Concept.png` |
| `mascotte.webp` | Rouxy au repos (le studio) | `../Concept.png` |
| `mascotte-rire.webp`, `mascotte-malice.webp`, `mascotte-surprise.webp` | Les trois expressions, détourées | `../Concept.png` |
| `panorama.webp` | Coucher de soleil (fond de « Suivre ») | `../Concept.png` |
| `hexplore-combat.webp`, `hexplore-ile.webp` | Captures du jeu | prises dans Hexplore (Godot) |
| `partage.jpg` | Aperçu quand on partage le lien (Discord, réseaux) | composée à partir du logo et de `hero` |
| `favicon.png`, `apple-touch-icon.png` | Icônes d'onglet et d'écran d'accueil | `../Concept.png` |

Les illustrations des concepts sont en basse définition, agrandies ×2 ou ×3 : une version haute définition
au même nom les rendrait plus nettes. Pour remplacer une image : mettre le nouveau PNG dans `images_png/`,
puis le convertir en WebP au même nom dans `assets/img/` (ou demander à Claude). Si c'est `hero`, refaire
aussi `partage.jpg`.

## Mettre en ligne

1. Créer l'organisation **RedPawsStudio** sur GitHub (offre gratuite).
2. Dans le dépôt : Settings → General → *Danger Zone* → **Transfer ownership** → `RedPawsStudio`,
   en gardant le nom `redpawsstudio.github.io` (c'est ce nom qui donne l'adresse courte).
3. Au même endroit, **Change visibility** → Public : GitHub Pages gratuit exige un dépôt public.
4. Settings → **Pages** → *Deploy from a branch*, branche `main`, dossier `/ (root)`.
5. Une ou deux minutes plus tard, le site est en ligne sur `https://redpawsstudio.github.io/`.
6. En local, pointer vers le nouveau dépôt (GitHub redirige l'ancien, mais autant être propre) :
   ```powershell
   git remote set-url origin https://github.com/RedPawsStudio/redpawsstudio.github.io.git
   ```

Ensuite, cette adresse va dans Steamworks (site web du développeur) et dans la bio Instagram. Si un nom de
domaine est acheté un jour, mettre à jour `og:url` et `og:image` dans `index.html`.

## Crédits

- Hexplore utilise le pack **Tiny Swords** de Pixel Frog (mentionné en pied de page).
- Polices Google Fonts : Baloo 2, Montserrat, Pixelify Sans (licence SIL Open Font).
- Icônes Instagram et Steam : Simple Icons (CC0).
