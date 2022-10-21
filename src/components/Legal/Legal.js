import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const menuArray = [
  { title: "Définitions" },
  { title: "Champ d'application" },
  { title: "Nom de domaine & Hebergement" },
  { title: "Droit de publicité" },
  { title: "Cahier des charges & Devis" },
  { title: "Engagements du client" },
  { title: "Engagement du prestataire" },
  { title: "Commande" },
  { title: "Délai de rétractation" },
  { title: "Modification ou annulation de commande" },
  { title: "Délai de livraison" },
  { title: "Garantie" },
  { title: "Contrat de maintenance" },
  { title: "Non souscription au service de maintenance" },
  { title: "Gestion du site par le client" },
  { title: "Tarifs et paiement" },
  { title: "Reponsabilité" },
  { title: "Incapacité de travail" },
  { title: "Force majeur" },
  { title: "Confidentialité" },
  { title: "Propriété intellectuelle" },
  { title: "Droit Applicable et Attribution de juridiction" },
];
const articleArray = [
  {
    title: "Définitions",
    content: [
      "Le 'PRESTATAIRE' désigne RDEVS, entreprise individuelle, SIRET : 91527835200017",
      "La mention 'client' désigne toute personne physique majeure ou personne morale, sollicitant les services du PRESTATAIRE. La personne ou l’entreprise signataire des présentes Conditions Générales de Vente (signature accompagnée de la mention BON POUR ACCORD sur le devis) se porte garante du paiement des factures même établies au nom d’un tiers.",
    ],
  },
  {
    title: "Champ d'application",
    content: [
      "Le PRESTATAIRE propose des services de création, réalisation, refonte et maintenance de site internet. Il propose aussi des prestations de référencement internet. Enfin, il propose aussi des prestations photos et de graphismes (logo, documents pour le print)",
    ],
  },
  {
    title: "Nom de domaine & Hébergement",
    content: [
      "Les prestations de création ou de refonte de site web s’entendent hors achat de nom de domaine et hébergement, ils sont à la charge du CLIENT. Le PRESTATAIRE peut proposer au CLIENT de les réserver chez son partenaire, mais le CLIENT reste libre du choix de son registrar/hébergeur. Si le CLIENT le souhaite, le PRESTATAIRE peut cependant prendre propriété du domaine et de l’hébergement, le CLIENT en sera alors informé.",
    ],
  },
  {
    title: "Droit de publicité",
    content: [
      "Le CLIENT autorise le PRESTATAIRE à citer son nom et sa dénomination sociale ainsi que son URL, les copies d’écran de ses pages Web, à titre de références pour la promotion commerciale du PRESTATAIRE.",
      "Le CLIENT est informé qu’un lien vers son site sera réalisé depuis le site du PRESTATAIRE.",
      "Le CLIENT accepte de faire figurer en bas de chaque page de son site internet la mention discrète « Site réalisé par RDEVS » accompagné d’un lien pointant vers www.rdevs.fr et d’un logo.",
    ],
  },
  {
    title: "Cahier des charges et devis",
    content: [
      "CAHIER DES CHARGES",
      "Il est conseillé au CLIENT de remettre un cahier des charges au PRESTATAIRE, à propos du site internet qu’il souhaite créer et de le rédiger avec le plus de détails possibles. Une fois approuvé par les deux parties, ce cahier des charges ne sera plus modifié et constituera une base pour l’établissement du devis par le PRESTATAIRE.",
      "DEVIS",
      "Il est conseillé au CLIENT de remettre un cahier des charges au PRESTATAIRE, à propos du site internet qu’il souhaite créer et de le rédiger avec le plus de détails possibles. Une fois approuvé par les deux parties, ce cahier des charges ne sera plus modifié et constituera une base pour l’établissement du devis par le PRESTATAIRE.",
      "Le devis est envoyé par e-mail au CLIENT au format PDF. L’acceptation du devis signifie que le CLIENT a bien compris toutes les prestations proposées.",
      "Le devis est valable 30 jours à compter de sa date d’émission et n’engage pas le CLIENT tant que celui-ci n’a pas confirmé avoir accepté l’offre proposée. Passé ce délai, le PRESTATAIRE est autorisé à modifier le prix. Les prix convenus verbalement ou publiés sur le site internet www.rdevs.fr n’engagent le PRESTATAIRE que s’ils ont été confirmés par une offre écrite par PDF ou par courriel.",
      "En cas d’acceptation, le CLIENT devra imprimer ou scanner le devis PDF, le signer, apposer la date et la mention manuscrite « BON POUR ACCORD ». Tout devis signé par le CLIENT vaut Bon de commande. Le devis signé doit être envoyé par courrier postal ou par e-mail à l’adresse du PRESTATAIRE avec le règlement de l’acompte, par chèque ou virement, d’un montant de 50 % de la somme totale, sauf autres conditions mentionnées dans le devis.",
      "Le devis accepté et signé par le CLIENT engage les deux parties.",
    ],
  },
  {
    title: "Engagement du client",
    content: [
      "ACCÈS",
      "Le CLIENT fournit au PRESTATAIRE l’ensemble des informations requises pour assurer l’exécution des prestations prévues dans le présent contrat, comme les accès à son serveur afin que le PRESTATAIRE puisse installer le site internet.",
      "CONTENUS",
      "Le CLIENT s’engage à fournir tous les contenus : textes, images, vidéos ou medias nécessaires aux prestations, et à collaborer avec le PRESTATAIRE en mettant à sa disposition tout document ou information qui pourrait être demandé par le PRESTATAIRE. Tous les contenus de textes et médias sont à fournir par le CLIENT avant le commencement des travaux et dans leur intégralité.",
      "DÉLAI DE FOURNITURE DES CONTENUS",
      "Le CLIENT s’engage à fournir au PRESTATAIRE, sous un délai de deux (2) mois après la date de l’acceptation de l’offre, tous les éléments nécessaires à la réalisation du devis accepté. Passé ce délai, la facture finale sera majorée d’un supplément de 5% de son montant total par tranches de deux (2) mois écoulés. Par exemple, si le CLIENT fournit ses éléments six (6) mois écoulés après la date de la signature du devis, la facture définitive sera majorée de 15%.",
      "PROPRIÉTÉ INTELLECTUELLLE",
      "Le CLIENT doit impérativement s’assurer qu’il est propriétaire de tous les droits de propriété intellectuelle afférents à ces éléments ainsi qu’aux autres documents de toute nature présents sur son site internet et que les ressources fournies ne sont pas susceptibles de porter atteinte aux droits des tiers.",
      "Le CLIENT est informé que les publications constituent notamment des œuvres de l’esprit protégées par les droits d’auteurs au sens de l’article L 112-2 1er et 2ème du Code de la Propriété Intellectuelle. Le CLIENT s’engage en conséquence à faire figurer sur les pages de son site internet l’identité et l’adresse du propriétaire ou de l’auteur des textes et/ou images reprises et à effectuer toutes les demandes nécessaires, conformément à la loi française en vigueur.",
      "Le CLIENT s’engage à ne fournir au PRESTATAIRE que des documents réels et représentatifs de son entreprise et non des ressources en provenance de la concurrence.",
      "SAUVEGARDE DES CONTENUS",
      "Le CLIENT s’engage à conserver l’intégralité des originaux de toutes les ressources fournies au PRESTATAIRE qui ne pourra être tenu pour responsable en cas de perte lors de modification du site internet par le PRESTATAIRE ou par toute autre personne",
      "INFORMATIQUE ET LIBERTÉS",
      "Le CLIENT s’engage à respecter les dispositions relatives aux mentions légales obligatoires à insérer sur son site internet en vertu de la loi du 30 septembre 1986 modifiée et celles relatives à l’informatique, aux fichiers et aux libertés, en particulier celles relatives aux déclarations des traitements automatisés d’informations nominatives auprès de la Commission Nationale de l’Informatique et des Libertés (C.N.I.L.).",
      "PAIEMENT",
      "Le CLIENT s’engage à régler les sommes dues dans les délais indiqués à la commande.",
    ],
  },
  {
    title: "Engagement du prestataire",
    content: [
      "Dans le cadre d’une obligation de moyen dans l’exécution du contrat,le PRESTATAIRE s’engage à :",
      "- Réaliser les prestations, conformément au devis accepté par le CLIENT",
      "- Apporter tout le soin nécessaire à la mise en œuvre d’un service de qualité ; Informer régulièrement le CLIENT sur l’avancée de la réalisation du contrat",
      "- Préserver la confidentialité de toutes les informations et documents qu’il pourrait détenir du fait de l’exécution du présent contrat",
      "- Assurer la confidentialité des informations hébergées et à ne les communiquer à aucun tiers, même si le présent contrat arrive à son terme ou se trouve résilié.",
    ],
  },
  {
    title: "Commande",
    content: [
      "CONCLUSION DU CONTRAT",
      "Le CLIENT reconnaît avoir reçu du PRESTATAIRE toutes les informations et conseils qui lui étaient nécessaires pour souscrire le contrat. Ainsi, les choix effectués par le CLIENT lors de sa commande ou ultérieurement demeurent sous son entière responsabilité. Le contrat est considéré comme conclu à réception du devis signé par le CLIENT avec la mention manuscrite « BON POUR ACCORD » et de l’acompte. Le début des travaux ne sera enclenché qu’après encaissement de l’acompte.",
      "Le CLIENT est tenu de relire très attentivement ses textes avant de les transmettre au PRESTATAIRE (orthographe, majuscules, singulier/pluriel, tournures de phrases…). A la livraison de la prestation, si les modifications demandées par le CLIENT sur les contenus s’avéraient importants, le PRESTATAIRE se réserve le droit de facturer un supplément au prorata du temps supplémentaire passé, après en avoir averti le CLIENT par courriel.",
      "Dans le cas où des modifications, retouches et autres prestations prévues au devis devaient engendrer un temps de réalisation excessif par rapport au délai normalement nécessaire, comme par exemple l’exploitation des fichiers et documents fournis par le CLIENT, une majoration au tarif horaire sera appliquée au prorata du temps passé.",
      "LIVRAISON ET ACHÈVEMENT DES TRAVAUX",
      "Le PRESTATAIRE informera le CLIENT par courriel de la fin des prestations.",
    ],
  },
  {
    title: "Délai de rétractation",
    content: [
      "CLIENT PROFESSIONNELS",
      " Le droit de rétraction entre professionnels est applicable uniquement lorsque les trois conditions suivantes sont respectées :",
      "- le contrat doit être conclu hors établissement",
      "- l’objet du contrat ne doit pas entrer dans le champ d’activité principale de l’entreprise",
      "le nombre de salariés de l’entreprise doit être inférieur ou égal à cinq.",
      "CLIENTS PARTICULIERS",
      "Le délai de rétractation est applicable pour les clients dits « particuliers », personnes physiques ne disposant pas de numéro de SIREN/SIRET et faisant appel au PRESTATAIRE à titre personnel",
      "Dans ce cas, le CLIENT dispose d’un délai de rétractation de quatorze (14) jours ouvrables à partir de l’acceptation de l’offre. Le jour, qui sert de point de départ, ne compte pas. Lorsque le délai s’achève un samedi, un dimanche ou un jour férié ou chômé, il est prolongé jusqu’au premier jour ouvrable suivant.",
      "Ce droit de rétractation s’effectue par courrier adressé au PRESTATAIRE en recommandé avec accusé de réception et donne droit pour le CLIENT au remboursement des sommes déjà versées par lui dans un délai de quatorze (14) jours à compter de la réception de l’avis.",
      "Au-delà de ce délai de rétractation, la commande ne peut plus être annulée et la somme est due de plein droit, productive d’intérêts au taux légal en vigueur.",
    ],
  },
  {
    title: "Modification ou annulation de commande",
    content: [
      "Toute modification ou annulation de prestation par le CLIENT donnera lieu à un courriel de confirmation de la part du PRESTATAIRE.",
      "MODIFICATION",
      "La prestation comprend uniquement les services spécifiés dans le devis et approuvés par le CLIENT. Aucun devis ne peut être modifié sans l’accord express de chacune des deux parties. Toute modification ou ajout ultérieur apporté au devis initial fera l’objet d’un nouveau devis et/ou d’une nouvelle facturation.",
      "Toute modification de devis demandée par le CLIENT et approuvée par le PRESTATAIRE pourra donner lieu à des délais de livraison supplémentaires",
      "ANNULATION (hors service de maintenance)",
      "En cas d’annulation des services du PRESTATAIRE par le CLIENT après la signature et la réception du devis/bon de commande et avant le démarrage des travaux, un pourcentage d’un montant de 50 % du montant total de la facture sera demandé à titre de dommages et intérêts et de compensation pour services rendus.",
      "En cas d’annulation des services du PRESTATAIRE par le CLIENT pendant la réalisation des travaux, le PRESTATAIRE se réserve le droit de retenir une somme au prorata des travaux effectués.",
      "Si l’annulation d’une commande ou rupture d’un contrat sont du fait du PRESTATAIRE et ne résultent pas d’un cas de force majeure (coupure du réseau internet, piratage du système du PRESTATAIRE, invalidité, maladie grave,…) et si les raisons de l’annulation n’engagent pas le CLIENT (comportement illicite, défaut de paiement,…), le PRESTATAIRE s’engage à reverser au CLIENT l’intégralité des sommes perçues dans un délai de quatorze (14) jours à compter de la déclaration d’annulation ou de rupture",
    ],
  },
  {
    title: "Delais de livraison",
    content: [
      "PLANING",
      "La durée de réalisation de la prestation sera évaluée lors de l’étude préalable, avec si possible un planning convenu en commun accord entre les parties lors de la phase d’élaboration du cahier des charges.",
      "Toute modification du fait du CLIENT apportée postérieurement à la signature du devis et ayant pour conséquence un surcroît des charges et un allongement du temps prévu initialement fera l’objet d’une réévaluation des délais de livraison.",
      "Le PRESTATAIRE s’engage à respecter au mieux le délai annoncé et à informer régulièrement le CLIENT de l’avancée des travaux.",
      "RETARD DE LIVRAISON",
      "Le délai de livraison ne dépend pas uniquement du PRESTATAIRE mais du CLIENT à qui il appartient de fournir les éléments nécessaires à la réalisation des travaux (documents, codes d’accès au serveur d’hébergement, etc…). Le PRESTATAIRE décline toute responsabilité en cas de retard occasionné par le CLIENT par suite de transmission insuffisante ou tardive de ces éléments.",
      "Le PRESTATAIRE se réserve le droit de suspendre toute commande dans l’attente des éléments du CLIENT devant figurer dans le cadre de celle-ci, sans préjudice ni contrepartie financière et sans que cela ne constitue motif de résiliation de la commande.",
      "Dans le cas où le CLIENT mettrait un temps anormalement long à fournir les éléments nécessaires à la bonne exécution du contrat, le PRESTATAIRE se réserve le droit d’éditer une facture intermédiaire pour les travaux déjà réalisés.",
      "Les retards de livraison ne peuvent justifier l’annulation de la commande par le CLIENT, ni donner lieu au paiement de dommages et intérêts, indemnités ou pénalités.",
    ],
  },
  {
    title: "Garantie",
    content: [
      "La garantie ne porte que sur les prestations décrites dans le contrat/devis signé et accepté par le CLIENT.",
      "VÉRIFICATION DE LA COMMANDE",
      "Le CLIENT doit vérifier le bon fonctionnement de la prestation et transmettre au PRESTATAIRE les dysfonctionnements constatés.",
      "Le PRESTATAIRE s’engage à remédier à tout problème de fonctionnement résultant d’un défaut de conception ou d’exécution de ses prestations.",
      "Toutefois, l’obligation de garantie du PRESTATAIRE est exclue dans les cas constatés de dysfonctionnements suivants :",
      "- dus à une mauvaise utilisation du CLIENT",
      "- suite à une intervention du CLIENT ou d’un tiers autre que le PRESTATAIRE",
      "-  correspondants à une clause de non responsabilité des présentes Conditions de Vente",
      "- suite à une négligence, à un défaut de gestion ou de maintenance du CLIENT",
      "DÉLAI DE GARANTIE",
      "Le CLIENT dispose de vingt et un (21) jours à compter de la mise en ligne officielle de son site internet, et/ou de la livraison d’une prestation annexe, pour faire jouer la présente garantie en cas de dysfonctionnement constaté.",
    ],
  },
  {
    title: "Contrat de maintenance",
    content: [
      "CHAMP D'APPLICATION",
      "Le CLIENT reconnaît avoir vérifié l’adéquation du service à ses besoins et avoir reçu du PRESTATAIRE toutes les informations et conseils qui lui étaient nécessaires pour souscrire au présent engagement de maintenance de son site internet en connaissance de cause.",
      "La maintenance n’assume que les mises à jour des produits installés et ne concerne que le site internet dont les noms de domaine sont précisés dans le contrat.",
      "La maintenance comprend :",
      "- la mise à jour régulière des différentes solutions utilisé dans la réalisation des sites web",
      "- l’optimisation basique de la base de données",
      "- la sauvegarde des pages et de la base de données",
      "- les mesures préventives qui sembleront nécessaires au PRESTATAIRE afin de garantir la stabilité, la cohérence et la sécurité du site sans avoir à obtenir l’accord préalable du CLIENT.",
      "- un forfait annuel d’intervention avec un nombre d’heures précisé",
      "La maintenance n’inclut pas :",
      "- les modifications ou ajout de pages, articles, textes, images, vidéos, sons, etc…lorsque cela dépasse le quota d’heures fixé",
      "- la résolution de problèmes suite à une mauvaise manipulation du CLIENT",
      "- la résolution de problèmes suite à l’ajout d’extensions par le CLIENT",
      "- la résolution de problèmes de sécurité de type intrusions malveillante de tiers, vol et détournements éventuels de mots de passe, site hacké, piraté ...",
      "MODALITÉS D'INTERVENTION",
      "Lorsque le contrat de maintenance est souscrit par le CLIENT, le PRESTATAIRE ira visiter au minimum une (1) fois par mois l’espace d’administration de son site internet afin de procéder aux vérifications préventives. Les mises à jour incluses dans la maintenance se feront au moment le plus adéquat, jugé par le PRESTATAIRE et dans l’intérêt du site internet du CLIENT.",
      "DURÉE DU CONTRAT ET RECONDUCTION",
      "Le contrat de maintenance est conclu pour une durée de un (1) an et n’est pas reconductible automatiquement à l’échéance de celui-ci. A la fin du contrat, le PRESTATAIRE se réserve le droit de proposer un nouveau devis avec ses nouvelles tarifications ou de ne pas reconduire le contrat. Le CLIENT n’est nullement tenu de reconduire un contrat de maintenance avec le PRESTATAIRE. Pour procéder à la reconduction du contrat, le PRESTATAIRE notifiera par courriel le CLIENT selon la date anniversaire du renouvellement.",
      "RÉSILIATION DU SERVICCE DE MAINTENANCE",
      "Le contrat de maintenance ne peut être résilié avant l’échéance du terme, à l’initiative de l’une des parties sans le consentement de l’autre partie, sauf en cas de force majeure. En cas de consentement mutuel de résiliation de contrat, le CLIENT ne pourra prétendre au remboursement par le PRESTATAIRE des sommes déjà versées.",
      "DÉFAUT DE PAIEMENT",
      "A défaut de l’entier paiement du prix du renouvellement fixé dans le tarif, le PRESTATAIRE ne pourra effectuer le renouvellement demandé par le CLIENT. Le CLIENT recevra un courriel de notification de fermeture de la maintenance à la date d’anniversaire de celle-ci. L’arrêt définitif de la maintenance interviendra à J + 15 jours selon la date anniversaire du renouvellement et le CLIENT recevra un courriel pour l’informer de l’arrêt de la maintenance pour défaut de paiement.",
      "Si le CLIENT souhaitait réactiver la maintenance après J + 15 jours, un supplément pour interruption de service sera appliqué. Le contrat de maintenance sera remis en service, une fois toutes les sommes perçues par le PRESTATAIRE (prix du contrat de maintenance auquel s’ajoutera le supplément pour interruption de service).",
      "FORCE MAJEURE",
      "En cas de force majeure dans les conditions prévues à l’article 19 des présentes Conditions Générales de Vente, chaque partie peut résilier de plein droit et sans indemnité le contrat de maintenance.",
      "NON-RESPECT DES OBLIGATIONS DU CLIENT",
      "Le non-respect par le CLIENT de ses responsabilités, entraînera le droit pour le PRESTATAIRE d’interrompre sans délai et sans mise en demeure préalable les services du CLIENT et de résilier immédiatement et de plein droit le contrat de maintenance, sans préjudice du droit à tous dommages-intérêts auxquels le PRESTATAIRE pourrait prétendre. Dans ces hypothèses, le CLIENT ne pourra prétendre au remboursement par le PRESTATAIRE des sommes déjà versées.",
      "A L'INITIATIVE DU PRESTATAIRE",
      "Le PRESTATAIRE pourra mettre fin au contrat arrivé à son terme par courriel, sous réserve d’un préavis de deux (2) mois avant la date anniversaire, sans justification à donner et sans droit à indemnités. Le CLIENT ne pourra prétendre au remboursement des sommes déjà versées.",
      "Si le PRESTATAIRE résilie le contrat suite au non-respect des obligations du CLIENT et ayant entraîné préjudice pour le PRESTATAIRE, celui-ci se réserve le droit de poursuivre le CLIENT pour obtenir la réparation complète de ce préjudice et notamment le remboursement de dommages et intérêts, pénalités, frais, honoraires exposés par le PRESTATAIRE.",
      "MISE À JOUR DES DONNÉES PERSONNELLES",
      "Le CLIENT s’engage à informer le PRESTATAIRE de toute modification concernant sa situation (notamment changement d’adresse, électronique ou autre…) au plus tard dans le mois de ce changement, sauf pour le changement de l’adresse de messagerie, dont la modification devra être transmise dans les 48 heures à compter de son utilisation.",
    ],
  },
  {
    title: "Non-souscription au service de maintenance",
    content: [
      "CHAMP D'APPLICATION",
      "Si un contrat de maintenance n’est pas pris ou reconduit par le CLIENT, la responsabilité du PRESTATAIRE envers le site internet du CLIENT est totalement dégagée.",
      "Les mises à jour des outils utilisé ainsi que des modules installés sur le site internet deviennent à la charge du CLIENT. Etant donné que le CLIENT devient le seul administrateur de son site internet et qu’il peut faire des erreurs, la stabilité du site internet n’est pas garantie dans le temps.",
      "LICENCE PREMIUM",
      "Le CLIENT devra éventuellement acheter les licences premium du thème et des plugins utilisés pour effectuer lui-même leurs mises à jour d’une part et, pour d’autre part, assurer la compatibilité du thème utilisé avec les dernières versions de WordPress.",
      "MOTS DE PASSE",
      "Une fois le contrat achevé et le site internet mis en ligne, et seulement dans le cas où un contrat de maintenance ne serait pas souscrit, il est recommandé au CLIENT de modifier les mots de passe qui donnent accès à son site. Le PRESTATAIRE décline toute responsabilité en cas de dommages subis si le CLIENT n’a pas changé ses codes d’accès.",
      "Une fois le contrat achevé et le site internet mis en ligne, et seulement dans le cas où un contrat de maintenance ne serait pas souscrit, il est recommandé au CLIENT de modifier les mots de passe qui donnent accès à son site. Le PRESTATAIRE décline toute responsabilité en cas de dommages subis si le CLIENT n’a pas changé ses codes d’accès.",
      "Si aucun contrat de maintenance n’était souscrit par le CLIENT et en cas de problème technique ultérieur ou si le site devait être installé à nouveau sur le serveur d’hébergement, un nouveau devis sera établi par le PRESTATAIRE pour résoudre et réparer le problème constaté. Le CLIENT sera libre d’accepter ce devis ou de choisir un autre fournisseur.",
    ],
  },
  {
    title: "Gestion du site par le client",
    content: [
      "FORMATION DE BASE",
      "A la demande du CLIENT, le PRESTATAIRE est en mesure de lui apporter une formation de base à la gestion de son site internet. Cette formation doit permettre au CLIENT de rajouter sur son site des articles, des pages et/ou d’effectuer des modifications de textes, ajout/suppression de photos, etc… En aucun cas, cette formation ne prétend apporter une formation complète à la création et à la gestion de site internet sous WordPress ou aux langages de programmation.",
      "Toute formation de base prévue dans le devis initial devra être effectuée par le CLIENT dans un délai de trois (3) mois après la livraison du site internet. A la demande du CLIENT, le PRESTATAIRE peut lui proposer par la suite d’autres formations complémentaires sur devis..",
      "LIMITE DE RESPONSABILILTÉ",
      "Le PRESTATAIRE n’a aucune obligation de contrôle sur les modifications apportées sur le site internet par le CLIENT ou par toute autre personne ne travaillant pas pour le PRESTATAIRE.",
      "Le CLIENT a une obligation d’auto-contrôle sur les modifications qu’il apporte sur le site internet. Le PRESTATAIRE ne sera en aucun cas responsable de la perte de données suite à une négligence du CLIENT.",
      "En cas de dysfonctionnement du site internet dû à une mauvaise manipulation de la part du CLIENT, le PRESTATAIRE facturera d’office au CLIENT les heures de maintenance qui auront été nécessaires au rétablissement du bon fonctionnement du site.",
      "Le PRESTATAIRE décline toute responsabilité quant au bon maintien du site internet si le CLIENT réalise lui-même les mises à jour de WordPress, du thème et/ou des plugins utilisés. Si le site internet venait à subir quelque dommage suite à l’intervention du CLIENT, le PRESTATAIRE émettra une facture correspondante aux travaux nécessaires pour le bon rétablissement du site internet.",
      "Le CLIENT qui interviendra sur le code source le fera à ses risques et périls et le PRESTATAIRE ne pourra être tenu pour responsable du dysfonctionnement du site.",
      "Le PRESTATAIRE décline toute responsabilité dans le cas où les interventions de maintenance devaient s’avérer impossibles à effectuer du fait de la gravité des dommages subits suite aux modifications faites par le CLIENT sur le site internet.",
    ],
  },
  {
    title: "Tarifs et paiement",
    content: [
      "ENTREPRISE INDIVIDUELLE ET TVA",
      "Déclarés sous le régime de L'entreprise individuelle, les services du PRESTATAIRE ne sont pas soumis à la TVA (TVA non applicable, article 293B du CGI). Les devis et factures émis par le PRESTATAIRE sont par conséquent nets de taxes et rien n’est à ajouter à leur montant.",
      "CHAMP D'APPLICATION",
      "En contrepartie des prestations mentionnées dans le devis accepté par le CLIENT, celui-ci s’engage à payer le PRESTATAIRE du montant des tarifs spécifiés sur le devis. Le CLIENT est seul responsable du paiement de l’ensemble des sommes dues au titre du contrat de prestations de services du PRESTATAIRE.",
      "Les prix des prestations peuvent évoluer à tout moment sauf pour les devis acceptés et retournés au PRESTATAIRE. Les tarifs servant de base de facturation sont des prix unitaires.",
      "Pour les contrats à échéance annuelle de type maintenance, le CLIENT est informé du nouveau tarif dans le 1er courriel de notification du renouvellement, envoyé trente (30) jours avant la date anniversaire. Le CLIENT sera libre de renouveler ou non le contrat.",
      "MODES DE RÈGLEMENT",
      "Le CLIENT professionnel ou non professionnel doit régler le prix selon les spécifications prévues sur le devis, soit par chèque libellé au nom de rdevs, soit par virement bancaire sur le compte du PRESTATAIRE.",
      "Toute contestation ou réserve relative à une facture devra être notifiée au PRESTATAIRE au plus tard dans les cinq (5) jours de sa réception. A défaut, la facture sera considérée comme définitivement acceptée par le CLIENT et la créance correspondante comme incontestable.",
      "MODALITÉS DE PAIEMENT",
      "Lors de l’acception des services, le CLIENT complètera et signera le devis qui fera office de Bon de commande. Les modalités de paiement sont les suivantes :",
      "- Acompte de 50% à la commande",
      "- Le solde à la mise en ligne définitive du site internet, à régler sous quinze (15) jours",
      " Il est possible de mensualiser les paiements ou de convenir d’autres rythmes de paiement (mensualisation), selon les indications stipulées sur le devis.",
      "MAINTENANCE",
      "Règlement à réception de la facture par le CLIENT.",
      "TRANSFERT DE PROPRIÉTÉ",
      "Les travaux réalisés restent l’entière propriété du PRESTATAIRE jusqu’au paiement intégral de la facture correspondante. Le transfert de propriété du PRESTATAIRE vers le CLIENT s’effectue à compter du règlement du solde restant dû par le CLIENT.",
      "RETARD DE PAIEMENT",
      "Tout retard de paiement au-delà de quinze (15) jours à compter de la date d’émission de la facture entraînera de plein droit, conformément à la loi, des pénalités de retard égales à 10% du montant de la facture.",
      "Le point de départ des pénalités de retard est le lendemain de l’échéance.",
      "Le point d’arrivée du calcul des pénalités est constitué par la date du règlement de la facture. Le CLIENT doit procéder au règlement des pénalités de retard en même temps que le règlement de sa facture. Les pénalités de retard sont dues et sont exigibles dès lors que le CLIENT n’a pas procédé au règlement de sa facture à l’échéance. Le PRESTATAIRE n’a pas à informer le CLIENT de l’application et de l’exigibilité des pénalités de retard, celles-ci s’appliquent de plein droit.",
      "Tout CLIENT professionnel en situation de retard de paiement est redevable à l’égard du PRESTATAIRE d’une indemnité forfaitaire pour frais de recouvrement de 40 euros en plus des pénalités de retard. Dans l’hypothèse où les frais de recouvrement exposés seraient supérieurs au montant de la pénalité forfaitaire, le PRESTATAIRE pourra demander une indemnisation complémentaire sur justification.",
      "Le PRESTATAIRE se réserve de plein droit la faculté de suspendre les travaux en cours jusqu’à règlement complet de la facture impayée sans que cette inexécution lui soit imputable.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "CHAMP D'APPLICATION POUR LES SITES INTERNET",
      "Seul le CLIENT est dit « responsable » de son site internet et ce dès la mise en ligne. La responsabilité du PRESTATAIRE sera en conséquence entièrement dégagée à partir de la livraison du site internet.",
      "Le CLIENT est propriétaire du site internet et est libre de la gestion du contenu et de l’administration. Le CLIENT déclare accepter les caractéristiques et les limites de l’Internet et reconnaît en particulier les points suivants : les données circulant sur l’Internet ne sont pas protégées, notamment contre des détournements éventuels.",
      "Le PRESTATAIRE ne pourra en aucun cas être tenu pour responsable de problèmes liés à l’hébergement.",
      "Le PRESTATAIRE exécutera ses prestations en respectant les règles de l’art en usage dans la profession. Il est expressément spécifié que le PRESTATAIRE n’est pas tenu par une obligation de résultat mais par un engagement de moyens.",
      "CONTENU DU SITE INTERNET",
      "Le CLIENT est seul responsable des propos et des contenus de son site internet, de l’ensemble des informations communiquées, de leur exploitation et de leur mise à jour, ainsi que de tous fichiers, notamment fichiers d’adresses. En conséquence, le PRESTATAIRE ne saurait être tenu pour responsable du contenu des informations transmises, diffusées ou collectées, de leur exploitation et de leur mise à jour, ainsi que de tous fichiers, notamment fichiers d’adresses et ce, à quelque titre que ce soit.",
      "Avant de transmettre un élément graphique ou textuel au PRESTATAIRE pour la bonne réalisation du contrat, le CLIENT doit s’assurer qu’il dispose de tous les droits de reproduction et d’utilisation de cet élément. Seule la responsabilité du CLIENT est engagée à ce titre.",
      "Le CLIENT est civilement et pénalement responsable de la moralité, du respect des lois et règlements notamment en matière de protection des mineurs et du respect de la personne humaine ainsi que de ses données personnelles et des droits des tiers notamment en matière de propriété intellectuelle ainsi que de l’ensemble des données communiquées. Le CLIENT s’engage à respecter les principes universels d’usage de l’Internet.",
      "Le CLIENT s’engage à ne pas proposer de pages, textes, images, sons, vidéos ou autres animations non conformes à la législation française. Le CLIENT s’engage à ne pas utiliser de lien hypertexte pointant vers des sites ou des pages allant à l’encontre des lois françaises ou internationales ou pouvant nuire à l’image du PRESTATAIRE.",
      "LÉGALITÉ",
      "Le CLIENT ne doit pas, de quelque manière que ce soit, par exemple par des bandeaux publicitaires, porter atteinte à la loi, à l’ordre public, aux bonnes mœurs et/ou aux droits des tiers (droit des marques, droit d’auteur, protection des mineurs, protection des bases de données, etc…). Le CLIENT s’engage notamment à ne pas proposer de contenus à caractère pornographique, ni proposer ou laisser proposer des prestations commerciales qui ont un caractère pornographique et/ou érotique ou manifestement illicite ou attentatoire à l’ordre public (violence, incitation à la haine raciale, fourniture de produits ou services strictement prohibés sur le territoire, etc…).",
      "Le PRESTATAIRE décline toute responsabilité légale et morale si le CLIENT a trompé le PRESTATAIRE quant au futur contenu du site contraire aux bonnes mœurs ou à contenu illégal, que ce soit en cours de mission ou après. Si un CLIENT commande un tel service à l’insu du PRESTATAIRE, le PRESTATAIRE se réserve le droit de divulguer toute information à la police et à la Justice. Le CLIENT sera tenu au versement immédiat d’une pénalité contractuelle de 3800 (trois mille huit cents) EUR par violation constatée, ce versement n’étant pas exclusif d’une demande judiciaire de dommages et intérêts. Il est précisé que le CLIENT devra payer autant de fois la pénalité que le nombre de violations éventuellement constatées. Le CLIENT sera tenu d’enlever sans délai toute référence au PRESTATAIRE sur son site internet.",
      "PRÉJUDICES INDIRECTS",
      "En aucun cas, la responsabilité du PRESTATAIRE ne pourrait être engagée pour les préjudices indirects, tels que les préjudices financiers ou commerciaux, perte de commandes, perte de données, manque à gagner, atteinte à l’image de marque, perte de bénéfices ou de clients (par exemple, divulgation inopportune d’informations confidentielles les concernant par suite de défectuosité ou de piratage du système).",
      "Le PRESTATAIRE ne saurait-être tenu pour responsable d’éventuelles pertes d’exploitation résultant d’une indisponibilité temporaire ou permanente, partielle ou totale d’une boutique de commerce électronique.",
      "INFORMATIONS LÉGALES",
      "La responsabilité du PRESTATAIRE ne saurait en aucun cas être engagée en cas de non respect par le CLIENT des autorisations légales et réglementaires, notamment en ce qui concerne le traitement des données.",
      "La rédaction de « mentions légales », de « conditions d’utilisation », de « conditions générales de ventes » (…), au même titre que tout contenu ne rentre pas dans le cadre du contrat. En aucun cas, la responsabilité du PRESTATAIRE ne pourra être engagée pour défaillance ou manquement de mise en ligne de contenu à caractère contractuel par le CLIENT.",
      "PROTECTION DES DONNÉES",
      "Le PRESTATAIRE décline toute responsabilité en cas d’intrusions malveillantes de tiers sur le site internet et/ou dans les boîtes aux lettres électroniques du CLIENT ; de vol et détournements éventuels de mots de passe, codes confidentiels, et plus généralement de toute information à caractère sensible pour le CLIENT ; de contamination par virus des données et/ou logiciels du CLIENT (il est rappelé que la protection de ceux-ci incombe au CLIENT) ; de dommages que pourraient subir les équipements du CLIENT, le PRESTATAIRE n’ayant aucune intervention à faire sur ceux-ci.",
      "INTERRUPTION POUR MAINTENANCE",
      "Dans le cadre d’un service de maintenance, le PRESTATAIRE se réserve le droit d’interrompre temporairement l’accessibilité au site internet sans droit à indemnités. Cependant, le PRESTATAIRE s’engage à mettre en œuvre tous les moyens dont il dispose pour minimiser ce type d’interruption. Le PRESTATAIRE est non responsable de la perte derevenus due à une interruption ou une défaillance de service.",
      "LIMITES DE RESPONSABILITÉ : THÈME ET PLUGINS",
      "Le PRESTATAIRE décline toute responsabilité en cas d’utilisation d’un thème premium ou gratuit qui ne serait plus développé par la suite et qui serait devenu incompatible avec la dernière version de WordPress. Dans ce cas précis, la maintenance du thème ne pourra plus se faire par le PRESTATAIRE, sans droit à indemnités. En tout état de cause, le PRESTATAIRE pourra proposer au CLIENT un nouveau devis pour l’installation d’un autre thème.",
      "Les réalisations du PRESTATAIRE utilisent des logiciels développés par des tiers tel que WordPress, des plugins, un thème gratuit ou premium. En aucun cas, le PRESTATAIRE ne peut être tenu pour responsable des anomalies, bugs ou dysfonctionnement des ces outils qui demeurent sous la responsabilité de leurs auteurs, pas plus que des services éventuellement associés (réseaux sociaux, etc…). La mise à jour de WordPress et des modules sont sous la responsabilité du CLIENT, sauf si celui-ci a souscrit un contrat de maintenance.",
      "Le PRESTATAIRE prend à sa charge les premiers frais inhérents au thème et aux plugins premium sous licence payante. Le renouvellement de ces licences est normalement inclus dans le cadre d’un contrat de maintenance annuel, exception faite de modifications ultérieures des conditions de vente du fournisseur du thème ou du plugin, engendrant une augmentation excessive des frais d’abonnement annuel. Dans ces conditions, le PRESTATAIRE ne renouvellera pas la licence concernée et ne pourra être tenu pour responsable. Le CLIENT, prévenu par le PRESTATAIRE des modifications de vente du fournisseur, sera seul responsable de renouveler à ses frais la ou les licences. En tout état de cause, le PRESTATAIRE pourra proposer au CLIENT un nouveau devis pour l’installation d’un autre thème ou plugin.",
      "LIMITE DE RESONSABILITÉ : INTERNET ET FAI",
      "Le PRESTATAIRE ne peut être tenu responsable de la perte de données sur les serveurs d’hébergement. Cependant le PRESTATAIRE s’engage à tout mettre en œuvre pour sécuriser les données du CLIENT dans la limite de son champ d’action. Il s’agit ici d’une obligation de moyens et non de résultats.",
      "Le PRESTATAIRE ne serait être tenu pour responsable du non-respect total ou partiel d’une obligation du CLIENT et/ou d’une défaillance des opérateurs des réseaux de transport vers le monde Internet et en particulier de son ou ses fournisseurs d’accès. A ce titre, le PRESTATAIRE informe le CLIENT que ses prestations sont indépendantes d’autres opérateurs techniques et que sa responsabilité ne peut être engagée par leur défaillance.",
      "DOMMAGES ET INTERÊTS",
      "Le CLIENT s’engage à prendre à sa charge toute réclamation et/ou procédure quelle qu’en soit la forme, l’objet ou la nature qui serait formée contre le PRESTATAIRE et qui se rattacherait aux obligations mises à la charge du CLIENT au titre du présent contrat.",
      "En tout état de cause, le montant des dommages-intérêts qui pourraient être mis à la charge du PRESTATAIRE, si sa responsabilité était engagée, sera limité au montant des sommes effectivement versées par le CLIENT au PRESTATAIRE pour la période considérée ou facturée au CLIENT par le PRESTATAIRE ou au montant des sommes correspondant au prix de la prestation, pour la part du service pour laquelle la responsabilité du PRESTATAIRE a été retenue. Sera pris en considération le montant le plus faible de ces sommes.",
    ],
  },
  {
    title: "Incapacité de travail",
    content: [
      "Le PRESTATAIRE se doit d’avertir le CLIENT dès le premier jour ouvrable de son incapacité.",
      "En cas d’incapacité de travail, par suite de maladie ou d’accident, le PRESTATAIRE se réserve le droit rompre les contrats en cours, et/ou modifier le calendrier en cours sans qu’il ne puisse être exigé par le  CLIENT le versement d’indemnités.",
    ],
  },
  {
    title: "Force majeur",
    content: [
      "CHAMP D'APPLICATION",
      "Toutes circonstances indépendantes de la volonté des parties, empêchant l’exécution dans des conditions normales de leurs obligations, sont considérées comme des causes d’exonération des obligations des parties et entraînent leur suspension.",
      "La partie qui invoque les circonstances visées ci-dessus doit avertir immédiatement l’autre partie de leur survenance, ainsi que de leur disparition.",
      "CAS DE FORCE MAJEUR ET RESPONSABILITÉS",
      "Aucune des deux parties ne sera tenue pour responsable vis-à-vis de l’autre de la non-exécution ou des retards dans l’exécution d’une obligation du contrat qui seraient dus au fait de l’autre partie consécutivement à la survenance d’un cas de force majeure habituellement reconnu par la jurisprudence et les tribunaux français.",
      "Aucune des deux parties ne sera tenue pour responsable vis-à-vis de l’autre de la non-exécution ou des retards dans l’exécution d’une obligation du contrat qui seraient dus au fait de l’autre partie consécutivement à la survenance d’un cas de force majeure habituellement reconnu par la jurisprudence et les tribunaux français.",
      "Constitue un cas de force majeure tout événement hors de contrôle, inévitable et indépendant de la volonté des parties dont le blocage des moyens de transports ou d’approvisionnements, tremblements de terre, incendies, tempêtes, inondations, foudre, panne d’électricité, l’arrêt des réseaux de télécommunication ou difficultés propres aux réseaux de télécommunication externes au CLIENT…",
    ],
  },
  {
    title: "Confidentialité",
    content: [
      "Chacune des parties s’engage à conserver confidentiels, pendant la durée du contrat et après son expiration, l’ensemble des informations, documents, savoir-faire, base de données, mots de passe et codes confidentiels en provenance de l’autre partie dont elle pourrait avoir eu connaissance à l’occasion de l’exécution du contrat, et ne devra les divulguer à quelques tiers que ce soit, ni les utiliser en dehors des besoins du contrat.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "La propriété intellectuelle des créations réalisées par le PRESTATAIRE est transférée au CLIENT dès réception et encaissement du paiement effectif et intégral de la prestation.",
    ],
  },
  {
    title: "Droit applicable et attribution de juridiction",
    content: [
      "La loi française est seule applicable aux présentes Conditions Générales de Vente. En cas de litige survenant à l’occasion du contrat, tout différent lié à son interprétation, son exécution ou sa validité, et éventuellement après une tentative de recherche d’une Commerce de Gap (05).",
    ],
  },
];
const drawerWidth = 300;
export default function Legal() {
  return (
    <Box sx={{ display: "flex", overflow: "auto" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          display: { xs: "none", md: "flex" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ margin: "0 auto" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "#fff" }}
              variant="contained"
              startIcon={<ArrowBackIosNewRoundedIcon />}
            >
              revenir sur le site
            </Button>
          </Link>
        </Toolbar>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{ color: "primary.main" }}
            href={"#mentionslegales"}
          >
            <ListItemText primary={"Mentions légales"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <List sx={{ color: "red" }}>
          {menuArray.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ color: "primary.main" }} href={"#" + index}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box p={2} sx={{ maxWidth: "1500px", margin: "0 auto" }}>
          <>
            <Typography
              variant="h3"
              sx={{ marginBottom: "50px" }}
              id="mentionslegales"
            >
              Mentions Légales
            </Typography>
            <Typography paragraph>
              La loi n°2004-575 du 21 juin 2004 pour la confiance dans
              l’économie numérique définit le cadre réglementaire applicable aux
              sites internet. En effet l’article 14 dispose « Le commerce
              électronique est l’activité économique pour laquelle un éperonne
              propose ou assure à distance et par voie électronique la
              fourniture de biens ou de services.
            </Typography>
            <Typography paragraph>
              Entrent également dans le champ du commerce électronique les
              services tels que ceux consistant à fournir des informations en
              ligne, des communications commerciales et des outils de recherche,
              d’accès et de récupérations de données, d’accès à un réseau de
              communication ou d’hébergement d’informations, y compris
              lorsqu’ils ne sont pas rémunérés par ceux qui les reçoivent.
            </Typography>
            <Typography paragraph>
              Une personne est regardée comme étant établie en France au sens du
              présent chapitre lorsqu’elle s’y est installée d’une manière
              stable et durable pour exercer effectivement son activité, quel
              que soit, s’agissant d’une personne morale, le lieu d’implantation
              de son siège social.
            </Typography>
            <Typography paragraph>
              Rdevs est propriétaire des droits de propriété intellectuelle ou
              détient les droits d’usage sur tous les éléments accessibles sur
              le site, notamment les textes, images, graphismes, logo, icônes,
              sons, logiciels. Toute reproduction, représentation, modification,
              publication, adaptation de tout ou partie des éléments du site,
              quel que soit le moyen ou le procédé utilisé, est interdite, sauf
              autorisation écrite préalable de l’association.
            </Typography>
            <Typography paragraph>
              Toute exploitation non autorisée du site ou de l’un quelconque des
              éléments qu’il contient sera considérée comme constitutive d’une
              contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </Typography>
            <Typography paragraph>Propriétaire : Rdevs</Typography>
            <Typography paragraph>
              Responsable publication : Romain Sanieres
            </Typography>
            <Typography paragraph>
              Le responsable publication est une personne physique ou une
              personne morale.
            </Typography>
            <Typography paragraph>Hébergeur : IONOS</Typography>
          </>
          <>
            <Typography variant="h3" sx={{ margin: "50px 0" }}>
              Conditions Générales de Vente
            </Typography>
            <Typography paragraph>
              Ces Condition Générales de Vente décrivent les termes, modalités
              et conditions selon lesquelles RDEVS (ci-après désigné le
              PRESTATAIRE) fournit ses services à ses clients.
            </Typography>
          </>
          {articleArray.map((item, index) => (
            <Box key={index} id={index}>
              <Typography key={index} py={2} variant="h4">
                {item.title}
              </Typography>
              {item.content.map((item, index) => (
                <Typography key={index} paragraph>
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
