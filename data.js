/* =========================================================
   Données de révision — Droit constitutionnel
   Syntaxe : **gras**, ==surligné==
   ========================================================= */

const FICHES = [
  {
    id: "f0", num: "0", emoji: "🧭", titre: "Définition et objet du droit constitutionnel", groupe: "Introduction",
    sections: [
      { h: "L'objet : le pouvoir politique", items: [
        "Le pouvoir politique est **indispensable** à la survie et au développement des communautés, mais **dangereux** pour les droits et libertés.",
        "La contradiction : il faut ==organiser le pouvoir sans l'empêcher d'agir==, tout en le **limitant** pour protéger les individus."
      ]},
      { h: "Les sources", items: [
        "**Règles juridiques** : hiérarchisées, les constitutionnelles ont la valeur la plus haute.",
        "**Règles politiques** : usages, faits (ce qui EST, pas seulement ce qui DOIT être). Un usage devient « règle » quand les acteurs se sentent obligés de le suivre, mais ce n'est **pas une norme juridique**.",
        "Valeur constitutionnelle hors Constitution de 1958 : **DDHC 1789**, **Préambule de 1946**, **Charte de l'environnement 2005**, + règles jurisprudentielles du Conseil constitutionnel.",
        "Règles du DC **sans** valeur constitutionnelle : **lois organiques** et **règlements intérieurs des assemblées**."
      ]},
      { h: "La définition à retenir", items: [
        "==Ensemble des règles politiques et juridiques qui régissent d'une part l'organisation et l'exercice du pouvoir, d'autre part la garantie des droits et libertés.=="
      ]}
    ]
  },
  {
    id: "f1", num: "1", emoji: "🏰", titre: "La notion d'État", groupe: "Titre I – L'État",
    sections: [
      { h: "Chiffres", items: [
        "**195 États**, dont **193 reconnus par l'ONU** (hors Vatican et Palestine), contre **50 en 1945**."
      ]},
      { h: "1. L'État, institutionnalisation du pouvoir politique", items: [
        "Sens large : « société politique ». Le mot « État » se diffuse à la **fin du XVIᵉ s.**",
        "Le pouvoir politique s'impose à tous les autres pouvoirs et à tous les hommes sur le territoire, vise le bien de la communauté, impose l'intérêt général.",
        "Un pouvoir incarné par un homme est fragile (succession) → il est **désincarné** et confié à une **personne morale** (personnalité juridique : agir en justice, contracter).",
        "Double intérêt : (1) institutions permanentes (« ==les hommes passent, les institutions demeurent== ») ; (2) la volonté politique est **juridicisée** (règle de droit en vigueur tant qu'elle n'est pas abrogée).",
        "Formule : ==l'État est un ensemble d'institutions qui s'exprime par des normes juridiques.=="
      ]},
      { h: "2. Les théories contractuelles", items: [
        "Théologiens chrétiens : pouvoir **transcendant** (vient de Dieu). XVIᵉ s. : théories laïques, pouvoir **immanent** (vient du groupe).",
        "Point commun (Hobbes, Locke, Rousseau) : **état de nature** + droits naturels ; danger permanent (guerre de tous contre tous) → **contrat à l'unanimité** créant l'État.",
        "Ce sont des **spéculations**, pas des faits historiques. Intérêt : fonder la légitimité sur le **consentement**. Aucun n'est démocrate (Hobbes monarchiste, Locke aristocrate, Rousseau seul théoriquement démocrate)."
      ]},
      { h: "Conception absolutiste", items: [
        "**Hobbes** (*Le Léviathan*) : les hommes contractent **entre eux**, pas avec le souverain. Le souverain n'a aucune obligation, **pas de droit de rébellion**. Pouvoir **absolu**.",
        "**Rousseau** (*Du Contrat social*, **1762**) : aliénation totale de chacun envers tous à la **volonté générale**. Gain : réelle égalité et réelle liberté (politique, garantie par l'État)."
      ]},
      { h: "Conception libérale (fin XVIIᵉ s. ; Locke, Montesquieu)", items: [
        "Le danger pour l'individu, c'est l'État : il faut le **limiter**.",
        "**Locke** (*Second Traité du gouvernement civil*) : pas d'abandon des droits naturels, seulement une limitation. Si l'État dépasse son pouvoir : ==droit et devoir de rébellion==. Pouvoir **modéré** (modèle anglais).",
        "L'État est un **mal nécessaire** : **État gendarme** limité aux fonctions régaliennes (diplomatie, défense, justice, police), opposé à l'État providence."
      ]},
      { h: "3. L'État moderne", items: [
        "Naissance (XIIIᵉ-XVIᵉ s., France/Angleterre) : autorité sur tout le royaume (monopole interne) + indépendance vis-à-vis de l'Empereur et du pape (externe).",
        "**Machiavel** (*Le Prince*) : le pouvoir s'obtient par la force et la ruse.",
        "**Jean Bodin** (*Six livres de la République*) : l'État se caractérise par la **souveraineté** = « ==pouvoir de donner ou de casser la loi== »."
      ], piege: "C'est **Bodin**, pas « Gaudin » !" },
      { h: "4. Les 3 éléments constitutifs (droit international)", items: [
        "**Territoire** : terre, mer, air. Mer territoriale : **12 milles marins** (≈ 22 km), pleine souveraineté ; ZEE jusqu'à **200 milles** : droits souverains économiques ; espace aérien : pleine souveraineté.",
        "**Population** : peuple, lié par la **nationalité**. Plusieurs nations dans un État (Suisse, Belgique, RU…) ou une nation sur plusieurs États (Kurdes).",
        "**Souveraineté** : autorité suprême à l'intérieur, indépendance à l'extérieur.",
        "**Interne** : monopole de création du droit. Actes de souveraineté : rendre la justice, faire la loi, adopter/modifier la Constitution. Le souverain concret = le **peuple**.",
        "**Externe** : pas d'obligation sans consentement (révocable). Conséquences : **égalité des États** (1 État = 1 voix), **non-ingérence** (art. 2 §7 Charte ONU), sauf décision du Conseil de sécurité."
      ], piege: "**12** et **200** milles, pas 12 000 et 200 000 !" }
    ]
  },
  {
    id: "f2", num: "2", emoji: "🗺️", titre: "Les formes d'État", groupe: "Titre I – L'État",
    sections: [
      { h: "A. L'État unitaire (France)", items: [
        "Forme la plus courante, nécessairement **centralisé**, souvent combiné à décentralisation ou régionalisation.",
        "La **régionalisation** transfère un **pouvoir législatif** aux collectivités ; pas la décentralisation.",
        "**Compétence** = habilitation à exercer un pouvoir."
      ]},
      { h: "1. Centralisation", items: [
        "**Politique** : source unique du pouvoir. Art. 1 C : République **indivisible**. Un seul Parlement, une seule Constitution.",
        "**Administrative** (art. 20 C : le gouvernement dispose de l'administration). Deux degrés :",
        "**Concentration** : administrations locales totalement dépendantes des ministères.",
        "**Déconcentration** : pouvoir délégué à des autorités locales **de l'État** (préfet, recteur), sous **pouvoir hiérarchique** du ministre. Odilon Barrot : « ==c'est toujours le même marteau qui frappe, mais on en a raccourci le manche== ». Loi de 1992."
      ]},
      { h: "2. Décentralisation", items: [
        "Transfert de compétences à des **personnes morales de droit public distinctes de l'État**, avec autonomie, sous contrôle de l'État.",
        "**Fonctionnelle** : établissements publics (hôpitaux, universités) → contrôle de **tutelle**.",
        "**Territoriale** : collectivités territoriales, **art. 72 C**. **5 catégories** : régions, départements, communes, collectivités d'outre-mer, collectivités à statut particulier (Corse, Paris, Lyon…).",
        "Art. 72 al. 3 : **libre administration** par des conseils élus.",
        "Décentralisation **administrative**, pas politique : pas de pouvoir législatif.",
        "Contrôles : **budgétaire** (chambres régionales des comptes) et de **légalité** (préfecture).",
        "Résumé : l'État français est ==centralisé, concentré, décentralisé et déconcentré==."
      ], piege: "Les CT, c'est l'**art. 72**, pas l'art. 12 !" },
      { h: "B. L'État fédéral (États-Unis)", items: [
        "Autres : Suisse, Autriche, Belgique, Allemagne. Naissance par **association** (USA) ou **dislocation** (Belgique). Acte fondateur : une **Constitution** (USA : **1787**).",
        "**Participation** des États fédérés : révision de la Constitution, élection du Président par grands électeurs, **Sénat** (2 sénateurs par État) qui domine.",
        "**Autonomie** : auto-organisation constitutionnelle ; l'État fédéral a une **compétence d'attribution**, les États fédérés la **compétence de droit commun** (10ᵉ amendement).",
        "Qui est souverain ? ==L'État fédéral== : (1) loi fédérale s'impose ; (2) États fédérés pas acteurs internationaux ; (3) pas la **compétence de la compétence** ; (4) **pas de droit de sécession**."
      ], piege: "Constitution américaine : **1787**, pas 1987 !" },
      { h: "C. La confédération d'États", items: [
        "Naît d'un **traité international** (pas d'une Constitution).",
        "Les États restent **souverains** et acteurs internationaux.",
        "Décisions importantes à l'**unanimité** (veto). **Droit de retrait** (Brexit). Les États gardent la compétence de la compétence.",
        "**UE** : nature **sui generis**, mais ressemble à une confédération."
      ]}
    ]
  },
  {
    id: "f3", num: "3", emoji: "📜", titre: "La notion de Constitution", groupe: "Titre II – La Constitution",
    sections: [
      { h: "Définition libérale", items: [
        "==Organiser le pouvoir politique pour permettre son exercice et le limiter afin de protéger les droits.=="
      ]},
      { h: "Les 4 caractères", items: [
        "**Écrite** (en général un document unique).",
        "**Supériorité juridique**, protégée par le **contrôle de constitutionnalité**.",
        "**Rigidité** : révision selon une procédure plus lourde que la loi ordinaire.",
        "**Finalité libérale** : art. 16 DDHC : « ==Toute société dans laquelle la garantie des droits n'est pas assurée, ni la séparation des pouvoirs déterminée, n'a point de Constitution.== »",
        "Premières Constitutions écrites : **1787** (USA), **1791** (France)."
      ]},
      { h: "Écrite ou coutumière", items: [
        "Jusqu'à la fin du XVIIIᵉ s. : Constitutions coutumières (« lois fondamentales du Royaume »).",
        "**Coutume** : 3 conditions cumulatives : ==pratique répétée, sans discontinuité, reconnue comme obligatoire==.",
        "**Royaume-Uni** : coutumes + textes (Magna Carta 1215, Bill of Rights, Habeas Corpus) + règles jurisprudentielles.",
        "**Conventions de la Constitution** : usages devenus obligatoires ; ≠ coutume car elles s'analysent **par rapport à un texte**."
      ]},
      { h: "Rigide ou souple", items: [
        "**Souple** : pas de procédure particulière (RU, Israël, Nouvelle-Zélande).",
        "**Rigide** : procédure spéciale (majorité renforcée, référendum obligatoire, vote de confirmation…).",
        "Valeur constitutionnelle : critère **formel** pour une Constitution rigide ; le critère **matériel** ne vaut que pour les souples."
      ], piege: "« Souple » ≠ « très révisée » : le RU est souple mais peu révisé, la Suisse rigide mais très révisée. C'est la **procédure** qui est rigide." }
    ]
  },
  {
    id: "f4", num: "4", emoji: "✏️", titre: "Élaboration et révision de la Constitution", groupe: "Titre II – La Constitution",
    sections: [
      { h: "Pouvoir constituant", items: [
        "Sens **matériel** (pouvoir de faire/modifier la Constitution) et **organique** (l'organe qui l'exerce)."
      ]},
      { h: "A. Originaire", items: [
        "Crée une Constitution lors d'une rupture : ==initial et inconditionné==.",
        "3 modes : (1) approbation par le peuple d'un texte d'un gouvernement de fait ; (2) assemblée constituante ; (3) assemblée puis référendum (France 1946)."
      ]},
      { h: "B. Dérivé (institué, de révision)", items: [
        "Puise sa source dans la Constitution elle-même : pouvoir ==conditionné==.",
        "Art. 28 DDH 1793 : une génération ne peut assujettir les suivantes.",
        "Tension **stabilité / adaptabilité**.",
        "Peut-il changer de Constitution ? **Beaud** : non si ce sont des représentants ; pas d'obstacle si le peuple intervient."
      ]},
      { h: "C. Art. 89 : les 3 étapes", items: [
        "**Initiative** : parlementaires (proposition — ==aucune n'a abouti sous la Vᵉ==) ou Président sur proposition du PM (projet).",
        "**Adoption** : vote en termes identiques par chaque assemblée, à la majorité des **suffrages exprimés**. Veto égal des deux chambres (Badinter : « anti-démocratique »).",
        "**Approbation** : **référendum** (al. 2) ou **Congrès** à Versailles (al. 3, uniquement pour les projets) à la majorité des ==3/5 des suffrages exprimés==.",
        "**1962** : De Gaulle utilise l'**art. 11** pour l'élection du Président au SUD. **CC, 6 nov. 1962** : incompétent pour contrôler les lois référendaires. **1969** : « non » → De Gaulle démissionne."
      ], piege: "Cohabitations : **1986-1988**, **1993-1995**, **1997-2002**." },
      { h: "Limites à la révision", items: [
        "**Circonstancielles** : intérim présidentiel (art. 7) ; art. 16 (CC, 2 sept. 1992) ; atteinte à l'intégrité du territoire (art. 89 al. 4).",
        "**Matérielles** : ==forme républicaine du gouvernement== (art. 89 al. 5 ; loi du **14 août 1884**) ; transferts de compétences à la Nouvelle-Calédonie (art. 77).",
        "Le CC est incompétent pour les lois constitutionnelles, mais peut contrôler le **décret** convoquant les électeurs : **Hauchemaille** (25 juillet 2000), **Hauchemaille et Ménière** (24 mars 2005)."
      ]},
      { h: "Bilan des révisions", items: [
        "==25 révisions==, dont 2 sans l'art. 89. Avant 1992 : 5 ; 1992-2008 : 19 ; puis rien jusqu'à 2024.",
        "Société : 1999 parité, 2005 Charte de l'environnement, **8 mars 2024 IVG**.",
        "Système politique : 1962 SUD, **1974** saisine par 60 parlementaires, **2008** rééquilibrage pour le Parlement.",
        "Art. 54 : un traité contraire à la Constitution ne peut être ratifié qu'après révision. 1ʳᵉ inconstitutionnalité : **Maastricht, 1992**.",
        "Un traité **stipule**, une loi **dispose**.",
        "Conclusion : ==rigide ne veut pas dire rarement révisée== ; la révision est devenue un acte banal."
      ]}
    ]
  },
  {
    id: "f5", num: "5", emoji: "⚖️", titre: "Le contrôle de constitutionnalité (vue générale)", groupe: "Titre II – La Constitution",
    sections: [
      { h: "Hiérarchie des normes", items: [
        "Constitution → normes internationales → lois organiques → lois ordinaires → actes administratifs.",
        "**Kelsen** : une norme est valide si son auteur est compétent et si elle respecte la norme supérieure.",
        "En France, le CC a une compétence **exclusive** (modèle européen **centralisé**) ≠ modèle américain **diffus**."
      ]},
      { h: "A. Les États-Unis : naissance précoce", items: [
        "Convention de Philadelphie (1787), **Hamilton** : la Constitution (volonté du peuple) l'emporte sur la loi ; le juge est le pouvoir le moins dangereux.",
        "==Marbury v. Madison, 24 février 1803== : la Cour suprême se reconnaît compétente pour contrôler les lois."
      ], piege: "**Marbury v. Madison**, pas « Margary versus Maddison » 😅" },
      { h: "B. L'Europe : naissance tardive", items: [
        "**Sieyès** propose un « jury constitutionnaire » (**1795**), rejeté → Sénat conservateur (1799), organe politique inoffensif.",
        "3 raisons : méfiance envers les juges (Parlements d'Ancien Régime) ; approche institutionnelle ; ==mythe rousseauiste de l'infaillibilité de la loi== → légicentrisme.",
        "Après 1945 : Italie 1947, Allemagne 1949, France 1958, Portugal 1976, Espagne 1978 ; années 90 : **Europe de l'Est**.",
        "**Comité constitutionnel de 1946** : échec, ==une seule décision en 12 ans==."
      ], piege: "Sieyès : **1795**, pas 1975 ! Et la vague des années 90, c'est l'Europe de l'**Est**." },
      { h: "C. Les 4 caractéristiques d'un contrôle", items: [
        "**Moment** : a priori / a posteriori (pas d'a posteriori en France avant 2008).",
        "**Organe** : centralisé / diffus (risque : rupture d'égalité ; atténué aux USA par la règle du **précédent**).",
        "**Déclenchement** : voie d'**action** (recours direct, abstrait) / voie d'**exception** (soulevée au cours d'un procès, forcément a posteriori).",
        "**Substance** : abstrait / concret."
      ]}
    ]
  },
  {
    id: "f6", num: "6", emoji: "👩‍⚖️", titre: "Le Conseil constitutionnel ⭐ fiche centrale", groupe: "Titre II – La Constitution",
    sections: [
      { h: "1. Origine et évolution", items: [
        "Créé en **1958** pour imposer au Parlement la **rationalisation du parlementarisme**. Au départ : contrôle **formel** seulement.",
        "Aujourd'hui : ==gardien des droits et libertés et pilier de l'État de droit==, davantage une Cour constitutionnelle."
      ]},
      { h: "2. Composition (art. 56)", items: [
        "**Membres de droit** : anciens présidents de la République, à vie. Siègent très peu ; théorie des apparences → argument pour les supprimer.",
        "==9 membres nommés, 9 ans, renouvelés par tiers tous les 3 ans==. 3 par le Président de la République (dont le **président du CC**), 3 par le président de l'AN, 3 par le président du Sénat.",
        "Indépendance : **incompatibilités**, **inamovibilité**, mandat **non renouvelable**. L'indépendance permet l'impartialité sans la garantir.",
        "**2008** : audition par les commissions des lois ; nomination impossible si les votes négatifs atteignent ==3/5 des suffrages exprimés==.",
        "Critique : logique majoritaire → risque d'« amis politiques »."
      ]},
      { h: "3. Compétences", items: [
        "**Consultatif** : art. 16, textes sur élections présidentielles/référendums.",
        "**Juge électoral** : art. 58 (présidentielle), 59 (parlementaires), 60 (référendums).",
        "**Juge constitutionnel** : lois ordinaires (61 al. 2), lois organiques et règlements (61 al. 1), traités (54), QPC (61-1).",
        "==Il ne peut pas s'autosaisir.=="
      ]},
      { h: "4. Le contrôle a priori", items: [
        "**Obligatoire** : lois organiques, règlements des assemblées, propositions de loi RIP.",
        "**Facultatif** : lois ordinaires. 1958 : 4 autorités (PR, PM, présidents AN et Sénat). ==1974 : 60 députés ou 60 sénateurs== → l'opposition peut saisir. Traités : 60 parlementaires depuis 1992.",
        "Limites : facultatif ; lois en vigueur incontestables ; Constitution moins protégée que les traités."
      ]},
      { h: "5. La QPC (contrôle a posteriori)", items: [
        "Révision du **23 juillet 2008**, **art. 61-1** ; loi organique du **10 décembre 2009** ; en vigueur le ==1ᵉʳ mars 2010==.",
        "Un justiciable soutient qu'une disposition législative porte atteinte aux **droits et libertés** que la Constitution garantit. Peut être soulevée à tout moment.",
        "**Filtre du juge du fond** : (1) applicable au litige ; (2) pas déjà déclarée conforme ; (3) pas dépourvue de caractère sérieux.",
        "**Filtre Cour de cassation / Conseil d'État** : **3 mois** ; question nouvelle ou sérieuse ? (~**80 %** écartées).",
        "**CC** : **3 mois** pour répondre.",
        "Bilan : réformes importantes (ex. **garde à vue**)."
      ], piege: "QPC en vigueur en **2010**, pas en 2008 (2008 = la révision) !" },
      { h: "6. Le bloc de constitutionnalité", items: [
        "Constitution de 1958 (peu de droits et libertés) + Préambule → DDHC 1789 + Préambule 1946 + Charte de l'environnement 2005.",
        "==16 juillet 1971, « Liberté d'association »== : valeur constitutionnelle du Préambule → contrôle **matériel**.",
        "**PFRLR** : le CC en a reconnu **11**. 3 critères : (1) pouvoirs publics, droits et libertés ou souveraineté ; (2) loi républicaine **antérieure à 1946** ; (3) jamais dérogé. Ex. : loi de 1901.",
        "**OVC** : pluralisme, protection de la santé publique, lutte contre la fraude fiscale…",
        "**Principes à valeur constitutionnelle** : continuité du service public, dignité de la personne humaine…"
      ]},
      { h: "7. Les décisions", items: [
        "Art. 62 : ==sans recours==, s'imposent aux pouvoirs publics et à toutes les autorités.",
        "Non conforme a priori : si **séparable**, le reste entre en vigueur. A posteriori : **abrogation** (à date de la décision ou ultérieure)."
      ]},
      { h: "8. Le « gouvernement des juges »", items: [
        "Expression d'**Édouard Lambert** (**1921**). Montée en puissance : **1971, 1974, 2008**.",
        "Réponse : (1) pas d'autosaisine, seulement un pouvoir d'empêcher ; (2) l'interprétation est inhérente au juge ; (3) le politique a le **dernier mot** par la révision ; (4) le CC refuse de contrôler les lois constitutionnelles."
      ]}
    ]
  },
  {
    id: "f7", num: "7", emoji: "👑", titre: "Les théories de la souveraineté", groupe: "Titre III – La souveraineté du peuple",
    sections: [
      { h: "Démocratie", items: [
        "*demos* + *kratein*. **Lincoln** : « gouvernement du peuple, par le peuple, pour le peuple » (repris à l'**art. 2 C**).",
        "**Art. 3 al. 1** : ==la souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum.=="
      ]},
      { h: "A. Souveraineté populaire — Rousseau", items: [
        "Titulaire : le **peuple concret**, addition de parcelles de souveraineté (théorie atomistique).",
        "Volonté générale **inaliénable**, **indivisible**, **infaillible**.",
        "→ **électorat-droit**, suffrage universel ; **démocratie directe** ; commissaires à **mandat impératif**, révocables."
      ]},
      { h: "B. Souveraineté nationale — Sieyès, Montesquieu", items: [
        "Titulaire : la **nation**, entité abstraite (englobe les morts et les générations à venir).",
        "→ **système représentatif** ; **électorat-fonction** (suffrage restreint possible).",
        "**Mandat représentatif** : non révocable. ==Art. 27 C : « tout mandat impératif est nul »==."
      ]}
    ],
    tableau: {
      cols: ["", "Souveraineté populaire (Rousseau)", "Souveraineté nationale (Sieyès, Montesquieu)"],
      rows: [
        ["Titulaire", "Peuple concret (addition de parcelles)", "Nation abstraite (indivisible)"],
        ["Électorat", "Droit → suffrage universel", "Fonction → suffrage restreint possible"],
        ["Exercice", "Démocratie directe", "Régime représentatif"],
        ["Mandat", "Impératif, révocable", "Représentatif, non révocable"]
      ]
    }
  },
  {
    id: "f8", num: "8", emoji: "🗳️", titre: "Du système représentatif à la démocratie représentative", groupe: "Titre III – La souveraineté du peuple",
    sections: [
      { h: "A. Le suffrage censitaire", items: [
        "Sieyès : citoyens **actifs** / **passifs**. Hommes de plus de 25 ans payant le **cens**.",
        "1791 : ==3 journées de travail== (≈ 4,3 millions) ; 1795 : toute contribution directe (≈ 5 millions). Mais seuls des grands électeurs (≈ 1 %) élisaient les députés.",
        "Charte de 1814 (≈ 110 000 électeurs), Charte de 1830 (≈ 240 000)."
      ]},
      { h: "B. Le suffrage universel", items: [
        "**Décret du 11 août 1792** : hommes de 21 ans, mais vote à haute voix, abstention massive.",
        "Constitution de 1793 jamais appliquée. Empires : candidatures officielles. Vraie portée démocratique avec la ==IIIᵉ République==."
      ]},
      { h: "C. Vers la démocratie représentative", items: [
        "==Ordonnance du 21 avril 1944== : vote des femmes (1ʳᵉ application : municipales 1945).",
        "==Loi du 5 juillet 1974== : majorité électorale à 18 ans.",
        "Traité UE du 7 février 1992 : vote des citoyens de l'UE aux municipales (art. 88-3) et européennes.",
        "**1962** : Président élu au SUD (1ʳᵉ application **1965**).",
        "Référendum : 1793 ; plébiscites sous les Empires ; exclu sous la IIIᵉ ; IVᵉ : constitutionnel uniquement."
      ]}
    ]
  },
  {
    id: "f9", num: "9", emoji: "📮", titre: "Le référendum sous la Vᵉ République", groupe: "Titre III – La souveraineté du peuple",
    sections: [
      { h: "Définitions", items: [
        "**Peuple** : nationaux majeurs des deux sexes jouissant de leurs droits civils et politiques.",
        "**Représentants** : Président, députés, sénateurs (pas les élus locaux).",
        "**Référendum** : les citoyens adoptent ou abrogent un acte (oui/non) ≠ **consultation** (avis qui ne lie pas).",
        "L'**initiative populaire** n'existe pas en France (Suisse, Italie : oui)."
      ]},
      { h: "1. Art. 11 sur projet de loi", items: [
        "Initiative du **gouvernement** ou des **deux assemblées** conjointement (jamais utilisé).",
        "Décision du **Président** : décret ==dispensé de contreseing==."
      ]},
      { h: "Le RIP (art. 11 al. 3 à 6, 2008)", items: [
        "==1/5 des parlementaires (185) + 1/10 des électeurs inscrits (≈ 5 millions), 9 mois de collecte.==",
        "Une seule collecte ouverte : **aérodromes de Paris** (≈ 1,1 million).",
        "Pas d'abrogation d'une loi de moins d'un an ; après un « non », 2 ans d'attente.",
        "Double contrôle du CC ; examen par les assemblées en **6 mois**, sinon référendum.",
        "Verrouillé → méfiance historique envers le référendum."
      ]},
      { h: "Champ d'application", items: [
        "Lois ordinaires ou organiques. Domaines : organisation des pouvoirs publics, ratification d'un traité, politique économique/sociale/services publics (**1995**), politique environnementale (**2008**).",
        "Exclus : budget, immigration, religion, droit pénal."
      ]},
      { h: "La pratique", items: [
        "**Gaullienne** : 8 janv. 1961 (Algérie), 8 avril 1962 (Évian), 28 oct. 1962 (SUD), ==27 avril 1969 (non → démission)==.",
        "**Post-gaullienne** : 1972 (élargissement), 1988 (Nouvelle-Calédonie, 37 %), 1992 (Maastricht), ==29 mai 2005 (non à 54,7 %)== → traité de Lisbonne.",
        "Raréfaction : les gouvernants évitent le risque politique."
      ]},
      { h: "3. Art. 88-5 (adhésion à l'UE)", items: [
        "Introduit en **2005** (contexte : Turquie), modifié en **2008** : une motion aux ==3/5 dans chaque assemblée== permet de passer par le Congrès.",
        "Jamais appliqué."
      ]}
    ]
  },
  {
    id: "f10", num: "10", emoji: "🎟️", titre: "L'élection des représentants", groupe: "Titre III – La souveraineté du peuple",
    sections: [
      { h: "Principes", items: [
        "Mode principal d'exercice de la souveraineté (art. 3). Modes de scrutin fixés par la **loi ordinaire** (sauf la présidentielle).",
        "Risque : 1985 proportionnelle (socialistes) ; 2003 scrutin régional (droite)."
      ]},
      { h: "Vocabulaire", items: [
        "**Uninominal** : un seul siège ; **scrutin de liste** : plusieurs sièges.",
        "**Blancs** : sans choix ; **nuls** : non conformes.",
        "==Suffrages exprimés = votants − blancs − nuls==",
        "==Taux de participation = votants ÷ inscrits==",
        "« Élection législative » = **députés** uniquement."
      ], piege: "Participation = votants ÷ inscrits (et pas l'inverse !)" },
      { h: "Parrainages présidentiels", items: [
        "But : éviter les candidatures fantaisistes.",
        "==500 signatures d'élus · au moins 30 départements · max 50 par département==",
        "But de (2) et (3) : une représentativité **nationale**."
      ]}
    ]
  }
];

