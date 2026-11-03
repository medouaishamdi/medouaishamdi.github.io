function e(e,t){e.innerHTML=`<article class="article">${t.lang===`fr`?`
<p class="lab-lead">Un portfolio, d’habitude, c’est une page qu’on fait défiler. Je voulais un portfolio auquel on joue : une petite île où chaque but est un projet de machine learning, où les gardiens apprennent votre façon de tirer, et où rien n’est téléchargé à part du code.</p>

<h3>Pas de modèle 3D, pas de fichier audio, pas de moteur</h3>
<p>Tout est généré au chargement de la page. Joueurs, buts, arbres, tribunes et lettres sont construits en TypeScript à partir de boîtes, cylindres et cônes, puis fusionnés par matériau : le décor coûte quelques dizaines d’appels de dessin au lieu de milliers. La pelouse, les lignes et les chemins sont un seul shader de terrain ; les lignes sont des champs de distance signée, nettes à tout zoom. La mer utilise un champ de distance de la côte pour dessiner l’écume.</p>
<p>Le rendu est en Three.js (WebGL). Si les images par seconde restent basses, le jeu baisse discrètement sa résolution, puis coupe les ombres temps réel, plutôt que de saccader.</p>

<h3>Une physique qui ressemble au foot</h3>
<p>Ballon, joueurs, buts et filets sont des corps rigides cannon-es, simulés à 60 Hz fixes et interpolés à l’affichage : le jeu se comporte pareil sur un écran 60 Hz ou 144 Hz. Les tirs sont aidés vers le but visé, et le panier de basket résout la vraie équation balistique.</p>
<p>La séance de tirs au but m’a le plus appris. Des buts n’étaient pas comptés : les filets de la cage sont peu profonds et descendent depuis la barre, donc un tir haut touchait le filet juste derrière la ligne et ressortait entre deux images. La solution : vérifier la ligne de but à chaque pas de physique et compter le moment où le ballon la franchit, sous la barre et entre les poteaux, comme un arbitre.</p>

<h3>Chaque son est synthétisé</h3>
<p>Frappes, filet, public, sifflet, chien, feux d’artifice : tout est construit en direct avec la Web Audio API, à partir d’oscillateurs et de bruit filtré, et placé en stéréo par rapport à la caméra. La musique est générative : un petit séquenceur compose une boucle lo-fi house en ré majeur pendant que vous jouez.</p>

<h3>Byte, le gardien qui apprend</h3>
<p>Les gardiens partagent un tout petit modèle. Il compte où vous tirez (gauche, centre, droite) avec lissage, combine ces comptes avec une chaîne de Markov sur votre tir précédent, et plonge là où votre prochain tir a le plus de chances d’aller. Un panneau affiche ses probabilités en direct. Il apprend dans votre navigateur. Aux tirs au but, Byte note aussi où <i>vous</i> plongez, et tire de l’autre côté.</p>

<h3>De vrais modèles, dans votre navigateur</h3>
<p>La salle d’analyse fait tourner le vrai classifieur HistoLens avec ONNX Runtime Web. J’ai quantifié le ResNet-18 en 8 bits (de 44 Mo à 11 Mo) et vérifié sur 360 images de test : même précision, 99,4 % de prédictions identiques. Le replay WattCast lit le backtest sauvegardé sur 7,5 ans, et le flux ThreatScope rejoue les vrais scores du jeu de test. Rien n’est simulé.</p>

<h3>Les petits détails qui ont pris le plus de temps</h3>
<ul>
<li><b>Les claviers AZERTY.</b> Les déplacements utilisent la position des touches (WASD devient ZQSD), mais les raccourcis utilisent la lettre imprimée : M ouvre la carte partout.</li>
<li><b>Deux langues.</b> Chaque panneau de l’île est une texture redessinée quand on passe de l’anglais au français.</li>
<li><b>Le focus.</b> Appuyer sur Entrée après avoir fermé un panneau « recliquait » le bouton qui l’avait ouvert. Le clavier revient maintenant toujours au jeu.</li>
<li><b>Des chiffres honnêtes.</b> Chaque tableau affiche deux scores : à l’entraînement, et le jour du match, sur des données jamais vues. C’est le second qui compte.</li>
</ul>

<h3>La stack</h3>
<p>TypeScript, Three.js, cannon-es, Web Audio, Vite. ONNX Runtime Web pour HistoLens. Un petit serveur Node pour la conférence de presse, qui retrouve des passages de mes projets et demande à un modèle de langage d’y répondre uniquement à partir d’eux, avec citations. Un petit serveur avec Docker et Caddy héberge le site et toutes les démos.</p>
`:`
<p class="lab-lead">A portfolio is usually a page you scroll. I wanted one you could play: a small island where every goal is a machine-learning project, the keepers learn how you shoot, and nothing is downloaded but code.</p>

<h3>No models, no audio files, no engine</h3>
<p>Everything on the island is generated when the page loads. The players, goals, trees, stands and letters are built from boxes, cylinders and cones in TypeScript, then merged per material, so the static world costs a few dozen draw calls instead of thousands. The grass, the chalk lines and the paths are one terrain shader: the lines are signed distance fields, so they stay sharp at any zoom. The sea uses a distance field of the coastline to draw the foam where waves meet the sand.</p>
<p>Rendering is Three.js on WebGL. If the frame rate stays low, the game quietly lowers its resolution, then turns off real-time shadows, rather than stutter.</p>

<h3>Physics that feels like football</h3>
<p>The ball, players, goals and nets are rigid bodies in cannon-es, stepped at a fixed 60 Hz and interpolated for display, so the game behaves the same on a 60 Hz laptop and a 144 Hz monitor. Shots are aim-assisted toward the goal you face, and the basketball hoop solves the actual ballistic equation, so a shot from the right spot drops in.</p>
<p>The penalty shootout taught me the most here. Goals were sometimes not counted: the cage nets are shallow and slope down from the crossbar, so a high shot touched the net just behind the line and bounced back out between two frames. The fix was to check the goal line on every physics step and count the moment the ball crosses it, under the bar and between the posts, the way a referee would.</p>

<h3>Every sound is synthesized</h3>
<p>Kicks, the net, the crowd, the referee's whistle, the dog, the fireworks: all built live with the Web Audio API from oscillators and filtered noise, and placed in stereo relative to the camera. The music is generative too: a small sequencer composes a lo-fi house loop in D major as you play, and calms down at night.</p>

<h3>Byte, the keeper that learns</h3>
<p>The goalkeepers share one tiny model. It keeps smoothed counts of where you shoot (left, centre, right), blends them with a first-order Markov chain over your previous shot, and dives where your next shot is most likely to go. A panel shows its probabilities live. It learns in your browser and remembers you between visits. In the shootout, Byte also notes where <i>you</i> dive, and aims away from it.</p>

<h3>Real models, running in your browser</h3>
<p>The Match Analysis room runs the real HistoLens classifier with ONNX Runtime Web. I quantized the ResNet-18 to 8 bits (from 44 MB to 11 MB) and checked it against the original on 360 test tiles: same accuracy, 99.4% identical predictions. The WattCast replay reads the saved 7.5-year backtest, and the ThreatScope feed replays the real test-set scores. Nothing is mocked.</p>

<h3>Small details that took the longest</h3>
<ul>
<li><b>AZERTY keyboards.</b> Movement uses physical key positions (WASD is ZQSD in France) but shortcuts use the letter printed on the key, so M opens the map everywhere.</li>
<li><b>Two languages.</b> Every sign on the island is a canvas texture redrawn when you switch between English and French.</li>
<li><b>Focus.</b> Pressing Enter after closing a panel used to "click" the button that opened it. The keyboard now always goes back to the game.</li>
<li><b>Honest numbers.</b> Every scoreboard shows two scores: in training conditions, and on match day, on data the model never saw. The second one is the one that matters.</li>
</ul>

<h3>The stack</h3>
<p>TypeScript, Three.js, cannon-es, Web Audio, Vite. ONNX Runtime Web for HistoLens. A small Node server for the press conference, which retrieves passages from my write-ups and asks a language model to answer only from them, with citations. One small server with Docker and Caddy hosts the site and every demo.</p>
`}</article>`,t.unlock(`reader`)}export{e as mount};