/* Distinctions & pense-bête */
const DISTINCTIONS = [
  ["Déconcentration", "autorités locales de l'État, pouvoir hiérarchique"],
  ["Décentralisation", "personnes morales distinctes, tutelle / contrôle"],
  ["Régionalisation", "pouvoir législatif transféré"],
  ["État fédéral", "souverain, Constitution, pas de sécession"],
  ["Confédération", "traité, États souverains, veto, retrait"],
  ["Rigide / souple", "une question de procédure ≠ souvent / rarement révisée"],
  ["Projet / proposition", "Exécutif / Parlement"],
  ["Adoption / approbation", "assemblées / référendum ou Congrès"],
  ["Majorités", "suffrages exprimés / absolue (membres) / 3/5"],
  ["Stipuler / disposer", "traité, contrat / loi"],
  ["Conventionnalité / constitutionnalité", "juges ordinaires / CC"],
  ["QPC", "juge du fond → Cass. ou CE → CC"],
  ["Originaire / dérivé", "initial, inconditionné / conditionné"]
];

const DATES = [
  ["1762", "Du Contrat social (Rousseau)"],
  ["1787", "Constitution américaine"],
  ["1791", "1ʳᵉ Constitution française"],
  ["1795", "Jury constitutionnaire (Sieyès)"],
  ["1803", "Marbury v. Madison"],
  ["1884", "Interdiction de réviser la forme républicaine"],
  ["1944", "Vote des femmes (21 avril)"],
  ["1946", "Comité constitutionnel"],
  ["1958", "Constitution et Conseil constitutionnel"],
  ["1962", "SUD du Président (art. 11) ; CC 6 nov. incompétent"],
  ["1969", "« Non » au référendum, De Gaulle démissionne"],
  ["1971", "Liberté d'association (16 juillet)"],
  ["1974", "Saisine par 60 parlementaires ; majorité à 18 ans"],
  ["1992", "Maastricht ; saisine 60 parl. pour les traités"],
  ["2000", "Hauchemaille (25 juillet)"],
  ["2005", "Charte de l'environnement ; « non » au traité constitutionnel"],
  ["2008", "Révision du 23 juillet : QPC, RIP, nominations, 88-5"],
  ["2009", "Loi organique QPC (10 décembre)"],
  ["2010", "Entrée en vigueur de la QPC (1ᵉʳ mars)"],
  ["2024", "IVG dans la Constitution (8 mars)"]
];

const CHIFFRES = [
  ["193", "États reconnus par l'ONU"],
  ["12 / 200", "milles : mer territoriale / ZEE"],
  ["9 · 9 · 3", "membres du CC · ans · renouvellement par tiers"],
  ["3/5", "majorité au Congrès"],
  ["3 + 3", "mois de filtre QPC (Cour suprême + CC)"],
  ["1/5 + 1/10", "parlementaires + inscrits pour le RIP"],
  ["9 · 6", "mois de collecte RIP · d'examen"],
  ["500 · 30 · 50", "parrainages · départements min · max par dpt"],
  ["25", "révisions de la Constitution"],
  ["11", "PFRLR reconnus par le CC"]
];

const PIEGES = [
  "Bodin (pas « Gaudin »)",
  "12 et 200 milles marins",
  "Constitution américaine de 1787",
  "Art. 72 (pas 12) pour les CT",
  "Marbury v. Madison",
  "Sieyès 1795",
  "Cohabitations 1986-88, 1993-95, 1997-2002",
  "QPC en vigueur en 2010",
  "Mitterrand président 1981-1995",
  "Participation = votants ÷ inscrits",
  "Vague des années 90 en Europe de l'Est"
];

/* =========================================================
   QUIZ — a = index de la bonne réponse dans o
   ========================================================= */
const QUIZ = [
  // Fiche 0
  { f: "f0", q: "Lequel de ces textes n'a PAS valeur constitutionnelle ?", o: ["Les règlements intérieurs des assemblées", "La DDHC de 1789", "Le Préambule de 1946", "La Charte de l'environnement"], a: 0, e: "Les règlements des assemblées et les lois organiques sont des règles du DC sans valeur constitutionnelle." },
  { f: "f0", q: "Un usage politique que les acteurs se sentent obligés de suivre est…", o: ["Une « règle », mais pas une norme juridique", "Une norme constitutionnelle", "Une loi organique", "Nul et non avenu"], a: 0, e: "Il devient « règle » politique, mais ce n'est pas une norme juridique." },
  { f: "f0", q: "Le droit constitutionnel régit l'organisation du pouvoir et…", o: ["La garantie des droits et libertés", "Les contrats entre particuliers", "Le droit pénal", "La politique étrangère uniquement"], a: 0, e: "Définition : organisation et exercice du pouvoir + garantie des droits et libertés." },

  // Fiche 1
  { f: "f1", q: "Combien d'États sont reconnus par l'ONU ?", o: ["193", "195", "50", "211"], a: 0, e: "195 États, dont 193 reconnus par l'ONU (hors Vatican et Palestine)." },
  { f: "f1", q: "Quelle est la largeur de la mer territoriale ?", o: ["12 milles marins", "12 000 milles marins", "200 milles marins", "22 milles marins"], a: 0, e: "12 milles (≈ 22 km). 200 milles, c'est la ZEE." },
  { f: "f1", q: "Jusqu'où s'étend la ZEE ?", o: ["200 milles", "200 000 milles", "12 milles", "100 km"], a: 0, e: "ZEE jusqu'à 200 milles : droits souverains économiques." },
  { f: "f1", q: "Qui a écrit Le Léviathan ?", o: ["Hobbes", "Locke", "Rousseau", "Machiavel"], a: 0, e: "Hobbes, conception absolutiste : pas de droit de rébellion." },
  { f: "f1", q: "Pour quel auteur existe-t-il un droit ET un devoir de rébellion si l'État dépasse son pouvoir ?", o: ["Locke", "Hobbes", "Rousseau", "Bodin"], a: 0, e: "Locke, conception libérale (Second Traité du gouvernement civil)." },
  { f: "f1", q: "« Le pouvoir de donner ou de casser la loi » : définition de la souveraineté selon…", o: ["Jean Bodin", "Jean Gaudin", "Machiavel", "Montesquieu"], a: 0, e: "Jean Bodin, Six livres de la République. (Gaudin, c'était le piège 😏)" },
  { f: "f1", q: "Du Contrat social date de…", o: ["1762", "1789", "1651", "1791"], a: 0, e: "Rousseau, Du Contrat social, 1762." },
  { f: "f1", q: "Lequel n'est PAS un élément constitutif de l'État en droit international ?", o: ["Une Constitution écrite", "Un territoire", "Une population", "Une souveraineté"], a: 0, e: "Les 3 éléments : territoire, population, souveraineté." },
  { f: "f1", q: "Le principe de non-ingérence figure à…", o: ["L'art. 2 §7 de la Charte de l'ONU", "L'art. 16 de la DDHC", "L'art. 89 de la Constitution", "L'art. 1 du traité de Maastricht"], a: 0, e: "Art. 2 §7 Charte ONU, sauf décision du Conseil de sécurité." },
  { f: "f1", q: "Laquelle n'est PAS une fonction régalienne de l'État gendarme ?", o: ["La santé publique", "La diplomatie", "La justice", "La police"], a: 0, e: "Régalien : diplomatie, défense, justice, police." },
  { f: "f1", q: "Pour Machiavel (Le Prince), le pouvoir s'obtient…", o: ["Par la force et la ruse", "Par la volonté de Dieu", "Par le contrat social", "Par l'élection"], a: 0, e: "Rupture avec l'origine divine du pouvoir." },
  { f: "f1", q: "Chez Hobbes, les hommes contractent…", o: ["Entre eux, pas avec le souverain", "Avec le souverain", "Avec Dieu", "Avec le pape"], a: 0, e: "Le souverain n'a donc aucune obligation envers eux." },

  // Fiche 2
  { f: "f2", q: "« C'est toujours le même marteau qui frappe, mais on en a raccourci le manche » décrit…", o: ["La déconcentration", "La décentralisation", "La régionalisation", "Le fédéralisme"], a: 0, e: "Odilon Barrot : le préfet agit au nom du ministre, sous son pouvoir hiérarchique." },
  { f: "f2", q: "Qu'est-ce qui distingue la régionalisation de la décentralisation ?", o: ["Le transfert d'un pouvoir législatif", "L'existence d'un préfet", "L'élection des conseils", "Le contrôle de légalité"], a: 0, e: "La régionalisation transfère un pouvoir législatif ; la décentralisation reste administrative." },
  { f: "f2", q: "Quel article de la Constitution porte sur les collectivités territoriales ?", o: ["Art. 72", "Art. 12", "Art. 20", "Art. 89"], a: 0, e: "Art. 72 (et pas 12 comme dans les notes 😉)." },
  { f: "f2", q: "Combien de catégories de collectivités territoriales à l'art. 72 al. 1 ?", o: ["5", "3", "4", "7"], a: 0, e: "Régions, départements, communes, COM, collectivités à statut particulier." },
  { f: "f2", q: "Sur les établissements publics, l'État exerce un contrôle de…", o: ["Tutelle", "Pouvoir hiérarchique", "Constitutionnalité", "Conventionnalité"], a: 0, e: "Décentralisation fonctionnelle → contrôle de tutelle." },
  { f: "f2", q: "Date de la Constitution américaine ?", o: ["1787", "1987", "1791", "1803"], a: 0, e: "1787 (pas 1987 !)." },
  { f: "f2", q: "Combien de sénateurs par État aux États-Unis ?", o: ["2", "1", "Proportionnel à la population", "5"], a: 0, e: "Égalité des États au Sénat : 2 sénateurs chacun." },
  { f: "f2", q: "Une confédération naît…", o: ["D'un traité international", "D'une Constitution", "D'un référendum", "D'une loi organique"], a: 0, e: "L'État fédéral naît d'une Constitution, la confédération d'un traité." },
  { f: "f2", q: "Aux États-Unis, la compétence de droit commun appartient…", o: ["Aux États fédérés", "À l'État fédéral", "À la Cour suprême", "Au Congrès"], a: 0, e: "10ᵉ amendement ; l'État fédéral n'a qu'une compétence d'attribution." },
  { f: "f2", q: "Vrai ou faux : dans un État fédéral, les États fédérés ont un droit de sécession.", o: ["Faux", "Vrai"], a: 0, e: "Pas de droit de sécession (guerre de Sécession). C'est la confédération qui a un droit de retrait." },
  { f: "f2", q: "Le préfet est soumis…", o: ["Au pouvoir hiérarchique du ministre", "À la tutelle du conseil régional", "Au contrôle du Conseil constitutionnel", "À personne"], a: 0, e: "Déconcentration : instructions, annulation, réformation." },
  { f: "f2", q: "Qui contrôle la légalité des actes des collectivités territoriales ?", o: ["La préfecture", "Le Sénat", "Le Conseil constitutionnel", "Le maire"], a: 0, e: "Contrôle de légalité par la préfecture ; budgétaire par les chambres régionales des comptes." },
  { f: "f2", q: "Juridiquement, l'Union européenne est…", o: ["Sui generis, proche d'une confédération", "Un État fédéral", "Un État unitaire", "Une simple ONG"], a: 0, e: "Entre fédération, confédération et organisation internationale." },

  // Fiche 3
  { f: "f3", q: "« Toute société dans laquelle la garantie des droits n'est pas assurée… n'a point de Constitution » : quel article ?", o: ["Art. 16 DDHC", "Art. 1 DDHC", "Art. 89 C", "Art. 3 C"], a: 0, e: "Art. 16 DDHC : garantie des droits + séparation des pouvoirs." },
  { f: "f3", q: "Laquelle n'est PAS une condition de la coutume ?", o: ["Être écrite", "Pratique répétée", "Sans discontinuité", "Reconnue comme obligatoire"], a: 0, e: "La coutume est non écrite (mais peut être codifiée)." },
  { f: "f3", q: "Lequel de ces pays a une Constitution souple ?", o: ["Royaume-Uni", "France", "États-Unis", "Suisse"], a: 0, e: "Souples : RU, Israël, Nouvelle-Zélande." },
  { f: "f3", q: "Vrai ou faux : une Constitution souple est forcément très souvent révisée.", o: ["Faux", "Vrai"], a: 0, e: "RU souple mais peu révisé, Suisse rigide mais très révisée. C'est la procédure qui compte." },
  { f: "f3", q: "Premières Constitutions écrites ?", o: ["1787 (USA) et 1791 (France)", "1215 et 1689", "1789 et 1958", "1776 et 1804"], a: 0, e: "Mouvement constitutionnaliste du XVIIIᵉ s." },
  { f: "f3", q: "Qu'est-ce qui distingue une convention de la Constitution d'une coutume ?", o: ["Elle s'analyse par rapport à un texte", "Elle est écrite", "Elle est votée par le Parlement", "Elle vient du juge"], a: 0, e: "La convention s'analyse par rapport à la Constitution écrite." },
  { f: "f3", q: "Pour une Constitution rigide, la valeur constitutionnelle dépend d'un critère…", o: ["Formel / procédural", "Matériel", "Moral", "Historique"], a: 0, e: "Le critère matériel ne vaut que pour les Constitutions souples." },

  // Fiche 4
  { f: "f4", q: "Le pouvoir constituant originaire est…", o: ["Initial et inconditionné", "Dérivé et conditionné", "Exercé par le Congrès", "Contrôlé par le CC"], a: 0, e: "Il intervient en l'absence de Constitution, sans règle à respecter." },
  { f: "f4", q: "Combien de propositions de loi constitutionnelle (initiative parlementaire) ont abouti sous la Vᵉ ?", o: ["Aucune", "Une", "Cinq", "Dix-neuf"], a: 0, e: "Aucune n'a jamais abouti." },
  { f: "f4", q: "Au Congrès, une révision est approuvée à la majorité…", o: ["Des 3/5 des suffrages exprimés", "Absolue des membres", "Des 2/3", "Simple"], a: 0, e: "Art. 89 al. 3 : 3/5 des suffrages exprimés." },
  { f: "f4", q: "La voie du Congrès est possible uniquement pour…", o: ["Les projets de révision", "Les propositions de révision", "Les deux", "Les lois organiques"], a: 0, e: "Projet = initiative de l'exécutif." },
  { f: "f4", q: "En 1962, De Gaulle fait adopter l'élection du Président au SUD via…", o: ["L'art. 11", "L'art. 89", "L'art. 16", "L'art. 49-3"], a: 0, e: "Contournement de l'art. 89, assemblées hostiles." },
  { f: "f4", q: "Dans sa décision du 6 novembre 1962, le CC se déclare…", o: ["Incompétent pour contrôler les lois référendaires", "Compétent et censure la loi", "Compétent et valide la loi", "Dissous"], a: 0, e: "Le CC refuse de contrôler l'expression directe de la souveraineté." },
  { f: "f4", q: "Que se passe-t-il après le « non » au référendum de 1969 ?", o: ["De Gaulle démissionne", "Le Sénat est supprimé", "La régionalisation est adoptée", "Pompidou est destitué"], a: 0, e: "Référendum sur la régionalisation et le Sénat." },
  { f: "f4", q: "La forme républicaine du gouvernement ne peut faire l'objet d'une révision depuis…", o: ["La loi constitutionnelle du 14 août 1884", "1958", "1946", "1791"], a: 0, e: "Reprise à l'art. 89 al. 5." },
  { f: "f4", q: "Pendant un intérim présidentiel, la révision par l'art. 89 est…", o: ["Interdite", "Obligatoire", "Possible par référendum seulement", "Possible si le Sénat est d'accord"], a: 0, e: "Limite circonstancielle (art. 7)." },
  { f: "f4", q: "Les décisions Hauchemaille montrent que le CC peut contrôler…", o: ["Le décret convoquant les électeurs", "Les lois constitutionnelles", "Les lois référendaires", "Les traités ratifiés"], a: 0, e: "Contrôle en amont du décret (art. 60)." },
  { f: "f4", q: "Combien de fois la Constitution de 1958 a-t-elle été révisée ?", o: ["25", "12", "19", "40"], a: 0, e: "25 révisions, dont 2 sans l'art. 89." },
  { f: "f4", q: "L'IVG est entrée dans la Constitution le…", o: ["8 mars 2024", "23 juillet 2008", "1ᵉʳ mars 2010", "8 mars 2023"], a: 0, e: "Art. 34 ; le sujet dépassait les clivages." },
  { f: "f4", q: "Premier traité jugé contraire à la Constitution ?", o: ["Maastricht (1992)", "Lisbonne (2007)", "Traité de Rome (1957)", "Traité constitutionnel (2005)"], a: 0, e: "Art. 54 : il faut réviser la Constitution avant ratification." },
  { f: "f4", q: "Laquelle n'est PAS une période de cohabitation ?", o: ["1981-1983", "1986-1988", "1993-1995", "1997-2002"], a: 0, e: "Cohabitations : 1986-88, 1993-95, 1997-2002." },
  { f: "f4", q: "Un traité ___, une loi ___.", o: ["stipule / dispose", "dispose / stipule", "décrète / ordonne", "prévoit / interdit"], a: 0, e: "Stipulation (traité, contrat) / disposition (loi)." },
  { f: "f4", q: "Pour Beaud, des représentants peuvent-ils changer de Constitution par la révision ?", o: ["Non, contradiction juridico-logique", "Oui, toujours", "Oui, avec le Sénat", "Seulement en cohabitation"], a: 0, e: "Ils supprimeraient la base de leurs propres compétences." },

  // Fiche 5
  { f: "f5", q: "Marbury v. Madison, c'est en…", o: ["1803", "1787", "1903", "1958"], a: 0, e: "24 février 1803 : la Cour suprême se reconnaît compétente." },
  { f: "f5", q: "Le « jury constitutionnaire » de Sieyès date de…", o: ["1795", "1975", "1789", "1799"], a: 0, e: "1795 (pas 1975 !). Rejeté, mais source du Sénat conservateur." },
  { f: "f5", q: "Combien de décisions le Comité constitutionnel de 1946 a-t-il rendues ?", o: ["Une seule en 12 ans", "Une centaine", "Aucune", "Douze"], a: 0, e: "Organe politique, saisine très restrictive : échec." },
  { f: "f5", q: "Le modèle américain de contrôle est…", o: ["Diffus", "Centralisé", "Inexistant", "Politique"], a: 0, e: "Toutes les juridictions contrôlent ; atténué par la règle du précédent." },
  { f: "f5", q: "La voie d'exception, c'est…", o: ["Une question soulevée au cours d'un procès", "Un recours direct contre la loi", "Un contrôle a priori", "Un veto présidentiel"], a: 0, e: "Forcément a posteriori." },
  { f: "f5", q: "Qui a théorisé la hiérarchie des normes ?", o: ["Kelsen", "Hamilton", "Sieyès", "Lambert"], a: 0, e: "Une norme est valide si son auteur est compétent et qu'elle respecte la norme supérieure." },
  { f: "f5", q: "Le légicentrisme français vient…", o: ["Du mythe rousseauiste de l'infaillibilité de la loi", "Du modèle américain", "De la Charte de 1814", "De Bodin"], a: 0, e: "La loi, expression de la volonté générale, ne peut mal faire." },
  { f: "f5", q: "La vague de juridictions constitutionnelles des années 90 concerne…", o: ["L'Europe de l'Est", "L'Europe de l'Ouest", "L'Amérique latine", "L'Asie"], a: 0, e: "Les nouvelles démocraties qui retrouvent leurs libertés." },
  { f: "f5", q: "Le contrôle de conventionnalité est exercé par…", o: ["Les juges judiciaire et administratif", "Le Conseil constitutionnel", "Le Parlement", "Le Président"], a: 0, e: "Conventionnalité (lois / traités) : juges ordinaires." },

  // Fiche 6
  { f: "f6", q: "Composition du CC (membres nommés) ?", o: ["9 membres, 9 ans, par tiers tous les 3 ans", "12 membres, 6 ans", "9 membres, à vie", "7 membres, 5 ans"], a: 0, e: "3 par le PR, 3 par le président de l'AN, 3 par le président du Sénat." },
  { f: "f6", q: "Qui nomme le président du Conseil constitutionnel ?", o: ["Le Président de la République", "Le président du Sénat", "Les membres entre eux", "Le Premier ministre"], a: 0, e: "Il fait partie des 3 nommés par le PR." },
  { f: "f6", q: "Les membres de droit du CC sont…", o: ["Les anciens présidents de la République", "Les anciens Premiers ministres", "Les présidents des assemblées", "Les premiers présidents des Cours suprêmes"], a: 0, e: "À vie, mais ils siègent très peu." },
  { f: "f6", q: "Depuis 2008, une nomination au CC est bloquée si les votes négatifs atteignent…", o: ["3/5 des suffrages exprimés", "La majorité absolue", "2/3 des membres", "1/2 des votants"], a: 0, e: "Audition devant les commissions des lois." },
  { f: "f6", q: "La décision du 16 juillet 1971 s'appelle…", o: ["Liberté d'association", "Hauchemaille", "Maastricht", "Liberté d'expression"], a: 0, e: "Valeur constitutionnelle du Préambule → contrôle matériel." },
  { f: "f6", q: "En 1974, la saisine du CC est ouverte à…", o: ["60 députés ou 60 sénateurs", "Tout citoyen", "Les maires", "185 parlementaires"], a: 0, e: "L'opposition peut saisir : explosion de la jurisprudence." },
  { f: "f6", q: "La QPC est entrée en vigueur le…", o: ["1ᵉʳ mars 2010", "23 juillet 2008", "10 décembre 2009", "1ᵉʳ janvier 2008"], a: 0, e: "2008 = révision ; 2009 = loi organique ; 2010 = application." },
  { f: "f6", q: "La QPC est prévue à l'article…", o: ["61-1", "61", "62", "54"], a: 0, e: "Art. 61-1, révision du 23 juillet 2008." },
  { f: "f6", q: "De combien de temps la Cour de cassation ou le Conseil d'État disposent-ils pour filtrer une QPC ?", o: ["3 mois", "1 mois", "6 mois", "9 mois"], a: 0, e: "Puis 3 mois pour le CC." },
  { f: "f6", q: "Environ quelle part des QPC est écartée au filtre des Cours suprêmes ?", o: ["80 %", "20 %", "50 %", "5 %"], a: 0, e: "Ce qui évite l'engorgement du CC." },
  { f: "f6", q: "Combien de PFRLR le CC a-t-il reconnus ?", o: ["11", "3", "25", "Aucun"], a: 0, e: "Liberté d'association, indépendance de la juridiction administrative, justice pénale des mineurs…" },
  { f: "f6", q: "Un PFRLR doit être reconnu par une loi républicaine…", o: ["Antérieure à 1946", "Postérieure à 1958", "Antérieure à 1789", "Récente"], a: 0, e: "Et aucune loi républicaine antérieure à 1946 ne doit y avoir dérogé." },
  { f: "f6", q: "L'expression « gouvernement des juges » vient de…", o: ["Édouard Lambert (1921)", "Robert Badinter", "Charles de Gaulle", "Hans Kelsen"], a: 0, e: "À propos de la Cour suprême américaine." },
  { f: "f6", q: "Vrai ou faux : le Conseil constitutionnel peut s'autosaisir.", o: ["Faux", "Vrai"], a: 0, e: "Il doit être saisi ; il n'a qu'un pouvoir d'empêcher." },
  { f: "f6", q: "Quel contrôle est obligatoire ?", o: ["Celui des lois organiques", "Celui des lois ordinaires", "Celui des décrets", "Celui des lois constitutionnelles"], a: 0, e: "Aussi : règlements des assemblées, propositions RIP." },
  { f: "f6", q: "Les décisions du CC…", o: ["Ne sont susceptibles d'aucun recours", "Peuvent être contestées devant le Conseil d'État", "Peuvent être annulées par le Président", "Sont de simples avis"], a: 0, e: "Art. 62 : elles s'imposent à toutes les autorités." },
  { f: "f6", q: "La lutte contre la fraude fiscale est…", o: ["Un objectif à valeur constitutionnelle", "Un PFRLR", "Un article de la DDHC", "Une loi organique"], a: 0, e: "OVC : pluralisme, santé publique, fraude fiscale…" },
  { f: "f6", q: "Une disposition jugée non conforme en QPC est…", o: ["Abrogée (à la décision ou plus tard)", "Simplement écartée du procès", "Renvoyée au Parlement pour avis", "Maintenue"], a: 0, e: "Le CC peut différer l'abrogation pour éviter un vide juridique." },
  { f: "f6", q: "À l'origine (1958), le CC devait surtout…", o: ["Imposer au Parlement la rationalisation du parlementarisme", "Protéger les droits et libertés", "Juger le Président", "Contrôler les traités"], a: 0, e: "Contrôle formel ; il est devenu gardien des droits et libertés." },
  { f: "f6", q: "Une QPC illustre quelle réforme importante ?", o: ["La garde à vue", "Le vote des femmes", "Le quinquennat", "La parité"], a: 0, e: "La QPC purge l'ordre juridique des dispositions inconstitutionnelles." },

  // Fiche 7
  { f: "f7", q: "Dans la souveraineté populaire (Rousseau), l'électorat est…", o: ["Un droit", "Une fonction", "Un privilège", "Héréditaire"], a: 0, e: "Électorat-droit → suffrage universel le plus large." },
  { f: "f7", q: "Dans la souveraineté nationale, l'électorat est…", o: ["Une fonction", "Un droit", "Obligatoire pour tous", "Interdit"], a: 0, e: "D'où un suffrage restreint possible." },
  { f: "f7", q: "« Tout mandat impératif est nul » : article…", o: ["27", "3", "16", "89"], a: 0, e: "Art. 27 C : mandat représentatif." },
  { f: "f7", q: "La formule de Lincoln est reprise à l'article…", o: ["2", "1", "3", "5"], a: 0, e: "« Gouvernement du peuple, par le peuple, pour le peuple »." },
  { f: "f7", q: "Selon Rousseau, la volonté générale est…", o: ["Inaliénable, indivisible, infaillible", "Représentable et divisible", "Fonction de la nation", "Héréditaire"], a: 0, e: "« Personne ne peut vouloir à la place d'un autre »." },
  { f: "f7", q: "La nation (souveraineté nationale) est…", o: ["Une entité abstraite incluant morts et générations futures", "L'addition des citoyens vivants", "Le Parlement", "Le chef de l'État"], a: 0, e: "La souveraineté n'existe que collectivement." },

  // Fiche 8
  { f: "f8", q: "Le vote des femmes date de…", o: ["L'ordonnance du 21 avril 1944", "La loi du 5 juillet 1974", "1848", "1958"], a: 0, e: "1ʳᵉ application aux municipales de 1945." },
  { f: "f8", q: "La majorité électorale passe à 18 ans avec…", o: ["La loi du 5 juillet 1974", "L'ordonnance de 1944", "La révision de 1962", "Le traité de Maastricht"], a: 0, e: "Contre 21 ans auparavant." },
  { f: "f8", q: "En 1791, le cens équivaut à…", o: ["3 journées de travail", "1 mois de salaire", "Une propriété", "Rien"], a: 0, e: "≈ 4,3 millions de citoyens actifs." },
  { f: "f8", q: "Le décret du 11 août 1792 donne le vote aux…", o: ["Hommes de 21 ans", "Hommes et femmes de 18 ans", "Propriétaires", "Nobles"], a: 0, e: "Mais vote public à haute voix, abstention massive." },
  { f: "f8", q: "Première élection du Président au suffrage universel direct sous la Vᵉ ?", o: ["1965", "1962", "1958", "1969"], a: 0, e: "Révision de 1962, première application en 1965." },
  { f: "f8", q: "Le suffrage universel prend une véritable portée démocratique avec…", o: ["La IIIᵉ République", "Le Second Empire", "La Restauration", "Le Consulat"], a: 0, e: "Les Empires faussaient le vote (candidatures officielles, plébiscites)." },

  // Fiche 9
  { f: "f9", q: "Le RIP exige…", o: ["1/5 des parlementaires + 1/10 des inscrits", "1/10 des parlementaires + 1/5 des inscrits", "500 parrainages", "La majorité des 3/5"], a: 0, e: "185 parlementaires + ≈ 5 millions d'électeurs." },
  { f: "f9", q: "Durée de la collecte des soutiens pour un RIP ?", o: ["9 mois", "6 mois", "3 mois", "1 an"], a: 0, e: "Puis 6 mois d'examen par les assemblées." },
  { f: "f9", q: "Le seul RIP ayant ouvert la collecte portait sur…", o: ["Les aérodromes de Paris", "Les retraites", "L'immigration", "Le climat"], a: 0, e: "≈ 1,1 million de soutiens." },
  { f: "f9", q: "Résultat du référendum du 29 mai 2005 ?", o: ["« Non » à 54,7 %", "« Oui » à 54,7 %", "« Non » à 51 %", "Annulé"], a: 0, e: "Traité constitutionnel européen, remplacé par Lisbonne." },
  { f: "f9", q: "L'art. 88-5 concerne…", o: ["L'adhésion d'un État à l'UE", "La QPC", "La révision", "Les collectivités"], a: 0, e: "Introduit en 2005, modifié en 2008, jamais appliqué." },
  { f: "f9", q: "Depuis 2008, comment éviter le référendum de l'art. 88-5 ?", o: ["Motion aux 3/5 dans chaque assemblée → Congrès", "Décision du Président seul", "Avis du CC", "Vote du Sénat seul"], a: 0, e: "Principe référendaire avec dérogation à majorité renforcée." },
  { f: "f9", q: "Vrai ou faux : l'initiative populaire existe en France.", o: ["Faux", "Vrai"], a: 0, e: "Elle existe en Suisse et en Italie." },
  { f: "f9", q: "Quel domaine est EXCLU du référendum de l'art. 11 ?", o: ["Le droit pénal", "L'organisation des pouvoirs publics", "La politique environnementale", "La ratification d'un traité"], a: 0, e: "Exclus aussi : budget, immigration, religion." },
  { f: "f9", q: "Le décret présidentiel soumettant un projet au référendum de l'art. 11 est…", o: ["Dispensé de contreseing", "Contresigné par le PM", "Voté par le Parlement", "Validé par le CC"], a: 0, e: "La décision appartient au Président." },
  { f: "f9", q: "Le référendum du 27 avril 1969 portait sur…", o: ["La régionalisation et le Sénat", "L'Algérie", "L'Europe", "Le SUD du Président"], a: 0, e: "Deux sujets, Français attachés au Sénat → non." },
  { f: "f9", q: "Après un référendum RIP négatif, nouvelle proposition sur le même sujet impossible pendant…", o: ["2 ans", "1 an", "5 ans", "6 mois"], a: 0, e: "Art. 11 al. 6." },
  { f: "f9", q: "Référendum vs consultation : la consultation…", o: ["Donne un avis qui ne lie pas", "Adopte une loi", "Révise la Constitution", "N'existe pas"], a: 0, e: "Le référendum, lui, adopte ou abroge un acte." },

  // Fiche 10
  { f: "f10", q: "Taux de participation = ?", o: ["Votants ÷ inscrits", "Inscrits ÷ votants", "Exprimés ÷ votants", "Votants − blancs"], a: 0, e: "Et pas l'inverse 😌" },
  { f: "f10", q: "Suffrages exprimés = ?", o: ["Votants − blancs − nuls", "Inscrits − abstentions", "Votants + blancs", "Inscrits − nuls"], a: 0, e: "Ceux qui ont fait un choix." },
  { f: "f10", q: "Combien de parrainages pour être candidat à la présidentielle ?", o: ["500", "185", "1 000", "60"], a: 0, e: "D'élus (parlementaires, maires, conseillers…)." },
  { f: "f10", q: "Les parrainages doivent venir d'au moins combien de départements ?", o: ["30", "50", "10", "100"], a: 0, e: "Et pas plus de 50 par département." },
  { f: "f10", q: "Maximum de parrainages comptés dans un même département ?", o: ["50", "30", "100", "500"], a: 0, e: "But : représentativité nationale." },
  { f: "f10", q: "Qui a instauré la proportionnelle en 1985 ?", o: ["Les socialistes", "La droite", "De Gaulle", "Le CC"], a: 0, e: "Pour atténuer leur défaite prévisible de 1986." },
  { f: "f10", q: "Le scrutin uninominal signifie…", o: ["Un seul siège à pourvoir", "Un seul tour", "Un seul parti", "Une seule liste"], a: 0, e: "Scrutin de liste = plusieurs sièges." },
  { f: "f10", q: "Les modes de scrutin relèvent en principe…", o: ["De la loi ordinaire", "De la Constitution", "Des traités", "Des décrets"], a: 0, e: "Sauf la présidentielle, fixée par la Constitution." },
  { f: "f10", q: "Une « élection législative » concerne…", o: ["Les députés uniquement", "Les sénateurs", "Les députés et les sénateurs", "Le Président"], a: 0, e: "Les sénateurs sont élus au suffrage indirect." }
];

/* =========================================================
   FLASHCARDS
   ========================================================= */
const FLASHCARDS = [
  { f: "f0", r: "Définition du droit constitutionnel", v: "Ensemble des règles politiques et juridiques qui régissent l'organisation et l'exercice du pouvoir, et la garantie des droits et libertés." },
  { f: "f1", r: "Les 3 éléments constitutifs de l'État", v: "Territoire · Population · Souveraineté" },
  { f: "f1", r: "Hobbes vs Locke", v: "Hobbes : pouvoir absolu, pas de rébellion.\nLocke : pouvoir modéré, droit ET devoir de rébellion." },
  { f: "f1", r: "Définition de la souveraineté (Bodin)", v: "« Le pouvoir de donner ou de casser la loi »" },
  { f: "f1", r: "Mer territoriale / ZEE", v: "12 milles (pleine souveraineté) / 200 milles (droits économiques)" },
  { f: "f1", r: "L'État, en une formule", v: "Un ensemble d'institutions qui s'exprime par des normes juridiques." },
  { f: "f2", r: "Déconcentration", v: "Pouvoir délégué à des autorités locales DE L'ÉTAT (préfet), sous pouvoir hiérarchique.\n« Même marteau, manche raccourci »" },
  { f: "f2", r: "Décentralisation", v: "Transfert à des personnes morales DISTINCTES de l'État, autonomes, sous contrôle (tutelle / légalité). Administrative, pas législative." },
  { f: "f2", r: "Régionalisation", v: "Transfert d'un pouvoir LÉGISLATIF aux collectivités." },
  { f: "f2", r: "Pourquoi l'État fédéral est souverain (4 raisons)", v: "1. Loi fédérale s'impose\n2. États fédérés pas acteurs internationaux\n3. Pas la compétence de la compétence\n4. Pas de sécession" },
  { f: "f2", r: "Fédération vs Confédération", v: "Fédération : Constitution, souveraineté fédérale, pas de sécession.\nConfédération : traité, États souverains, veto, droit de retrait." },
  { f: "f3", r: "Les 4 caractères de la Constitution", v: "Écrite · Supériorité juridique · Rigidité · Finalité libérale" },
  { f: "f3", r: "Art. 16 DDHC", v: "Pas de garantie des droits ni de séparation des pouvoirs = pas de Constitution." },
  { f: "f3", r: "3 conditions de la coutume", v: "Pratique répétée · Sans discontinuité · Reconnue comme obligatoire" },
  { f: "f4", r: "Originaire vs dérivé", v: "Originaire : initial, inconditionné.\nDérivé : tire sa source de la Constitution, conditionné." },
  { f: "f4", r: "Art. 89 : les 3 étapes", v: "1. Initiative (PR sur proposition du PM / parlementaires)\n2. Adoption (termes identiques, chaque assemblée)\n3. Approbation (référendum ou Congrès 3/5)" },
  { f: "f4", r: "Limites matérielles à la révision", v: "Forme républicaine (art. 89 al. 5, depuis 1884) + transferts à la Nouvelle-Calédonie (art. 77)" },
  { f: "f4", r: "Limites circonstancielles à la révision", v: "Intérim présidentiel (art. 7) · Art. 16 · Atteinte à l'intégrité du territoire (art. 89 al. 4)" },
  { f: "f4", r: "CC, 6 novembre 1962", v: "Le CC se déclare incompétent pour contrôler les lois référendaires." },
  { f: "f5", r: "Marbury v. Madison", v: "24 février 1803 : la Cour suprême se reconnaît compétente pour contrôler les lois." },
  { f: "f5", r: "Les 4 caractéristiques d'un contrôle", v: "Moment (a priori / a posteriori)\nOrgane (centralisé / diffus)\nDéclenchement (action / exception)\nSubstance (abstrait / concret)" },
  { f: "f5", r: "Pourquoi le contrôle est arrivé tard en France (3 raisons)", v: "1. Méfiance envers les juges (Parlements d'Ancien Régime)\n2. Approche institutionnelle (séparation des pouvoirs)\n3. Infaillibilité de la loi → légicentrisme" },
  { f: "f6", r: "Composition du CC", v: "9 nommés, 9 ans, non renouvelable, par tiers tous les 3 ans (3 PR, 3 président AN, 3 président Sénat) + anciens PR de droit." },
  { f: "f6", r: "Garanties d'indépendance du CC", v: "Incompatibilités · Inamovibilité · Mandat non renouvelable" },
  { f: "f6", r: "Les 3 dates de la montée en puissance du CC", v: "1971 (Liberté d'association) · 1974 (60 parlementaires) · 2008 (QPC)" },
  { f: "f6", r: "QPC : le parcours", v: "Juge du fond (3 conditions) → Cass. ou CE (3 mois) → CC (3 mois)" },
  { f: "f6", r: "QPC : 3 conditions du juge du fond", v: "1. Applicable au litige\n2. Pas déjà déclarée conforme\n3. Pas dépourvue de caractère sérieux" },
  { f: "f6", r: "PFRLR : 3 critères", v: "1. Pouvoirs publics, droits et libertés ou souveraineté\n2. Loi républicaine antérieure à 1946\n3. Jamais dérogé" },
  { f: "f6", r: "Bloc de constitutionnalité", v: "Constitution 1958 + DDHC 1789 + Préambule 1946 + Charte de l'environnement 2005 + PFRLR, OVC, principes à valeur constitutionnelle" },
  { f: "f6", r: "Gouvernement des juges : 4 réponses", v: "1. Pas d'autosaisine, pouvoir d'empêcher\n2. Interprétation inhérente au juge\n3. Le politique a le dernier mot (révision)\n4. Pas de contrôle des lois constitutionnelles" },
  { f: "f7", r: "Art. 3 al. 1", v: "La souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum." },
  { f: "f7", r: "Populaire vs nationale", v: "Rousseau : peuple concret, électorat-droit, démocratie directe, mandat impératif.\nSieyès : nation abstraite, électorat-fonction, représentatif, mandat représentatif." },
  { f: "f8", r: "Étapes vers l'universalité du suffrage", v: "1944 femmes · 1974 18 ans · 1992 citoyens UE aux municipales" },
  { f: "f9", r: "Le RIP en chiffres", v: "1/5 des parlementaires (185) + 1/10 des inscrits (≈ 5 M) · 9 mois de collecte · 6 mois d'examen" },
  { f: "f9", r: "Les 4 référendums gaulliens", v: "1961 Algérie · avril 1962 Évian · oct. 1962 SUD · 1969 non → démission" },
  { f: "f10", r: "Parrainages présidentiels", v: "500 élus · ≥ 30 départements · ≤ 50 par département" },
  { f: "f10", r: "Taux de participation", v: "Votants ÷ inscrits" }
];
